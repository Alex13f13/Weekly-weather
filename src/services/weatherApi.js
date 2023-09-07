import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFirstString } from "../utils/getFirstString";

export const weatherApi = createApi({
	reducerPath: "weatherApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://www.el-tiempo.net/api/json/v2/" }),
	endpoints: (builder) => ({
		getAllProvinces: builder.query({
			query: () => `provincias`,
			transformResponse: (response) => {
				return response?.provincias?.map((province) => ({
					id: province?.CODPROV,
					name: province?.NOMBRE_PROVINCIA,
				}));
			},
		}),
		getCitiesByProvinceId: builder.query({
			query: (provinceID) => `provincias/${provinceID}`,
			transformResponse: (response) => response?.ciudades,
		}),
		getCityWheatherById: builder.query({
			query: (cityID) => `municipios/${cityID}`,
			transformResponse: (response) => {
				return {
					originURL: response?.origin?.web,
					name: response?.municipio?.NOMBRE,
					today: {
						temperature: {
							now: response?.temperatura_actual,
							max: response?.temperaturas?.max,
							min: response?.temperaturas?.min,
						},
						wind: response?.viento,
						uv: response?.uv_max,
						humidity: response?.humedad,
						day: response?.fecha,
						weather: response?.stateSky?.description,
					},
					nextDays: response?.proximos_dias?.map((day) => ({
						day: day["@attributes"]?.fecha,
						temperature: {
							max: day?.temperatura.maxima,
							min: day?.temperatura.minima,
						},
						weather: getFirstString(day?.estado_cielo_descripcion),
					})),
				};
			},
		}),
	}),
});

export const {
	useGetAllProvincesQuery,
	useGetCitiesByProvinceIdQuery,
	useGetCityWheatherByIdQuery,
} = weatherApi;
