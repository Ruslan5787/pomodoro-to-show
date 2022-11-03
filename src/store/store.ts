import {combineReducers, configureStore} from "@reduxjs/toolkit";

import todosListsReducer from "./reducers/TodosListsSlice";
import selectedTodoToPerformReducer from "./reducers/SelectedTodoToPerformSlice";
import soundNotificationReducer from "./reducers/SoundNotificationSlice";

const rootReducer = combineReducers({
  todosLists: todosListsReducer,
  selectedTodoToPerform: selectedTodoToPerformReducer,
  soundNotification: soundNotificationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
