'use client'
import { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    console.log(userAgent);
    
    if (/mobi|android|iphone|ipad|ipod/.test(userAgent)) {
      setDeviceType('mobile');
    // } else if (/tablet/.test(userAgent)) {
    //   setDeviceType('tablet');
    } else {
      setDeviceType('desktop');
    }
  }, [deviceType]);

  return deviceType;
};

export default useDeviceType;
