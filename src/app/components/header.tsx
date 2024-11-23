'use client'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { GoSearch } from 'react-icons/go';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { MdKeyboardArrowRight, MdOutlineArrowDropDown } from 'react-icons/md';
import { TiArrowSortedDown } from 'react-icons/ti';
import { motion } from "framer-motion";
import { IoLocationOutline } from 'react-icons/io5';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useDeviceType from "../comman/deviceDetect";
interface HeaderProps {
    isSticky?: boolean;
}
const Header: React.FC<HeaderProps> = ({ isSticky }) => {
    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const [isOpen, setIsOpen] = useState(false);
    const [opensidebar, setOpnSidebar] = useState(false)
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    // Handle language change
    const dropdownRef = useRef<HTMLButtonElement | null>(null);;
    const languages = ["English", "हिन्दी"]
    const router = usePathname();
    console.log(router);

    // const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 499);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');


    const options = [
        { label: "POPULAR CITIES", isHeader: true },
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const handleSelectCity = (event: SelectChangeEvent) => {
        setSelectedOption(event.target.value as string);
        closeModal();
    };


    const handleOuterClick = (e: React.MouseEvent) => {
        // Close only if the click is outside the modal content
        if ((e.target as HTMLElement).id === "modal-overlay") {
            closeModal();
        }
    };

    const handleSelect = (language: React.SetStateAction<string>) => {
        setSelectedLanguage(language);
        setIsOpen(false); // Close dropdown after selection
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setOpnSidebar(false);
            }
        };

        // Add event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsLargeScreen(window.innerWidth > 500);
    //     };

    //     window.addEventListener('resize', handleResize);

    //     // Clean up event listener on component unmount
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);


    //  header main 
    const menuData = [
        {
            title: "New Truck",

            subMenu: [
                { title: "Search", link: "/new-truck/search" },
                {
                    title: "Popular Brands",
                    subMenu: [
                        { title: "Tata Commercial Vehicles", link: "/brand/tata" },
                        { title: "Ashok Leyland Commercial Vehicles", link: "/brand/ashok-leyland" },
                        { title: "Eicher Commercial Vehicles", link: "/brand/eicher" },
                        { title: "Bharat Benz Commercial Vehicles", link: "/brand/bharat-benz" },
                        { title: "Mahindra Commercial Vehicles", link: "/brand/mahindra" },
                    ],
                },
                { title: "Electric Truck", link: "/new-truck/electric" },
            ],

        },
        { title: "Electric Commercial Vehicles", link: "/electric-commercial-vehicles" },
        { title: "Used Truck", link: "/used-truck" },
        { title: "Compare", link: "/compare" },
        {
            title: "Dealers & Services",
            subMenu: [
                { title: "Dealers", link: "/dealers" },
                { title: "Service Centers", link: "/service-centers" },
                { title: "Spare Parts", link: "/spare-parts" },
                { title: "Body Makers", link: "/body-makers" },
            ],
        },
        { title: "Loan Offers", link: "/loan-offers", offer: true },
        {
            title: "More",
            subMenu: [
                { title: "Videos", link: "/videos" },
                { title: "Download Truck Brochures", link: "/download-truck-brochures" },
                { title: "Tata MHCV vehicles", link: "/tata-mhcv-vehicles" },
                { title: "Get Price Quote", link: "/get-price-quote" },
                { title: "Careers With Us", link: "/careers-with-us" },
            ],
        },

    ];

    const sidebarItems = [
        {
            title: "Search by Body Type",
            subMenu: [
                { title: "Trucks" },
                { title: "Tippers" },
                { title: "Trailer" },
                { title: "Mini Trucks" },
                { title: "Pickup Trucks" },
                { title: "3 Wheeler" },
                { title: "Auto Rickshaw" },
            ],
        },
        {
            title: "Search by Brand",
            subMenu: [
                { title: "Tata" },
                { title: "Ashok Leyland" },
                { title: "Mahindra" },
                { title: "Eicher" },
                { title: "BharatBenz" },
                { title: "View All" },
            ],
        },
        { title: "Latest Commercial" },
        {
            title: "Vehicles",
            subMenu: [
                { title: "Best Commercial Vehicles", link: "/best-commercial-vehicles" },
                { title: "Tata Ace Gold", link: "/tata-ace-gold" },
                { title: "Tata Yodha Pickup", link: "/tata-yodha-pickup" },
                { title: "Mahindra Jeeto", link: "/mahindra-jeeto" },
                { title: "Tata Intra V30", link: "/tata-intra-v30" },
                { title: "Mahindra Treo", link: "/mahindra-treo" },
                { title: "Maruti Super Carry", link: "/maruti-super-carry" },
                { title: "Mahindra E-Alfa Mini", link: "/mahindra-e-alfa-mini" },
                { title: "View All", link: "/view-all" },
            ],
        },
        {
            title: "Series",
            subMenu: [
                { title: "Tata Ace", link: "/tata-ace" },
                { title: "Tata Signa", link: "/tata-signa" },
                { title: "Tata Ultra", link: "/tata-ultra" },
                { title: "Tata Prima", link: "/tata-prima" },
                { title: "Mahindra Bolero", link: "/mahindra-bolero" },
            ],
        },
        {
            title: "Electric Commercial Vehicles",
            link: "/electric-commercial-vehicles",
        },
        {
            title: "Vehicle Segment",
            subMenu: [
                { title: "SCVs and Pick Ups", link: "/scvs-and-pick-ups" },
                { title: "LCVs and ICVs", link: "/lcvs-and-icvs" },
                { title: "MHCV Vehicles", link: "/mhcv-vehicles" },
                { title: "Three Wheelers", link: "/three-wheelers" },
            ],
        },
        {
            title: "Popular Brands",
            link: "/popular-brands",
        },
        {
            title: "Electric Truck",
            link: "/electric-truck",
        },
        {
            title: "Used Trucks",
            link: "/used-trucks",
        },
        {
            title: "Compare Models",
            link: "/compare-models",
        },
        {
            title: "Dealers & Services",
            subMenu: [
                { title: "Dealers", link: "/dealers" },
                { title: "Service Centers", link: "/service-centers" },
                { title: "Spare Parts", link: "/spare-parts" },
                { title: "Body Makers", link: "/body-makers" },
            ],
        },
        {
            title: "News",
            link: "/news",
        },
        {
            title: "Videos",
            link: "/videos",
        },
        {
            title: "Download Brochures",
            link: "/download-brochures",
        },
        {
            title: "Tata MHCV vehicles",
            link: "/tata-mhcv-vehicles",
        },
        {
            title: "Loan Offers",
            link: "/loan-offers",

        },
        {
            title: "About TrucksDekho",
            subMenu: [
                { title: "About Us", link: "/about-us" },
                { title: "Terms & Conditions", link: "/terms-conditions" },
                { title: "Privacy Policy", link: "/privacy-policy" },
                { title: "Feedback", link: "/feedback" },
                { title: "Contact Us", link: "/contact-us" },
                { title: "Advertise with us", link: "/advertise-with-us" },
                { title: "Ask for Price", link: "/ask-for-price" },
                { title: "Careers With Us", link: "/careers-with-us" },
            ],
        },
    ];

    const [openMenu, setOpenMenu] = useState<number | null>(null);
    const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

    const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
    const toggleSubMenu = (index: number) => {
        setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
    };

    const handleMenuMouseEnter = (index: number) => {
        setOpenMenu(index);
        setOpenSubMenu(null); // Close submenus when main menu is opened
    };

    const handleSubMenuMouseEnter = (index: number) => setOpenSubMenu(index);

    const handleMouseLeave = () => {
        setOpenMenu(null);
        setOpenSubMenu(null);
    };

    useEffect(() => {
        // Toggle overflow on the body based on sidebar state
        if (opensidebar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Clean up function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [opensidebar]);
    const deviceType = useDeviceType();
    return (
        <>
            {deviceType === 'desktop' ? (

                <div className='w-full bg-white  shadow-md  '
                    style={{
                        position: isSticky ? "sticky" : "static",
                        top: isSticky ? 0 : undefined,
                        zIndex: isSticky ? 50 : undefined,
                        boxShadow: isSticky ? "0 2px 4px rgba(0, 0, 0, 0.1)" : undefined,
                        background: "white",
                    }}
                >
                    <div className='max-w-7xl m-auto'>
                        <div className='sm:p-4 md:flex gap-4 '>
                            <div className='sm:w-[25%]'>

                                <Image src={'https://truckcdn.cardekho.com/pwa/img/TrucksDekho-NewLogov2.svg'} className='h-[42px]   w-fit text-start' title='truck-dekho logo' width={100} height={100} alt='not found' />
                            </div>
                            <div className="flex md:w-[43.66%] lg:w-[42%]  rounded-md overflow-hidden  font-[sans-serif] ">
                                <input type="text" placeholder="Search Trucks or Brands eg. Tata or Bajaj"
                                    className="w-full outline-none border-2 rounded-l-md shadow-sm bg-[#f7f7f7] text-gray-600 text-sm ml-4 px-4 py-3" />
                                <button type='button' className="flex items-center justify-center md:w-[15%] w-[15%] sm:w-[10%] bg-black px-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-white">
                                        <path
                                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <div className='text-end m-auto right-0  md:w-[33.3%]'>
                                <button
                                    onClick={toggleDropdown}
                                    ref={dropdownRef}
                                    className={`relative   text-gray-900 underline rounded-md  py-2 transition-colors  ${isOpen ? "" : "border-gray-300"
                                        }`}
                                >
                                    <span className='flex text-[12px] items-center'>

                                        {selectedLanguage}
                                        <TiArrowSortedDown />
                                    </span>
                                    {isOpen && (
                                        <ul className="absolute right-0 mt-2 py-2  z-50 w-[120px]  bg-white rounded-md shadow-[2px_4px_12px_hsla(0,0%,45%,.25)]">
                                            {languages.map((language, index) => (
                                                <li
                                                    key={language}
                                                    title={language}
                                                    onClick={() => handleSelect(language)}
                                                    className="px-4 py-1 cursor-pointer text-start text-gray-900"
                                                >
                                                    {language}
                                                    {index < languages.length - 1 && <hr className='w-[97%] m-auto' />}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </button>

                            </div>
                        </div>
                    </div>
                    <hr />
                    <nav className="relative max-w-7xl  m-auto flex justify-between">
                        <ul className="flex max-w-6xl flex-wrap space-x-2  md:space-x-8 " onMouseLeave={handleMouseLeave}>
                            {menuData.map((item, index) => (
                                <li key={index} onMouseEnter={() => handleMenuMouseEnter(index)} className="relative p-2 sm:text-[14px] text-[12px] border-t-[3px]  border-white hover:border-t-[3px] hover:border-[#d94025]">
                                    {item.link ? (
                                        <Link href={item.link} className='flex  transition duration-700' title={item.title}>
                                            {item.title}
                                            {item.offer && <span className="w-10  h-5 ml-2 text-center text-white bg-[#d94025] " >new</span>}
                                        </Link>
                                    ) : (
                                        <span className="flex sm:text-[14px] text-[12px] items-center cursor-pointer  transition duration-700 " >
                                            {item.title}
                                            {item.subMenu && <MdOutlineArrowDropDown className="w-5 h-5 ml-1" />}

                                        </span>

                                    )}


                                    {item.subMenu && openMenu === index && (
                                        <motion.ul
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute z-50 left-0 top-full bg-white text-gray-800 shadow-lg rounded-lg w-48"
                                        >
                                            {item.subMenu.map((subItem, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    onMouseEnter={() => handleSubMenuMouseEnter(subIndex)}
                                                    className="relative bg-white border-[1px] "
                                                >
                                                    {subItem.link ? (
                                                        <Link href={subItem.link} className='block px-4 py-2 hover:bg-gray-100' title={subItem.title}>
                                                            {subItem.title}

                                                        </Link>
                                                    ) : (
                                                        <span className="block px-4 py-2  cursor-pointer hover:bg-gray-100">
                                                            <span className="flex items-center justify-between cursor-pointer" title={subItem.title}>

                                                                {subItem.title}
                                                                {subItem.subMenu && (
                                                                    <>
                                                                        <MdKeyboardArrowRight className="w-4 h-4 ml-2" />
                                                                    </>
                                                                )}
                                                            </span>
                                                        </span>
                                                    )}

                                                    {subItem.subMenu && openSubMenu === subIndex && (
                                                        <ul className="absolute left-full top-0  bg-white text-gray-800 shadow-lg rounded-lg w-48">
                                                            {subItem.subMenu.map((nestedItem, nestedIndex) => (
                                                                <li key={nestedIndex} className="border-[1px]">
                                                                    <Link href={nestedItem.link} title={nestedItem.title}>
                                                                        <label className="block px-4 py-2 hover:bg-gray-100">
                                                                            {nestedItem.title}
                                                                        </label>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className='inline-flex max-w-1xl items-center mr-2  text-gray-500 absolute right-0 top-3'>
                            <IoLocationOutline className='w-4 h-4 m-auto mr-2' />
                            <button onClick={openModal} className='text-[14px]'> {selectedOption || "None"}</button>
                            <span className='flex text-[12px] ml-1'>
                                <TiArrowSortedDown />
                            </span>
                        </div>
                    </nav>

                    {isModalOpen && (
                        <div
                            id="modal-overlay"
                            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                            onClick={handleOuterClick}
                        >
                            <div
                                className="absolute top-32 bg-white w-[500px] h-[200px] rounded shadow-lg p-4 flex flex-col"
                            // style={{ marginTop: "20px", marginBottom: "60px" }}
                            >
                                {/* Close icon */}
                                <button
                                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                                    onClick={closeModal}
                                >
                                    ✕
                                </button>

                                {/* Modal content */}
                                <h3 className="text-[#24272c] font-thin text-[16px] text-center">Which is your city ?</h3>

                                <div className="max-w-sm mx-auto mt-10">

                                    <Box sx={{ minWidth: 400, mx: "auto" }}>
                                        {/* Dropdown Label */}
                                        <FormControl fullWidth>
                                            <InputLabel id="city-select-label">
                                                Type your city, e.g. Jaipur, New Delhi
                                            </InputLabel>

                                            {/* Material-UI Select Component */}
                                            <Select
                                                labelId="city-select-label"
                                                id="city-select"
                                                defaultOpen
                                                value={selectedOption}
                                                onChange={handleSelectCity}
                                                label="Type your city, e.g. Jaipur, New Delhi"
                                                MenuProps={{
                                                    PaperProps: {
                                                        style: {
                                                            maxHeight: 200, // Set the dropdown height
                                                            overflowY: "auto", // Enable scrolling for overflow
                                                        },
                                                    },
                                                }}
                                            >

                                                {/* Map Over Options */}
                                                {options.map((city, index) =>
                                                    city.isHeader ? (
                                                        <MenuItem key={index} disabled>
                                                            <span>{city.label}</span>
                                                        </MenuItem>
                                                    ) : (
                                                        <MenuItem key={index} value={city.value}>
                                                            {city.label}
                                                        </MenuItem>
                                                    )
                                                )}

                                            </Select>
                                        </FormControl>
                                    </Box>

                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className='w-full bg-white '>
                    <div className='max-w-[7xl] justify-between  m-auto p-4 space-y-2 pt-4'>
                        <div className='inline-flex '>
                            <HiOutlineMenuAlt2 onClick={() => { setOpnSidebar(!opensidebar) }} className='w-5 h-5 text-black' />
                            <Image src={'https://truckcdn.cardekho.com/pwa/img/TrucksDekho-NewLogov2.svg'} className='h-[21px] ml-2 w-fit text-start' width={100} height={100} alt='not found' />
                        </div>
                        <div className='max-w-[7xl] p-4 rounded-full bg-[#f7f7f7]'>

                            <GoSearch />
                        </div>
                        {/* Sidebar for mobile */}
                        {opensidebar && (

                            <motion.div
                                ref={sidebarRef}
                                className="fixed top-0 h-full left-0 w-[64vw] z-50 bg-white shadow-lg overflow-scroll"
                                initial={{ x: "-100%" }} // Initial position (off-screen)
                                animate={{ x: opensidebar ? 0 : "-100%" }} // Animate to either open or off-screen
                                exit={{ x: "-100%" }} // Exit animation (off-screen)
                                transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth spring animation
                            >
                                <div className='h-20 bg-sky-200 w-full flex justify-between items-center p-5' >
                                    <Image src={'https://truckcdn.cardekho.com/pwa/img/TrucksDekho-NewLogov2.svg'} className='h-[21px] ml-2 w-fit text-start' width={100} height={100} alt='not found' />
                                    <button
                                        onClick={toggleDropdown}
                                        ref={dropdownRef}
                                        className={`relative   text-gray-900 underline rounded-md  py-2 transition-colors  ${isOpen ? "" : "border-gray-300"
                                            }`}
                                    >
                                        <span className='flex text-[12px] items-center'>

                                            {selectedLanguage}
                                            <TiArrowSortedDown />
                                        </span>
                                        {isOpen && (
                                            <ul className="absolute right-0 mt-2 py-2  z-50 w-[120px]   bg-white rounded-md  shadow-[2px_4px_12px_hsla(0,0%,45%,.25)]">
                                                {languages.map((language, index) => (
                                                    <li
                                                        key={language}
                                                        onClick={() => handleSelect(language)}
                                                        className="px-4 py-1 cursor-pointer text-start text-gray-900"
                                                    >
                                                        {language}
                                                        {index < languages.length - 1 && <hr className='w-[97%] m-auto' />}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </button>
                                </div>
                                <div >

                                    <ul>
                                        {sidebarItems.map((item, index) => (
                                            <li key={index} className="relative ">
                                                <div
                                                    className={`flex items-center justify-between cursor-pointer px-4 py-2 hover:bg-gray-100  ${openSubMenuIndex === index ? "active:bg-sky-500  " : ""} `}
                                                    onClick={() => item.subMenu && toggleSubMenu(index)}
                                                >
                                                    <span>{item.title}</span>
                                                    {item.subMenu && (
                                                        <MdKeyboardArrowRight
                                                            className={`transform transition-transform duration-300 ${openSubMenuIndex === index ? "rotate-90" : ""
                                                                }`}
                                                        />
                                                    )}
                                                </div>

                                                {item.subMenu && openSubMenuIndex === index && (
                                                    <motion.ul
                                                        className="pl-4 border-l-[1px] mt-2 ml-4 space-y-1 overflow-hidden"
                                                        initial={{ maxHeight: 0, opacity: 0, translateY: 4 }}
                                                        animate={{ maxHeight: "1000px", opacity: 1, translateY: 0 }}
                                                        exit={{ maxHeight: 0, opacity: 0, translateY: 4 }}
                                                        transition={{ duration: 0.7, ease: "easeInOut" }}
                                                    >
                                                        {item.subMenu.map((subItem, subIndex) => {
                                                            const isActive = router === `/${subItem.title.toLowerCase().replace(/\s+/g, "-")}`;
                                                            console.log(isActive);

                                                            return (
                                                                <li key={subIndex} >
                                                                    <Link href={`/${subItem.title.toLowerCase().replace(/\s+/g, "-")}`}>
                                                                        <span className={`block px-4 py-2 text-[#24272c]  hover:bg-gray-100  ${isActive ? "bg-sky-500 text-white" : ""
                                                                            }`}>
                                                                            {subItem.title}
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })}
                                                    </motion.ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </motion.div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Header