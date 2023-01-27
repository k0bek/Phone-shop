import styles from "./Item.module.css";
import Button from "../../../components/ui/Button";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/auth-context";

function Item({ id, name, description, price }) {
	const { value } = useContext(CartContext);
	const { cartState, dispatchCart } = value;

	function addItem(event) {
		event.preventDefault();
		dispatchCart({
			type: "ADD",
			items: { name, id, price, amount: Number(event.target[0].value) },
		});
	}

	return (
		<div className={styles.item}>
			<div className={styles.text}>
				<h2 className={styles.name}>{name}</h2>
				<p className={styles.desc}>{description}</p>
				<p className={styles.price}>{price}$</p>
			</div>
			<form className={styles.actions} onSubmit={addItem}>
				<div className={styles.top}>
					<label className={styles.amount}>Amount</label>
					<input
						className={styles.number}
						type="number"
						min="1"
						max="5"
						defaultValue="1"
					></input>
				</div>
				<Button type="submit">+ Add</Button>
			</form>
		</div>
	);
}

export default Item;
