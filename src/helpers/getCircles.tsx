import React, {ReactNode} from "react";

import styles from "../components/common/Todo/Todo.module.scss";

export const getCircles: (value: number | undefined) => ReactNode[] = (
  value
) => {
  const circles = [];

  if (value) {
    for (let i = 0; i < value; i++) {
      circles.push(<div key={i} className={styles.circle}/>);
    }
  }

  return circles;
};
