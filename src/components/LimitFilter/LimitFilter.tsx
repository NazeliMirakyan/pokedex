import React from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "~/hooks";
import { dataSelectors } from "~/redux";
import { setLimit } from "~/redux/data/slice";
import { optionNumbers } from "~/constants/limitConstsnt";

import style from "./limit.module.scss";

const limitOptions = optionNumbers?.map((numbers, i) => (
  <option key={i} value={numbers} className={style.custom_select_type_option}>
    {numbers}
  </option>
));

const LimitFilter: React.FC = () => {
  const dispatch = useDispatch();
  const limit = useAppSelector(dataSelectors.selectLimit);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLimit(Number(e.target.value)));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_custom_select}>
        <label className={style.wrapper_custom_select_label} htmlFor="pages">
          Show per page:
        </label>

        <select
          value={limit}
          className={style.wrapper_custom_select_type}
          name="pages"
          onChange={handleChange}
        >
          {limitOptions}
        </select>
      </div>
    </div>
  );
};

export default LimitFilter;
