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
  NewsLetter,
} from "./pages";
import { loader as dataLoader } from "./pages/Landing";
import { loader as cocktailLoader } from "./pages/Cocktail";
import { action as newsLetterAction } from "./pages/NewsLetter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
        loader: dataLoader(queryClient),
        errorElement: <SinglePageError></SinglePageError>,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail></Cocktail>,
        loader: cocktailLoader(queryClient),
        errorElement: <SinglePageError></SinglePageError>,
      },
      {
        path: "about",
        element: <About></About>,
        errorElement: <SinglePageError></SinglePageError>,
      },
      {
        path: "newsLetter",
        element: <NewsLetter></NewsLetter>,
        action: newsLetterAction,
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={customRouter}></RouterProvider>;
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    </QueryClientProvider>
  );
}

export default App;
