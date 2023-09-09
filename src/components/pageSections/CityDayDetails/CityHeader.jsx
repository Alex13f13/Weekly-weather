import styled from "styled-components";

const StyledHead = styled.div`
	height: 15%;
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	white-space: nowrap;
`;

function CityHeader({ name, day }) {
	return (
		<StyledHead>
			<h1>{name}</h1>
			<h5>{day}</h5>
		</StyledHead>
	);
}

export default CityHeader;
