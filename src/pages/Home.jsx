import { useEffect } from "react";
import styled from "styled-components";
import Selector from "../components/Selector";
import WeatherCard from "../components/WeatherCard";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { useDispatch, useSelector } from "react-redux";
import { setMunicipalities, setProvinces, setSelectedProvince } from "../store/slices/weatherSlice";

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
	const { provinces, municipalities, selectedProvince } = useSelector((state) => state.weather);

	const dispatch = useDispatch();

	useEffect(() => {
		fetch("https://www.el-tiempo.net/api/json/v2/provincias")
			.then((response) => response.json())
			.then((data) => {
				dispatch(setSelectedProvince(data?.provincias[0]?.CODPROV));
				const allProvinces = data?.provincias?.map((province) => ({
					value: province?.CODPROV,
					text: province?.NOMBRE_PROVINCIA,
				}));
				dispatch(setProvinces(allProvinces));
			})
			.catch((error) => {
				console.error("Error al obtener datos:", error);
			});
	}, []);

	useEffect(() => {
		if (!selectedProvince) return;
		fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${selectedProvince}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.ciudades);
				dispatch(setMunicipalities(data.ciudades));
			})
			.catch((error) => {
				console.error("Error al obtener datos:", error);
			});
	}, [selectedProvince]);

	const onSelectedProvince = (value) => {
		dispatch(setSelectedProvince(value));
	};

	return (
		<StyledWrapper>
			{provinces.length ? (
				<>
					<StyledHeader>
						<h1>El tiempo en España</h1>
						<Selector label="Provincia" options={provinces} onSelect={onSelectedProvince} />
					</StyledHeader>
					{municipalities.length ? (
						<StyledBody>
							{municipalities.map((municipality) => (
								<WeatherCard
									key={municipality?.id}
									name={municipality?.name}
									weather={municipality?.stateSky?.description}
									icon={getWeatherIcon(municipality?.stateSky?.description, "large")}
									max={`${municipality?.temperatures?.max}°C`}
									min={`${municipality?.temperatures?.min}°C`}
								/>
							))}
						</StyledBody>
					) : (
						<h1>No hay resultados</h1>
					)}
				</>
			) : (
				<h1>Cargando...</h1>
			)}
		</StyledWrapper>
	);
}
