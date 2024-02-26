import React from "react";
import img from "../../assets/img/approch.jpg";

const Approch = () => {
    return (
        <div className=" flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14">
            {/* content section  */}
            <div className="w-full md:w-2/4 space-y-4">
                <h1 className=" text-4xl font-bold ">Our Approch</h1>

                <h2 className=" font-semibold text-lg lg:text-2xl">
                    "Simplifying Car Buying with Excellence"
                </h2>
                
                <p className=" text-sm lg:text-base">
                At CarVista, we prioritize transparency and personalized service, ensuring a seamless and enjoyable car buying experience. With a commitment to excellence and innovation, we aim to exceed expectations and set a new standard in the automotive industry.
                </p>
            </div>

            {/* img section  */}
            <div className="w-full md:w-2/5">
                <img className=" rounded-lg" src={img} alt="img" />
            </div>
        </div>
    );
};

export default Approch;
