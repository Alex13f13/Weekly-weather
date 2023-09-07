import styled from "styled-components";
import Button from "@mui/material/Button";
import StatusManager from "../common/StatusManager";
import { openLink } from "../../utils/openLink";
import { getWeatherIcon } from "../../utils/getWeatherIcon";
import { useGetCityWheatherByIdQuery } from "../../services/weatherApi";

const StyledWrapper = styled.section`
	height: 50vh;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
`;

const StyledHead = styled.div`
	height: 15%;
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	white-space: nowrap;
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

const StyledWeather = styled.div`
	margin: auto;
	text-align: center;
	gap: 2vh;
`;

const StyledEnviroment = styled.div`
	margin: auto;
	text-align: center;
`;

export default function CityDayDetails({ id }) {
	const { data, isLoading, error } = useGetCityWheatherByIdQuery(id);

	if (!data) return StatusManager({ isLoading, error });

	const { name, originURL, today } = data;
	const { day, weather, humidity, temperature, uv, wind } = today;

	return (
		<StyledWrapper>
			<StatusManager isLoading={isLoading} error={error}>
				<StyledHead>
					<h1>{name}</h1>
					<h5>{day}</h5>
				</StyledHead>
				<StyledBody>
					<StyledWeather>
						{getWeatherIcon(weather, "large")}
						<h5>{weather}</h5>
					</StyledWeather>
					<StyledEnviroment>
						<p>Temperatura: {temperature?.now}ºC</p>
						<p>
							{temperature?.max}ºC / {temperature?.min}ºC
						</p>
					</StyledEnviroment>
					<StyledEnviroment>
						<p>Humedad: {humidity}%</p>
						<p>Índice max. uv: {uv}</p>
						<p>Viento: {wind} km/h</p>
					</StyledEnviroment>
				</StyledBody>
				<Button onClick={() => openLink(originURL)} size="small">
					Ver más
				</Button>
			</StatusManager>
		</StyledWrapper>
	);
}
