package model

type Gecode struct {
	PlusCode PlusCode `json:"plus_code"`
	Results []Result `json:"results"`
}

type PlusCode struct {
	CompoundCode string `json:"compound_code"`
	GlobalCode string `json:"global_code"`
}

type Result struct {
	AddressComponents []AddressComponent `json:"address_components"`
	Geometry Geometry `json:"geometry"`
}

type AddressComponent struct {
	LongName string `json:"long_name"`
	ShortName string `json:"short_name"`
	Types []string `json:"types"`
}

type Geometry struct {
	Location Location `json:"location"`
}

type Location struct {
	Lat float64 `json:"lat"`
	Lng float64 `json:"lng"`
}