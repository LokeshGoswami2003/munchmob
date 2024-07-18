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
    const location = useSelector((store) => store.locationData.location);
    console.log(location);
    const lat = location[0];
    const lng = location[1];
    console.log("log1:", restaurantList, restaurantListDisplay);
    const dispatch = useDispatch();
    useEffect(() => {
        const FillData = async () => {
            const restaurantListData = await getRestaurantListData([lat, lng]);
            console.log("log2", restaurantListData);
            const restaurantList = filterRestaurantList(restaurantListData);
            console.log("RestaurantList : ", restaurantList);
            dispatch(updateRestaurantList(restaurantList));
            dispatch(resetRestaurantListDisplay());
        };
        FillData();
    }, [location]);

    if (restaurantList === undefined) {
        return <h1>no restaurants in your area</h1>;
    }
    if (restaurantList.length === 0) {
        return <Shimmer />;
    }
    return (
        <div className="bg-primary px-10">
            <div className="flex flex-wrap justify-between gap-4">
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
