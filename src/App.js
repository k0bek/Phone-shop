import Header from "./layout/header/Header";
import PhoneList from "./components/phoneList/PhoneList";
import Modal from "./components/modals/Modal";
import { CartContext } from "./context/auth-context";
import React, { useContext } from "react";

function App() {
	const { isModalShowed } = useContext(CartContext);
	return (
		<React.Fragment>
			{isModalShowed && <Modal />}
			<Header />
			<PhoneList />
		</React.Fragment>
	);
}

export default App;
