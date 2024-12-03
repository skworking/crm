import React, { useState } from 'react'
import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StarRating from '../components/StarRating';
import { Avatar } from '@mui/material';

interface item {
    productName: string;
    reviewerName: string;
    reviewDate: string;
    rating: number;
    heading?: string;
    reviewText: string;
}
interface ListProps {
    data: item[]
    slidesShow: number;
    heading: string;
}
const RatingCards: React.FC<ListProps> = ({ data, slidesShow, heading }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 0,
        slidesToShow: slidesShow || 3,
        slidesToScroll: 2,
        cssEase: "linear",
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
        ]
    };
    const [rating, setRating] = useState(0)
    const handleStarClick = (rating: React.SetStateAction<number>) => {
        // Example of handling the click: you can replace this with a navigation or link logic
        console.log(`Star clicked: ${rating}`);
        setRating(rating)

    };
    return (
        <div className="relative p-4 space-y-2">
            <h2 className='p-[17px 20px 0px] text-xl font-bold  '>
                {heading}
            </h2>
            <hr className='lg:hidden sm:w-[98%] w-full m-auto' />
            <div className='inline-flex items-center'>
                Rate Now
                <StarRating rating={rating} onChange={handleStarClick} />
            </div>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className='p-2 '>
                        <div className="border rounded-lg bg-white shadow-md p-4 space-y-2 h-[40vh]">
                            <h2 className='text-[11px] text-[#24272c]'>{item.productName}</h2>
                            <div className='flex gap-2'>

                                <Avatar className=' text-white' sx={{ bgcolor: '#9fb7e4',width: 30, height: 30 }}>  {item.reviewerName.charAt(0)}</Avatar>
                                <div className=''>
                                    <p className='text-[11px] text-[rgba(36,39,44,.7)]'>
                                        {item.reviewerName + ' On ' + item.reviewDate}
                                    </p>
                                    <p className='flex font-bold  items-center '>
                                        {item.rating} <img src='https://cdn-icons-png.flaticon.com/512/1828/1828884.png' alt='' className='w-3 h-3 ml-1' />
                                    </p>
                                </div>
                            </div>
                            <h2 className='font-bold text-[13px]'>{item.heading}</h2>
                            <p className="lg:line-clamp-3 sm:line-clamp-5 text-[14px] text-[rgba(36,39,44,.7)] overflow-hidden ">{item.reviewText}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default RatingCards