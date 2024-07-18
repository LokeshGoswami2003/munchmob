import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import dataReducer from "./dataSlice";
import locationReducer from "./locationSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        data: dataReducer,
        locationData: locationReducer,
    },
});
export default appStore;
