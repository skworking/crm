'use client'
import React, { useState } from 'react'
import FooterNav from './footerNav'
import FooterLink from './foooterLinks';
import Link from 'next/link';

interface LinkItem {
    name: string;
    url: string;
    img?: string; // Optional, only for items that include an image
}
interface FooterSection {
    title: string;
    links: LinkItem[];
}
const Footer = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const footerData: FooterSection[] = [
        {
            title: "About",
            links: [
                { name: "About TruckDekho", url: "/about" },
                { name: "Careers With Us", url: "/careers" },
                { name: "Terms & Conditions", url: "/terms" },
                { name: "Privacy Policy", url: "/privacy" }
            ]
        },
        {
            title: "Connect With Us",
            links: [
                { name: "Feedback", url: "/feedback" },
                { name: "Contact Us", url: "/contact" },
                { name: "Advertise with Us", url: "/advertise" }
            ]
        },
        {
            title: "Others",
            links: [
                { name: "Health Insurance", url: "/health-insurance" },
                { name: "Term Insurance", url: "/term-insurance" },
                { name: "Life Insurance", url: "/life-insurance" },
                { name: "Crack-ED", url: "/crack-ed" },
                { name: "Personal Loan", url: "/personal-loan" },
                { name: "TyreDekho", url: "/tyredekho" },
                { name: "BatteryDekho", url: "/batterydekho" },
                { name: "Girnar Vision Fund", url: "/girnar-vision-fund" },
            ]
        },
        {
            title: "CarDekho Group Ventures",
            links: [
                {
                    name: "footer-BdLogo",
                    url: "/footer-BdLogo",
                    img: "https://truckcdn.cardekho.com/pwa/footer-BdLogo.svg"  // Replace with the actual image URL
                },
                {
                    name: "CarDekho Group Ventures",
                    url: "/group-ventures",
                    img: "https://truckcdn.cardekho.com/pwa/footer-rupyyLogo.svg"  // Replace with the actual image URL
                },
                {
                    name: "footer-zwLogo",
                    url: "/footer-zwLogo",
                    img: "https://truckcdn.cardekho.com/pwa/footer-zwLogo.svg"  // Replace with the actual image URL
                },
                {
                    name: "footer-IdLogo",
                    url: "/footer-IdLogo",
                    img: "https://truckcdn.cardekho.com/pwa/footer-IdLogo.svg"  // Replace with the actual image URL
                },
                {
                    name: "Revv_Logo",
                    url: "/Revv_Logo",
                    img: "https://truckcdn.cardekho.com/pwa/Revv_Logo.svg"  // Replace with the actual image URL
                },
            ]
        }
    ];
    return (
        <div className='w-full bg-white '>
            <hr className='sm:block hidden' />
            <FooterNav />
            <hr />
            <footer className="p-4 m-auto max-w-[1280px]">
                <div className="container mx-auto sm:flex sm:flex-row flex-col justify-between space-y-4 sm:space-y-0">
                    {footerData.map((section, index) => (
                        <div key={index} className="sm:flex-1 sm:block hidden">
                            <h3 className="text-[#24272c] text-[14px]-500 mb-2">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.title === "CarDekho Group Ventures" ? (
                                    <div className="grid grid-cols-2 gap-2">
                                        {section.links.map((link, idx) => (
                                            <li key={idx} className="text-[rgba(36,39,44,.5)] cursor-pointer">
                                                <Link href={link.url} rel="noopener noreferrer">
                                                    <img src={link.img} alt={link.name} className=" w-full h-[50px]" />
                                                </Link>
                                            </li>
                                        ))}
                                    </div>
                                ) : (
                                    section.links.map((link, idx) => (
                                        <li key={idx} className="text-[rgba(36,39,44,.5)] hover:text-gray-800 cursor-pointer w-fit">
                                            <Link href={link.url} rel="noopener noreferrer">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    ))}
                    {footerData.map((section, index) => (
                        <div key={index} className=" border-gray-300 sm:hidden block">
                            <button
                                className="flex justify-between items-center w-full  text-left"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3 className="text-[#24272c] text-[14px]-500">{section.title}</h3>
                                <span className="text-gray-500">
                                    {activeIndex === index ? (
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 15l7-7 7 7"
                                            />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </button>
                            <div
                                className={`transition-max-height duration-300 overflow-hidden ${activeIndex === index ? 'max-h-screen' : 'max-h-0'
                                    }`}
                            >
                                <ul className="space-y-2 pl-4">
                                    {section.title === "CarDekho Group Ventures" ? (
                                        <div className="grid grid-cols-2 gap-2">
                                            {section.links.map((link, idx) => (
                                                <li key={idx} className="text-[rgba(36,39,44,.5)] cursor-pointer">
                                                    <Link href={link.url} rel="noopener noreferrer">
                                                        <img
                                                            src={link.img}
                                                            alt={link.name}
                                                            className="w-full h-[50px]"
                                                        />
                                                    </Link>
                                                </li>
                                            ))}
                                        </div>
                                    ) : (
                                        section.links.map((link, idx) => (
                                            <li
                                                key={idx}
                                                className="text-[rgba(36,39,44,.5)] hover:text-gray-800 cursor-pointer w-fit"
                                            >
                                                <Link href={link.url} rel="noopener noreferrer">
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </footer>
            <hr />
            <FooterLink />
        </div>
    )
}

export default Footer