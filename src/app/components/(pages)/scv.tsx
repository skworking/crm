import Image from 'next/image';
import React from 'react'
import TopBanner from '../(Banners)/topbanner';
import Breadcrumbs from '@/app/comman/breadCrumbs';
import { GenerateBreadcrumbs, generateCompareData } from '@/app/comman/commanFunctions';
import ResearchList from '@/app/comman/researchList';
import BrandList from '@/app/comman/brandList';
import VehicleListCard from '../vehicalListCad';
import ToggleTable from '@/app/comman/toggleTable';
import TruckCard from '@/app/comman/truckCards';
import CompareSlider from '@/app/comman/compareSlider';
import ViewAllButton from '@/app/comman/buttonView';

const ScvComponent = () => {
    const breadcrumbItems = GenerateBreadcrumbs();
    const updatedMenuItems = breadcrumbItems.map(item =>
        item.path === "/en/scv"
            ? { ...item, label: "Small Commercial Vehicles" }
            : item
    );

    const truckInfo = [
        {
            icon: <img src='https://cdn-icons-png.flaticon.com/512/3502/3502954.png' alt='' />,
            title: 'Mini Trucks',
            link: '#',
        },
        {
            icon: <img src="https://cdn-icons-png.flaticon.com/512/4502/4502386.png" alt='' />,
            title: 'Pickup Trucks',
            link: '#',
        },
        {
            icon: <img src='https://cdn-icons-png.flaticon.com/512/17184/17184971.png' alt='' />,
            title: 'Auto Rikshaw',
            link: '#',
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

    const content: JSX.Element[] = [
        <>
            Like the rest of the truck segments, the small commercial vehicle (SCVs) of trucks are highly critical in the growth of the overall truck market. As the same suggests, the SCVs are the smallest category of trucks, these entry-level four-wheeler trucks help deliver the cargo to the customer doorsteps faster, quicker and most efficiently. The SCVs comprises mini-trucks, pickups between 1450 Kg to 7000 Kg GVW, the price ranging between ₹3.91 Lakh - ₹37.21 Lakh.
        </>,
        <>
            Small trucks have become necessary for today’s dynamic transportation needs with the emergence of e-commerce and home delivery models of logistics. Expanding cities and towns that need faster delivery of cargo/logistics, and big trucks are forbidden entry due to pollution and congestion, the small/micro and compact trucks become indispensable for businesses to reach to their customers. The vibrant SCV truck market has some of the most popular truck brands in India that are omnipresent across cities, towns and villages. The iconic Tata Ace gold, Mahindra Jeeto, Force Urbania, Maruti Suzuki Super Carry, Tata Intra V10, Tata Intra V30, Ashok Leyland Dost + and Tata Ace EV are some of the most recognized trucks in the category.
        </>,
    ];

    const trucksData = [
        { Model: "Tata Ace EV", Price: "₹3.99 - ₹6.69 Lakh" },
        { Model: "Mahindra Jeeto", Price: "₹4.72 - ₹5.65 Lakh" },
        { Model: "Force Urbania", Price: "	₹30.51 - ₹37.21 Lakh" },
        { Model: "Montra Electric Super Auto", Price: "₹3.02 - ₹3.50 Lakh" },
        { Model: "Maruti Suzuki Super Carry", Price: "₹5.26 - ₹6.41 Lakh" },
        { Model: "Tata Intra V10", Price: "₹6.55 - ₹6.76 Lakh" },

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
    return (
        <div className='relative'>
            <TopBanner
                imageUrl="https://truckcdn.cardekho.com/pwa/img/scv-banner.jpg"
                title="India's Small Commercial Vehicles"
                height={400}
            />
            <Image
                width={0}
                height={10}
                sizes="100vw"
                className="object-none  w-full "
                src={'https://tpc.googlesyndication.com/simgad/2186141005922165001'} alt='' />
            <div className='max-w-7xl m-auto relative'>
                <Breadcrumbs items={updatedMenuItems} />
                <div className="lg:flex border-b-2  rounded-b-md border-gray-100 gap-4 ">

                    {/* left part */}
                    <div className="w-full lg:w-8/12 xl:w-[73.50%] space-y-4 mb-4 md:p-5 xl:p-0 " >
                        <h2 className='p-[17px 20px 0px] text-xl lg:text-[30px] font-bold mb-5 '>
                            Small Commercial Vehicles in India
                        </h2>
                        <div className='border rounded-[16px] lg:p-5 p-5 mb-3 bg-white'>
                            <ToggleTable
                                content={content}
                                title="Top 5 small commercial vehicles in India"
                                columns={["Model", "Price"]}
                                data={trucksData}
                            />
                        </div>
                        <TruckCard data={truckCard} />
                        <div className='border rounded-[16px]   mb-3 bg-white'>

                            <CompareSlider
                                data={compareData}
                                heading={' Popular SCV Vehicles Comparisons'}
                                setSlide={2}
                            />
                            <div className='pb-4 pl-4'>
                                <ViewAllButton heading="Trucks Comparisions" link="/compare" />
                            </div>
                        </div>

                    </div>

                    {/* right part */}
                    <div className="w-full lg:w-4/12 xl:w-[25%] h-auto flex flex-col  sm:p-5 xl:p-0 mr-2 gap-2">
                        <VehicleListCard
                            title="Latest Trucks"
                            vehicleData={truckData}
                            viewAllText="View All Latest Trucks"

                        />
                        <BrandList title="SCVs By Popular Brands" data={brandInfo} />
                        <ResearchList title="Explore Body Types" data={truckInfo} />


                        <VehicleListCard
                            title="Best E-Rickshaw"
                            vehicleData={rikshawData}
                            viewAllText="View All Best E Rikshaw"

                        />
                        <img alt='not found' src='https://tpc.googlesyndication.com/simgad/9767680614922265990' className="brightness-100 lg:block hidden  w-full  object-fill h-[250px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScvComponent;