const filterRestaurantsData = (restaurantsData) => {
    if (restaurantsData.data.cards[0].card.card.id === "swiggy_not_present") {
        return undefined;
    }
    return restaurantsData?.data?.cards[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants;
};
export default filterRestaurantsData;
