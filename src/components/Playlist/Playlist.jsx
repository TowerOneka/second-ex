import React from "react";
import s from "./Playlist.module.scss";
import item from "./Single/Single.module.scss";
import Single from "./Single";

const Playlist = (props) => {
  return (
    <ul className={s.playlist}>
      <li className={item.single}>
        <p className={item.singleText}>View</p>
        <p className={item.singleText}>Singer Name</p>
        <p className={item.singleText}>Song Title</p>
        <p className={item.singleText}>Release Date</p>
      </li>
      {props.playlist.map((single) => (
        <Single
          key={single.id}
          id={single.id}
          singer={single.singer}
          song={single.song}
          date={single.date}
        />
      ))}
    </ul>
  );
};

export default Playlist;
