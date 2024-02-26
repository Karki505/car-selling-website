import React from "react";
import img from "../../assets/img/vision.jpg";

const Vision = () => {
    return (
        <div className=" flex flex-col justify-center md:flex-row items-center gap-5 mt-16">
            {/* img section  */}
            <div className="w-full md:w-2/5">
                <img className=" rounded-lg" src={img} alt="img" />
            </div>

            {/* content section  */}
            <div className="w-full md:w-2/4 space-y-4">
                <h1 className=" text-4xl font-bold ">Our Vision</h1>

                <h2 className=" font-semibold text-lg lg:text-2xl">
                "Redefining Car Buying for the Modern Era"
                </h2>
    
                <p className=" text-sm lg:text-base">
                At CarVista, our vision is to revolutionize the car buying experience by offering unparalleled convenience, transparency, and satisfaction to every customer. We strive to create a platform where individuals can effortlessly find their perfect vehicle, supported by a commitment to integrity, excellence, and continuous innovation. Our goal is to become the trusted destination for car buyers, providing a seamless journey from browsing to ownership.
                </p>
            </div>
        </div>
    );
};

export default Vision;
