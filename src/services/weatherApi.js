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
		getCitiesByProvinceID: builder.query({
			query: (provinceID) => `provincias/${provinceID}`,
			transformResponse: (response) => response?.ciudades,
		}),
	}),
});

export const { useGetAllProvincesQuery, useGetCitiesByProvinceIDQuery } = weatherApi;
