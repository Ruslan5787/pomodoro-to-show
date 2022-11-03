import React, {FC} from "react";

import styles from "./Titel.module.scss";

interface TitleProps {
  textContent: string;
}

export const Title: FC<TitleProps> = (props) => {
  const {textContent} = props;

  return <h1 className={styles.title}>{textContent}</h1>;
};
