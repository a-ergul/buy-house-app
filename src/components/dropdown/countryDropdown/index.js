import React, { useContext, useState } from "react";
import { HouseCont } from "../../house/houseContext";

import { Menu } from "@headlessui/react";

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseCont);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Menu as="div" className="w-full lg:max-v-[296px] cursor-pointer relative">
        <Menu.Button className="flex h-[70px] items-center px-[22px] border rounded-lg w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        >
          <RiMapPinLine className="text-2xl mr-[18px] text-green" />
          <div>
            <div className="text-[18px] font-medium leading-light">{country}</div>
            <div className="text-[16px] font-light text-lime-900">Select your place</div>
          </div>
          {isOpen ? (
            <RiArrowUpSLine  className="text-2xl text-green-700 ml-auto"/>
          ) : (
            <RiArrowDownSLine className="text-2xl text-green-700 ml-auto"/>
          )}
        </Menu.Button>
        <Menu.Items className="px-6 py-8 text-[15px] space-y-4 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg" >
              {countries.map((country, index) => {
                  return (
                      <Menu.Item
                      className="cursor-pointer hover:text-green-700 transition"
                      as="li"
                      key={index}
                      onClick={() => setCountry(country)}
                      >
                          {country}
                      </Menu.Item>
                  );
              })}
          </Menu.Items>
      </Menu>
    </div>
  );
};

export default CountryDropdown;
