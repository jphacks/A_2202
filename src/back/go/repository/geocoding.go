package repository

import (
	"app/model"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
)

type (
	IGeocoding interface {
		Index(lon, lat float64) (*model.Gecode, error)
		AddressToGecode(addr string) (*model.Gecode, error)
	}

	Geocoding struct {}
)

func NewGeocoding() IGeocoding {
	return &Geocoding{
	}
}

func (r *Geocoding) Index(lon, lat float64) (*model.Gecode, error) {
	m := &model.Gecode{}
	url := "https://maps.googleapis.com/maps/api/geocode/json"

	req, err := http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		return nil, err
	}

	params := req.URL.Query()
    params.Add("latlng",fmt.Sprintf("%v, %v", lon, lat))
	params.Add("language", "ja")
	apiKey := os.Getenv("GOOGLE_MAP_API_KEY")
	if apiKey == "" {
		return nil, fmt.Errorf("API key not set")
	}
	params.Add("key", apiKey)
    req.URL.RawQuery = params.Encode()

	client := new(http.Client)
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}

	body, _ := io.ReadAll(resp.Body)
	json.Unmarshal(body, &m)

	return m, nil
}

func (r *Geocoding) AddressToGecode(addr string) (*model.Gecode, error) {
	m := &model.Gecode{}
	url := "https://maps.googleapis.com/maps/api/geocode/json"

	req, err := http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		return nil, err
	}

	params := req.URL.Query()
    params.Add("address", addr)
	params.Add("language", "ja")
	apiKey := os.Getenv("GOOGLE_MAP_API_KEY")
	if apiKey == "" {
		return nil, fmt.Errorf("API key not set")
	}
	params.Add("key", apiKey)
    req.URL.RawQuery = params.Encode()

	client := new(http.Client)
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}

	body, _ := io.ReadAll(resp.Body)
	json.Unmarshal(body, &m)

	return m, nil
}