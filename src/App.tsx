import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";

import {Pomodoro} from "./pages/Pomodoro/Pomodoro";
import {TodoList} from "./pages/TodoList/TodoList";
import {Analytics} from "./pages/Analytics/Analytics";
import {Layout} from "./components/Layout/Layout";

export const App: FC = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Pomodoro/>}/>
          <Route path="/todoList" element={<TodoList/>}/>
          <Route path="/analytics" element={<Analytics/>}/>
        </Route>
      </Routes>
    </div>
  );
};
