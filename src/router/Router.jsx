import { Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Favourites from "../pages/Favourites";

export default function Router() {
	return (
		<Routes>
			<Route path={paths.home} element={<Home />} index />
			<Route path={paths.detail} element={<Detail />} />
			<Route path={paths.favourites} element={<Favourites />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
