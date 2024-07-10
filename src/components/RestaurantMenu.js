import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId=" +
                resId
        );
        const json = await data.json();
        console.log(resId);
        console.log(json);
        setResInfo(json.data);
    };
    let it = true;
    let topMenu =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card?.itemCards;
    if (topMenu == null) {
        topMenu =
            resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card?.carousel;
        it = false;
    }
    console.log(topMenu);
    return (
        <div className="menu">
            <h1>{resInfo?.cards[0]?.card?.card?.text}</h1>
            <h2>Menu</h2>
            <div className="menu-list">
                {topMenu?.map((menuItem) => {
                    return it ? (
                        <h3 key={menuItem.bannerId}>
                            {menuItem?.card?.info?.name}
                        </h3>
                    ) : (
                        <h3 key={menuItem.bannerId}>
                            {menuItem?.card?.dish?.info?.name}
                        </h3>
                    );
                })}
            </div>
        </div>
    );
}

export default RestaurantMenu;
