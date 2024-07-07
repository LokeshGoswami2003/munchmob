import React, { useState } from "react";
import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

function Body() {
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filterdList = listOfRestaurants.filter(
                            (res) => res.data.avgRating > 4
                        );
                        setListOfRestaurants(filterdList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => {
                    return (
                        <RestaurantCard
                            key={restaurant.data.id}
                            resData={restaurant}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Body;
