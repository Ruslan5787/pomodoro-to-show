import {RootState} from "./store";

export const getSoundNotificationEnabled = (state: RootState) => {
  return state.soundNotification.isSoundNotificationEnabled;
};

export const getTodoId = (state: RootState) => {
  return state.selectedTodoToPerform.todoId;
};

export const getTodoText = (state: RootState) => {
  return state.selectedTodoToPerform.todoText;
};

export const getTodoToPerformInfo = (state: RootState) => {
  return state.selectedTodoToPerform;
};
