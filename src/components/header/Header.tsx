import React from "react";

import style from "./Header.module.scss";
import Logo from "./Logo/Logo";

const Header: React.FC = () => (
  <div className={style.logo_container}>
    <Logo />
  </div>
);

export default Header;
