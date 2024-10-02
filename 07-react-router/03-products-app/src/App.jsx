import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import ProductsContainer from "./pages/ProductsContainer";
import SingleProduct from "./pages/SingleProduct";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
const routes = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout></HomeLayout>,
		children: [
			{ index: true, element: <Landing></Landing> },
			{ path: "/products", element: <ProductsContainer></ProductsContainer> },
			{
				path: "/product-details/:productId",
				element: <SingleProduct></SingleProduct>,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
