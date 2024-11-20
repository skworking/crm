'use client'
import React, { useState } from 'react';
import { PiCarBatteryBold, PiEngine, PiGreaterThanLight, PiVideo } from 'react-icons/pi';
import TruckSlider from './slidercard';
import Chasis from '@/assets/icons/chassis.svg'
import Tire from '@/assets/icons/tyre-number.svg'
import { FaAngleRight } from 'react-icons/fa'; // Import the necessary icons
import Link from 'next/link';
import VehicleListCard from './vehicalListCad';
import DealerSlider from './dealercard';
import CompareCard from './comparecard';
import StarRating from './StarRating';
import BrandCard from './brandcard';
import NewsCard from './newscard';
import UseCard from './usagcard';
import VideoCard from './videocard';
import MultiTabs from './tabbar';
import { ImPower } from 'react-icons/im';
import { GiFuelTank } from 'react-icons/gi';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
import { RiFileTextLine } from 'react-icons/ri';
import { CiImageOn } from 'react-icons/ci';
const Body = () => {

    const truckDetails = [
        {
            logo: 'Battery Capacity',
            value: '120 Ah',
            icon: <PiCarBatteryBold className="w-5 h-5" /> // Example icon
        },
        {
            logo: 'Number of Tyre',
            value: '10',
            icon: <Tire className="w-5 h-5" />
        },
        {
            logo: 'Power',
            value: '250 hp',
            icon: <ImPower className="w-5 h-5" />
        },
        {
            logo: 'Engine',
            value: '6700 cc',
            icon: <PiEngine className="w-5 h-5" />
        },
        {
            logo: 'Fuel Tank',
            value: '380/355 Ltr',
            icon: <GiFuelTank className="w-5 h-5" />
        },
        {
            logo: 'Chassis Type',
            value: 'Chassis with Cabin',
            icon: <Chasis className="w-5 h-5 object-contain" />

        },
    ];
    const truckVariants = [
        {
            variantName: "BharatBenz 2826R 5175/CBC/Sleeper Tanker",
            gvw: "Get On Road Price",
        },
        {
            variantName: "BharatBenz 2826R 5775/CBC/Sleeper",
            gvw: "Get On Road Price",
        },
        {
            variantName: "BharatBenz 2826R 6375/CBC/Sleeper",
            gvw: "Get On Road Price",
        },
    ];
    const [showAllVariants, setShowAllVariants] = useState(false);
    const handleShowAllVariants = () => {
        setShowAllVariants(!showAllVariants);
    };

    const [isExpanded, setIsExpanded] = React.useState(false);
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const truckInfo = [
        {
            title: "2826R On Road Price",
            icon: <HiOutlineCurrencyRupee className='w-[30px] h-[35px] text-[20px]' />,
            link: "/en/trucks/bharat-benz/2826-r/price-in-mumbai",
        },
        {
            title: "2826R Specifications",
            icon: <RiFileTextLine className='w-[30px] h-[35px] text-[20px]' />,
            link: "/en/trucks/bharat-benz/2826-r/specifications",
        },
        {
            title: "2826R Images",
            icon: <CiImageOn className='w-[30px] h-[35px] text-[20px]' />,
            link: "/en/trucks/bharat-benz/2826-r/images",
        },
        {
            title: "2826R Videos",
            icon: <PiVideo className='w-[30px] h-[35px] text-[20px]' />,
            link: "/en/trucks/bharat-benz/2826-r/videos",
        },
    ];

    const truckData = [
        {
            name: "BharatBenz 1917R",
            priceRange: "₹28.35 - ₹30.61 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/3528c-bs6/bharat-benz-3528c-bs6-64528.jpg",
        },
        {
            name: "BharatBenz 1917R",
            priceRange: "₹28.35 - ₹30.61 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/1917r/bharat-benz-1917r.jpg",
        },
        {
            name: "BharatBenz 3528C",
            priceRange: "₹52.97 - ₹60.60 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/1217c/bharat-benz-1217c-60162.jpg",
        },
        {
            name: "BharatBenz 3528C",
            priceRange: "₹28.30 - ₹28.88 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/4828r/bharat-benz-4828r-41094.jpg",
        },
        {
            name: "BharatBenz 4228C",
            priceRange: "₹47.70 - ₹48.97 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/4228r/bharat-benz-4228r-14182.jpg",
        },
    ];

    // Car data array
    const carData = [
        {
            name: "Mahindra Treo",
            priceRange: "₹3.6 - ₹3.37 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/mahindra/treo/mahindra-treo-67242.jpg",
        },
        {
            name: "Tata Ace EV",
            priceRange: "₹8.2 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/tata/ace-ev/tata-ace-ev.jpg",
        },
        {
            name: "Maruti Suzuki Swift",
            priceRange: "₹5.17 - ₹8.41 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/mahindra/treo-yaari/mahindra-treo-yaari-62610.jpg",
        },
        {
            name: "Mahindra Treo Zor",
            priceRange: "₹3.13 - ₹3.48 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/mahindra/treo-zor/mahindra-treo-zor-46219.jpg",
        },
        
    ];
    const handleViewAll = () => {
        console.log("View all vehicles clicked");
        // You can implement navigation or any other logic here
    };


    const [rating, setRating] = useState(0)
    const handleStarClick = (rating: React.SetStateAction<number>) => {
        // Example of handling the click: you can replace this with a navigation or link logic
        console.log(`Star clicked: ${rating}`);
        setRating(rating)

    };
    return (
        <div className="max-w-7xl m-auto  lg:flex border-b-2  rounded-b-md border-gray-100 gap-4 ">
            <div className="w-full lg:w-8/12 xl:w-[73.50%] m-auto  lg:ml-3 md:p-5 xl:p-0 " >
                <div className='border rounded-[16px] lg:p-5 p-5 mb-3 bg-white'>
                    <h2 className='pt-17px pr-20px pb-0 pl-20px text-xl font-bold '>Key Specs of BharatBenz 2826R</h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-2  pt-4 sm:gap-6 gap-4">
                        {truckDetails.map((detail, index) => (
                            <div key={index} className="flex justify-between">
                                <div className="inline-flex items-center gap-2 text-gray-400">
                                    {detail.icon && detail.icon}
                                    <span className=' text-[rgba(36,39,44,.7)]'>{detail.logo}</span>
                                </div>
                                <span className='text-sm sm:font-bold text-[#24272c]'>{detail.value}</span>
                            </div>
                        ))}
                    </div>
                    <div className='inline-flex m-auto items-baseline  mt-2'>
                        <span className='mr-2 text-[#d94025] text-[14px] font-bold'>View All Spaces & Features</span>
                        <div className="relative w-5 h-5 mt-4 bg-[#d94025] rounded-full flex justify-center items-center" >
                            <FaAngleRight className="w-5 h-3 left-[-1px] mr-0  fill-white" />

                        </div>
                    </div>
                </div>

                <div className=' border rounded-[16px]  mb-3 flex flex-col bg-white  gap-2'>
                    <h2 className='p-[17px 20px 0px] text-xl p-4 font-bold '>BharatBenz 2826R Price List (Variants)</h2>
                    <div className='relative w-full inline-flex justify-between items-start '>
                        <p className={`text-[rgba(36,39,44,.7)] lg:text-[14px] text-[12px] pl-4 sm:pb-0 sm:w-5/6 ${!isExpanded ? 'line-clamp-1  w-4/6 ' : 'pb-3'}`}
                        >BharatBenz 2826R is offered in 5 variants - the base model of 2826R is 5175/CBC/Sleeper and the top variant is 5175/CBC
                            {!isExpanded && <span id="dots">...</span>}
                            {isExpanded && (<span id="more">/Sleeper which come with Kgs.</span>)}
                        </p>
                        <span onClick={handleToggle} id="myBtn" className={`absolute right-3  w-20 text-end text-gray-500 underline ${isExpanded && 'bottom-[-10px]  absolute right-2'}`}>
                            {isExpanded ? 'Less' : 'Read more'}
                        </span>
                    </div>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs w-full  text-gray-400 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className=''>
                                    <th scope="col" className="px-6 py-3 text-[rgba(36,39,44,.7)]">
                                        Variants
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[rgba(36,39,44,.7)]">
                                        GVW
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {truckVariants.slice(0, 2).map((variant, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 items-center ">
                                        <td className=" pl-6 sm:px-6 py-4 lg:font-medium lg:text-[17px] text-gray-900 dark:text-white">
                                            {variant.variantName}
                                        </td>
                                        <td className=" sm:px-6 py-4 ">
                                            <button className="text-[#d94025] text-[11px]  sm:text-[14px] lg:border p-2 lg:rounded-md lg:border-[#d94025]">
                                                {variant.gvw}
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                {showAllVariants &&
                                    truckVariants.slice(2).map((variant, index) => (
                                        <tr key={index + 3} className="bg-white border-b dark:bg-gray-700 dark:border-gray-700 items-center ">
                                            <td className="px-6 py-4 lg:font-medium lg:text-[17px] text-gray-900 dark:text-white ">
                                                {variant.variantName}
                                            </td>
                                            <td className="px-6 py-4 ">
                                                <button className="text-[#d94025]  text-[11px] sm:text-[14px] lg:border p-2 lg:rounded-md lg:border-[#d94025]">
                                                    {variant.gvw}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}

                            </tbody>
                        </table>
                        <div className='inline-flex  items-baseline  m-2 px-5 cursor-pointer' onClick={handleShowAllVariants}>
                            <span className='mr-2 text-[#d94025] font-bold'>{showAllVariants ? 'View All Varients' : 'View Less Varients'}</span>
                            <div className="relative w-5 h-5 mt-4 bg-[#d94025] rounded-full flex justify-center items-center" >
                                <FaAngleRight className="w-5 h-3 left-[-1px] mr-0  fill-white" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border rounded-[16px]  mb-3 flex flex-col p-5 gap-2 bg-white relative'>
                    <h2 className='p-[17px 20px 0px] text-xl font-bold'>
                        Explore BharatBenz 2826R Alternatives
                    </h2>
                    <TruckSlider />
                    <div className='inline-flex  items-baseline'>
                        <span className='mr-2 text-[#d94025] text-[14px] font-bold'>View All Populer Trucks</span>
                        <div className="relative w-5 h-5 mt-4 bg-[#d94025] rounded-full flex justify-center items-center" >
                            <FaAngleRight className="w-5 h-3 left-[-1px] mr-0  fill-white" />
                        </div>
                    </div>
                </div>

                <div className='border rounded-[16px]  mb-3 flex flex-col bg-white  gap-2 lg:p-5 p-5 relative'>
                    <h2 className='p-[17px 20px 0px] text-xl font-bold '>
                        BharatBenz Trucks Dealers in Mumbai
                    </h2>
                    <DealerSlider />
                    <div className='inline-flex  items-baseline'>
                        <span className='mr-2 text-[#d94025] text-[14px] font-bold'>View All Populer Trucks</span>
                        <div className="relative w-5 h-5 mt-4 bg-[#d94025] rounded-full flex justify-center items-center" >
                            <FaAngleRight className="w-5 h-3 left-[-1px] mr-0  fill-white" />
                        </div>
                    </div>
                </div>

                <div className='border rounded-[16px]  mb-3 flex flex-col bg-white  gap-2 relative'>
                    <h2 className='p-[17px 20px 0px] text-xl p-4 font-bold '>
                        Compare 2826R with Competitors
                    </h2>
                    <CompareCard />
                    <div className=' text-[10px] items-baseline py-1 rounded-b-lg bg-[#f1f1f1] px-8'>
                        Ex-showroom price in Mumbai
                    </div>
                </div>
                <div className='border rounded-[16px]  mb-3 flex flex-col  bg-white gap-2 relative'>
                    <h2 className='p-[17px 20px 0px] text-xl p-4  font-bold '>
                        2826R User Reviews
                    </h2>
                    <div className='lg:flex gap-3 text-[12px]'>
                        <div className='p-4'>
                            0 Reviews, Be the first one to rate
                        </div>
                        <hr className='lg:hidden sm:w-[98%] w-full m-auto' />
                        <div className='p-4 inline-flex items-center'>
                            Rate Now
                            <StarRating rating={rating} onChange={handleStarClick} />
                        </div>
                    </div>
                </div>
                <div className='border rounded-[16px]  mb-3 flex flex-col p-4 bg-white gap-2  relative'>
                    <h2 className='p-[17px 20px 0px] text-xl font-bold '>
                        Explore More Truck Options
                    </h2>
                    <BrandCard />
                </div>
                <div className='border rounded-[16px]  mb-3 flex flex-col p-4 bg-white gap-2 relative'>
                    <h2 className='p-[17px 20px 0px] text-xl font-bold '>
                        BharatBenz 2826R In News
                    </h2>
                    <NewsCard />
                    <div className='inline-flex items-baseline'>
                        <span className='mr-2 text-[#d94025] text-[14px] font-bold'>View All BharatBenz 2826R news</span>
                        <div className="relative w-5 h-5 mt-4 bg-[#d94025] rounded-full flex justify-center items-center" >
                            <FaAngleRight className="w-5 h-3 left-[-1px] mr-0  fill-white" />
                        </div>
                    </div>
                </div>
                <div className='border rounded-[16px]  mb-3 flex flex-col p-4 bg-white gap-2 relative'>
                    <h2 className='p-[17px 20px 0px] text-xl  font-bold '>
                        BharatBenz 2826R Usage
                    </h2>
                    <UseCard />
                </div>
                <div className='border rounded-[16px]  mb-3 flex flex-col p-4 bg-white gap-2 relative'>
                    <h2 className='p-[17px 20px 0px] text-xl  font-bold '>
                        Latest 2826R Videos
                    </h2>
                    <p className='text-sm text-[rgba(36,39,44,.7)] '>
                        2826R has video of its detailed review, specs, features explained & more. Watch our Latest video of 2826R to know price, safety features, type of application & more
                    </p>
                    <VideoCard />
                </div>
                <div className='border rounded-[16px]  mb-3 flex flex-col bg-white relative'>
                    <h2 className='text-xl p-4 font-bold '>
                        Frequently Asked Questions on BharatBenz 2826R
                    </h2>
                    <MultiTabs />
                </div>
            </div>
            {/* secound section */}
            <div className="w-full lg:w-4/12 xl:w-[25%] h-auto flex flex-col  sm:p-5 xl:p-0 mr-2 gap-2">
                <img src='https://tpc.googlesyndication.com/simgad/17644868341984738745' className="brightness-100 lg:block hidden  w-full  object-fill h-[250px]" />
                {/* <Image src='https://tpc.googlesyndication.com/simgad/17644868341984738745' width={100} className=" lg:block hidden  w-full  object-contain h-[250px]" height={250}  alt='' /> */}

                <VehicleListCard
                    title="Popular BharatBenz Trucks"
                    vehicleData={truckData}
                    viewAllText="View All Commercial Vehicles"
                    onViewAllClick={handleViewAll}
                />

                <div className='border rounded-[16px]  mb-3 flex flex-col p-3 gap-2 relative bg-white'>
                    <h1 className=' font-bold text-xl'>Further Research</h1>
                    <ul className="space-y-4">
                        {truckInfo.map((info, index) => (
                            <li key={index} className="flex items-center space-x-4 text-[rgba(36,39,44,.7)]  justify-center">
                                <span className="text-[rgba(36,39,44,.7)] w-[40px]  text-[20px] ">{info.icon}</span> {/* Icon */}
                                <Link
                                    href={info.link}
                                    title={info.title}
                                    className="w-full lg:w-[calc(100%-40px)] text-[15px]  justify-between flex flex-col gap-2"
                                    data-lt={info.link}
                                >
                                    <div className='flex items-center justify-between mr-5 ' >
                                        {info.title}
                                        <span> <PiGreaterThanLight className="  mr-0 " /></span>
                                    </div>

                                    {index < truckInfo?.length - 1 && <hr className='w-full m-auto' />}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


              

                <VehicleListCard
                    title="Popular Electric Vehicles"
                    vehicleData={carData}
                    viewAllText="View All Electric Commercial Vehicles"
                    onViewAllClick={handleViewAll}
                />
            </div>
        </div>
    )
}

export default Body;