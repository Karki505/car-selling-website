import React from "react";
import WhyUsCard from "./WhyUsCard";
import { SiWebmoney } from "react-icons/si";
import { FaUsers, FaShippingFast } from "react-icons/fa";

const WhyUs = () => {
    const icon1 = <SiWebmoney className=" text-green-500 mx-auto" size={48} />;
    const icon2 = <FaUsers className=" text-green-500 mx-auto" size={48} />;
    const icon3 = (
        <FaShippingFast className=" text-green-500 mx-auto" size={48} />
    );

    return (
        <div className="flex flex-col justify-center container md:mt-16 py-10">
            <h1 className=" font-bold text-4xl text-center">
                Why choose <span className=" text-primary">CarVista </span>?
            </h1>

            <p className=" text-center">
            Discover why CarVista is your ultimate destination for seamless car buying experiences and unparalleled customer satisfaction.
            </p>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
                <WhyUsCard icon={icon1} title="Financing Options" describe="Explore a range of financing solutions tailored to your budget, ensuring flexibility and affordability. Partnering with trusted lenders, we offer competitive rates and personalized plans for a seamless car purchase experience." />
                <WhyUsCard icon={icon2} title="Satisfied Customers" describe="Join our community of delighted buyers who have experienced transparent transactions and outstanding service. From helping you find your perfect vehicle to ongoing support, we prioritize your satisfaction throughout the entire process.

" />
                <WhyUsCard icon={icon3} title="Fast & Easy Booking" describe="Enjoy a streamlined booking process designed for convenience and efficiency. Whether online or in-person, securing your dream car is simple and hassle-free. Say goodbye to delays and hello to stress-free car shopping." />
            </div>
        </div>
    );
};

export default WhyUs;
