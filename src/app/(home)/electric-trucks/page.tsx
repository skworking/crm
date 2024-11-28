'use client'
import Breadcrumbs from '@/app/comman/breadCrumbs';
import { GenerateBreadcrumbs } from '@/app/comman/commanFunctions';
import ToggleTable from '@/app/comman/toggleTable';

import Image from 'next/image';
import React from 'react'

const ElectricTrucks = () => {
    const breadcrumbItems = GenerateBreadcrumbs();
    const trucksData = [
        { Model: "Tata Ace EV", Price: "From ₹8.72 Lakh" },
        { Model: "Piaggio Ape E City", Price: "From ₹1.95 Lakh" },
        { Model: "Mahindra Treo Yaari", Price: "₹1.79 - ₹2.04 Lakh" },
        { Model: "Montra Electric Super Auto", Price: "₹3.02 - ₹3.50 Lakh" },
        { Model: "YC Electric Yatri Super", Price: "From ₹1.69 Lakh" },
        { Model: "Tata Magic EV", Price: "From ₹5.00 Lakh" },
        { Model: "Mini Metro E Rickshaw", Price: "From ₹1.10 Lakh" },
        { Model: "Euler Motors HiLoad EV", Price: "₹3.94 - ₹4.20 Lakh" },
        { Model: "Piaggio Ape E Xtra FX", Price: "From ₹3.12 Lakh" },
        { Model: "Bajaj Maxima XL Cargo E-TEC 12.0", Price: "From ₹4.68 Lakh" }
    ];
    return (
        <div className='relative'>
            <div className='lg:h-[400px] h-[200px] relative w-full'>
                <Image src={'https://truckcdn.cardekho.com/pwa/img/electric-banner.jpg'} alt="" width={0}
                    height={0}
                    fill
                    sizes="100vw"
                    className="object-cover  w-full lg:h-full"
                />

                {/* Red Circle & Content */}
                <div className="absolute max-w-7xl m-auto inset-0 flex items-center overflow-hidden ">
                    {/* Red Semi-Transparent Circle */}
                    <div className="relative  lg:ml-[50px] flex items-center justify-center lg:w-[600px] lg:h-[600px] w-[350px] lg:bottom-20 h-[350px] bg-[#d94025] bg-opacity-[.95] mix-blend-multiply rounded-full ">

                    </div>
                </div>

            </div>
            <div className='absolute inset-y-20 items-center  space-y-10 max-w-3xl p-4 m-auto'>
                <div className="flex max-w-4xl lg:text-[47px] text-[20px] lg:ml-[57px]   px-7 text-white font-bold left-0">
                    Electric Commercial Vehicles
                </div>
            </div>
            <Image
                width={0}
                height={10}
                sizes="100vw"
                className="object-none  w-full "
                src={'https://tpc.googlesyndication.com/simgad/2186141005922165001'} alt='' />
            <div className='max-w-7xl m-auto relative'>

                <Breadcrumbs items={breadcrumbItems} />

                <h2 className='p-[17px 20px 0px] text-xl font-bold mb-5 '>
                    Electric Commercial Vehicles
                </h2>
                <div className='border rounded-[16px]  mb-3 flex flex-col p-4 bg-white gap-2  '>

                    <ToggleTable
                        content={[
                            "Paragraph 1: There are 756 electric trucks on sale in India. Of these, SN Solar Energy Standard E-Rickshaw is the cheapest EV while the Propel 470 HEV is the most expensive EV truck in India. Most Popular electric vehicles are Tata Ace EV, Piaggio Ape E City, Mahindra Treo Yaari, Montra Electric Super Auto and YC Electric Yatri Super. Explore the list of best electric trucks with prices in India and Compare trucks to find the right commercial vehicle for you.These Electric Commercial Vehicles include Mini Trucks, Auto Rickshaw, E Rickshaw, Pickup Trucks and 3 Wheeler",
                            "Paragraph 2: Electrification of the automotive sector is on the rise worldwide, and commercial vehicles aren't behind in this monumental transition. Like the rest of the world, the Indian commercial vehicle industry is also gearing up toward EVs. However, unlike any other country, the Indian trucking industry's adoption of electrification is starting uniquely from the last-mile cargo and people carrier-mainly catered by the three-wheeler, also known as auto-rickshaws. So, the higher penetration of EVs is happening at the bottom of the vehicle segments, in the auto-rickshaw segment in India, and the key The reason, an electric three-wheeler makes a compelling value proposition to the cost-conscious buyer- who can run this tiny electric vehicle within a shorter geographical area without much need for superior infrastructure. Moreover, the EVs are cheaper to operate which means potentially higher earnings.",
                            "Paragraph 3: Targeting this entry-level electric three-wheeler market, Indian established OEMs and start-ups have already launched locally designed and developed electric three-wheelers for Indian operating conditions. Some of the top players include Piaggio, Mahindra, and Atul Auto, and the new companies that are aggressively expanding into these emerging vehicle segments are Euler Motors, Altigreen, and Omega Seiki among others. There are several electric three-wheelers available at different price points, ranges and features in the passenger and cargo carrier segments.",
                        ]}
                        title="New Trucks Price In India"
                        columns={["Model", "Price"]}
                        data={trucksData}
                    />

                </div>
            </div>
        </div>
    )
}

export default ElectricTrucks;