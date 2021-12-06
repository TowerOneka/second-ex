import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("playlist")
  ? JSON.parse(localStorage.getItem("playlist"))
  : {
      playlist: [],
      searchFilter: "",
    };

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    ADD_SINGLE: (state, action) => {
      let newId;
      if (state.playlist.length === 0) {
        newId = 0;
      } else {
        newId = state.playlist[state.playlist.length - 1].id + 1;
      }
      state.playlist = [
        ...state.playlist,
        {
          id: newId,
          singer: action.payload.singer,
          song: action.payload.song,
          date: action.payload.date,
        },
      ];
      localStorage.setItem("playlist", JSON.stringify(state));
    },
    EDIT_SINGLE: (state, action) => {
      console.log(action);
      state.playlist.forEach((item) => {
        if (item.id === action.payload.id) {
          if (!action.payload.singer) {
            return null;
          } else {
            item.singer = action.payload.singer;
            item.song = action.payload.song;
            item.date = action.payload.date;
          }
        }
      });
      localStorage.setItem("playlist", JSON.stringify(state));
    },
    DELETE_SINGLE: (state, action) => {
      state.playlist.forEach((item, index) => {
        if (item.id === action.payload) {
          state.playlist.splice(index, 1);
        }
      });
      localStorage.setItem("playlist", JSON.stringify(state));
    },
    CHANGE_FILTER: (state, action) => {
      state.searchFilter = action.payload;
      localStorage.setItem("playlist", JSON.stringify(state));
    },
  },
});

export const { ADD_SINGLE, EDIT_SINGLE, DELETE_SINGLE, CHANGE_FILTER } =
  playlistSlice.actions;

export default playlistSlice.reducer;
