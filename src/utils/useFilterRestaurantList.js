const filterRestaurantList = (restaurantListData) => {
    console.log("Filtering Restaurant List From restaurantListData");

    if (!restaurantListData) {
        console.log("No restaurantListData to be found maybe error in api");
        return undefined;
    }
    if (
        restaurantListData?.data?.cards[0]?.card?.card?.id ===
        "swiggy_not_present"
    ) {
        console.log("No restaurantList to be fount in restaurantListData");
        return undefined;
    }
    const restaurantList =
        restaurantListData?.data?.cards[1]?.card?.card?.gridElements
            ?.infoWithStyle?.restaurants;
    return restaurantList;
};
export default filterRestaurantList;
