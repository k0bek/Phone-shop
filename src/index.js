import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartContextProvider from "./context/auth-context";
import styles from "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<CartContextProvider>

		<App />
		</CartContextProvider>
	</React.StrictMode>
);
