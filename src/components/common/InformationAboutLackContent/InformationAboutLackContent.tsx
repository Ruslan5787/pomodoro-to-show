import React, {FC, memo} from "react";

import styles from "./InformationAboutLackContent.module.scss";

interface InformationAboutLackContentProps {
  marginTop: number;
}

export const InformationAboutLackContent: FC<InformationAboutLackContentProps> =
  memo((props) => {
    const {marginTop} = props;

    return (
      <p
        className={styles.taskList_information}
        style={{marginTop: marginTop}}
      >
        Здесь пока ничего нет
      </p>
    );
  });
