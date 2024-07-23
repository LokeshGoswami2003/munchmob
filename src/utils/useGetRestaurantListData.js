const getRestaurantListData = async ([lat, lng]) => {
    try {
        const restaurantListSearchApiString = `https://www.munchmob.online/api/restaurants?lat=${lat}&lng=${lng}`;
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
