import WbSunnyIcon from "@mui/icons-material/WbSunnyOutlined";
import WaterDropIcon from "@mui/icons-material/WaterDropOutlined";
import CloudIcon from "@mui/icons-material/CloudOutlined";
import ThunderstormIcon from "@mui/icons-material/ThunderstormOutlined";
import { SIZE } from "./constants";

export const getWeatherIcon = (weatherDescription, fontSize = SIZE.small) => {
	const iconMappings = {
		despejado: <WbSunnyIcon fontSize={fontSize} />,
		sol: <WbSunnyIcon fontSize={fontSize} />,
		lluv: <WaterDropIcon fontSize={fontSize} />,
		torment: <ThunderstormIcon fontSize={fontSize} />,
		nub: <CloudIcon fontSize={fontSize} />,
		cubierto: <CloudIcon fontSize={fontSize} />,
	};

	const lowerCaseDescription = weatherDescription ? weatherDescription?.toLowerCase() : "";

	const matchingIcon = Object.keys(iconMappings)?.find((keyword) =>
		lowerCaseDescription?.includes(keyword)
	);

	return matchingIcon ? iconMappings[matchingIcon] : <WbSunnyIcon fontSize={fontSize} />;
};

// This function assigns icons based on keywords in the time description.
// Due to lack of API equivalence documentation with specific code.
// For a more robust solution, you should consider using the code provided by the API instead of text.
