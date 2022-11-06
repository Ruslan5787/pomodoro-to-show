import React, {FC, memo} from "react";
import {NavLink} from "react-router-dom";

import {AnalyticsIcon, PomodoroIcon, TasksIcon} from "../../images/index";

import styles from "./Layout.module.scss";

const setActive = ({isActive}: { isActive: boolean }) =>
  isActive ? styles.active : "";

export const NavigateBar: FC = memo(() => {
  return (
    <div className={styles.navigateBar}>
      <NavLink to="/" end className={setActive}>
        <div className={styles.navigateBar_icon}>
          <AnalyticsIcon/>
        </div>
      </NavLink>

      <NavLink to="/todoList" className={setActive}>
        <div className={styles.navigateBar_icon}>
          <PomodoroIcon/>
        </div>
      </NavLink>

      <NavLink to="/analytics" className={setActive}>
        <div className={styles.navigateBar_icon}>
          <TasksIcon/>
        </div>
      </NavLink>
    </div>
  );
});
