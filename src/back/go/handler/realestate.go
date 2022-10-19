package handler

import (
	"app/model"
	"app/response"
	"app/service"
	"fmt"
	"math"
	"net/http"
	"strconv"

	"github.com/labstack/echo"
)

type (
	IRealestate interface {
		Index(c echo.Context) error
		ByLatLon(c echo.Context) error
		ByName(c echo.Context) error
		ByNear(c echo.Context) error
	}

	RealEstate struct {
		realestateService service.IRealestate
		geocodingService service.IGeocoding
	}

	JSONRealEstates struct {
		Realestates *response.RealestateLatLonNames `json:"realestates`
	}

	JSONRealEstateDetail struct {
		RealEstateDetail *response.RealestateDetails `json:"realestates`
	}

	JSONRealEstateNear struct {
		RealEstateDetail *response.RealestateDetail `json:"realestates`
	}
)

func NewRealestate() IRealestate {
	return &RealEstate{
		realestateService: service.NewRealEstate(),
		geocodingService: service.NewGeocoding(),
	}
}

func (h *RealEstate) Index(c echo.Context) error {
	realestates, err := h.realestateService.GetAll()
	if err != nil {
		return c.JSON(http.StatusBadRequest, fmt.Sprintf("%v", err))
	}
	if len(*realestates) == 0 {
		return c.JSON(http.StatusBadRequest, "realestate is not found")
	}

	return c.JSON(http.StatusOK, realestates)
}

func (h *RealEstate) ByLatLon(c echo.Context) error {
	realestates, err := h.byLatLonRealestats(c)
	if err != nil {
		return c.JSON(http.StatusBadRequest, fmt.Sprintf("%v", err))
	}

	for i, v := range *realestates {
		lagLng, err := h.geocodingService.GetGeocodeByAdd(v.Address)
		if err != nil {
			return c.JSON(http.StatusBadRequest, fmt.Sprintf("%v", err))
		}
		(*realestates)[i].Latitude = lagLng.Results[0].Geometry.Location.Lat
		(*realestates)[i].Longitude = lagLng.Results[0].Geometry.Location.Lng
	}

	return c.JSON(http.StatusOK, &JSONRealEstates{
		Realestates: response.NewRealestateLatLonNames(realestates),
	})
}

func (h *RealEstate) ByName(c echo.Context) error {
	name := c.QueryParam("name")
	if len(name) == 0 {
		return c.JSON(http.StatusBadRequest, "name is required")
	}

	realestates, err := h.realestateService.GetByName(name)
	if err != nil {
		return c.JSON(http.StatusBadRequest, fmt.Sprintf("%v", err))
	}

	return c.JSON(http.StatusOK, &JSONRealEstateDetail{
		RealEstateDetail: response.NewRealEstateDetails(realestates),
	})
}

func (h *RealEstate) ByNear(c echo.Context) error {
	queryLat := c.QueryParam("latitude")
	if len(queryLat) == 0 {
		return c.JSON(http.StatusBadRequest, "latitude is required")
	}
	queryLon := c.QueryParam("longitude")
	if len(queryLon) == 0 {
		return c.JSON(http.StatusBadRequest, "longitude is required")
	}
	latitude, err := strconv.ParseFloat(queryLat, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, fmt.Sprintf("%v", err))
	}
	longitude, err := strconv.ParseFloat(queryLon, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, fmt.Sprintf("%v", err))
	}

	realestates, err := h.byLatLonRealestats(c)
	if err != nil {
		return c.JSON(http.StatusBadRequest, fmt.Sprintf("%v", err))
	}

	(*realestates)[0].Distance = h.byDistance(latitude, longitude, (*realestates)[0].Latitude, (*realestates)[0].Longitude)
	nearRealestate := (*realestates)[0]
	for i, v := range *realestates {
		(*realestates)[i].Distance = h.byDistance(latitude, longitude, v.Latitude, v.Longitude)
		if (*realestates)[i].Distance < nearRealestate.Distance {
			nearRealestate = (*realestates)[i]
		}
	}

	return c.JSON(http.StatusOK, &JSONRealEstateNear{
		RealEstateDetail: response.NewRealEstateDetail(&nearRealestate),
	})
}

func (h *RealEstate) byLatLonRealestats(c echo.Context) (*model.RealEstates, error) {
	queryLat := c.QueryParam("latitude")
	if len(queryLat) == 0 {
		return nil, fmt.Errorf("latitude is required")
	}
	queryLon := c.QueryParam("longitude")
	if len(queryLon) == 0 {
		return nil, fmt.Errorf("longitude is required")
	}
	latitude, err := strconv.ParseFloat(queryLat, 64)
	if err != nil {
		return nil, fmt.Errorf("latitude type is invalid")
	}
	longitude, err := strconv.ParseFloat(queryLon, 64)
	if err != nil {
		return nil, fmt.Errorf("longitude type is invalid")
	}
	geoCode, err := h.geocodingService.GetGeocode(latitude, longitude)
	if err != nil {
		return nil, err
	}

	prefecture := geoCode.Results[0].AddressComponents[len(geoCode.Results[0].AddressComponents) - 3].LongName
	city := geoCode.Results[0].AddressComponents[len(geoCode.Results[0].AddressComponents) - 4].LongName

	realestates, err := h.realestateService.GetByPreCit(prefecture, city)
	if err != nil {
		return nil, err
	}

	return realestates, nil
}

func (h *RealEstate) byDistance(x1, y1, x2, y2 float64) float64 {
	return math.Acos(math.Sin(y1)*math.Sin(y2)+math.Cos(y1)*math.Cos(y2)*math.Cos(x2-x1))
}