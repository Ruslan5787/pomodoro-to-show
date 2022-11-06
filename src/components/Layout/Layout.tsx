import React, {FC, memo} from "react";
import {Outlet, useLocation} from "react-router-dom";

import styles from "./Layout.module.scss";

import {NavigateBar} from "./NavigateBar";
import {SoundNotification} from "./SoundNotification";

export const Layout: FC = memo(() => {
  const {pathname} = useLocation();

  const isHomePage = pathname === "/";

  return (
    <>
      <header className={styles.header}>
        {isHomePage && <SoundNotification/>}
        <NavigateBar/>
      </header>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Outlet/>
        </div>
      </main>
    </>
  );
});
