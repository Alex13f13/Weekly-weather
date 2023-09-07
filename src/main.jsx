import ReactDOM from "react-dom/client";
import Router from "./router/Router";
import GlobalStyle from "./components/common/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

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
