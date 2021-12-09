import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: [],
  isFetching: false,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    EDIT_SINGLE: (state, action) => {
      console.log(action);
      state.playlist.forEach((item) => {
        if (item.id === action.payload.id) {
          if (!action.payload.singer) return;
          item.singer = action.payload.singer;
          item.song = action.payload.song;
          item.date = action.payload.date;
        }
      });
    },
    DELETE_SINGLE: (state, action) => {
      state.playlist.forEach((item, index) => {
        if (item.id === action.payload) {
          state.playlist.splice(index, 1);
        }
      });
    },
    PLAYLIST_LOADED: (state, action) => {
      state.playlist = action.payload;
    },
    ADD_SINGLE: (state, action) => {
      let newId;
      if (state.playlist.length === 0) {
        newId = 0;
      } else {
        newId = state.playlist[state.playlist.length - 1].id + 1;
      }
      state.playlist.push({
        id: newId,
        singer: action.payload.single.singer,
        song: action.payload.single.song,
        date: action.payload.single.date,
      });
    },
    CHANGE_FETCH: (state) => {
      state.isFetching = !state.isFetching;
    },
  },
});

export const {
  ADD_SINGLE,
  EDIT_SINGLE,
  DELETE_SINGLE,
  CHANGE_FILTER,
  PLAYLIST_LOADED,
  CHANGE_FETCH,
} = playlistSlice.actions;

export default playlistSlice.reducer;
