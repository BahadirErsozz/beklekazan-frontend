import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const chatsSlice = createSlice({
  name: "chats",
  initialState: {
    chats: [],
  },
  reducers: {
    addToChats: (state, { payload }) => {
      state.chats = [...state.chats, payload.chat];
    },
    resetChats: (state, { payload }) => {
      state.chats = [];
    },
  },
});

export const { addToChats, resetChats } = chatsSlice.actions;

export default chatsSlice.reducer;
