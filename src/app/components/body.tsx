'use client'
import React, { useState } from 'react';
import {
    //  PiCarBatteryBold, PiEngine,
    PiGreaterThanLight, PiVideo
} from 'react-icons/pi';
import TruckSlider from './slidercard';
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
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
import { RiFileTextLine } from 'react-icons/ri';
import { CiImageOn } from 'react-icons/ci';
import Image from 'next/image';
import { useLocation } from '../context/locationContext';
import Modal from '../comman/modelSelect';
import { MdOutlineCreate } from 'react-icons/md';
import RatingCardsOnly from '../comman/ratingCardsOnly';
import ToggleTable from '../comman/toggleTable';

type TruckDetail = {
    logo: string;
    value: string;
    icon: string;
};

type TruckVariant = {
    variantName: string;
    gvw: string;
};
type AlterNative = {
    name: string;
    price: string;
    offer: string;
    imageUrl: string;
}
type DealerType = {
    name: string;
    address: string;
    contact: string;
    phone?: string;
}
type TruckCompetiters = {
    model: string;
    image: string;
    priceRange: string;
    comparison: string;
    offerLink: string;
    link: string;
}
type TruckReviews = {
    productName: string,
    reviewerName: string,
    reviewDate: string,
    rating: number,
    heading: string,
    reviewText: string,
    classes?: string
}
type TruckOptions = {
    model: string;
    image: string;
}
type TruckNews = {
    title: string;
    author: string;
    image: string;
    date: string;
    time: string;
    description: string;
    url: string
}
type TruckUses = {
    model: string;
    image: string;
}
type TruckVideo = {
    title: string,
    date: string,
    image: string,
    description: string,
    url: string
}

interface TabItem {
    title: string;
    content: string;
}

type TruckMultiTabDetails = {
    [key: string]: TabItem[];
};
type TruckPopuler = {
    name: string,
    priceRange: string,
    imageUrl: string
}
type TruckResearch = {
    title: string,
    imageUrl: string,
    url: string,
}

type TruckTable = {
    Model: string,
    Price: string,
}

type OverviewProps = {
    data: {
        heading?: string;
        truckDetails?: {
            url?: string;
            details?: TruckDetail[];
        },
        truckVariants?: {
            heading: string;
            description: string;
            details: TruckVariant[]
        },
        truckAlterNative?: {
            footerheading: string;
            url: string;
            details: AlterNative[]
        },
        truckDealers?: {
            details: DealerType[]
        },
        truckCompetitors?: {
            heading: string;
            details: TruckCompetiters[]
        },
        truckReviews?: {
            heading: string;
            maintenance: number;
            design: number;
            performance: number;
            details: TruckReviews[]
        },
        truckOptions?: {
            details: TruckOptions[]
        },
        truckNews?: {
            details: TruckNews[]
        },
        truckUses?: {
            details: TruckUses[]
        },
        truckVideo?: {
            heading: string;
            description: string;
            details: TruckVideo[],
        },
        truckMultitab?: {
            tabs: string[],
            details: TruckMultiTabDetails
        },
        populerTruck?: {
            heading: string;
            details: TruckPopuler[],
            url: string
        },
        ReseachTruck?: {
            heading: string;
            details: TruckResearch[]
        },
        ElectricTruck?: {
            heading: string;
            details: TruckPopuler[],
            url: string
        },
        TableToggle?: {
            heading: string;
            content: string[],
            title: string,
            columns: string[],
            details: TruckTable[]
        }


    };
};

