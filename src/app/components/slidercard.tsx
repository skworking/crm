import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface Card {
    name: string;
    price: string;
    offer: string;
    imageUrl: string;
}
interface CardFormateProps {
    truckData: Card[]; // Accept data as a prop
    cards?: number;
}
const TruckSlider: React.FC<CardFormateProps> = ({ truckData, cards }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 0,
        slidesToShow: cards || 3,
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

    return (
        <div className="sm:p-0  truck-slider">

            <Slider {...settings}>
                {truckData?.map((truck, index) => (
                    <div key={index} className="p-2">
                        <div className="lg:w-full xl:w-[275px] bg-white border rounded-lg shadow-md text-center flex flex-col">

                            <Image
                                data-autofit="true"
                                decoding="async"
                                alt="BharatBenz 2826R"
                                className="w-full  rounded-t-md object-cover md:h-full  object-top"
                                src={truck.imageUrl}
                                loading="eager"
                                width={580} // specify width
                                height={300} // specify height
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
