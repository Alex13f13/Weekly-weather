import styled from "styled-components";
import Selector from "./Selector";
import Loading from "./Loading";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllProvincesQuery } from "../services/weatherApi";
import { setSelectedProvince } from "../store/slices/weatherSlice";

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
	const { data: provinces, isLoading: provLoading } = useGetAllProvincesQuery();

	const dispatch = useDispatch();

	const onSelectedProvince = (value) => {
		dispatch(setSelectedProvince(value));
	};

	return provLoading ? (
		<Loading />
	) : (
		<StyledWrapper>
			<p>Selecciona tu provincia 🗺️</p>
			<Selector
				label="Provincia"
				options={provinces}
				onSelect={onSelectedProvince}
				defaultValue={selectedProvince}
			/>
		</StyledWrapper>
	);
}
