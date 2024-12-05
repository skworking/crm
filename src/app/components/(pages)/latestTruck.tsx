import Breadcrumbs from '@/app/comman/breadCrumbs';
import { GenerateBreadcrumbs } from '@/app/comman/commanFunctions';
import React, { useState } from 'react'
import VehicleListCard from '../vehicalListCad';
import ToggleTable from '@/app/comman/toggleTable';
import TruckCard from '@/app/comman/truckCards';
import FilterCollapsible from '@/app/comman/collasefilter';
interface Item {
    label: string;
    count: number;
}
interface FilterSection {
    title: string;
    items: Item[];
}

const LatestTruckComponent = () => {
    const breadcrumbItems = GenerateBreadcrumbs();
    breadcrumbItems.splice(1, 0, { label: "New Trucks", path: "/en/new-trucks" });
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
            <h1 className='font-bold text-[20px]'>LATEST TRUCKS IN INDIA</h1>
        </>,
        <>
            Check out the list of latest Trucks, Mini Trucks, Pickups, Tipper, Tractor Trailer & Three Wheelers in India in 2024, among which new Truck models include Komaki CAT 3.0 NXT, Mahindra ALFA DX DUO, Atul Energie and Atul Mobili& many more Top brands include Komaki, Mahindra, Atul, Ak Auto Electrical and Force & many more. Explore price, variants, GVW, number of tyres and much more for commercial vehicles. View SCV & LCV vehicles & compare trucks to find a suitable vehicle for your needs.
        </>
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
            title: 'Fuel Type',
            items: [
                { label: 'Diesel', count: 120 },
                { label: 'Petrol', count: 80 },
                { label: 'Electric', count: 45 },
                { label: 'CNG', count: 60 },
            ],
        },
        {
            title: 'Carrier Type',
            items: [
                { label: 'Open', count: 95 },
                { label: 'Closed', count: 67 },
                { label: 'Refrigerated', count: 10 },
            ],
        },
        {
            title: 'GVW',
            items: [
                { label: '3.5 Ton', count: 40 },
                { label: '7.5 Ton', count: 25 },
                { label: '12 Ton', count: 15 },
            ],
        },
        {
            title: 'Industry Segment',
            items: [
                { label: 'Logistics', count: 50 },
                { label: 'Construction', count: 30 },
                { label: 'Agriculture', count: 20 },
            ],
        },
        {
            title: 'Family',
            items: [
                { label: 'Heavy Duty', count: 55 },
                { label: 'Light Duty', count: 70 },
            ],
        },
        {
            title: 'Emission Norms',
            items: [
                { label: 'BS6', count: 120 },
                { label: 'BS4', count: 90 },
            ],
        },
        {
            title: 'Number of Tyre',
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


    return (
        <div className='relative'>
            <div className='max-w-7xl m-auto relative'>
                <Breadcrumbs items={breadcrumbItems} />
                <div className="lg:flex border-b-2  rounded-b-md border-gray-100 gap-4 ">
                    {/* left container */}
                    <div className="w-full lg:w-4/12 xl:w-[25%] h-auto flex flex-col  sm:p-5 xl:p-0 mr-2 gap-2">
                        <div className='border hidden lg:block rounded-[16px] p-5 lg:p-0 mb-3 bg-white'>
                            {filters.map((filter, index) => (
                                <div
                                    key={index}
                                    className={`${index !== filters.length - 1 ? 'border-b border-gray-300' : ''
                                        }`}
                                >
                                    <FilterCollapsible key={index} title={filter.title} items={filter.items} />
                                </div>
                            ))}
                        </div>
                        <VehicleListCard
                            title="Poluler Truck of 2024"
                            vehicleData={truckData}
                            viewAllText="View All Latest Trucks"
                        />

                    </div>
                    {/* right container */}
                    <div className="w-full lg:w-8/12 xl:w-[73.50%] space-y-4 mb-4 md:p-5 xl:p-0 " >
                        <div className='border rounded-[16px] lg:p-5 p-5 mb-3 bg-white'>
                            <ToggleTable
                                content={content}
                                title=""
                                columns={[]}
                                data={[]}
                            />
                        </div>
                        <div className='flex justify-between'>
                            <h2 className='p-[17px 20px 0px] text-xl lg:text-[30px] font-bold mb-5 '>
                                {truckCard.length} Commercial Vehicles
                            </h2>
                            <div>
                                <label htmlFor="sort" className="mr-2 font-semibold">Sort by Price:</label>
                                <select
                                    id="sort"
                                    onChange={(e) => handleSort(e.target.value as 'asc' | 'desc')}
                                    className="p-2 border border-gray-300 rounded-md"
                                >
                                    <option value="asc">Price: Low to High</option>
                                    <option value="desc">Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                        <TruckCard data={truckCard} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestTruckComponent