'use client'
// context/LocationContext.js
import React, { createContext, useContext, useState } from 'react';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({ label: "India", value: "india" });
  console.log("change",location);
  
  const handleSelectCitybypass = (city) => setLocation(city);

  return (
    <LocationContext.Provider value={{ location, handleSelectCitybypass }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
