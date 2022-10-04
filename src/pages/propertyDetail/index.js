import React from "react";

import { housesData } from "../../data";
import { useParams, Link } from "react-router-dom";

import { BiBed, BiBath, BiArea } from "react-icons/bi";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = housesData.find((house) => {
    return house.id === parseInt(id);
  });
  return (
    <div className="container mx-auto min-h-[800px] mb-14">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-600">{property.name}</h2>
          <h2 className="text-2xl font-semibold text-slate-400">
            {property.address}
          </h2>
        </div>
        <div className="mb-4 lg:mb-o flex gap-x-2 text-sm">
          <div className="bg-rose-400 rounded-full text-white px-3 inline-block">
            {property.type}
          </div>
          <div className="bg-green-500 rounded-full text-white px-3 inline-block">
            {property.country}
          </div>
        </div>
        <div className="text-3xl font-semibold text-violet-600">
          $ {property.price}
        </div>
      </div>
      <div className="flex flex-col items-start gap-8 lg:flex-row">
        <div className="max-w-[765px]">
          <div className="mb-8 py-4">
            <img src={property.imageLg} alt="property" />
          </div>
          <div className="flex gap-x-6 text-green-700">
            <div className="flex gap-x-2 items-center">
              <BiBed className="text-2xl" />
              <div className="text-lg font-semibold mt-1">
                {property.bedrooms}
              </div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiBath className="text-2xl" />
              <div className="text-lg font-semibold mt-1">
                {property.bathrooms}
              </div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiArea className="text-2xl" />
              <div className="text-lg font-semibold mt-1">
                {property.surface}
              </div>
            </div>
          </div>
          <p className="mt-4 text-slote-400">{property.description}</p>
        </div>
        <div className="flex-1 w-full mb-8 mt-4 border border-gray-300 rounded-lg px-6 py-8">
          <div className="flex items-center gap-x-4 mb-8">
            <div className="w-20 h-20 p-1 ">
              <img src={property.agent.image} alt="propertyAgent" />
            </div>
            <div>
              <div className="font-semibold text-lg">{property.agent.name}</div>
              <Link to="" className="text-green-700 text-sm ">
                View List
              </Link>
            </div>
          </div>
          <form className="flex flex-col gap-y-4">
            <input
              type="text"
              placeholder="Name *"
              className="border border-gray-300 focus:border-green-700 rounded w-full px-4 h-12 text-sm outline-none"
            />
            <input
              type="text"
              placeholder="Email *"
              className="border border-gray-300 focus:border-green-700 rounded w-full px-4 h-12 text-sm outline-none"
            />
            <input
              type="text"
              placeholder="Phone *"
              className="border border-gray-300 focus:border-green-700 rounded w-full px-4 h-12 text-sm outline-none"
            />
            <textarea
              className="border border-gray-300 focus:border-green-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none"
              type="text"
              placeholder="Message*"
              defaultValue="Hello, I am interested"
            />
            <div className="flex gap-x-2">
                <button
                className="bg-green-700 hover:bg-green-800 text-white rounded p-4 text-sm w-full transition"
                > Send Message</button>
                 <button
                className="bg-teal-600 hover:bg-teal-800 text-white rounded p-4 text-sm w-full transition"
                > Call</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
