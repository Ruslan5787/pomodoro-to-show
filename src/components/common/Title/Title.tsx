import React, {FC, memo} from "react";

import styles from "./Titel.module.scss";

interface TitleProps {
  textContent: string;
}

export const Title: FC<TitleProps> = memo((props) => {
  const {textContent} = props;

  return <h1 className={styles.title}>{textContent}</h1>;
});
