import React, { createContext, useEffect, useState } from "react";

import { housesData } from "../../../data";

export const HouseCont = createContext();

const HouseContextProv = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [category, setCategory] = useState("Category type (any)");
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //all Countries
    const allCountries = houses.map((house) => {
      return house.country;
    });
    console.log(allCountries);

    //remove duplicates
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    console.log(uniqueCountries);

    setCountries(uniqueCountries);
  }, [houses]);

  useEffect(() => {
    // return only properties
    const allProperties = houses.map((house) => {
      return house.type;
    });
    console.log(allProperties);

    //remove duplicates
    const uniqueProperties = ["Property type(any)", ...new Set(allProperties)];

    setProperties(uniqueProperties);
  }, [houses]);

  useEffect(() => {
    //return only categories
    const allCategories = houses.map((house) => {
      return house.category;
    });

    //remove duplicates
    const uniqueCategories = ["Category (any)", ...new Set(allCategories)];

    setCategories(uniqueCategories);
  }, [houses]);

  const handleClick = () => {
    setLoading(true);

    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    const minPrice = parseInt(price.split("")[0]);
    console.log("Handle Click:", minPrice);

    const maxPrice = parseInt(price.split("")[2]);
    console.log("Handle Click:", maxPrice);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      console.log(housePrice);

      // if all values are selected;
      if (
        !isDefault(category) &&
        !isDefault(property) &&
        !isDefault(country) &&
        !isDefault(price)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return (
            house.category === category &&
            house.country === country &&
            house.type === property
          );
        }
      }

      // if all values are default;
      if (
        isDefault(country) &&
        isDefault(property) &&
        isDefault(category) &&
        isDefault(price)
      ) {
        return house;
      }

      // if country is selected;
      if (
        !isDefault(country) &&
        isDefault(property) &&
        isDefault(category) &&
        isDefault(price) 
      ) {
        return house.country === country;
      }

      // if property is selected;
      if (
        !isDefault(property) &&
        isDefault(country) &&
        isDefault(category) &&
        isDefault(price) 
      ) {
        return house.type === property;
      }

      // if category is selected; 
      if (
        !isDefault(category) &&
        isDefault(country) &&
        isDefault(property) &&
        isDefault(price) 
      ) {
        return house.category === category;
      }

      // if price is selected;
      if (
        !isDefault(price)  &&
        isDefault(country) &&
        isDefault(property) &&
        isDefault(category) 
      ) {
        if ( housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      if (
        isDefault(price) &&
        !isDefault(country) &&
        !isDefault(property) &&
        !isDefault(category)
      ) {
        return (
          house.country === country &&
          house.type === property &&
          house.category === category
        );
      }
      //only country is default (category, property and price is selected)
      if (
        !isDefault(price) &&
        isDefault(country) &&
        !isDefault(property) &&
        !isDefault(category)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property && house.category === category;
        }
      }
      //only property is default (country, category and price is selected)
      if (
        !isDefault(price) &&
        !isDefault(country) &&
        isDefault(property) &&
        !isDefault(category)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country && house.category === category;
        }
      }
      //only category is default (country, property and price is selected)
      if (
        !isDefault(price) &&
        !isDefault(country) &&
        !isDefault(property) &&
        isDefault(category)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property && house.country === country;
        }
      }

      //2 pairs combinations

      // country and property is not default (country and property is selected)
      if (
        !isDefault(country) &&
        !isDefault(property) &&
        isDefault(price) &&
        isDefault(category)
      ) {
        return house.country === country && house.type === property;
      }
      // category and property is not default (category and property is selected)
      if (
        !isDefault(category) &&
        !isDefault(property) &&
        isDefault(price) &&
        isDefault(country)
      ) {
        return house.category === category && house.type === property;
      }
      // category and country is not default (category and country is selected)
      if (
        !isDefault(category) &&
        !isDefault(country) &&
        isDefault(price) &&
        isDefault(property)
      ) {
        return house.country === country && house.category === category;
      }

      // category and price is not default (category and price is selected)
      if (
        !isDefault(category) &&
        !isDefault(price) &&
        isDefault(country) &&
        isDefault(property)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.category === category;
        }
      }
      // country and price is not default (country and price is selected)
      if (
        !isDefault(country) &&
        isDefault(property) &&
        isDefault(category) &&
        !isDefault(price)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      // property and price is not default (property and price is selected)
      if (
        isDefault(country) &&
        !isDefault(property) &&
        !isDefault(price) &&
        isDefault(category)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      )
    }, 1000);
  };

  return (
    <>
      <HouseCont.Provider
        value={{
          houses,
          loading,
          country,
          setCountry,
          countries,
          property,
          properties,
          setProperty,
          category,
          categories,
          setCategory,
          handleClick,
          price,
          setPrice
        }}
      >
        {children}
      </HouseCont.Provider>
    </>
  );
};

export default HouseContextProv;
