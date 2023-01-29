import Item from "../item/Item";
import PHONES_LIST from "../../data/PHONES_LIST";
import styles from "./PhoneList.module.css";

function PhoneList() {
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
	return <main className={styles.main}>{phonesList}</main>;
}

export default PhoneList;
