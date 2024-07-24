import React, { useEffect, useState } from "react";

const Alert = ({ message, showAlert, setShowAlert }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (showAlert) {
            setIsVisible(true);
            setTimeout(() => {
                setIsVisible(false);
                setShowAlert(false);
            }, 1500); // Adjust the duration as needed
        }
    }, [showAlert, setShowAlert]);

    if (!isVisible) return null;

    return (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-60">
            <div className="bg-blue-500 text-white px-4 py-2 rounded shadow-md transition-opacity ease-out duration-300">
                {message}
            </div>
        </div>
    );
};

export default Alert;
