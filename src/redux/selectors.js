import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state) => state.playlist;
export const playlistSelector = (state) => state.playlist.playlist;
export const filterSearch = (state) => state.playlist.searchFilter;


export const searchSelector = createSelector(
  selectSelf,
  (playlist) => {
    let items = playlist.playlist.filter(item => item.singer.includes(playlist.searchFilter) || item.song.includes(playlist.searchFilter))
    return(items)
  }
);
