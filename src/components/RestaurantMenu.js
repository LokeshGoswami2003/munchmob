import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
    const [restaurants, setRestaurants] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchRestaurantDetails();
    }, []);

    const fetchRestaurantDetails = async () => {
        const rawData = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11&lng=11&restaurantId=" +
                resId
        );
        const jsonData = resId.json();
    };

    return !restaurants ? (
        <Shimmer />
    ) : (
        <div className="menu">
            <h1>{restaurants?.cards[0]?.card?.card?.text}</h1>
            <h2>Menu</h2>
            <div className="menu-list">
                {topMenu?.map((menuItem) => {
                    return it ? (
                        <h3 key={menuItem.bannerId}>
                            {menuItem?.card?.info?.name}
                        </h3>
                    ) : (
                        <h3 key={menuItem.bannerId}>
                            {menuItem?.card?.dish?.info?.name}
                        </h3>
                    );
                })}
            </div>
        </div>
    );
}

export default RestaurantMenu;
