import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { SIZE, LABEL } from "../../utils/constants";

export default function BackButton() {
	const navigate = useNavigate();
	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<IconButton onClick={handleGoBack} aria-label={LABEL.back} size={SIZE.large}>
			<KeyboardBackspaceIcon />
		</IconButton>
	);
}
