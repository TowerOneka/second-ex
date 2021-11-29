import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Playlist from "./Playlist/Playlist";
import { CHANGE_FILTER } from "../redux/playlistReducer";
import {
  filterSearch,
  searchSelector,
  playlistSelector,
} from "../redux/selectors";
import { openClose } from "../redux/modalReducer";
import HeaderContainer from "./HeaderContainer";

const PlaylistContainer = () => {
  let playlist;
  let allPlaylist = useSelector(playlistSelector);
  let searchPlaylist = useSelector(searchSelector);
  let search = useSelector(filterSearch);
  if (search == "") {
    playlist = allPlaylist;
  } else {
    playlist = searchPlaylist;
  }

  const dispatch = useDispatch();

  let handleOpenCloseEdit = useCallback(
    (id) => {
      dispatch(openClose({ type: "edit", id: id }));
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
