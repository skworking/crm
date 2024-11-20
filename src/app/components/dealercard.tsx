import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { VscDebugBreakpointLog } from 'react-icons/vsc';
import { TbCornerUpRight } from 'react-icons/tb';

const dealershipData = [
    {
        name: "Wasan Trucking",
        address: "Wasan house, 5th floor , Plot No 4, swastik park , Sion - Trombay Road , Chembur 400071",
        phone: "+917021662912",
        contact: "Contact Dealer"
    },
    {
        name: "Wasan Trucking",
        address: "Unit -28, Ajay Mittal ind estate, Building no.1, Mittal estate, Marol Naka, Andheri (East),Mumbai 400059",
        contact: "Contact Dealer"
    },
    {
        name: "Wasan Trucking",
        address: "Shop no.24, BGTA Godavari Co. society, G1, MMRDA Wadala Truck terminal, Near Wadala RTO, Mumbai 400037",
        contact: "Contact Dealer"
    },
    {
        name: "Wasan Trucking",
        address: "Wasan House, 5th Floor, Plot No. 4, Swastik Park, Sion Trombay Road, Chembur 400071",
        contact: "Contact Dealer"
    },
    {
        name: "Wasan Trucking",
        address: "Wasan House, 5th Floor, Plot No. 4, Swastik Park, Sion Trombay Road, Chembur 400071",
        contact: "Contact Dealer"
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
//                 width: "30px", // Adjust size for larger icon button
//                 height: "30px",
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

const DealerSlider = () => {
    const settings = {

        dots: false, // Enable pagination dots
        infinite: false, // Enable infinite scrolling
        speed: 0,
        slidesToShow: 3, // Number of slides to show
        slidesToScroll: 2, // Number of slides to scroll
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
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className="sm:p-0">

            <Slider {...settings}>
                {dealershipData.map((dealer, index) => (
                    <div key={index} className='p-2'>
                        <div className="lg:w-full xl:w-[275px] bg-white border rounded-lg shadow-md text-center flex flex-col">
                            <div className='p-2 '>
                                <h2 className="sm:p-2 lg:text-[14px] text-[12px]  sm:font-semibold text-start text-[#23b5cf] ">{dealer.name}</h2>
                            </div>
                            <div className='w-full min-h-[120px] text-start'>
                                <div className='flex sm:gap-2 px-5 justify-center'>
                                    <div >
                                        <VscDebugBreakpointLog className='w-[23px] h-[23px]' />
                                        <TbCornerUpRight className='absolute lg:top-[75px] top-[55px] sm:top-[72px] text-white ml-[6px] w-[12px]' />
                                    </div>
                                    <p className="text-[rgba(36,39,44,.7)] flex-wrap ml-2 text-start text-[12px]  line-clamp-4 overflow-hidden ">{dealer.address}</p>
                                </div>

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
