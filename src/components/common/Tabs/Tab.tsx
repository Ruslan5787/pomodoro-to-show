import React, {FC} from "react";

import cn from "classnames";

import styles from "./Tabs.module.scss";

interface TabProps {
  title: string;
  value: number;
  activeTab: number;
  changeActiveTab: (value: number) => void;
}

export const Tab: FC<TabProps> = (props) => {
  const {title, value, activeTab, changeActiveTab} = props;

  const handleClick = () => {
    changeActiveTab(value);
  };

  return (
    <button
      className={cn(styles.tab, {
        [styles.tab_active]: activeTab === value,
      })}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};
