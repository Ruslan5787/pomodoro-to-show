import React, { FC, memo } from "react";

import styles from "./InformationAboutLackContent.module.scss";

interface InformationAboutLackContentProps {
}

export const InformationAboutLackContent: FC<InformationAboutLackContentProps> =
  memo((props) => {
    return <p className={styles.taskList_information}>Здесь пока ничего нет</p>;
  });
