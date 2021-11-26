import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  date: "",
  sing: "",
  singer: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {},
});
