import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Cart from "../cart/Cart";
import { useContext } from "react";
import { CartContext } from "../../context/auth-context";

function ModalBackdrop({ children }) {
	const { handleModalShowed } = useContext(CartContext);

	return (
		<div className={styles.backdrop} onClick={handleModalShowed}>
			{children}
		</div>
	);
}

export function ModalOverlay() {
	return (
		<div className={styles["modal-overlay"]}>
			<Cart/>
		</div>
	);
}

function Modal({ children }) {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<ModalBackdrop/>,
				document.getElementById("backdrop")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				document.getElementById("overlay")
			)}
		</React.Fragment>
	);
}

export default Modal;
