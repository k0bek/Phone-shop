import React, { createContext, useReducer, useState } from "react";

export const CartContext = createContext();

function cartReducer(state, action) {
	switch (action.type) {
		case "ADD":
			let totalPrice = state.items.reduce((acc, currentValue) => {
				return acc + currentValue.price * currentValue.amount;
			}, 0);

			totalPrice = totalPrice + action.items.price * action.items.amount;

			let totalAmount = state.items.reduce((acc, currentValue) => {
				return acc + currentValue.amount;
			}, 0);

			totalAmount = totalAmount + action.items.amount;

			const existedItemIndex = state.items.findIndex((item) => {
				return item.id === action.items.id;
			});

			if (existedItemIndex !== -1) {
				const newItems = [...state.items];
				newItems[existedItemIndex] = {
					...newItems[existedItemIndex],
					amount: newItems[existedItemIndex].amount + action.items.amount,
				};
				return {
					items: newItems,
					totalPrice: totalPrice,
					totalItems: totalAmount,
				};
			}

			return {
				items: [...state.items, action.items],
				totalPrice: totalPrice,
				totalItems: totalAmount,
			};

		default:
	}
}

function CartContextProvider({ children }) {
	const [isModalShowed, setModalShowed] = useState(false);
	const [cartState, dispatchCart] = useReducer(cartReducer, {
		items: [],
		totalPrice: 0,
		totalItems: 0,
	});

	console.log(cartState);

	if (isModalShowed) {
		document.querySelector("body").style.overflow = "hidden";
	} else {
		document.querySelector("body").style.overflow = "visible";
	}

	function handleModalShowed() {
		setModalShowed((prev) => {
			return !prev;
		});
	}

	const value = { cartState, dispatchCart };
	return (
		<CartContext.Provider value={{ isModalShowed, handleModalShowed, value }}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContextProvider;
