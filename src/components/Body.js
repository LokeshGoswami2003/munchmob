import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    resetRestaurantListDisplay,
    updateRestaurantList,
} from "../utils/dataSlice";
import getRestaurantListData from "../utils/useGetRestaurantListData";
import filterRestaurantList from "../utils/useFilterRestaurantList";

function Body() {
    const restaurantList = useSelector((store) => store.data.restaurantList);
    const restaurantListDisplay = useSelector(
        (store) => store.data.restaurantListDisplay
    );
    console.log("log1:", restaurantList, restaurantListDisplay);
    const dispatch = useDispatch();
    useEffect(() => {
        const FillData = async () => {
            const restaurantListData = await getRestaurantListData([
                "12.9716",
                "77.5946",
            ]);
            console.log("log2", restaurantListData);
            const restaurantList = filterRestaurantList(restaurantListData);
            console.log("RestaurantList : ", restaurantList);
            dispatch(updateRestaurantList(restaurantList));
            dispatch(resetRestaurantListDisplay());
        };
        FillData();
    }, []);

    if (restaurantList === undefined) {
        return <h1>no restaurants in your area</h1>;
    }
    if (restaurantList.length === 0) {
        return <Shimmer />;
    }
    return (
        <div className="body">
            <div className="res-container">
                {restaurantListDisplay?.map((restaurant) => {
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
// const fetchAndSetRestaurantListData = async () => {
//     const RestaurantListData = await getRestaurantsList([
//
//
//     ]);
//     const
// };
// console.log(restaurantListData);
/**import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRestaurantList, updateRestaurantListDisplay, resetRestaurantsListDisplay } from "./dataSlice";

const RestaurantComponent = () => {
    const dispatch = useDispatch();
    const restaurantList = useSelector((state) => state.data.restaurantList);
    const restaurantsListDisplay = useSelector((state) => state.data.restaurantsListDisplay);

    useEffect(() => {
        // Simulate fetching data
        const fetchedRestaurants = [
            { id: 1, name: "Restaurant 1" },
            { id: 2, name: "Restaurant 2" },
        ];

        // Update restaurant list
        dispatch(updateRestaurantList(fetchedRestaurants));

        // Optionally, update the display list
        dispatch(updateRestaurantListDisplay(fetchedRestaurants));
    }, [dispatch]);

    return (
        <div>
            <h1>Restaurants</h1>
            <ul>
                {restaurantsListDisplay.map((restaurant) => (
                    <li key={restaurant.id}>{restaurant.name}</li>
                ))}
            </ul>
            <button onClick={() => dispatch(resetRestaurantsListDisplay())}>Reset Display List</button>
        </div>
    );
};

export default RestaurantComponent;**/
