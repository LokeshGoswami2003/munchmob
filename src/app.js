import React from "react";
import reactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
