import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	provinces: [],
	selectedProvince: 15, // A Coruña
	cities: [],
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
		setCities: (state, action) => {
			state.cities = action.payload;
		},
	},
});

export const { setProvinces, setSelectedProvince, setCities } = weatherSlice.actions;
export default weatherSlice.reducer;
