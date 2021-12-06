import { createSelector } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const selectSelf = (state) => state.playlist;
const selectRouter = (state) => state;
export const playlistSelector = (state) => state.playlist.playlist;
export const filterSearchSelector = (state) => state.playlist.searchFilter;
export const modalSelector = (state) => state.modal;
export const typeModalSelector = (state) => state.modal.modalType;

export const searchSelector = createSelector(
  playlistSelector,
  (_, search) => search.get("search"),
  (playlist, search) => {
    if (!search) {
      return playlist;
    } else {
      let items = playlist.filter(
        (item) => item.singer.includes(search) || item.song.includes(search)
      );
      return items;
    }
  }
);

export const useCustomSelector = (selector, search) => {
  const selectPlaylist = useMemo(selector, []);

  const playlist = useSelector((state) => {
    selectPlaylist(state, search);
  });
  return playlist;
};

export const modalEditSelector = createSelector(
  modalSelector,
  (items) => items
);

export const modalFormSelector = createSelector(modalSelector);

export const modalViewSelector = createSelector(
  playlistSelector,
  modalSelector,
  (playlist, modal) => playlist.filter((item) => item.id == modal.openId)
);
