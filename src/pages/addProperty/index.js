import React, { useState } from "react";

const initialState = {
  name: "",
  type: "",
  category: "",
  description: "",
  price: "",
  address: "",
  bathrooms: "",
  country: "",
  surface: "",
  year: "",
};

const AddProperty = () => {
  const [data, setData] = useState(initialState);
  const {
    name,
    type,
    category,
    description,
    price,
    address,
    bathrooms,
    country,
    surface,
    year
  } = data;
  return (
    <div className="w-full flex flex-col items-center justify-center my-6">
      <div className="flex1 flex flex-col items-center">
        <h1 className="text-3xl my-6 text-center">
          Add <span className="text-green-700">Property</span>
        </h1>
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <input
            type="text"
            className="outline-none border sm:w-[370px] p-[15px] rounded-[15px] m-[5px] text-lg"
            placeholder="Property Name"
          />
          <input
            type="text"
            className="outline-none border sm:w-[370px] p-[15px] rounded-[15px] m-[5px] text-lg"
            placeholder="Property Description"
          />
        </div><div className="flex flex-col lg:flex-row lg:gap-8">
          <input
            type="text"
            className="outline-none border sm:w-[370px] p-[15px] rounded-[15px] m-[5px] text-lg"
            placeholder="Property Category"
          />
          <input
            type="text"
            className="outline-none border sm:w-[370px] p-[15px] rounded-[15px] m-[5px] text-lg"
            placeholder="Property Location"
          />
        </div><div className="flex flex-col lg:flex-row lg:gap-8">
          <input
            type="text"
            className="outline-none border sm:w-[370px] p-[15px] rounded-[15px] m-[5px] text-lg"
            placeholder="Property Adress"
          />
          <input
            type="text"
            className="outline-none border sm:w-[370px] p-[15px] rounded-[15px] m-[5px] text-lg"
            placeholder="Surface"
          />
        </div><div className="flex flex-col lg:flex-row lg:gap-8">
          <input
            type="text"
            className="outline-none border sm:w-[370px] p-[15px] rounded-[15px] m-[5px] text-lg"
            placeholder="Number of Bedrooms"
          />
          <input
            type="text"
            className="outline-none border sm:w-[370px] p-[15px] rounded-[15px] m-[5px] text-lg"
            placeholder="Number of Bathrooms"
            
          />
        </div><div className="flex flex-col lg:flex-row lg:gap-8">
          <input
            type="text"
            className="outline-none border sm:w-[370px] p-[15px] rounded-[15px] m-[5px] text-lg"
            placeholder="Property Price"
          />
          <input
            type="text"
            className="outline-none border sm:w-[370px] p-[15px] rounded-[15px] m-[5px] text-lg"
            placeholder="Property Year"
          />
        </div>
        <div className="flex flex-col lg:flex-col lg:gap-8 mt-7">
        <input
        type="file"
        />
        <button
        className="bg-teal-400 px-7 py-4 transition my-3 "
        type="submit"
        >Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
