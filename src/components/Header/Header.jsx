import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={s.header}>
      <NavLink to='/'>
        <img src={logo} alt='logo' className={s.logo} />
      </NavLink>

      <h1>This site was created for the music of the 90s</h1>
    </div>
  );
};

export default React.memo(Header);
