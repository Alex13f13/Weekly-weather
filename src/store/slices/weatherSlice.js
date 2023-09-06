import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	provinces: [],
	selectedProvince: "",
	municipalities: [],
};

export const weatherSlice = createSlice({
	name: "weatherSlice",
	initialState,
	reducers: {
		setProvinces: (state, action) => {
			state.provinces = action.payload;
		},
		setSelectedProvince: (state, action) => {
			state.selectedProvince = action.payload;
		},
		setMunicipalities: (state, action) => {
			state.municipalities = action.payload;
		},
	},
});

export const { setProvinces, setSelectedProvince, setMunicipalities } = weatherSlice.actions;
export default weatherSlice.reducer;
