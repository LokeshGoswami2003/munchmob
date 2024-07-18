import { DownOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LocationDrawer from "./LocationDrawer";

const LocationSection = () => {
    const address = useSelector((store) => store.locationData.address);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div
                className="flex space-x-1 items-center shadow-sd cursor-pointer transition duration-300 ease-in-out hover:text-gray-600 hover:font-light"
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                <span className="mb-1">{address}</span>

                <DownOutlined />
            </div>
            <LocationDrawer
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            ></LocationDrawer>
        </div>
    );
};

export default LocationSection;

/**
 * import React from "react";
import Header from "./Header";
import Drawer from "./Drawer";
import Card from "./Card";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <main className="">
      <Header setIsOpen={setIsOpen} />
      <section className="flex space-x-6 m-4">
        <div className="text-6xl">{"🦙"}</div>
        <div className="text-6xl">{"🐝"}</div>
        <div className="text-6xl">{"🦄"}</div>
        <div className="text-6xl">{"🐌"}</div>
      </section>
      <p className="m-4">
        This is an implementation of a drawer using tailwindcss.
      </p>
      <p className="m-4 bg-yellow-100 p-6 text-yellow-900 border border-dashed border-yellow-400">
        Follow me at Twitter{" "}
        <a className="text-blue-600" href="https://twitter.com/@Cuadraman">
          
        </a>{" "}
        for more tips
      </p>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Drawer>
    </main>
  );
}


import React from "react";

export default function Card() {
  return (
    <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


import React from "react";

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg">Header</header>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}

 */
