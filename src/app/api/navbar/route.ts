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

type NavbarItem = {
  menuItems: {
    path: string;
    label: string;
    activeClass?: string;
    hasDropdown?: boolean;
  }[];
  links: {
    href: string;
    label: string;
    icon?: string;
  }[];
  overview: {
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
  body: {
    heading: string;
    truckDetails: {
      url: string;
      details: TruckDetail[]
    };
    truckVariants: {
      heading: string;
      description: string;
      details: TruckVariant[]
    };
    truckAlterNative: {
      footerheading: string;
      url: string;
      details: AlterNativeDetails[]
    };
    truckDealers: {
      details: TruckDelers[]
    };
    truckCompetitors: {
      heading: string;
      details: TruckCompetiters[]
    };
    truckReviews: {
      heading: string;
      performance: number;
      maintenance: number;
      design: number;
      details: TruckReviews[]
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
          heading: "BharatBenz 2826R",
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
          heading: "Tata Ace gold MiniTruck",
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
        }
      }
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
        }
      }
    }
  }

  const url = new URL(request.url);
  // Extract the endpoint from searchParams
  const endpoint = url.searchParams.get('endpoint');

  if (!endpoint) {
    return NextResponse.json({ error: 'Endpoint query parameter is missing' });
  }

  // const filePath = path.join(process.cwd(), 'public', 'navbarData.json');
  try {
    // Read the navbarData.json file
    // const fileData = await fs.readFile(filePath, 'utf-8');
    // const navbarData = JSON.parse(fileData);

    // Find the matching data in navbarData based on the normalized endpoint
    const data = navbarData[endpoint] || navbarData['default'];

    return NextResponse.json({ menuItems: data.menuItems, links: data.links, overview: data.overview, data });
  } catch (error) {
    console.error('Error reading or parsing navbar data:', error);
    return NextResponse.json({ error: 'Failed to fetch navbar data' });
  }
}
