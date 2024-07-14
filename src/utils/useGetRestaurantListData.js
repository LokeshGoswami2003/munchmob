const getRestaurantListData = async ([lat, lng]) => {
    try {
        const restaurantListSearchApiString =
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=" +
            lat +
            "&lng=" +
            lng +
            "&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

        const data = await fetch(restaurantListSearchApiString);

        if (!data) {
            return undefined;
        }
        const restaurantListData = await data.json();

        console.log("json data of restaurants list is : ", restaurantListData);
        return restaurantListData;
    } catch (error) {
        console.log("Error in useGetRestaurentListData");
        console.log(error);
    }
};
export default getRestaurantListData;
