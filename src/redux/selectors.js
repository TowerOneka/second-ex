import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state) => state.playlist;
const selectAll = (state) => state;
export const playlistSelector = (state) => state.playlist.playlist;
export const filterSearch = (state) => state.playlist.searchFilter;
export const modalSelector = (state) => state.modal;

export const searchSelector = createSelector(selectSelf, (playlist) => {
  let items = playlist.playlist.filter(
    (item) =>
      item.singer.includes(playlist.searchFilter) ||
      item.song.includes(playlist.searchFilter)
  );
  return items;
});

export const modalEdit = createSelector(playlistSelector, (playlist) => {
  return playlist;
});

export const modalForm = createSelector(modalSelector);

export const modalView = createSelector(playlistSelector, (playlist) => {
  return playlist;
});
