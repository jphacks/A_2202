package service

import (
	"app/model"
	"app/repository"
)

type (
	IGeocoding interface {
		GetGeocode(lon, lat float64) (*model.Gecode, error)
		GetGeocodeByAdd(addr string) (*model.Gecode, error)
	}

	Geocoding struct {
		geocodingRepository repository.IGeocoding
	}
)

func NewGeocoding() IGeocoding {
	return &Geocoding{
		geocodingRepository: repository.NewGeocoding(),
	}
}

func (s *Geocoding) GetGeocode(lon, lat float64) (*model.Gecode, error) {
	m, err := s.geocodingRepository.Index(lon, lat)
	if err != nil {
		return nil, err
	}

	return m, nil
}

func (s *Geocoding) GetGeocodeByAdd(addr string) (*model.Gecode, error) {
	m, err := s.geocodingRepository.AddressToGecode(addr)
	if err != nil {
		return nil, err
	}

	return m, nil
}