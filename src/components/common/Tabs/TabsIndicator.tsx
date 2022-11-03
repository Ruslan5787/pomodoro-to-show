import React, {FC} from "react";

import styles from "./Tabs.module.scss";

interface TabsIndicatorProps {
  width: number;
  index: number;
}

export const TabsIndicator: FC<TabsIndicatorProps> = (props) => {
  const {width, index} = props;

  return (
    <div
      className={styles.tabs_indicator}
      style={{
        transform: `translateX(${width * index}px`,
        width,
      }}
    ></div>
  );
};
