import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Image from 'next/image';

interface Vehicle {
    model: string;
    image: string;
    priceRange: string;
    comparison: string;
    offerLink: string;
}

const vehicleData: Vehicle[] = [
    {
        model: "BharatBenz 3123R",
        image: "https://truckcdn.cardekho.com/in/bharat-benz/3123r/bharat-benz-3123r-47528.jpg",
        priceRange: "₹40.97 - ₹41.97 Lakh*",
        comparison: "2826R vs 3123R",
        offerLink: "View All Offers"
    },
    {
        image: "https://truckcdn.cardekho.com/in/man/cla-31300-evo-8x4/man-cla-31300-evo-8x4.jpg",
        model: "Man CLA 31.300 EVO 8X4",
        priceRange: "From ₹39.00 Lakh*",
        comparison: "2826R vs CLA 31.300 EVO 8X4",
        offerLink: "View All Offers"
    },
    {
        image: "https://truckcdn.cardekho.com/in/eicher/pro-6041/eicher-pro-6041-79227.jpg",
        model: "Man CLA 31.300 EVO 8X4",
        priceRange: "From ₹39.00 Lakh*",
        comparison: "2826R vs CLA 31.300 EVO 8X4",
        offerLink: "View All Offers"
    },
    {
        image: "https://truckcdn.cardekho.com/in/tata/signa-1923-k/tata-signa-1923-k-27351.jpg",
        model: "Man CLA 31.300 EVO 8X4",
        priceRange: "From ₹39.00 Lakh*",
        comparison: "2826R vs CLA 31.300 EVO 8X4",
        offerLink: "View All Offers"
    },
    {
        image: "https://truckcdn.cardekho.com/in/tata/signa-1923-k/tata-signa-1923-k-27351.jpg",
        model: "Man CLA 31.300 EVO 8X2",
        priceRange: "From ₹39.00 Lakh*",
        comparison: "2826R vs CLA 31.300 EVO 8X2",
        offerLink: "View All Offers"
    },


];
// interface ArrowProps {
//     className: string;
//     style: React.CSSProperties;
//     onClick: () => void;
// }

// Custom Next Arrow
// const SampleNextArrow: React.FC<ArrowProps> = (props) => {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{
//                 ...style,
//                 display: "block",
//                 background: "#cbc3c3", // Background set to gray
//                 borderRadius: "50%", // Circular shape
//                 width: "29px", // Adjust size for larger icon button
//                 height: "29px",
//                 cursor: "pointer",
//             }}
//             onClick={onClick}
//         />
//     );
// }

// Custom Previous Arrow
// const SamplePrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
//     // const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{
//                 ...style,
//                 display: "block",
//                 background: "#cbc3c3", // Background set to gray
//                 borderRadius: "50%", // Circular shape
//                 width: "29px", // Adjust size for larger icon button
//                 height: "29px",
//                 cursor: "pointer",
//             }}
//             onClick={onClick}
//         />
//     );
// }

const CompareCard: React.FC = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 0,
        slidesToShow: 3,
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
                {vehicleData.map((item, index) => (
                    <div key={index} className='p-1'>

                        <div className=" lg:w-full xl:w-[275px] bg-white border rounded-lg shadow-md text-center flex flex-col">
                            {/* <img
                                data-autofit="true"
                                decoding="async"
                                alt="BharatBenz 2826R"
                                className="sm:w-full md:h-full rounded-t-md   object-fill object-top"
                                src={item.image}
                                loading="eager"
                            /> */}
                            <Image
                                data-autofit="true"
                                decoding="async"
                                alt="BharatBenz 2826R"
                                className="sm:w-full md:h-full rounded-t-md object-fill object-top"
                                src={item.image}
                                loading="eager"
                                width={580} // specify width
                                height={300} // specify height
                                // Optionally use layout="fill" to make the image responsive within its container
                                // layout="fill"
                                // objectFit="cover" // adjusts how the image scales in its container
                                // priority // if you want eager loading (optional)
                                quality={75} // Adjust quality if desired
                            />
                            <div className='p-4'>

                                <h2 className="lg:text-lg lg:font-semibold  text-start  text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">{item.model}</h2>
                                <p className=" text-start whitespace-nowrap overflow-hidden text-ellipsis">{item.priceRange}</p>
                                <button className="text-[#d94025]  mb-2 border border-[#d94025] p-2 w-full rounded-md lg:text-[14px] font-bold  whitespace-nowrap overflow-hidden text-ellipsis">{item.comparison}</button>

                                <button className="text-white bg-[#d94025]  mb-2 border border-[#d94025] p-2 w-full rounded-md lg:text-[14px] font-bold  whitespace-nowrap overflow-hidden text-ellipsis">{item.offerLink}</button>
                            </div>
                        </div>
                    </div>

                ))}
            </Slider>

        </div>
    );
}

export default CompareCard;
