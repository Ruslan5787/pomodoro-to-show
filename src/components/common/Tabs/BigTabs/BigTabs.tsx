import React, {FC, memo, useState} from "react";

import cn from "classnames";

import styles from "./BigTabs.module.scss";

import {TabsProps} from "../../../../types/tabs";

import {Tabs} from "../Tabs";

export const BigTabs: FC<TabsProps> = memo((props) => {
  const {tabsTitles, contentForFirstTab, contentForSecondTab} = props;

  const [activeTab, setActiveTab] = useState<number>(0);

  const handleClick = (value: number) => {
    setActiveTab(value);
  };

  return (
    <div className={styles.body}>
      <div className={styles.tabs_container}>
        <Tabs
          selectedTab={activeTab}
          tabsTitles={tabsTitles}
          changeActiveTab={handleClick}
        />
      </div>

      <div className={styles.content}>
        <div
          className={cn(styles.content_wrapper, {
            [styles.content_wrapper_active]: activeTab === 0,
          })}
        >
          <div className={styles.content_body}>{contentForFirstTab}</div>
        </div>
        <div
          className={cn(styles.content_wrapper, {
            [styles.content_wrapper_active]: activeTab === 1,
          })}
        >
          <div className={styles.content_body}>{contentForSecondTab}</div>
        </div>
      </div>
    </div>
  );
});
