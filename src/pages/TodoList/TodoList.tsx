import React, {FC, memo} from "react";
import {useAppSelector} from "../../hooks/redux";

import styles from "./TodoList.module.scss";

import {Form} from "../../components/Form/Form";
import {Title} from "../../components/common/Title/Title";
import {Decor} from "../../components/common/Decor/Decor";
import {SmallTabs} from "../../components/common/Tabs/SmallTabs/SmallTabs";
import {ButtonsBar} from "../../components/common/ButtonsBar/ButtonsBar";
import {Todo} from "../../components/common/Todo/Todo";
import {BalloonsIcon} from "../../images";
import {
  InformationAboutLackContent
} from "../../components/common/InformationAboutLackContent/InformationAboutLackContent";

const tabsTitles = ["В процессе", "Выполненные"];

export const TodoList: FC = memo(() => {
  const {inProcess, completed} = useAppSelector((state) => state.todosLists);

  const inProcessLength = inProcess.length;
  const completedLength = completed.length;

  return (
    <div>
      <div className={styles.title_wrapper}>
        <Title textContent={"Список задач"}/>
      </div>

      <div className={styles.content}>
        <div className={styles.content_left}>
          <div className={styles.tabs_wrapper}>
            {inProcessLength || completedLength ? (
              <SmallTabs
                tabsTitles={tabsTitles}
                contentForFirstTab={
                  inProcessLength ? (
                    <div className={styles.todoList_wrapper}>
                      {inProcess.map((todo, index) => (
                        <Todo
                          key={todo.id}
                          isNeedCheckbox={true}
                          todoInfo={todo}
                        >
                          <ButtonsBar
                            todoId={todo.id}
                            todoSerialNumber={index}
                            numberTasksInList={inProcess.length - 1}
                            todoText={todo.text}
                          />
                        </Todo>
                      ))}
                    </div>
                  ) : (
                    <InformationAboutLackContent marginTop={100}/>
                  )
                }
                contentForSecondTab={
                  completedLength ? (
                    <div className={styles.todoList_wrapper}>
                      {completed.map((todo) => (
                        <Todo key={todo.id} todoInfo={todo}>
                          <span className={styles.task_completed_time}>
                            Сегодня
                          </span>
                        </Todo>
                      ))}
                    </div>
                  ) : (
                    <InformationAboutLackContent marginTop={100}/>
                  )
                }
              />
            ) : (
              <div className={styles.image_wrapper}>
                <Decor
                  image={<BalloonsIcon/>}
                  textContent="Давайте начнем что-нибудь веселое"
                />
              </div>
            )}
          </div>
        </div>

        <div className={styles.form_wrapper}>
          <Form/>
        </div>
      </div>
    </div>
  );
});
