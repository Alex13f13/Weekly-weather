import styled from "styled-components";
import Selector from "../components/Selector";
import WeatherCard from "../components/WeatherCard";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProvince } from "../store/slices/weatherSlice";
import Loading from "../components/Loading";
import { useGetAllProvincesQuery, useGetCitiesByProvinceIDQuery } from "../services/weatherApi";

const StyledWrapper = styled.div`
	width: 88vw;
	height: auto;
	margin: 0 6vw;
	display: flex;
	flex-direction: column;
	gap: 2vh;
`;

const StyledHeader = styled.section`
	height: 40vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 5vh;
`;

const StyledBody = styled.section`
	height: auto;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: 2vh;
`;

export default function Home() {
	const { selectedProvince } = useSelector((state) => state.weather);
	const { data: provinces, isLoading: provLoading } = useGetAllProvincesQuery();
	const { data: cities, isLoading: cityLoading } = useGetCitiesByProvinceIDQuery(selectedProvince);

	const dispatch = useDispatch();

	const onSelectedProvince = (value) => {
		dispatch(setSelectedProvince(value));
	};

	return (
		<StyledWrapper>
			{provLoading ? (
				<Loading />
			) : (
				<>
					<StyledHeader>
						<h1>El tiempo en España</h1>
						<Selector
							label="Provincia"
							options={provinces}
							onSelect={onSelectedProvince}
							defaultValue={selectedProvince}
						/>
					</StyledHeader>
					{cityLoading ? (
						<Loading />
					) : cities.length ? (
						<StyledBody>
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
						</StyledBody>
					) : (
						<h1>No hay resultados</h1>
					)}
				</>
			)}
		</StyledWrapper>
	);
}
