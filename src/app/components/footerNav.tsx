import React from 'react';
import CompareTrucks from '@/assets/icons/Compare-Trucks.svg'
import { GiRibbonMedal } from 'react-icons/gi';
import { PiTruckLight } from 'react-icons/pi';
import { MdOutlineLocalOffer } from 'react-icons/md';

// interface FooterNavItem {
//     title: string;
//     description: string;
//     // img?: ;
//     url: string;
// }

const footerNavData = [
    {
        title: "India’s #1",
        description: "Largest Auto portal",
        img: <GiRibbonMedal  className='w-10 h-10 text-black' />,
        url: "/auto-portal"
    },
    {
        title: "Truck Sold",
        description: "Every 4 minute",
        img: <PiTruckLight  className='w-10 h-10 text-black' />, // Replace with actual image path
        url: "/truck-sold"
    },
    {
        title: "Offers",
        description: "Stay updated pay less",
        img: <MdOutlineLocalOffer className='w-10 h-10  rotate-90 text-black' />, // Replace with actual image path
        url: "/offers"
    },
    {
        title: "Compare",
        description: "Decode the right Truck",
        img: <CompareTrucks className='w-10 h-10 text-black' />, // Replace with actual image path
        url: "/compare"
    }
];

const FooterNav: React.FC = () => {
    return (
        <footer className="lg:py-4 lg:px-0 py-4 px-4 m-auto max-w-[1280px] ">
            
            <div className="container  grid grid-cols-1 sm:grid-cols-4  gap-4">
                {footerNavData.map((item, index) => (
                    <div key={index} className="inline-flex   items-center text-center hover:text-gray-800">
                        {/* <Image src={item.img} alt={item.title} width={80} height={80} className="w-20 h-20 object-cover" /> */}
                        
                            {item.img}
                        <div className='ml-2'>
                            <p className="font-bold text-start">{item.title}</p>
                            <p className="text-gray-600 text-[12px]">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default FooterNav;
