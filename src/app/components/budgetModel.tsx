'use client'
import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa';
import CardFormate1 from './cardFormate1';
// Define the structure of a slider item
interface SliderItem {
    id: number;
    name: string;
    price: string;
    offer?: string;
    budget?: Array<{ label: string; value: string }>;
    imageUrl: string;
    isElectric?: boolean;
}

// Define the structure of sliderData
interface SliderData {
    'Under 5 Lakh': SliderItem[];
    'Under 10 Lakh': SliderItem[];
    'Under 15 Lakh': SliderItem[];
    'Under 20 Lakh': SliderItem[];
    'Under 30 Lakh': SliderItem[];
    'Under 40 Lakh': SliderItem[];
    'Above 40 Lakh': SliderItem[];
}


const BudgetModel = () => {
    const [currentTab, setCurrentTab] = useState<'Under 10 Lakh' | 'Under 5 Lakh' | 'Under 15 Lakh' | 'Under 20 Lakh' | 'Under 30 Lakh' | 'Under 40 Lakh' | 'Above 40 Lakh'>('Under 5 Lakh');
    const handleTabChange = (tab: typeof currentTab) => {
        setCurrentTab(tab);
    }
    const sliderData: SliderData = {
        'Under 5 Lakh': [
            {
                id: 1,
                name: "Tata Ace gold",
                price: "₹3.99 - ₹6.69 Lakh*",
                budget: [
                    { label: "Power", value: "17.3 kW" },
                    { label: "GVW", value: "1450" },
                    { label: "Mileage", value: "21.2" },
                    { label: "Fuel Tank", value: "20" },
                    { label: "Payload", value: "715" },
                    { label: "Fuel Type", value: "Petrol" },
                ],
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/ace-gold/tata-ace-gold-21473.jpg",
            },
            {
                id: 2,
                name: "Mahindra Jeeto",
                price: "₹4.72 - ₹5.65 Lakh*",
                budget: [
                    { label: "Power", value: "17.3 kW" },
                    { label: "GVW", value: "1450" },
                    { label: "Mileage", value: "21.2" },
                    { label: "Fuel Tank", value: "20" },
                    { label: "Payload", value: "715" },
                    { label: "Fuel Type", value: "Petrol" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/mahindra/jeeto/mahindra-jeeto-65562.jpg", // Replace with actual URL
            },
            {
                id: 3,
                name: "Bajaj RE",
                price: "₹2.34 - ₹2.36 Lakh*",
                budget: [
                    { label: "Power", value: "8 kW" },
                    { label: "GVW", value: "673" },
                    { label: "Mileage", value: "40" },
                    { label: "Engine", value: "236.2" },
                    { label: "Fuel Tank", value: "8" },
                    { label: "Fuel Type", value: "Petrol" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/bajaj/compact-4s/bajaj-compact-4s-48935.jpg", // Replace with actual URL
            },
            {
                id: 4,
                name: "Piaggio Ape E City",
                price: "From ₹1.95 Lakh*",
                budget: [
                    { label: "Power", value: "7.3 Hp" },
                    { label: "GVW", value: "689" },
                    { label: "Fuel Type", value: "Electric" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/piaggio/ape-e-city/piaggio-ape-e-city.jpg", // Replace with actual URL
                isElectric: true
            },
            {
                id: 5,
                name: "Piaggio Ape Xtra LDX",
                price: "₹2.45 - ₹2.48 Lakh*",
                budget: [
                    { label: "Power", value: "9.4 hp" },
                    { label: "GVW", value: "975" },
                    { label: "Mileage", value: "22" },
                    { label: "Engine", value: "599" },
                    { label: "Fuel Tank", value: "10.5" },
                    { label: "Payload", value: "496" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/piaggio/ape-xtra-ldx-bs6/piaggio-ape-xtra-ldx-bs6-71253.jpg", // Replace with actual URL
            },

        ],
        'Under 10 Lakh': [
            {
                id: 1,
                name: "Tata Ace Gold",
                price: "₹3.99 - ₹6.69 Lakh*",
                budget: [
                    { label: "Power", value: "24 hp" },
                    { label: "GVW", value: "1510" },
                    { label: "Mileage", value: "15" },
                    { label: "Engine", value: "694" },
                    { label: "Fuel Tank", value: "26" },
                    { label: "Payload", value: "710" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/tata/ace-gold/tata-ace-gold-21473.jpg", // Replace with actual image URL
            },
            {
                id: 2,
                name: "Mahindra Jeeto",
                price: "₹4.72 - ₹5.65 Lakh*",
                budget: [
                    { label: "Power", value: "17.3 kW" },
                    { label: "GVW", value: "1450" },
                    { label: "Mileage", value: "21.2" },
                    { label: "Fuel Tank", value: "20" },
                    { label: "Payload", value: "715" },
                    { label: "Fuel Type", value: "Petrol" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/mahindra/jeeto/mahindra-jeeto-65562.jpg", // Replace with actual image URL
            },
            {
                id: 3,
                name: "Maruti Suzuki Super Carry",
                price: "₹5.26 - ₹6.41 Lakh*",
                budget: [
                    { label: "Power", value: "79 Hp" },
                    { label: "GVW", value: "1600" },
                    { label: "Mileage", value: "18" },
                    { label: "Engine", value: "1197" },
                    { label: "Fuel Tank", value: "30" },
                    { label: "Fuel Type", value: "Petrol" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/maruti-suzuki/super-carry/maruti-suzuki-super-carry-88671.jpg", // Replace with actual image URL
            },
            {
                id: 4,
                name: "Tata Intra V10",
                price: "₹6.55 - ₹6.76 Lakh*",
                budget: [
                    { label: "Power", value: "44 hp" },
                    { label: "GVW", value: "2120" },
                    { label: "Mileage", value: "17" },
                    { label: "Engine", value: "798" },
                    { label: "Fuel Tank", value: "30" },
                    { label: "Payload", value: "1000" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/tata/intra-v10/tata-intra-v10-18816.jpg", // Replace with actual image URL
            },
            {
                id: 5,
                name: "Tata Intra V30",
                price: "₹7.30 - ₹7.62 Lakh*",
                budget: [
                    { label: "Power", value: "69 hp" },
                    { label: "GVW", value: "2565" },
                    { label: "Mileage", value: "14" },
                    { label: "Engine", value: "1496" },
                    { label: "Fuel Tank", value: "35" },
                    { label: "Payload", value: "1300" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/tata/intra-v30-bs6/tata-intra-v30-bs6-67228.jpg", // Replace with actual image URL
            },
        ],
        'Under 15 Lakh': [
            {
                id: 1,
                name: "Tata 407 Gold SFC",
                price: "₹10.75 - ₹13.26 Lakh*",
                budget: [
                    { label: "Power", value: "100 hp" },
                    { label: "GVW", value: "4650" },
                    { label: "Mileage", value: "10" },
                    { label: "Engine", value: "2956" },
                    { label: "Fuel Tank", value: "60" },
                    { label: "Payload", value: "2267" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/tata/407-gold-sfc/tata-407-gold-sfc-15836.jpg", // Replace with actual image URL
            },
            {
                id: 2,
                name: "Eicher Pro 2049",
                price: "From ₹12.16 Lakh*",
                budget: [
                    { label: "Power", value: "100 hp" },
                    { label: "GVW", value: "4995" },
                    { label: "Mileage", value: "11" },
                    { label: "Fuel Tank", value: "60" },
                    { label: "Payload", value: "3500" },
                    { label: "Fuel Type", value: "Diesel" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/eicher/pro-2049/eicher-pro-2049-47454.jpg", // Replace with actual image URL
            },
            {
                id: 3,
                name: "Tata Yodha Pickup",
                price: "₹8.51 - ₹10.71 Lakh*",
                budget: [
                    { label: "Power", value: "100 hp" },
                    { label: "GVW", value: "2990" },
                    { label: "Mileage", value: "14" },
                    { label: "Engine", value: "2200" },
                    { label: "Fuel Tank", value: "52" },
                    { label: "Payload", value: "1230" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/tata/yodha/tata-yodha-46306.jpg", // Replace with actual image URL
            },
            {
                id: 4,
                name: "Tata 709g LPT",
                price: "₹14.26 - ₹15.73 Lakh*",
                budget: [
                    { label: "Power", value: "85 HP" },
                    { label: "GVW", value: "7490" },
                    { label: "Mileage", value: "9" },
                    { label: "Engine", value: "3783" },
                    { label: "Fuel Tank", value: "300" },
                    { label: "Payload", value: "4500" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/tata/lpt-709-ex2/tata-lpt-709-ex2-41228.jpg", // Replace with actual image URL
            },
            {
                id: 5,
                name: "Ashok Leyland Partner 6 Tyre",
                price: "₹13.85 - ₹14.99 Lakh*",
                budget: [
                    { label: "Power", value: "140 HP" },
                    { label: "GVW", value: "7490" },
                    { label: "Mileage", value: "8.5" },
                    { label: "Engine", value: "2953" },
                    { label: "Fuel Tank", value: "90" },
                    { label: "Payload", value: "4579" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/ashok-leyland/partner-6-tyre/ashok-leyland-partner-6-tyre-15860.jpg", // Replace with actual image URL
            },
        ],
        'Under 20 Lakh': [
            {
                id: 1,
                name: "Tata 709g LPT",
                price: "₹14.26 - ₹15.73 Lakh*",
                budget: [
                    { label: "Power", value: "85 HP" },
                    { label: "GVW", value: "7490" },
                    { label: "Mileage", value: "9" },
                    { label: "Engine", value: "3783" },
                    { label: "Fuel Tank", value: "300" },
                    { label: "Payload", value: "4500" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/tata/lpt-709-ex2/tata-lpt-709-ex2-41228.jpg", // Replace with actual image URL
            },
            {
                id: 2,
                name: "Tata 1109g LPT",
                price: "₹17.81 - ₹19.44 Lakh*",
                budget: [
                    { label: "Power", value: "114 Hp" },
                    { label: "GVW", value: "11250" },
                    { label: "Mileage", value: "7.5" },
                    { label: "Engine", value: "3783" },
                    { label: "Fuel Tank", value: "300/430" },
                    { label: "Payload", value: "6500" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/tata/1109-g-lpt/tata-1109-g-lpt-77629.jpg", // Replace with actual image URL
            },
            {
                id: 3,
                name: "Tata 912 LPK",
                price: "₹18.64 - ₹20.42 Lakh*",
                budget: [
                    { label: "Power", value: "125 hp" },
                    { label: "GVW", value: "9600" },
                    { label: "Mileage", value: "7" },
                    { label: "Engine", value: "3300" },
                    { label: "Fuel Tank", value: "90" },
                    { label: "Payload", value: "6300" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/tata/lpk-912/tata-lpk-912-48146.jpg", // Replace with actual image URL
            },
            {
                id: 4,
                name: "Eicher Pro 2059",
                price: "₹15.56 - ₹17.01 Lakh*",
                budget: [
                    { label: "Power", value: "100 hp" },
                    { label: "GVW", value: "6950" },
                    { label: "Mileage", value: "10" },
                    { label: "Engine", value: "1980" },
                    { label: "Fuel Tank", value: "60" },
                    { label: "Fuel Type", value: "Diesel" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/eicher/pro-2059/eicher-pro-2059-11989.jpg", // Replace with actual image URL
            },
            {
                id: 5,
                name: "Tata 712 LPT",
                price: "₹15.70 - ₹18.41 Lakh*",
                budget: [
                    { label: "Power", value: "125 hp" },
                    { label: "GVW", value: "7490" },
                    { label: "Mileage", value: "9" },
                    { label: "Engine", value: "3300" },
                    { label: "Fuel Tank", value: "120" },
                    { label: "Payload", value: "3800" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/tata/712-lpt/tata-712-lpt-18395.jpg", // Replace with actual image URL
            },
        ],
        'Under 30 Lakh': [
            {
                id: 1,
                name: "Eicher Pro 3015",
                price: "₹21.00 - ₹29.80 Lakh*",
                budget: [
                    { label: "Power", value: "160 hp" },
                    { label: "GVW", value: "16371" },
                    { label: "Mileage", value: "6" },
                    { label: "Engine", value: "3800" },
                    { label: "Fuel Tank", value: "190" },
                    { label: "Payload", value: "10572" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/eicher/pro-3015/eicher-pro-3015-65791.jpg", // Replace with actual image URL
            },
            {
                id: 2,
                name: "Tata 1512 LPT",
                price: "₹23.46 - ₹23.54 Lakh*",
                budget: [
                    { label: "Power", value: "167 hp" },
                    { label: "GVW", value: "16020" },
                    { label: "Mileage", value: "6.5" },
                    { label: "Engine", value: "3300" },
                    { label: "Fuel Tank", value: "160" },
                    { label: "Payload", value: "10550" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/tata/1512-lpt/tata-1512-lpt-84331.jpg", // Replace with actual image URL
            },
            {
                id: 3,
                name: "Eicher Pro 3019",
                price: "₹25.15 - ₹28.17 Lakh*",
                budget: [
                    { label: "Power", value: "180 hp" },
                    { label: "GVW", value: "18500" },
                    { label: "Mileage", value: "6.5" },
                    { label: "Engine", value: "3800" },
                    { label: "Fuel Tank", value: "190" },
                    { label: "Payload", value: "11000" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/eicher/pro-3019/eicher-pro-3019-48551.jpg", // Replace with actual image URL
            },
            {
                id: 4,
                name: "Tata Signa 1923.K",
                price: "From ₹28.91 Lakh*",
                budget: [
                    { label: "Power", value: "220 Hp" },
                    { label: "GVW", value: "18500" },
                    { label: "Mileage", value: "3.5-4.5" },
                    { label: "Engine", value: "5635" },
                    { label: "Fuel Tank", value: "300" },
                    { label: "Payload", value: "10000" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-1923-k/tata-signa-1923-k-27351.jpg", // Replace with actual image URL
            },
            {
                id: 5,
                name: "Tata Signa 4018.S",
                price: "From ₹29.89 Lakh*",
                budget: [
                    { label: "Power", value: "186 Hp" },
                    { label: "GVW", value: "39500" },
                    { label: "Mileage", value: "3.5" },
                    { label: "Engine", value: "5600" },
                    { label: "Fuel Tank", value: "365" },
                    { label: "Payload", value: "27000" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-4018s/tata-signa-4018s-80967.jpg", // Replace with actual image URL
            },
        ],
        'Under 40 Lakh': [
            {
                id: 1,
                name: "Force Urbania",
                price: "₹30.51 - ₹37.21 Lakh*",
                budget: [
                    { label: "Power", value: "114 Hp" },
                    { label: "GVW", value: "4135" },
                    { label: "Mileage", value: "11" },
                    { label: "Engine", value: "2596" },
                    { label: "Fuel Tank", value: "70" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/force/urbania/force-urbania.jpg", // Replace with actual image URL
            },
            {
                id: 2,
                name: "Ashok Leyland AVTR 2820-6x4",
                price: "From ₹34.50 Lakh*",
                budget: [
                    { label: "Power", value: "200 hp" },
                    { label: "GVW", value: "28000" },
                    { label: "Mileage", value: "4" },
                    { label: "Engine", value: "5660" },
                    { label: "Fuel Tank", value: "300" },
                    { label: "Payload", value: "17500" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/ashok-leyland/2820-tipper/ashok-leyland-2820-tipper-70163.jpg", // Replace with actual image URL
            },
            {
                id: 3,
                name: "Tata Signa 5530.S",
                price: "From ₹39.03 Lakh*",
                budget: [
                    { label: "Power", value: "300 hp" },
                    { label: "GVW", value: "55000" },
                    { label: "Mileage", value: "2.25-3.25" },
                    { label: "Engine", value: "6700" },
                    { label: "Fuel Tank", value: "365" },
                    { label: "Payload", value: "40000" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-5523s/tata-signa-5523s-51689.jpg", // Replace with actual image URL
            },
            {
                id: 4,
                name: "BharatBenz 1917R",
                price: "₹28.35 - ₹30.61 Lakh*",
                budget: [
                    { label: "Power", value: "170 Hp" },
                    { label: "GVW", value: "18500" },
                    { label: "Mileage", value: "6.5" },
                    { label: "Engine", value: "3900" },
                    { label: "Fuel Tank", value: "215/380" },
                    { label: "Payload", value: "10886" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/1917r/bharat-benz-1917r.jpg", // Replace with actual image URL
            },
            {
                id: 5,
                name: "Eicher Pro 3018",
                price: "₹28.50 - ₹31.20 Lakh*",
                budget: [
                    { label: "Power", value: "160 Hp" },
                    { label: "GVW", value: "17750" },
                    { label: "Mileage", value: "6.8" },
                    { label: "Engine", value: "3760" },
                    { label: "Fuel Tank", value: "190" },
                    { label: "Payload", value: "12200" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/eicher/pro-3018/eicher-pro-3018.jpg", // Replace with actual image URL
            },
        ],
        'Above 40 Lakh': [
            {
                id: 1,
                name: "Tata Signa 3523.TK",
                price: "From ₹49.23 Lakh*",
                budget: [
                    { label: "Power", value: "220 Hp" },
                    { label: "GVW", value: "35000" },
                    { label: "Mileage", value: "2.5-3.5" },
                    { label: "Engine", value: "5635" },
                    { label: "Fuel Tank", value: "300" },
                    { label: "Payload", value: "26000" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-3523-tk/tata-signa-3523-tk-98522.jpg", // Replace with actual image URL
            },
            {
                id: 2,
                name: "Tata Signa 4825.TK",
                price: "₹53.21 - ₹63.72 Lakh*",
                budget: [
                    { label: "Power", value: "250 hp" },
                    { label: "GVW", value: "47500" },
                    { label: "Mileage", value: "3" },
                    { label: "Engine", value: "6692" },
                    { label: "Fuel Tank", value: "300" },
                    { label: "Payload", value: "38000" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-4825-tk/tata-signa-4825-tk-11573.jpg", // Replace with actual image URL
            },
            {
                id: 3,
                name: "BharatBenz 3528C",
                price: "₹52.97 - ₹60.60 Lakh*",
                budget: [
                    { label: "Power", value: "280 Hp" },
                    { label: "GVW", value: "35000" },
                    { label: "Mileage", value: "2.25-3.25" },
                    { label: "Engine", value: "7200" },
                    { label: "Fuel Tank", value: "215" },
                    { label: "Payload", value: "20600" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/3528c-bs6/bharat-benz-3528c-bs6-64528.jpg", // Replace with actual image URL
            },
            {
                id: 4,
                name: "Ashok Leyland 5525 6x4",
                price: "From ₹44.50 Lakh*",
                budget: [
                    { label: "Power", value: "246 hp" },
                    { label: "GVW", value: "55000" },
                    { label: "Mileage", value: "4" },
                    { label: "Engine", value: "5300" },
                    { label: "Fuel Tank", value: "375" },
                    { label: "Fuel Type", value: "Diesel" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/ashok-leyland/5525/ashok-leyland-5525-57696.jpg", // Replace with actual image URL
            },
            {
                id: 5,
                name: "Tata Prima FL 5530.S",
                price: "From ₹40.32 Lakh*",
                budget: [
                    { label: "Power", value: "300 hp" },
                    { label: "GVW", value: "55000" },
                    { label: "Mileage", value: "2.25-3.25" },
                    { label: "Engine", value: "6700" },
                    { label: "Fuel Tank", value: "557" },
                    { label: "Payload", value: "40000" },
                ],
                imageUrl: "https://truckcdn.cardekho.com/in/ashok-leyland/5525/ashok-leyland-5525-57696.jpg", // Replace with actual image URL
            },
        ]
    }
    // Map currentTab values to valid keys in sliderData
    const tabToKeyMap: Record<
        typeof currentTab,
        keyof SliderData
    > = {
        'Under 5 Lakh': 'Under 5 Lakh',
        'Under 10 Lakh': 'Under 10 Lakh',
        'Under 15 Lakh': 'Under 15 Lakh',
        'Under 20 Lakh': 'Under 20 Lakh',
        'Under 30 Lakh': 'Under 30 Lakh',
        'Under 40 Lakh': 'Under 40 Lakh',
        'Above 40 Lakh': 'Above 40 Lakh',
    };
    const renderSlider = (activeTag: typeof currentTab) => {

        const sliderKey = tabToKeyMap[activeTag];
        const sliderItems = sliderData[sliderKey];

        return (
            <>
                <CardFormate1 data={sliderItems} />
            </>
        )
    }
    return (
        <>
            <h2 className='  px-4 pt-4 text-xl font-bold '>
                Popular Truck By Budget
            </h2>
            <div className='flex border-b   overflow-auto no-scrollbar'>
                {['Under 5 Lakh', 'Under 10 Lakh', 'Under 15 Lakh', 'Under 20 Lakh', 'Under 30 Lakh', 'Under 40 Lakh', 'Above 40 Lakh'].map((tab) => (
                    <span
                        key={tab}
                        onClick={() => handleTabChange(tab as typeof currentTab)}
                        className={`flex-shrink-0 ml-4 mr-4 max-w-fit hover:text-[#24272c] text-[14px] text-center py-2 ${currentTab === tab ? 'border-b-4  border-[#d94025] font-bold' : 'text-gray-400 '
                            }`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </span>
                ))}
            </div>
            {renderSlider(currentTab)}
            <div className='inline-flex  items-baseline pb-4 pl-4 pr-4'>
                <span className='mr-2 text-[#d94025] text-[14px] font-bold'>View All Populer Trucks</span>
                <div className="relative w-5 h-5 mt-4 bg-[#d94025] rounded-full flex justify-center items-center" >
                    <FaAngleRight className="w-5 h-3 left-[-1px] mr-0  fill-white" />
                </div>
            </div>
            <div className=' text-[10px] items-baseline py-1 rounded-b-lg bg-[#f1f1f1] px-4'>
                Ex-showroom price
            </div>
        </>
    )
}

export default BudgetModel;