import Breadcrumbs from '@/app/comman/breadCrumbs';
import { GenerateBreadcrumbs, generateCompareData } from '@/app/comman/commanFunctions';
import React, { useState } from 'react'
import VehicleListCard from '../vehicalListCad';
import ToggleTable from '@/app/comman/toggleTable';
import TruckCard from '@/app/comman/truckCards';
import FilterCollapsible from '@/app/comman/collasefilter';
import SortDropdown from '@/app/comman/shortDropdown';
import CompareSlider from '@/app/comman/compareSlider';
import ViewAllButton from '@/app/comman/buttonView';
import NewsCardData from '../newsCardData';
interface Item {
    label: string;
    count: number;
    icon?: string;
}
interface FilterSection {
    title: string;
    type?: string | undefined;
    items: Item[];
}
type SelectedFilters = Record<string, string[]>;
const TataAceComponent = () => {
    const breadcrumbItems = GenerateBreadcrumbs();
    breadcrumbItems.splice(1, 0, { label: "New Trucks", path: "/en/new-trucks" });
    const bread = breadcrumbItems.filter(
        item => item.label !== "TRUCK"
    );


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
    const content: JSX.Element[] = [
        <>
            <h1 className='font-bold text-[20px]'>Tata Ace</h1>
        </>,
        <>
            Tata Ace has 5 models under its flagship - Tata Ace gold, Tata Ace EV and Tata Ace HT+ . Find Tata Ace Price 2024 , GVW, mileage, payload, specifications & features at TrucksDekho.
        </>
    ];
    const trucksData = [
        { Model: "Tata Ace Gold", Price: "₹3.99 - ₹6.69 Lakh" },
        { Model: "Tata Ace EV", Price: "From ₹8.72 Lakh" },
        { Model: "Tata Ace HT+", Price: "From ₹7.19 Lakh" },
        { Model: "Tata Ace EV 1000", Price: "₹11.27 - ₹11.40 Lakh" },
        { Model: "Tata Ace Diesel", Price: "From ₹7.00 Lakh" }

    ];
    const [truckCard, setTruckCard] = useState([
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
    ])
    const filters: FilterSection[] = [
        {
            title: 'Body Type',
            type: 'icon', // Icon Grid
            items: [
                { label: 'Truck', count: 229, icon: '🚚' },
                { label: 'Pickup', count: 26, icon: '🛻' },
                { label: 'Mini Truck', count: 48, icon: '🚛' },
                { label: 'Tipper', count: 77, icon: '🚜' },
                { label: 'Trailer', count: 35, icon: '🚒' },
                { label: '3 Wheeler', count: 322, icon: '🛺' },
                { label: 'Transit Mixer', count: 10, icon: '🚑' },
                { label: 'Auto Rickshaw', count: 79, icon: '🛵' },
                { label: 'E Rickshaw', count: 376, icon: '⚡' },
            ],
        },
        {
            title: 'Price Range',
            type: 'checkbox', // Checkbox List
            items: [
                { label: 'less than 5 lakh', count: 556 },
                { label: '5 lakh-10 lakh', count: 59 },
                { label: '10 lakh-15 lakh', count: 41 },
                { label: '15 lakh-20 lakh', count: 54 },
            ],
        },
        {
            title: "brands",
            items: [
                { label: 'Tata', count: 18 },
                { label: 'Ashok Leyland', count: 24 },
                { label: 'Eicher', count: 10 },
                { label: 'Mahindra', count: 15 },
                { label: 'Bharat Benz', count: 27 },
                { label: 'Sml Isuzu', count: 9 },
                { label: 'Piaggio', count: 4 },
                { label: 'Isuzu', count: 2 },
                { label: 'EBUZZ', count: 2 },
                { label: 'Jangid', count: 4 },
                { label: 'Veectero', count: 4 },
                { label: 'Hexall', count: 4 },
                { label: 'E-Ashwa', count: 1 },
                { label: 'Gkon', count: 4 },
                { label: 'Joy', count: 1 },
                { label: 'Olectra', count: 1 },
                { label: 'Sahyatri', count: 6 },
                { label: 'YC Electric', count: 1 },
                { label: 'Badshah', count: 5 },
                { label: 'TVS', count: 1 },
                { label: 'Gayatri Electric', count: 1 },
                { label: 'BHM Safari', count: 7 },
                { label: 'Mac Auto', count: 10 },
                { label: 'City Cab', count: 3 },
                { label: 'Maruti Suzuki', count: 1 },
                { label: 'Shaktimaan', count: 3 },
                { label: 'Statix Electric', count: 2 },
                { label: 'Electeca', count: 4 },
                { label: 'Log 9', count: 1 }
            ]
        },
        {
            title: 'Fuel Type',
            type: 'checkbox',
            items: [
                { label: 'Diesel', count: 120 },
                { label: 'Petrol', count: 80 },
                { label: 'Electric', count: 45 },
                { label: 'CNG', count: 60 },
            ],
        },
        {
            title: 'Carrier Type',
            type: 'checkbox',
            items: [
                { label: 'Open', count: 95 },
                { label: 'Closed', count: 67 },
                { label: 'Refrigerated', count: 10 },
            ],
        },
        {
            title: 'GVW',
            type: 'checkbox',
            items: [
                { label: '3.5 Ton', count: 40 },
                { label: '7.5 Ton', count: 25 },
                { label: '12 Ton', count: 15 },
            ],
        },
        {
            title: 'Industry Segment',
            type: 'checkbox',
            items: [
                { label: 'Logistics', count: 50 },
                { label: 'Construction', count: 30 },
                { label: 'Agriculture', count: 20 },
            ],
        },
        {
            title: 'Family',
            type: 'checkbox',
            items: [
                { label: 'Heavy Duty', count: 55 },
                { label: 'Light Duty', count: 70 },
            ],
        },
        {
            title: 'Emission Norms',
            type: 'checkbox',
            items: [
                { label: 'BS6', count: 120 },
                { label: 'BS4', count: 90 },
            ],
        },
        {
            title: 'Number of Tyre',
            type: 'checkbox',
            items: [
                { label: '4', count: 35 },
                { label: '6', count: 50 },
                { label: '8', count: 25 },
            ],
        },
    ];

    const extractPrice = (priceRange: string): number => {
        const numericPrice = priceRange.match(/\d+\.\d+/g); // Extract numbers like 3.99 or 6.69
        if (numericPrice) {
            return parseFloat(numericPrice[0]) * 100000; // Convert 'Lakh' to absolute numbers
        }
        return 0;
    };

    const handleSort = (order: 'asc' | 'desc') => {
        const sortedData = [...truckCard].sort((a, b) => {
            const priceA = extractPrice(a.price);
            const priceB = extractPrice(b.price);
            return order === 'asc' ? priceA - priceB : priceB - priceA;
        });
        setTruckCard(sortedData);
    };
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});


    const handleSelect = (title: string, item: string) => {
        setSelectedFilters((prev) => ({
            ...prev,
            [title]: prev[title]?.includes(item)
                ? prev[title].filter((i) => i !== item)
                : [...(prev[title] || []), item],
        }));
    };

    const handleRemoveFilter = (filter: string) => {
        // Assuming selectedFilters is an object where each key maps to an array of filters
        const updatedFilters = Object.keys(selectedFilters).reduce((acc: SelectedFilters, key) => {

            acc[key] = selectedFilters[key].filter((item) => item !== filter);
            return acc;

        }, {});

        setSelectedFilters(updatedFilters); // Update state to reflect the changes
    };

    const sliderItems = [
        {
            id: 1,
            name: "Tata Ace Gold",
            price: "₹3.99 - ₹6.69 Lakh *",
            imageUrl: "https://truckcdn.cardekho.com/in/tata/ace-gold/tata-ace-gold-21473.jpg", // Replace with actual image URL
        },
        {
            id: 2,
            name: "Mahindra Jeeto",
            price: "₹4.72 - ₹5.65 Lakh *",
            imageUrl: "https://truckcdn.cardekho.com/in/mahindra/jeeto/mahindra-jeeto-65562.jpg", // Replace with actual image URL
        },
        {
            id: 3,
            name: "Tata Ace EV",
            price: "From ₹8.72 Lakh *",
            imageUrl: "https://truckcdn.cardekho.com/in/tata/ace-ev/tata-ace-ev.jpg", // Replace with actual image URL
        },
        {
            id: 4,
            name: "Tata Ace Gold",
            price: "₹3.99 - ₹6.69 Lakh *",
            imageUrl: "https://truckcdn.cardekho.com/in/tata/ace-gold/tata-ace-gold-21473.jpg", // Replace with actual image URL
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
    const newsArray = [
        {
          image: "https://truckcdn.cardekho.com/news/25731732186775.jpg",
          title: "Tips To Track Logistics And Fleet Business Expenses",
          author: "Dheeraj Nair",
          date: "Nov 21, 2024",
          time: "04:12 PM"
        },
        {
          image: "https://truckcdn.cardekho.com/news/25721732111060.jpg",
          title: "Government Subsidies On Cargo Electric 3-Wheeler Under PM E-Drive Scheme",
          author: "Ketan Birla",
          date: "Nov 20, 2024",
          time: "07:23 PM"
        },
        {
          image: "https://truckcdn.cardekho.com/news/25711732096461.jpg",
          title: "VECV Welcomes Swedish Ambassador To India: Sustainability And Customer Impact As Primary Focus",
          author: "Dheeraj Nair",
          date: "Nov 20, 2024",
          time: "03:00 PM"
        },
        {
          image: "https://truckcdn.cardekho.com/news/25701732088514.jpg",
          title: "Magenta Mobility Expands Its Eco-Friendly Logistics Operations In Uttar Pradesh",
          author: "Ketan Birla",
          date: "Nov 20, 2024",
          time: "01:03 PM"
        }
      ];
    const compareData = generateCompareData(sliderItems);
    return (
        <div className='relative'>
            <div className='max-w-7xl m-auto relative'>
                <Breadcrumbs items={bread} />
                <div className="lg:flex border-b-2  rounded-b-md border-gray-100 gap-4 ">

                    {/* right container */}
                    <div className="order-1 sm:order-2 w-full lg:w-8/12 xl:w-[73.50%] space-y-4 mb-4 md:p-5 xl:p-0 " >
                        <div className='border rounded-[16px] lg:p-5 p-5 mb-3 bg-white'>
                            <ToggleTable
                                content={content}
                                title="Tata Ace Price List In India"
                                columns={['Model', 'Price']}
                                data={trucksData}
                            />
                        </div>
                        <div>

                            <div className='lg:flex justify-between hidden'>
                                <div className=''>
                                    <h2 className='p-[17px 20px 0px] font-medium lg:text-[20px]  mb-5 '>
                                        {truckCard.length} Commercial Vehicles
                                    </h2>
                                    <p className='max-w-2xl'>
                                        {Object.values(selectedFilters).flat().map((item, index) => (
                                            <div key={index} className='text-[rgba(36,39,44,.7)] inline-flex items-center p-2 mr-4 border bg-white'>
                                                <label className=' mr-2'>{item}</label>
                                                <button
                                                    onClick={() => handleRemoveFilter(item)}
                                                    className='bg-none cursor-pointer text-[16px] font-bold '

                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))}
                                    </p>
                                </div>
                                <SortDropdown handleSort={handleSort} />

                            </div>
                        </div>
                        <TruckCard data={truckCard} />
                        <div className='border rounded-[16px]   mb-3 bg-white'>

                            <CompareSlider
                                data={compareData}
                                heading={'Popular Comparison of Tata Ace Models'}
                                setSlide={2}
                            />
                            <div className='pb-4 pl-4'>
                                <ViewAllButton heading="Trucks Comparisions" link="/compare" />
                            </div>
                        </div>
                        <div className='border rounded-[16px]  mb-3 flex flex-col p-4 bg-white  relative'>
                            <h2 className='p-[17px 20px 0px] text-xl font-bold '>
                                Tata Trucks News
                            </h2>
                            <NewsCardData data={newsArray} />
                            <ViewAllButton heading="Latest trucks" link="#" />
                        </div>
                    </div>
                    {/* left container */}
                    <div className="order-2 sm:order-1 w-full lg:w-4/12 xl:w-[25%] h-auto flex flex-col  sm:p-5 xl:p-0 mr-2 gap-2">
                        <div className='border hidden lg:block rounded-[16px] p-5 lg:p-0 mb-3 bg-white'>

                            {filters.map((filter, index) => (
                                <div
                                    key={index}
                                    className={`${index !== filters.length - 1 ? 'border-b border-gray-300' : ''
                                        }`}
                                >
                                    <FilterCollapsible
                                        title={filter.title}
                                        items={filter.items}
                                        type={filter.type}
                                        onSelect={handleSelect}
                                    />
                                </div>
                            ))}
                        </div>
                        <VehicleListCard
                            title="Poluler Truck of 2024"
                            vehicleData={truckData}
                            viewAllText="View All Latest Trucks"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TataAceComponent;