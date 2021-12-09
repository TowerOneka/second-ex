import React from "react";
import s from "./../Modal.module.scss";
import style from "./ModalEdit.module.scss";

const ModalEdit = (props) => {
  let handleChangeSinger = (e) => {
    props.handleChangeSinger(e.target.value);
  };
  let handleChangeSong = (e) => {
    props.handleChangeSong(e.target.value);
  };
  let handleChangeDate = (e) => {
    props.handleChangeDate(e.target.value);
  };
  let onSubmitEdit = (e) => {
    e.preventDefault();
    props.onEditForm(props.id, props.singer, props.song, props.date);
    props.handleOpenClose();
  };
  let handleDelete = (e) => {
    e.preventDefault();
    props.onDelete(props.id);
    props.handleOpenClose();
  };
  return (
    <div className={s.modal}>
      <div className={s.modalDialog}>
        <div className={s.modalHeader}>
          <p className={s.modalTitle}>Edit single</p>
          <span className={s.modalClose} onClick={props.handleOpenClose}>
            &times;
          </span>
        </div>
        <div className={s.modalContent}>
          <form className={s.form} onSubmit={onSubmitEdit}>
            <div className={s.inputContainer}>
              <label htmlFor={s.singleAuthor} className={s.label}>
                Singer Name
              </label>
              <input
                id={s.singleAuthor}
                className={style.smallInput}
                type='text'
                value={props.singer}
                onChange={handleChangeSinger}
                required
              />
            </div>
            <div className={s.inputContainer}>
              <label htmlFor={s.singleName} className={s.label}>
                Song title
              </label>
              <input
                id={s.singleName}
                className={style.smallInput}
                type='text'
                value={props.song}
                onChange={handleChangeSong}
                required
              />
            </div>

            <div className={s.inputContainer}>
              <label htmlFor={s.singleName} className={s.label}>
                Release Date
              </label>
              <input
                type='date'
                className={style.smallInput}
                name=''
                id=''
                value={props.date}
                onChange={handleChangeDate}
                required
              />
            </div>
            <button type='submit' className={style.submitButton}>
              Save Edit
            </button>
            <button onClick={handleDelete} className={style.deleteButton}>
              Delete Single
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
