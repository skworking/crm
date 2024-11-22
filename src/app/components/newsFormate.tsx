import Image from 'next/image';
import React from 'react'
interface news {
    title: string;
    image: string;
    author: string;
    date?: string;
    time?: string;
}

interface CardFormateProps {
    data: news[]; // Accept data as a prop
}

const NewsFormate: React.FC<CardFormateProps> = ({ data }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {data.map((news, index) => (
                <div
                    key={index}
                    className="border w-full rounded-lg gap-2 shadow-lg  flex bg-white"
                >
                    <div className='w-1/2 rounded-lg'>
                        <Image width={400} height={0} alt="" quality={75}
                            src={news.image} sizes="100vw" className='rounded-lg'/>
                    </div>
                    <div className='w-1/2 '>
                        <h2 className="text-[14px] ">{news.title}</h2>
                        <p className="text-sm hidden md:block text-gray-500">
                            {news.author} - {news.date} {news.time}
                        </p>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default NewsFormate;