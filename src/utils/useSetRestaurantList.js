import { useDispatch } from "react-redux";
import filterRestaurantList from "./useFilterRestaurantList";
import getRestaurantListData from "./useGetRestaurantListData";
import { updateRestaurantList } from "./dataSlice";
import React from "react";
const setRestaurantList = ([lat, lng]) => {
    const dispatch = useDispatch();
    const restaurantListData = getRestaurantListData([lat, lng]);
    const restaurantList = filterRestaurantList(restaurantListData);
    console.log("RestaurantList : ", restaurantList);
    dispatch(updateRestaurantList(restaurantList));
    return <h1>h</h1>;
};
export default setRestaurantList;
