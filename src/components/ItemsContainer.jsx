import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { modalViewSelector } from "../redux/selectors";
import { SET_OPENID } from "../redux/modalReducer";
import { useDispatch } from "react-redux";
import Item from "../Item";

const ItemsContainer = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  let itemId = params.itemId;
  dispatch(SET_OPENID(itemId));
  let itemArr = useSelector(modalViewSelector);
  let item = itemArr[0];

  return (
    <Item id={item.id} singer={item.singer} song={item.song} date={item.date} />
  );
};

export default ItemsContainer;
