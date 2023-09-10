import styled from "styled-components";
import Button from "@mui/material/Button";
import CityHeader from "./CityHeader";
import WeatherInfo from "./WeatherInfo";
import EnvironmentInfo from "./EnvironmentInfo";
import { StatusManager } from "../../common";
import { openLink } from "../../../utils/openLink";
import { useGetCityDetailWeatherByIdQuery } from "../../../services/weatherApi";
import { LABEL, SIZE } from "../../../utils/constants";

const StyledSection = styled.section`
	height: 50vh;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
`;

const StyledBody = styled.div`
	height: 65%;
	width: 80%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 2vh;
`;

export default function CityDayDetails({ id }) {
	const { data, isLoading, error } = useGetCityDetailWeatherByIdQuery(id);

	if (!data) return StatusManager({ isLoading, error, noResults: data });

	const {
		name,
		originURL,
		today: { day, weather, humidity, temperature, uv, wind },
	} = data;

	return (
		<StyledSection>
			<StatusManager isLoading={isLoading} error={error}>
				<CityHeader name={name} day={day} />
				<StyledBody>
					<WeatherInfo weather={weather} />
					<EnvironmentInfo temperature={temperature} humidity={humidity} uv={uv} wind={wind} />
				</StyledBody>
				<Button onClick={() => openLink(originURL)} size={SIZE.small}>
					{LABEL.seeMore}
				</Button>
			</StatusManager>
		</StyledSection>
	);
}
