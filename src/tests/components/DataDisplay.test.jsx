import { render, screen } from "@testing-library/react";
import { DataDisplay } from "../../components/common";
import { HTML_TAGS } from "../../utils/constants";

const testData = {
	validData: 42,
	falsyData: 0,
	label: "Temperature:",
	units: "°C",
	tags: { tag: HTML_TAGS.h2, defaultTag: HTML_TAGS.p, invalid_tag: "invalid_tag" },
};

describe("DataDisplay Component", () => {
	it("renders data with the specified tag and label", () => {
		const { validData, label, units, tags } = testData;
		const { tag } = tags;

		render(<DataDisplay data={validData} label={label} units={units} tag={tag} />);

		const displayedElement = screen.getByText(`${label} ${validData} ${units}`);
		expect(displayedElement.tagName.toLowerCase()).toBe(tag);
	});

	it("renders data with the default tag (p) when tag is not specified", () => {
		const { validData, label, units, tags } = testData;
		const { defaultTag } = tags;

		render(<DataDisplay data={validData} label={label} units={units} tag={defaultTag} />);

		const displayedElement = screen.getByText(`${label} ${validData} ${units}`);
		expect(displayedElement.tagName.toLowerCase()).toBe(defaultTag);
	});

	it("renders data with the default tag (p) when an invalid tag is specified", () => {
		const { validData, label, units, tags } = testData;
		const { invalid_tag } = tags;

		render(<DataDisplay data={validData} label={label} units={units} tag={invalid_tag} />);

		const displayedElement = screen.getByText(`${label} ${validData} ${units}`);
		expect(displayedElement.tagName.toLowerCase()).toBe(HTML_TAGS.p);
	});

	it("does not render anything when data is falsy", () => {
		const { falsyData, label, units, tags } = testData;
		const { tag } = tags;

		render(<DataDisplay data={falsyData} label={label} units={units} tag={tag} />);

		const displayedElement = screen.queryByText(`${label} ${falsyData} ${units}`);
		expect(displayedElement).toBeNull();
	});
});
