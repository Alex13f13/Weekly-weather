import styled from "styled-components";
import WeatherList from "../components/WeatherList";
import ProvinceSelector from "../components/ProvinceSelector";

const StyledWrapper = styled.div`
	width: 88vw;
	height: auto;
	margin: 0 6vw;
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
	align-items: flex-end;
`;

export default function Home() {
	return (
		<StyledWrapper>
			<StyledTitle>El tiempo en España</StyledTitle>
			<ProvinceSelector />
			<WeatherList />
		</StyledWrapper>
	);
}
