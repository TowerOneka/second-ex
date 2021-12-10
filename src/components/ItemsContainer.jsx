import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import {
  modalEditSelector,
  fetchingSelector,
} from "../redux/selectors/selectors";
import { SET_OPENID } from "../redux/reducers/modalReducer";
import { useDispatch } from "react-redux";
import Item from "../Item";
import Fetcing from "./Fetching";

const ItemsContainer = (props) => {
  const isFetching = useSelector(fetchingSelector);
  let item = useSelector(modalEditSelector);

  return isFetching ? (
    <Fetcing />
  ) : (
    <Item id={item.id} singer={item.singer} song={item.song} date={item.date} />
  );
};

export default ItemsContainer;
