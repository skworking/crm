'use client'
// context/LocationContext.js
import React, { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation'

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({ label: "India", value: "india" });
  const router = useRouter();
  const handleSelectCitybypass = (city) => {
    setLocation(city)
    const currentPath = window.location.pathname;
    if (currentPath.includes('/price-in-')) {
      // Replace the city name in the URL
      const newPath = currentPath.replace(/\/price-in-[^/]+/, `/price-in-${city.value.toLowerCase()}`);

      console.log('Current Path:', currentPath);
      console.log('New Path:', newPath);

      if (newPath !== currentPath) {
        router.push(newPath); // Use router.replace if you don't want to keep history
      }
    }
  }

  return (
    <LocationContext.Provider value={{ location, handleSelectCitybypass }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
