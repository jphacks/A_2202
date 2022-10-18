package service

import (
	"app/model"
	"app/repository"
)

type (
	IGeocodeing interface {
		GetGeocode(lon, lat float64) (*model.Gecode, error)
	}

	Geocoding struct {
		geocodingRepository repository.IGeocoding
	}
)

func NewGeocoding() IGeocodeing {
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