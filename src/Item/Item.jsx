import React from "react";
import s from "./Item.module.scss";
import vinylIcon from "./../assets/images/vinyl-record.png";

const Item = (props) => {
  return (
    <div className={s.single}>
      <div className={s.image}>
        <img src={vinylIcon} alt='song_picture' />
      </div>
      <div className={s.songInfo}>
        <p>Singer: {props.singer}</p>
        <p>Song title: {props.song}</p>
        <p>Release Date: {props.date}</p>
      </div>
    </div>
  );
};

export default React.memo(Item);
