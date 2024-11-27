'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { SelectChangeEvent } from '@mui/material';
import Dropdown from '@/app/comman/dorpdown';
import Breadcrumbs from '@/app/comman/breadCrumbs';
import { GenerateBreadcrumbs } from '@/app/comman/commanFunctions';
import ToggleTable from '@/app/comman/toggleTable';
interface OptionType {
    value?: string;
    label: string;
    isHeader?: boolean;
}
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
    const truckData = [
        { Model: "Force Urbania", Price: "₹30.51 - ₹37.21 Lakh" },
        { Model: "Isuzu D-MAX", Price: "₹8.32 - ₹8.36 Lakh" },
        { Model: "Tata Magic Express Bi Fuel", Price: "From ₹7.62 Lakh" },
        { Model: "Tata Magic Mantra Bi Fuel", Price: "From ₹7.01 Lakh" },
        { Model: "Isuzu V-Cross", Price: "₹19.98 - ₹30.96 Lakh" },
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
                <div className="absolute inset-0 flex items-center overflow-hidden ">
                    {/* Red Semi-Transparent Circle */}
                    <div className="relative lg:ml-[101px] flex items-center justify-center lg:w-[600px] lg:h-[600px] w-[350px] lg:bottom-20 h-[350px] bg-[#d94025] bg-opacity-[.8] rounded-full ">

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
                <div className="lg:absolute p-4 lg:hidden block mt-[-15%] overflow-visible text-[14px]  lg:w-fit  font-bold left-0 ">

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
            <div className='max-w-7xl m-auto'>
                <Breadcrumbs items={breadcrumbItems} />
                <h2 className='p-[17px 20px 0px] text-xl font-bold mb-5 '>
                    New Trucks
                </h2>
                <div className='border rounded-[16px]  mb-3 flex flex-col p-4 bg-white gap-2  '>
                    <p className='text-[15px] text-[rgba(36,39,44,.7)]'>TrucksDekho brings a complete range of new trucks in India in 2024. You can search trucks by applying filters such as price, bodytype, Number of tyres, GVW, fuel & more. Also, compare trucks & stay tuned with our latest news.</p>

                    <ToggleTable
                        title="New Trucks Price In India"
                        columns={["Model", "Price"]}
                        data={truckData}
                    />

                </div>

                <div className='border rounded-[16px]  mb-3 flex flex-col p-4 bg-white gap-2  '>
                    <h2 className='p-[17px 20px 0px] text-xl font-bold mb-5 '>
                        All Truck Brands In India
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Page;