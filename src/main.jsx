import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store/store";
import { GlobalStyle } from "./styles";
import Router from "./router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
	<PersistGate persistor={persistStore(store)}>
		<Provider store={store}>
			<GlobalStyle />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</Provider>
	</PersistGate>
);
