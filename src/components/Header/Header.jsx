import React, { useState } from "react";
import s from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import Modal from './../Modal';

const Header = (props) => {
  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);
  return (
    <div className={s.header}>
      <img src={logo} alt='logo' className={s.logo} />
      <h1>This site was created for the music of the 90s</h1>
      <button onClick={() => {setModal(true)}} className={s.addButton}>Add single</button>
      <Modal visible={isModal} modalType={"form"} onClose={onClose} onSubmit={props.onSubmit}/>
    </div>
  );
};

export default Header;
