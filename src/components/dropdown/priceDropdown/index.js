import React, { useContext, useState } from "react";

import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,} from "react-icons/ri";
import { Menu } from '@headlessui/react';

import { HouseCont } from "../../house/houseContext";

const PriceDropdown = () => {
  const { price, setPrice } = useContext(HouseCont);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "100000 - 130000",
    },
    {
      value: "130000 - 160000",
    },
    {
      value: "160000 - 190000",
    },
    {
      value: "190000 - 220000",
    },
    {
      value: "20000 - 30000",
    },
    {
      value: "30000 - 40000",
    },
  ];

  return (
    <Menu as="div" className="lg:max-w-[296px] w-full relative">
    <Menu.Button className="flex h-[70px] items-center px-[22px] border rounded-lg w-full text-left"
    onClick={() => setIsOpen(!isOpen)}
    >
      <RiWallet3Line className="text-2xl mr-[18px] text-green" />
      <div>
        <div className="text-[18px] font-medium leading-light">{price}</div>
        <div className="text-[16px] font-light text-lime-900">Select Price Range</div>
      </div>
      {isOpen ? (
        <RiArrowUpSLine  className="text-2xl text-green-700 ml-auto"/>
      ) : (
        <RiArrowDownSLine className="text-2xl text-green-700 ml-auto"/>
      )}
    </Menu.Button>
    <Menu.Items className="px-6 py-8 text-[15px] space-y-4 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg" >
          {prices.map((price, index) => {
              return (
                  <Menu.Item
                  className="cursor-pointer hover:text-green-700 transition"
                  as="li"
                  key={index}
                  onClick={() => setPrice(price.value)}
                  >
                      {price.value}
                  </Menu.Item>
              );
          })}
      </Menu.Items>
  </Menu>
  )
};

export default PriceDropdown;
