import React from "react";
import logo from "../assets/logo1.png";

function Header() {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo-image" src={logo} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
