import styles from "./Button.module.css";

function Button({ type, children, onClick }) {
	return (
		<button className={styles.btn} type={type} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
