import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemArray: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.itemArray.push(action.payload);
        },
        removeItem: (state, action) => {
            const id = action.payload.id;
            state.itemArray = state.itemArray.filter(
                (object) => object.id !== id
            );
        },
        clearCart: (state, action) => {
            state.itemArray.length = [];
        },
    },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
