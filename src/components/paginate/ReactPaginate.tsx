import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";

import { dataSelectors } from "~/redux";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { fetchPokemons } from "~/redux/data/thunks";
import { setOffset } from "~/redux/data/slice";

import style from "../Content/Content.module.scss";

const PaginatedItems: React.FC = () => {
  const dispatch = useAppDispatch();

  const name = useAppSelector(dataSelectors.selectName);
  const offset = useAppSelector(dataSelectors.selectOffset);
  const limit = useAppSelector(dataSelectors.selectLimit);
  const pageCount = useAppSelector(dataSelectors.selectPageCount);

  const pageIndex = Math.floor(offset / limit);

  useEffect(() => {
    const nextOffset = pageIndex * limit;

    dispatch(fetchPokemons({ limit, offset: nextOffset }));
  }, [dispatch, limit, name, offset, pageIndex]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    dispatch(setOffset(selected));
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">>"
      forcePage={pageIndex}
      onPageChange={handlePageChange}
      pageCount={pageCount}
      previousLabel="<<"
      containerClassName={style.pagination}
      pageLinkClassName={style.pagination_page_num}
      previousClassName={style.pagination_page_num}
      nextLinkClassName={style.pagination_page_num}
      activeClassName={style.pagination_page_num_active}
    />
  );
};
export default PaginatedItems;
