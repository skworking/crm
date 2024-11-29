'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { GiElectric } from 'react-icons/gi';
import { HiOutlineDownload } from 'react-icons/hi';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

interface Card {
    id?: number;
    name: string;
    price: string;
    offer?: string;
    imageUrl: string;
    isElectric?: boolean;
    url?: string;
    budget?: Array<{ label: string; value: string }>;
    variants?: Array<{ label: string; details: Array<{ label: string; value: string }> }>;
}
interface CardFormateProps {
    data: Card[]; // Accept data as a prop
}

const TruckCard: React.FC<CardFormateProps> = ({ data }) => {
    const [showVariants, setShowVariants] = useState<Record<number, boolean>>({});
    const [visibleTrucks, setVisibleTrucks] = useState(5);
    const handleShowMore = () => {
        setVisibleTrucks((prevCount) => prevCount + 5); // Show one more truck each click
    };
    const toggleVariants = (id: number) => {
        setShowVariants((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    return (
        <div className=' space-y-4'>
            {data.slice(0,visibleTrucks).map((item, index) => (
                    <>
                        <div key={index} className='border rounded-lg bg-white shadow-md'>
                            <div className="sm:flex border rounded-lg bg-white shadow-md">
                                <div className='relative sm:w-1/3'>

                                    <Image
                                        title={item.name}
                                        data-autofit="true"
                                        decoding="async"
                                        alt={item?.name}
                                        className="w-full md:h-full rounded-t-md object-cover object-top"
                                        src={item.imageUrl}
                                        loading="eager"
                                        width={580}
                                        height={300}
                                        quality={75}
                                    />

                                    {item.isElectric && <span className='absolute bottom-0 right-3 text-[10px] flex items-center text-white bg-[#32bea6] p-1 font-bold mb-1 rounded-lg'><GiElectric className='w-5 h-4 rotate-[-30deg]' /> Electric</span>}
                                </div>
                                <div className="flex flex-col justify-between flex-1 p-4">
                                    <div className='flex justify-between'>
                                        <h2 className="text-[14px] font-bold ">{item.name}</h2>
                                        <HiOutlineDownload className='w-10 h-5 text-red-500' />
                                    </div>
                                    <p className="text-[14px] font-bold">{item.price}</p>
                                    <div className="grid lg:grid-cols-4 grid-cols-3  gap-4 mt-4">

                                        {item.budget && item.budget.map((detail, index) => (
                                            <div key={index} className="text-start">
                                                <span className="block text-[12px] font-medium text-[rgba(36,39,44,.5)]">
                                                    {detail.label}
                                                </span>
                                                <span className="block text-[12px]  font-bold text-[rgba(36,39,44,.5)]">
                                                    {detail.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='grid grid-cols-2 gap-4'>

                                        <button className="mt-4 py-2 px-4  text-red-500 border border-red-500 rounded-lg">
                                            View All Offers
                                        </button>
                                        {item.price !== 'Price Coming Soon' &&
                                            <button className="mt-4 py-2 px-4 bg-red-500 text-white rounded-lg">
                                                Get On Road Price
                                            </button>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={() => toggleVariants(index)}
                                className=" text-sm p-2 bg-white w-full flex justify-between"
                            >
                                <div className="text-sm text-[rgba(36,39,44,.5)] w-full flex items-center ">
                                    <span className="flex items-center justify-center h-[20px] w-[30px] mr-2 bg-[rgba(36,39,44,.3)] text-white rounded-full">
                                        {item.variants?.length || 0}
                                    </span>
                                    Variants Matching Your Search Criteria
                                </div>
                                {showVariants[index] ? <IoMdArrowDropup className='text-lg text-[rgba(36,39,44,.5)]' /> : <IoMdArrowDropdown className='text-lg text-[rgba(36,39,44,.5)]' />}
                            </div>

                            {showVariants[index] && item.variants && (
                                <div className="mt-4">

                                    <div className="mt-2 space-y-2">
                                        {item.variants.map((variant, index) => (
                                            <div key={index} className="border rounded p-2">
                                                <p className="font-bold">{variant.label}</p>
                                                <div className="grid grid-cols-2 gap-4 mt-2">
                                                    {variant.details.map((detail, i) => (
                                                        <div key={i} className="text-start">
                                                            <span className="block text-[12px] font-medium text-[rgba(36,39,44,.5)]">
                                                                {detail.label}
                                                            </span>
                                                            <span className="block text-[12px] font-bold text-[rgba(36,39,44,.5)]">
                                                                {detail.value}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}


                        </div>

                        <>
                            {index === 2 && (
                                <div className="col-span-1 md:col-span-3 p-4 mt-2 bg-[#fff4df] rounded-lg shadow-md text-center">
                                    <h3 className="text-lg text-start font-bold mb-2">Trucks by Vehicle Segment</h3>
                                    <div className="flex space-x-5">
                                        <Link href="/scv" className="px-4 py-2 border-[rgba(247,93,52,.3)] border text-[14px] bg-white rounded">
                                            SCV
                                        </Link>
                                        <Link href="/lcv" className="px-4 py-2 border-[rgba(247,93,52,.3)] border text-[14px] bg-white rounded">
                                            LCV
                                        </Link>
                                        <Link href="/mhcv" className="px-4 py-2 border-[rgba(247,93,52,.3)] border text-[14px] bg-white rounded">
                                            MHCV
                                        </Link>
                                        <Link href="/3-wheelers" className="px-4 py-2 border-[rgba(247,93,52,.3)] border text-[14px] bg-white rounded">
                                            3 Wheelers
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </>
                    </>
                ))
            }

            {visibleTrucks < data.length && (
                <button onClick={handleShowMore} className="flex rounded-lg border-[#d94025] border w-1/3 justify-center items-center bg-white text-[#d94025] p-2 m-auto">
                    Load More Trucks
                </button>
            )}
        </div>
    );
};

export default TruckCard;
