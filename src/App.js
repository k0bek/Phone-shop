import Header from "./layout/header/Header";
import Main from "./layout/main/Main";
import Modal from "./components/modals/Modal";
import { CartContext } from "./context/auth-context";
import React, { useContext } from "react";

function App() {
	const { isModalShowed } = useContext(CartContext);
	return (
		<React.Fragment>
			{isModalShowed && <Modal />}
			<Header />
			<Main />
		</React.Fragment>
	);
}

export default App;
