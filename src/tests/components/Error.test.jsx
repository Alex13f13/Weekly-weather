import { render } from "@testing-library/react";
import { Error } from "../../components/common";
import { LABEL } from "../../utils/constants";

describe("Error Component", () => {
	it("renders the error message", () => {
		const { getByText } = render(<Error />);

		const errorMessage = getByText(LABEL.error);
		expect(errorMessage).toBeDefined();
	});

	it("matches snapshot", () => {
		const { container } = render(<Error />);
		expect(container).toMatchSnapshot();
	});
});
