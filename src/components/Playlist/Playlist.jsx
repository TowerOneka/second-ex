import React, { useCallback, useEffect } from "react";
import s from "./Playlist.module.scss";
import item from "./Single/Single.module.scss";
import Single from "./Single";
import searchIcon from "./../../assets/images/search.png";

const Playlist = (props) => {
  let handleOnClick = useCallback(() => {
    props.handleOpenCloseForm();
  }, [props.handleOpenCloseForm]);

  return (
    <div className={s.playlistWrap}>
      <div className={s.search}>
        <img src={searchIcon} className={s.searchImg} alt='' />
        <input
          type='text'
          className={s.searchInput}
          value={props.searchParams.get("search") || ""}
          onChange={props.handleChange}
        />
        <button onClick={handleOnClick} className={s.addButton}>
          Add single
        </button>
      </div>

      <ul className={s.playlist}>
        <li className={item.single}>
          <p className={item.singleText}>View</p>
          <p className={item.singleText}>Edit</p>
          <p className={item.singleText}>Link</p>
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
            onSubmitEdit={props.onEditForm}
            handleOpenCloseEdit={props.handleOpenCloseEdit}
            handleOpenCloseView={props.handleOpenCloseView}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Playlist);
