import React, {ChangeEvent, FC, memo, useState} from "react";

import styles from "./Form.module.scss";

import {useAppDispatch} from "../../hooks/redux";
import {addTodoInProcess} from "../../store/reducers/TodosListsSlice";

import {Button} from "../common/Button/Button";

export const Form: FC = memo(() => {
  const dispatch = useAppDispatch();

  const [fieldValue, setFieldValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!!fieldValue.trim()) {
      dispatch(addTodoInProcess(fieldValue));
      setFieldValue("");
    }
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Ваша задача..."
        value={fieldValue}
        onChange={handleChange}
      />

      <div className={styles.button_wrapper}>
        <Button
          isSmall={true}
          textContent="Добавить задачу"
          handleClick={handleClick}
        />
      </div>
    </form>
  );
});
