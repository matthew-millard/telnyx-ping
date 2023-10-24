import React from "react";
import { Outlet } from "react-router-dom";
import "./App.module.css";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
