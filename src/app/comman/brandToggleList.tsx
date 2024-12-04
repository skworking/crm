import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';

interface BrandItem {
    icon: string; // Icon can be a JSX element or a string
    title: string;
    link: string;
}

interface BrandListProps {
    title: string;
    data: BrandItem[];
    gridcols?: string;
    gap?: string;
    pad?: string;
    initialVisible?: number;  // Prop to define how many cards are visible initially
}

const BrandToggleList: React.FC<BrandListProps> = ({ title, data, gridcols, gap, pad, initialVisible = 6 }) => {
    const [visibleItems, setVisibleItems] = useState(initialVisible);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
        setVisibleItems(isExpanded ? initialVisible : data.length);
    };

    return (
        <div className="border rounded-[16px] mb-3 lg:p-4 flex flex-col relative bg-white">
            <h1 className="font-bold text-[18px] p-3 lg:p-0 ">{title}</h1>
            <ul className={`grid lg:${gridcols ? `${gridcols} sm:${gap} lg:${pad}` : 'grid-cols-3 gap-0'} grid-cols-3`}>
                {data.slice(0, visibleItems).map((item, index) => (
                    <li
                        key={index}
                        className="flex flex-col items-center text-[rgba(36,39,44,.7)]  lg:p-0 border"
                    >
                        <Link
                            href={item.link}
                            title={item.title}
                            data-lt={item.link}
                        >
                            <Image
                                data-autofit="true"
                                decoding="async"
                                alt={item.title}
                                className="h-20 w-full rounded-t-md object-contain"
                                src={item.icon}
                                loading="eager"
                                width={0}
                                height={0}
                                sizes="100vw"
                                quality={75}
                            />

                            <div className="flex items-center justify-center">
                                <span className="font-semibold">{item.title}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>

            <div
                className="inline-flex items-center mt-2  cursor-pointer  p-3 lg:p-0"
                onClick={handleToggle}
            >
                <span className="mr-2 text-[#d94025] font-bold">
                    {isExpanded ? "Less" : "Read More"}
                </span>
                <div
                    className="relative w-5 h-5 bg-[#d94025] rounded-full flex justify-center items-center"
                >
                    {isExpanded ? (
                        <FaAngleDown className="w-3 h-3 fill-white" />
                    ) : (
                        <FaAngleRight className="w-3 h-3 fill-white" />
                    )}
                </div>
            </div>

        </div>
    );
};

export default BrandToggleList;
