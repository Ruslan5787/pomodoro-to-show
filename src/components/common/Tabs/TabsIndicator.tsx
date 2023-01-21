import React, {FC, useEffect, useState} from "react";

import styles from "./Tabs.module.scss";

interface TabsIndicatorProps {
  width: number;
  index: number;
}

export const TabsIndicator: FC<TabsIndicatorProps> = (props) => {
  const {width, index} = props;
  const [fontSizeHtmlElement, setFontSizeHtmlElement] = useState(16);

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    // @ts-ignore
    const fontSize = window.getComputedStyle(htmlElement).fontSize.slice(0, -2);

    setFontSizeHtmlElement(Number(fontSize));
  }, []);

  return (
    <div
      className={styles.tabs_indicator}
      style={{
        transform: `translateX(${(width * index) / fontSizeHtmlElement}rem`,
        width: `${width / fontSizeHtmlElement}rem`,
      }}
    ></div>
  );
};
