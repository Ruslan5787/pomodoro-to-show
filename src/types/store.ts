export interface ITodo {
  id: string;
  completed: boolean;
  text: string;
  numberTimersSpentOnTodo: number;
  timeTimersSpentOnTodo: number;
}

export interface ITodosListsState {
  inProcess: ITodo[];
  completed: ITodo[];
  analyticsInfo: IAnalyticsInfo;
}

interface IAnalyticsInfo {
  list: ITodo[];
  totalNumberTimersSpentOnTasks: number;
  totalNumberTasks: number;
  totalNumberCompletedTasks: number;
  totalTimeSpentOnTasks: number;
}

export interface ISelectedTodoToPerform {
  todoId: string;
  todoText: string;
}

export interface ISoundNotification {
  isSoundNotificationEnabled: boolean;
}
