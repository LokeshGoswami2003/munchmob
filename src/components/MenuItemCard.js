import React, { useState } from "react";

const MenuItemCard = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border rounded-lg p-4 mb-2 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.price}</p>
                </div>
                <button
                    onClick={toggleAccordion}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {isOpen ? "Hide Details" : "Show Details"}
                </button>
            </div>
            {isOpen && (
                <div className="mt-4">
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded">
                        Add
                    </button>
                </div>
            )}
        </div>
    );
};

export default MenuItemCard;
