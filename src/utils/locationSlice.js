import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: "locationData",
    initialState: {
        address: "Bengaluru, Karnataka, India",
        location: ["12.9716", "77.5946"],
    },
    reducers: {
        updateLocation: (state, action) => {
            state.address = action.payload.address;
            state.location = action.payload.location;
        },
    },
});
export const { updateLocation } = locationSlice.actions;
export default locationSlice.reducer;
