import ReactDOM from "react-dom/client";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<GlobalStyle />
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</Provider>
);
