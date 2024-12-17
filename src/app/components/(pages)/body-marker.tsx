'use client'
import { GenerateBreadcrumbs } from '@/app/comman/commanFunctions';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Dropdown from '@/app/comman/dorpdown';
import { Autocomplete, Box, InputAdornment, MenuItem, SelectChangeEvent, TextField } from '@mui/material';
import { useLocation } from '@/app/context/locationContext';
import Breadcrumbs from '@/app/comman/breadCrumbs';
import VehicleListCard from '../vehicalListCad';
import ToolsCard from '@/app/comman/toolsCard';
import { IoLocation } from 'react-icons/io5';

interface OptionType {
    value?: string;
    label: string;
    isHeader?: boolean;
    icon?: string,
}

const BodyMarkerComponent = () => {
    const { location, handleSelectCitybypass } = useLocation();
    console.log("access loc", location);

    const breadcrumbItems = GenerateBreadcrumbs();
    breadcrumbItems.splice(1, 0, { label: "New Trucks", path: "/en/new-trucks" });

    const locationOptions: OptionType[] = [
        { label: 'Populer Cities', isHeader: true },
        { value: 'hydrabad', label: 'Hyderabad' },
        { value: 'new delhi', label: 'New Delhi' },
        { value: 'jaypur', label: 'Jaypur' },
        { value: 'kanpur', label: 'Kanpur' },
    ];

    const cityOptions: OptionType[] = [
        { label: 'Populer Cities', isHeader: true },
        { value: 'hydrabad', label: 'Hyderabad', icon: "https://truckcdn.cardekho.com/pwa/img/IconCityNew/hyderabad.svg" },
        { value: 'new delhi', label: 'New Delhi', icon: "https://truckcdn.cardekho.com/pwa/img/IconCityNew/new-delhi.svg" },
        { value: 'surat', label: 'Surat', icon: "https://truckcdn.cardekho.com/pwa/img/IconCityNew/surat.svg" },
        { value: 'mumbai', label: 'Mumbai', icon: "https://truckcdn.cardekho.com/pwa/img/IconCityNew/mumbai.svg" },
        { value: 'bangalore', label: 'Bangalore', icon: "https://truckcdn.cardekho.com/pwa/img/IconCityNew/bangalore.svg" },
        { value: 'pune', label: 'pune', icon: "https://truckcdn.cardekho.com/pwa/img/IconCityNew/pune.svg" },
        { value: 'kolkata', label: 'Kolkata', icon: "https://truckcdn.cardekho.com/pwa/img/IconCityNew/kolkata.svg" },
    ];



    const [selectedCity, setSelectedCity] = useState<string | null>(location.label);
    const [bodyMakerCity, SetBodyMakerCity] = useState<string | null>(null)
    useEffect(() => {
        setSelectedCity(location.label); // Update selected city when location changes
    }, [location]);

    const handleDropdownChange = (event: SelectChangeEvent<string | null>, type: string) => {
        console.log(event, type);

        const value = event.target.value ?? '';
        switch (type) {

            case 'location':

                const selectedValue = value;
                const selectedCity = locationOptions.find((city) => city.value === selectedValue);
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

    const truckData = [
        {
            name: "Tata Ace Gold",
            priceRange: "₹3.99 - ₹6.69 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/tata/ace-gold/tata-ace-gold-21473.jpg",
        },
        {
            name: "Mahindra Jeeto",
            priceRange: "₹4.72 - ₹5.65 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/mahindra/jeeto/mahindra-jeeto-65562.jpg",
        },
        {
            name: "Force Urbania",
            priceRange: "₹30.51 - ₹37.21 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/force/urbania/force-urbania.jpg",
        },
        {
            name: "Maruti Suzuki Super Carry",
            priceRange: "₹5.26 - ₹6.41 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/maruti-suzuki/super-carry/maruti-suzuki-super-carry-88671.jpg",
        },
        {
            name: "Tata Intra V10",
            priceRange: "₹6.55 - ₹6.76 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/tata/intra-v10/tata-intra-v10-18816.jpg",
        },
    ];

    const toolsArray = [
        {
            heading: 'Dealers',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconDealers-1.svg',
        },
        {
            heading: 'Service Centers',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconServiceCenters-1.svg',
        },
        {
            heading: 'Spare Parts',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconSpareParts-1.svg',
        },
        {
            heading: 'Body Makers',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconBodyMakers-1.svg',
        },
        {
            heading: 'Videos',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconVideos-1.svg',
        },
        {
            heading: 'Brochures',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconBrochures-1.svg',
        },
        {
            heading: 'Emi Calculator',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconEmiCalculator-1.svg',
        },
        {
            heading: 'Compare Trucks',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconCompareTrucks-1.svg',
        },
        {
            heading: 'Ask For Price',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconAskForPrice-1.svg',
        },
    ]

    const handleChange = (event: React.SyntheticEvent, newValue: OptionType | null) => {

        if (newValue && !newValue.isHeader) {
            SetBodyMakerCity(newValue?.value ?? null);
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
                    <span className="hidden lg:block"> <br />right body makers</span>
                    <span className="lg:hidden inline-flex">right body makers</span>
                </div>
                <div className="lg:block hidden text-[14px] max-w-2xl bg-white rounded-lg font-bold left-0 ">

                    <div className='max-w-7xl'>
                        <div className="relative z-5  p-4  gap-4 lg:flex">

                            <Dropdown
                                options={locationOptions}
                                value={selectedCity}
                                onChange={(e) => handleDropdownChange(e, 'location')}
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
                                options={locationOptions}
                                value={selectedCity}
                                onChange={(e) => handleDropdownChange(e, 'location')}
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
            {/* <hr /> */}
            <div className='max-w-7xl m-auto relative'>
                <Breadcrumbs items={breadcrumbItems} />
                <div className="lg:flex border-b-2  rounded-b-md border-gray-100 gap-4 ">
                    <div className="w-full lg:w-8/12 xl:w-[73.50%] space-y-4 mb-4 md:p-5 xl:p-0 " >
                        <h2 className='p-[17px 20px 0px] text-xl lg:text-[30px] font-bold mb-5 '>
                            Trucks Body Makers in india
                        </h2>

                        <div className={`border rounded-[16px] p-4 mb-3 flex flex-col  bg-white gap-2  relative bg-[url('https://stimg.cardekho.com/pwa/img/cityBackground.svg')] bg-contain bg-no-repeat h-[500px]`}>
                            <div className='flex justify-between gap-2'>
                                <h2 className='p-[17px 20px 0px]  text-xl font-bold '>
                                    {cityOptions.length} Body Makers
                                </h2>
                                <Autocomplete
                                    options={cityOptions}
                                    getOptionLabel={(option) => option.label}
                                    value={cityOptions.find(option => option.value === bodyMakerCity) || null}
                                    onChange={handleChange}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Search your city"
                                            variant="outlined"
                                            InputProps={{
                                                ...params.InputProps,
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <IoLocation />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />

                                    )}
                                    ListboxProps={{
                                        style: {
                                          maxHeight: 150, // Set the fixed height for the dropdown
                                          overflowY: 'auto', // Enable vertical scrolling
                                        },
                                      }}

                                    renderOption={(props, option) =>
                                        option.isHeader ? (
                                            <MenuItem
                                                disabled
                                                key={option.label}
                                                sx={{ fontWeight: 'bold', backgroundColor: '#f0f0f0' }}
                                            >
                                                {option.label}
                                            </MenuItem>
                                        ) : (
                                            <Box
                                                component="li"
                                                {...props}
                                                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                                                // className='flex gap-1 items-center'
                                            >
                                                {/* <LocationOnIcon fontSize="small" /> */}
                                                {option.label}
                                            </Box>
                                        )
                                    }
                                    sx={{ width: 500 }} // Custom width
                                />
                            </div>
                            <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2">
                                {cityOptions.filter((city) => !city.isHeader).map((city, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 items-center text-center bg-white border-[1px] shadow-lg cursor-pointer rounded-lg "
                                        onClick={() => { SetBodyMakerCity(city?.value ?? '') }}
                                    >
                                        <Image
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            src={`${city?.icon}`}
                                            alt={city.label}
                                            className="w-[120px] h-[120px] object-cover m-auto rounded-full mb-4"
                                        />

                                        <p className="text-[12px] ">{city.value}</p>

                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='border rounded-[16px] p-4 mb-3 flex flex-col  bg-white gap-2  relative'>
                            <h2 className='p-[17px 20px 0px]  text-xl font-bold '>
                                Tools & Services
                            </h2>
                            <ToolsCard data={toolsArray} />
                        </div>
                    </div>

                    <div className="w-full lg:w-4/12 xl:w-[25%] h-auto flex flex-col  sm:p-5 xl:p-0 mr-2 gap-2">
                        <VehicleListCard
                            title="Latest Trucks"
                            vehicleData={truckData}
                            viewAllText="View All Latest Trucks"

                        />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default BodyMarkerComponent;