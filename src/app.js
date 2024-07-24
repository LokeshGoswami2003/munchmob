import React from "react";
import reactDOM from "react-dom/client";
import Body from "./components/restaurants/Body";
import Header from "./components/header/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/additionalpages/About";
import Contact from "./components/additionalpages/Contact";
import RestaurantMenu from "./components/menu/RestaurantMenu";
import Error from "./components/additionalpages/Error";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import "antd/./dist/antd.js";
import Cart from "./components/additionalpages/Cart";

const App = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
]);
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
