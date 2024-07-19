const getRestaurantListData = async ([lat, lng]) => {
    try {
        const restaurantListSearchApiString = `http://34.100.226.1:3000/api/restaurants?lat=${lat}&lng=${lng}`;
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
