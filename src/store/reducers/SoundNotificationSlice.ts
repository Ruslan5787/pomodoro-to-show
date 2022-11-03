import {createSlice} from "@reduxjs/toolkit";
import {ISoundNotification} from "../../types/store";

const initialState: ISoundNotification = {
  isSoundNotificationEnabled: true,
};

const soundNotificationSlice = createSlice({
  name: "soundNotification",
  initialState,
  reducers: {
    toggleSoundNotificationState(state) {
      state.isSoundNotificationEnabled = !state.isSoundNotificationEnabled;
    },
  },
});

export const {toggleSoundNotificationState} = soundNotificationSlice.actions;
export default soundNotificationSlice.reducer;
