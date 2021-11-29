import React, { useCallback } from "react";
import Header from "./Header/Header";
import { useDispatch } from "react-redux";
import { openClose } from "../redux/modalReducer";

const HeaderContainer = (props) => {
  const dispatch = useDispatch();
  let handleOpenCloseHeader = useCallback(() => {
    dispatch(openClose({ type: "form" }));
  }, [dispatch]);
  return (
    <div>
      <Header handleOpenCloseHeader={handleOpenCloseHeader} />
    </div>
  );
};

export default HeaderContainer;
