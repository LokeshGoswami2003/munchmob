import React from "react";
import logo from "../assets/logo1.png";
import { CDN_URL, IMG_CDN_URL } from "../utils/constants";

function RestaurantCard(props) {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData?.info;

    return (
        <div className="border rounded-lg w-64 shadow-lg bg-secondary transform transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
            <img
                className="w-[100%] rounded-t-lg"
                alt="res-logo"
                src={IMG_CDN_URL + cloudinaryImageId}
            />
            <div className="p-4">
                <h3 className="font-bold text-lg">{name}</h3>
                <h4 className="text-sm text-gray-600">{cuisines.join(", ")}</h4>
                <div className="flex justify-between mt-2">
                    <span className="text-sm font-semibold">
                        {avgRating} stars
                    </span>
                    <span className="text-sm text-gray-600">{costForTwo}</span>
                </div>
                <h4 className="text-sm text-gray-600 mt-2">
                    {resData.info.sla.slaString}
                </h4>
            </div>
        </div>
    );
}

export default RestaurantCard;
