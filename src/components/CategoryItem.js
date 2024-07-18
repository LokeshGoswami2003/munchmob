import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const CategoryItem = ({ item, inCart }) => {
    const dispatch = useDispatch();
    const itemArray = useSelector((store) => store.cart.itemArray);
    const [toAdd, setToAdd] = useState(!inCart);
    useEffect(() => {
        itemArray.forEach((element) => {
            if (element.id === item.id) {
                setToAdd(false);
            }
        });
    }, [toAdd, dispatch, itemArray]);
    return (
        <div className="bg-inherit p-4 rounded-lg shadow-md flex items-center justify-between transform transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105 w-10/12 mx-auto">
            <div className="flex-grow mr-4">
                <h3 className="text-lg font-semibold text-dark">{item.name}</h3>
                <p className="text-sm text-fade mt-2">{item.description}</p>
                <p className="text-md text-dark font-semibold mt-2">
                    ${(item.price / 100).toFixed(2)}
                </p>
                {toAdd ? (
                    <button
                        className="mt-2 bg-dark text-white py-1 px-3 rounded hover:bg-secondary transition duration-300"
                        onClick={() => {
                            setToAdd(false);
                            dispatch(addItem(item));
                        }}
                    >
                        Add to Cart
                    </button>
                ) : (
                    <button
                        className="mt-2 bg-dark text-white py-1 px-3 rounded hover:bg-secondary transition duration-300"
                        onClick={() => {
                            setToAdd(true);
                            dispatch(removeItem(item));
                        }}
                    >
                        remove from Cart
                    </button>
                )}
            </div>
            <img
                className="w-32 h-32 rounded-lg object-cover"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.imageId}`}
                alt={item.name}
            />
        </div>
    );
};

export default CategoryItem;
