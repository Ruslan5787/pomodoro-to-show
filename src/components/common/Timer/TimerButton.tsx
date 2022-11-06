import React, {FC, memo, ReactNode} from "react";
import styles from "./Timer.module.scss";

interface TimerButtonProps {
  icon: ReactNode;
  handleClick: () => void;
}

export const TimerButton: FC<TimerButtonProps> = memo((props) => {
  const {icon, handleClick} = props;

  return (
    <button className={styles.button} onClick={handleClick}>
      {icon}
    </button>
  );
});
