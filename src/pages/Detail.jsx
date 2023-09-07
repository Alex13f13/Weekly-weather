import styled from "styled-components";
import BackButton from "../components/common/BackButton";
import CityDayDetails from "../components/pageSections/CityDayDetails";
import { useParams } from "react-router-dom";
import WeeklyWeather from "../components/pageSections/WeeklyWeather";

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2vh;
`;

export default function Detail() {
	const { id } = useParams();

	return (
		<StyledWrapper>
			<BackButton />
			<CityDayDetails id={id} />
			<WeeklyWeather id={id} />
		</StyledWrapper>
	);
}
