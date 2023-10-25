import React from "react";
import { Outlet } from "react-router-dom";
import css from "./App.module.css";

function App() {
  return (
    <div className={css.container}>
      <Outlet />
    </div>
  );
}

export default App;
