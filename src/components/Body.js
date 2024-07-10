import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function Body() {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
        []
    );
    const [searchKeyword, setSearchKeyword] = useState("");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();
            console.log(json); //  json.data.cards[4].card.card
            const fetchedRestaurentList =
                json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants;
            console.log(fetchedRestaurentList);

            const additionalRestaurants = await fetch(
                "https://www.swiggy.com/api/seo/getListing?lat=23.019122496546565&lng=72.59185981269482"
            );
            const moreRestaurantData = await additionalRestaurants.json();
            const moreRestaurantDatalist =
                moreRestaurantData.data.success.cards[1].card.card.gridElements
                    .infoWithStyle.restaurants;
            console.log(moreRestaurantDatalist);
            const finalList = [
                ...new Set([
                    ...fetchedRestaurentList,
                    ...moreRestaurantDatalist,
                ]),
            ];
            console.log(finalList);
            setListOfRestaurants(finalList);
            setFilteredListOfRestaurants(finalList);
        } catch (error) {
            console.log(error);
        }
    };

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
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
                        const filterdList = listOfRestaurants.filter(
                            (restaurant) => {
                                return restaurant?.info?.name
                                    ?.toLowerCase()
                                    ?.includes(searchKeyword.toLowerCase());
                            }
                        );
                        setFilteredListOfRestaurants(filterdList);
                    }}
                >
                    search
                </button>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filterdList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFilteredListOfRestaurants(filterdList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredListOfRestaurants.map((restaurant) => {
                    return (
                        <Link
                            to={"/restaurant/" + restaurant.info.id}
                            key={restaurant.info.id}
                        >
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Body;
