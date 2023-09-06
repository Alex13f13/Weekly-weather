import WbSunnyIcon from "@mui/icons-material/WbSunnyOutlined";
import WaterDropIcon from "@mui/icons-material/WaterDropOutlined";
import CloudIcon from "@mui/icons-material/CloudOutlined";
import ThunderstormIcon from "@mui/icons-material/ThunderstormOutlined";

export const getWeatherIcon = (weatherDescription, fontSize = "large") => {
	const iconMappings = {
		despejado: <WbSunnyIcon fontSize={fontSize} />,
		soleado: <WbSunnyIcon fontSize={fontSize} />,
		lluvioso: <WaterDropIcon fontSize={fontSize} />,
		lluvia: <WaterDropIcon fontSize={fontSize} />,
		tormenta: <ThunderstormIcon fontSize={fontSize} />,
		nuboso: <CloudIcon fontSize={fontSize} />,
		cubierto: <CloudIcon fontSize={fontSize} />,
	};

	const lowerCaseDescription = weatherDescription ? weatherDescription?.toLowerCase() : "";

	const matchingIcon = Object.keys(iconMappings)?.find((keyword) =>
		lowerCaseDescription?.includes(keyword)
	);

	return matchingIcon ? iconMappings[matchingIcon] : <WbSunnyIcon fontSize={fontSize} />;
};
