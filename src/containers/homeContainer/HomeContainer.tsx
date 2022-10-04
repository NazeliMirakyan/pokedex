import React from "react";

import Header from "../../components/header/Header";
import Content from "../../components/content/Content";
import Filter from "../../components/sort/Filter";

import style from "./homeContainer.module.scss";

const HomeContainer: React.FC = () => (
  <div className={style.wrapper}>
    <Header />
    <Filter />
    <Content />
  </div>
);

export default HomeContainer;
