package handler

import (
	"app/response"
	"app/service"
	"fmt"
	"net/http"
	"strconv"

	"github.com/labstack/echo"
)

type (
	IRealestate interface {
		Index(c echo.Context) error
		ByLatLon(c echo.Context) error
		ByName(c echo.Context) error
	}

	RealEstate struct {
		realestateService service.IRealestate
		geocodingService service.IGeocoding
	}

	JSONRealEstate struct {
		Realestates *response.RealestateLatLonNames `json:"realestates`
	}

	JSONRealEstateDetail struct {
		RealEstateDetail *response.RealestateDetails `json:"realestates`
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
		return c.JSON(http.StatusBadRequest, "latitude type is invalid")
	}
	longitude, err := strconv.ParseFloat(queryLon, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, "longitude type is invalid")
	}
	geoCode, err := h.geocodingService.GetGeocode(latitude, longitude)
	if err != nil {
		return c.JSON(http.StatusBadRequest, fmt.Sprintf("%v", err))
	}

	prefecture := geoCode.Results[0].AddressComponents[len(geoCode.Results[0].AddressComponents) - 3].LongName
	city := geoCode.Results[0].AddressComponents[len(geoCode.Results[0].AddressComponents) - 4].LongName

	realestates, err := h.realestateService.GetByPreCit(prefecture, city)
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

	return c.JSON(http.StatusOK, &JSONRealEstate{
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