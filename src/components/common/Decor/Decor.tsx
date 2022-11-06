import React, {FC, memo, ReactNode} from "react";

import styles from "./Decor.module.scss";

interface DecorProps {
  textContent?: string;
  image: ReactNode;
}

export const Decor: FC<DecorProps> = memo((props) => {
  const {textContent, image} = props;

  return (
    <div className={styles.decor}>
      {textContent && <p className={styles.inscription}>{textContent}</p>}

      <div className={styles.image}>{image}</div>
    </div>
  );
});
