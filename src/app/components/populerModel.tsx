'use client'
import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa';
import CardFormate1 from './cardFormate1';
// Define the structure of a slider item
interface SliderItem {
    id: number;
    name: string;
    price: string;
    offer: string;
    imageUrl: string;
    isElectric?: boolean;
}

// Define the structure of sliderData
interface SliderData {
    default: SliderItem[];
    'pickup trucks': SliderItem[];
    'trucks': SliderItem[];
    'mini trucks': SliderItem[];
    'tippers': SliderItem[];
    '3 wheeler': SliderItem[];
    'auto rickshaw': SliderItem[];
    'e rickshaw': SliderItem[];
    'trailers': SliderItem[];
}


const PopulerModel = () => {
    const [currentTab, setCurrentTab] = useState<'trucks' | 'pickup trucks' | 'mini trucks' | 'tippers' | 'trailers' | '3 wheeler' | 'transit mixer' | 'auto rickshaw' | 'e rickshaw'>('trucks');
    const handleTabChange = (tab: typeof currentTab) => {
        setCurrentTab(tab);
    }
    const sliderData: SliderData = {
        default: [

            {
                id: 2,
                name: "Ashok Leyland AVTR 3525-8x4 RMC",
                price: "From ₹55.50 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/ashok-leyland/3525-rmc/ashok-leyland-3525-rmc-67761.jpg",
            },
        ],
        'pickup trucks': [
            {
                id: 1,
                name: "Force Urbania",
                price: "₹30.51 - ₹37.21 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/force/urbania/force-urbania.jpg",
            },
            {
                id: 2,
                name: "Ashok Leyland Dost +",
                price: "₹7.75 - ₹8.25 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/ashok-leyland/dost/ashok-leyland-dost-59041.jpg",
            },
            {
                id: 3,
                name: "Mahindra Supro Profit Truck Mini",
                price: "₹6.12 - ₹7.15 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/mahindra/supro-minitruck/mahindra-supro-minitruck-29980.jpg",
            },
            {
                id: 4,
                name: "Tata Yodha Pickup",
                price: "₹8.51 - ₹10.71 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/yodha/tata-yodha-46306.jpg",
            },
            {
                id: 5,
                name: "Mahindra Supro Profit Truck Maxi",
                price: "₹7.13 - ₹7.73 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/mahindra/supro-maxitruck/mahindra-supro-maxitruck-62845.jpg",
            },
        ],
        'trucks': [
            {
                id: 1,
                name: "Tata 407 Gold SFC",
                price: "₹10.75 - ₹13.26 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/407-gold-sfc/tata-407-gold-sfc-15836.jpg",
            },
            {
                id: 2,
                name: "Eicher Pro 2049",
                price: "From ₹12.16 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/eicher/pro-2049/eicher-pro-2049-47454.jpg",

            },
            {
                id: 3,
                name: "Eicher Pro 3015",
                price: "₹21.00 - ₹29.80 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/eicher/pro-3015/eicher-pro-3015-65791.jpg",

            },
            {
                id: 4,
                name: "Tata 1512 LPT",
                price: "₹23.46 - ₹23.54 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/1512-lpt/tata-1512-lpt-84331.jpg",
            },
            {
                id: 5,
                name: "I-BOARD REX 5525",
                price: "₹41.30 - ₹43.90 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/eicher/pro-3019/eicher-pro-3019-48551.jpg",

            },
        ],
        'mini trucks': [
            {
                id: 1,
                name: "Mahindra Jeeto",
                price: "₹4.72 - ₹5.65 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/mahindra/jeeto/mahindra-jeeto-65562.jpg",

            },
            {
                id: 2,
                name: "Tata Ace gold",
                price: "₹3.99 - ₹6.69 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/ace-gold/tata-ace-gold-21473.jpg",
            },
            {
                id: 3,
                name: "Maruti Suzuki Super Carry",
                price: "₹5.26 - ₹6.41 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/maruti-suzuki/super-carry/maruti-suzuki-super-carry-88671.jpg",
            },
            {
                id: 3,
                name: "Tata Intra V10",
                price: "₹6.55 - ₹6.76 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/intra-v10/tata-intra-v10-18816.jpg",
            },
            {
                id: 4,
                name: "Tata Intra V30",
                price: "₹7.30 - ₹7.62 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/intra-v30-bs6/tata-intra-v30-bs6-67228.jpg",
            },
        ],
        'tippers': [
            {
                id: 1,
                name: "Ashok Leyland AVTR 2820-6x4",
                price: "From ₹34.50 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/ashok-leyland/2820-tipper/ashok-leyland-2820-tipper-70163.jpg",
            },
            {
                id: 2,
                name: "Tata Signa 3523.TK",
                price: "From ₹49.23 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/signa-3523-tk/tata-signa-3523-tk-98522.jpg",
            },
            {
                id: 3,
                name: "Tata Signa 1923.K",
                price: "From ₹28.91 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/signa-1923-k/tata-signa-1923-k-27351.jpg",
            },
            {
                id: 4,
                name: "Tata 912 LPK",
                price: "₹18.64 - ₹20.42 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/lpk-912/tata-lpk-912-48146.jpg",
            },
            {
                id: 5,
                name: "BharatBenz 1217C",
                price: "From ₹23.85 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/bharat-benz/1217c/bharat-benz-1217c-60162.jpg",
            },
        ],
        'trailers': [
            {
                id: 1,
                name: "Tata Signa 5530.S",
                price: "₹39.03 Lakh*",
                offer: "Get On Road Price",
                imageUrl: 'https://truckcdn.cardekho.com/in/tata/signa-5523s/tata-signa-5523s-51689.jpg'
            },
            {
                id: 2,
                name: "Tata Signa 4018.S",
                price: "₹29.89 Lakh*",
                offer: "Get On Road Price",
                imageUrl: 'https://truckcdn.cardekho.com/in/tata/signa-4018s/tata-signa-4018s-80967.jpg'
            },
            {
                id: 3,
                name: "Ashok Leyland 5525 6x4",
                price: "₹44.50 Lakh*",
                offer: "Get On Road Price",
                imageUrl: 'https://truckcdn.cardekho.com/in/ashok-leyland/5525/ashok-leyland-5525-57696.jpg'
            },
            {
                id: 4,
                name: "Tata Prima FL 5530.S",
                price: "₹40.32 Lakh*",
                offer: "Get On Road Price",
                imageUrl: 'https://truckcdn.cardekho.com/in/tata/prima-fl-5530-s-bs6/tata-prima-fl-5530-s-bs6-87989.jpg'
            },
            {
                id: 5,
                name: "Tata Signa 5525.S",
                price: "₹36.75 - ₹36.91 Lakh*",
                offer: "Get On Road Price",
                imageUrl: 'https://truckcdn.cardekho.com/in/tata/signa-5525s/tata-signa-5525s-46175.jpg'
            },
        ],
        '3 wheeler': [
            {
                id: 1,
                name: "Sahyatri E Cart",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/sahyatri/e-cart/sahyatri-e-cart.jpg",
                isElectric: true,
            },
            {
                id: 2,
                name: "City Cab Loader",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/city-cab/loader/city-cab-loader.jpg",
                isElectric: true,
            },
            {
                id: 3,
                name: "Triton Ev Loader",
                price: "",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/triton-ev/loader/triton-ev-loader.jpg",
                isElectric: true,
            },
            {
                id: 4,
                name: "Komaki CAT 3.0 NXT",
                price: "₹1.20 - ₹1.50 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/komaki/cat-3-0-nxt/komaki-cat-3-0-nxt.jpg",
                isElectric: true,
            },
            {
                id: 5,
                name: "Atul Energie",
                price: "",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/atul/atul-energie/atul-atul-energie.jpg",
                isElectric: true,
            },
        ],
        'auto rickshaw': [
            {
                id: 1,
                name: "Atul Mobili",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/atul/mobili/atul-mobili.jpg",
                isElectric: true,
            },
            {
                id: 2,
                name: "Mahindra ALFA DX DUO",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/mahindra/alfa-dx-duo/mahindra-alfa-dx-duo.jpg",

            },
            {
                id: 3,
                name: "Thukral Electric EA-2 Auto",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/thukral-electric/ea-2-auto/thukral-electric-ea-2-auto.jpg",
                isElectric: true,
            },
            {
                id: 4,
                name: "Sniper Electric L5 Passenger",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/sniper-electric/l5-passenger/sniper-electric-l5-passenger.jpg",
                isElectric: true,
            },
            {
                id: 5,
                name: "Mahindra e-Alfa Plus",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/mahindra/e-alfa-plus/mahindra-e-alfa-plus.jpg",
                isElectric: true,
            },
        ],
        'e rickshaw': [
            {
                id: 1,
                name: "Star Bull Stainless Steel Battery Operated E-rickshaw",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/star-bull/stainless-steel-battery-operated-e-rickshaw/star-bull-stainless-steel-battery-operated-e-rickshaw.jpg",
                isElectric: true,
            },
            {
                id: 2,
                name: "Sahyatri Sigma",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/sahyatri/sigma/sahyatri-sigma.jpg",
                isElectric: true,
            },
            {
                id: 3,
                name: "Star Bull Blue E Rickshaw",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/star-bull/blue-e-rickshaw/star-bull-blue-e-rickshaw.jpg",
                isElectric: true,
            },
            {
                id: 4,
                name: "Star Bull Battery Operated E Rickshaw",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/star-bull/battery-operated-e-rickshaw/star-bull-battery-operated-e-rickshaw.jpg",
                isElectric: true,
            },
            {
                id: 5,
                name: "Sahyatri Semi Steel Dlx",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/sahyatri/semi-steel-dlx/sahyatri-semi-steel-dlx.jpg",
                isElectric: true,
            },
        ]
    }
    // Map currentTab values to valid keys in sliderData
    const tabToKeyMap: Record<
        typeof currentTab,
        keyof SliderData
    > = {
        trucks: 'trucks',
        'pickup trucks': 'pickup trucks',
        'mini trucks': 'mini trucks',
        tippers: 'tippers',
        trailers: 'trailers',
        '3 wheeler': '3 wheeler',
        'transit mixer': 'default',
        'auto rickshaw': 'auto rickshaw',
        'e rickshaw': 'e rickshaw',
    };
    const renderSlider = (activeTag: typeof currentTab) => {

        const sliderKey = tabToKeyMap[activeTag];
        const sliderItems = sliderData[sliderKey] || sliderData.default;

        return (
            <>
                <CardFormate1 data={sliderItems} />
            </>
        )
    }
    return (
        <>
            <h2 className='  px-4 pt-4 text-xl font-bold '>
                Populer Models
            </h2>
            <div className='flex border-b   overflow-auto no-scrollbar'>
                {['trucks', 'pickup trucks', 'mini trucks', 'tippers', 'trailers', '3 wheeler', 'transit mixer', 'auto rickshaw', 'e rickshaw'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabChange(tab as typeof currentTab)}
                        className={`flex-shrink-0 ml-4 mr-4 max-w-fit hover:text-[#24272c] text-[14px] text-center py-2 ${currentTab === tab ? 'border-b-4  border-[#d94025] font-bold' : 'text-gray-400 '
                            }`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
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

export default PopulerModel;