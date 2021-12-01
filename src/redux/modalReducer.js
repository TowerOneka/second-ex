import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  date: "",
  song: "",
  singer: "",
  modalType: "form",
  openId: "0",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    CHANGE_SINGER: (state, action) => {
      state.singer = action.payload;
    },
    CHANGE_SONG: (state, action) => {
      state.song = action.payload;
    },
    CHANGE_DATE: (state, action) => {
      state.date = action.payload;
    },
    CHANGE_INPUT: (state, action) => {
      state.singer = action.payload.singer;
      state.song = action.payload.song;
      state.date = action.payload.date;
    },
    EMPTY_INPUT: (state, action) => {
      state.singer = "";
      state.song = "";
      state.date = "";
    },
    openClose: (state, action) => {
      state.isOpen = !state.isOpen;
      state.modalType = action.payload.type;
      state.openId = action.payload.id;
    },
  },
});

export const {
  CHANGE_DATE,
  CHANGE_SINGER,
  CHANGE_SONG,
  openClose,
  EMPTY_INPUT,
  CHANGE_INPUT,
} = modalSlice.actions;

export default modalSlice.reducer;
