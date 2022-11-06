import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {arrayMoveImmutable} from "array-move";

import {ITodo, ITodosListsState} from "../../types/store";
import {getFoundTodo} from "../../helpers/getFoundTodo";

const initialState: ITodosListsState = {
  inProcess: [],
  completed: [],
  analyticsInfo: {
    list: [],
    totalNumberTimersSpentOnTasks: 0,
    totalNumberTasks: 0,
    totalNumberCompletedTasks: 0,
    totalTimeSpentOnTasks: 0,
  },
};

const todosListsSlice = createSlice({
  name: "todosLists",
  initialState,
  reducers: {
    addTodoInProcess(state, action: PayloadAction<string>) {
      state.inProcess.push({
        id: new Date().toISOString(),
        completed: false,
        text: action.payload,
        numberTimersSpentOnTodo: 0,
        timeTimersSpentOnTodo: 0,
      });
    },

    addTodoInAnalytics(state, action: PayloadAction<string>) {
      const todo = getFoundTodo(state.inProcess, action.payload);

      const isTaskAlreadyInAnalytics = state.analyticsInfo.list.find(
        (analyticsTodo) => {
          return analyticsTodo.id === todo?.id;
        }
      );

      if (isTaskAlreadyInAnalytics) {
        state.analyticsInfo.list = state.analyticsInfo.list.map(
          (analyticsTodo) => {
            if (analyticsTodo.id === todo?.id) {
              return todo;
            }
            return analyticsTodo;
          }
        );
      } else {
        todo && state.analyticsInfo.list.push(todo);
        state.analyticsInfo.totalNumberTasks += 1;
      }
    },

    updateAnalyticsData(state, action: PayloadAction<string>) {
      const todo = getFoundTodo(state.completed, action.payload);

      state.analyticsInfo.list = state.analyticsInfo.list.map(
        (analyticsTodo) => {
          if (analyticsTodo.id === todo?.id) {
            return todo;
          }

          return analyticsTodo;
        }
      );
    },

    addTodoThatWereDoneTodayUsingTimer(state, action: PayloadAction<string>) {
      const todo = getFoundTodo(state.inProcess, action.payload);

      todo && state.analyticsInfo.list.push(todo);
    },

    toggleCompleteTodo(state, action: PayloadAction<string>) {
      const todo = getFoundTodo(state.inProcess, action.payload);

      if (todo) {
        todo.completed = true;

        state.inProcess = state.inProcess.filter(
          (todo) => todo.id !== action.payload
        );

        state.completed.push(todo);

        const isTaskAlreadyInAnalytics = state.analyticsInfo.list.find(
          (analyticsTodo) => {
            return analyticsTodo.id === todo.id;
          }
        );

        if (!isTaskAlreadyInAnalytics) {
          state.analyticsInfo.list.push(todo);
          state.analyticsInfo.totalNumberTasks += 1;
        }

        state.analyticsInfo.totalNumberCompletedTasks += 1;
      }
    },

    removeTodo(state, action: PayloadAction<string>) {
      state.inProcess = state.inProcess.filter(
        (todo) => todo.id !== action.payload
      );
    },

    moveTodoTop(state, action: PayloadAction<string>) {
      let todoIndex = state.inProcess.findIndex(
        (todo) => todo.id === action.payload
      );

      const moveTodoTop = () => {
        const result = arrayMoveImmutable(
          state.inProcess,
          todoIndex,
          todoIndex - 1
        );

        todoIndex -= 1;
        state.inProcess = result;
      };

      moveTodoTop();
    },

    moveTodoDown(state, action: PayloadAction<string>) {
      let todoIndex = state.inProcess.findIndex(
        (todo) => todo.id === action.payload
      );

      const moveTodoDown = () => {
        const result = arrayMoveImmutable(
          state.inProcess,
          todoIndex,
          todoIndex + 1
        );

        todoIndex += 1;
        state.inProcess = result;
      };

      moveTodoDown();
    },

    addTimerSpentOnTodo(state, action: PayloadAction<string>) {
      state.inProcess = state.inProcess.map((todo: ITodo) => {
        if (todo.id === action.payload) {
          todo.numberTimersSpentOnTodo += 1;
          todo.timeTimersSpentOnTodo += 25;

          state.analyticsInfo.totalTimeSpentOnTasks += 25;
        }

        return todo;
      });

      state.analyticsInfo.totalNumberTimersSpentOnTasks += 1;
    },
  },
});

export const {
  addTodoInAnalytics,
  addTodoInProcess,
  toggleCompleteTodo,
  removeTodo,
  updateAnalyticsData,
  moveTodoTop,
  moveTodoDown,
  addTimerSpentOnTodo,
} = todosListsSlice.actions;
export default todosListsSlice.reducer;
