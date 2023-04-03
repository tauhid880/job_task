import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import Img from "../../assets/contact.jpg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const ContactUs = () => {
  const [value, setValue] = useState();
  const [data, setData] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (data) => {
    setData(data);
  };

  return (
    <div>
      <div className="flex flex-row justify-around shadow-xl mx-auto my-16">
        <div>
          <h2 className="mt-14 text-2xl font-semibold mb-5">
            Get In Touch With Us To Connect
          </h2>
          <form className="shadow-xl p-10">
            <div className="flex flex-row justify-around items-center gap-3 mb-5">
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex flex-row justify-around items-center gap-3 mb-5">
              <PhoneInput
                className="input input-bordered w-full max-w-xs"
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              />
              <Select
                className="w-full max-w-xs"
                placeholder="Country"
                options={options}
                data={data}
                onChange={changeHandler}
              />
            </div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                I have booked but registration is not done
              </option>
              <option>Registration done</option>
              <option>Registration done but not booked</option>
            </select>
          </form>
          <button className="btn btn-wide rounded-sm my-10">Submit</button>
        </div>
        <div>
          <img className="p-5" src={Img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
