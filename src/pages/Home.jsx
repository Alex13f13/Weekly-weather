import styled from "styled-components";
import CityWeatherList from "../components/pageSections/CityWeatherList";
import ProvinceSelector from "../components/pageSections/ProvinceSelector";

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2vh;
`;

const StyledTitle = styled.h1`
	height: 15vh;
	width: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function Home() {
	return (
		<StyledWrapper>
			<StyledTitle>El tiempo en España</StyledTitle>
			<ProvinceSelector />
			<CityWeatherList />
		</StyledWrapper>
	);
}
