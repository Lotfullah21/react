import { useState } from "react";
import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Cocktail, Contact, Error, HomeLayOut, Landing } from "./pages";
const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
      },
      {
        path: "cocktail",
        element: <Cocktail></Cocktail>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "error",
        element: <Error></Error>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={customRouter}></RouterProvider>;
}

export default App;
