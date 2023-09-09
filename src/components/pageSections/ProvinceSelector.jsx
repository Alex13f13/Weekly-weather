import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllProvincesQuery } from "../../services/weatherApi";
import { setSelectedProvince } from "../../store/slices/weatherSlice";
import { StatusManager, Selector } from "../common";
import { LABEL } from "../../utils/constants";

const StyledSection = styled.section`
	height: 18vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2vh;
`;

export default function ProvinceSelector() {
	const { selectedProvince } = useSelector((state) => state?.weather);
	const { data: provinces, isLoading, error } = useGetAllProvincesQuery();

	const dispatch = useDispatch();

	const onSelectedProvince = (value) => {
		dispatch(setSelectedProvince(value));
	};

	return (
		<StyledSection>
			<StatusManager isLoading={isLoading} error={error}>
				<p>Selecciona tu provincia 🌍</p>
				<Selector
					label={LABEL.province}
					options={provinces}
					onSelect={onSelectedProvince}
					defaultValue={selectedProvince}
				/>
			</StatusManager>
		</StyledSection>
	);
}
