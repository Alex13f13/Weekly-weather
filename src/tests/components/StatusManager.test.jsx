import { StatusManager } from "../../components/common";
import { render } from "@testing-library/react";
import { LABEL } from "../../utils/constants";

describe("StatusManager Component", () => {
	it("should render Loading component when isLoading is true", () => {
		const { getByText } = render(<StatusManager isLoading />);
		const loadingElement = getByText(LABEL.loading);
		expect(loadingElement).toBeDefined();
	});

	it("should render Error component when error is true", () => {
		const { getByText } = render(<StatusManager error />);
		const errorElement = getByText(LABEL.error);
		expect(errorElement).toBeDefined();
	});

	it("should render NoResults component when noResults is true", () => {
		const { getByText } = render(<StatusManager noResults />);
		const noResultsElement = getByText(LABEL.noResults);
		expect(noResultsElement).toBeDefined();
	});

	it("should render children when none of isLoading, error, or noResults is true", () => {
		const { getByText } = render(
			<StatusManager>
				<div>Child Component</div>
			</StatusManager>
		);
		const childElement = getByText("Child Component");
		expect(childElement).toBeDefined();
	});
});
