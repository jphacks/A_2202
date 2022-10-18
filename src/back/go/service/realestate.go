package service

import (
	"app/model"
	"app/repository"
)

type (
	IRealestate interface {
		GetAll() (*model.RealEstates, error)
		GetByPreCit(prefecture, city string) (*model.RealEstates, error)
	}

	RealEstate struct {
		realEstateRepository repository.IRealestate
	}
)

func NewRealEstate() IRealestate {
	return &RealEstate{
		realEstateRepository: repository.NewRealEstate(),
	}
}

func (s *RealEstate) GetAll() (*model.RealEstates, error) {
	m, err := s.realEstateRepository.All()
	if err != nil {
		return nil, err
	}

	return m, nil
}

func (s *RealEstate) GetByPreCit(prefecture, city string) (*model.RealEstates, error) {
	m, err := s.realEstateRepository.ByPrefecture(prefecture, city)
	if err != nil {
		return nil, err
	}

	return m, nil
}