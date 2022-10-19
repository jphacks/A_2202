package util

import (
	"os"

	"github.com/joho/godotenv"
)

func LoadEnv(name string) (string, error) {
	err := godotenv.Load(".env")

	if err != nil {
		return "", err
	}

	return os.Getenv(name), nil
}