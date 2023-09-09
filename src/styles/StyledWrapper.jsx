import styled from "styled-components";

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: ${({ height }) => (height ? height : "auto")};
	width: ${({ width }) => (width ? width : "auto")};
	gap: ${({ gap }) => (gap ? gap : "2vh")};
`;
