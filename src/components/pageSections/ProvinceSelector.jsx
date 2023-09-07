import styled from "styled-components";
import Selector from "../common/Selector";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllProvincesQuery } from "../../services/weatherApi";
import { setSelectedProvince } from "../../store/slices/weatherSlice";
import StatusManager from "../common/StatusManager";

const StyledWrapper = styled.section`
	height: 25vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2vh;
`;

export default function ProvinceSelector() {
	const { selectedProvince } = useSelector((state) => state.weather);
	const { data: provinces, isLoading, error } = useGetAllProvincesQuery();

	const dispatch = useDispatch();

	const onSelectedProvince = (value) => {
		dispatch(setSelectedProvince(value));
	};

	return (
		<StyledWrapper>
			<StatusManager isLoading={isLoading} error={error}>
				<p>Selecciona tu provincia 🗺️</p>
				<Selector
					label="Provincia"
					options={provinces}
					onSelect={onSelectedProvince}
					defaultValue={selectedProvince}
				/>
			</StatusManager>
		</StyledWrapper>
	);
}
