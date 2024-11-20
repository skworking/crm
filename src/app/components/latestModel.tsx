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
    'e rickshaw':SliderItem[];
}


const LatestModel = () => {
    const [currentTab, setCurrentTab] = useState<'trucks' | 'pickup trucks' | 'mini trucks' | 'tippers' | '3 wheeler' | 'transit mixer' | 'auto rickshaw' | 'e rickshaw'>('trucks');
    const handleTabChange = (tab: typeof currentTab) => {
        setCurrentTab(tab);
    }
    const sliderData: SliderData = {
        default: [
            {
                id: 1,
                name: "BharatBenz 2828C RMC",
                price: "From ₹53.71 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/bharat-benz/2828c-rmc/bharat-benz-2828c-rmc.jpg",
            },
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
                name: "Isuzu D-MAX",
                price: "₹8.32 - ₹8.36 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/isuzu/d-max/isuzu-d-max-48049.jpg",
            },
            {
                id: 3,
                name: "Tata Magic Express Bi Fuel",
                price: "From ₹7.62 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/magic-express-bi-fuel/tata-magic-express-bi-fuel.jpg",
            },
            {
                id: 4,
                name: "Tata Magic Mantra Bi Fuel",
                price: "From ₹7.01 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/magic-mantra-bi-fuel/tata-magic-mantra-bi-fuel.jpg",
            },
            {
                id: 5,
                name: "Isuzu V-Cross",
                price: "₹19.98 - ₹30.96 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/isuzu/d-max-v-cross/isuzu-d-max-v-cross-99565.jpg",
            },
        ],
        'trucks': [
            {
                id: 1,
                name: "I-BOARD Tipper Elecy V3525",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/i-board/tipper-elecy-v-3525/i-board-tipper-elecy-v-3525.jpg",
            },
            {
                id: 2,
                name: "I-BOARD Long Haulage TT 5520",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/i-board/long-haulage-tt-5520/i-board-long-haulage-tt-5520.jpg",
            },
            {
                id: 3,
                name: "I-BOARD Ductor 5525",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/i-board/ductor-5525/i-board-ductor-5525.jpg",
            },
            {
                id: 4,
                name: "BharatBenz 4232R",
                price: "₹41.30 - ₹43.90 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/bharat-benz/4232-r/bharat-benz-4232-r.jpg",
            },
            {
                id: 5,
                name: "I-BOARD REX 5525",
                price: "₹41.30 - ₹43.90 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/i-board/rex-5525/i-board-rex-5525.jpg",
            },
        ],
        'mini trucks': [
            {
                id: 1,
                name: "Mahindra Zeo",
                price: "₹7.52 - ₹7.99 Lakh*",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/mahindra/zeo/mahindra-zeo-78314.jpg",
            },
            {
                id: 2,
                name: "Euler Motors Storm EV",
                price: "₹8.99 - ₹12.99 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/euler/storm-ev/euler-storm-ev.jpg",
            },
            {
                id: 3,
                name: "Mahindra Veero",
                price: "₹7.99 - ₹9.56 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/mahindra/veero/mahindra-veero.jpg",
            },
            {
                id: 3,
                name: "Ashok Leyland Bada Dost i5",
                price: "₹10.73 - ₹11.22 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/ashok-leyland/bada-dost-i5/ashok-leyland-bada-dost-i5.jpg",
            },
            {
                id: 4,
                name: "Ashok Leyland Bada Dost i4+ with LNT",
                price: "From ₹9.99 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/ashok-leyland/bada-dost-i4-with-lnt/ashok-leyland-bada-dost-i4-with-lnt.jpg",
            },
        ],
        'tippers': [
            {
                id: 1,
                name: "Ashok Leyland Dost XL",
                price: "From ₹8.55 Lakh*",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/ashok-leyland/dost-xl/ashok-leyland-dost-xl.jpg",
            },
            {
                id: 2,
                name: "SML Isuzu Samrat GS Tipper",
                price: "From ₹18.26 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/sml-isuzu/samrat-gs-tipper/sml-isuzu-samrat-gs-tipper.jpg",
            },
            {
                id: 3,
                name: "BharatBenz 5532T 6x4",
                price: "From ₹47.73 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/bharat-benz/5532-t-6x4/bharat-benz-5532-t-6x4.jpg",
            },
            {
                id: 4,
                name: "BharatBenz 3532CM",
                price: "₹6.78 - ₹7.93 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/bharat-benz/3532-cm/bharat-benz-3532-cm-12649.jpg",
            },
            {
                id: 5,
                name: "BharatBenz 5032T",
                price: "From ₹41.12 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/bharat-benz/5032-t/bharat-benz-5032-t-63784.jpg",
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
            },
            {
                id: 2,
                name: "City Cab Loader",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/city-cab/loader/city-cab-loader.jpg",
            },
            {
                id: 3,
                name: "Triton Ev Loader",
                price: "",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/triton-ev/loader/triton-ev-loader.jpg",
            },
            {
                id: 4,
                name: "Komaki CAT 3.0 NXT",
                price: "₹1.20 - ₹1.50 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/komaki/cat-3-0-nxt/komaki-cat-3-0-nxt.jpg",
            },
            {
                id: 5,
                name: "Atul Energie",
                price: "",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/atul/atul-energie/atul-atul-energie.jpg",
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
            },
            {
                id: 4,
                name: "Sniper Electric L5 Passenger",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/sniper-electric/l5-passenger/sniper-electric-l5-passenger.jpg",
            },
            {
                id: 5,
                name: "Mahindra e-Alfa Plus",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/mahindra/e-alfa-plus/mahindra-e-alfa-plus.jpg",
            },
        ],
        'e rickshaw':[
            {
                id: 1,
                name: "Star Bull Stainless Steel Battery Operated E-rickshaw",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/star-bull/stainless-steel-battery-operated-e-rickshaw/star-bull-stainless-steel-battery-operated-e-rickshaw.jpg",
            },
            {
                id: 2,
                name: "Sahyatri Sigma",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/sahyatri/sigma/sahyatri-sigma.jpg",
            },
            {
                id: 3,
                name: "Star Bull Blue E Rickshaw",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/star-bull/blue-e-rickshaw/star-bull-blue-e-rickshaw.jpg",
            },
            {
                id: 4,
                name: "Star Bull Battery Operated E Rickshaw",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/star-bull/battery-operated-e-rickshaw/star-bull-battery-operated-e-rickshaw.jpg",
            },
            {
                id: 5,
                name: "Sahyatri Semi Steel Dlx",
                price: "",
                offer: "View All offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/sahyatri/semi-steel-dlx/sahyatri-semi-steel-dlx.jpg",
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
                Latest Models
            </h2>
            <div className='flex border-b   overflow-auto no-scrollbar'>
                {['trucks', 'pickup trucks', 'mini trucks', 'tippers', '3 wheeler', 'transit mixer', 'auto rickshaw', 'e rickshaw'].map((tab) => (
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

export default LatestModel;