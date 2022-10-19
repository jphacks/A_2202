package repository

import (
	"app/model"
	"encoding/json"
	"io"
	"net/http"
)

type (
	IRealestate interface {
		All() (*model.RealEstates, error)
		ByPrefecture(prefecture, city string) (*model.RealEstates, error)
		ByName(name string) (*model.RealEstates, error)
	}

	RealEstate struct {}
)

func NewRealEstate() IRealestate {
	return &RealEstate{
	}
}

func (r *RealEstate) All() (*model.RealEstates, error) {
	m := &model.RealEstates{}
	url := "https://jphacks-dev.rcp.ai/v1/buildings"
	headerName := "auth"
	headerValue := "jphacks2022"


	req, err := http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set(headerName, headerValue)

	client := new(http.Client)
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}

	body, _ := io.ReadAll(resp.Body)
	json.Unmarshal(body, &m)

	return m, nil
}

func (r *RealEstate) ByPrefecture(prefecture, city string) (*model.RealEstates, error) {
	m := &model.RealEstates{}
	url := "https://jphacks-dev.rcp.ai/v1/buildings"
	headerName := "auth"
	headerValue := "jphacks2022"


	req, err := http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set(headerName, headerValue)

	params := req.URL.Query()
    params.Add("prefecture", prefecture)
	params.Add("city", city)
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

func (r *RealEstate) ByName(name string) (*model.RealEstates, error) {
	m := &model.RealEstates{}
	url := "https://jphacks-dev.rcp.ai/v1/buildings"
	headerName := "auth"
	headerValue := "jphacks2022"


	req, err := http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set(headerName, headerValue)

	params := req.URL.Query()
	params.Add("property_name", name)
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