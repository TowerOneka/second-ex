import React, { useCallback } from "react";
import s from "./Single.module.scss";
import openIcon from "./../../../assets/images/open.png";
import editIcon from "./../../../assets/images/editing.png";
import linkIcon from "./../../../assets/images/link.png";
import { Link } from "react-router-dom";

const Single = (props) => {
  let onOpenView = useCallback(() => {
    props.handleOpenCloseView(props.id);
  }, [props.handleOpenCloseView]);
  let onOpenEdit = useCallback(() => {
    props.handleOpenCloseEdit(props.id, props.singer, props.song, props.date);
  }, [props.handleOpenCloseEdit]);
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
      <Link to={"/items/" + props.id}>
        <div className={s.singleText}>
          <img src={linkIcon} className={s.openImage} alt='link' />
        </div>
      </Link>
      <p className={s.singleText}>{props.singer}</p>
      <p className={s.singleText}>{props.song}</p>
      <p className={s.singleText}>{props.date}</p>
    </li>
  );
};

export default React.memo(Single);
