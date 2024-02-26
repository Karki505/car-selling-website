import React from "react";
import { GiCarWheel } from "react-icons/gi";
import { SiGoogleearthengine } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { SiCoronaengine } from "react-icons/si";
import ServiceCards from "./ServiceCards";

const OurServices = () => {
    const icon1 = <GiCarWheel className=" text-green-500 mx-auto" size={48} />;
    const icon2 = (
        <SiGoogleearthengine className=" text-green-500 mx-auto" size={48} />
    );
    const icon3 = (
        <MdDesignServices className=" text-green-500 mx-auto" size={48} />
    );

    const icon4 = <IoSettings className=" text-green-500 mx-auto" size={48} />;
    const icon5 = <FaCar className=" text-green-500 mx-auto" size={48} />;
    const icon6 = (
        <SiCoronaengine className=" text-green-500 mx-auto" size={48} />
    );

    return (
        <div className="container pt-24">
            <div>
                <h1 className=" font-bold text-4xl text-center">
                    Our <span className=" text-primary">Services</span>
                </h1>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
                <ServiceCards icon={icon1} title="Tires & Wheels" sentence="Ensure your vehicle's safety and performance with our top-notch tire and wheel services, including installation, rotation, and alignment." />
                <ServiceCards icon={icon2} title="Exhaust System" sentence="Keep your car running smoothly with our expert exhaust system repairs and replacements, maximizing efficiency and reducing emissions." />
                <ServiceCards icon={icon3} title="Cars Maintenance" sentence="Trust our skilled technicians to provide comprehensive car maintenance services, from oil changes to fluid checks, to keep your vehicle in peak condition." />
                <ServiceCards icon={icon4} title="Brake Repairs" sentence="Stay safe on the road with our professional brake repairs and maintenance, ensuring reliable stopping power and optimal braking performance." />
                <ServiceCards icon={icon5} title="Body Service" sentence="Restore your car's appearance and structural integrity with our range of body repair services, including dent removal, painting, and collision repairs." />
                <ServiceCards icon={icon6} title="Engine Services" sentence="Maintain your engine's longevity and performance with our thorough engine diagnostics, repairs, and tune-ups, performed by our experienced mechanics" />
            </div>
        </div>
    );
};

export default OurServices;
