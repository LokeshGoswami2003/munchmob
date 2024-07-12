import filterRestaurantsData from "./useFilterRestaurantsData";
import getRestaurantsData from "./useGetRestaurantsData";

const setRestaurants = async ([setRestaurantsList, [lat, lng]]) => {
    const rawRestaurantsData = await getRestaurantsData([lat, lng]);
    const restaurantsList = filterRestaurantsData(rawRestaurantsData);
    setRestaurantsList(restaurantsList);
    console.log("restaurantsList updated to");
    console.log(restaurantsList);
};
export default setRestaurants;
