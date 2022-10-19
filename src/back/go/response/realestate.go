package response

import "app/model"

type (
	RealestateLatLonName struct {
		ID string `json:"id"`
		Name string `json:"name"`
		Latitude float64 `json:"latitude"`
		Longitude float64 `json:"longitude"`
	}

	Tranport struct {
		StationName string `json:"station_name"`
		RailroadName string `json:"railroad_name"`
		StationWalkTime float64 `json:"station_walk_time"`
	}

	RealestateDetail struct {
		Id string  `json:"id"`
		Name string `json:"name"`
		PropertyType string `json:"property_type"`
		Price int64 `json:"price"`
		Rent int64 `json:"rent"`
		TransactionContents string `json:"transaction_contents"`
		Area float64 `json:"area"`
		YearBuilds int64 `json:"year_builds"`
		Address string `json:"address"`
		CatchCopy string `json:"catch_copy"`
		RoomCount int64 `json:"room_count"`
		FloorPlan string `json:"floor_plan"`
		Direction string `json:"direction"`
		PropetyStoructure string `json:"propety_storucture"`
		TotalGroundStory int64 `json:"total_ground_story"`
		UnderGroundStory int64 `json:"under_ground_story"`
		TotalUnit int64 `json:"total_unit"`
		Fee int64 `json:"fee"`
		Facility string `json:"facility"`
		Neighbor string `json:"neighbor"`
		CurrentStatus string `json:"current_status"`
		Transportion []Tranport
		Latitude float64 `json:"latitude"`
		Longitude float64 `json:"longitude"`
		Distance float64
	}

	RealestateLatLonNames []RealestateLatLonName

	RealestateDetails []RealestateDetail
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

func NewRealEstateDetail(m *model.RealEstate) *RealestateDetail {
	if m == nil {
		return nil
	}

	return &RealestateDetail{
		Id: m.Id,
		Name: m.Name,
		PropertyType: m.PropertyType,
		Price: m.Price,
		Rent: m.Rent,
		TransactionContents: m.TransactionContents,
		Area: m.Area,
		YearBuilds: m.YearBuilds,
		Address: m.Address,
		CatchCopy: m.CatchCopy,
		RoomCount: m.RoomCount,
		FloorPlan: m.FloorPlan,
		Direction: m.Direction,
		PropetyStoructure: m.PropetyStoructure,
		TotalGroundStory: m.TotalGroundStory,
		UnderGroundStory: m.UnderGroundStory,
		Fee: m.Fee,
		Facility: m.Facility,
		Neighbor: m.Neighbor,
		CurrentStatus: m.CurrentStatus,
		Latitude: m.Latitude,
		Longitude: m.Longitude,
	}
}

func NewRealEstateDetails(m *model.RealEstates) *RealestateDetails {
	ret := RealestateDetails{}
	if m == nil {
		return nil
	}

	for _, v := range *m {
		r := NewRealEstateDetail(&v)
		if r == nil {
			continue
		}
		ret = append(ret, *r)
	}

	return &ret
}