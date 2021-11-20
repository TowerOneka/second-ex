import React, { useState } from "react";
import Modal from './../../Modal';
import s from "./Single.module.scss";
import openIcon from "./../../../assets/images/open.png";

const Single = (props) => {
  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);

  return (
    <li className={s.single}>
      <div className={s.singleText}>
        <img
          src={openIcon}
          className={s.openImage}
          alt='View'
          onClick={() => {
            setModal(true);
          }}
        />
      </div>

      <p className={s.singleText}>{props.singer}</p>
      <p className={s.singleText}>{props.song}</p>
      <p className={s.singleText}>{props.date}</p>
      <Modal
        visible={isModal}
        modalType={"view"}
        singer={props.singer}
        song={props.song}
        date={props.date}
        onClose={onClose}
        onSubmit={props.onSubmit}
      />
    </li>
  );
};

export default Single;
