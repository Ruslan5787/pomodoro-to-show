import React, {FC, memo} from "react";

import cn from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  isSmall?: boolean;
  textContent: string;
  isTransparent?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {isSmall, textContent, isTransparent, handleClick} = props;

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
});
