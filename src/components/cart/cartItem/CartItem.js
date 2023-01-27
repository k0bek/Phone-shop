import styles from "./CartItem.module.css";

import Button from "../../ui/Button";

import { CartContext } from "../../../context/auth-context";
import { useContext } from "react";

function CartItem({ name, price, amount, id }) {
	const {
		value: {
			cartState: { items },
			dispatchCart,
		},
	} = useContext(CartContext);

	function handleChange(type) {
		const itemIndex = items.findIndex((item) => {
			return item.name === name;
		});

		let item = items[itemIndex];
		item = {
			...item,
			amount: type === "+" ? 1 : -1,
		};

		dispatchCart({ type: "ADD", items: item });
	}

	return (
		<li className={styles["cart-item"]}>
			<div className={styles.info}>
				<h3>{name}</h3>
				<div className={styles.details}>
					<p className={styles.price}>{price}$</p>
					<input
						type="number"
						max="5"
						min="1"
						value={amount}
						className={styles.input}
						disabled
					></input>
				</div>
			</div>
			<div className={styles["amount-btns"]}>
				<Button onClick={() => handleChange("-")}>-</Button>
				<Button onClick={() => handleChange("+")}>+</Button>
			</div>
		</li>
	);
}
export default CartItem;
