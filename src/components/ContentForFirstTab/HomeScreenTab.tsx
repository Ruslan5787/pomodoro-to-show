import React, {FC, memo} from "react";
import {NavLink} from "react-router-dom";

import styles from "../../pages/Pomodoro/Pomodoro.module.scss";
import {Button} from "../common/Button/Button";
import {Decor} from "../common/Decor/Decor";
import {ClickIcon} from "../../images";

interface HomeScreenTabProps {
  isTimerTab: boolean;
  handleClick: () => void;
}

export const HomeScreenTab: FC<HomeScreenTabProps> = memo((props) => {
  const {isTimerTab, handleClick} = props;

  if (isTimerTab) {
    return null;
  }

  return (
    <>
      <div className={styles.buttons_wrapper}>
        <Button textContent="Начать сеанс" handleClick={handleClick}/>
        <NavLink to="/todoList">
          <Button textContent="Выбрать задачу" isTransparent={true}/>
        </NavLink>
      </div>

      <div className={styles.decor_wrapper}>
        <Decor image={<ClickIcon/>}/>
      </div>
    </>
  );
});
