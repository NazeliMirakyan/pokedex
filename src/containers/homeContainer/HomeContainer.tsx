import React from "react";

import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";

import style from "./HomeContainer.module.scss";
import LimitFilter from "~/components/LimitFilter/LimitFilter";

const HomeContainer: React.FC = () => (
  <div className={style.wrapper}>
    <Header />
    <LimitFilter />
    <Content />
  </div>
);

export default HomeContainer;
