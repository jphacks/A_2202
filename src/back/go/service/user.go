package service

import (
	"app/model"
	"app/repository"
)

type (
	IUser interface {
		GetAllUsers() (*model.Users, error)
	}

	User struct {
		userRepository   repository.IUser
	}
)

func NewUser() IUser {
	return &User{
		userRepository:   repository.NewUser(),
	}
}

func (s *User) GetAllUsers() (*model.Users, error) {
	m, err := s.userRepository.ByIDs([]int64{})
	if err != nil {
		return nil, err
	}

	return m, nil
}
