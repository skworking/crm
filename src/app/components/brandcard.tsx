import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface Brand {
    model: string;
    image: string;
}
const BrandData: Brand[] = [
    {
        model: "MHCV Vehicles",
        image: "https://truckcdn.cardekho.com/pwa/img/explore/mhcv.jpg",
    },
    {
        image: "https://truckcdn.cardekho.com/pwa/img/explore/trucks.jpg",
        model: "Trucks",
    },
    {
        model: "Trucks above 40 Lakh",
        image: "https://truckcdn.cardekho.com/pwa/img/explore/above-40-lakh.jpg",
    },
    {
        image: "https://truckcdn.cardekho.com/pwa/img/explore/fuelType.jpg",
        model: "Deasel",
    },
    {
        image: "https://truckcdn.cardekho.com/in/tata/signa-1923-k/tata-signa-1923-k-27351.jpg",
        model: "Man CLA 31.300 EVO 8X2",
    },


];
// interface ArrowProps {
//     className: string;
//     style: React.CSSProperties;
//     onClick: () => void;
// }


// Custom Next Arrow
// const SampleNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    
//     return (
//         <div
//             className={className}
//            style={{
//                 ...style,
//                 display: "block",
//                 background: "#cbc3c3", // Background set to gray
//                 borderRadius: "50%", // Circular shape
//                 width: "29px", // Adjust size for larger icon button
//                 height: "29px",
//                 cursor: "pointer",
//              }}
//             onClick={onClick}
//         />
//     );
// }

// Custom Previous Arrow
// const SamplePrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {

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
//              }}
//             onClick={onClick}
//         />
//     );
// }

const BrandCard: React.FC = () => {
    const settings = {

        dots: false, // Enable pagination dots
        infinite: false, // Enable infinite scrolling
        speed: 0,
        slidesToShow: 3, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        cssEase: "linear",
        // nextArrow: <SampleNextArrow  className={""} style={{}} onClick={() => {}} />, // Use custom next arrow
        // prevArrow: <SamplePrevArrow className={""} style={{}} onClick={() => {}} />,
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
                    arrows:false,
                },
            },
        ],
    };

    return (
        <div className=" truck-slider">

            <Slider {...settings}>
                {BrandData.map((item, index) => (
                    <div key={index} className='p-1'>

                        <div className="lg:w-full xl:w-[275px] bg-white border rounded-lg shadow-md text-center flex flex-col">
                            {/* <img
                                data-autofit="true"
                                decoding="async"
                                alt="BharatBenz 2826R"
                                className="w-full  rounded-t-md  object-contain sm:h-[100%]  object-top"
                                src={item.image}
                                loading="eager"
                            /> */}
                            <Image
                                data-autofit="true"
                                decoding="async"
                                alt="BharatBenz 2826R"
                                className="sm:w-full md:h-full rounded-t-md object-cover object-top"
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
                            <div className='p-4 '>

                                <h2 className="text-md font-semibold  text-start whitespace-nowrap overflow-hidden text-ellipsis">{item.model}</h2>

                            </div>
                        </div>
                    </div>

                ))}
            </Slider>

        </div>
    );
}

export default BrandCard;
