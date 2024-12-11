'use client'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useState } from 'react';
import ReactPlayer from 'react-player';
import { formatDate } from '../comman/formateDateTime';
import Image from 'next/image';
import { BsFillPlayFill } from 'react-icons/bs';



interface Card {
    title: string,
  date: string,
  image: string,
  description: string,
  url: string;
}

interface CardFormateProps {
    data: Card[];
    cards?: number
}

const VideoCard: React.FC<CardFormateProps> = ({ data, cards }) => {
    const settings = {

        dots: false, // Enable pagination dots
        infinite: false, // Enable infinite scrolling
        speed: 0,
        slidesToShow: cards || 2, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        cssEase: "linear",
        // nextArrow: <SampleNextArrow className={""} style={{}} onClick={() => { }} />,
        // prevArrow: <SamplePrevArrow className={""} style={{}} onClick={() => { }} />,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.2,
                    arrows: false
                },
            },
        ],
    };
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const handlePlayVideo = (index: number) => {
        setPlayingIndex(index); // Set the clicked index to play the video
    };
    return (
        <div className="truck-slider sm:p-0 ">

            <Slider {...settings}>
                {data?.map((item, index) => (
                    <div key={index} className='p-1'>

                        <div className="lg:w-full  bg-white border rounded-lg shadow-md text-center flex flex-col ">
                            <div className='relative items-center ' onClick={() => handlePlayVideo(index)}>
                                {playingIndex === index ? (
                                    <>
                                        <ReactPlayer className="react-player " width="100%" height="230px" playing controls url={item.url} />
                                    </>
                                ) : (
                                    <div className='relative'>

                                        <Image
                                            data-autofit="true"
                                            decoding="async"
                                            alt="BharatBenz 2826R"
                                            className="w-full md:h-[240px]  rounded-t-md  md:object-cover "
                                            src={item.image}
                                            loading="eager"
                                            width={0} // specify width
                                            height={0} // specify heigh
                                            sizes="100vw"
                                            quality={75} // Adjust quality if desired
                                        />
                                        <BsFillPlayFill className="absolute opacity-70 rounded-full bg-black p-2 inset-0 text-[60px] text-gray-400 fill-white  " style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />

                                    </div>
                                )}
                            </div>
                            <div className='p-4 text-start'>

                                <h2 className="text-[15px]  text-[#24272c] ">{item.title}</h2>
                                <span className=' text-[rgba(36,39,44,.7)] text-[13px]'>
                                    {formatDate(item.date)}
                                </span>
                            </div>
                        </div>
                    </div>

                ))}
            </Slider>

        </div>
    );
}

export default VideoCard;
