import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Playlist from "./Playlist/Playlist";
import { CHANGE_FILTER } from "../redux/playlistReducer";
import { useSearchParams } from "react-router-dom";
import {
  filterSearchSelector,
  searchSelector,
  playlistSelector,
  useCustomSelector,
} from "../redux/selectors";
import { CHANGE_INPUT, openClose } from "../redux/modalReducer";
import ModalContainer from "./ModalContainer";

const PlaylistContainer = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let handleChange = useCallback(
    (e) => {
      let search = e.target.value;
      if (search) {
        setSearchParams({ search });
      } else {
        setSearchParams({});
      }
    },
    [setSearchParams]
  );
  let playlist = useCustomSelector(searchSelector, searchParams);
  /* let playlist = useSelector((state) => searchSelector(state, searchParams)); */
  console.log(playlist);
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
  let handleOpenCloseForm = useCallback(() => {
    dispatch(openClose({ type: "form" }));
  }, [dispatch]);
  return (
    <>
      <Playlist
        playlist={playlist}
        searchParams={searchParams}
        handleChange={handleChange}
        onChangeFilter={handleChangeFilter}
        handleOpenCloseForm={handleOpenCloseForm}
        handleOpenCloseEdit={handleOpenCloseEdit}
        handleOpenCloseView={handleOpenCloseView}
      />
      <ModalContainer />
    </>
  );
};

export default PlaylistContainer;
