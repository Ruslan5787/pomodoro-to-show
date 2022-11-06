import React, {FC, memo, useEffect, useState} from "react";

import rain_sounds from "../../sounds/rain_sounds.mp3";

import {AimIcon} from "../../images";

import styles from "../../pages/Pomodoro/Pomodoro.module.scss";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getTodoToPerformInfo} from "../../store/selectors";
import {addTimerSpentOnTodo, addTodoInAnalytics,} from "../../store/reducers/TodosListsSlice";

import {Timer} from "../common/Timer/Timer";
import {Decor} from "../common/Decor/Decor";

interface TimerTabProps {
  isTimerTab: boolean;
  changeState: () => void;
}

export const TimerTab: FC<TimerTabProps> = memo((props) => {
  const {isTimerTab, changeState} = props;

  const dispatch = useAppDispatch();
  const {todoId, todoText} = useAppSelector(getTodoToPerformInfo);

  const [isTimerFinished, setTimerFinished] = useState<boolean>(false);

  useEffect(() => {
    if (isTimerFinished) {
      if (todoId) {
        dispatch(addTimerSpentOnTodo(todoId));
        dispatch(addTodoInAnalytics(todoId));
      }

      setTimerFinished(false);
    }
  }, [isTimerFinished]);

  if (!isTimerTab) {
    return null;
  }

  return (
    <>
      <div className={styles.timer_wrapper}>
        <Timer
          time={10}
          volumeNotification={0.15}
          changeState={changeState}
          soundNotification={rain_sounds}
          setTimerFinished={() => {
            setTimerFinished(true);
          }}
        />
      </div>

      <Decor
        image={<AimIcon/>}
        textContent={todoText ? todoText : "Задача не выбрана"}
      />
    </>
  );
});
