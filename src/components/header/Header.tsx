import React from "react";

import styles from "./header.module.scss";
import Logo from "./logo/Logo";

const Header: React.FC = () => (
  <div className={styles.logo_container}>
    <Logo />
  </div>
);

export default Header;
