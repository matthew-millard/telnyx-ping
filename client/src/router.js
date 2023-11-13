import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { CreateAccount, Home } from "./pages";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-account",
        element: <CreateAccount />,
      },
    ],
  },
]);

export default router;
