import React, { useState } from "react";

function FilterRestaurants(props) {
    const [searchKeyword, setSearchKeyword] = useState("");
    const { setRestaurantsListDisplay, restaurantsList } = props;
    return (
        <div className="filter">
            <input
                type="text"
                value={searchKeyword}
                onChange={(e) => {
                    setSearchKeyword(e.target.value);
                }}
            />
            <button
                className="search"
                onClick={() => {
                    const filterdList = restaurantsList?.filter(
                        (restaurant) => {
                            return restaurant?.info?.name
                                ?.toLowerCase()
                                ?.includes(searchKeyword.toLowerCase());
                        }
                    );
                    setRestaurantsListDisplay(filterdList);
                }}
            >
                search
            </button>
            <button
                className="filter-btn"
                onClick={() => {
                    const filterdList = restaurantsList.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setDisplaybleListOfRestaurants(filterdList);
                }}
            >
                Top Rated Restaurants
            </button>
        </div>
    );
}

export default FilterRestaurants;
