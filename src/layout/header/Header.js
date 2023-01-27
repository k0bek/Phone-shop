import React from "react";
import Cart from "./components/shopping-cart/ShoppingCart";
import Description from "./components/description/Description";

import Wrapper from "../../utils/Wrapper";

import styles from "./Header.module.css";

function Header() {
	return (
		<React.Fragment>
			<header className={styles.header}>
				<Wrapper>
					<div className={styles["header-box"]}>
						<p className={styles.company}>ReactTech</p>
						<Cart></Cart>
					</div>
				</Wrapper>
			</header>
			<div className={styles["header-img"]}></div>
			<Description></Description>
		</React.Fragment>
	);
}

export default Header;
