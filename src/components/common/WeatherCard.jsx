import styled from "styled-components";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import DataDisplay from "./DataDisplay";
import { HTML_TAGS, LABEL, UNITS } from "../../utils/constants";

const StyledHead = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledBody = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	margin: 10% 0;
	gap: 1vh;
`;

const StyledFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export default function WeatherCard({ icon, weather, max, min, name, onClick = () => {} }) {
	return (
		<Card data-testid="weather-card" onClick={() => onClick()}>
			<CardContent>
				<StyledHead>
					<DataDisplay data={name} tag={HTML_TAGS.h4} />
				</StyledHead>
				<StyledBody>
					{icon}
					<DataDisplay data={weather} tag={HTML_TAGS.h5} />
				</StyledBody>
				<hr />
				<StyledFooter>
					<DataDisplay data={max} label={LABEL.max} units={UNITS.celsius} />
					<DataDisplay data={min} label={LABEL.min} units={UNITS.celsius} />
				</StyledFooter>
			</CardContent>
		</Card>
	);
}
