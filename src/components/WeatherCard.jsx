import styled from "styled-components";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

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

export default function WeatherCard({ icon, weather, max, min, name }) {
	return (
		<Card>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{name}
					</Typography>
					<StyledBody>
						{icon}
						<Typography variant="body2" color="text.secondary">
							{weather}
						</Typography>
					</StyledBody>
					<hr />
					<StyledFooter>
						<Typography variant="body3">MAX: {max}</Typography>
						<Typography variant="body3">MIN: {min}</Typography>
					</StyledFooter>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
