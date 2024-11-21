import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const announcementsSlice = createSlice({
  name: "announcements",
  initialState: {
    announcements: [],
  },
  reducers: {
    addToAnnouncements: (state, { payload }) => {
      state.announcements = [...state.announcements, payload.announcement];
    },
    resetAnnouncements: (state, { payload }) => {
      state.announcements = [];
    },
  },
});

export const { addToAnnouncements, resetAnnouncements } =
  announcementsSlice.actions;

export default announcementsSlice.reducer;
