'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';
import { BsShopWindow, BsTruckFront } from 'react-icons/bs';
import { IoBodyOutline } from 'react-icons/io5';
import { PiCalculatorLight, PiVideoThin } from 'react-icons/pi';
import { VscNotebook } from 'react-icons/vsc';
import CompareSlider from './compareSlider';


const Navbar = () => {
    const pathname = usePathname(); // Get the current pathname
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // New state to track scroll
    const [isCompareDropdownOpen, setCompareDropdownOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true); // State to control navbar visibility


    const handleMouseEnter = () => setDropdownOpen(true);
    const handleMouseLeave = () => setDropdownOpen(false);

    const handleCompareMouseEnter = () => setCompareDropdownOpen(true); // Handle Compare dropdown open
    const handleCompareMouseLeave = () => setCompareDropdownOpen(false); // Handle Compare dropdown close

    useEffect(() => {
        if (window.innerWidth < 500) {
            if (isCompareDropdownOpen || isDropdownOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

        return () => {
            document.body.style.overflow = 'auto'; // Cleanup on unmount
        };
    }, [isCompareDropdownOpen, isDropdownOpen]);

    useEffect(() => {
     

        const handleScroll = () => {
            const scrollPosition = window.scrollY; // Current scroll position
            
            // Set isScrolled based on the scroll position relative to the threshold
            if (scrollPosition > 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            if (window.innerWidth < 500 && scrollPosition > 350) {
                if (scrollPosition > lastScrollY) {
                    setIsNavbarVisible(false); // Scrolling down, hide navbar
                } else {
                    setIsNavbarVisible(true); // Scrolling up, show navbar
                }
            } else {
                setIsNavbarVisible(true); // Always visible on larger screens
            }

            setLastScrollY(scrollPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const links = [
        {
            href: '/en/bharat-benz-dealers-in-new-delhi.html?model=2826-r',
            label: 'Dealers',
            icon: <BsShopWindow className='w-4 h-4 text-gray-400 hover:text-black' />,
        },
        // Add more link objects here
        {
            href: '/en/bharat-benz-service-in-new-delhi.html?model=2826-r',
            label: 'Service Centers',
            icon: <BsTruckFront className='w-4 h-4 text-gray-400 hover:text-black' />, // Replace with the appropriate icon if needed
        },
        {
            href: 'https://trucks.cardekho.com/en/body-maker.html',
            label: 'Body Makers',
            icon: <IoBodyOutline className='w-4 h-4 text-gray-400 hover:text-black' />,
        },
        {
            href: '/en/trucks/bharat-benz/2826-r/videos',
            label: 'Videos',
            icon: <PiVideoThin className='w-4 h-4 text-gray-400 hover:text-black' />,
        },
        {
            href: '/en/trucks/bharat-benz/2826-r/emi-calculator',
            label: 'EMI Calculator',
            icon: <PiCalculatorLight className='w-4 h-4 text-gray-400 hover:text-black' />,
        },
        {
            href: '/en/download-brochure/bharat-benz/2826-r.html',
            label: 'Brochure',
            icon: <VscNotebook className='w-4 h-4 text-gray-400 hover:text-black' />,
        },
    ];

    const menuItems = [
        {
            path: '/en/trucks/bharat-benz/2826-r',
            label: '2826R',
            activeClass: 'border-b-2 p-3 border-red-700',
            defaultClass: (isScrolled: boolean) =>
                isScrolled
                    ? 'text-white bg-black hover:text-gray-100 hover:bg-gray-800'
                    : 'text-black hover:text-red-500',
        },
        {
            path: '/en/trucks/bharat-benz/2826-r/price-in-new-delhi',
            label: 'Price',
            activeClass: 'text-red-700',
            defaultClass: 'text-gray-500',
        },
        {
            path: '/en/trucks/bharat-benz/2826-r/pictures',
            activeClass: 'text-red-500',
            defaultClass: 'text-gray-500',
            label: 'Compare',
            hasDropdown: true,
        },
        {
            path: '/en/trucks/bharat-benz/2826-r/specifications',
            label: 'Specifications',
            activeClass: 'text-red-500',
            defaultClass: 'text-gray-500',
        },
        {
            path: '/en/trucks/bharat-benz/2826-r/pictures',
            label: 'Pictures',
            activeClass: 'text-red-500',
            defaultClass: 'text-gray-500',
        },

    ];

    return (
        <>
            <nav className={`shadow-sm w-full  z-40  transition-colors duration-300  animate-fadeInDown  ${isScrolled ? 'bg-black text-white  top-0 fixed' : 'bg-white'} ${isNavbarVisible ? 'sm:sticky lg:top-0  ' : 'hidden'} `}>
                <ul className={`flex items-center uppercase space-x-6  p-4 max-w-7xl m-auto  sm:overflow-visible  overflow-auto no-scrollbar `}>

                    {menuItems.map((item, index) => (
                        <li key={index} className="ml-0 " onMouseEnter={item.hasDropdown ? handleCompareMouseEnter : undefined} onMouseLeave={item.hasDropdown ? handleCompareMouseLeave : undefined}>
                            {item.path ? (
                                <>
                                    <Link
                                        href={'#'}
                                        className={`${pathname === item.path
                                            ? isScrolled
                                                ? 'bg-black text-white  lg:text-[14px] text-[14px] font-medium border-b-[3px] py-4 border-[#d94025] transition-colors duration-300 ' // If active and scrolled
                                                : 'lg:text-[14px] text-[14px] font-medium lg:text-red-500 lg:hover:text-red-500  border-b-[3px] py-4 border-[#d94025]' // If active but not scrolled
                                            : isScrolled
                                                ? 'text-white lg:text-[14px] text-[14px] font-medium hover:bg-gray-800 hover:text-gray-100   lg:hover:border-b-[3px] py-4 border-[#d94025]' // If not active and scrolled
                                                : 'text-gray-500 lg:text-[14px] text-[14px] font-medium lg:hover:text-red-500  lg:hover:border-b-[3px] py-4 border-[#d94025] '} // If not active and not scrolled
                           `}
                                    >
                                        <span className="mr-1 inline-flex items-center">

                                            {item.label}
                                            <span>
                                                {item.hasDropdown && <MdOutlineArrowDropDown className='w-4 h-5 ' />}
                                            </span>
                                        </span>
                                    </Link>

                                    {item.hasDropdown && isCompareDropdownOpen && (
                                        <div className=' top-full w-full inset-0 normal-case    bg-white shadow-lg z-10'>
                                            <MdOutlineArrowDropUp className='sm:absolute sm:w-20 sm:h-10 top-8 hidden sm:block font-bold' fill='#F3F4F6' />
                                            <div className='sm:absolute border-b-[1px] rounded-b-lg fixed right-0 left-0 mx-auto mt-[40vh] sm:mt-4  max-w-[1280px] bg-white border border-gray-300 shadow-md z-10'>
                                                <span className='right-2 top-2 text-end mr-2 block sm:hidden cursor-pointer ' onClick={() => { setCompareDropdownOpen(false) }}>
                                                    x
                                                    {/* <IoMdClose onClick={() => {setCompareDropdownOpen(false) }} /> */}
                                                </span>
                                                <CompareSlider />

                                            </div>
                                        </div>

                                    )}
                                </>
                            ) : (
                                <></>
                                // <span
                                //     className={`${isScrolled
                                //         ? 'text-white  text-[14px] hover:bg-gray-800 hover:text-gray-100' // If scrolled
                                //         : 'text-gray-500  text-[14px] lg:hover:text-red-500'} font-semibold cursor-pointer`}
                                // >
                                //     {item.label}
                                // </span>
                            )}
                        </li>
                    ))}

                    <li
                        className="sm:relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span
                            className={`${isScrolled
                                ? 'text-white  lg:text-[14px] text-[14px] font-medium  hover:bg-gray-800 hover:text-gray-100  lg:hover:border-b-[3px] py-4 border-[#d94025]' // If scrolled
                                : 'text-gray-500  lg:text-[14px] text-[14px] font-medium lg:hover:text-red-500  lg:hover:border-b-[3px] py-4 border-[#d94025]'}  cursor-pointer`}
                        >
                            <span className="mr-1 inline-flex items-center">
                                More
                                <MdOutlineArrowDropDown className='w-4 h-5 ' />
                            </span>
                        </span>

                        {isDropdownOpen && (
                            <div className='overflow-auto no-scrollbar '>
                                <MdOutlineArrowDropUp className='sm:absolute sm:w-20 sm:h-10 top-4 hidden sm:block font-bold' fill='#F3F4F6' />
                                <div
                                    className="sm:absolute fixed left-0 mt-[60vh] sm:mt-4 sm:w-60 w-full bg-white border border-gray-300 shadow-md z-10"
                                    onMouseEnter={handleMouseEnter} // Keep dropdown open when hovering over it
                                    onMouseLeave={handleMouseLeave} // Close dropdown when leaving
                                >
                                    <ul className="p-0 space-y-2 ">

                                        {links.map((link) => (
                                            <li key={link.label} className="hover:bg-gray-50 p-2">
                                                <Link href={link.href} className="flex text-gray-500 items-center">
                                                    <span className='font-[22px] mr-[13px] ml-[13px]'>
                                                        {link.icon}
                                                    </span>
                                                    <span className='text-[15px] capitalize text-black'>
                                                        {link.label}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        )}
                    </li>

                </ul>
            </nav>
        </>
    );
};

export default Navbar;
