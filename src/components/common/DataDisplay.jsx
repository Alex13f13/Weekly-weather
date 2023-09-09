import { createElement } from "react";
import { HTML_TAGS } from "../../utils/constants";

export default function DataDisplay({ data, label = "", units = "", tag = HTML_TAGS.p }) {
	const selectedTag = HTML_TAGS[tag] || HTML_TAGS.p;

	return data && createElement(selectedTag, null, `${label} ${data} ${units}`);
}
