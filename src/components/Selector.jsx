import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function Selector({ label = "", options = [], onSelect = () => {} }) {
	return (
		<FormControl fullWidth>
			<InputLabel variant="standard">{label}</InputLabel>
			<NativeSelect
				defaultValue={options[0]?.value}
				onChange={(event) => onSelect(event?.target?.value)}
				inputProps={{
					name: label?.toLowerCase(),
				}}
			>
				{options.map((option, index) => (
					<option key={index} value={option?.value}>
						{option?.text}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
}
