import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

interface Card {
    model?: string;
    image?: string;
    priceRange?: string;
    comparison?: string;
    offerLink?: string;
    link?: string;
}


interface CardFormateProps {
    data: Card[];
    cards: number
}
const CompareCard: React.FC<CardFormateProps> = ({ data, cards }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 0,
        slidesToShow: cards || 3,
        slidesToScroll: 2,
        cssEase: "linear",
        // nextArrow: <SampleNextArrow className={""} style={{}} onClick={() => { }} />,
        // prevArrow: <SamplePrevArrow className={""} style={{}} onClick={() => { }} />,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    arrows: false
                },
            },
        ],
    };

    return (
        <div className="px-4 sm:px-4 truck-slider">

            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className='p-1'>
                        {item.comparison !== '' ?
                            <div className=" lg:w-full xl:w-[275px] bg-white border rounded-lg shadow-md text-center flex flex-col">

                                <Image
                                    data-autofit="true"
                                    decoding="async"
                                    alt="BharatBenz 2826R"
                                    className="sm:w-full md:h-full rounded-t-md object-fill object-top"
                                    src={item?.image ?? '#'}
                                    loading="eager"
                                    width={580} // specify width
                                    height={300} // specify height
                                    quality={75} // Adjust quality if desired
                                />
                                <div className='p-4'>

                                    <h2 className="lg:text-lg lg:font-semibold  text-start  text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">{item.model}</h2>
                                    <p className=" text-start whitespace-nowrap overflow-hidden text-ellipsis">{item.priceRange}</p>
                                    <button className="text-[#d94025]  mb-2 border border-[#d94025] p-2 w-full rounded-md lg:text-[14px] font-bold  whitespace-nowrap overflow-hidden text-ellipsis">{item.comparison}</button>

                                    <button className="text-white bg-[#d94025]  mb-2 border border-[#d94025] p-2 w-full rounded-md lg:text-[14px] font-bold  whitespace-nowrap overflow-hidden text-ellipsis">{item.offerLink}</button>
                                </div>
                            </div>
                            : (
                                <Link href={item.link ?? '#'} className=" sm:h-[350px] h-[400px] lg:w-full xl:w-[275px] bg-white border rounded-lg shadow-md text-center flex flex-col items-center justify-center">
                                    <div className="w-16 h-16 bg-[#d94025] rounded-full flex justify-center items-center">
                                        <FaArrowRight className="w-6 h-6 text-white" />
                                    </div>
                                    <h1>Start A New Truck Comperison</h1>
                                </Link>
                            )
                        }
                    </div>

                ))}
            </Slider>

        </div>
    );
}

export default CompareCard;
