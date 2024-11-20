import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { formatDateTime } from '../comman/formateDateTime';
import Image from 'next/image';



const articlesData = [
    {
        title: "Latest Trucking Technologies: All You Need To Know",
        image: 'https://truckcdn.cardekho.com/news/25181729745827.jpg',
        author: "Dheeraj Nair",
        date: "Oct 23, 2024",
        time: "10:53 AM",
        description: "Explore the benefits of using a GPS truck tracking system for your trucking business.",
        url: "https://truckcdn.cardekho.com/news/25131729661559.jpg"
    },
    {
        title: "Start An Owner-Operator Trucking Business With These Tips: Comprehensive Guide",
        author: "Dheeraj Nair",
        image: 'https://truckcdn.cardekho.com/news/25131729661559.jpg',
        date: "Oct 21, 2024",
        time: "02:48 PM",
        description: "Learn the essential tips and strategies to kickstart your own owner-operator trucking business.",
        url: "/articles/owner-operator-trucking"
    },
    {
        title: "Truck Driver Trip Planning Guide: Everything You Need To Know",
        author: "Dheeraj Nair",
        image: 'https://truckcdn.cardekho.com/news/25131729661559.jpg',
        date: "Oct 20, 2024",
        time: "10:30 AM",
        description: "A complete guide for truck drivers to plan their trips effectively and efficiently.",
        url: "/articles/trip-planning-guide"
    },
    {
        title: "Truck Driver Trip Planning Guide: Everything You Need To Know",
        author: "Dheeraj Nair",
        image: 'https://truckcdn.cardekho.com/news/25081729502264.jpg',
        date: "Oct 20, 2024",
        time: "10:30 AM",
        description: "A complete guide for truck drivers to plan their trips effectively and efficiently.",
        url: "/articles/trip-planning-guide"
    }
];
// interface ArrowProps {
//     className: string;
//     style: React.CSSProperties;
//     onClick: () => void;
// }
// Custom Next Arrow
// const SampleNextArrow = (props: ArrowProps) => {
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
// const SamplePrevArrow = (props: ArrowProps) => {
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

const NewsCard = () => {
    const settings = {

        dots: false, // Enable pagination dots
        infinite: false, // Enable infinite scrolling
        speed: 0,
        slidesToShow: 3, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        cssEase: "linear",
        // nextArrow: <SampleNextArrow className={""} style={{}} onClick={() => { }} />, // Use custom next arrow
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
                    arrows:false
                },
            },
        ],
    };

    return (
        <div className=" truck-slider sm:p-0 ">

            <Slider {...settings}>
                {articlesData.map((item, index) => (
                    <div key={index} className='p-1'>

                        <div className="lg:w-full xl:w-[275px] bg-white border rounded-lg shadow-md text-center flex flex-col">
                            {/* <img
                                data-autofit="true"
                                decoding="async"
                                alt="BharatBenz 2826R"
                                className="w-full sm:min-h-[100px] rounded-t-md  object-contain object-top"
                                src={item.image}
                                loading="eager"
                            /> */}
                             <Image
                                data-autofit="true"
                                decoding="async"
                                alt="BharatBenz 2826R"
                                className="w-full sm:min-h-[100px] rounded-t-md  object-contain object-top"
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
                            <div className='p-2'>
                                <h6 className="text-[14px]   font-semibold  text-start line-clamp-2 overflow-hidden">{item.title}</h6>
                            </div>
                            <div className='text-[12px] sm:text-start text-[rgba(36,39,44,.7)] m-2 md:flex inline-flex flex-wrap'>
                                <span>{item.author}</span>
                                <li className='sm:ml-2 text-[rgba(36,39,44,.7)] text-[11px]'>
                                     {formatDateTime(item.date, item.time)}
                                </li>
                            </div>
                        </div>
                    </div>

                ))}
            </Slider>

        </div>
    );
}

export default NewsCard;
