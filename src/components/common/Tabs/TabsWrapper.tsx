import React, {FC, memo, useEffect, useRef, useState} from "react";

import styles from "./Tabs.module.scss";

import {TabsIndicator} from "./TabsIndicator";

interface TabsWrapperProps {
  selectedTab: number;
  children: JSX.Element[];
}

export const TabsWrapper: FC<TabsWrapperProps> = memo((props) => {
  const {selectedTab, children} = props;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const sliderWidth = containerWidth / children.length;

  useEffect(() => {
    // @ts-ignore
    setContainerWidth(containerRef.current?.getBoundingClientRect().width);
  }, [containerRef]);

  return (
    <div className={styles.tabs_wrapper} ref={containerRef}>
      <div className={styles.tabs_body}>{children}</div>
      <TabsIndicator width={sliderWidth} index={selectedTab}/>
    </div>
  );
});
