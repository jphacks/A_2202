package handler

import (
	"app/service"
	"fmt"
	"net/http"

	"github.com/labstack/echo"
)

type (
	IRealestate interface {
		Index(c echo.Context) error
	}

	RealEstate struct {
		realestateService service.IRealestate
	}
)

func NewRealestate() IRealestate {
	return &RealEstate{
		realestateService: service.NewRealEstate(),
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