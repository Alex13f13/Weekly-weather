import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function Selector({
	label = "",
	options = [],
	onSelect = () => {},
	defaultValue = "",
}) {
	return (
		<FormControl fullWidth>
			<InputLabel variant="standard">{label}</InputLabel>
			<NativeSelect
				defaultValue={defaultValue}
				onChange={(event) => onSelect(event?.target?.value)}
				inputProps={{
					name: label?.toLowerCase(),
				}}
			>
				{options.map((option, index) => (
					<option key={index} value={option?.id}>
						{option?.name}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
}
