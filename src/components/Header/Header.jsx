import React, { useCallback } from "react";
import s from "./Header.module.scss";
import logo from "../../assets/images/logo.png";

const Header = (props) => {
  let handleOnClick = useCallback(() => {
    props.handleOpenCloseHeader();
  });

  return (
    <div className={s.header}>
      <img src={logo} alt='logo' className={s.logo} />
      <h1>This site was created for the music of the 90s</h1>
      <button onClick={handleOnClick} className={s.addButton}>
        Add single
      </button>
    </div>
  );
};

export default React.memo(Header);
