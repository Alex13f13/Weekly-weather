import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
	reducerPath: "weatherApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://www.el-tiempo.net/api/json/v2/" }),
	endpoints: (builder) => ({
		getAllProvinces: builder.query({
			query: () => `provincias`,
			transformResponse: (response) => {
				return response?.provincias?.map((province) => ({
					id: province.CODPROV,
					name: province.NOMBRE_PROVINCIA,
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
					originURL: response.origin.web,
					name: response.municipio.NOMBRE,
					today: {
						temperature: { max: response.temperaturas.max, min: response.temperaturas.min },
						uv: response.uv_max,
						humidity: response.humedad,
						day: response.fecha,
						weather: response.stateSky.description,
					},
					weekly: response.proximos_dias?.map((day) => ({
						day: day["@attributes"].fecha,
						temperature: {
							max: day.temperatura.maxima,
							min: day.temperatura.minima,
						},
						weather: day.estado_cielo_descripcion,
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
