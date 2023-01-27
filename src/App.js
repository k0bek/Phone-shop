import Header from "./layout/header/Header";
import Main from "./layout/main/Main";
import Modal from "./components/modals/Modal";
import { CartContext } from "./context/auth-context";
import { useContext } from "react";

function App() {
	const { isModalShowed } = useContext(CartContext);
	return (
		<div>
			{isModalShowed && <Modal></Modal>}
			<Header></Header>
			<Main></Main>
		</div>
	);
}

export default App;
