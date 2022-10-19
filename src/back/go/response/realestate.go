package response

import "app/model"

type (
	RealestateLatLonName struct {
		ID string `json:"id"`
		Name string `json:"name"`
		Latitude float64 `json:"latitude"`
		Longitude float64 `json:"longitude"`
	}

	RealestateLatLonNames []RealestateLatLonName
)

func NewRealestateLatLonName(m *model.RealEstate) *RealestateLatLonName {
	if m == nil {
		return nil
	}

	return &RealestateLatLonName{
		ID: m.Id,
		Name: m.Name,
		Latitude: m.Latitude,
		Longitude: m.Longitude,
	}
}

func NewRealestateLatLonNames(m *model.RealEstates) *RealestateLatLonNames {
	ret := RealestateLatLonNames{}
	if m == nil {
		return nil
	}

	for _, v := range *m {
		r := NewRealestateLatLonName(&v)
		if r == nil {
			continue
		}
		ret = append(ret, *r)
	}

	return &ret
}