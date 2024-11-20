import dynamic from 'next/dynamic';
// import Slider from 'react-slick';
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';


const truckData = [
    {
        name: "Tata Signa 5530.S",
        price: "From ₹39.03 Lakh*",
        offer: "View October offers",
        imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-2823-k-rmc-std-6s/tata-signa-2823-k-rmc-std-6s-54500.jpg"
    },
    {
        name: "Tata Signa 3523.TK",
        price: "From ₹49.23 Lakh*",
        offer: "View October offers",
        imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-4223t/tata-signa-4223t-95359.jpg"
    },
    {
        name: "Tata Signa 1923.K",
        price: "From ₹28.91 Lakh*",
        offer: "View October offers",
        imageUrl: "https://truckcdn.cardekho.com/in/tata/signa-2821-k-rmc-std-6s/tata-signa-2821-k-rmc-std-6s.jpg"
    },
    {
        name: "Tata Signa 1923.K",
        price: "From ₹28.91 Lakh*",
        offer: "View October offers",
        imageUrl: "https://truckcdn.cardekho.com/in/tata/407-gold-sfc/tata-407-gold-sfc-15836.jpg"
    },
    {
        name: "Tata Signa 1923.K",
        price: "From ₹28.91 Lakh*",
        offer: "View October offers",
        imageUrl: "https://truckcdn.cardekho.com/in/eicher/pro-2049/eicher-pro-2049-47454.jpg"
    },
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
//             className={`${className} flex items-center`}

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
//         >
//         </div>
//     );
// }

const TruckSlider = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 0,
        slidesToShow: 3,
        slidesToScroll: 2,
        cssEase: "linear",
        // nextArrow: <SampleNextArrow className={""} style={{}} onClick={() => { }} />, // Use custom next arrow
        // prevArrow: <SamplePrevArrow className={" "} style={{}} onClick={() => { }} />,
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
                    arrows:false
                },
            },
        ]
    };

    return (
        <div className="sm:p-0  truck-slider">

            <Slider {...settings}>
                {truckData.map((truck, index) => (
                    <div key={index} className="p-2">
                        <div className="lg:w-full xl:w-[275px] bg-white border rounded-lg shadow-md text-center flex flex-col">
                            {/* <img
                                data-autofit="true"
                                decoding="async"
                                alt="BharatBenz 2826R"
                                className="w-full  rounded-t-md object-cover  md:h-full  object-top"
                                src={truck.imageUrl}
                                loading="eager"
                            /> */}
                             <Image
                                data-autofit="true"
                                decoding="async"
                                alt="BharatBenz 2826R"
                                className="w-full  rounded-t-md object-cover md:h-full  object-top"
                                src={truck.imageUrl}
                                loading="eager"
                                width={580} // specify width
                                height={300} // specify height
                                // Optionally use layout="fill" to make the image responsive within its container
                                // layout="fill"
                                // objectFit="cover" // adjusts how the image scales in its container
                                // priority // if you want eager loading (optional)
                                quality={75} // Adjust quality if desired
                            />
                            <div className="p-4  ">
                                <h2 className="lg:text-lg lg:font-semibold  text-start  text-[14px] whitespace-nowrap overflow-hidden text-ellipsis  ">{truck.name}</h2>
                                <p className="text-gray-700 text-start whitespace-nowrap overflow-hidden text-ellipsis">{truck.price}</p>
                            <button className="text-[#d94025]  mb-2 border border-[#d94025] p-2 w-full rounded-md lg:text-[14px] font-bold  whitespace-nowrap overflow-hidden text-ellipsis">
                                {truck.offer}
                            </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
         
        </div>
    );
};

export default TruckSlider;
