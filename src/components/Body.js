import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import getRestaurantsList from "../utils/useGetRestaurantsList";

function Body() {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
        []
    );
    const [searchKeyword, setSearchKeyword] = useState("");
    const [searchKeywordAdd, setSearchKeywordAdd] = useState("");

    useEffect(() => {
        const fetchAndSetRestaurantListData = async () => {
            const RestaurantListData = await getRestaurantsList([
                "26.95250",
                "75.71050",
            ]);
        };
        console.log(restaurantListData);
    }, []);

    if (listOfRestaurants === undefined)
        return <h1>no restaurants in your area</h1>;
    return listOfRestaurants?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <input
                    type="text"
                    value={searchKeywordAdd}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setSearchKeywordAdd(e.target.value);
                    }}
                />

                <button
                    className="search"
                    onClick={() => {
                        console.log("search location called");
                        fetchAreaData();
                    }}
                >
                    search for Area
                </button>
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
                {filteredListOfRestaurants?.map((restaurant) => {
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
