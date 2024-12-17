'use server'

import { NextResponse } from 'next/server';
// import path from 'path';
// import { promises as fs } from 'fs';
// import navbarData from '@/../../public/navBarData.json'
type TruckDetail = {
  logo: string;
  value: string;
  icon: string;
};

type TruckVariant = {
  variantName: string;
  gvw: string;
};
type AlterNativeDetails = {
  name: string;
  price: string;
  offer: string;
  imageUrl: string;
}
type TruckDelers = {
  name: string;
  address: string;
  contact: string;
  phone?: string;
}
type TruckCompetiters = {
  model: string;
  image: string;
  priceRange: string;
  comparison: string;
  offerLink: string;
  link?: string;
}
type TruckReviews = {
  productName: string,
  reviewerName: string,
  reviewDate: string,
  rating: number,
  heading: string,
  reviewText: string,
  classes?: string
}
type TruckOptions = {
  model: string;
  image: string;
}

type TruckNews = {
  title: string;
  author: string;
  image: string;
  date: string;
  time: string;
  description: string;
  url: string
}
type TruckUses = {
  model: string;
  image: string;
}
type TruckVideo = {
  title: string,
  date: string,
  image: string,
  description: string,
  url: string
}

interface TabItem {
  title: string;
  content: string;
}

type TruckMultiTabDetails = {
  [key: string]: TabItem[];
};

type BreadCrumb = {
  label: string;
  path: string;
}

type TruckPopuler = {
  name: string,
  priceRange: string,
  imageUrl: string
}
type TruckResearch = {
  title: string,
  imageUrl: string,
  url: string,
}
type TruckTable = {
  Model: string,
  Price: string,
}
interface BoldLink {
  text: string;
  url: string;
}
interface specific {
  category: string,
  specs?: {
    name: string,
    value: string
  }[]
}

type NavbarItem = {
  menuItems?: {
    path: string;
    label: string;
    activeClass?: string;
    hasDropdown?: boolean;
  }[];
  links?: {
    href: string;
    label: string;
    icon?: string;
  }[];

  overview?: {
    image?: string | string[];
    heading?: string;
    recommendedTruck?: {
      name: string;
      image: string;
      priceRange: string;
    }[];
    rating?: string;
    reviews?: number;
    price?: string;
  };
  breadcrumb?: BreadCrumb[]

  body?: {
    heading?: string;
    truckDetails: {
      url: string;
      details: TruckDetail[]
    };
    truckVariants?: {
      heading: string;
      description: string;
      details: TruckVariant[]
    };
    truckAlterNative?: {
      order?: number
      footerheading: string;
      url: string;
      details: AlterNativeDetails[]
    };
    truckDealers?: {
      details: TruckDelers[]
    };
    truckCompetitors?: {
      heading: string;
      details: TruckCompetiters[]
    };
    truckReviews?: {
      order?: number
      heading: string;
      performance: number;
      maintenance: number;
      design: number;
      details: TruckReviews[]
    },
    truckOptions?: {
      details: TruckOptions[]
    },
    truckNews?: {
      details: TruckNews[]
    },
    truckUses?: {
      details: TruckUses[]
    },
    truckVideo?: {
      heading: string;
      description: string;
      details: TruckVideo[]
    },
    truckMultitab?: {
      tabs: string[],
      details: TruckMultiTabDetails
    },
    populerTruck?: {
      order?: number,
      heading: string;
      details: TruckPopuler[],
      url: string
    },
    ReseachTruck?: {
      order?: number;
      heading: string;
      details: TruckResearch[]
    },
    ElectricTruck?: {
      heading: string;
      details: TruckPopuler[],
      url: string
    },
    TableToggle?: {
      heading: string;
      content: string[],
      linkmap: BoldLink[],
      title: string,
      columns: string[],
      details: TruckTable[]
    },
    overviewCard?: {
      image?: string,
      heading?: string;
      rating?: string;
      reviews?: number;
      price?: string;
    },
    truckSpecification?: {
      heading: string,
      content: string[],
      linkmap: BoldLink[],
    }
    keySpecification?: {
      heading: string,
      details: {
        name: string,
        value: string,
      }[]
    },
    scrollSpyFetaures?: {
      order: number,
      heading: string,
      details: specific[]
    }

  };
};

type NavbarData = {
  [key: string]: NavbarItem; // Allows dynamic string keys
};

