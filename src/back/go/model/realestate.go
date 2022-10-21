package model

type RealEstate struct{
	Id string  `json:"id"`
    Name string `json:"name"`
    PropertyType string `json:"property_type"`
    Price int64 `json:"price"`
    Rent int64 `json:"rent"`
    NetYield float64 `json:"net_yield"`
    SurfaceYield float64 `json:"surface_yield"`
    TransactionContents string `json:"transaction_contents"`
    Area float64 `json:"area"`
    YearBuilds int64 `json:"year_builds"`
    FlorPart int64 `json:"flor_part"`
    Prefecture string `json:"prefecture"`
    City string `json:"city"`
    Region string `json:"region"`
    Address string `json:"address"`
    CatchCopy string `json:"catch_copy"`
    RoomCount int64 `json:"room_count"`
    FlorPlan string `json:"flor_plan"`
    Direction string `json:"direction"`
    PropetyStoructure string `json:"propety_storucture"`
    TotalGroundStory int64 `json:"total_ground_story"`
    UnderGroundStory int64 `json:"under_ground_story"`
    TotalUnit int64 `json:"total_unit"`
    Fee int64 `json:"fee"`
    Facility string `json:"facility"`
    Neighbor string `json:"neighbor"`
    CurrentStatus string `json:"current_status"`
    Latitude float64
    Longitude float64
    Distance float64
}

type RealEstates []RealEstate