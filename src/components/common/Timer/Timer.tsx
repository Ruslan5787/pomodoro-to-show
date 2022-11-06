import React, {FC, memo, useEffect, useMemo, useState} from "react";

import useSound from "use-sound";

import {useAppSelector} from "../../../hooks/redux";
import {getSoundNotificationEnabled} from "../../../store/selectors";

import styles from "./Timer.module.scss";

import {RestartIcon, StartIcon, StopIcon} from "../../../images";

import {getTimeWithExtraZero} from "../../../helpers/getTimeWithExtraZero";
import {TimerButton} from "./TimerButton";

interface TimerProps {
  time: number;
  volumeNotification: number;
  changeState?: () => void;
  soundNotification: string;
  setTimerFinished?: () => void;
}

export const Timer: FC<TimerProps> = memo((props) => {
  const {
    time,
    volumeNotification,
    changeState,
    setTimerFinished,
    soundNotification,
  } = props;

  const isSoundNotificationEnabled = useAppSelector(
    getSoundNotificationEnabled
  );

  const [timeLeft, setTimeLeft] = useState<number>(time);
  const [isTimerRunning, setTimerRunning] = useState<boolean>(false);

  const minutes = useMemo(
    () => getTimeWithExtraZero(Math.floor(timeLeft / 60)),
    [timeLeft]
  );
  const seconds = useMemo(
    () => getTimeWithExtraZero(timeLeft - Number(minutes) * 60),
    [timeLeft]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTimerRunning) {
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
      }
    }, 1000);

    if (timeLeft === 0) {
      setTimeLeft(time);
      setTimerRunning(false);
      setTimerFinished?.();
      isSoundNotificationEnabled && soundPlay();
      changeState?.();
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isTimerRunning]);

  const [soundPlay] = useSound(soundNotification, {
    volume: volumeNotification,
  });

  const handleStart = () => {
    if (timeLeft === 0) {
      setTimeLeft(time);
    }

    setTimerRunning(true);
  };

  const handleStop = () => {
    setTimerRunning(false);
  };

  const handleRestart = () => {
    setTimeLeft(time);
    setTimerRunning(false);
    changeState?.();
  };

  return (
    <div className={styles.timer}>
      <div className={styles.countdown}>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className={styles.buttons}>
        {isTimerRunning ? (
          <>
            <TimerButton icon={<StopIcon/>} handleClick={handleStop}/>
            <TimerButton icon={<RestartIcon/>} handleClick={handleRestart}/>
          </>
        ) : (
          <TimerButton icon={<StartIcon/>} handleClick={handleStart}/>
        )}
      </div>
    </div>
  );
});
