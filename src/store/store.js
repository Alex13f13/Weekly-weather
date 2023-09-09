import thunk from "redux-thunk";
import weatherSlice from "./slices/weatherSlice";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { weatherApi } from "../services/weatherApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "redux";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["weather"],
};

const rootReducer = combineReducers({
	[weatherApi.reducerPath]: weatherApi.reducer,
	weather: weatherSlice,
});

export const store = configureStore({
	reducer: persistReducer(persistConfig, rootReducer),
	middleware: [weatherApi.middleware, thunk],
});

setupListeners(store.dispatch);
