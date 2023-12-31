import styled from "styled-components";
import { LABEL } from "../../utils/constants";

const ErrorContainer = styled.div`
	width: 90%;
	height: auto;
	background-color: #f8d7da;
	color: #721c24;
	padding: 10px;
	border: 1px solid #f5c6cb;
	border-radius: 4px;
	margin-top: 20px;
`;

const ErrorMessage = styled.p`
	margin: 0;
	text-align: center;
`;

export default function Error() {
	return (
		<ErrorContainer>
			<ErrorMessage>{LABEL.error}</ErrorMessage>
		</ErrorContainer>
	);
}
