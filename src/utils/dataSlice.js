import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        restaurantList: [],
        restaurantListDisplay: [],
    },
    reducers: {
        updateRestaurantList: (state, action) => {
            state.restaurantList = action.payload;
        },
        updateRestaurantListDisplay: (state, action) => {
            state.restaurantListDisplay = action.payload;
        },
        resetRestaurantListDisplay: (state, action) => {
            state.restaurantListDisplay = state.restaurantList;
        },
    },
});
export const {
    updateRestaurantList,
    updateRestaurantListDisplay,
    resetRestaurantListDisplay,
} = dataSlice.actions;
export default dataSlice.reducer;
