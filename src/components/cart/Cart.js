import React from "react";
import styles from "./Cart.module.css";
import CartItem from "./cartItem/CartItem";
import Button from "../ui/Button";
import { CartContext } from "../../context/auth-context";
import { useContext } from "react";

function Cart() {
	const { handleModalShowed, value } = useContext(CartContext);
	const { cartState } = value;
	const { items, totalItems, totalPrice } = cartState;

	const addedItems = items.map((item) => {
		if (item.amount > 0) {
			return (
				<CartItem
					name={item.name}
					price={item.price}
					id={item.id}
					key={item.id}
					amount={item.amount}
				></CartItem>
			);
		}
	});

	return (
		<div className={styles.cart}>
			{totalItems ? (
				<React.Fragment>
					<div className={styles["cart-items"]}></div>
					<ul>{addedItems}</ul>
					<div className={styles.info}>
						<p className={styles.totalAmount}>Total Amount</p>
						<p className={styles.totalPrice}>${totalPrice}</p>
					</div>
					<div className={styles.actions}>
						<button className={styles.close} onClick={handleModalShowed}>
							Close
						</button>
						<Button>Order</Button>
					</div>
				</React.Fragment>
			) : (
				<p className={styles.empty}>There is no products in cart</p>
			)}
		</div>
	);
}

export default Cart;
