import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Playlist from "./Playlist/Playlist";
import { CHANGE_FILTER } from "../redux/playlistReducer";
import {
  filterSearchSelector,
  searchSelector,
  playlistSelector,
} from "../redux/selectors";
import { CHANGE_INPUT, openClose } from "../redux/modalReducer";
import HeaderContainer from "./HeaderContainer";

const PlaylistContainer = () => {
  let playlist = useSelector(searchSelector);
  let search = useSelector(filterSearchSelector);
  const dispatch = useDispatch();

  let handleOpenCloseEdit = useCallback(
    (id, singer, song, date) => {
      dispatch(openClose({ type: "edit", id: id }));
      dispatch(CHANGE_INPUT({ singer: singer, song: song, date: date }));
    },
    [dispatch]
  );
  let handleOpenCloseView = useCallback(
    (id) => {
      dispatch(openClose({ type: "view", id: id }));
    },
    [dispatch]
  );
  const handleChangeFilter = useCallback(
    (text) => {
      dispatch(CHANGE_FILTER(text));
    },
    [dispatch]
  );
  return (
    <div className='container'>
      <HeaderContainer />
      <Playlist
        playlist={playlist}
        onChangeFilter={handleChangeFilter}
        search={search}
        handleOpenCloseEdit={handleOpenCloseEdit}
        handleOpenCloseView={handleOpenCloseView}
      />
    </div>
  );
};

export default PlaylistContainer;
