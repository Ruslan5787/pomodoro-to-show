import React, {FC, memo, useState} from "react";

import cn from "classnames";

import styles from "./SmallTabs.module.scss";

import {TabsProps} from "../../../../types/tabs";

import {Tabs} from "../Tabs";

export const SmallTabs: FC<TabsProps> = memo((props) => {
  const {tabsTitles, contentForFirstTab, contentForSecondTab} = props;

  const [activeTab, setActiveTab] = useState<number>(0);

  const handleClick = (value: number) => {
    setActiveTab(value);
  };

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.tabs_container}>
          <Tabs
            selectedTab={activeTab}
            changeActiveTab={handleClick}
            tabsTitles={tabsTitles}
          />
        </div>
      </div>

      <div className={styles.content}>
        <div
          className={cn(styles.content_wrapper, {
            [styles.content_wrapper_active]: activeTab === 0,
          })}
        >
          {contentForFirstTab}
        </div>
        <div
          className={cn(styles.content_wrapper, {
            [styles.content_wrapper_active]: activeTab === 1,
          })}
        >
          {contentForSecondTab}
        </div>
      </div>
    </div>
  );
});
