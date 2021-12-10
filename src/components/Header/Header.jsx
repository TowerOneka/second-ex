import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={s.header}>
      <Link to='/'>
        <img src={logo} alt='logo' className={s.logo} />
      </Link>

      <h1>This site was created for the music of the 90s</h1>
    </div>
  );
};

export default React.memo(Header);
