import React, { useEffect, useState } from "react";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";

function Header() {
    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>Link</a>
                    </li>

                    <DarkModeButton />
                </ul>
            </div>
        </div>
    );
}

export default Header;
