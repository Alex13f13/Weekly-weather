import { Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

export default function Router() {
	return (
		<Routes>
			<Route path={paths.home} element={<Home />} index />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
