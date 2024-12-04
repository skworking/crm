'use client'
import { GenerateBreadcrumbs } from '@/app/comman/commanFunctions';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Dropdown from '@/app/comman/dorpdown';
import { SelectChangeEvent } from '@mui/material';
import { useLocation } from '@/app/context/locationContext';
interface OptionType {
    value?: string;
    label: string;
    isHeader?: boolean;
}

const DealersComponent = () => {
    const { location,handleSelectCitybypass} = useLocation();
    console.log("access loc",location);
    
    const breadcrumbItems = GenerateBreadcrumbs();
    breadcrumbItems.splice(1, 0, { label: "New Trucks", path: "/en/new-trucks" });
    const brandOptions: OptionType[] = [
        { label: 'POPULAR brands', isHeader: true },
        { value: 'ashok_leyland', label: 'Ashok Leyland' },
        { value: 'tata', label: 'Tata' },
        { value: 'mahindra', label: 'Mahindra' },
        { value: 'eicher', label: 'Eicher' },
    ];
    const cityOptions: OptionType[] = [
        { label: 'Populer Cities', isHeader: true },
        { value: 'india', label: 'India' },
        { value: 'new delhi', label: 'New Delhi' },
        { value: 'jaypur', label: 'Jaypur' },
        { value: 'kanpur', label: 'Kanpur' },
    ];


    const [selectedBrand, setSelectedBrand] = useState<string | null>('');
    const [selectedCity, setSelectedCity] = useState<string | null>(location.label);

    useEffect(() => {
        setSelectedCity(location.label); // Update selected city when location changes
    }, [location]);

    const handleDropdownChange = (event: SelectChangeEvent<string | null>, type: string) => {
        console.log(event, type);

        const value = event.target.value ?? '';
        switch (type) {
            case 'brand':
                setSelectedBrand(value);
               
                break;
            case 'city':

            const selectedValue = value;
            const selectedCity = cityOptions.find((city) => city.value === selectedValue);
            console.log(selectedCity);
            
            if (selectedCity) {
                handleSelectCitybypass(selectedCity)
                setSelectedCity(selectedValue); // selectedCity.value is a string
            }
                break;
            default:
                break;
        }
    };
    return (
        <div className='relative'>
            <div className='lg:h-[400px] h-[200px] relative w-full'>
                <Image src={'https://truckcdn.cardekho.com/pwa/img/dealer_banner.jpg'} alt="" 
                    width={0}
                    height={0}
                    fill
                    sizes="100vw"
                    className="object-cover  w-full lg:h-full "
                />

                {/* Red Circle & Content */}
                <div className="absolute max-w-7xl m-auto inset-0 flex items-center overflow-hidden ">
                    {/* Red Semi-Transparent Circle */}
                    <div className="relative  lg:ml-[50px] flex items-center justify-center lg:w-[600px] lg:h-[600px] w-[350px] lg:bottom-20 h-[350px] bg-[#d94025]  mix-blend-multiply bg-opacity-[.95] rounded-full ">

                    </div>
                </div>

            </div>
            <div className='absolute inset-0  lg:top-[32px] space-y-10 max-w-7xl  p-4 m-auto'>

                <div className="  lg:text-[48px] text-2xl px-7 text-white font-bold left-0">
                    Helping you connect to the 
                    <span className="hidden lg:block"> <br /> right dealers</span>
                    <span className="lg:hidden inline-flex"> right dealers</span>
                </div>
                <div className="lg:block hidden text-[14px] max-w-2xl bg-white rounded-lg font-bold left-0 ">

                    <div className='max-w-7xl'>
                        <div className="relative z-5  p-4  gap-4 lg:flex">
                            <Dropdown
                                options={brandOptions}
                                value={selectedBrand}
                                onChange={(e) => handleDropdownChange(e, 'brand')}
                                placeholder="Select Brand"
                                ariaLabel="Brand Selection"
                            />

                            <Dropdown
                                options={cityOptions}
                                value={selectedCity}
                                onChange={(e) => handleDropdownChange(e, 'city')}
                                placeholder="Select City"
                                ariaLabel="Model Selection"
                            />

                            <button className="bg-[#d94025] text-white font-bold text-[20px] px-4 py-2 rounded w-full mt-4">
                                Search
                            </button>
                        </div>
                    </div>
                </div>


            </div>
            <div className='max-w-7xl relative m-auto'>
                <div className="lg:absolute sm:p-4 overflow-auto no-scrollbar lg:hidden block mt-[-15%] sm:overflow-visible text-[14px]  lg:w-fit  font-bold left-0 ">

                    <div className='lg:w-full'>
                        <div className="relative z-5 bg-white p-4  gap-4 lg:flex">
                            <Dropdown
                                options={brandOptions}
                                value={selectedBrand}
                                onChange={(e) => handleDropdownChange(e, 'brand')}
                                placeholder="Select Brand"
                                ariaLabel="Brand Selection"
                            />

                            <Dropdown
                                options={cityOptions}
                                value={selectedCity}
                                onChange={(e) => handleDropdownChange(e, 'city')}
                                placeholder="Select Model"
                                ariaLabel="Model Selection"
                            />

                            <button className="bg-[#d94025] text-white font-bold text-[20px] px-4 py-2 rounded w-full mt-4">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                <Image
                    width={0}
                    height={20}
                    sizes="100vw"
                    className="object-none  w-full "
                    src={'https://tpc.googlesyndication.com/simgad/2186141005922165001'} alt='' />


            </div>
            <hr />


        </div>
    )
}

export default DealersComponent