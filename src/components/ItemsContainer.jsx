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
  const params = useParams();
  const dispatch = useDispatch();
  let itemId = params.itemId;
  const isFetching = useSelector(fetchingSelector);
  useEffect(() => {
    dispatch({ type: "GET_CURRENT_SINGLE", payload: itemId });
  }, [dispatch]);

  let item = useSelector(modalEditSelector);

  return isFetching ? (
    <Fetcing />
  ) : (
    <Item id={item.id} singer={item.singer} song={item.song} date={item.date} />
  );
};

export default ItemsContainer;
