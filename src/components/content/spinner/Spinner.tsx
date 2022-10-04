import React from "react";

import style from "./Spinner.module.scss";

const Spinner: React.FC = () => (
  <div className={style.loading_eclipse}>
    <div className={style.loading_eclipse_round}>
      <div className={style.loading_eclipse_round_item}></div>
    </div>
  </div>
);
export default Spinner;
