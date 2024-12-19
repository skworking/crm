'use client'
import { Autocomplete, Box, MenuItem, TextField } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'
import { TbCornerUpRight } from 'react-icons/tb';
import { VscDebugBreakpointLog } from 'react-icons/vsc';
import VehicleListCard from '../../vehicalListCad';
import ToolsCard from '@/app/comman/toolsCard';
import { useLocation } from '@/app/context/locationContext';

// interface truckTools {
//     heading?: string,
//     details?: {
//         heading?: string,
//         image?: string
//     }[]
// }
// type TruckDetail = {
//     name: string;
//     address: string;
//     contact: string;
//     phone: string;
// };

// type PropsBody = {
//     data?: {
//         header:string;
//         page: string,
//         heading: string,
//         truckDealers: {
//             details: TruckDetail[]
//         },
//         truckTools: truckTools,
//     }
//     // city?: {
//     //     label: string,
//     //     path: string,
//     // }

// }
interface OptionType {
    value?: string;
    label: string;
    isHeader?: boolean;
}

const BodyMakerIn = () => {
    // console.log(city);

    const cityOptions: OptionType[] = [
        { label: 'Populer Cities', isHeader: true },
        { value: 'hydrabad', label: 'Hyderabad' },
        { value: 'new-delhi', label: 'New Delhi' },
        { value: 'surat', label: 'Surat' },
        { value: 'mumbai', label: 'Mumbai' },
        { value: 'bangalore', label: 'Bangalore' },
        { value: 'pune', label: 'pune' },
        { value: 'kolkata', label: 'Kolkata' },
    ];

    const [selectedCity, setSelectedCity] = useState<string | null>(null);
    const { handleSelectCitybypass } = useLocation();
    // useEffect(() => {
    // Get last city's label if available, or use a fallback
    // const defaultCity = city;

    // Find the corresponding `value` from `cityOptions` based on the label
    // const matchingOption = cityOptions.find(
    // (option) => option?.value?.toLowerCase() === city[city?.length - 1]?.label?.toLowerCase()
    // );

    // Set the default value (if match found)
    // if (matchingOption?.value) {
    //     setSelectedCity(matchingOption.value);
    // }
    // }, [city]);

    const dealershipData = [
        {
            name: "Wasan Trucking",
            address: "Wasan house, 5th floor , Plot No 4, swastik park , Sion - Trombay Road , Chembur 400071",
            phone: "+917021662912",
            contact: "Contact Dealer"
        },
        {
            name: "Wasan Trucking",
            address: "Unit -28, Ajay Mittal ind estate, Building no.1, Mittal estate, Marol Naka, Andheri (East),Mumbai 400059",
            contact: "Contact Dealer"
        },
        {
            name: "Wasan Trucking",
            address: "Shop no.24, BGTA Godavari Co. society, G1, MMRDA Wadala Truck terminal, Near Wadala RTO, Mumbai 400037",
            contact: "Contact Dealer"
        },
        {
            name: "Wasan Trucking",
            address: "Wasan House, 5th Floor, Plot No. 4, Swastik Park, Sion Trombay Road, Chembur 400071",
            contact: "Contact Dealer"
        },
        {
            name: "Wasan Trucking",
            address: "Wasan House, 5th Floor, Plot No. 4, Swastik Park, Sion Trombay Road, Chembur 400071",
            contact: "Contact Dealer"
        }
    ];
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


    const handleChange = (event: React.SyntheticEvent, newValue: OptionType | null) => {

        setSelectedCity(newValue?.value ?? '');
        if (!!newValue?.value) {
            handleSelectCitybypass(newValue)
        }
    }

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
    return (
        <div className='max-w-7xl m-auto lg:p-0 p-4 '>
            <h2 className='w-full pt-17px pr-20px pb-0 pl-20px text-[30px] font-medium '>{/* data?.heading */ 'Trucks Body Makers in india'}</h2>
            <div className='lg:inline-flex items-center grid  gap-5  mb-10 mt-3 '>
                <Autocomplete
                    options={cityOptions}
                    getOptionLabel={(option) => option.label}
                    value={cityOptions.find(option => option.value === selectedCity?.toString())}
                    onChange={handleChange}
                    renderInput={(params) => (
                        <TextField {...params} label="Search your city"
                        // variant="outlined"
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
                                {option.label}
                            </Box>
                        )
                    }
                    className='sm:w-[400px] w-full '

                />

                <div className='bg-[#d94025] text-center p-5 py-2 rounded sm:w-[500px] cursor-pointer'>
                    <span className=" text-white font-bold text-[22px]  rounded w-full ">
                        Search
                    </span>
                </div>
            </div>


            <div className="max-w-7xl m-auto  lg:flex border-b-2  rounded-b-md border-gray-100 gap-4 ">

                <div className="w-full lg:w-8/12 xl:w-[73.50%] m-auto  md:p-5 xl:p-0 " >
                    {/* {Array.isArray(data?.truckDealers?.details) && data?.truckDealers?.details.length > 0 && */}
                    <div className='border rounded-[16px]  mb-3 grid lg:grid-cols-2 grid-cols-1 bg-white  gap-2 lg:p-5 p-5 relative'>

                        {dealershipData?.map((dealer, index) => (
                            <div key={index} className='p-2'>
                                <div className="lg:w-full  bg-white border rounded-lg shadow-md text-center flex flex-col">
                                    <div className='p-2 '>
                                        <h2 className="sm:p-2 lg:text-[14px] text-[12px]  sm:font-semibold text-start text-[#23b5cf] ">{dealer.name}</h2>
                                    </div>
                                    <div className='w-full min-h-[120px] text-start'>
                                        <div className='flex sm:gap-2 px-5 justify-center'>
                                            <div className=''>
                                                <VscDebugBreakpointLog className='w-[23px] h-[23px]' />
                                                <TbCornerUpRight className='absolute lg:top-[75px] top-[55px] sm:top-[72px] text-white ml-[6px] w-[12px]' />
                                            </div>
                                            <p className="text-[rgba(36,39,44,.7)] flex-wrap ml-2 text-start text-[12px]  line-clamp-4 overflow-hidden ">{dealer.address}</p>

                                        </div>
                                        {dealer.phone &&
                                            <div className='flex px-5 sm:gap-2  '>
                                                <Image src="https://cdn-icons-png.flaticon.com/512/5400/5400769.png" width="20" height="20" className='fill-[#3ee]' alt="" />
                                                <p className="text-[rgba(36,39,44,.7)] flex-wrap ml-2 text-start text-[12px]  line-clamp-4 overflow-hidden ">{dealer.phone}</p>
                                            </div>
                                        }

                                    </div>
                                    <button className="text-white font-bold text-[12px] sm:text-[14px] sm:p-2 mb-2 border border-red-500 bg-[#d94025] rounded-md m-3 p-1 ">{dealer.contact}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* } */}


                    <div className='border rounded-[16px] p-4 mb-3 flex flex-col  bg-white gap-2  relative'>
                        <h2 className='p-[17px 20px 0px]  text-xl font-bold '>
                            Tools & Services
                        </h2>
                        <ToolsCard data={toolsArray} />
                    </div>

                </div>
                {/* secound section */}
                <div className="w-full lg:w-4/12 xl:w-[25%] h-auto flex flex-col  sm:p-5 xl:p-0 mr-2 gap-2" >

                    <VehicleListCard
                        title="Latest Trucks"
                        vehicleData={truckData}
                        viewAllText="View All Latest Trucks"

                    />
                </div>
            </div >
        </div>
    )
}

export default BodyMakerIn;