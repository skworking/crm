import Image from 'next/image';
import React from 'react'
import TopBanner from '../(Banners)/topbanner';
import Breadcrumbs from '@/app/comman/breadCrumbs';
import { GenerateBreadcrumbs, generateCompareData } from '@/app/comman/commanFunctions';
import ResearchList from '@/app/comman/researchList';
import BrandList from '@/app/comman/brandList';
import VehicleListCard from '../vehicalListCad';
import ToggleTable from '@/app/comman/toggleTable';
import TruckCard from '@/app/comman/truckCards';
import CompareSlider from '@/app/comman/compareSlider';
import ViewAllButton from '@/app/comman/buttonView';
import NewsSlider from '@/app/comman/sliderNews';
import RatingCards from '@/app/comman/ratingCards';
import CollabseContent from '@/app/comman/collapseComponent';
const LcvComponent = () => {
    const breadcrumbItems = GenerateBreadcrumbs();
    const updatedMenuItems = breadcrumbItems.map(item =>
        item.path === "/en/lcv"
            ? { ...item, label: "Intermediate & LCV Vehicles" }
            : item
    );

    const truckInfo = [
        {
            icon: <img src='https://cdn-icons-png.flaticon.com/512/3502/3502954.png' alt='' />,
            title: 'Mini Trucks',
            link: '#',
        },
        {
            icon: <img src="https://cdn-icons-png.flaticon.com/512/4502/4502386.png" alt='' />,
            title: 'Pickup Trucks',
            link: '#',
        },
        {
            icon: <img src='https://cdn-icons-png.flaticon.com/512/17184/17184971.png' alt='' />,
            title: 'Auto Rikshaw',
            link: '#',
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
    const rikshawData = [
        {
            name: "Mahindra Treo Yaari",
            priceRange: "₹1.79 - ₹2.04 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/mahindra/treo-yaari/mahindra-treo-yaari-62610.jpg",
        },
        {
            name: "YC Electric Yatri Super",
            priceRange: "From ₹1.69 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/yc-electric/yatri-super/yc-electric-yatri-super.jpg",
        },
        {
            name: "Mini Metro E Rickshaw",
            priceRange: "From ₹1.10 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/mini-metro/e-rickshaw/mini-metro-e-rickshaw.jpg",
        },
        {
            name: "Saarthi DLX",
            priceRange: "From ₹90,000.00*",
            imageUrl: "https://truckcdn.cardekho.com/in/saarthi/dlx/saarthi-dlx.jpg",
        },
        {
            name: "Atul Elite Plus",
            priceRange: "From ₹1.12 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/atul/elite/atul-elite-44395.jpg",
        },

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
            url: '/en/news/detail/top-7-technologies-for-logistical-fleet-efficiency-2592'
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
    const content: JSX.Element[] = [
        <>
            The light truck segments in India are classified in the 3.5T to 7T gross weight category that continues to play a crucial role in logistics/cargo shipments for small or medium fleet operators. These trucks are deployed in last-mile and regional logistics needs are also a significant source of employment to first-time truck buyers and transport entrepreneurs. The annual volumes of LCV sales in the overall truck market make them attractive to truck makers that are eyeing to expand into this extensive truck category.
        </>,
        <>
            Marquee truck brands such as Tata Motors, Mahindra & Mahindra, Ashok Leyland, Eicher, SML Isuzu cater to this vital segment. The popular LCVs are <strong>Tata 407 Gold SFC, Eicher Pro 2049, Eicher Pro 3015, Tata 1512 LPT</strong> and<strong> Eicher Pro 3019</strong>. The most affordable LCV is Bajaj Qute with price range of ₹3.61 Lakh & most expensive LCV is BharatBenz 4828R with the price of ₹53.81 Lakh. The Light truck market is widely extended in tonnage, payloads and price points- typically, an LCV truck ranges between ₹3.61 Lakh - ₹53.81 Lakh with the mass market, mid-range and premium categories.
        </>,
    ];

    const trucksData = [
        { Model: "Tata 407 Gold SFC", Price: "₹10.75 - ₹13.26 Lakh" },
        { Model: "Eicher Pro 2049", Price: "	From ₹12.16 Lakh" },
        { Model: "Eicher Pro 3015", Price: "₹21.00 - ₹29.80 Lakh" },
        { Model: "Tata 1512 LPT", Price: "₹23.46 - ₹23.54 Lakh" },
        { Model: "Eicher Pro 3019", Price: "₹25.15 - ₹28.17 Lakh" },

    ];
    const truckCard = [
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
    ]

    const sliderItems = [
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
    ]
    const reviews = [
        {
            productName: "Astro Motors Triyaan Navya",
            reviewerName: "Lakshya Ostwal",
            reviewDate: "Aug 04, 2024",
            rating: 4.9,
            heading: "Great speed with gear changing technology.",
            reviewText: "Great speed with gear changing technology. The potholes and slopes were the main concern for me when buying an electric vehicle, but they proved me wrong."
        },
        {
            productName: "Tata Magic EV",
            reviewerName: "Chandrapal Singh",
            reviewDate: "Aug 16, 2023",
            rating: 5,
            heading: "EV magic truck.",
            reviewText: "Very good quality please I buy me please contact me 9910238194 nice looking EV magic please share me pics and prize.",
            classes: "line-clamp-3"
        },
        {
            productName: "Force Urbania",
            reviewerName: "Udit Sarkar",
            reviewDate: "Dec 23, 2022",
            rating: 5,
            heading: "The perfect room on wheels with all the needed features.",
            reviewText: "Most reliable family tourer, added safety, premium comfort, wide road visibility, punchy low-end torque delivery.",
            classes: "line-clamp-3"
        },
        {
            productName: "Mahindra Bolero Maxx Pik-Up",
            reviewerName: "Imran Vhora",
            reviewDate: "Dec 07, 2022",
            rating: 4.1,
            heading: "Best Bolero pickup.",
            reviewText: "Thar ka baap hai Bolero pickup. Best n best off-roading mileage. Comfortable.",
            classes: "line-clamp-3"
        },
        {
            productName: "Tata Intra V50",
            reviewerName: "Neeraj Ahat",
            reviewDate: "Oct 17, 2022",
            rating: 4.3,
            heading: "Capable engine.",
            reviewText: "I have personally driven quite a few trucks in the 1.5 tonnes segment, but the Tata Intra V50 is quite exceptional. The vehicle is powerful and reliable.",
            classes: "line-clamp-3"
        },
        {
            productName: "Tata Yodha 2.0",
            reviewerName: "Sudarshan M",
            reviewDate: "Oct 11, 2022",
            rating: 4.3,
            heading: "A superb package with great capacity pickup.",
            reviewText: "The Tata Yodha 2.0 is a very good package in the 2 tonnes segment, and I think it is a great package that comes with excellent capacity and performance.",
            classes: "line-clamp-3"
        }
    ];

    const faqData = [
        { title: 'What is LCV & ICV ?', content: 'In the Indian commercial vehicle industry, the LCVs and ICVs are two important categories for transport and logistics solutions for the short to medium distance cargo deliveries. The LCV is known as light commercial vehicles in India categorised between 3.5T GVW and 7.5T GVW. The ICVs are known as intermediate commercial vehicle categories between 7.5T GVW to 16T GVW.' },
        { title: 'What is the difference between LCV, SCVs & HCVs?', content: 'The SCV, known as a small commercial vehicle, comprises mini-trucks, compact trucks, and pickups ranging from .5T GVW to 3.5T GVW. The LCV is light commercial vehicles are the next category starting from 3.5T GVW to 7.5T GVW. Both the SCV and LCVs are used for short distances and last-mile deliveries. The HCVs are heavy commercial vehicles consisting of cargo, tipper, and a tractor-trailer, starting from 25T GVW and 55T used to long-haul cargo transportation.' },
        { title: "What are the best Light commercial vehicles In India?", content: 'Tata 407 Gold SFC, Eicher Pro 2049, Eicher Pro 3015, Tata 1512 LPT and Eicher Pro 3019 & many more are popular light trucks in India with starting price at Rs ₹3.61 Lakh.' },
        { title: "What are the latest LCVs in India?", content: "The latest light commercial vehicles in India are Ashok Leyland Bada Dost i5,Ashok Leyland Bada Dost i3+,Ashok Leyland Bada Dost i4+ with LNT,Ashok Leyland Dost XL,Ashok Leyland Bada Dost i3+ with LNT & more." },
        { title: "What are the popular LCVs manufacturers in India?", content: (<>The popular small commercial vehicle manufacturers are <span className='text-blue-400'>Tata,Ashok Leyland,Mahindra</span> & more in India.</>) }
    ];
    const compareData = generateCompareData(sliderItems);
    return (
        <div className='relative'>
            <TopBanner
                imageUrl="https://truckcdn.cardekho.com/pwa/img/lcv-banner.jpg"
                title="Intermediate & Light Commercial Vehicles"
                height={400}
            />
            <Image
                width={0}
                height={10}
                sizes="100vw"
                className="object-none  w-full "
                src={'https://tpc.googlesyndication.com/simgad/2186141005922165001'} alt='' />
            <div className='max-w-7xl m-auto relative'>
                <Breadcrumbs items={updatedMenuItems} />
                <div className="lg:flex border-b-2  rounded-b-md border-gray-100 gap-4 ">

                    {/* left part */}
                    <div className="w-full lg:w-8/12 xl:w-[73.50%] space-y-4 mb-4 md:p-5 xl:p-0 " >
                        <h2 className='p-[17px 20px 0px] text-xl lg:text-[30px] font-bold mb-5 '>
                            Light Commercial Vehicles (I & LCV)
                        </h2>
                        <div className='border rounded-[16px] lg:p-5 p-5 mb-3 bg-white'>
                            <ToggleTable
                                content={content}
                                title="Top 5 small commercial vehicles in India"
                                columns={["Model", "Price"]}
                                data={trucksData}
                            />
                        </div>
                        <TruckCard data={truckCard} />
                        <div className='border rounded-[16px]   mb-3 bg-white'>

                            <CompareSlider
                                data={compareData}
                                heading={' Popular SCV Vehicles Comparisons'}
                                setSlide={2}
                            />
                            <div className='pb-4 pl-4'>
                                <ViewAllButton heading="Trucks Comparisions" link="/compare" />
                            </div>
                        </div>

                        <div className='border rounded-[16px]   mb-3 bg-white'>
                            <NewsSlider data={cards} slidesShow={1} heading=" News on trucks that you like" />
                        </div>
                        <div className='border rounded-[16px]   mb-31 bg-white'>
                            <RatingCards data={reviews} slidesShow={3} heading="Small Commercial Vehicles User Reviews" />
                        </div>
                        <div className='border rounded-[16px] p-4  flex flex-col  bg-white gap-2  relative'>
                            <h2 className='p-[17px 20px 0px]  text-xl font-bold '>
                                Frequently Asked Question on SCV Vehicles
                            </h2>
                            <CollabseContent tabContent={faqData} />
                        </div>
                    </div>

                    {/* right part */}
                    <div className="w-full lg:w-4/12 xl:w-[25%] h-auto flex flex-col  sm:p-5 xl:p-0 mr-2 gap-2">
                        <VehicleListCard
                            title="Latest Trucks"
                            vehicleData={truckData}
                            viewAllText="View All Latest Trucks"

                        />
                        <BrandList title="SCVs By Popular Brands" data={brandInfo} />
                        <ResearchList title="Explore Body Types" data={truckInfo} />


                        <VehicleListCard
                            title="Best E-Rickshaw"
                            vehicleData={rikshawData}
                            viewAllText="View All Best E Rikshaw"

                        />
                        <img alt='not found' src='https://tpc.googlesyndication.com/simgad/9767680614922265990' className="brightness-100 lg:block hidden  w-full  object-fill h-[250px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LcvComponent;