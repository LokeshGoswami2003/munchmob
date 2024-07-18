import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CategoryItem from "./CategoryItem";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.itemArray);

    const handleCheckout = () => {
        // Implement checkout functionality here
        dispatch(clearCart());
        alert(
            "your food will be given to poor people you can cook for yourself"
        );
    };

    return (
        <div className="bg-secondary p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-dark mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-dark">Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <CategoryItem key={item.id} item={item} inCart={true} />
                    ))}
                    <button
                        className="mt-4 bg-dark text-white py-2 px-6 rounded hover:bg-secondary transition duration-300"
                        onClick={handleCheckout}
                    >
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
