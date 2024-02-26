import React, { useState } from "react";
import CarsCard from "./CarsCard";

const OurCars = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const carsData = [
        {
            id: 0,
            img: "/src/assets/img/car1.png",
            name: "Cadillac Escalade",
            price: "22,440",
            category: "SUV",
        },
        {
            id: 1,
            img: "/src/assets/img/car2.png",
            name: "BMW 3 Series",
            price: "54,890",
            category: "Sedan",
        },
        {
            id: 2,
            img: "/src/assets/img/car3.png",
            name: "Mercedes",
            price: "75,890",
            category: "Luxury",
        },
        {
            id: 3,
            img: "/src/assets/img/car4.png",
            name: "BMW 7 Series",
            price: "55,789",
            category: "Luxury",
        },
        {
            id: 4,
            img: "/src/assets/img/car5.png",
            name: "Mercedes-Benz",
            price: "95,776",
            category: "Luxury",
        },
        {
            id: 5,
            img: "/src/assets/img/car6.png",
            name: "Range Rover",
            price: "88,450",
            category: "SUV",
        },
    ];

    const handleClick = (id) => {
        console.log("Clicked car id:", id);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className="container pt-24">
            <div>
                <h1 className="font-bold text-4xl text-center">
                    Our <span className="text-primary">Cars</span>
                </h1>
            </div>

            <div className="mb-4">
                <select
                    className="p-2"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="all">All</option>
                    <option value="SUV">SUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Luxury">Luxury</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {carsData
                    .filter(
                        (item) =>
                            selectedCategory === "all" ||
                            item.category === selectedCategory
                    )
                    .map((item) => (
                        <div key={item.id} onClick={() => handleClick(item.id)}>
                            <CarsCard
                                img={item.img}
                                name={item.name}
                                price={item.price}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default OurCars;
