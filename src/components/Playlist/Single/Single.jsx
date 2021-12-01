import React, { useState } from "react";
import s from "./Single.module.scss";
import openIcon from "./../../../assets/images/open.png";
import editIcon from "./../../../assets/images/editing.png";

const Single = (props) => {
  let onOpenView = () => {
    props.handleOpenCloseView(props.id);
  };
  let onOpenEdit = () => {
    props.handleOpenCloseEdit(props.id, props.singer, props.song, props.date);
  };
  return (
    <li className={s.single}>
      <div className={s.singleText}>
        <img
          src={openIcon}
          className={s.openImage}
          alt='view'
          onClick={onOpenView}
        />
      </div>
      <div className={s.singleText}>
        <img
          src={editIcon}
          className={s.openImage}
          alt='edit'
          onClick={onOpenEdit}
        />
      </div>
      <p className={s.singleText}>{props.singer}</p>
      <p className={s.singleText}>{props.song}</p>
      <p className={s.singleText}>{props.date}</p>
    </li>
  );
};

export default React.memo(Single);
