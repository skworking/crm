'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {
    const [currentTab, setCurrentTab] = useState<'brand' | 'body' | 'budget' | 'fuel' | 'tonnage'>('brand');
    const handleTabChange = (tab: typeof currentTab) => {
        setCurrentTab(tab);
    }
    const renderDropdown = () => {
        switch (currentTab) {
            case 'tonnage':
                return (
                    <div className='bg-white p-3 flex'>
                        d
                        <button className="bg-[#d94025] text-white font-bold text-[20px] px-4 py-2 rounded w-full mt-4">Search</button>
                    </div>
                );
            default:
                return null;
        }
    }

    return (
        <div className='relative'>
            <div className='lg:h-[400px] h-[200px] relative w-full'>
                <Image src={'https://truckcdn.cardekho.com/pwa/img/newtruck_banner.jpg'} alt="" width={0}
                    height={0}
                    fill
                    sizes="100vw"
                    className="object-cover  w-full lg:h-full"
                />

                {/* Red Circle & Content */}
                <div className="absolute inset-0 flex items-center overflow-hidden ">
                    {/* Red Semi-Transparent Circle */}
                    <div className="relative lg:ml-[101px] flex items-center justify-center lg:w-[600px] lg:h-[600px] w-[350px] lg:bottom-20 h-[350px] bg-[#d94025] bg-opacity-[.8] rounded-full ">

                    </div>
                </div>

            </div>
            <div className='absolute inset-0 top-[32px] space-y-10 max-w-7xl m-auto'>


                <div className="  lg:text-[48px] text-2xl px-7 text-white font-bold left-0">
                    Want To Earn More?
                    <span className="hidden lg:block"> <br /> Check Out A New Truck</span>
                    <span className="lg:hidden inline-flex"> Check Out A New Truck</span>
                </div>
                <div className="text-[14px] w-fit  font-bold left-0">

                    <div className="flex border-b ">
                        {['brand', 'body', 'budget', 'fuel', 'tonnage'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab as typeof currentTab)}
                                // onClick={() => setCurrentTab(tab as typeof currentTab)}
                                className={`flex-1 text-center ${['brand', 'body', 'budget', 'fuel', 'tonnage'].length -1 && currentTab === tab ? 'mr-1':'ml-1'} w-[112px]  ${currentTab === tab ? 'bg-white p-2  text-black ' : 'text-white bg-[#d94025]'}`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                    {renderDropdown()}
                </div>


            </div>


        </div>
    )
}

export default Page;