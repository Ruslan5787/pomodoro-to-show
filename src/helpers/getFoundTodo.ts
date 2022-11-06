import {ITodo} from "../types/store";

export const getFoundTodo = (list: ITodo[], idTodo: string) => {
  return list.find((todo: ITodo) => todo.id === idTodo);
};
