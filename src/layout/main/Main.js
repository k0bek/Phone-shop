import styles from "./Main.module.css";
import Item from "../../components/item/Item";
import PHONES_LIST from "../../data/PHONES_LIST";

function Main() {
	const phonesList = PHONES_LIST.map((phone) => {
		return (
			<Item
				id={phone.id}
				key={phone.id}
				name={phone.name}
				description={phone.description}
				price={phone.price}
			></Item>
		);
	});
	return <main>{phonesList}</main>;
}

export default Main;
