import React from "react";

import LimitFilter from "./limitFilter/LimitFilter";
import style from "./filter.module.scss";

const Filter: React.FC = () => (
  <div className={style.wrapper}>
    <LimitFilter />
  </div>
);

export default Filter;
