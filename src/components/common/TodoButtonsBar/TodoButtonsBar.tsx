import React, {FC, memo} from "react";
import {NavLink} from "react-router-dom";

import styles from "./TodoButtonsBar.module.scss";

import {moveTodoDown, moveTodoTop, removeTodo,} from "../../../store/reducers/TodosListsSlice";

import {clearTodoToPerform, selectTodoToPerform,} from "../../../store/reducers/SelectedTodoToPerformSlice";

import {useAppDispatch} from "../../../hooks/redux";

import {ArrowDownIcon, ArrowTopIcon, DeleteIcon, OutIcon,} from "../../../images";

import {TodoButtonBar} from "./TodoButtonBar";

interface ButtonsBarProps {
  todoId: string;
  todoSerialNumber: number;
  numberTasksInList?: number;
  todoText: string;
}

export const TodoButtonsBar: FC<ButtonsBarProps> = memo((props) => {
  const {todoId, todoText, todoSerialNumber, numberTasksInList} = props;
  const dispatch = useAppDispatch();

  const isTodoFirstInList = todoSerialNumber === 0;
  const isTodoLastInList = todoSerialNumber === numberTasksInList;

  const handleDeleteTodo = () => {
    dispatch(clearTodoToPerform());
    dispatch(removeTodo(todoId));
  };

  return (
    <div className={styles.buttons_bar}>
      <TodoButtonBar image={<DeleteIcon/>} handleClick={handleDeleteTodo}/>
      <TodoButtonBar
        image={<ArrowTopIcon/>}
        hideButton={isTodoFirstInList}
        handleClick={() => dispatch(moveTodoTop(todoId))}
      />
      <TodoButtonBar
        image={<ArrowDownIcon/>}
        hideButton={isTodoLastInList}
        handleClick={() => dispatch(moveTodoDown(todoId))}
      />
      <NavLink to="/">
        <TodoButtonBar
          image={<OutIcon/>}
          handleClick={() =>
            dispatch(selectTodoToPerform({todoId, todoText}))
          }
        />
      </NavLink>
    </div>
  );
});
