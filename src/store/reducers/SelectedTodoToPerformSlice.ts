import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ISelectedTodoToPerform} from "../../types/store";

const initialState: ISelectedTodoToPerform = {
  todoId: "",
  todoText: "",
};

const selectedTodoToPerformSlice = createSlice({
  name: "selectedTodoToPerform",
  initialState,
  reducers: {
    selectTodoToPerform(state, action: PayloadAction<ISelectedTodoToPerform>) {
      state.todoId = action.payload.todoId;
      state.todoText = action.payload.todoText;
    },

    clearTodoToPerform(state) {
      state.todoId = "";
      state.todoText = "";
    },
  },
});

export const {selectTodoToPerform, clearTodoToPerform} =
  selectedTodoToPerformSlice.actions;
export default selectedTodoToPerformSlice.reducer;
