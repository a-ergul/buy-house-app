import React, { createContext, useEffect, useState } from "react";

import { housesData } from "../../../data";

export const HouseCont = createContext();

const HouseContextProv = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);

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
    // return only countries
    const allProperties = houses.map((house) => {
      return house.type;
    });
    console.log(allProperties);

    //remove duplicates
    const uniqueProperties = ["Property type(any)", ...new Set(allProperties)];

    setProperties(uniqueProperties);
  }, [houses]);

  return <>
    
      <HouseCont.Provider
      value={{
        country,
        setCountry,
        countries,
      }}
      >
        {children}
      </HouseCont.Provider>
    
    </>
 
}

export default HouseContextProv;
