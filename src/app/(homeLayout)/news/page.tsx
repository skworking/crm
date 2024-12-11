'use client'
import React, { useState } from 'react'
import BrandList from '@/app/comman/brandList';
import Breadcrumbs from '@/app/comman/breadCrumbs'
import { GenerateBreadcrumbs } from '@/app/comman/commanFunctions';
import VehicleListCard from '@/app/components/vehicalListCad';
import Image from 'next/image'
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import NewsCard from '@/app/comman/newsCard';

interface OptionType {
    value?: string;
    label: string;
    isHeader?: boolean;
}

const News = () => {
    const newObject = { "label": "New Trucks", "path": "/en/new-trucks" };
    const breadcrumbItems = GenerateBreadcrumbs();
    breadcrumbItems.splice(1, 0, newObject);
    
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
    const [selectedSearch, setSelectedSearch] = useState<string | null>('');
    const bodyOptions: OptionType[] = [
        { label: 'POPULAR brands', isHeader: true },
        { value: 'ashok_leyland', label: 'Ashok Leyland' },
        { value: 'tata', label: 'Tata' },
        { value: 'mahindra', label: 'Mahindra' },
        { value: 'eicher', label: 'Eicher' },
    ];

    const cards = [
        {
            id: 1,
            heading: "How To Maintain Truck Gearbox 101: Things You Need To Know",
            description:
                "Like your truck’s engine, axle, suspension, and other parts, it is important to maintain the truck’s gearbox. So, here are a few things you need to be aware of. Read on:",
            profile: 'data:image/png;base64,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', // Add actual profile URL if available
            imageUrl: "https://truckcdn.cardekho.com/news/25891732939573.jpg", // Add actual image URL if available
            name: "Dheeraj Nair",
            date: "Nov 30, 2024 09:32 AM",
            url:'/en/news/detail/top-7-technologies-for-logistical-fleet-efficiency-2592'
        },
        {
            id: 2,
            heading: "Rilox EV Introduces Bijli Trio E-Cart At An Initial Price Of Rs 1.35 Lakh",
            description:
                "Rilox EV has unveiled the Bijli Trio e-cart for logistical businesses which aims to revolutionise urban logistics and last-mile cargo deliveries. Read on.",
            profile: "K",
            imageUrl: "https://truckcdn.cardekho.com/news/25871732873240.jpg",
            name: "Ketan Birla",
            date: "Nov 29, 2024 03:01 PM",
        },
        {
            id: 3,
            heading: "How To Handle Tailgating? Here’s A List Of Things To Avoid",
            description:
                "Tired of vehicles tailgating your truck? Worried you might get into an accident? These steps to avoid tailgating can come in handy.",
            profile: "D",
            imageUrl: "https://truckcdn.cardekho.com/news/25001729072020.jpg",
            name: "Dheeraj Nair",
            date: "Nov 29, 2024 12:30 PM",
        },
        {
            id: 4,
            heading: "Engine Warning Signs And Their Causes Explained",
            description:
                "As a truck driver, you should not ignore these engine warning signs. Here’s why.",
            profile: "D",
            imageUrl: "https://truckcdn.cardekho.com/news/25861732857488.jpg",
            name: "Dheeraj Nair",
            date: "Nov 29, 2024 10:39 AM",
        },
        {
            id: 5,
            heading:
                "Valvoline Introduces All Fleet Pro CK-4 Diesel Engine Oil For Commercial Vehicles",
            description:
                "Valvoline Cummins has launched All Fleet Pro CK-4 diesel engine oil which suits a variety of fleet sizes and comes in packages ranging from 1 litre to 210 litres.",
            profile: "K",
            imageUrl: "https://truckcdn.cardekho.com/news/25851732786335.jpg",
            name: "Ketan Birla",
            date: "Nov 28, 2024 02:45 PM",
        },
        {
            id: 6,
            heading: "Guide To Create A Preventive Fleet Maintenance Checklist",
            description:
                "As a truck fleet owner or manager, it is important to create a preventive fleet maintenance checklist. So, here are a few tips to create one:",
            profile: "D",
            imageUrl: "https://truckcdn.cardekho.com/news/25841732767919.jpg",
            name: "Dheeraj Nair",
            date: "Nov 28, 2024 09:52 AM",
        },
        {
            id: 7,
            heading:
                "ZF Commercial Vehicle Solutions India Launches Electronic Stability Control Test Track In Chennai",
            description:
                "ZF India opened a new ESC (Electronic Stability Control) test track in Chennai to enhance its vehicle safety testing capabilities. Read more.",
            profile: "K",
            imageUrl: "https://truckcdn.cardekho.com/news/25831732708166.jpg",
            name: "Ketan Birla",
            date: "Nov 27, 2024 05:09 PM",
        },
        {
            id: 8,
            heading: "Switch Mobility Joins Hands With Vertelo For Rapid Electric Vehicle Adoption",
            description:
              "With this strategic partnership, Switch Mobility will offer its cutting-edge EV technology, and Vertelo will lease and fund the electric commercial vehicles.",
            profile: "K",
            imageUrl: "https://truckcdn.cardekho.com/news/25821732702775.jpg",
            name: "Ketan Birla",
            date: "Nov 27, 2024 03:43 PM",
          },
          {
            id: 9,
            heading: "Mahindra Zeo: Through the Urban Jungle",
            description:
              "We drove the Mahindra Zeo in real-world conditions and achieved a range of over 170kms. And that’s not all, there are more features worth exploring.",
            profile: "R",
            imageUrl: "https://truckcdn.cardekho.com/news/25811732781251.jpg",
            name: "Ritvik Gupta",
            date: "Nov 27, 2024 01:40 PM",
          },
    ]

    const handleDropdownChange = (event: SelectChangeEvent<string | null>) => {
        setSelectedSearch(event.target.value);
    }
    return (
        <div className='max-w-7xl m-auto relative'>
            <Image
                width={0}
                height={0}
                sizes="100vw"
                className="object-none  w-full "
                src={'https://tpc.googlesyndication.com/simgad/3190707829268908051'} alt='' />
            <div className='max-w-7xl m-auto'>
                <Breadcrumbs items={breadcrumbItems} />
                <h2 className='p-[17px 20px 0px] text-[28px] font-semibold mb-5 '>
                    Trucks News India - All Latest Trucks Information and Auto news India</h2>
            </div>
            <div className="lg:flex border-b-2  rounded-b-md border-gray-100 gap-4 ">
                <div className="w-full lg:w-8/12 xl:w-[73.50%] space-y-4 mb-4 md:p-5 xl:p-0 " >
                    <div className='sm:flex sm:space-x-4 lg:space-y-0 space-y-2 '>
                        <FormControl fullWidth>
                            <InputLabel>Select News Category</InputLabel>
                            <Select
                                value={selectedSearch}
                                onChange={(e) => handleDropdownChange(e)}
                                label="Select News Category"
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            maxHeight: 150, // Set the fixed height for the menu dropdown
                                            overflowY: 'auto', // Enable vertical scrolling
                                        },
                                    },
                                }}
                            >
                                {bodyOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <button className="bg-[#d94025] text-white font-medium text-[20px] sm:px-4 px-0  rounded sm:w-1/3 w-full">Search</button>
                    </div>
                    <NewsCard data={cards} />

                </div>

                <div className="w-full lg:w-4/12 xl:w-[25%] h-auto flex flex-col  sm:p-5 xl:p-0 mr-2 gap-2">
                    <VehicleListCard
                        title="Best Auto Rickshaw"
                        vehicleData={carData}
                        viewAllText="View All Electric Commercial Vehicles"
                    // onViewAllClick={handleViewAll}
                    />
                    <BrandList title="Popular Electric Vehicle Brands" data={brandInfo} />
                    <img alt='' src='https://tpc.googlesyndication.com/simgad/17644868341984738745' className="brightness-100 lg:block hidden  w-full  object-fill h-[250px]" />
                </div>
            </div>
        </div>

    )
}

export default News;