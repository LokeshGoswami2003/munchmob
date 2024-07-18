import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Accordion from "./Accordion";
import CategoryItem from "./CategoryItem";

function RestaurantMenu() {
    const location = useSelector((store) => store.locationData.location);
    const [expanded, setExpanded] = useState(0);
    const lat = location[0];
    const lng = location[1];
    const { resId } = useParams();
    const [menuData, setMenuData] = useState([]);
    const accordionRefs = useRef([]);

    useEffect(() => {
        fetchRestaurantDetails();
    }, []);

    useEffect(() => {
        if (accordionRefs.current[expanded]) {
            const element = accordionRefs.current[expanded];
            const yOffset = -100; // offset to leave some space from the top
            const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;

            window.scrollTo({
                top: y,
                behavior: "smooth",
            });
        }
    }, [expanded]);

    const handleAccordionToggle = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    const fetchRestaurantDetails = async () => {
        const rawRestaurantMenuData = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`
        );
        const restaurantMenuData = await rawRestaurantMenuData.json();
        const restaurantMenuDataCards = restaurantMenuData.data.cards;
        const menuItemsCategoryArray = filterMenuItemsArray(
            restaurantMenuDataCards
        );
        setMenuData(menuItemsCategoryArray);
    };

    const filterMenuItemsArray = (restaurantMenuDataCards) => {
        let itemCategoryArray = [];
        itemCategoryArray.push({
            name: restaurantMenuDataCards[0].card.card.text,
        });
        restaurantMenuDataCards.forEach((object) => {
            if (object.groupedCard?.cardGroupMap?.REGULAR?.cards) {
                const categoriesArray =
                    object.groupedCard?.cardGroupMap?.REGULAR?.cards;
                categoriesArray.forEach((obj) => {
                    if (
                        obj.card.card["@type"].includes("food.v2.ItemCategory")
                    ) {
                        const catagoryDataObject = obj.card.card;
                        const title = catagoryDataObject.title;
                        const catagoryItems = catagoryDataObject.itemCards.map(
                            (item) => {
                                const info = item.card.info;
                                return {
                                    id: info.id,
                                    name: info.name,
                                    category: info.category,
                                    description: info.description,
                                    imageId: info.imageId,
                                    price: info.price
                                        ? info.price
                                        : info.defaultPrice,
                                };
                            }
                        );
                        console.log(catagoryItems);
                        itemCategoryArray.push({ title, catagoryItems });
                    }
                });
            }
        });

        return itemCategoryArray;
    };

    if (menuData.length === 0) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="container mx-auto p-6 bg-primary text-dark rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-6">
                {menuData[0].name}
            </h1>
            <div className="space-y-4">
                {menuData.slice(1).map((category, index) => (
                    <Accordion
                        key={index}
                        title={category.title}
                        expanded={expanded === index}
                        onToggle={() => handleAccordionToggle(index)}
                        ref={(el) => (accordionRefs.current[index] = el)}
                    >
                        <div className="space-y-4">
                            {category.catagoryItems.map((item) => (
                                <CategoryItem
                                    key={item.id}
                                    item={item}
                                    inCart={false}
                                />
                            ))}
                        </div>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}

export default RestaurantMenu;
