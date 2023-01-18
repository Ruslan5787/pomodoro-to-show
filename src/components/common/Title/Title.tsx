import React, {FC, memo} from "react";

import styles from "./Title.module.scss";

interface TitleProps {
  textContent: string;
}

export const Title: FC<TitleProps> = memo((props) => {
  const {textContent} = props;

  return <h1 className={styles.title}>{textContent}</h1>;
});
