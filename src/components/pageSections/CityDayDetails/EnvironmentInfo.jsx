import styled from "styled-components";
import DataDisplay from "../../common/DataDisplay";
import { LABEL, UNITS } from "../../../utils/constants";

const StyledEnviroment = styled.div`
	margin: auto;
	text-align: center;
`;

function EnvironmentInfo({ temperature, humidity, uv, wind }) {
	return (
		<>
			<StyledEnviroment>
				<DataDisplay data={temperature?.now} label={LABEL.temperature} units={UNITS.celsius} />
				<DataDisplay data={temperature?.max} label={LABEL.temperatureMax} units={UNITS.celsius} />
				<DataDisplay data={temperature?.min} label={LABEL.temperatureMin} units={UNITS.celsius} />
			</StyledEnviroment>
			<StyledEnviroment>
				<DataDisplay data={humidity} label={LABEL.humidity} units={UNITS.percent} />
				<DataDisplay data={uv} label={LABEL.uv} />
				<DataDisplay data={wind} label={LABEL.wind} units={UNITS.kmh} />
			</StyledEnviroment>
		</>
	);
}

export default EnvironmentInfo;
