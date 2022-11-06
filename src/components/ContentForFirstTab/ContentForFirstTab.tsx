import React, {memo, useEffect, useState} from "react";

import {useAppSelector} from "../../hooks/redux";
import {getTodoId} from "../../store/selectors";

import {TimerTab} from "./TimerTab";
import {HomeScreenTab} from "./HomeScreenTab";

export const ContentForFirstTab = memo(() => {
  const todoId = useAppSelector(getTodoId);

  const [isTimerTab, setTimerTab] = useState<boolean>(false);

  useEffect(() => {
    todoId && setTimerTab(true);
  }, [todoId]);

  return (
    <>
      <TimerTab
        isTimerTab={isTimerTab}
        changeState={() => setTimerTab(false)}
      />
      <HomeScreenTab
        isTimerTab={isTimerTab}
        handleClick={() => setTimerTab(true)}
      />
    </>
  );
});
