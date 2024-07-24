import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import fetchLocationData from "../../utils/useFetchLocationData";
import { useDispatch } from "react-redux";
import { updateLocation } from "../../utils/locationSlice";
import Alert from "../additionalpages/Alert";

const LocationDrawer = ({ isOpen, setIsOpen }) => {
    const inputRef = useRef(null);
    const autocompleteServiceRef = useRef(null);
    const [suggestions, setSuggestions] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest(".location-drawer") && isOpen) {
                setIsOpen(false);
            }
        };

        const handleScrollLock = () => {
            if (isOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        handleScrollLock();

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, setIsOpen]);

    useEffect(() => {
        if (window.google && window.google.maps && window.google.maps.places) {
            autocompleteServiceRef.current =
                new window.google.maps.places.AutocompleteService();
        }
    }, []);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        if (autocompleteServiceRef.current && inputValue) {
            autocompleteServiceRef.current.getPlacePredictions(
                { input: inputValue },
                (predictions, status) => {
                    if (
                        status ===
                        window.google.maps.places.PlacesServiceStatus.OK
                    ) {
                        setSuggestions(predictions);
                    } else {
                        setSuggestions([]);
                    }
                }
            );
        } else {
            setSuggestions([]);
        }
    };

    const dispatchLocationData = (LocationData) => {
        dispatch(updateLocation(LocationData));
    };

    const handleSearchClick = async () => {
        const inputValue = inputRef.current.value.trim();
        if (inputValue === "") {
            setShowAlert(true);
            return;
        }
        const LocationData = await fetchLocationData(inputValue);
        dispatchLocationData(LocationData);
        setSuggestions([]);
        setIsOpen(false);
    };

    const handleSuggestionClick = async (suggestion) => {
        const LocationData = await fetchLocationData(suggestion.description);
        dispatchLocationData(LocationData);
        console.log("Selected place:", suggestion.description);
        setSuggestions([]);
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div
                        className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    ></div>
                    <div className="fixed top-0 left-0 h-full w-2/5 bg-white shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out location-drawer">
                        <div className="pt-10 pl-24 space-y-6 pr-10 relative">
                            <button
                                onClick={() => setIsOpen(false)}
                                className=" text-gray-600"
                            >
                                <CloseOutlined style={{ fontSize: "24px" }} />
                            </button>
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border p-2 w-full pr-10"
                                    ref={inputRef}
                                    onChange={handleInputChange}
                                />

                                <SearchOutlined
                                    className="absolute right-2 top-2 text-gray-400"
                                    style={{ fontSize: "20px" }}
                                    onClick={handleSearchClick}
                                />

                                {suggestions.length > 0 && (
                                    <div className="absolute top-full left-0 w-full bg-white border mt-1 z-10">
                                        {suggestions.map((suggestion) => (
                                            <div
                                                key={suggestion.place_id}
                                                className="p-2 border-b hover:bg-gray-100 cursor-pointer"
                                                onClick={() =>
                                                    handleSuggestionClick(
                                                        suggestion
                                                    )
                                                }
                                            >
                                                <h4 className="text-sm font-medium">
                                                    {suggestion.description}
                                                </h4>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <Alert
                                    message="Please Enter Something that makes sense"
                                    showAlert={showAlert}
                                    setShowAlert={setShowAlert}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LocationDrawer;
