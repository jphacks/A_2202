package router

import (
	"app/handler"
	"net/http"
	"os"

	"github.com/labstack/echo"
)

type (
	IV1 interface {
		withNone(e *echo.Echo)
	}

	V1 struct {
		realestateHandler handler.IRealestate
	}
)

func Init(e *echo.Echo) {
	var r IV1 = &V1{
		realestateHandler: handler.NewRealestate(),
	}

	r.withNone(e)

	e.Logger.Fatal(e.Start(":"+os.Getenv("PORT"), nil))
}

func (r V1) withNone(e *echo.Echo) {
	e.GET("/hello", func(c echo.Context) error {
		return c.String(http.StatusOK, "oyasumi dayo")
	})
	// e.GET("/realestate", r.realestateHandler.Index)
	e.GET("/realestate", r.realestateHandler.ByLatLon)
	e.GET("/realestate/detail/str", r.realestateHandler.ByName)
}
