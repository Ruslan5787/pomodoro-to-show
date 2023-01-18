import React, {FC, memo, ReactNode} from "react";

import cn from "classnames";

import styles from "./TodoButtonsBar.module.scss";

interface ButtonBarProps {
  image: ReactNode;
  hideButton?: boolean;
  handleClick?: () => void;
}

export const TodoButtonBar: FC<ButtonBarProps> = memo((props) => {
  const {image, hideButton, handleClick} = props;

  return (
    <button
      className={cn(styles.task_control_button, {
        [styles.invisible]: hideButton,
      })}
      onClick={handleClick}
    >
      {image}
    </button>
  );
});
