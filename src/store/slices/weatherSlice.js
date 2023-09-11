import { createSlice } from "@reduxjs/toolkit";
import { PROVINCE } from "../../utils/constants";

const initialState = {
	selectedProvince: PROVINCE[15],
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
