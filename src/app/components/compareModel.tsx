'use client'
import React, { useState } from 'react'
import ViewAllButton from '../comman/buttonView';
import CompareSlider from '../comman/compareSlider';
// Define the structure of a slider item
interface SliderItem {
    id: number;
    name: string;
    price: string;
    offer?: string;
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
    'e rickshaw': SliderItem[];
    'trailers': SliderItem[];
}


interface CompareData {
    trucks: SliderItem[];
    comparison: string;
}
const CompareModel = () => {
    const [currentTab, setCurrentTab] = useState<'trucks' | 'pickup trucks' | 'mini trucks' | 'tippers' | 'trailers' | '3 wheeler' | 'e rickshaw'>('trucks');
    const handleTabChange = (tab: typeof currentTab) => {
        setCurrentTab(tab);
    }
    const sliderData: SliderData = {
        default: [

            {
                id: 1,
                name: "Ashok Leyland AVTR 2820-6x4 RMC",
                price: "₹46.50 - ₹49.50 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/ashok-leyland/2820-rmc/ashok-leyland-2820-rmc-18138.jpg",
            },
            {
                id: 2,
                name: "Tata Signa 2823.K RMC STD 6S",
                price: "₹42.20 - ₹44.84 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/signa-2823-k-rmc-std-6s/tata-signa-2823-k-rmc-std-6s-54500.jpg",
            },
            {
                id: 3,
                name: "Mahindra Blazo X 28 TRANSIT MIXER",
                price: "From ₹33.98 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/mahindra/blazo-x-25-transit-mixer/mahindra-blazo-x-25-transit-mixer-28238.jpg",
            },
            {
                id: 4,
                name: "Eicher Pro 6028TM",
                price: "₹36.41 - ₹37.42 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/eicher/pro-6028-tm/eicher-pro-6028-tm-42037.jpg",
            },
            {
                id: 5,
                name: "Tata Prima 2830.K REPTO",
                price: "₹52.85 - ₹53.69 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/prima-2830-k-repto/tata-prima-2830-k-repto.jpg",
            },
        ],
        'pickup trucks': [
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
        ],
        'trucks': [
            {
                id: 1,
                name: "Eicher Pro 2049",
                price: "From ₹12.16 Lakh *",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/eicher/pro-2049/eicher-pro-2049-47454.jpg",
            },
            {
                id: 2,
                name: "Eicher Pro 2049",
                price: "From ₹12.16 Lakh*",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/407-gold-sfc/tata-407-gold-sfc-15836.jpg",

            },
            {
                id: 3,
                name: "Mahindra JAYO",
                price: "₹9.96 - ₹9.98 Lakh *",
                // offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/mahindra/di3200-jayo/mahindra-di3200-jayo-72694.jpg",

            },
            {
                id: 4,
                name: "Tata 407 Gold SFC",
                price: "₹10.75 - ₹13.26 Lakh *",
                // offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/407-gold-sfc/tata-407-gold-sfc-15836.jpg",
            },
            {
                id: 5,
                name: "Ashok Leyland Ecome 1615",
                price: "From ₹27.50 Lakh *",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/ashok-leyland/ecomet-1615-he/ashok-leyland-ecomet-1615-he-32256.jpg",

            },
            {
                id: 6,
                name: "Tata 1512 LPT Comparison",
                price: "₹23.46 - ₹23.54 Lakh*",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/1512-lpt/tata-1512-lpt-84331.jpg?impolicy=resize&imwidth=336",

            },
            {
                id: 7,
                name: "Eicher Pro 3018",
                price: "₹28.50 - ₹31.20 Lakh *",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/eicher/pro-3018/eicher-pro-3018.jpg",

            },
            {
                id: 8,
                name: "Eicher Pro 3018",
                price: "₹25.15 - ₹28.17 Lakh*",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/eicher/pro-3019/eicher-pro-3019-48551.jpg",

            },
        ],
        'mini trucks': [
            {
                id: 1,
                name: "Maruti Suzuki Super Carry",
                price: "₹5.26 - ₹6.41 Lakh *",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/maruti-suzuki/super-carry/maruti-suzuki-super-carry-88671.jpg",

            },
            {
                id: 2,
                name: "Tata Ace gold",
                price: "₹3.99 - ₹6.69 Lakh *",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/ace-gold/tata-ace-gold-21473.jpg",
            },
            {
                id: 3,
                name: "Tata Intra V30",
                price: "₹7.30 - ₹7.62 Lakh *",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/intra-v30-bs6/tata-intra-v30-bs6-67228.jpg",
            },
            {
                id: 4,
                name: "Tata Intra V50 ",
                price: "₹6.55 - ₹6.76 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/intra-v50/tata-intra-v50.jpg",
            },
            {
                id: 5,
                name: "Mahindra Jeeto",
                price: "₹4.72 - ₹5.65 Lakh *",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/mahindra/jeeto/mahindra-jeeto-65562.jpg",
            },
            {
                id: 6,
                name: "Tata Ace gold ",
                price: "₹3.99 - ₹6.69 Lakh *",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/ace-gold/tata-ace-gold-21473.jpg",
            },
            {
                id: 7,
                name: "Mahindra Jeeto ",
                price: "₹4.72 - ₹5.65 Lakh *",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/mahindra/jeeto/mahindra-jeeto-65562.jpg",
            },
            {
                id: 8,
                name: "Maruti Suzuki Super Carry ",
                price: "₹5.26 - ₹6.41 Lakh *",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/maruti-suzuki/super-carry/maruti-suzuki-super-carry-88671.jpg",
            },
        ],
        'tippers': [
            {
                id: 1,
                name: "Tata Prima 3530.K",
                price: "₹67.28 - ₹68.50 Lakh *",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/prima-fl-3530-k-bs6/tata-prima-fl-3530-k-bs6-54252.jpg",
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
                name: "Ashok Leyland AVTR 2820-6x4",
                price: "From ₹34.50 Lakh *",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/ashok-leyland/2820-tipper/ashok-leyland-2820-tipper-70163.jpg",
            },
            {
                id: 4,
                name: "Tata Signa 2823.K HD 9S",
                price: "From ₹36.26 Lakh *",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/signa-2823-k-hd-9s/tata-signa-2823-k-hd-9s-39314.jpg?impolicy=resize&imwidth=336",
            },
            {
                id: 5,
                name: "Tata Prima 2830.K",
                price: "From ₹23.85 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/tata/prima-2530k/tata-prima-2530k-65252.jpg",
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
                name: "Piaggio Ape Xtra LDX",
                price: "₹2.45 - ₹2.48 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/piaggio/ape-xtra-ldx-bs6/piaggio-ape-xtra-ldx-bs6-71253.jpg",

            },
            {
                id: 2,
                name: "Bajaj Maxima C",
                price: "₹2.83 - ₹2.84 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/bajaj/maxima-c/bajaj-maxima-c-80734.jpg",
            },
            {
                id: 3,
                name: "Mahindra Treo Zor",
                price: "",
                offer: "View All Offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/mahindra/treo-zor/mahindra-treo-zor-46219.jpg",
                isElectric: true,
            },
            {
                id: 4,
                name: "Mahindra Alfa Plus",
                price: "₹2.59 - ₹2.85 Lakh*",
                offer: "Get On Road Price",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/mahindra/alfa-load/mahindra-alfa-load-10329.jpg",
                // isElectric: true,
            },
            {
                id: 5,
                name: "Mahindra Zor Grand",
                price: "",
                offer: "View All Offers",
                imageUrl:
                    "https://truckcdn.cardekho.com/in/mahindra/treo-zor-grand/mahindra-treo-zor-grand-51184.jpg",
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
        'e rickshaw': 'e rickshaw',
    };
    const renderSlider = (activeTag: typeof currentTab) => {

        const sliderKey = tabToKeyMap[activeTag];
        const sliderItems = sliderData[sliderKey] || sliderData.default;
        // Function to generate comparison data
        const generateCompareData = (trucks: SliderItem[]): CompareData[] => {
            const compareData: CompareData[] = [];
            for (let i = 0; i < trucks.length - 1; i += 2) {
                compareData.push({
                    trucks: [trucks[i], trucks[i + 1]],
                    comparison: `${trucks[i].name} vs ${trucks[i + 1].name}`,
                });
            }
            return compareData;
        };
        const compareData = generateCompareData(sliderItems);

        return (
            <>
                <CompareSlider data={compareData} />
            </>
        )
    }
    return (
        <>
            <h2 className='px-4 pt-4 text-xl font-bold '>
                Compare to buy the right truck
            </h2>
            <div className='flex border-b   overflow-auto no-scrollbar'>
                {['trucks', 'pickup trucks', 'mini trucks', 'tippers', 'trailers', '3 wheeler', 'e rickshaw'].map((tab) => (
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
            <div className='pb-4 pl-4'>

                <ViewAllButton heading="Trucks Comparisions" link="/compare" />
            </div>
        </>
    )
}

export default CompareModel;