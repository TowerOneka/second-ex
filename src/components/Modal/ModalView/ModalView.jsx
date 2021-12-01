import React from "react";
import s from "./../Modal.module.scss";
import style from "./ModalView.module.scss";

const ModalView = (props) => {
  return (
    <div className={s.modal}>
      <div className={s.modalDialog}>
        <div className={s.modalHeader}>
          <p className={s.modalTitle}>Single view</p>
          <span className={s.modalClose} onClick={props.handleOpenClose}>
            &times;
          </span>
        </div>
        <div className={s.modalContent}>
          <div className={s.form}>
            <div className={s.inputContainer}>
              <p className={style.label}>Singer Name</p>
              <p className={style.label}>{props.singer}</p>
            </div>
            <div className={s.inputContainer}>
              <p className={style.label}>Song title</p>
              <p className={style.label}>{props.song}</p>
            </div>
            <div className={s.inputContainer}>
              <p className={style.label}>Release Date</p>
              <p className={style.label}>{props.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalView;
