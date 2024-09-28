import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
	HomeLayout,
	Landing,
	Cocktail,
	NewsLetter,
	Error,
	About,
	SinglePageError,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing.jsx";
import { loader as singleCocktailLoader } from "./pages/Cocktail.jsx";
import { action as newsLetterAction } from "./pages/NewsLetter.jsx";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
		},
	},
});

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout></HomeLayout>,
		errorElement: <Error></Error>,
		children: [
			{
				index: true,
				loader: landingLoader(queryClient),
				element: <Landing></Landing>,
				errorElement: <SinglePageError></SinglePageError>,
			},
			{
				path: "newsletter",
				action: newsLetterAction,
				element: <NewsLetter></NewsLetter>,
			},
			{ path: "about", element: <About></About> },
			{
				path: "cocktail/:id",
				element: <Cocktail></Cocktail>,
				loader: singleCocktailLoader(queryClient),
				errorElement: <SinglePageError></SinglePageError>,
			},
		],
	},
]);

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router}></RouterProvider>;
		</QueryClientProvider>
	);
};
export default App;
