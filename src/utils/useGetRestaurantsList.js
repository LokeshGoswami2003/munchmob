const getRestaurantsList = async ([lat, lng]) => {
    try {
        const restaurantsSearchApiString =
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=" +
            lat +
            "&lng=" +
            lng +
            "&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

        console.log(
            "restaurantsSearchApiString to get restaurants data is" +
                restaurantsSearchApiString
        );

        const data = await fetch(restaurantsSearchApiString);
        const restaurantsListData = await data.json();

        console.log("json data of restaurants list is");
        console.log(restaurantsListData);

        return restaurantsListData;
    } catch (error) {
        console.log(error);
    }
};
export default getRestaurantsList;