const Body: React.FC<OverviewProps> = ({
    data
    //  = {
    //     heading: '',
    //     truckDetails: { url: '', details: [] },
    //     truckVariants: { heading: '', description: '', details: [] },
    //     truckAlterNative: { footerheading: '', url: '', details: [] },
    //     truckDealers: { details: [] },
    //     truckCompetitors: { heading: '', details: [] },
    //     truckReviews: { heading: '', performance: 0, design: 0, maintenance: 0, details: [] }
    // }
}) => {
    console.log("type exist data", data.truckDetails);


    const { location, handleSelectCitybypass } = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSelectCity = (city: { label: string; value: string }) => {

        handleSelectCitybypass(city)

    };


    const [showAllVariants, setShowAllVariants] = useState(false);
    const handleShowAllVariants = () => {
        setShowAllVariants(!showAllVariants);
    };

    const [isExpanded, setIsExpanded] = React.useState(false);
    const previewLength = 100; // Change this value as per your requirement
    const isLongDescription = data?.truckVariants?.description && data?.truckVariants?.description?.length > previewLength;
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
    // Calculate the average rating
    const totalReviews = data?.truckReviews?.details?.length ?? 0;

    const averageRating = totalReviews > 0
        ? Array.isArray(data?.truckReviews?.details) && data?.truckReviews?.details.reduce((sum, review) => sum + review.rating, 0) / totalReviews
        : 0;
    if (!data) {
        return <div>Loading page body...</div>;  // or any fallback UI
    }
    return (
        <div className="max-w-7xl m-auto  lg:flex border-b-2  rounded-b-md border-gray-100 gap-4 ">
            <div className="w-full lg:w-8/12 xl:w-[73.50%] m-auto  lg:ml-3 md:p-5 xl:p-0 " >
                {Array.isArray(data.TableToggle?.details) && data.TableToggle.details.length > 0 &&
                    <div className='border rounded-[16px] lg:p-5 p-5 mb-3 bg-white'>
                        <div className='inline-flex gap-3 items-center'>
                            <span className='text-[20px] font-semibold'>{`${data.TableToggle.heading}  ${location.label}`}</span>
                            <span className='text-sky-300 inline-flex cursor-pointer' onClick={openModal} ><MdOutlineCreate className="w-5 h-5" /> ChnageCity</span>
                        </div>
                        <ToggleTable
                            content={data.TableToggle.content}
                            title={data.TableToggle.title}
                            columns={data.TableToggle.columns}
                            data={data.TableToggle.details}
                        />
                    </div>
                }
                {Array.isArray(data?.truckDetails?.details) && data?.truckDetails?.details?.length > 0 &&
                    <div className='border rounded-[16px] lg:p-5 p-5 mb-3 bg-white'>
                        <h2 className='pt-17px pr-20px pb-0 pl-20px text-xl font-bold '>Key Specs of {data?.heading}</h2>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-2  pt-4 sm:gap-6 gap-4">
                            {data?.truckDetails?.details && data?.truckDetails?.details.map((item, index) => (
                                <div key={index} className="flex justify-between">
                                    <div className="inline-flex items-center gap-2 text-gray-400">
                                        {/* {detail.icon && detail.icon} */}
                                        <Image src={item.icon} alt='' width="20" height="20" />
                                        <span className=' text-[rgba(36,39,44,.7)]'>{item.logo}</span>
                                    </div>
                                    <span className='text-sm sm:font-bold text-[#24272c]'>{item.value}</span>
                                </div>
                            ))}
                        </div>
                        <Link href={data?.truckDetails?.url ?? '#'} className='inline-flex m-auto items-baseline  mt-2'>
                            <span className='mr-2 text-[#d94025] text-[14px] font-bold'>View All Spaces & Features</span>
                            <div className="relative w-5 h-5 mt-4 bg-[#d94025] rounded-full flex justify-center items-center" >
                                <FaAngleRight className="w-5 h-3 left-[-1px] mr-0  fill-white" />

                            </div>
                        </Link>
                    </div>
                }
                <div className=' border rounded-[16px]  mb-3 flex flex-col bg-white  gap-2'>
                    <h2 className='p-[17px 20px 0px] text-xl p-4 font-bold '>{data?.truckVariants?.heading}</h2>
                    {data.truckVariants?.description &&
                        <div className='relative w-full inline-flex justify-between items-start '>
                            <p className={`text-[rgba(36,39,44,.7)] lg:text-[14px] text-[12px] pl-4 sm:pb-0 sm:w-5/6 ${!isExpanded ? 'line-clamp-1  w-4/6 ' : 'pb-3'}`}
                            >
                                {isExpanded ? data.truckVariants?.description : `${data?.truckVariants?.description?.slice(0, previewLength)}${isLongDescription ? '...' : ''}`}
                            </p>
                            <span onClick={handleToggle} id="myBtn" className={`absolute right-3  w-20 text-end text-gray-500 underline ${isExpanded && 'bottom-[-10px]  absolute right-2'}`}>
                                {isExpanded ? 'Less' : 'Read more'}
                            </span>
                        </div>
                    }
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
                                {data?.truckVariants?.details && data?.truckVariants?.details?.slice(0, 2).map((variant, index) => (
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
                                    data?.truckVariants?.details?.slice(2).map((variant, index) => (
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
                        {Array.isArray(data?.truckVariants?.details) && data?.truckVariants?.details.length > 2 &&
                            <div className='inline-flex  items-baseline  m-2 px-5 cursor-pointer' onClick={handleShowAllVariants}>
                                <span className='mr-2 text-[#d94025] font-bold'>{showAllVariants ? 'View All Varients' : 'View Less Varients'}</span>
                                <div className="relative w-5 h-5 mt-4 bg-[#d94025] rounded-full flex justify-center items-center" >
                                    <FaAngleRight className="w-5 h-3 left-[-1px] mr-0  fill-white" />
                                </div>
                            </div>
                        }
                    </div>
                </div>
                {Array.isArray(data?.truckAlterNative?.details) && data?.truckAlterNative?.details.length > 0 &&
                    < div className='border rounded-[16px]  mb-3 flex flex-col p-5 gap-2 bg-white relative'>
                        <h2 className='p-[17px 20px 0px] text-xl font-bold'>
                            Explore {data?.heading && data?.heading} Alternatives
                        </h2>
                        <TruckSlider truckData={data?.truckAlterNative?.details} cards={3} />
                        <Link href={data?.truckAlterNative?.url ?? "#"} className='inline-flex  items-baseline'>
                            <span className='mr-2 text-[#d94025] text-[14px] font-bold'>View All Populer Trucks</span>
                            <div className="relative w-5 h-5 mt-4 bg-[#d94025] rounded-full flex justify-center items-center" >
                                <FaAngleRight className="w-5 h-3 left-[-1px] mr-0  fill-white" />
                            </div>
                        </Link>
                    </div>
                }

                {Array.isArray(data?.truckDealers?.details) && data?.truckDealers?.details.length > 0 &&
                    <div className='border rounded-[16px]  mb-3 flex flex-col bg-white  gap-2 lg:p-5 p-5 relative'>
                        <h2 className='p-[17px 20px 0px] text-xl font-bold '>
                            {data?.heading && data?.heading.split(' ')[0]} Trucks Dealers in
                            <button className=" ml-2 inline-flex gap-3 items-center">{location.label} <MdOutlineCreate className="" onClick={openModal} /></button>
                        </h2>
                        <DealerSlider truckDelers={data?.truckDealers?.details} cards={3} />
                    </div>
                }
                {Array.isArray(data?.truckCompetitors?.details) && data?.truckCompetitors?.details.length > 0 &&
                    <div className='border rounded-[16px]  mb-3 flex flex-col bg-white  gap-2 relative'>
                        <h2 className='p-[17px 20px 0px] text-xl p-4 font-bold '>
                            Compare {data.truckCompetitors.heading} with Competitors
                        </h2>
                        <CompareCard data={data?.truckCompetitors?.details} cards={3} />
                        <div className=' text-[10px] items-baseline py-1 rounded-b-lg bg-[#f1f1f1] px-8'>
                            Ex-showroom price in {location.label}
                        </div>
                    </div>
                }

                <div className='border rounded-[16px]  mb-3 flex flex-col  bg-white  relative'>
                    <h2 className='p-[17px 20px 0px] text-xl p-4 font-bold '>
                        {data?.truckReviews?.heading} User Reviews
                    </h2>
                    {totalReviews > 0 ? (
                        <>
                            <div className='lg:grid flex-col grid-cols-3'>
                                <div className='px-6 text-start '>
                                    <span className=' inline-flex space-x-3'>
                                        <Image src={'https://cdn-icons-png.flaticon.com/512/1828/1828884.png'} width={20} height={10} alt="" />
                                        <span className="ml-2 text-xl font-bold">{averageRating && averageRating.toFixed(1)} </span>
                                    </span>
                                    <div>Based on {data?.truckReviews?.details.length} User Reviews</div>
                                </div>
                                <div className='w-full justify-between lg:block hidden flex-col'>
                                    <div className="flex text-[rgba(36,39,44,.5)] items-center gap-3">
                                        <span className=" text-sm w-24">Performance</span>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-sky-500 h-full rounded-full"
                                                style={{ width: `${((data?.truckReviews?.performance ?? 0) / 5) * 100}%` }} // Full width for rating 5
                                            ></div>
                                        </div>
                                        <span className=" text-sm">{data?.truckReviews?.performance}</span>
                                    </div>
                                    <div className="flex text-[rgba(36,39,44,.5)] items-center gap-3">
                                        <span className=" text-sm w-24">maintenance</span>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-sky-500 h-full rounded-full"
                                                style={{ width: `${((data?.truckReviews?.maintenance ?? 0) / 5) * 100}%` }} // Full width for rating 5
                                            ></div>
                                        </div>
                                        <span className=" text-sm">{data?.truckReviews?.maintenance}</span>
                                    </div>
                                    <div className="flex text-[rgba(36,39,44,.5)] items-center gap-3">
                                        <span className=" text-sm w-24">design</span>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-sky-500 h-full rounded-full"
                                                style={{ width: `${((data?.truckReviews?.design ?? 0) / 5) * 100}%` }} // Full width for rating 5
                                            ></div>
                                        </div>
                                        <span className=" text-sm">{data?.truckReviews?.design}</span>
                                    </div>
                                </div>

                                <hr className='block lg:hidden' />
                                <div className='p-4 items-center inline-flex'>
                                    Rate Now
                                    <StarRating rating={rating} onChange={handleStarClick} />
                                </div>
                            </div>
                            <RatingCardsOnly data={data?.truckReviews?.details} slidesShow={3} />
                        </>
                    ) : (
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
                    )}
                </div>
                {Array.isArray(data?.truckOptions?.details) && data?.truckOptions?.details.length > 0 &&
                    <div className='border rounded-[16px]  mb-3 flex flex-col p-4 bg-white gap-2  relative'>
                        <h2 className='p-[17px 20px 0px] text-xl font-bold '>
                            Explore More Truck Options
                        </h2>
                        <BrandCard data={data?.truckOptions?.details} cards={3} />
                    </div>
                }

                {Array.isArray(data?.truckNews?.details) && data?.truckNews?.details.length > 0 &&
                    <div className='border rounded-[16px]  mb-3 flex flex-col p-4 bg-white gap-2 relative'>
                        <h2 className='p-[17px 20px 0px] text-xl font-bold '>
                            {data.heading} In News
                        </h2>
                        <NewsCard data={data?.truckNews?.details} cards={3} />
                        <Link href={'/en/news'} className='inline-flex items-baseline'>
                            <span className='mr-2 text-[#d94025] text-[14px] font-bold'>View All {data.heading} news</span>
                            <div className="relative w-5 h-5 mt-4 bg-[#d94025] rounded-full flex justify-center items-center" >
                                <FaAngleRight className="w-5 h-3 left-[-1px] mr-0  fill-white" />
                            </div>
                        </Link>
                    </div>
                }
                {Array.isArray(data?.truckUses?.details) && data?.truckUses?.details.length > 0 &&
                    <div className='border rounded-[16px]  mb-3 flex flex-col p-4 bg-white gap-2 relative'>
                        <h2 className='p-[17px 20px 0px] text-xl  font-bold '>
                            {data.heading} Usage
                        </h2>
                        <UseCard data={data?.truckUses?.details} cards={3} />
                    </div>
                }
                {Array.isArray(data?.truckVideo?.details) && data?.truckVideo?.details.length > 0 &&
                    <div className='border rounded-[16px]  mb-3 flex flex-col p-4 bg-white gap-2 relative'>
                        <h2 className='p-[17px 20px 0px] text-xl  font-bold '>
                            Latest {data.truckVideo.heading} Videos
                        </h2>
                        <p className='text-sm text-[rgba(36,39,44,.7)] '>
                            {data.truckVideo.description}
                        </p>
                        <VideoCard data={data.truckVideo.details} />
                    </div>
                }
                {Array.isArray(data?.truckMultitab?.tabs) && data?.truckMultitab?.tabs.length > 0 &&
                    <div className='border rounded-[16px]  mb-3 flex flex-col bg-white relative'>
                        <h2 className='text-xl p-4 font-bold '>
                            Frequently Asked Questions on {data?.heading}
                        </h2>
                        <MultiTabs tabs={data?.truckMultitab?.tabs} tabData={data?.truckMultitab?.details} defaultActiveTab={data?.truckMultitab?.tabs[0] ?? 'Price'} />
                    </div>
                }
            </div >

            {/* secound section */}
            < div className="w-full lg:w-4/12 xl:w-[25%] h-auto flex flex-col  sm:p-5 xl:p-0 mr-2 gap-2" >
                <img src='https://tpc.googlesyndication.com/simgad/17644868341984738745' className="brightness-100 lg:block hidden  w-full  object-fill h-[250px]" />
                {/* <Image src='https://tpc.googlesyndication.com/simgad/17644868341984738745' width={100} className=" lg:block hidden  w-full  object-contain h-[250px]" height={250}  alt='' /> */}

                {Array.isArray(data?.populerTruck?.details) && data?.populerTruck?.details.length > 0 &&
                    <VehicleListCard
                        title={data?.populerTruck?.heading}
                        vehicleData={data?.populerTruck?.details}
                        url={data?.populerTruck?.url}
                        viewAllText="View All Commercial Vehicles"
                        onViewAllClick={handleViewAll}
                    />
                }

                {Array.isArray(data?.ReseachTruck?.details) && data?.ReseachTruck?.details.length > 0 &&

                    <div className='border rounded-[16px]  mb-3 flex flex-col p-3 gap-2 relative bg-white'>
                        <h1 className='font-semibold text-[20px]'>{data?.ReseachTruck?.heading}</h1>
                        <ul className="space-y-4">
                            {data?.ReseachTruck?.details.map((info, index) => (
                                <li key={index} className="flex items-center space-x-4 text-[rgba(36,39,44,.7)]  justify-center">
                                    <Image src={info.imageUrl} width={20} height={20} alt='not found' />
                                    <Link
                                        href={info.url}
                                        title={info.title}
                                        className="w-full lg:w-[calc(100%-40px)] text-[15px]  justify-between flex flex-col gap-2"
                                        data-lt={info.url}
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
                }


                {Array.isArray(data?.ElectricTruck?.details) && data?.ElectricTruck?.details.length > 0 &&
                    <VehicleListCard
                        title={data?.ElectricTruck?.heading}
                        vehicleData={data?.ElectricTruck?.details}
                        url={data?.ElectricTruck?.url}
                        viewAllText="View All Electric Commercial Vehicles"
                        onViewAllClick={handleViewAll}
                    />
                }
            </div >
            {
                isModalOpen && (
                    <>
                        <Modal
                            isModalOpen={isModalOpen}
                            selectedOption={location.value}
                            options={[
                                { label: "Jaipur", value: "jaipur" },
                                { label: "New Delhi", value: "delhi" },
                                { label: "India", value: "india" }
                            ]} // Example data
                            closeModal={closeModal}
                            handleSelectCity={handleSelectCity}
                        />
                    </>
                )
            }
        </div >
    )
}

export default Body;