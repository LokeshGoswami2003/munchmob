import React from "react";
import reactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import {
    createBrowserRouter,
    Outlet,
    Route,
    RouterProvider,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
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
        ],
    },
]);
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
