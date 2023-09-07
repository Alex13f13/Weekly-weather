import styled from "styled-components";
import Loading from "./Loading";
import WeatherCard from "./WeatherCard";
import NoResults from "./NoResults";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { useSelector } from "react-redux";
import { useGetCitiesByProvinceIdQuery } from "../services/weatherApi";

const StyledWrapper = styled.section`
	height: auto;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: 2vh;
`;

export default function WeatherList() {
	const { selectedProvince } = useSelector((state) => state.weather);
	const { data: cities, isLoading: cityLoading } = useGetCitiesByProvinceIdQuery(selectedProvince);

	return cityLoading ? (
		<Loading />
	) : cities?.length > 0 ? (
		<StyledWrapper>
			{cities?.map((city) => (
				<WeatherCard
					key={city?.id}
					name={city?.name}
					weather={city?.stateSky?.description}
					icon={getWeatherIcon(city?.stateSky?.description, "large")}
					max={`${city?.temperatures?.max}°C`}
					min={`${city?.temperatures?.min}°C`}
				/>
			))}
		</StyledWrapper>
	) : (
		<NoResults />
	);
}
