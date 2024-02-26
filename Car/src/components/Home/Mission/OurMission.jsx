import React from "react";
import img from "../../../assets/img/mission.jpg";

const OurMission = () => {
    return (
        <div className="container my-10">
            <div>
                <h1 className=" font-bold text-4xl text-center">
                    Our <span className=" text-primary">Mission</span>
                </h1>
            </div>

            <div className=" flex flex-col justify-center md:flex-row items-center gap-5 mt-8">
                {/* img section  */}
                <div className="w-full md:w-2/4">
                    <img className=" rounded-lg" src={img} alt="img" />
                </div>

                {/* content section  */}
                <div className="w-full md:w-2/4 space-y-4">
                    <h1 className=" font-bold text-primary text-xl lg:text-3xl">
                        Transforming Car Buying                    </h1>
                    <h2 className=" font-semibold text-lg lg:text-2xl">
                        Our mission at WheelsDeal is to redefine the car-buying experience by providing unparalleled convenience, transparency, and satisfaction to every customer.
                    </h2>
                    <p className=" text-sm lg:text-base">
                    Our mission: Streamline car buying, prioritize satisfaction, ensure transparency, offer diverse vehicle selection, and deliver exceptional service.
                    </p>
                    <p className=" text-sm lg:text-base">
                        <ol>-Simplify car buying.</ol>
                        <ol>-Ensure customer satisfaction.</ol>
                        <ol>-Offer transparent transactions.</ol>
                        
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurMission;
