import { render, screen, fireEvent } from "@testing-library/react";
import { Selector } from "../../components/common";

describe("Selector Component", () => {
	const label = "Select Option";
	const options = [
		{ id: "option1", name: "Option 1" },
		{ id: "option2", name: "Option 2" },
		{ id: "option3", name: "Option 3" },
	];
	const defaultValue = "option2";

	it("should render the label and options correctly", () => {
		render(<Selector label={label} options={options} defaultValue={defaultValue} />);

		const selectLabel = screen.getByText(label);
		expect(selectLabel).toBeDefined();

		options.forEach((option) => {
			const selectOption = screen.getByText(option.name);
			expect(selectOption).toBeDefined();
		});

		const select = screen.getByRole("combobox");
		const selectedValue = select.value;

		expect(selectedValue).toBe(defaultValue);
	});

	it("should call the onSelect function when an option is selected", () => {
		let onSelectCalled = "";
		const onSelectMock = (selectedOption) => {
			onSelectCalled = selectedOption;
		};

		render(<Selector label={label} options={options} onSelect={onSelectMock} />);

		const select = screen.getByRole("combobox");

		fireEvent.change(select, { target: { value: "option2" } });

		expect(onSelectCalled).toBe("option2");
	});

	it("should match snapshot", () => {
		const { container } = render(
			<Selector label={label} options={options} defaultValue={defaultValue} />
		);

		expect(container).toMatchSnapshot();
	});
});
