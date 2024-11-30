'use client'
import BrandList from '@/app/comman/brandList';
import Breadcrumbs from '@/app/comman/breadCrumbs';
import ViewAllButton from '@/app/comman/buttonView';
import CollabseContent from '@/app/comman/collapseComponent';
import { GenerateBreadcrumbs, generateCompareData } from '@/app/comman/commanFunctions';
import CompareSlider from '@/app/comman/compareSlider';
import ResearchList from '@/app/comman/researchList';
import ToggleTable from '@/app/comman/toggleTable';
import TruckCard from '@/app/comman/truckCards';
import VehicleListCard from '@/app/components/vehicalListCad';

import Image from 'next/image';
import React from 'react'
import { BsFuelPumpDiesel } from 'react-icons/bs';
import { PiPlugChargingLight } from 'react-icons/pi';
import { SlFire } from 'react-icons/sl';

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
    const content: JSX.Element[] = [
        <>
            There are 756 electric trucks on sale in India. Of these,
            SN Solar Energy Standard E-Rickshaw is the cheapest EV while the
            Propel 470 HEV is the most expensive EV truck in India. Most Popular electric vehicles
            are Tata Ace EV, Piaggio Ape E City, Mahindra Treo Yaari, Montra Electric Super Auto
            and YC Electric Yatri Super. Explore the list of <strong className='text-[#24272c] font-light'>best electric trucks</strong> with prices in India
            and Compare trucks to find the right <strong className='text-[#24272c] font-light'>commercial vehicle</strong> for you. These Electric Commercial Vehicles include
            <strong className='text-[#24272c] font-light'>Mini Trucks, Auto Rickshaw, E Rickshaw, Pickup Trucks</strong> and   <strong className='text-[#24272c] font-light'>3 Wheeler</strong>
        </>,
        <>
            Electrification of the automotive sector is on the rise worldwide, and commercial vehicles
            are not behind in this monumental transition. Like the rest of the world, the Indian commercial vehicle
            industry is also gearing up toward EVs. However, unlike any other country, the Indian trucking industry
            adoption of electrification is starting uniquely from the last-mile cargo and people carrier-mainly catered
            by the three-wheeler, also known as auto-rickshaws. So, the higher penetration of EVs
            is happening at the bottom of the vehicle segments, in the auto-rickshaw segment in India. The key reason
            is that an electric three-wheeler makes a compelling value proposition to the cost-conscious buyer, who
            can run this tiny electric vehicle within a shorter geographical area without much need for superior
            infrastructure. Moreover, the EVs are cheaper to operate, which means potentially higher earnings.
        </>,
        <>
            Targeting this entry-level electric three-wheeler market, Indian established OEMs and
            start-ups have already launched locally designed and developed electric three-wheelers for Indian operating
            conditions. Some of the top players include Piaggio, Mahindra, and Atul Auto, and the new
            companies that are aggressively expanding into these emerging vehicle segments are
            Euler Motors, Altigreen, and Omega Seiki among others. There are several electric
            three-wheelers available at different price points, ranges, and features in the passenger and cargo carrier segments.
        </>,
    ];
    const truckInfo = [
        {
            icon: <BsFuelPumpDiesel />,
            title: 'tata',
            link: '/truck- specs',
        },
        {
            icon: <PiPlugChargingLight />,
            title: 'Electric',
            link: '/maintenance-tips',
        },
        {
            icon: <img src='https://cdn-icons-png.flaticon.com/512/10466/10466005.png' className='h-7  w-7 rounded-t-md p-1 object-contain' />,
            title: 'CNG',
            link: '/maintenance-tips',
        },
        {
            icon: <SlFire />,
            title: 'CNG',
            link: '/maintenance-tips',
        },

    ];
    const brandInfo = [
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/tata.jpg',
            title: 'tata',
            link: '/truck- specs',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/mahindra.jpg',
            title: 'mahindra',
            link: '/truck- specs',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/altigreen.jpg',
            title: 'altigreen',
            link: '/truck- specs',
        },
        {
            title: 'piaggio',
            link: '/truck- specs',
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/piaggio.jpg',
        },
        {
            title: 'bajaj',
            link: '/truck- specs',
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/bajaj.jpg',
        },
        {
            title: 'sml-isuzu',
            link: '/truck- specs',
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/sml-isuzu.jpg',
        },

    ];
    const carData = [
        {
            name: "Mahindra Treo",
            priceRange: "₹2.34 - ₹2.36 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/mahindra/treo/mahindra-treo-67242.jpg",
        },
        {
            name: "Bajaj RE",
            priceRange: "₹2.34 - ₹2.36 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/bajaj/compact-4s/bajaj-compact-4s-48935.jpg",
        },
        {
            name: "Piaggio Ape E City",
            priceRange: "From ₹1.95 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/piaggio/ape-e-city/piaggio-ape-e-city.jpg",
        },
        {
            name: "TVS King Deluxe",
            priceRange: "₹1.20 - ₹1.35 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/tvs/deluxe/tvs-deluxe.jpg",
        },
        {
            name: "Bajaj Maxima Z",
            priceRange: "₹1.96 - ₹1.98 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/bajaj/maxima/bajaj-maxima-74420.jpg",
        },

    ];
    const rikshawData = [
        {
            name: "Mahindra Treo Yaari",
            priceRange: "₹1.79 - ₹2.04 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/mahindra/treo-yaari/mahindra-treo-yaari-62610.jpg",
        },
        {
            name: "YC Electric Yatri Super",
            priceRange: "From ₹1.69 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/yc-electric/yatri-super/yc-electric-yatri-super.jpg",
        },
        {
            name: "Mini Metro E Rickshaw",
            priceRange: "From ₹1.10 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/mini-metro/e-rickshaw/mini-metro-e-rickshaw.jpg",
        },
        {
            name: "Saarthi DLX",
            priceRange: "From ₹90,000.00*",
            imageUrl: "https://truckcdn.cardekho.com/in/saarthi/dlx/saarthi-dlx.jpg",
        },
        {
            name: "Atul Elite Plus",
            priceRange: "From ₹1.12 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/atul/elite/atul-elite-44395.jpg",
        },

    ];
    const truckCard = [
        {
            name: "Mahindra Treo",
            price: "Price Coming Soon",
            isElectric: true,
            budget: [
                { label: "Power", value: "8 kW" },
                { label: "GVW", value: "350" },
                { label: "Engine", value: "1496" },
                { label: "Fuel Type", value: "Electric" },
            ],
            imageUrl: "https://truckcdn.cardekho.com/in/mahindra/treo/mahindra-treo-67242.jpg",
            variants: [
                {
                    label: "3-Seater/HRT (Electric)",
                    details: [
                        { label: "Power", value: "8 kW" },
                        { label: "GVW", value: "350" },
                    ],
                },
                {
                    label: "3-Seater/SFT (Electric)",
                    details: [
                        { label: "Power", value: "8 kW" },
                        { label: "GVW", value: "350" },
                    ],
                },
            ],
        },
        {
            name: "Tata Ace EV",
            price: "From ₹8.72 Lakh*",
            isElectric: true,
            budget: [
                { label: "Power", value: "36 hp" },
                { label: "GVW", value: "1840" },
                { label: "Engine", value: "21.3" },
                { label: "Payload", value: "600" },
                { label: "Fuel Type", value: "Electric" },
            ],
            imageUrl: "https://truckcdn.cardekho.com/in/tata/ace-ev/tata-ace-ev.jpg", // Replace with actual image URL
            variants: [
                {
                    label: "2100/Electric (Electric)",
                    details: [
                        { label: "Power", value: "36 hp" },
                        { label: "GVW", value: "1840" },
                    ],
                },
            ],
        },
        {
            name: "Piaggio Ape E City",
            price: "From ₹1.95 Lakh*",
            isElectric: true,
            budget: [
                { label: "Power", value: "7.3 Hp" },
                { label: "GVW", value: "689" },
                { label: "Fuel Type", value: "Electric" },
            ],
            imageUrl: "https://truckcdn.cardekho.com/in/piaggio/ape-e-city/piaggio-ape-e-city.jpg", // Replace with actual image URL
            variants: [
                {
                    label: "3-Seater/1920/Electric/Swappable (Electric)",
                    details: [
                        { label: "Power", value: "7.3 Hp" },
                        { label: "GVW", value: "689" },
                    ],
                },
            ],
        },
        {
            name: "Mahindra Treo Yaari",
            price: "₹1.79 - ₹2.04 Lakh*",
            isElectric: true,
            budget: [
                { label: "Power", value: "2 hp" },
                { label: "GVW", value: "740" },
                { label: "Fuel Type", value: "Electric" },
            ],
            imageUrl: 'https://truckcdn.cardekho.com/in/mahindra/treo-yaari/mahindra-treo-yaari-62610.jpg',
            variants: [
                {
                    label: "4-Seater/SFT (Electric)",
                    details: [
                        { label: "Power", value: "2 hp" },
                        { label: "GVW", value: "740" },
                    ],
                },
                {
                    label: "4-Seater/HRT (Electric)",
                    details: [
                        { label: "Power", value: "2 hp" },
                        { label: "GVW", value: "740" },
                    ],
                },
            ],
        },
        {
            name: "Mahindra Treo Zor",
            price: "Price Coming Soon",
            isElectric: true,
            budget: [
                { label: "Power", value: "8 kW" },
                { label: "GVW", value: "995" },
                { label: "Payload", value: "550" },
                { label: "Fuel Type", value: "Electric" },
            ],
            imageUrl: 'https://truckcdn.cardekho.com/in/mahindra/treo-zor/mahindra-treo-zor-46219.jpg',
            variants: [
                {
                    label: "2216/Pickup (Electric)",
                    details: [
                        { label: "Power", value: "8 kW" },
                        { label: "GVW", value: "995" },
                    ],
                },
                {
                    label: "2216/Flat Bed (Electric)",
                    details: [
                        { label: "Power", value: "8 kW" },
                        { label: "GVW", value: "995" },
                    ],
                },
                {
                    label: "2216/Delivery Van (Electric)",
                    details: [
                        { label: "Power", value: "8 kW" },
                        { label: "GVW", value: "995" },
                    ],
                },
            ],
        },
        {
            name: "Montra Electric Super Auto",
            price: "₹3.02 - ₹3.50 Lakh*",
            isElectric: true,
            budget: [
                { label: "Power", value: "13 hp" },
                { label: "GVW", value: "770" },
                { label: "Fuel Type", value: "Electric" },
            ],
            imageUrl: 'https://truckcdn.cardekho.com/in/montra/super-auto/montra-super-auto.jpg',
            variants: [
                {
                    label: "ePX (Electric)",
                    details: [
                        { label: "Power", value: "13 hp" },
                        { label: "GVW", value: "770" },
                    ],
                },
                {
                    label: "ePV (Electric)",
                    details: [
                        { label: "Power", value: "13 hp" },
                        { label: "GVW", value: "749" },
                    ],
                },
                {
                    label: "ePV 2.0 (Electric)",
                    details: [
                        { label: "Power", value: "13 hp" },
                        { label: "GVW", value: "756" },
                    ],
                },
            ],
        },
        {
            name: "YC Electric Yatri Super",
            price: "From ₹1.69 Lakh*",
            isElectric: true,
            budget: [
                { label: "Power", value: "2 hp" },
                { label: "GVW", value: "693" },
                { label: "Fuel Type", value: "Electric" },
            ],
            imageUrl: 'https://truckcdn.cardekho.com/in/yc-electric/yatri-super/yc-electric-yatri-super.jpg',
            variants: [
                {
                    label: "4-Seater/Electric (Electric)",
                    details: [
                        { label: "Power", value: "2 hp" },
                        { label: "GVW", value: "693" },
                    ],
                },
            ],
        },
        {
            name: "Mahindra Treo Plus",
            price: "Price Coming Soon",
            isElectric: true,
            budget: [
                { label: "Power", value: "8 kW" },
                { label: "GVW", value: "720" },
                { label: "Fuel Type", value: "Electric" },
            ],
            imageUrl: 'https://truckcdn.cardekho.com/in/mahindra/treo-plus/mahindra-treo-plus-82328.jpg',
            variants: [
                {
                    label: "2073/SFT (Electric)",
                    details: [
                        { label: "Power", value: "8 kW" },
                        { label: "GVW", value: "720" },
                    ],
                },
                {
                    label: "2073/HRT (Electric)",
                    details: [
                        { label: "Power", value: "8 kW" },
                        { label: "GVW", value: "720" },
                    ],
                },
            ],
        },
        {
            name: "Mahindra Zor Grand",
            price: "Price Coming Soon",
            isElectric: true,
            budget: [
                { label: "Power", value: "12 kW" },
                { label: "GVW", value: "998" },
                { label: "Payload", value: "400" },
                { label: "Fuel Type", value: "Electric" }
            ],
            imageUrl: "https://truckcdn.cardekho.com/in/mahindra/treo-zor-grand/mahindra-treo-zor-grand-51184.jpg",
            variants: [
                {
                    label: "2200/Delivery Van (Electric)",
                    details: [
                        { label: "Power", value: "12 kW" },
                        { label: "GVW", value: "998" }
                    ]
                },
                {
                    label: "2200/Delivery Van Plus (Electric)",
                    details: [
                        { label: "Power", value: "12 kW" },
                        { label: "GVW", value: "998" }
                    ]
                },
                {
                    label: "2200/Pikup (Electric)",
                    details: [
                        { label: "Power", value: "12 kW" },
                        { label: "GVW", value: "998" }
                    ]
                }
            ]
        },
        {
            name: "Tata Magic EV",
            price: "From ₹5.00 Lakh*",
            isElectric: true,
            budget: [
                { label: "Power", value: "34 hp" },
                { label: "GVW", value: "2180" },
                { label: "Payload", value: "825" },
                { label: "Fuel Type", value: "Electric" }
            ],
            imageUrl: "https://truckcdn.cardekho.com/in/tata/magic-ev/tata-magic-ev-78339.jpg",
            variants: [
                {
                    label: "10 Seater/2100 (Electric)",
                    details: [
                        { label: "Power", value: "34 hp" },
                        { label: "GVW", value: "2180" }
                    ]
                }
            ]
        }


    ]
    const sliderItems = [
        {
            id: 1,
            name: "Force Urbania",
            price: "₹30.51 - ₹37.21 Lakh *",
            imageUrl:
                "https://truckcdn.cardekho.com/in/force/urbania/force-urbania.jpg",
        },
        {
            id: 2,
            name: "Tata Winger Cargo",
            price: "From ₹8.00 Lakh *",
            imageUrl:
                "https://truckcdn.cardekho.com/in/tata/winger-cargo/tata-winger-cargo-67281.jpg",
        },
        {
            id: 3,
            name: "Ashok Leyland Dost +",
            price: "₹7.75 - ₹8.25 Lakh *",
            imageUrl:
                "https://truckcdn.cardekho.com/in/ashok-leyland/dost/ashok-leyland-dost-59041.jpg",
        },
        {
            id: 4,
            name: "Ashok Leyland Dost Strong Comparison",
            price: "₹7.49 - ₹7.95 Lakh*",
            offer: "Get On Road Price",
            imageUrl:
                "https://truckcdn.cardekho.com/in/ashok-leyland/dost-strong/ashok-leyland-dost-strong-33132.jpg",
        },
        {
            id: 5,
            name: "Isuzu D-MAX",
            price: "₹8.32 - ₹8.36 Lakh*",
            offer: "Get On Road Price",
            imageUrl:
                "https://truckcdn.cardekho.com/in/isuzu/d-max/isuzu-d-max-48049.jpg",
        },
        {
            id: 6,
            name: "Tata Yodha Pickup Comparison",
            price: "₹8.51 - ₹10.71 Lakh*",
            offer: "Get On Road Price",
            imageUrl:
                "https://truckcdn.cardekho.com/in/tata/yodha/tata-yodha-46306.jpg",
        },
        {
            id: 7,
            name: "Mahindra Bolero Maxx Pik-Up HD",
            price: "₹9.79 - ₹9.85 Lakh *",
            offer: "Get On Road Price",
            imageUrl:
                "https://truckcdn.cardekho.com/in/mahindra/bolero-maxx-pik-up-hd/mahindra-bolero-maxx-pik-up-hd-96009.jpg",
        },
        {
            id: 8,
            name: "Tata Yodha 2.0",
            price: "₹9.99 - ₹10.00 Lakh *",
            offer: "Get On Road Price",
            imageUrl:
                "https://truckcdn.cardekho.com/in/tata/yodha-2-0/tata-yodha-2-0.jpg",
        },
    ]
    const compareData = generateCompareData(sliderItems);

    const faqData = [
        { title: 'Latest Electric Commercial Vehicles', content: 'Altigreen NeEV TEZ, OSM Stream City, Tata Ace EV, Piaggio Ape E-City, EKA E9, Atul Auto Elite Plus, Kinetic Green Safar Smart, Mahindra Zor Grand, Switch EiV 12, and Euler HiLoad EV 2023 are some of the latest electric commercial vehicles in India.' },
        { title: 'Best Electric Commercial Vehicles', content: 'Altigreen NeEV TEZ, Mahindra Zor Grand, Mahindra Treo, Kinetic Green Safar Smart, OSM Rage Plus, and Tata Ace EV are some of India\'s best electric commercial vehicles.' },
        { title: 'Top Commercial EV Brands in India', content: 'Altigreen, Mahindra Electric, Omega Seiki Mobility, Tata Motors, Piaggio, Switch Mobility, Kinetic Green, and Atul Auto are the top commercial EV brands in India.' },
        { title: 'Electric Vehicles Under ₹5 Lakh', content: 'Altigreen NeEV TEZ, Mahindra Treo, Kinetic Safar Shakti, OSM Rage Plus, Mahindra E-Alfa Mini, and Mahindra Zor Grand are electric vehicles under ₹5 lakh.' },
        { title: 'Long-Range Electric Three-Wheelers', content: 'Altigreen NeEV TEZ, OSM Rage Plus, Mahindra Treo, and OSM Stream are long-range electric three-wheelers in India.' }
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

                <div className="lg:flex border-b-2  rounded-b-md border-gray-100 gap-4 ">
                    <div className="w-full lg:w-8/12 xl:w-[73.50%] space-y-4 mb-4 md:p-5 xl:p-0 " >
                        <h2 className='p-[17px 20px 0px] text-xl font-bold mb-5 '>
                            Electric Commercial Vehicles
                        </h2>
                        <div className='border rounded-[16px] lg:p-5 p-5 mb-3 bg-white'>
                            <ToggleTable
                                content={content}
                                title="Top 10 Electric Trucks in 2024 With Price list"
                                columns={["Model", "Price"]}
                                data={trucksData}
                            />
                        </div>
                        <TruckCard data={truckCard} />
                        <div className='border rounded-[16px]   mb-3 bg-white'>

                            <CompareSlider
                                data={compareData}
                                heading={' Popular Electric Vehicles Comparisons'}
                                setSlide={2}
                            />
                            <div className='pb-4 pl-4'>

                                <ViewAllButton heading="Trucks Comparisions" link="/compare" />
                            </div>
                        </div>
                        <div className='border rounded-[16px] p-4  flex flex-col  bg-white gap-2  relative'>
                            <h2 className='p-[17px 20px 0px]  text-xl font-bold '>
                                Frequently Asked Question on Electric Vehicles
                            </h2>
                            <CollabseContent tabContent={faqData} />
                        </div>
                    </div>

                    <div className="w-full lg:w-4/12 xl:w-[25%] h-auto flex flex-col  sm:p-5 xl:p-0 mr-2 gap-2">
                        <ResearchList title="Explore Fuel Types" data={truckInfo} />

                        <BrandList title="Popular Electric Vehicle Brands" data={brandInfo} />
                        <img alt='not found' src='https://tpc.googlesyndication.com/simgad/17644868341984738745' className="brightness-100 lg:block hidden  w-full  object-fill h-[250px]" />

                        <VehicleListCard
                            title="Best Auto Rickshaw"
                            vehicleData={carData}
                            viewAllText="View All Electric Commercial Vehicles"
                        // onViewAllClick={handleViewAll}
                        />

                        <VehicleListCard
                            title="Best E-Rickshaw"
                            vehicleData={rikshawData}
                            viewAllText="View All Best E Rikshaw"
                        // onViewAllClick={handleViewAll}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ElectricTrucks;