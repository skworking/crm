'use client'
import { GenerateBreadcrumbs } from '@/app/comman/commanFunctions';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Dropdown from '@/app/comman/dorpdown';
import { SelectChangeEvent } from '@mui/material';
import { useLocation } from '@/app/context/locationContext';
import Breadcrumbs from '@/app/comman/breadCrumbs';
import VehicleListCard from '../vehicalListCad';
import BrandToggleList from '@/app/comman/brandToggleList';
import ToolsCard from '@/app/comman/toolsCard';

interface OptionType {
    value?: string;
    label: string;
    isHeader?: boolean;
}

const ServiceComponent = () => {
    const { location, handleSelectCitybypass } = useLocation();
    console.log("access loc", location);

    const breadcrumbItems = GenerateBreadcrumbs();
    breadcrumbItems.splice(1, 0, { label: "New Trucks", path: "/en/new-trucks" });
    const brandOptions: OptionType[] = [
        { label: 'POPULAR brands', isHeader: true },
        { value: 'ashok_leyland', label: 'Ashok Leyland' },
        { value: 'tata', label: 'Tata' },
        { value: 'mahindra', label: 'Mahindra' },
        { value: 'eicher', label: 'Eicher' },
    ];
    const cityOptions: OptionType[] = [
        { label: 'Populer Cities', isHeader: true },
        { value: 'india', label: 'India' },
        { value: 'new delhi', label: 'New Delhi' },
        { value: 'jaypur', label: 'Jaypur' },
        { value: 'kanpur', label: 'Kanpur' },
    ];


    const [selectedBrand, setSelectedBrand] = useState<string | null>('');
    const [selectedCity, setSelectedCity] = useState<string | null>(location.label);

    useEffect(() => {
        setSelectedCity(location.label); // Update selected city when location changes
    }, [location]);

    const handleDropdownChange = (event: SelectChangeEvent<string | null>, type: string) => {
        console.log(event, type);

        const value = event.target.value ?? '';
        switch (type) {
            case 'brand':
                setSelectedBrand(value);

                break;
            case 'city':

                const selectedValue = value;
                const selectedCity = cityOptions.find((city) => city.value === selectedValue);
                console.log(selectedCity);

                if (selectedCity) {
                    handleSelectCitybypass(selectedCity)
                    setSelectedCity(selectedValue); // selectedCity.value is a string
                }
                break;
            default:
                break;
        }
    };

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

    const brandInfo = [
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/ashok-leyland.jpg',
            title: 'Ashok Leyland',
            link: '/truck-specs/ashok-leyland',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/tata.jpg',
            title: 'Tata',
            link: '/truck-specs/tata',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/mahindra.jpg',
            title: 'Mahindra',
            link: '/truck-specs/mahindra',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/eicher.jpg',
            title: 'Eicher',
            link: '/truck-specs/eicher',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/bharat-benz.jpg',
            title: 'BharatBenz',
            link: '/truck-specs/bharatbenz',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/piaggio.jpg',
            title: 'Piaggio',
            link: '/truck-specs/piaggio',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/altigreen.jpg',
            title: 'Altigreen',
            link: '/truck-specs/altigreen',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/osm.jpg',
            title: 'OSM',
            link: '/truck-specs/osm',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/bajaj.jpg',
            title: 'Bajaj',
            link: '/truck-specs/bajaj',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/sml-isuzu.jpg',
            title: 'SML Isuzu',
            link: '/truck-specs/sml-isuzu',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/scania.jpg',
            title: 'Scania',
            link: '/truck-specs/scania',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/man.jpg',
            title: 'Man',
            link: '/truck-specs/man',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/kamaz.jpg',
            title: 'Kamaz',
            link: '/truck-specs/kamaz',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/force.jpg',
            title: 'Force',
            link: '/truck-specs/force',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/isuzu.jpg',
            title: 'Isuzu',
            link: '/truck-specs/isuzu',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/atul.jpg',
            title: 'Atul',
            link: '/truck-specs/atul',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/lohia.jpg',
            title: 'Lohia',
            link: '/truck-specs/lohia',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/maruti-suzuki.jpg',
            title: 'Maruti Suzuki',
            link: '/truck-specs/maruti-suzuki',
        },

    ];

    const toolsArray = [
        {
            heading: 'Dealers',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconDealers-1.svg',
        },
        {
            heading: 'Service Centers',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconServiceCenters-1.svg',
        },
        {
            heading: 'Spare Parts',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconSpareParts-1.svg',
        },
        {
            heading: 'Body Makers',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconBodyMakers-1.svg',
        },
        {
            heading: 'Videos',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconVideos-1.svg',
        },
        {
            heading: 'Brochures',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconBrochures-1.svg',
        },
        {
            heading: 'Emi Calculator',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconEmiCalculator-1.svg',
        },
        {
            heading: 'Compare Trucks',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconCompareTrucks-1.svg',
        },
        {
            heading: 'Ask For Price',
            image: 'https://truckcdn.cardekho.com/pwa/img/iconAskForPrice-1.svg',
        },
    ]
    return (
        <div className='relative'>
            <div className='lg:h-[400px] h-[200px] relative w-full'>
                <Image src={'https://truckcdn.cardekho.com/pwa/img/service_center_banner.jpg'} alt=""
                    width={0}
                    height={0}
                    fill
                    sizes="100vw"
                    className="object-cover  w-full lg:h-full "
                />

                {/* Red Circle & Content */}
                <div className="absolute max-w-7xl m-auto inset-0 flex items-center overflow-hidden ">
                    {/* Red Semi-Transparent Circle */}
                    <div className="relative  lg:ml-[50px] flex items-center justify-center lg:w-[600px] lg:h-[600px] w-[350px] lg:bottom-20 h-[350px] bg-[#d94025]  mix-blend-multiply bg-opacity-[.95] rounded-full ">

                    </div>
                </div>

            </div>
            <div className='absolute inset-0  lg:top-[32px] space-y-10 max-w-7xl  p-4 m-auto'>

                <div className="  lg:text-[48px] text-2xl px-7 text-white font-bold left-0">
                    Helping you connect to the
                    <span className="hidden lg:block"> <br /> right service center</span>
                    <span className="lg:hidden inline-flex"> right service center</span>
                </div>
                <div className="lg:block hidden text-[14px] max-w-2xl bg-white rounded-lg font-bold left-0 ">

                    <div className='max-w-7xl'>
                        <div className="relative z-5  p-4  gap-4 lg:flex">
                            <Dropdown
                                options={brandOptions}
                                value={selectedBrand}
                                onChange={(e) => handleDropdownChange(e, 'brand')}
                                placeholder="Select Brand"
                                ariaLabel="Brand Selection"
                            />

                            <Dropdown
                                options={cityOptions}
                                value={selectedCity}
                                onChange={(e) => handleDropdownChange(e, 'city')}
                                placeholder="Select City"
                                ariaLabel="Model Selection"
                            />

                            <button className="bg-[#d94025] text-white font-bold text-[20px] px-4 py-2 rounded w-full mt-4">
                                Search
                            </button>
                        </div>
                    </div>
                </div>


            </div>
            <div className='max-w-7xl relative m-auto'>
                <div className="lg:absolute sm:p-4 overflow-auto no-scrollbar lg:hidden block mt-[-15%] sm:overflow-visible text-[14px]  lg:w-fit  font-bold left-0 ">

                    <div className='lg:w-full'>
                        <div className="relative z-5 bg-white p-4  gap-4 lg:flex">
                            <Dropdown
                                options={brandOptions}
                                value={selectedBrand}
                                onChange={(e) => handleDropdownChange(e, 'brand')}
                                placeholder="Select Brand"
                                ariaLabel="Brand Selection"
                            />

                            <Dropdown
                                options={cityOptions}
                                value={selectedCity}
                                onChange={(e) => handleDropdownChange(e, 'city')}
                                placeholder="Select Model"
                                ariaLabel="Model Selection"
                            />

                            <button className="bg-[#d94025] text-white font-bold text-[20px] px-4 py-2 rounded w-full mt-4">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                <Image
                    width={0}
                    height={20}
                    sizes="100vw"
                    className="object-none  w-full "
                    src={'https://tpc.googlesyndication.com/simgad/2186141005922165001'} alt='' />


            </div>
            {/* <hr /> */}
            <div className='max-w-7xl m-auto relative'>
                <Breadcrumbs items={breadcrumbItems} />
                <div className="lg:flex border-b-2  rounded-b-md border-gray-100 gap-4 ">
                    <div className="w-full lg:w-8/12 xl:w-[73.50%] space-y-4 mb-4 md:p-5 xl:p-0 " >
                        <h2 className='p-[17px 20px 0px] text-xl lg:text-[30px] font-bold mb-5 '>
                            Truck Service Centers
                        </h2>
                        <BrandToggleList
                            title="Truck Service Centers by Brand"
                            data={brandInfo}
                            gridcols="grid-cols-4"  // Customize the number of columns
                            gap="gap-6"             // Customize the gap between items
                            pad="p-4"               // Customize padding
                            initialVisible={12}      // Show 6 items initially
                        />

                        <div className='border rounded-[16px]  mb-3 flex flex-col p-4 bg-white gap-2  relative'>
                            <h2 className='p-[17px 20px 0px] text-xl font-bold '>
                                Truck Service Centers in India
                            </h2>
                            <p className='text-[rgba(36,39,44,.7)]'>
                                TrucksDekho lists 8476 truck dealers in India spread across 702 cities. Complete listing of Dealerships available across 37 brands. Locate authorized truck showrooms in your own city in India by just clicking on your preferred truck brand.
                            </p>
                        </div>
                        <div className='border rounded-[16px] p-4 mb-3 flex flex-col  bg-white gap-2  relative'>
                            <h2 className='p-[17px 20px 0px]  text-xl font-bold '>
                                Tools & Services
                            </h2>
                            <ToolsCard data={toolsArray} />
                        </div>
                    </div>

                    <div className="w-full lg:w-4/12 xl:w-[25%] h-auto flex flex-col  sm:p-5 xl:p-0 mr-2 gap-2">
                        <VehicleListCard
                            title="Latest Trucks"
                            vehicleData={truckData}
                            viewAllText="View All Latest Trucks"

                        />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ServiceComponent;