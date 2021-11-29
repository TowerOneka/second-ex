import React from "react";
import s from "./../Modal.module.scss";

const ModalForm = (props) => {
  let onSubmitForm = (e) => {
    e.preventDefault();
    props.onSubmit(props.singer, props.song, props.date);
    props.handleOpenClose();
  };
  let handleChangeSinger = (e) => {
    props.handleChangeSinger(e.target.value);
  };
  let handleChangeSong = (e) => {
    props.handleChangeSong(e.target.value);
  };
  let handleChangeDate = (e) => {
    props.handleChangeDate(e.target.value);
  };
  return (
    <div className={s.modal}>
      <div className={s.modalDialog}>
        <div className={s.modalHeader}>
          <p className={s.modalTitle}>Add single</p>
          <span className={s.modalClose} onClick={props.handleOpenClose}>
            &times;
          </span>
        </div>
        <div className={s.modalContent}>
          <form className={s.form} onSubmit={onSubmitForm}>
            <div className={s.inputContainer}>
              <label>Singer Name</label>
              <input
                value={props.singer}
                onChange={handleChangeSinger}
                required
              />
            </div>
            <div className={s.inputContainer}>
              <label>Song title</label>
              <input
                id='singleName'
                type='text'
                value={props.song}
                onChange={handleChangeSong}
                required
              />
            </div>
            <div className={s.inputContainer}>
              <label htmlFor={s.singleName}>Release Date</label>
              <input
                type='date'
                name=''
                id=''
                value={props.date}
                onChange={handleChangeDate}
                required
              />
            </div>
            <button type='submit' className={s.submitButton}>
              Add single
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
