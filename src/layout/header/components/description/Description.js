import styles from "./Description.module.css";

function Description() {
	return (
		<div className={styles.summary}>
			<h1>ReactShop, the best place with technology for you!</h1>
			<p>
				{" "}
				An e-commerce store that specializes in selling the latest smartphones
				and laptops, featuring cutting-edge technology such as AI-assisted
				search, virtual reality product demonstrations and augmented
				reality-powered product visualization. Customers can also enjoy fast and
				secure checkout, real-time inventory updates and detailed product
				information.
			</p>
		</div>
	);
}

export default Description;
