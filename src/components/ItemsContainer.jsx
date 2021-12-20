import React from "react";
import { useSelector } from "react-redux";
import {
  modalEditSelector,
  fetchingSelector,
} from "../redux/selectors/selectors";
import Item from "../Item";
import Fetcing from "./Fetching";

const ItemsContainer = () => {
  const isFetching = useSelector(fetchingSelector);
  let item = useSelector(modalEditSelector);

  return isFetching ? (
    <Fetcing />
  ) : (
    <Item id={item.id} singer={item.singer} song={item.song} date={item.date} />
  );
};

export default ItemsContainer;
