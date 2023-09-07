import styled from "styled-components";
import WeatherCard from "../common/WeatherCard";
import StatusManager from "../common/StatusManager";
import { getWeatherIcon } from "../../utils/getWeatherIcon";
import { useSelector } from "react-redux";
import { useGetCitiesByProvinceIdQuery } from "../../services/weatherApi";
import { useNavigate } from "react-router-dom";
import { paths } from "../../router/paths";

const StyledWrapper = styled.section`
	height: auto;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: 2vh;
`;

export default function WeatherList() {
	const { selectedProvince } = useSelector((state) => state.weather);
	const { data: cities, isLoading, error } = useGetCitiesByProvinceIdQuery(selectedProvince);
	const navigate = useNavigate();

	return (
		<StyledWrapper>
			<StatusManager isLoading={isLoading} noResults={!cities?.length} error={error}>
				{cities?.map((city) => (
					<WeatherCard
						key={city?.id}
						name={city?.name}
						weather={city?.stateSky?.description}
						icon={getWeatherIcon(city?.stateSky?.description, "large")}
						max={`${city?.temperatures?.max}°C`}
						min={`${city?.temperatures?.min}°C`}
						onClick={() => {
							navigate(`${paths.detailBase}${city?.id}`);
						}}
					/>
				))}
			</StatusManager>
		</StyledWrapper>
	);
}
