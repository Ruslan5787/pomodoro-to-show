import React, {FC, memo} from "react";
import {useAppSelector} from "../../hooks/redux";

import styles from "./Analytics.module.scss";

import {Title} from "../../components/common/Title/Title";
import {Todo} from "../../components/common/Todo/Todo";
import {getHoursAndMinutesFromMinutes} from "../../helpers/getHoursAndMinutesFromMinutes";
import {
  InformationAboutLackContent
} from "../../components/common/InformationAboutLackContent/InformationAboutLackContent";

export const Analytics: FC = memo(() => {
  const {
    list,
    totalNumberTimersSpentOnTasks,
    totalNumberTasks,
    totalNumberCompletedTasks,
    totalTimeSpentOnTasks,
  } = useAppSelector((state) => state.todosLists.analyticsInfo);

  const analyticsList = list.map((todo) => (
    <Todo key={todo.id} isNeedCompletedBadge={true} todoInfo={todo}>
      <span className={styles.task_completed_time}>
        {getHoursAndMinutesFromMinutes(todo.timeTimersSpentOnTodo)}
      </span>
    </Todo>
  ));

  return (
    <div className={styles.analytics}>
      <div className={styles.title_wrapper}>
        <Title textContent={"Статистика"}/>
      </div>

      <div className={styles.content}>
        <div className={styles.content_left}>
          <h4 className={styles.sub_title}>Сегодня</h4>

          <ul className={styles.analytics_list}>
            <li className={styles.analytics_list_item}>
              Помодоро : {totalNumberTimersSpentOnTasks}
            </li>
            <li className={styles.analytics_list_item}>
              Задачи : {totalNumberTasks}
            </li>
            <li className={styles.analytics_list_item}>
              Выполненные : {totalNumberCompletedTasks}
            </li>
            <li className={styles.analytics_list_item}>
              Количество времени :{" "}
              {getHoursAndMinutesFromMinutes(totalTimeSpentOnTasks)}
            </li>
          </ul>
        </div>

        <div className={styles.todoList_wrapper}>
          {list.length ? (
            analyticsList
          ) : (
            <InformationAboutLackContent marginTop={50}/>
          )}
        </div>
      </div>
    </div>
  );
});
