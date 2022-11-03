import React, {FC} from "react";

import cn from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  textContent: string;
  isTransparent?: boolean;
  isSmall?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const {textContent, isTransparent, isSmall, handleClick} = props;

  return (
    <button
      className={cn(styles.button, {
        [styles.transparent]: isTransparent,
        [styles.small]: isSmall,
      })}
      onClick={handleClick}
    >
      {textContent}
    </button>
  );
};
