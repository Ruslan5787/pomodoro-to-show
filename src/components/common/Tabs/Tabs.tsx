import React, {FC, memo} from "react";

import styles from "./Tabs.module.scss";

import {Tab} from "./Tab";
import {TabsWrapper} from "./TabsWrapper";

interface TabsProps {
  selectedTab: number;
  tabsTitles: string[];
  changeActiveTab: (value: number) => void;
}

export const Tabs: FC<TabsProps> = memo((props) => {
  const {selectedTab, tabsTitles, changeActiveTab} = props;

  return (
    <div className={styles.tabs_header}>
      <TabsWrapper selectedTab={selectedTab}>
        {tabsTitles.map((title, index) => (
          <Tab
            key={index}
            title={title}
            activeTab={selectedTab}
            changeActiveTab={changeActiveTab}
            value={index}
          />
        ))}
      </TabsWrapper>
    </div>
  );
});
