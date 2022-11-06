import React, {FC} from "react";

import styles from "../../pages/Pomodoro/Pomodoro.module.scss";

import blackbird_singing from "../../sounds/blackbird_singing.mp3";

import {MountainsIcon} from "../../images";

import {Timer} from "../common/Timer/Timer";
import {Decor} from "../common/Decor/Decor";

export const ContentForSecondTab: FC = () => {
  console.log('e')
  return (
    <>
      <div className={styles.timer_wrapper}>
        <Timer
          time={5 * 60}
          volumeNotification={0.07}
          soundNotification={blackbird_singing}
        />
      </div>
      <Decor
        textContent="Время для небольшого перерыва"
        image={
          <MountainsIcon
            className={styles.pictures_pinned_to_bottom_to_screen}
          />
        }
      />
    </>
  );
};
