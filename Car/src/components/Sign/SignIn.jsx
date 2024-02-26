import React, { useState } from "react";

const SignIn = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userNumber: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any action with the form data, such as sending it to a server
    console.log(formData);
    // After handling form submission, you might want to reset the form
    setFormData({
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      userNumber: ""
    });
    // Optionally, close the form
    closeForm();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form className=" w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl" onSubmit={handleSubmit}>
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Book Now
          </h1>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
              value={formData.userFirstName}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
              value={formData.userLastName}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email"
              value={formData.userEmail}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Phone No."
              value={formData.userNumber}
              onChange={handleChange}
            />
          </div>
          <div className=" flex gap-5">
          <div>
      <button className=" bg-green-500 text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
        Book Appointment
      </button>
    </div>

            <button
              className=" bg-orange-500 text-white px-10 rounded-md active:bg-red-500"
              type="button"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;