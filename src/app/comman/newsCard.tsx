import { Avatar } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'
import { MdExpandLess } from 'react-icons/md';

interface Card {
    id?: number;
    heading: string;
    description: string;
    profile?: string;
    imageUrl: string;
    name: string;
    date: string;
}
interface CardFormateProps {
    data: Card[]; // Accept data as a prop
}

const NewsCard: React.FC<CardFormateProps> = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Calculate the visible items based on the current page
    const visibleItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className='space-y-4'>
            {visibleItems.map((item, index) => (
                <div className="md:flex border rounded-lg bg-white shadow-md">
                    <div className='relative md:w-1/3'>
                        <Image
                            title={item.name}
                            data-autofit="true"
                            decoding="async"
                            alt={item?.name}
                            className="w-full md:h-full rounded-t-md object-cover object-top"
                            src={item.imageUrl}
                            loading="eager"
                            width={580}
                            height={300}
                            quality={75}
                        />

                        {/* {item.isElectric && <span className='absolute bottom-0 right-3 text-[10px] flex items-center text-white bg-[#32bea6] p-1 font-bold mb-1 rounded-lg'><GiElectric className='w-5 h-4 rotate-[-30deg]' /> Electric</span>} */}
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-4">
                        <div>
                            <h2 className="text-[14px] font-bold ">{item.heading}</h2>
                            <p className='text-[12px] text-[rgba(36,39,44,.7)]'>{item.description}</p>
                        </div>
                        <div className='text-[12px] text-[rgba(36,39,44,.7)]'>
                            <div className='flex m-auto space-x-3 items-center '>
                                <Avatar>{item.name.charAt(0)}</Avatar>
                                <span>
                                    {item.name}
                                </span>
                            </div>

                            {item.date}
                        </div>
                    </div>
                </div>
            ))
            }

            {/* Pagination Controls */}
            <div className="flex  space-x-2 mt-8">
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={`px-3 py-1 border rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50 ${currentPage === 1 && 'cursor-not-allowed'} `}
                >
                    <MdExpandLess className="transform rotate-[-90deg]" />
                </button>

                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-3 py-1 border rounded-md ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={`px-3 py-1 border rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50 ${currentPage === totalPages && 'cursor-not-allowed'} `}
                >
                    <MdExpandLess className="transform rotate-[90deg]" />
                </button>
            </div>
            <div className='text-[rgba(36,39,44,.7)]'>

                {`Page ${currentPage} of ${totalPages} pages `}
            </div>
        </div >
    )
}

export default NewsCard