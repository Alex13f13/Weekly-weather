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
			transformResponse: (response) => {
				return response?.ciudades?.map((city) => ({
					id: city?.id,
					name: city?.name,
					description: city?.stateSky?.description,
					icon: city?.stateSky?.description,
					temperatures: {
						max: city?.temperatures?.max,
						min: city?.temperatures?.min,
					},
				}));
			},
		}),
		getCityWeatherById: builder.query({
			query: (cityId) => `municipios/${cityId}`,
			transformResponse: (response) => {
				return {
					id: response?.municipio?.CODIGOINE?.substring(0, 5),
					name: response?.municipio?.NOMBRE,
					description: response?.stateSky?.description,
					icon: response?.stateSky?.description,
					temperatures: {
						max: response?.temperaturas?.max,
						min: response?.temperaturas?.min,
					},
				};
			},
		}),
		getCityDetailWeatherById: builder.query({
			query: (cityId) => `municipios/${cityId}`,
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
						name: day["@attributes"]?.fecha,
						temperatures: {
							max: day?.temperatura.maxima,
							min: day?.temperatura.minima,
						},
						description: getFirstString(day?.estado_cielo_descripcion),
						icon: getFirstString(day?.estado_cielo_descripcion),
					})),
				};
			},
		}),
	}),
});

export const {
	useGetAllProvincesQuery,
	useGetCitiesByProvinceIdQuery,
	useGetCityWeatherByIdQuery,
	useGetCityDetailWeatherByIdQuery,
} = weatherApi;
