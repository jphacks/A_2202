package main

import (
	"app/router"
	"net/http"
	"os"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	e := echo.New()
	e.Use(middleware.CORS())
    envs := os.Getenv("ENVS")
    if envs == "prod" {
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
                   "https://naiken-quest.web.app",
               },
            }))
    } else if envs == "dev" {
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
                   "https://localhost:3000",
                   "http://localhost:3000",
               },
            }))
    }
	router.Init(e)
}
