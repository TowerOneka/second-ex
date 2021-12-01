import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state) => state.playlist;
const selectAll = (state) => state;
export const playlistSelector = (state) => state.playlist.playlist;
export const filterSearchSelector = (state) => state.playlist.searchFilter;
export const modalSelector = (state) => state.modal;
export const typeModalSelector = (state) => state.modal.modalType;

export const searchSelector = createSelector(selectSelf, (playlist) => {
  if (playlist.searchFilter == "") {
    return playlist.playlist;
  } else {
    let items = playlist.playlist.filter(
      (item) =>
        item.singer.includes(playlist.searchFilter) ||
        item.song.includes(playlist.searchFilter)
    );
    return items;
  }
});

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
