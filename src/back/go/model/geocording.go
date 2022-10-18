package model

type Gecode struct {
	Code PlusCode
}

type PlusCode struct {
	CompoundCode string `json:"compound_code"`
	GlobalCode string `json:"global_code"`
}