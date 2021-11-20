import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("playlist")
  ? JSON.parse(localStorage.getItem("playlist"))
  : {
      playlist: [],
    };

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    ADD_SINGLE: (state, action) => {
      let newId;
      if (state.playlist.length === 0) {
        newId = 1;
      } else {
        newId = state.playlist[state.playlist.length - 1].id + 1;
      }
      state.playlist = [
        ...state.playlist,
        { id: newId, singer: action.payload.singer, song: action.payload.song, date: action.payload.date },
      ];
      localStorage.setItem("playlist", JSON.stringify(state));
    },
  },
});

export const {ADD_SINGLE} = playlistSlice.actions;

export default playlistSlice.reducer;
