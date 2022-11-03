import React, {FC} from "react";

import styles from "./Pomodoro.module.scss";

import {BigTabs} from "../../components/common/Tabs/BigTabs/BigTabs";
import {ContentForFirstTab} from "../../components/ContentForFirstTab/ContentForFirstTab";
import {ContentForSecondTab} from "../../components/ContentForSecondTab/ContentForSecondTab";

const tabsTitles = ["Таймер", "Перерыв"];

export const Pomodoro: FC = () => {
  return (
    <div className={styles.pomodoro}>
      <div className={styles.content}>
        <BigTabs
          tabsTitles={tabsTitles}
          contentForFirstTab={<ContentForFirstTab/>}
          contentForSecondTab={<ContentForSecondTab/>}
        />
      </div>
    </div>
  );
};
