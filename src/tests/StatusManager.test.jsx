import { StatusManager } from "../components/common";
import { render } from "@testing-library/react";

describe("StatusManager", () => {
	test("should render children", () => {
		const { getByText } = render(
			<StatusManager>
				<div>children</div>
			</StatusManager>
		);

		expect(getByText("children")).toBeDefined();
	});
});
