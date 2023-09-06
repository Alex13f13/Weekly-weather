import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GlobalStyle />
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</React.StrictMode>
);
