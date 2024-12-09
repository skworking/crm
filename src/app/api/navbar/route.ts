'use server'
import { NextResponse } from 'next/server';
// import path from 'path';
// import { promises as fs } from 'fs';
// import navbarData from '@/../../public/navBarData.json'
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
        "image": "http://localhost:3000/_next/image?url=https%3A%2F%2Ftruckcdn.cardekho.com%2Fin%2Fbharat-benz%2F2826-r%2Fbharat-benz-2826-r.jpg%3Fimwidth%3D480%26impolicy%3Dresize&w=640&q=75",
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
      "overview": {}
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

    return NextResponse.json({ menuItems: data.menuItems, links: data.links, overview: data.overview });
  } catch (error) {
    console.error('Error reading or parsing navbar data:', error);
    return NextResponse.json({ error: 'Failed to fetch navbar data' });
  }
}
