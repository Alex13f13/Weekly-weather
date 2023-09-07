import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selectedProvince: 15, // A Coruña
	favourites: [],
};

export const weatherSlice = createSlice({
	name: "weatherSlice",
	initialState,
	reducers: {
    setSelectedProvince: (state, action) => {
      state.selectedProvince = action.payload;
		},
    setFavourites: (state, action) => {
      state.favourites = action.payload;
    },
	},
});

export const { setSelectedProvince, setFavourites } = weatherSlice.actions;
export default weatherSlice.reducer;
