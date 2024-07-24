import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "./LogoImage";
import LocationSection from "./LocationSection";
import { Transition } from "@headlessui/react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative">
            <div className="max-w-full flex items-center justify-between text-dark py-4 px-6">
                <div className="flex items-center space-x-4 md:space-x-8">
                    <Link to={"/"}>
                        <LogoImage />
                    </Link>
                    <LocationSection />
                </div>
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-dark focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isMenuOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>
                <nav className="hidden md:flex items-center space-x-4">
                    <ul className="flex space-x-4">
                        <li>
                            <Link to={"/"} className="hover:text-secondary">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/about"}
                                className="hover:text-secondary"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/contact"}
                                className="hover:text-secondary"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to={"/cart"} className="hover:text-secondary">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Transition
                show={isMenuOpen}
                enter="transition-transform duration-300"
                enterFrom="transform -translate-x-full"
                enterTo="transform translate-x-0"
                leave="transition-transform duration-300"
                leaveFrom="transform translate-x-0"
                leaveTo="transform -translate-x-full"
                className="fixed inset-0 bg-white z-50 md:hidden"
            >
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-4 right-4 text-dark"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <ul className="flex flex-col space-y-4">
                        <li>
                            <Link
                                to={"/"}
                                className="text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/about"}
                                className="text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/contact"}
                                className="text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/cart"}
                                className="text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
}

export default Header;
