import React from "react";
import { IMG_CDN_URL } from "../../utils/constants";

function RestaurantCard(props) {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla: { slaString },
    } = resData?.info;

    return (
        <div className="border rounded-lg w-64 h-full shadow-lg bg-secondary transform transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
            <img
                className="w-full h-40 object-cover rounded-t-lg"
                alt="res-logo"
                src={IMG_CDN_URL + cloudinaryImageId}
            />
            <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{name}</h3>
                <h4 className="text-sm text-gray-600 mb-2">
                    {cuisines.join(", ")}
                </h4>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold">
                        {avgRating} stars
                    </span>
                    <span className="text-sm text-gray-600">{costForTwo}</span>
                </div>
                <h4 className="text-sm text-gray-600">{slaString}</h4>
            </div>
        </div>
    );
}

export default RestaurantCard;
