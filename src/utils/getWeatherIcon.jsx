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

// Esta función asigna iconos basados en palabras clave en la descripción del tiempo
// debido a la falta de documentación de equivalencia de la API con códigos específicos.
// Para una solución más robusta, se debería considerar usar el código proporcionado por la API en lugar de texto.
