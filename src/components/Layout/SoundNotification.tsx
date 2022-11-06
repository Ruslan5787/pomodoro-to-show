import React, {FC, memo} from "react";

import styles from "./Layout.module.scss";

import {SoundNotificationIcon} from "../../images/index";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";

import {getSoundNotificationEnabled} from "../../store/selectors";
import {toggleSoundNotificationState} from "../../store/reducers/SoundNotificationSlice";

import {getSwitchState} from "../../helpers/getSwitchState";

export const SoundNotification: FC = memo(() => {
  const dispatch = useAppDispatch();
  const isSoundNotificationEnabled = useAppSelector(
    getSoundNotificationEnabled
  );

  const handleClick = () => {
    dispatch(toggleSoundNotificationState());
  };

  return (
    <div className={styles.sound_notification}>
      <SoundNotificationIcon
        className={styles.sound_notification_icon}
        width={28}
      />

      <button className={styles.switch} onClick={handleClick}>
        {getSwitchState(isSoundNotificationEnabled)}
      </button>
    </div>
  );
});
