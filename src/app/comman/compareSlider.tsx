import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';

const compareData = [
    {
        trucks: [
            {
                name: "BharatBenz 2826R",
                price: "₹41.20 - ₹43.50 Lakh *",
                imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/2826-r/bharat-benz-2826-r.jpg"
            },
            {
                name: "BharatBenz 3123R",
                price: "₹40.97 - ₹41.97 Lakh *",
                imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/3123r/bharat-benz-3123r-47528.jpg"
            }
        ],
        comparison: "BharatBenz 2826R vs BharatBenz 3123R"
    },
    {
        trucks: [
            {
                name: "BharatBenz 2826R",
                price: "₹41.20 - ₹43.50 Lakh *",
                imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/2826-r/bharat-benz-2826-r.jpg"
            },
            {
                name: "Man CLA 31.300 EVO 8X4",
                price: "From ₹39.00 Lakh *",
                imageUrl: "https://truckcdn.cardekho.com/in/man/cla-31300-evo-8x4/man-cla-31300-evo-8x4.jpg"
            }
        ],
        comparison: "BharatBenz 2826R vs Man CLA 31.300 EVO 8X4"
    },
    {
        trucks: [
            {
                name: "BharatBenz 2826R",
                price: "₹41.20 - ₹43.50 Lakh *",
                imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/2826-r/bharat-benz-2826-r.jpg"
            },
            {
                name: "Man CLA 31.300 EVO 8X2",
                price: "From ₹39.00 Lakh *",
                imageUrl: "https://truckcdn.cardekho.com/in/man/cla-31300-evo-8x2/man-cla-31300-evo-8x2.jpg"
            }
        ],
        comparison: "BharatBenz 2826R vs Man CLA 31.300 EVO 8X2"
    },
    {
        trucks: [
            {
                name: "BharatBenz 2826R",
                price: "₹41.20 - ₹43.50 Lakh *",
                imageUrl: "https://truckcdn.cardekho.com/in/bharat-benz/2826-r/bharat-benz-2826-r.jpg"
            },
            {
                name: "Man CLA 31.300 EVO 8X2",
                price: "From ₹39.00 Lakh *",
                imageUrl: "https://truckcdn.cardekho.com/in/man/cla-31300-evo-8x2/man-cla-31300-evo-8x2.jpg"
            }
        ],
        comparison: "BharatBenz 2826R vs Man CLA 31.300 EVO 8X2"
    }
];


const CompareSlider = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // fade: true,

        // nextArrow: <SampleNextArrow className={""} style={{}} onClick={() => { }} />, // Use custom next arrow
        // prevArrow: <SamplePrevArrow className={" "} style={{}} onClick={() => { }} />,
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
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                },
            },
        ]
    };


    return (
        <div className="md:p-3 p-0 truck-slider ">
            
            <Slider {...settings}>               

                {compareData.map((comparisonItem, index) => (
                    <div key={index} className="flex flex-wrap justify-center sm:p-4 p-2 gap-6">
                        <div className='relative border rounded-lg ' >
                            <div className=" flex  items-center justify-center ">
                                {comparisonItem.trucks.map((truck, truckIndex) => (
                                    <div
                                        key={truckIndex}
                                        className="w-full   shadow-md text-center"
                                    >
                                 
                                        <Image
                                            data-autofit="true"
                                            decoding="async"
                                            alt={truck.name}
                                            className="w-full sm:h-[130px] h-[77px] rounded-t-md object-cover"
                                            src={truck.imageUrl}
                                            loading="eager"
                                            width={580} // specify width
                                            height={300} // specify height
                                            quality={75} // Adjust quality if desired
                                        />
                                    </div>
                                ))}

                                {comparisonItem.trucks.length === 2 && (

                                    <div className="flex absolute bg-black rounded-full p-2">
                                        <span className="text-xl font-bold text-white">VS</span>
                                    </div>
                                )}
                            </div>
                            <div className=" flex justify-around ">
                                {comparisonItem.trucks.map((truck, truckIndex) => (
                                    <div key={truckIndex} className="p-4 flex flex-col text-[14px] line-clamp-1 overflow-hidden">
                                        <h2 className=" text-start whitespace-nowrap overflow-hidden text-ellipsis">
                                            {truck.name}
                                        </h2>
                                        <p className="text-gray-700 text-start whitespace-nowrap overflow-hidden text-ellipsis">
                                            {truck.price}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <p className='sm:p-4 text-center  '>
                                <span className="text-center text-[#d94025] mb-2 p-2 border border-[#d94025]  w-full rounded-md sm:text-[14px] text-[11px]  sm:font-bold whitespace-nowrap overflow-hidden line-clamp-1 text-ellipsis">{comparisonItem.comparison}</span>
                            </p>
                        </div>
                    </div>
                ))}


            </Slider>
            <div className='inline-flex  items-center px-4'>
                <span className='mr-2 text-[#d94025] font-bold'>View All Compare bharatBenz 2826R</span>
                <div className="relative w-5 h-5  bg-[#d94025] rounded-full flex justify-center items-center" >
                    <FaAngleRight className="w-5 h-3 left-[-1px] mr-0  fill-white" />
                </div>
            </div>
        </div>
    );
};

export default CompareSlider;
