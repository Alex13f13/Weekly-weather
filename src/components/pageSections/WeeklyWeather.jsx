import styled from "styled-components";
import WeatherCard from "../common/WeatherCard";
import StatusManager from "../common/StatusManager";
import { getWeatherIcon } from "../../utils/getWeatherIcon";
import { useGetCityWheatherByIdQuery } from "../../services/weatherApi";

const StyledWrapper = styled.section`
	height: auto;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2vh;
`;

const StyledList = styled.section`
	height: auto;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: 2vh;
`;

export default function WeeklyWeather({ id }) {
	const { data, isLoading, error } = useGetCityWheatherByIdQuery(id);

	if (!data) return StatusManager({ error });

	const { nextDays } = data;

	return (
		<StyledWrapper>
			<h3>Próximos días</h3>
			<StyledList>
				<StatusManager isLoading={isLoading} noResults={!nextDays?.length} error={error}>
					{nextDays?.map((day, index) => (
						<WeatherCard
							key={index}
							name={day?.day}
							weather={day?.weather}
							icon={getWeatherIcon(day?.weather, "large")}
							max={`${day?.temperature?.max}°C`}
							min={`${day?.temperature?.min}°C`}
						/>
					))}
				</StatusManager>
			</StyledList>
		</StyledWrapper>
	);
}
