import React, { useState } from "react";
import Modal from './../../Modal';
import s from "./Single.module.scss";
import openIcon from "./../../../assets/images/open.png";
import editIcon from './../../../assets/images/editing.png';

const Single = (props) => {
  const [isModal, setModal] = useState([false, '']);
  const onClose = () => setModal(false);
  return (
    <li className={s.single}>
      <div className={s.singleText}>
        <img
          src={openIcon}
          className={s.openImage}
          alt='view'
          onClick={() => {
            setModal([true, 'view']);
          }}
        />
      </div>
      <div className={s.singleText}>
        <img
          src={editIcon}
          className={s.openImage}
          alt='edit'
          onClick={() => {
            setModal([true, 'edit']);
          }}
        />
      </div>
      
      <p className={s.singleText}>{props.singer}</p>
      <p className={s.singleText}>{props.song}</p>
      <p className={s.singleText}>{props.date}</p>
      <Modal
        visible={isModal[0]}
        modalType={isModal[1]}
        id={props.id}
        singer={props.singer}
        song={props.song}
        date={props.date}
        onClose={onClose}
        onSubmitEdit={props.onSubmitEdit}
        onDelete={props.onDelete}
      />
    </li>
  );
};

export default Single;
