import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Playlist from "./Playlist/Playlist";
import { CHANGE_FILTER } from "../redux/reducers/playlistReducer";
import { useSearchParams } from "react-router-dom";
import {
  filterSearchSelector,
  searchSelector,
  playlistSelector,
  fetchingSelector,
} from "../redux/selectors/selectors";
import { CHANGE_INPUT, openClose } from "../redux/reducers/modalReducer";
import ModalContainer from "./ModalContainer";
import { useCustomSelector } from "./../redux/hooks/hooks";

const PlaylistContainer = () => {
  const dispatch = useDispatch();

  const isFetching = useSelector(fetchingSelector);

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

  let handleOpenCloseForm = useCallback(() => {
    dispatch(openClose({ type: "form" }));
  }, [dispatch]);

  return (
    <>
      <Playlist
        isFetching={isFetching}
        playlist={playlist}
        searchParams={searchParams}
        handleChange={handleChange}
        handleOpenCloseForm={handleOpenCloseForm}
        handleOpenCloseEdit={handleOpenCloseEdit}
        handleOpenCloseView={handleOpenCloseView}
      />
      <ModalContainer />
    </>
  );
};

export default PlaylistContainer;
