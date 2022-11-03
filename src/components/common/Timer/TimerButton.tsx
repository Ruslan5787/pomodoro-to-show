import React, {FC, ReactNode} from "react";
import styles from "./Timer.module.scss";

interface TimerButtonProps {
  icon: ReactNode;
  handleClick: () => void;
}

export const TimerButton: FC<TimerButtonProps> = (props) => {
  const {icon, handleClick} = props;
  return (
    <button className={styles.button} onClick={handleClick}>
      {icon}
    </button>
  );
};
