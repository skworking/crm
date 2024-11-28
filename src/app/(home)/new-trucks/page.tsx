'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { SelectChangeEvent } from '@mui/material';
import Dropdown from '@/app/comman/dorpdown';
import Breadcrumbs from '@/app/comman/breadCrumbs';
import { GenerateBreadcrumbs } from '@/app/comman/commanFunctions';
import ToggleTable from '@/app/comman/toggleTable';
import TabComponent from '@/app/comman/tabComponent';
import { FaAngleRight } from 'react-icons/fa';
import PopulerModel from '@/app/components/populerModel';
import LatestModel from '@/app/components/latestModel';
import BudgetModel from '@/app/components/budgetModel';
import { BsFuelPumpDiesel } from 'react-icons/bs';
import { PiPlugChargingLight } from 'react-icons/pi';
import { SlFire } from 'react-icons/sl';
import CompareModel from '@/app/components/compareModel';
import ToolsCard from '@/app/comman/toolsCard';
import CollabseContent from '@/app/comman/collapseComponent';
interface OptionType {
    value?: string;
    label: string;
    isHeader?: boolean;
}

type TabType = 'new trucks' | '3 Wheeler';

const Page = () => {
    const [currentTab, setCurrentTab] = useState<'brand' | 'body' | 'budget' | 'fuel' | 'tonnage'>('brand');
    const [selectedBrand, setSelectedBrand] = useState<string | null>('');
    const [selectedModel, setSelectedModel] = useState<string | null>('');
    const [selectedBody, setSelectedBody] = useState<string | null>('');
    const [selectedBudget, setSelectedBudget] = useState<string | null>('');
    const [selectedFuel, setSelectedFuel] = useState<string | null>('');
    const [selectedTonnage, setSelectedTonnage] = useState<string | null>('');
    const brandOptions: OptionType[] = [
        { label: 'POPULAR brands', isHeader: true },
        { value: 'ashok_leyland', label: 'Ashok Leyland' },
        { value: 'tata', label: 'Tata' },
        { value: 'mahindra', label: 'Mahindra' },
        { value: 'eicher', label: 'Eicher' },
    ];

    const modelOptions: Record<string, OptionType[]> = {
        ashok_leyland: [
            { value: 'partner', label: 'Partner' },
            { value: 'dost', label: 'Dost' },
        ],
        tata: [
            { value: 'ace', label: 'Ace' },
            { value: 'ultra', label: 'Ultra' },
        ],
        mahindra: [
            { value: 'bolero', label: 'Bolero' },
            { value: 'imperio', label: 'Imperio' },
        ],
        eicher: [
            { value: 'pro2000', label: 'Pro 2000' },
            { value: 'pro3000', label: 'Pro 3000' },
        ],
    };

    const bodyOptions: OptionType[] = [
        { value: 'pickup', label: 'Pickup' },
        { value: 'container', label: 'Container' },
        { value: 'tipper', label: 'Tipper' },
    ];
    const brandsByBody: Record<string, OptionType[]> = {
        pickup: [
            { value: "ashok_leyland", label: "Ashok Leyland" },
            { value: "mahindra", label: "Mahindra" },
        ],
        container: [
            { value: "tata", label: "Tata" },
            { value: "eicher", label: "Eicher" },
        ],
        tipper: [
            { value: "eicher", label: "Eicher" },
            { value: "ashok_leyland", label: "Ashok Leyland" },
        ],
    };

    const budgetOptions: OptionType[] = [
        { value: "low", label: "Up to ₹10 Lakhs" },
        { value: "medium", label: "₹10-25 Lakhs" },
        { value: "high", label: "Above ₹25 Lakhs" },
        { value: "mid_range_1", label: "₹20-30 Lakhs" },
        { value: "mid_range_2", label: "₹30-40 Lakhs" },
    ];

    // Brand options mapped to each Budget type, including the new ranges
    const brandsByBudget: Record<string, OptionType[]> = {
        low: [
            { value: "mahindra", label: "Mahindra" },
            { value: "eicher", label: "Eicher" },
        ],
        medium: [
            { value: "ashok_leyland", label: "Ashok Leyland" },
            { value: "tata", label: "Tata" },
        ],
        high: [
            { value: "mercedes", label: "Mercedes" },
            { value: "volvo", label: "Volvo" },
        ],
        mid_range_1: [
            { value: "ford", label: "Ford" },
            { value: "isuzu", label: "Isuzu" },
        ],
        mid_range_2: [
            { value: "scania", label: "Scania" },
            { value: "renault", label: "Renault" },
        ],
    };
    const fuelOptions: OptionType[] = [
        { value: 'diesel', label: 'Diesel' },
        { value: 'petrol', label: 'Petrol' },
        { value: 'cng', label: 'CNG' },
    ];
    const brandsByFuel: Record<string, OptionType[]> = {
        diesel: [
            { value: 'ford', label: 'Ford' },
            { value: 'volvo', label: 'Volvo' },
            { value: 'scania', label: 'Scania' },
        ],
        petrol: [
            { value: 'toyota', label: 'Toyota' },
            { value: 'honda', label: 'Honda' },
            { value: 'bmw', label: 'BMW' },
        ],
        cng: [
            { value: 'tata', label: 'Tata' },
            { value: 'maruti', label: 'Maruti' },
            { value: 'hyundai', label: 'Hyundai' },
        ],
    };
    const tonnageOptions: OptionType[] = [
        { value: 'small', label: '2-4 Tons' },
        { value: 'medium', label: '4-8 Tons' },
        { value: 'large', label: 'Above 8 Tons' },
    ];
    const brandsByTonnage: Record<string, OptionType[]> = {
        small: [
            { value: 'tata', label: 'Tata' },
            { value: 'mahindra', label: 'Mahindra' },
            { value: 'ashok', label: 'Ashok Leyland' },
        ],
        medium: [
            { value: 'isuzu', label: 'Isuzu' },
            { value: 'volvo', label: 'Volvo' },
            { value: 'scania', label: 'Scania' },
        ],
        large: [
            { value: 'mercedes', label: 'Mercedes' },
            { value: 'man', label: 'MAN' },
            { value: 'daf', label: 'DAF' },
        ],
    };
    const handleTabChange = (tab: typeof currentTab) => {
        // Clear relevant state when tab changes
        switch (tab) {
            case 'brand':
                setSelectedModel(''); // Clear model when switching to brand tab
                setSelectedBody('');  // Clear body selection
                setSelectedBudget(''); // Clear budget selection
                setSelectedFuel('');   // Clear fuel selection
                setSelectedTonnage(''); // Clear tonnage selection
                break;
            case 'body':
                setSelectedBrand(''); // Clear brand when switching to body tab
                setSelectedModel(''); // Clear model
                setSelectedBudget(''); // Clear budget selection
                setSelectedFuel('');   // Clear fuel selection
                setSelectedTonnage(''); // Clear tonnage selection
                break;
            case 'budget':
                setSelectedBrand(''); // Clear brand when switching to budget tab
                setSelectedModel(''); // Clear model
                setSelectedBody('');  // Clear body selection
                setSelectedFuel('');   // Clear fuel selection
                setSelectedTonnage(''); // Clear tonnage selection
                break;
            case 'fuel':
                setSelectedBrand(''); // Clear brand when switching to fuel tab
                setSelectedModel(''); // Clear model
                setSelectedBody('');  // Clear body selection
                setSelectedBudget(''); // Clear budget selection
                setSelectedTonnage(''); // Clear tonnage selection
                break;
            case 'tonnage':
                setSelectedBrand(''); // Clear brand when switching to tonnage tab
                setSelectedModel(''); // Clear model
                setSelectedBody('');  // Clear body selection
                setSelectedBudget(''); // Clear budget selection
                setSelectedFuel('');   // Clear fuel selection
                break;
            default:
                break;
        }
        setCurrentTab(tab);
    };

    const handleDropdownChange = (event: SelectChangeEvent<string | null>, type: string) => {
        console.log(event, type);

        const value = event.target.value as string;
        switch (type) {
            case 'brand':
                setSelectedBrand(value);
                setSelectedModel('');
                break;
            case 'model':
                setSelectedModel(value);
                break;
            case 'body':
                setSelectedBody(value);
                setSelectedBrand(''); // Clear the brand if it's not valid for the selected body type
                break;
            case 'budget':
                setSelectedBudget(value);
                setSelectedBrand('');
                break;
            case 'fuel':
                setSelectedFuel(value);
                setSelectedBrand('');
                break;
            case 'tonnage':
                setSelectedTonnage(value);
                setSelectedBrand('');
                break;
            default:
                break;
        }
    };
    console.log(selectedBrand);

    const renderDropdown = () => {
        switch (currentTab) {
            case 'brand':
                // return (
                //     <div className='bg-white p-2 gap-2 flex'>
                //         <FormControl variant="standard" fullWidth margin="normal">
                //             <Select
                //                 value={selectedBrand}
                //                 displayEmpty
                //                 onChange={(e) => handleDropdownChange(e, 'brand')}
                //                 inputProps={{ 'aria-label': 'Brand Selection' }}
                //                 renderValue={(selected) => {
                //                     if (!selected) {
                //                         return <span >Select Brand</span>
                //                     }
                //                     const selectedOption = brandOptions.find(option => option.value === selected);
                //                     return selectedOption ? selectedOption.label : selected;
                //                 }}
                //             >

                //                 {brandOptions.map((option) =>
                //                     option.isHeader ? (
                //                         <MenuItem disabled key={option.label}>
                //                             {option.label}
                //                         </MenuItem>
                //                     ) : (
                //                         <MenuItem key={option.value} value={option.value}>
                //                             {option.label}
                //                         </MenuItem>
                //                     )
                //                 )}
                //             </Select>
                //         </FormControl>

                //         <FormControl variant="standard" fullWidth margin="normal">
                //             <Select
                //                 value={selectedModel}
                //                 displayEmpty
                //                 onChange={(e) => handleDropdownChange(e, 'model')}
                //                 inputProps={{ 'aria-label': 'model Selection' }}
                //                 renderValue={(selected) => {
                //                     if (!selected) {
                //                         return <span >Select model</span>
                //                     }
                //                     const selectedOption = selectedBrand && modelOptions[selectedBrand]?.find(
                //                         (option) => option.value === selected
                //                     );
                //                     return selectedOption ? selectedOption.label : selected;
                //                 }}
                //             >
                //                 {selectedBrand && modelOptions[selectedBrand]?.map((option) => (
                //                     <MenuItem key={option.value} value={option.value}>
                //                         {option.label}
                //                     </MenuItem>
                //                 ))}
                //             </Select>
                //         </FormControl>
                //         <button className="bg-[#d94025] text-white font-bold text-[20px] px-4 py-2 rounded w-full mt-4">Search</button>
                //     </div>
                // );
                return (
                    <div className="relative z-5 bg-white p-4  gap-4 lg:flex">
                        <Dropdown
                            options={brandOptions}
                            value={selectedBrand}
                            onChange={(e) => handleDropdownChange(e, 'brand')}
                            placeholder="Select Brand"
                            ariaLabel="Brand Selection"
                        />

                        <Dropdown
                            options={selectedBrand && modelOptions[selectedBrand] || []}
                            value={selectedModel}
                            onChange={(e) => handleDropdownChange(e, 'model')}
                            placeholder="Select Model"
                            ariaLabel="Model Selection"
                        />

                        <button className="bg-[#d94025] text-white font-bold text-[20px] px-4 py-2 rounded w-full mt-4">
                            Search
                        </button>
                    </div>
                );
            case 'body':
                return (
                    <div className="bg-white p-4  gap-4 lg:flex">
                        <Dropdown
                            options={bodyOptions}
                            value={selectedBody}
                            onChange={(e) => handleDropdownChange(e, 'body')}
                            placeholder="Select Body"
                            ariaLabel="Body Selection"
                        />

                        <Dropdown
                            options={selectedBody && brandsByBody[selectedBody] || []}
                            value={selectedBrand}
                            onChange={(e) => handleDropdownChange(e, 'brand')}
                            placeholder="Select Brand"
                            ariaLabel="Brand Selection"
                        />

                        <button className="bg-[#d94025] text-white font-bold text-[20px] px-4 py-2 rounded w-full mt-4">
                            Search
                        </button>
                    </div>
                );
            case 'budget':
                return (
                    <div className="bg-white p-4 gap-4 lg:flex">
                        <Dropdown
                            options={budgetOptions}
                            value={selectedBudget}
                            onChange={(e) => handleDropdownChange(e, 'budget')}
                            placeholder="Select Budget"
                            ariaLabel="Budget Selection"
                        />

                        <Dropdown
                            options={selectedBudget && brandsByBudget[selectedBudget] || []}
                            value={selectedBrand}
                            onChange={(e) => handleDropdownChange(e, 'brand')}
                            placeholder="Select Brand"
                            ariaLabel="Brand Selection"
                        />

                        <button className="bg-[#d94025] text-white font-bold text-[20px] px-4 py-2 rounded w-full mt-4">
                            Search
                        </button>
                    </div>
                )
            case 'fuel':
                return (
                    <div className="bg-white p-4 gap-4 lg:flex ">
                        <Dropdown
                            options={fuelOptions}
                            value={selectedFuel}
                            onChange={(e) => handleDropdownChange(e, 'fuel')}
                            placeholder="Select fuel"
                            ariaLabel="fuel Selection"
                        />

                        <Dropdown
                            options={selectedFuel && brandsByFuel[selectedFuel] || []}
                            value={selectedBrand}
                            onChange={(e) => handleDropdownChange(e, 'brand')}
                            placeholder="Select Brand"
                            ariaLabel="Brand Selection"
                        />

                        <button className="bg-[#d94025] text-white font-bold text-[20px] px-4 py-2 rounded w-full mt-4">
                            Search
                        </button>
                    </div>
                )
            case 'tonnage':
                return (
                    <div className="bg-white p-4 gap-4 lg:flex">
                        <Dropdown
                            options={tonnageOptions}
                            value={selectedTonnage}
                            onChange={(e) => handleDropdownChange(e, 'tonnage')}
                            placeholder="Select tonnage"
                            ariaLabel="tonnage Selection"
                        />

                        <Dropdown
                            options={selectedTonnage && brandsByTonnage[selectedTonnage] || []}
                            value={selectedBrand}
                            onChange={(e) => handleDropdownChange(e, 'brand')}
                            placeholder="Select Brand"
                            ariaLabel="Brand Selection"
                        />

                        <button className="bg-[#d94025] text-white font-bold text-[20px] px-4 py-2 rounded w-full mt-4">
                            Search
                        </button>
                    </div>
                )
            default:
                return null;
        }
    }
    const breadcrumbItems = GenerateBreadcrumbs();
    const trucksData = [
        { Model: "Force Urbania", Price: "₹30.51 - ₹37.21 Lakh" },
        { Model: "Isuzu D-MAX", Price: "₹8.32 - ₹8.36 Lakh" },
        { Model: "Tata Magic Express Bi Fuel", Price: "From ₹7.62 Lakh" },
        { Model: "Tata Magic Mantra Bi Fuel", Price: "From ₹7.01 Lakh" },
        { Model: "Isuzu V-Cross", Price: "₹19.98 - ₹30.96 Lakh" },
    ];
    const [showMore, setShowMore] = useState(false);
    const handleToggle = () => setShowMore((prev) => !prev);
    const getDisplayData = (key: TabType) =>
        showMore ? truckData[key] : truckData[key].slice(0, 6);


    const truckData = {
        'new trucks': [
            {
                heading: 'Ashok Leyland',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/ashok-leyland.jpg',
            },
            {
                heading: 'tata',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/tata.jpg',
            },
            {
                heading: 'mahindra',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/mahindra.jpg',
            },
            {
                heading: 'eicher',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/eicher.jpg',
            },
            {
                heading: 'bharat-benz',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/bharat-benz.jpg',
            },
            {
                heading: 'piaggio',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/piaggio.jpg',
            },
            {
                heading: 'altigreen',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/altigreen.jpg',
            },
            {
                heading: 'deltic',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/deltic.jpg',
            },
            {
                heading: 'osm',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/osm.jpg',
            },
            {
                heading: 'bajaj',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/bajaj.jpg',
            },
            {
                heading: 'sml-isuzu',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/sml-isuzu.jpg',
            },
            {
                heading: 'toyota',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/toyota.jpg',
            },
        ],
        '3 Wheeler': [

            {
                heading: 'mahindra',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/mahindra.jpg',
            },
            {
                heading: 'piaggio',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/piaggio.jpg',
            },
            {
                heading: 'altigreen',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/altigreen.jpg',
            },
            {
                heading: 'deltic',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/deltic.jpg',
            },
            {
                heading: 'Ashok Leyland',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/ashok-leyland.jpg',
            },
            {
                heading: 'tata',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/tata.jpg',
            },
            {
                heading: 'eicher',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/eicher.jpg',
            },
            {
                heading: 'bharat-benz',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/bharat-benz.jpg',
            },



            {
                heading: 'osm',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/osm.jpg',
            },
            {
                heading: 'bajaj',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/bajaj.jpg',
            },
            {
                heading: 'sml-isuzu',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/sml-isuzu.jpg',
            },
            {
                heading: 'toyota',
                image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/toyota.jpg',
            },
        ],
    };
    const fueltype = [
        {
            name: "Diesel",
            image: <BsFuelPumpDiesel className='h-20 w-full rounded-t-md p-1 object-contain' />
        },
        {
            name: "Electric",
            image: <PiPlugChargingLight className='h-20 w-full rounded-t-md p-1 object-contain' />
        },
        {
            name: "Petrol",
            image: <img src='https://cdn-icons-png.flaticon.com/512/10466/10466005.png' className='h-20 w-full rounded-t-md p-1 object-contain' />
        },
        {
            name: "CNG",
            image: <SlFire className='h-20 w-full rounded-t-md p-1 object-contain' />
        },
        {
            name: "Hydrogen",
            image: <img src={'https://cdn-icons-png.flaticon.com/512/3274/3274111.png'} className='h-20 w-full rounded-t-md p-1 object-contain' />
        },
        {
            name: "LPG",
            image: <img src={'https://cdn-icons-png.flaticon.com/512/4459/4459019.png'} className='h-20 w-full rounded-t-md p-1 object-contain' />
        },
        {
            name: "LNG",
            image: <img src={'https://cdn-icons-png.flaticon.com/512/5830/5830031.png'} className='h-20 w-full rounded-t-md p-1 object-contain' />
        }
    ]

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

    const tabData = [
        { title: 'What is the cost of new truck in India?', content: 'The price range of the latest truck Komaki CAT 3.0 NXT is starting at Rs ₹1.20 Lakh In India.' },
        { title: 'What are the new Trucks in 2024 ?', content: 'The new trucks in India are Tata Prima 4040.K, I-BOARD Tipper Elecy V3525, I-BOARD Long Haulage TT 5520, I-BOARD REX 5525 and I-BOARD Ductor 5525.' },
        { title: 'What are the best trucks to buy in 2024 ?', content: 'The best trucks to buy are Tata 407 Gold SFC, Eicher Pro 2049, Eicher Pro 3015, Tata 1512 LPT and Eicher Pro 3019 In India with starting price Rs ₹1.20 Lakh' },
        { title: 'What are the latest truck brands in India?', content: 'New truck brands in India are Tata, I-BOARD, Force, Isuzu and Mahindra.' },
    ];
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
                <div className="absolute max-w-7xl m-auto inset-0 flex items-center overflow-hidden ">
                    {/* Red Semi-Transparent Circle */}
                    <div className="relative  lg:ml-[50px] flex items-center justify-center lg:w-[600px] lg:h-[600px] w-[350px] lg:bottom-20 h-[350px] bg-[#d94025] bg-opacity-[.8] rounded-full ">

                    </div>
                </div>

            </div>
            <div className='absolute inset-0  lg:top-[32px] space-y-10 max-w-7xl p-4 m-auto'>

                <div className="  lg:text-[48px] text-2xl px-7 text-white font-bold left-0">
                    Want To Earn More?
                    <span className="hidden lg:block"> <br /> Check Out A New Truck</span>
                    <span className="lg:hidden inline-flex"> Check Out A New Truck</span>
                </div>
                <div className="lg:block hidden text-[14px]  lg:w-fit  font-bold left-0 ">

                    <div className="flex border-b w-fit">
                        {['brand', 'body', 'budget', 'fuel', 'tonnage'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab as typeof currentTab)}
                                // onClick={() => setCurrentTab(tab as typeof currentTab)}
                                className={`flex-1 text-center rounded-t-md   ${['brand', 'body', 'budget', 'fuel', 'tonnage'].length - 1 && currentTab === tab ? 'mx-1' : 'mx-1 '} lg:w-[112px] w-[80px] ${currentTab === tab ? 'bg-white p-2  text-black ' : 'text-white bg-[#d94025]'}`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                    <div className='lg:w-full'>
                        {renderDropdown()}
                    </div>
                </div>


            </div>

            <div className='max-w-7xl relative m-auto'>
                <div className="lg:absolute sm:p-4 overflow-auto no-scrollbar lg:hidden block mt-[-15%] sm:overflow-visible text-[14px]  lg:w-fit  font-bold left-0 ">

                    <div className="flex border-b w-fit">
                        {['brand', 'body', 'budget', 'fuel', 'tonnage'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab as typeof currentTab)}
                                // onClick={() => setCurrentTab(tab as typeof currentTab)}
                                className={`flex-1 text-center rounded-t-md   ${['brand', 'body', 'budget', 'fuel', 'tonnage'].length - 1 && currentTab === tab ? 'mx-1' : 'mx-1 '} lg:w-[112px] w-[80px] ${currentTab === tab ? 'bg-white p-2  text-black ' : 'text-white bg-[#d94025]'}`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                    <div className='lg:w-full'>
                        {renderDropdown()}
                    </div>
                </div>

                <Image
                    width={0}
                    height={20}
                    sizes="100vw"
                    className="object-none  w-full "
                    src={'https://tpc.googlesyndication.com/simgad/2186141005922165001'} alt='' />


            </div>
            <hr />
            <div className='max-w-7xl m-auto relative'>
                <Breadcrumbs items={breadcrumbItems} />
                <h2 className='p-[17px 20px 0px] text-xl font-bold mb-5 '>
                    New Trucks
                </h2>
                <div className='border rounded-[16px]  mb-3 flex flex-col p-4 bg-white gap-2  '>
                    <p className='text-[15px] text-[rgba(36,39,44,.7)]'>TrucksDekho brings a complete range of new trucks in India in 2024. You can search trucks by applying filters such as price, bodytype, Number of tyres, GVW, fuel & more. Also, compare trucks & stay tuned with our latest news.</p>

                    <ToggleTable
                        title="New Trucks Price In India"
                        columns={["Model", "Price"]}
                        data={trucksData}
                    />

                </div>

                <div className='border rounded-[16px]  mb-3 flex flex-col  bg-white gap-2  '>
                    <h2 className='p-[17px 20px 0px] p-4 text-xl font-bold '>
                        All Truck Brands In India
                    </h2>
                    <TabComponent
                        tabs={['new trucks', '3 Wheeler']}
                        tabContent={{
                            'new trucks': (
                                <div className='grid lg:grid-cols-6 grid-cols-3'>
                                    {getDisplayData('new trucks').map((item, index) => (
                                        <div key={index} className="lg:p-1">
                                            <div key={index} className="bg-white border rounded-lg shadow-md text-center ">
                                                <Image
                                                    data-autofit="true"
                                                    decoding="async"
                                                    alt={item?.heading}
                                                    className="h-20 w-full rounded-t-md object-contain"
                                                    src={item.image}
                                                    loading="eager"
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    quality={75}
                                                />
                                                <h2 className="sm:text-md font-lite text-center line-clamp-1 overflow-hidden text-ellipsis">
                                                    {item.heading}
                                                </h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ),
                            '3 Wheeler': (
                                <div className='grid lg:grid-cols-6 grid-cols-3'>
                                    {getDisplayData('3 Wheeler').map((item, index) => (
                                        <div key={index} className="lg:p-1">
                                            <div key={index} className="bg-white border rounded-lg shadow-md text-center ">
                                                <Image
                                                    data-autofit="true"
                                                    decoding="async"
                                                    alt={item?.heading}
                                                    className="h-20 w-full rounded-t-md object-contain"
                                                    src={item.image}
                                                    loading="eager"
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    quality={75}
                                                />
                                                <h2 className="sm:text-md font-lite text-center line-clamp-1 overflow-hidden text-ellipsis">
                                                    {item.heading}
                                                </h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ),
                        }}
                    />
                    <div
                        onClick={handleToggle}
                        className="inline-flex p-4 items-baseline  cursor-pointer"
                    >
                        <span className="mr-2 text-[#d94025] text-[14px] font-bold">{showMore ? 'Show Less' : 'Show More'}</span>

                        <div className="relative w-5 h-5 bg-[#d94025] rounded-full flex justify-center items-center">
                            <FaAngleRight className="w-5 h-3 fill-white" />
                        </div>
                    </div>
                </div>
                <div className='border rounded-[16px]  mb-3 flex flex-col bg-white   relative'>
                    <PopulerModel />
                </div>

                <div className='border rounded-[16px]  mb-3 flex flex-col bg-white   relative'>
                    <LatestModel />
                </div>
                <div className='border rounded-[16px]  mb-3 flex flex-col bg-white   relative'>
                    <BudgetModel />
                </div>
                <div className='border rounded-[16px]  mb-3 flex flex-col bg-white   relative'>
                    <h2 className='  px-4 pt-4 text-xl font-bold '>
                        Search New Truck By Fuel Type
                    </h2>
                    <div className='lg:grid lg:grid-cols-6 p-4 gap-2 flex  overflow-auto no-scrollbar '>
                        {fueltype.map((item, index) => {
                            return (
                                <div key={index} className="m-auto w-full h-full border rounded-lg ">
                                    <div key={index} className="p-4 shadow-md text-center ">
                                        <span className="">
                                            {item.image}
                                        </span>
                                        <p className="sm:text-md font-lite text-center line-clamp-1 overflow-hidden text-ellipsis">
                                            {item.name}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='border rounded-[16px]  mb-3 flex flex-col bg-white   relative'>
                    <CompareModel />
                </div>
                <div className='border rounded-[16px] p-4 mb-3 flex flex-col  bg-white gap-2  relative'>
                    <h2 className='p-[17px 20px 0px]  text-xl font-bold '>
                        Tools & Services
                    </h2>
                    <ToolsCard data={toolsArray} />
                </div>

                <div className='border rounded-[16px] p-4 mb-3 flex flex-col  bg-white gap-2  relative'>
                    <h2 className='p-[17px 20px 0px]  text-xl font-bold '>
                        Frequently Asked Question on New Trucks
                    </h2>
                    <CollabseContent tabContent={tabData} />
                </div>

            </div>
        </div>
    )
}

export default Page;