export async function GET(request: Request) {

  const navbarData: NavbarData = {
    "/en/trucks/bharat-benz/2826-r": {
      "menuItems": [
        {
          "path": "/en/trucks/bharat-benz/2826-r",
          "label": "2826R",
          "activeClass": "border-b-2 p-3 border-red-700"
        },
        {
          "path": "/en/trucks/bharat-benz/2826-r/price-in-new-delhi",
          "label": "Price",
          "activeClass": "text-red-700"
        },
        {
          "path": "#",
          "label": "Compare",
          "hasDropdown": true
        },
        {
          "path": "/en/trucks/bharat-benz/2826-r/specifications",
          "label": "Specifications",
          "activeClass": "text-red-500"
        }
      ],
      "links": [
        {
          "href": "/en/bharat-benz-dealers-in-new-delhi.html?model=2826-r",
          "label": "Dealers",
          "icon": "https://cdn-icons-png.flaticon.com/512/12341/12341343.png"
        },
        {
          "href": "/en/bharat-benz-service-in-new-delhi.html?model=2826-r",
          "label": "Service Center",
          "icon": "https://cdn-icons-png.flaticon.com/512/4410/4410666.png"
        },
        {
          "href": "https://trucks.cardekho.com/en/body-maker.html",
          "label": "Body Makers",
          "icon": "https://cdn-icons-png.flaticon.com/512/1085/1085392.png"
        },
        {
          "href": "/en/trucks/bharat-benz/2826-r/videos",
          "label": "Videos",
          "icon": "https://cdn-icons-png.flaticon.com/512/2859/2859706.png"
        },
        {
          "href": "/en/trucks/bharat-benz/2826-r/emi-calculator",
          "label": "EMI Calculator",
          "icon": "https://cdn-icons-png.flaticon.com/512/6884/6884209.png"
        }
      ],
      "overview": {
        "image": [
          "https://truckcdn.cardekho.com/in/bharat-benz/2826-r/bharat-benz-2826-r.jpg?imwidth=360&impolicy=resize"
        ],
        "heading": "BharatBenz 2826R",
        "recommendedTruck": [
          {
            "name": "Isuzu D-MAX",
            "image": "",
            "priceRange": "₹8.32 - ₹8.36 Lakh*"
          },
          {
            "name": "Mahindra Bolero Camper",
            "image": "",
            "priceRange": "From ₹10.61 Lakh*"
          },
          {
            "name": "Ashok Leyland Dost +",
            "image": "",
            "priceRange": "₹7.75 - ₹8.25 Lakh*"
          }
        ],
        "rating": "4.5",
        "reviews": 118,
        "price": "₹8.51 - ₹10.71 Lakh*"
      },
      "breadcrumb": [
        {
          "label": "Home",
          "path": "/"
        },
        {
          "label": "BharatBenz Trucks",
          "path": "/en/brands/bharat-benz"
        },
        {
          "label": "2826R",
          "path": ""
        }
      ],

      "body": {
        heading: "BharatBenz 2826R",
        truckDetails: {
          url: "/en/trucks/bharat-benz/2826-r/specifications",
          details: [
            {
              logo: 'Battery Capacity',
              value: '120 Ah',
              icon: "https://cdn-icons-png.flaticon.com/512/2087/2087628.png"
            },
            {
              logo: 'Number of Tyre',
              value: '10',
              icon: "https://cdn-icons-png.flaticon.com/512/4606/4606838.png"
            },
            {
              logo: 'Power',
              value: '250 hp',
              icon: "https://cdn-icons-png.flaticon.com/512/3596/3596171.png"
            },
            {
              logo: 'Engine',
              value: '6700 cc',
              icon: "https://cdn-icons-png.flaticon.com/512/8049/8049675.png"
            },
            {
              logo: 'Fuel Tank',
              value: '380/355 Ltr',
              icon: "https://cdn-icons-png.flaticon.com/512/4906/4906874.png"
            },
            {
              logo: 'Chassis Type',
              value: 'Chassis with Cabin',
              icon: "https://cdn-icons-png.flaticon.com/512/810/810006.png"

            },
          ]
        },
        truckVariants: {
          heading: "BharatBenz 2826R Price List (Variants)",
          description: " BharatBenz 2826R is offered in 5 variants - the base model of 2826R is 5175/CBC/Sleeper and the top variant is 5175/CBC Sleeper which come with Kgs",
          details: [{
            variantName: "BharatBenz 2826R 5175/CBC/Sleeper Tanker",
            gvw: "Get On Road Price",
          },
          {
            variantName: "BharatBenz 2826R 5775/CBC/Sleeper",
            gvw: "Get On Road Price",
          },
          {
            variantName: "BharatBenz 2826R 6375/CBC/Sleeper",
            gvw: "Get On Road Price",
          },
          ]
        },
        truckAlterNative: {
          footerheading: "Populer Tippers",
          url: "/en/popular-truck/tippers",
          details: [
            {
              name: "Tata Signa 5530.S",
              price: "From ₹39.03 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-2823-k-rmc-std-6s/tata-signa-2823-k-rmc-std-6s-54500.jpg"
            },
            {
              name: "Tata Signa 3523.TK",
              price: "From ₹49.23 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-4223t/tata-signa-4223t-95359.jpg"
            },
            {
              name: "Tata Signa 1923.K",
              price: "From ₹28.91 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-2821-k-rmc-std-6s/tata-signa-2821-k-rmc-std-6s.jpg"
            },
            {
              name: "Tata Signa 1923.K",
              price: "From ₹28.91 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/tata/407-gold-sfc/tata-407-gold-sfc-15836.jpg"
            },
            {
              name: "Tata Signa 1923.K",
              price: "From ₹28.91 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/eicher/pro-2049/eicher-pro-2049-47454.jpg"
            },
          ]
        },
        truckDealers: {
          details: [
            {
              name: "Wasan Trucking",
              address: "Wasan house, 5th floor , Plot No 4, swastik park , Sion - Trombay Road , Chembur 400071",
              phone: "+917021662912",
              contact: "Contact Dealer"
            },
            {
              name: "Wasan Trucking",
              address: "Unit -28, Ajay Mittal ind estate, Building no.1, Mittal estate, Marol Naka, Andheri (East),Mumbai 400059",
              contact: "Contact Dealer"
            },
            {
              name: "Wasan Trucking",
              address: "Shop no.24, BGTA Godavari Co. society, G1, MMRDA Wadala Truck terminal, Near Wadala RTO, Mumbai 400037",
              contact: "Contact Dealer"
            },
            {
              name: "Wasan Trucking",
              address: "Wasan House, 5th Floor, Plot No. 4, Swastik Park, Sion Trombay Road, Chembur 400071",
              contact: "Contact Dealer"
            },
            {
              name: "Wasan Trucking",
              address: "Wasan House, 5th Floor, Plot No. 4, Swastik Park, Sion Trombay Road, Chembur 400071",
              contact: "Contact Dealer"
            }
          ]
        },
        truckCompetitors: {
          heading: "3123R",
          details: [
            {
              model: "BharatBenz 3123R",
              image: "https://truckcdn.cardekho.com/in/bharat-benz/3123r/bharat-benz-3123r-47528.jpg",
              priceRange: "₹40.97 - ₹41.97 Lakh*",
              comparison: "2826R vs 3123R",
              offerLink: "View All Offers"
            },
            {
              image: "https://truckcdn.cardekho.com/in/man/cla-31300-evo-8x4/man-cla-31300-evo-8x4.jpg",
              model: "Man CLA 31.300 EVO 8X4",
              priceRange: "From ₹39.00 Lakh*",
              comparison: "2826R vs CLA 31.300 EVO 8X4",
              offerLink: "View All Offers"
            },
            {
              image: "https://truckcdn.cardekho.com/in/eicher/pro-6041/eicher-pro-6041-79227.jpg",
              model: "Man CLA 31.300 EVO 8X4",
              priceRange: "From ₹39.00 Lakh*",
              comparison: "2826R vs CLA 31.300 EVO 8X4",
              offerLink: "View All Offers"
            },
            {
              image: "https://truckcdn.cardekho.com/in/tata/signa-1923-k/tata-signa-1923-k-27351.jpg",
              model: "Man CLA 31.300 EVO 8X4",
              priceRange: "From ₹39.00 Lakh*",
              comparison: "2826R vs CLA 31.300 EVO 8X4",
              offerLink: "View All Offers"
            },
            {
              image: "https://truckcdn.cardekho.com/in/tata/signa-1923-k/tata-signa-1923-k-27351.jpg",
              model: "Man CLA 31.300 EVO 8X2",
              priceRange: "From ₹39.00 Lakh*",
              comparison: "2826R vs CLA 31.300 EVO 8X2",
              offerLink: "View All Offers"
            },
            {
              image: "",
              model: "",
              priceRange: "",
              comparison: "",
              offerLink: "",
              link: "/en/compare"
            }
          ]
        },
        truckReviews: {
          heading: '2826R',
          performance: 5,
          maintenance: 4,
          design: 5,
          details: [
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
          ]
        },
        truckOptions: {
          details: [
            {
              model: "MHCV Vehicles",
              image: "https://truckcdn.cardekho.com/pwa/img/explore/mhcv.jpg",
            },
            {
              image: "https://truckcdn.cardekho.com/pwa/img/explore/trucks.jpg",
              model: "Trucks",
            },
            {
              model: "Trucks above 40 Lakh",
              image: "https://truckcdn.cardekho.com/pwa/img/explore/above-40-lakh.jpg",
            },
            {
              image: "https://truckcdn.cardekho.com/pwa/img/explore/fuelType.jpg",
              model: "Deasel",
            },
            {
              image: "https://truckcdn.cardekho.com/in/tata/signa-1923-k/tata-signa-1923-k-27351.jpg",
              model: "Man CLA 31.300 EVO 8X2",
            },
          ]
        },
        truckNews: {
          details: [
            {
              title: "Latest Trucking Technologies: All You Need To Know",
              image: 'https://truckcdn.cardekho.com/news/25181729745827.jpg',
              author: "Dheeraj Nair",
              date: "Oct 23, 2024",
              time: "10:53 AM",
              description: "Explore the benefits of using a GPS truck tracking system for your trucking business.",
              url: "https://truckcdn.cardekho.com/news/25131729661559.jpg"
            },
            {
              title: "Start An Owner-Operator Trucking Business With These Tips: Comprehensive Guide",
              author: "Dheeraj Nair",
              image: 'https://truckcdn.cardekho.com/news/25131729661559.jpg',
              date: "Oct 21, 2024",
              time: "02:48 PM",
              description: "Learn the essential tips and strategies to kickstart your own owner-operator trucking business.",
              url: "/articles/owner-operator-trucking"
            },
            {
              title: "Truck Driver Trip Planning Guide: Everything You Need To Know",
              author: "Dheeraj Nair",
              image: 'https://truckcdn.cardekho.com/news/25131729661559.jpg',
              date: "Oct 20, 2024",
              time: "10:30 AM",
              description: "A complete guide for truck drivers to plan their trips effectively and efficiently.",
              url: "/articles/trip-planning-guide"
            },
            {
              title: "Truck Driver Trip Planning Guide: Everything You Need To Know",
              author: "Dheeraj Nair",
              image: 'https://truckcdn.cardekho.com/news/25081729502264.jpg',
              date: "Oct 20, 2024",
              time: "10:30 AM",
              description: "A complete guide for truck drivers to plan their trips effectively and efficiently.",
              url: "/articles/trip-planning-guide"
            }
          ]
        },
        truckUses: {
          details: [
            {
              model: "Cement",
              image: "https://truckcdn.cardekho.com/pwa/img/explore/cement.jpg",
            },
            {
              image: "https://truckcdn.cardekho.com/pwa/img/explore/auto-logistics.jpg",
              model: "Auto Logistics",
            },
            {
              model: "Beverage",
              image: "https://truckcdn.cardekho.com/pwa/img/explore/beverage.jpg",
            },
            {
              image: "https://truckcdn.cardekho.com/pwa/img/explore/construction.jpg",
              model: "Construction",
            },
            {
              image: "https://truckcdn.cardekho.com/pwa/img/explore/fishery.jpg",
              model: "Fishery",
            },
          ]
        },
        truckVideo: {
          heading: "2826R",
          description: "2826R has video of its detailed review, specs, features explained & more. Watch our Latest video of 2826R to know price, safety features, type of application & more",
          details: [
            {
              title: "Introduction to Engine Oils for Trucks",
              date: "Feb 03, 2023",
              image: "https://i2.ytimg.com/vi/vUdLqx8r6Fo/hqdefault.jpg",
              description: "An overview of the types and benefits of engine oils specifically designed for trucks.",
              url: "https://youtu.be/H6p3-uu9-rU"
            },
            {
              title: "What makes a good engine oil in today’s era",
              date: "Feb 03, 2023",
              image: "https://i2.ytimg.com/vi/H6p3-uu9-rU/hqdefault.jpg",
              description: "Explore the key characteristics and standards that define quality engine oil in modern times.",
              url: "https://youtu.be/aJDy44RIkxM"
            },
            {
              title: "What makes a good engine oil in today’s era",
              date: "Feb 03, 2023",
              image: "https://i2.ytimg.com/vi/aJDy44RIkxM/hqdefault.jpg",
              description: "Explore the key characteristics and standards that define quality engine oil in modern times.",
              url: "https://youtu.be/aJDy44RIkxM"
            },
            {
              title: "What makes a good engine oil in today’s era",
              date: "Feb 03, 2023",
              image: "https://i2.ytimg.com/vi/aJDy44RIkxM/hqdefault.jpg",
              description: "Explore the key characteristics and standards that define quality engine oil in modern times.",
              url: "https://youtu.be/aJDy44RIkxM"
            }
          ]
        },
        truckMultitab: {
          tabs: ['Price', 'Loading', 'Specifications', 'Cabin'],
          details: {
            'Price': [
              { title: 'What is the price of BharatBenz 2826R in Mumbai?', content: 'The Truck prices vary from state to state as per the local taxes and levies. The BharatBenz 2826R price is approximately between ₹41.20 - ₹43.50 Lakh in Mumbai.' },
              { title: 'What will be the monthly EMI for BharatBenz 2826R?', content: 'The monthly EMI of BharatBenz 2826R will be ₹79,699.00 on an annual rate of interest of 10.5% for a tenure of 5 years & down payment will be ₹4.12 Lakh.' }
            ],
            'Loading': [
              { title: 'What is the fuel tank capacity of BharatBenz 2826R?', content: 'The fuel capacity of BharatBenz 2826R is 380/355 Ltr.' }
            ],
            'Specifications': [
              { title: 'What are the specifications of BharatBenz 2826R?', content: 'The specifications include engine type, horsepower, torque, and dimensions.' }
            ],
            'Cabin': [
              { title: 'What features does the cabin of BharatBenz 2826R have?', content: 'The cabin features air conditioning, comfortable seating, and advanced infotainment systems for a better driving experience.' }
            ]
          }
        },
        // sidebar content
        populerTruck: {
          order: 2,
          heading: "Popular BharatBenz Trucks",
          details: [
            {
              name: "BharatBenz 1917R",
              priceRange: "₹28.35 - ₹30.61 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/3528c-bs6/bharat-benz-3528c-bs6-64528.jpg",
            },
            {
              name: "BharatBenz 1917R",
              priceRange: "₹28.35 - ₹30.61 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/1917r/bharat-benz-1917r.jpg",
            },
            {
              name: "BharatBenz 3528C",
              priceRange: "₹52.97 - ₹60.60 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/1217c/bharat-benz-1217c-60162.jpg",
            },
            {
              name: "BharatBenz 3528C",
              priceRange: "₹28.30 - ₹28.88 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/4828r/bharat-benz-4828r-41094.jpg",
            },
            {
              name: "BharatBenz 4228C",
              priceRange: "₹47.70 - ₹48.97 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/4228r/bharat-benz-4228r-14182.jpg",
            },
          ],
          url: "/en/brands/bharat-benz",
        },
        ReseachTruck: {
          order: 1,
          heading: "Further Research",
          details: [
            {
              title: "2826R On Road Price",
              imageUrl: 'https://cdn-icons-png.flaticon.com/512/13859/13859311.png',
              url: "/en/trucks/bharat-benz/2826-r/price-in-mumbai",
            },
            {
              title: "2826R Specifications",
              imageUrl: 'https://cdn-icons-png.flaticon.com/512/2702/2702651.png',
              url: "/en/trucks/bharat-benz/2826-r/specifications",
            },
            {
              title: "2826R Images",
              imageUrl: 'https://cdn-icons-png.flaticon.com/512/9284/9284918.png',
              url: "/en/trucks/bharat-benz/2826-r/images",
            },
            {
              title: "2826R Videos",
              imageUrl: 'https://cdn-icons-png.flaticon.com/512/14068/14068622.png',
              url: "/en/trucks/bharat-benz/2826-r/videos",
            },
          ]
        },
        ElectricTruck: {
          heading: "Popular Electrick Trucks",
          details: [
            {
              name: "BharatBenz 1917R",
              priceRange: "₹28.35 - ₹30.61 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/3528c-bs6/bharat-benz-3528c-bs6-64528.jpg",
            },
            {
              name: "BharatBenz 1917R",
              priceRange: "₹28.35 - ₹30.61 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/1917r/bharat-benz-1917r.jpg",
            },
            {
              name: "BharatBenz 3528C",
              priceRange: "₹52.97 - ₹60.60 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/1217c/bharat-benz-1217c-60162.jpg",
            },
            {
              name: "BharatBenz 3528C",
              priceRange: "₹28.30 - ₹28.88 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/4828r/bharat-benz-4828r-41094.jpg",
            },
            {
              name: "BharatBenz 4228C",
              priceRange: "₹47.70 - ₹48.97 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/4228r/bharat-benz-4228r-14182.jpg",
            },
          ],
          url: "/en/electric-trucks",
        },


      }
    },
    "/en/trucks/bharat-benz/2826-r/price-in-:city": {
      "menuItems": [
        {
          "path": "/en/trucks/bharat-benz/2826-r",
          "label": "2826R",
          "activeClass": "border-b-2 p-3 border-red-700"
        },
        {
          "path": "/en/trucks/bharat-benz/2826-r/price-in-:city",
          "label": "Price",
          "activeClass": "text-red-700"
        },
        {
          "path": "#",
          "label": "Compare",
          "hasDropdown": true
        },
        {
          "path": "/en/trucks/bharat-benz/2826-r/specifications",
          "label": "Specifications",
          "activeClass": "text-red-500"
        }
      ],
      "links": [
        {
          "href": "/en/bharat-benz-dealers-in-new-delhi.html?model=2826-r",
          "label": "Dealers",
          "icon": "https://cdn-icons-png.flaticon.com/512/12341/12341343.png"
        },
        {
          "href": "/en/bharat-benz-service-in-new-delhi.html?model=2826-r",
          "label": "Service Center",
          "icon": "https://cdn-icons-png.flaticon.com/512/4410/4410666.png"
        },
        {
          "href": "https://trucks.cardekho.com/en/body-maker.html",
          "label": "Body Makers",
          "icon": "https://cdn-icons-png.flaticon.com/512/1085/1085392.png"
        },
        {
          "href": "/en/trucks/bharat-benz/2826-r/videos",
          "label": "Videos",
          "icon": "https://cdn-icons-png.flaticon.com/512/2859/2859706.png"
        },
        {
          "href": "/en/trucks/bharat-benz/2826-r/emi-calculator",
          "label": "EMI Calculator",
          "icon": "https://cdn-icons-png.flaticon.com/512/6884/6884209.png"
        }
      ],
      "overview": {},
      "breadcrumb": [
        {
          "label": "Home",
          "path": "/"
        },
        {
          "label": "BharatBenz Trucks",
          "path": "/en/brands/bharat-benz"
        },
        {
          "label": "2826-r",
          "path": "/en/trucks/bharat-benz/2826-r"
        },
        {
          "label": "On Road Price in :city",
          "path": ""
        }
      ],

      "body": {
        heading: 'BharatBenz 2826R',
        truckDetails: {
          url: '',
          details: []
        },
        "truckVariants": {
          heading: '2826R Mileage (Variant)',
          description: '',
          details: [
            {
              variantName: "BharatBenz 2826R 5175/CBC/Sleeper Tanker",
              gvw: "Get On Road Price",
            },
          ]
        },
        truckAlterNative: {
          footerheading: "Populer Tippers",
          url: "/en/popular-truck/tippers",
          details: [
            {
              name: "Tata Signa 5530.S",
              price: "From ₹39.03 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-2823-k-rmc-std-6s/tata-signa-2823-k-rmc-std-6s-54500.jpg"
            },
            {
              name: "Tata Signa 3523.TK",
              price: "From ₹49.23 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-4223t/tata-signa-4223t-95359.jpg"
            },
            {
              name: "Tata Signa 1923.K",
              price: "From ₹28.91 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-2821-k-rmc-std-6s/tata-signa-2821-k-rmc-std-6s.jpg"
            },
            {
              name: "Tata Signa 1923.K",
              price: "From ₹28.91 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/tata/407-gold-sfc/tata-407-gold-sfc-15836.jpg"
            },
            {
              name: "Tata Signa 1923.K",
              price: "From ₹28.91 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/eicher/pro-2049/eicher-pro-2049-47454.jpg"
            },
          ]
        },
        "truckDealers": {
          details: [],
        },
        "truckCompetitors": {
          heading: '',
          details: []
        },
        truckReviews: {
          heading: '2826R',
          performance: 5,
          maintenance: 4,
          design: 5,
          details: [
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
          ]
        },
        truckOptions: {
          details: []
        },
        truckNews: {
          details: []
        },
        truckUses: {
          details: []
        },
        truckVideo: {
          heading: '',
          description: '',
          details: []
        },
        truckMultitab: {
          tabs: [],
          details: {
          }
        },

        ReseachTruck: {
          order: 1,
          heading: "Further Research",
          details: [
            {
              title: "2826R On Road Price",
              imageUrl: 'https://cdn-icons-png.flaticon.com/512/13859/13859311.png',
              url: "/en/trucks/bharat-benz/2826-r/price-in-mumbai",
            },
            {
              title: "2826R Specifications",
              imageUrl: 'https://cdn-icons-png.flaticon.com/512/2702/2702651.png',
              url: "/en/trucks/bharat-benz/2826-r/specifications",
            },
            {
              title: "2826R Images",
              imageUrl: 'https://cdn-icons-png.flaticon.com/512/9284/9284918.png',
              url: "/en/trucks/bharat-benz/2826-r/images",
            },
            {
              title: "2826R Videos",
              imageUrl: 'https://cdn-icons-png.flaticon.com/512/14068/14068622.png',
              url: "/en/trucks/bharat-benz/2826-r/videos",
            },
          ]
        },
        populerTruck: {
          order: 2,
          heading: "Popular BharatBenz Trucks",
          details: [
            {
              name: "BharatBenz 1917R",
              priceRange: "₹28.35 - ₹30.61 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/3528c-bs6/bharat-benz-3528c-bs6-64528.jpg",
            },
            {
              name: "BharatBenz 1917R",
              priceRange: "₹28.35 - ₹30.61 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/1917r/bharat-benz-1917r.jpg",
            },
            {
              name: "BharatBenz 3528C",
              priceRange: "₹52.97 - ₹60.60 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/1217c/bharat-benz-1217c-60162.jpg",
            },
            {
              name: "BharatBenz 3528C",
              priceRange: "₹28.30 - ₹28.88 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/4828r/bharat-benz-4828r-41094.jpg",
            },
            {
              name: "BharatBenz 4228C",
              priceRange: "₹47.70 - ₹48.97 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/4228r/bharat-benz-4228r-14182.jpg",
            },
          ],
          url: "/en/brands/bharat-benz",
        },
        ElectricTruck: {
          heading: "",
          details: [

          ],
          url: "",
        },
        TableToggle: {
          heading: "Tata Ace gold Price in",
          content: [
            "{bold}BharatBenz 2623R price{/bold} starts at Rs ₹35.97 Lakh in New Delhi. The lowest price model is CBC/5275. BharatBenz 2623R is a 6 wheeler commercial vehicle. It is available in 2 variants. The 2623R is compliant with the BS-VI emission standards. Other key specifications include wheel base of 5275 mm, fuel capacity of 380 litres & Power of 241. Visit BharatBenz Showrooms for best offers & deals. BharatBenz 2623R competes with Tata Signa 2823.K HD 9S Price in New Delhi, Tata Signa 5525.S Price in New Delhi and Tata Signa 5530.S 4x2 Price in New Delhi"

          ],
          linkmap: [
            { text: "BharatBenz 2623R price", url: "https://example.com/bharatbenz-2623r" },
          ],
          title: "Tata Ace Price List In India",
          columns: ['Model', 'Price'],
          details: [
            { Model: "Tata Ace Gold", Price: "₹3.99 - ₹6.69 Lakh" },
            { Model: "Tata Ace EV", Price: "From ₹8.72 Lakh" },
            { Model: "Tata Ace HT+", Price: "From ₹7.19 Lakh" },
            { Model: "Tata Ace EV 1000", Price: "₹11.27 - ₹11.40 Lakh" },
            { Model: "Tata Ace Diesel", Price: "From ₹7.00 Lakh" }
          ]
        },
        overviewCard: {
          image: "https://truckcdn.cardekho.com/in/bharat-benz/2623r/bharat-benz-2623r.jpg?impolicy=resize&imwidth=286",
          heading: "BharatBenz 2826R",
          rating: "4.5",
          reviews: 118,
          price: "₹8.51 - ₹10.71 Lakh*"
        }
      }
    },
    "/en/trucks/bharat-benz/2826-r/specifications": {
      "menuItems": [
        {
          "path": "/en/trucks/bharat-benz/2826-r",
          "label": "2826R",
          "activeClass": "border-b-2 p-3 border-red-700"
        },
        {
          "path": "/en/trucks/bharat-benz/2826-r/price-in-:city",
          "label": "Price",
          "activeClass": "text-red-700"
        },
        {
          "path": "#",
          "label": "Compare",
          "hasDropdown": true
        },
        {
          "path": "/en/trucks/bharat-benz/2826-r/specifications",
          "label": "Specifications",
          "activeClass": "text-red-500"
        }
      ],
      "links": [
        {
          "href": "/en/bharat-benz-dealers-in-new-delhi.html?model=2826-r",
          "label": "Dealers",
          "icon": "https://cdn-icons-png.flaticon.com/512/12341/12341343.png"
        },
        {
          "href": "/en/bharat-benz-service-in-new-delhi.html?model=2826-r",
          "label": "Service Center",
          "icon": "https://cdn-icons-png.flaticon.com/512/4410/4410666.png"
        },
        {
          "href": "https://trucks.cardekho.com/en/body-maker.html",
          "label": "Body Makers",
          "icon": "https://cdn-icons-png.flaticon.com/512/1085/1085392.png"
        },
        {
          "href": "/en/trucks/bharat-benz/2826-r/videos",
          "label": "Videos",
          "icon": "https://cdn-icons-png.flaticon.com/512/2859/2859706.png"
        },
        {
          "href": "/en/trucks/bharat-benz/2826-r/emi-calculator",
          "label": "EMI Calculator",
          "icon": "https://cdn-icons-png.flaticon.com/512/6884/6884209.png"
        }
      ],
      "breadcrumb": [
        {
          "label": "Home",
          "path": "/"
        },
        {
          "label": "BharatBenz Trucks",
          "path": "/en/brands/bharat-benz"
        },
        {
          "label": "2826-r",
          "path": "/en/trucks/bharat-benz/2826-r"
        },
        {
          "label": "Specifications",
          "path": ""
        }
      ],

      body: {
        heading: 'BharatBenz 2826R',
        truckDetails: {
          url: '',
          details: []
        },
        // "truckVariants": {
        //   heading: '2826R Mileage (Variant)',
        //   description: '',
        //   details: [
        //     {
        //       variantName: "BharatBenz 2826R 5175/CBC/Sleeper Tanker",
        //       gvw: "Get On Road Price",
        //     },
        //   ]
        // },
        truckAlterNative: {
          order: 2,
          footerheading: "Populer Tippers",
          url: "/en/popular-truck/tippers",
          details: [
            {
              name: "Tata Signa 5530.S",
              price: "From ₹39.03 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-2823-k-rmc-std-6s/tata-signa-2823-k-rmc-std-6s-54500.jpg"
            },
            {
              name: "Tata Signa 3523.TK",
              price: "From ₹49.23 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-4223t/tata-signa-4223t-95359.jpg"
            },
            {
              name: "Tata Signa 1923.K",
              price: "From ₹28.91 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-2821-k-rmc-std-6s/tata-signa-2821-k-rmc-std-6s.jpg"
            },
            {
              name: "Tata Signa 1923.K",
              price: "From ₹28.91 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/tata/407-gold-sfc/tata-407-gold-sfc-15836.jpg"
            },
            {
              name: "Tata Signa 1923.K",
              price: "From ₹28.91 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/eicher/pro-2049/eicher-pro-2049-47454.jpg"
            },
          ]
        },
        "truckDealers": {
          details: [],
        },
        "truckCompetitors": {
          heading: '',
          details: []
        },
        truckReviews: {
          order: 1,
          heading: '2826R',
          performance: 5,
          maintenance: 4,
          design: 5,
          details: [
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
          ]
        },
        truckOptions: {
          details: []
        },
        truckNews: {
          details: []
        },
        truckUses: {
          details: []
        },
        truckVideo: {
          heading: '',
          description: '',
          details: []
        },
        truckMultitab: {
          tabs: [],
          details: {
          }
        },

        ReseachTruck: {
          order: 1,
          heading: "Further Research",
          details: [
            {
              title: "2826R On Road Price",
              imageUrl: 'https://cdn-icons-png.flaticon.com/512/13859/13859311.png',
              url: "/en/trucks/bharat-benz/2826-r/price-in-mumbai",
            },
            {
              title: "2826R Specifications",
              imageUrl: 'https://cdn-icons-png.flaticon.com/512/2702/2702651.png',
              url: "/en/trucks/bharat-benz/2826-r/specifications",
            },
            {
              title: "2826R Images",
              imageUrl: 'https://cdn-icons-png.flaticon.com/512/9284/9284918.png',
              url: "/en/trucks/bharat-benz/2826-r/images",
            },
            {
              title: "2826R Videos",
              imageUrl: 'https://cdn-icons-png.flaticon.com/512/14068/14068622.png',
              url: "/en/trucks/bharat-benz/2826-r/videos",
            },
          ]
        },
        populerTruck: {
          order: 2,
          heading: "Popular BharatBenz Trucks",
          details: [
            {
              name: "BharatBenz 1917R",
              priceRange: "₹28.35 - ₹30.61 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/3528c-bs6/bharat-benz-3528c-bs6-64528.jpg",
            },
            {
              name: "BharatBenz 1917R",
              priceRange: "₹28.35 - ₹30.61 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/1917r/bharat-benz-1917r.jpg",
            },
            {
              name: "BharatBenz 3528C",
              priceRange: "₹52.97 - ₹60.60 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/1217c/bharat-benz-1217c-60162.jpg",
            },
            {
              name: "BharatBenz 3528C",
              priceRange: "₹28.30 - ₹28.88 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/4828r/bharat-benz-4828r-41094.jpg",
            },
            {
              name: "BharatBenz 4228C",
              priceRange: "₹47.70 - ₹48.97 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/4228r/bharat-benz-4228r-14182.jpg",
            },
          ],
          url: "/en/brands/bharat-benz",
        },
        ElectricTruck: {
          heading: "",
          details: [

          ],
          url: "",
        },

        overviewCard: {
          image: "https://truckcdn.cardekho.com/in/bharat-benz/2623r/bharat-benz-2623r.jpg?impolicy=resize&imwidth=286",
          heading: "BharatBenz 2826R",
          rating: "4.5",
          reviews: 118,
          price: "₹8.51 - ₹10.71 Lakh*"
        },
        truckSpecification: {
          heading: "Key Specifications of BharatBenz 2826R",
          content: [
            "The {bold}BharatBenz 4828R{/bold} is available in 1 variants. The BharatBenz 4828R offers in 7200 cc. Its payload capacity is 32500 Kgs, GVW 47500 kg and wheelbase is 6575 mm. 4828R is a 16 wheeler commercial vehicle.",
          ],
          linkmap: [
            { text: "BharatBenz 4828R", url: "https://example.com/bharatbenz-4828r" },
          ]
        },
        keySpecification: {
          heading: 'Key Specifications of BharatBenz 2826R',
          details: [
            {
              name: 'Battery Capacity',
              value: '120 Ah',
              // icon: "https://cdn-icons-png.flaticon.com/512/2087/2087628.png"
            },
            {
              name: 'Number of Tyre',
              value: '10',
              // icon: "https://cdn-icons-png.flaticon.com/512/4606/4606838.png"
            },
            {
              name: 'Power',
              value: '250 hp',
              // icon: "https://cdn-icons-png.flaticon.com/512/3596/3596171.png"
            },
            {
              name: 'Engine',
              value: '6700 cc',
              // icon: "https://cdn-icons-png.flaticon.com/512/8049/8049675.png"
            },
            {
              name: 'Fuel Tank',
              value: '380/355 Ltr',
              // icon: "https://cdn-icons-png.flaticon.com/512/4906/4906874.png"
            },
            {
              name: 'Chassis Type',
              value: 'Chassis with Cabin',
              // icon: "https://cdn-icons-png.flaticon.com/512/810/810006.png"

            },
          ]
        },
        scrollSpyFetaures: {
          order: 1,
          heading: "BharatBenz 2826R Specs & Features",
          details: [
            {
              category: "Performance",
              specs: [
                { name: "Max Power", value: "241 hp" },
                { name: "Displacement (cc)", value: "7200 cc" },
                { name: "Fuel Tank (Litres)", value: "380 Ltr" },
                { name: "Engine", value: "OM 926" },
                { name: "Fuel Type", value: "Diesel" },
                { name: "Emission Norms", value: "BS-VI" },
                { name: "Max Torque", value: "850 Nm" },
                { name: "Mileage", value: "4.25 kmpl" },
                { name: "Gradeability (%)", value: "27 %" },
                { name: "Max Speed (km/h)", value: "80" },
                { name: "Engine Cylinders", value: "6" },
                { name: "Turning Radius (mm)", value: "22700" },
                { name: "Battery Capacity", value: "120 Ah" },
                { name: "Product Type", value: "L5N (High Speed Goods Carrier)" },
              ]
            },
            {
              category: "Dimension",
              specs: [
                { name: "Overall Length (mm)", value: "9885" },
                { name: "Overall Width (mm)", value: "2490" },
                { name: "Overall Height (mm)", value: "2930" },
                { name: "Ground Clearance (mm)", value: "230" },
                { name: "Wheelbase (mm)", value: "5275 mm" },
              ]
            },
            {
              category: "Transmission & Loading Capacity",
              specs: [
                { name: "Transmission", value: "Manual" },
                { name: "Payload (Kgs)", value: "16000 Kgs" },
                { name: "GVW / GCW (Kgs)", value: "25500 kg" },
                { name: "Gear Box", value: "6 Forward + 1 Reverse" },
                { name: "Clutch", value: "Mechanical, synchromesh gears Single dry plate, hydraulic control" },
                { name: "Power Steering", value: "Yes" },
              ]
            },
            {
              category: "Features",
              specs: [
                { name: "Steering", value: "Hydraulic assisted power steering" },
                { name: "A/C", value: "Optional" },
                { name: "Cruise Control", value: "No" },
                { name: "Seat Type", value: "Standard" },
                { name: "Driver Information Display", value: "Yes" },
                { name: "Seating Capacity", value: "D+1" },
                { name: "Seat Belts", value: "Yes" },
              ]
            },
            {
              category: "Brakes & Suspension",
              specs: [
                { name: "Brakes", value: "Drum Brakes" },
                { name: "Front Axle", value: "IF7.0" },
                { name: "Front Suspension", value: "Parabolic leaf spring" },
                { name: "Rear Axle", value: "IR440+" },
                { name: "Rear Suspension", value: "Semi elliptic" },
                { name: "ABS", value: "Yes" },
                { name: "Parking Brakes", value: "Yes" },
              ]
            },
            {
              category: "Body Option & Cabin Type",
              specs: [
                { name: "Chassis Type", value: "Chassis with Cabin" },
                { name: "Body Option", value: "Customizable body" },
                { name: "Cabin Type", value: "Sleeper Cabin" },
                { name: "Tiltable Cabin", value: "Yes" },
              ]
            },
            {
              category: "Tyres",
              specs: [
                { name: "Number of Tyre", value: "6" },
                { name: "Rear Tyre", value: "295/80R22.5" },
                { name: "Front Tyre", value: "295/80R22.5" },
              ]
            },
            {
              category: "Others",
              specs: [

                { name: "Chassis", value: "Yes" },
                { name: "Battery(Volts)", value: "24V" }
              ]
            }

          ]
        }
      }
    },
    "/en/trucks/tata/ace-gold": {
      "menuItems": [
        {
          "path": "/en/trucks/tata/ace-gold",
          "label": "Ace Gold",
          "activeClass": "border-b-2 p-3 border-blue-700"
        },
        {
          "path": "/en/trucks/tata/ace-gold/price-in-new-delhi",
          "label": "Price",
          "activeClass": "text-blue-700"
        },
        {
          "path": "#",
          "label": "Compare",
          "hasDropdown": true
        },
        {
          "path": "/en/trucks/tata/ace-gold/specifications",
          "label": "Specifications",
          "activeClass": "text-blue-500"
        }
      ],
      "links": [
        {
          "href": "/en/tata-dealers-in-new-delhi.html?model=ace-gold",
          "label": "Dealers"
        }
      ],
      "overview": {
        "image": [
          "https://truckcdn.cardekho.com/in/tata/ace-gold/tata-ace-gold-21473.jpg?imwidth=480&impolicy=resize"
        ],
        "heading": "Tata Ace gold",
        "recommendedTruck": [
          {
            "name": "Isuzu D-MAX",
            "image": "",
            "priceRange": "₹8.32 - ₹8.36 Lakh*"
          },
          {
            "name": "Mahindra Bolero Camper",
            "image": "",
            "priceRange": "From ₹10.61 Lakh*"
          },
          {
            "name": "Ashok Leyland Dost +",
            "image": "",
            "priceRange": "₹7.75 - ₹8.25 Lakh*"
          }
        ],
        "rating": "4.2",
        "reviews": 86,
        "price": "₹3.99 - ₹6.69 Lakh*"
      },
      "breadcrumb": [
        {
          "label": "Home",
          "path": "/"
        },
        {
          "label": "TRUCKS Trucks",
          "path": "/en/brands/tata"
        },
        {
          "label": "TATA Ace",
          "path": "/en/truck/tata-ace"
        },
        {
          "label": "ACE GOLD",
          "path": "/en/trucks/tata/ace-gold"
        }
      ],
      "body": {
        heading: "Tata Ace gold",
        truckDetails: {
          url: "/en/trucks/tata/ace-gold/specifications",
          details: [
            {
              logo: 'Battery Capacity',
              value: '120 Ah',
              icon: "https://cdn-icons-png.flaticon.com/512/2087/2087628.png"
            },
            {
              logo: 'Number of Tyre',
              value: '10',
              icon: "https://cdn-icons-png.flaticon.com/512/4606/4606838.png"
            },
            {
              logo: 'Power',
              value: '250 hp',
              icon: "https://cdn-icons-png.flaticon.com/512/3596/3596171.png"
            },
            {
              logo: 'Engine',
              value: '6700 cc',
              icon: "https://cdn-icons-png.flaticon.com/512/8049/8049675.png"
            },
            {
              logo: 'Fuel Tank',
              value: '380/355 Ltr',
              icon: "https://cdn-icons-png.flaticon.com/512/4906/4906874.png"
            },
            {
              logo: 'Chassis Type',
              value: 'Chassis with Cabin',
              icon: "https://cdn-icons-png.flaticon.com/512/810/810006.png"

            },
          ]
        },
        truckVariants: {
          heading: "Tata Ace gold MiniTruck  Price List (Variants)",
          description: "Tata Ace gold is offered in 7 variants - the base model of Ace gold is 2100/Petrol CX and the top variant is 2250/HT Plus which come with 1950 Kgs.",
          details: [{
            variantName: "Tata Ace gold 2250/CNG",
            gvw: "Get On Road Price",
          },
          {
            variantName: "BharatBenz 2826R 5775/CBC/Sleeper",
            gvw: "Get On Road Price",
          },
          {
            variantName: "BharatBenz 2826R 6375/CBC/Sleeper",
            gvw: "Get On Road Price",
          },
          ]
        },
        truckAlterNative: {
          footerheading: "Populer mini trucks",
          url: "/en/popular-truck/mini-truck",
          details: [
            {
              name: "Tata Signa 5530.S",
              price: "From ₹39.03 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-2823-k-rmc-std-6s/tata-signa-2823-k-rmc-std-6s-54500.jpg"
            },
            {
              name: "Tata Signa 3523.TK",
              price: "From ₹49.23 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-4223t/tata-signa-4223t-95359.jpg"
            },
            {
              name: "Tata Signa 1923.K",
              price: "From ₹28.91 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-2821-k-rmc-std-6s/tata-signa-2821-k-rmc-std-6s.jpg"
            },
            {
              name: "Tata Signa 1923.K",
              price: "From ₹28.91 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/tata/407-gold-sfc/tata-407-gold-sfc-15836.jpg"
            },
            {
              name: "Tata Signa 1923.K",
              price: "From ₹28.91 Lakh*",
              offer: "View October offers",
              imageUrl: "https://truckcdn.cardekho.com/in/eicher/pro-2049/eicher-pro-2049-47454.jpg"
            },
          ]
        },
        truckDealers: {
          details: [
            {
              name: "Wasan Trucking",
              address: "Wasan house, 5th floor , Plot No 4, swastik park , Sion - Trombay Road , Chembur 400071",
              phone: "+917021662912",
              contact: "Contact Dealer"
            },
            {
              name: "Wasan Trucking",
              address: "Unit -28, Ajay Mittal ind estate, Building no.1, Mittal estate, Marol Naka, Andheri (East),Mumbai 400059",
              contact: "Contact Dealer"
            },
            {
              name: "Wasan Trucking",
              address: "Shop no.24, BGTA Godavari Co. society, G1, MMRDA Wadala Truck terminal, Near Wadala RTO, Mumbai 400037",
              contact: "Contact Dealer"
            },
            {
              name: "Wasan Trucking",
              address: "Wasan House, 5th Floor, Plot No. 4, Swastik Park, Sion Trombay Road, Chembur 400071",
              contact: "Contact Dealer"
            },
            {
              name: "Wasan Trucking",
              address: "Wasan House, 5th Floor, Plot No. 4, Swastik Park, Sion Trombay Road, Chembur 400071",
              contact: "Contact Dealer"
            }
          ]
        },
        "truckCompetitors": {
          heading: "3123R",
          details: [
            {
              model: "BharatBenz 3123R",
              image: "https://truckcdn.cardekho.com/in/bharat-benz/3123r/bharat-benz-3123r-47528.jpg",
              priceRange: "₹40.97 - ₹41.97 Lakh*",
              comparison: "2826R vs 3123R",
              offerLink: "View All Offers"
            },
            {
              image: "https://truckcdn.cardekho.com/in/man/cla-31300-evo-8x4/man-cla-31300-evo-8x4.jpg",
              model: "Man CLA 31.300 EVO 8X4",
              priceRange: "From ₹39.00 Lakh*",
              comparison: "2826R vs CLA 31.300 EVO 8X4",
              offerLink: "View All Offers"
            },
            {
              image: "https://truckcdn.cardekho.com/in/eicher/pro-6041/eicher-pro-6041-79227.jpg",
              model: "Man CLA 31.300 EVO 8X4",
              priceRange: "From ₹39.00 Lakh*",
              comparison: "2826R vs CLA 31.300 EVO 8X4",
              offerLink: "View All Offers"
            },
            {
              image: "https://truckcdn.cardekho.com/in/tata/signa-1923-k/tata-signa-1923-k-27351.jpg",
              model: "Man CLA 31.300 EVO 8X4",
              priceRange: "From ₹39.00 Lakh*",
              comparison: "2826R vs CLA 31.300 EVO 8X4",
              offerLink: "View All Offers"
            },
            {
              image: "https://truckcdn.cardekho.com/in/tata/signa-1923-k/tata-signa-1923-k-27351.jpg",
              model: "Man CLA 31.300 EVO 8X2",
              priceRange: "From ₹39.00 Lakh*",
              comparison: "2826R vs CLA 31.300 EVO 8X2",
              offerLink: "View All Offers"
            },
            {
              image: "",
              model: "",
              priceRange: "",
              comparison: "",
              offerLink: "",
              link: "/en/compare"
            }
          ]
        },
        truckReviews: {
          heading: '2826R',
          performance: 5,
          maintenance: 4,
          design: 5,
          details: [
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
          ]
        },
        truckOptions: {
          details: [
            {
              model: "MHCV Vehicles",
              image: "https://truckcdn.cardekho.com/pwa/img/explore/mhcv.jpg",
            },
            {
              image: "https://truckcdn.cardekho.com/pwa/img/explore/trucks.jpg",
              model: "Trucks",
            },
            {
              model: "Trucks above 40 Lakh",
              image: "https://truckcdn.cardekho.com/pwa/img/explore/above-40-lakh.jpg",
            },
            {
              image: "https://truckcdn.cardekho.com/pwa/img/explore/fuelType.jpg",
              model: "Deasel",
            },
            {
              image: "https://truckcdn.cardekho.com/in/tata/signa-1923-k/tata-signa-1923-k-27351.jpg",
              model: "Man CLA 31.300 EVO 8X2",
            },
          ]
        },
        truckNews: {
          details: [

          ]
        },
        truckUses: {
          details: [
            {
              model: "Cement",
              image: "https://truckcdn.cardekho.com/pwa/img/explore/cement.jpg",
            },
            {
              image: "https://truckcdn.cardekho.com/pwa/img/explore/auto-logistics.jpg",
              model: "Auto Logistics",
            },
            {
              model: "Beverage",
              image: "https://truckcdn.cardekho.com/pwa/img/explore/beverage.jpg",
            },
            {
              image: "https://truckcdn.cardekho.com/pwa/img/explore/construction.jpg",
              model: "Construction",
            },
            {
              image: "https://truckcdn.cardekho.com/pwa/img/explore/fishery.jpg",
              model: "Fishery",
            },
          ]
        },
        truckVideo: {
          heading: '',
          description: '',
          details: []
        },
        truckMultitab: {
          tabs: ['Price', 'Loading', 'Specifications', 'Cabin'],
          details: {

          }
        },
        populerTruck: {
          heading: "Popular ace-gold Trucks",
          details: [
            {
              name: "ace-gold",
              priceRange: "₹28.35 - ₹30.61 Lakh*",
              imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/3528c-bs6/bharat-benz-3528c-bs6-64528.jpg",
            },
          ],
          url: "/en/brands/ace-gold",
        },
        ReseachTruck: {
          heading: "Furthor Research",
          details: [
            {
              title: "2826R On Road Price",
              imageUrl: '',
              url: "/en/trucks/bharat-benz/2826-r/price-in-mumbai",
            },
            {
              title: "2826R Specifications",
              imageUrl: '',
              url: "/en/trucks/bharat-benz/2826-r/specifications",
            },
            {
              title: "2826R Images",
              imageUrl: '',
              url: "/en/trucks/bharat-benz/2826-r/images",
            },
            {
              title: "2826R Videos",
              imageUrl: '',
              url: "/en/trucks/bharat-benz/2826-r/videos",
            },
          ]
        },
        ElectricTruck: {
          heading: "Popular Electrick Trucks",
          details: [

          ],
          url: "/en/electric-trucks",
        },
        TableToggle: {
          heading: "Tata Ace gold Price in",
          content: [
            "Tata Ace gold price starts at Rs ₹3.99 Lakh in Bangalore. The lowest price model is ",
            "{bold}2100/Petrol CX{/bold}",
            ". Tata Ace gold is a 4 wheeler commercial vehicle. It is available in 7 variants. The Ace gold is compliant with the BS-VI emission standards. Other key specifications include wheel base of 2100 mm, fuel capacity of 26 litres & Power of 24 hp. Visit Tata Showrooms for best offers & deals. Tata Ace gold competes with ",
            "{bold}Mahindra Jeeto Price in Bangalore{/bold}",
            ", ",
            "{link}https://www.mahindra.com/jeeto{/link}",
            " and ",
            "{bold}Maruti Suzuki Super Carry Price in Bangalore{/bold}",
            "."
          ],
          linkmap: [

          ],
          title: "Tata Ace Price List In India",
          columns: ['Model', 'Price'],
          details: [
            { Model: "Tata Ace Gold", Price: "₹3.99 - ₹6.69 Lakh" },
            { Model: "Tata Ace EV", Price: "From ₹8.72 Lakh" },
            { Model: "Tata Ace HT+", Price: "From ₹7.19 Lakh" },
            { Model: "Tata Ace EV 1000", Price: "₹11.27 - ₹11.40 Lakh" },
            { Model: "Tata Ace Diesel", Price: "From ₹7.00 Lakh" }
          ]
        }
      }
    },


    // use for body-maker content
    "/en/body-maker-in-:city": {
      "breadcrumb": [
        {
          "label": "Home",
          "path": "/"
        },
        {
          "label": "New Trucks",
          "path": "/en/new-trucks"
        },
        {
          "label": "Body Markers",
          "path": "/en/body-maker"
        },
        {
          "label": ":city",
          "path": ""
        }
      ],
    },
    "default": {
      "menuItems": [
        {
          "path": "/",
          "label": "Home",
          "activeClass": "text-red-700"
        },
        {
          "path": "/about",
          "label": "About",
          "activeClass": "text-red-700"
        },
        {
          "path": "/contact",
          "label": "Contact",
          "activeClass": "text-red-700"
        }
      ],
      "links": [],
      "overview": {},
      "breadcrumb": [
      ],

      "body": {
        heading: '',
        truckDetails: {
          url: '',
          details: []
        },
        "truckVariants": {
          heading: '',
          description: '',
          details: []
        },
        "truckAlterNative": {
          footerheading: '',
          url: '',
          details: [],
        },
        "truckDealers": {
          details: [],
        },
        "truckCompetitors": {
          heading: '',
          details: []
        },
        truckReviews: {
          heading: '',
          performance: 0,
          maintenance: 0,
          design: 0,
          details: []
        },
        truckOptions: {
          details: []
        },
        truckNews: {
          details: []
        },
        truckUses: {
          details: []
        },
        truckVideo: {
          heading: '',
          description: '',
          details: []
        },
        truckMultitab: {
          tabs: [],
          details: {
          }
        },
        populerTruck: {
          heading: "",
          details: [
            {
              name: "",
              priceRange: "",
              imageUrl: "",
            },
          ],
          url: "",
        },
        ReseachTruck: {
          heading: "",
          details: []
        },
        ElectricTruck: {
          heading: "",
          details: [

          ],
          url: "",
        },
        TableToggle: {
          heading: "Tata Ace gold Price in",
          content: [
            "Tata Ace gold price starts at Rs ₹3.99 Lakh in Bangalore. The lowest price model is ",
            "{bold}2100/Petrol CX{/bold}",
            ". Tata Ace gold is a 4 wheeler commercial vehicle. It is available in 7 variants. The Ace gold is compliant with the BS-VI emission standards. Other key specifications include wheel base of 2100 mm, fuel capacity of 26 litres & Power of 24 hp. Visit Tata Showrooms for best offers & deals. Tata Ace gold competes with ",
            "{bold}Mahindra Jeeto Price in Bangalore{/bold}",
            ", ",
            "{link}https://www.mahindra.com/jeeto{/link}",
            " and ",
            "{bold}Maruti Suzuki Super Carry Price in Bangalore{/bold}",
            "."
          ],
          linkmap: [],
          title: "Tata Ace Price List In India",
          columns: ['Model', 'Price'],
          details: [
            { Model: "Tata Ace Gold", Price: "₹3.99 - ₹6.69 Lakh" },
            { Model: "Tata Ace EV", Price: "From ₹8.72 Lakh" },
            { Model: "Tata Ace HT+", Price: "From ₹7.19 Lakh" },
            { Model: "Tata Ace EV 1000", Price: "₹11.27 - ₹11.40 Lakh" },
            { Model: "Tata Ace Diesel", Price: "From ₹7.00 Lakh" }
          ]
        }
      }
    }
  }

  const url = new URL(request.url);
  // Extract the endpoint from searchParams
  const endpoint = url.searchParams.get('endpoint');
  console.log("endpoints", endpoint);

  if (!endpoint) {
    return NextResponse.json({ error: 'Endpoint query parameter is missing' });
  }

  try {
    // **Step 1: Check for a direct match**
    if (navbarData[endpoint]) {
      const data = navbarData[endpoint] || navbarData['default'];
      return NextResponse.json({ menuItems: data.menuItems, links: data.links, overview: data.overview, data });
    }

    // **Step 2: Extract dynamic parts of the URL for truck-specific routes**
    const truckMatch = endpoint.match(/\/en\/trucks\/([a-zA-Z0-9-]+)\/([a-zA-Z0-9-]+)\/price-in-([a-zA-Z-]+)/);
    const brand = truckMatch ? truckMatch[1] : null;
    const model = truckMatch ? truckMatch[2] : null;
    const cityName = truckMatch ? truckMatch[3] : null;

    // **Step 3: Extract dynamic parts of the URL for body-maker routes**
    const bodyMakerMatch = endpoint.match(/\/en\/body-maker-in-([a-zA-Z-]+)/);
    const bodyMakerCity = bodyMakerMatch ? bodyMakerMatch[1] : null;
    console.log("city",bodyMakerCity);
    
    let data = null;

    // **Step 4: Try to find the specific entry for trucks**
    if (brand && model) {
      data = navbarData[`/en/trucks/${brand}/${model}/price-in-${cityName}`];
      if (!data) {
        // Look for a dynamic route like "price-in-:city"
        data = navbarData[`/en/trucks/${brand}/${model}/price-in-:city`];
        if (data) {
          // Replace ":city" placeholder with the actual city name in paths and links
          data = JSON.parse(JSON.stringify(data).replace(/:city/g, cityName || 'new-delhi'));
        } else {
          // Fall back to default if no city-specific data is found
          data = navbarData['default'];
        }
      }
    }
    // **Step 5: Try to find the specific entry for body-maker routes**
    else if (bodyMakerCity) {
      data = navbarData[`/en/body-maker-in-${bodyMakerCity}`];
      if (!data) {
        // Look for a dynamic route like "body-maker-in-:city"
        data = navbarData[`/en/body-maker-in-:city`];
        if (data) {
          // Replace ":city" placeholder with the actual city name in paths and links
          data = JSON.parse(JSON.stringify(data).replace(/:city/g, bodyMakerCity));
        } else {
          // Fall back to default if no city-specific data is found
          data = navbarData['default'];
        }
      }
    } else {
      // If neither trucks nor body-maker paths match, return the default
      data = navbarData['default'];
    }

    return NextResponse.json({ menuItems: data.menuItems, links: data.links, overview: data.overview, data });

  } catch (error) {
    console.error('Error reading or parsing navbar data:', error);
    return NextResponse.json({ error: 'Failed to fetch navbar data' });
  }


  // try {
  //   // **Step 1: Check for a direct match**
  //   if (navbarData[endpoint]) {
  //     const data = navbarData[endpoint] || navbarData['default'];
  //     return NextResponse.json({ menuItems: data.menuItems, links: data.links, overview: data.overview, data });
  //   }
  //   // **Step 2: Extract dynamic parts of the URL (brand, model, and city)**
  //   const match = endpoint.match(/\/en\/trucks\/([a-zA-Z0-9-]+)\/([a-zA-Z0-9-]+)\/price-in-([a-zA-Z-]+)/);
  //   const brand = match ? match[1] : null;
  //   const model = match ? match[2] : null;
  //   const cityName = match ? match[3] : 'new-delhi'; // Default to 'new-delhi' if not found


  //   // **Step 3: Try to find the specific city-based entry**
  //   let data = navbarData[`/en/trucks/${brand}/${model}/price-in-${cityName}`];
  //   if (!data) {
  //     // If specific entry for the city is not found, look for a dynamic route like "price-in-:city"
  //     data = navbarData[`/en/trucks/${brand}/${model}/price-in-:city`];

  //     if (data) {
  //       // Replace ":city" placeholder with the actual city name in paths and links
  //       data = JSON.parse(JSON.stringify(data).replace(/:city/g, cityName || 'new-delhi'));
  //     } else {
  //       // If no dynamic route found, fall back to the default
  //       data = navbarData['default'];
  //     }
  //   }
  //   return NextResponse.json({ menuItems: data.menuItems, links: data.links, overview: data.overview, data });
  // } catch (error) {
  //   console.error('Error reading or parsing navbar data:', error);
  //   return NextResponse.json({ error: 'Failed to fetch navbar data' });
  // }



}
