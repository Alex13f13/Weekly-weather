import styled from "styled-components";

const NotFoundContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	text-align: center;
	overflow: hidden;
`;

const NotFoundHeading = styled.h1`
	font-size: 1.6rem;
	margin-bottom: 16px;
`;

const NotFoundMessage = styled.p`
	font-size: 1rem;
`;

export default function NotFound() {
	return (
		<NotFoundContainer>
			<NotFoundHeading>404 - Página no encontrada</NotFoundHeading>
			<NotFoundMessage>Lo sentimos, la página que buscas no existe.</NotFoundMessage>
		</NotFoundContainer>
	);
}
