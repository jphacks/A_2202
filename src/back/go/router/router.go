package router

import (
	"app/handler"
	"net/http"

	"github.com/labstack/echo"
)

type (
	IV1 interface {
		withNone(e *echo.Echo)
	}

	V1 struct {
		userHandler      handler.IUser
		realestateHandler handler.IRealestate
	}
)

func Init(e *echo.Echo) {
	var r IV1 = &V1{
		userHandler:      handler.NewUser(),
		realestateHandler: handler.NewRealestate(),
	}

	r.withNone(e)

	// 簡易版
	e.GET("/hello", func(c echo.Context) error {
		return c.String(http.StatusOK, "oyasumi dayo")
	})

	e.Logger.Fatal(e.Start(":8080"))
}

func (r V1) withNone(e *echo.Echo) {
	e.GET("/users", r.userHandler.Index)
	e.GET("/realestate", r.realestateHandler.Index)
}
