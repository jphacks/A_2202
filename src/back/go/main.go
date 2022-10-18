package main

import (
	"app/router"
	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	e := echo.New()
	e.Use(middleware.CORS())
    e.Use(middleware.CORSWithConfig(
        middleware.CORSConfig{
            // Method
            AllowMethods: []string{
                http.MethodGet,
                http.MethodPut,
                http.MethodPost,
                http.MethodDelete,
            },
            // Header
            AllowHeaders: []string{
                echo.HeaderOrigin,
            },
            // Origin
            AllowOrigins: []string{
               "http://localhost:3000",
           },
        }))
	router.Init(e)
}
