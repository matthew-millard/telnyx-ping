import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { CreateAccount } from "./pages";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <CreateAccount />,
      },
    ],
  },
]);

export default router;
