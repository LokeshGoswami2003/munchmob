import React, { useState } from "react";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";

function Header() {
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo-image" src={logo} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>

                    <Link to="/about">
                        <li>About</li>
                    </Link>

                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>

                    <Link to="/cart">
                        <li>Cart</li>
                    </Link>

                    <button
                        onClick={() => {
                            setBtnName(
                                btnName === "Login" ? "Logout" : "Login"
                            );
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;
