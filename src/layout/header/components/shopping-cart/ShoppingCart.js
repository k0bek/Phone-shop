import styles from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../../../../context/auth-context";

function ShoppingCart() {
	const {
		handleModalShowed,
		value: {
			cartState: { totalItems },
		},
	} = useContext(CartContext);

	return (
		<button className={styles["shopping-cart"]} onClick={handleModalShowed}>
			<span>
				<i className="fa-solid fa-cart-shopping"></i>
			</span>
			<span>Your Cart</span>
			<span className={styles.amount}>{totalItems}</span>
		</button>
	);
}

export default ShoppingCart;
