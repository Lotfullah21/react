import { useState } from "react";
import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cocktail,
  Contact,
  Error,
  HomeLayOut,
  Landing,
  SinglePageError,
} from "./pages";
import { loader as dataLoader } from "./pages/Landing";
import { loader as SingleCocktailLoader } from "./pages/Cocktail";
const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
        loader: dataLoader,
        errorElement: <SinglePageError></SinglePageError>,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail></Cocktail>,
        loader: SingleCocktailLoader,
        errorElement: <SinglePageError></SinglePageError>,
      },
      {
        path: "about",
        element: <About></About>,
        errorElement: <SinglePageError></SinglePageError>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
        errorElement: <SinglePageError></SinglePageError>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={customRouter}></RouterProvider>;
}

export default App;
