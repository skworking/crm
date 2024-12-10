import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { VscDebugBreakpointLog } from 'react-icons/vsc';
import { TbCornerUpRight } from 'react-icons/tb';
import Image from 'next/image';


interface Card {
    name: string;
    address: string;
    contact: string;
    phone?: string;
}
interface CardFormateProps {
    truckDelers: Card[]; // Accept data as a prop
    cards?: number;
}

const DealerSlider: React.FC<CardFormateProps> = ({ truckDelers, cards }) => {
    const settings = {

        dots: false, // Enable pagination dots
        infinite: false, // Enable infinite scrolling
        speed: 0,
        slidesToShow: cards || 3, // Number of slides to show
        slidesToScroll: 2, // Number of slides to scroll
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
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className="sm:p-0">

            <Slider {...settings}>
                {truckDelers?.map((dealer, index) => (
                    <div key={index} className='p-2'>
                        <div className="lg:w-full xl:w-[275px] bg-white border rounded-lg shadow-md text-center flex flex-col">
                            <div className='p-2 '>
                                <h2 className="sm:p-2 lg:text-[14px] text-[12px]  sm:font-semibold text-start text-[#23b5cf] ">{dealer.name}</h2>
                            </div>
                            <div className='w-full min-h-[120px] text-start'>
                                <div className='flex sm:gap-2 px-5 justify-center'>
                                    <div className=''>
                                        <VscDebugBreakpointLog className='w-[23px] h-[23px]' />
                                        <TbCornerUpRight className='absolute lg:top-[75px] top-[55px] sm:top-[72px] text-white ml-[6px] w-[12px]' />
                                    </div>
                                    <p className="text-[rgba(36,39,44,.7)] flex-wrap ml-2 text-start text-[12px]  line-clamp-4 overflow-hidden ">{dealer.address}</p>

                                </div>
                                {dealer.phone &&
                                    <div className='flex px-5 sm:gap-2  '>
                                        <Image src="https://cdn-icons-png.flaticon.com/512/5400/5400769.png" width="20" height="20" className='fill-[#3ee]' alt="" />
                                        <p className="text-[rgba(36,39,44,.7)] flex-wrap ml-2 text-start text-[12px]  line-clamp-4 overflow-hidden ">{dealer.phone}</p>
                                    </div>
                                }

                            </div>
                            <button className="text-white font-bold text-[12px] sm:text-[14px] sm:p-2 mb-2 border border-red-500 bg-[#d94025] rounded-md m-3 p-1 ">{dealer.contact}</button>
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
    );
}

export default DealerSlider;
