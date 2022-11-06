import React, {FC, memo, ReactNode} from "react";
import {toggleCompleteTodo, updateAnalyticsData,} from "../../../store/reducers/TodosListsSlice";

import styles from "./Todo.module.scss";

import {ITodo} from "../../../types/store";
import {useAppDispatch} from "../../../hooks/redux";
import {getCircles} from "../../../helpers/getCircles";
import {clearTodoToPerform} from "../../../store/reducers/SelectedTodoToPerformSlice";

interface TaskProps {
  todoInfo: ITodo;
  children: ReactNode;
  isNeedCheckbox?: boolean;
  isNeedCompletedBadge?: boolean;
}

export const Todo: FC<TaskProps> = memo((props) => {
  const {todoInfo, children, isNeedCheckbox, isNeedCompletedBadge} = props;

  const dispatch = useAppDispatch();

  const handleChangeCheckbox = () => {
    if (todoInfo.id) {
      dispatch(toggleCompleteTodo(todoInfo.id));
      dispatch(updateAnalyticsData(todoInfo.id));
      dispatch(clearTodoToPerform());
    }
  };

  return (
    <div className={styles.todo}>
      {isNeedCheckbox && (
        <input
          className={styles.checkbox}
          type="checkbox"
          onChange={handleChangeCheckbox}
        />
      )}

      <div className={styles.content_wrapper}>
        <div className={isNeedCompletedBadge ? styles.text_wrapper : ""}>
          <p className={styles.todo_text}>{todoInfo.text}</p>
          {isNeedCompletedBadge && todoInfo.completed && (
            <span className={styles.completed_badge}>Выполнена</span>
          )}
        </div>

        <div className={styles.circles}>
          {getCircles(todoInfo?.numberTimersSpentOnTodo)}
        </div>
      </div>

      {children}
    </div>
  );
});
