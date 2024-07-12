import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import setRestaurants from "../utils/useSetRestaurants";
import FilterRestaurants from "./FilterRestaurants";

function Body() {
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [restaurantsListDisplay, setRestaurantsListDisplay] = useState([]);

    useEffect(() => {
        setRestaurants([setRestaurantsList, ["26.95250", "75.71050"]]);
    }, []);
    useEffect(() => {
        setRestaurantsListDisplay(restaurantsList);
        console.log("restaurantsListDisplay updated to ", restaurantsList);
    }, [restaurantsList]);
    if (restaurantsList === undefined) {
        return <h1>no restaurants in your area</h1>;
    }
    if (restaurantsList.length === 0) {
        return <Shimmer />;
    }
    return (
        <div className="body">
            <FilterRestaurants
                setRestaurantsListDisplay={setRestaurantsListDisplay}
                restaurantsList={restaurantsList}
            />
            <div className="res-container">
                {restaurantsListDisplay?.map((restaurant) => {
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
//         "26.95250",
//         "75.71050",
//     ]);
//     const
// };
// console.log(restaurantListData);
