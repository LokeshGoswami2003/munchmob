import { DownOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import LocationDrawer from "./LocationDrawer";

const LocationSection = () => {
    const address = useSelector((store) => store.locationData.address);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div
                className="flex items-center space-x-2 md:space-x-4 shadow-sd cursor-pointer transition duration-300 ease-in-out hover:text-gray-600 hover:font-light p-2 md:p-3 rounded-md"
                onClick={() => setIsOpen(true)}
            >
                <span className="text-sm md:text-base mb-1 truncate">
                    {address}
                </span>
                <DownOutlined className="text-lg md:text-xl" />
            </div>
            <LocationDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default LocationSection;
