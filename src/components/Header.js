import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "./LogoImage";
import LocationSection from "./LocationSection";

function Header() {
    return (
        <div className="flex justify-between bg-primary text-dark py-2 px-20">
            <div className="flex items-center space-x-8">
                <LogoImage />
                <LocationSection />
            </div>
            <div className="flex items-center">
                <ul className="flex space-x-12">
                    <li>
                        <Link>Home</Link>
                    </li>

                    <li>
                        <Link>About</Link>
                    </li>

                    <li>
                        <Link>Contact</Link>
                    </li>

                    <li>
                        <Link>Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
