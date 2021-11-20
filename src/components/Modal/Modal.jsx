import React, { useEffect, useState } from "react";
import s from "./Modal.module.scss";

const Modal = (props) => {
  const [singer, setSinger] = useState("");
  const [song, setSong] = useState("");
  const [date, setDate] = useState("");
  const onKeydown = (e) => {
    switch (e.key) {
      case "Escape":
        props.onClose();
        break;
    }
  };
  let onSubmitForm = (e) => {
    e.preventDefault();
    props.onSubmit(singer, song, date);
    props.onClose();
  };
  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  if (!props.visible) return null;
  if (props.modalType === "form") {
    return (
      <div className={s.modal}>
        <div className={s.modalDialog}>
          <div className={s.modalHeader}>
            <p className={s.modalTitle}>Add single</p>
            <span className={s.modalClose} onClick={props.onClose}>
              &times;
            </span>
          </div>
          <div className={s.modalContent}>
            <form className={s.form} onSubmit={onSubmitForm}>
              <div className={s.inputContainer}>
                <label htmlFor={s.singleAuthor} className={s.label}>
                  Singer Name
                </label>
                <input
                  id={s.singleAuthor}
                  className={s.smallInput}
                  type='text'
                  value={singer}
                  onChange={(e) => setSinger(e.target.value)}
                  required
                />
              </div>
              <div className={s.inputContainer}>
                <label htmlFor={s.singleName} className={s.label}>
                  Song title
                </label>
                <input
                  id={s.singleName}
                  className={s.smallInput}
                  type='text'
                  value={song}
                  onChange={(e) => setSong(e.target.value)}
                  required
                />
              </div>

              <div className={s.inputContainer}>
                <label htmlFor={s.singleName} className={s.label}>
                  Release Date
                </label>
                <input
                  type='date'
                  name=''
                  id=''
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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
  } else if (props.modalType === "view") {
      return(<div className={s.modal}>
        <div className={s.modalDialog}>
          <div className={s.modalHeader}>
            <p className={s.modalTitle}>Single view</p>
            <span className={s.modalClose} onClick={props.onClose}>
              &times;
            </span>
          </div>
          <div className={s.modalContent}>
            <div className={s.form}>
              <div className={s.inputContainer}>
                <p className={s.label}>
                  Singer Name
                </p>
                <p className={s.label}>{props.singer}</p>
              </div>
              <div className={s.inputContainer}>
                <p className={s.label}>
                  Song title
                </p>
                <p className={s.label}>{props.song}</p>
              </div>
              <div className={s.inputContainer}>
                <p className={s.label}>
                  Release Date
                </p>
                <p className={s.label}>{props.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
