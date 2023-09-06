import { useEffect, useState } from "react";
import styled from "styled-components";
import Selector from "../components/Selector";

const StyledWrapper = styled.div`
	height: 100vh;
	width: 100vw;
`;

const StyledHeader = styled.div`
	height: 40%;
	width: 100%;
`;

const StyledBody = styled.div`
	height: 60%;
	width: 100%;
`;

export default function Home() {
	const [provinces, setProvinces] = useState([]);
	const [selectedProvince, setSelectedProvince] = useState("");

	useEffect(() => {
		fetch("https://www.el-tiempo.net/api/json/v2/provincias")
			.then((response) => response.json())
			.then((data) => {
				setSelectedProvince(data?.provincias[0]?.CODPROV);
				const allProvinces = data?.provincias?.map((province) => ({
					value: province?.CODPROV,
					text: province?.NOMBRE_PROVINCIA,
				}));
				setProvinces(allProvinces);
			})
			.catch((error) => {
				console.error("Error al obtener datos:", error);
			});
	}, []);

	const onSelectedProvince = (value) => {
		setSelectedProvince(value);
	};

	return (
		<StyledWrapper>
			<StyledHeader>
				<Selector label="Provincia" options={provinces} onSelect={onSelectedProvince} />
			</StyledHeader>
			<StyledBody>Body</StyledBody>
		</StyledWrapper>
	);
}
