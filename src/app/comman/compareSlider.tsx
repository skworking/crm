import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface Truck {
    name: string;
    price: string;
    imageUrl: string;
}

interface ComparisonData {
    trucks: Truck[];
    comparison: string;
}

interface CompareSliderProps {
    data: ComparisonData[];
    // onViewAllClick?: () => void; // Optional callback for the "View All" button
}

const CompareSlider: React.FC<CompareSliderProps> = ({ data }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className="md:p-3 p-0 truck-slider">
            <Slider {...settings}>
                {data.map((comparisonItem, index) => (
                    <div key={index} className="flex flex-wrap justify-center sm:p-4 p-2 gap-6">
                        <div className="relative border rounded-lg">
                            <div className="flex items-center justify-center">
                                {comparisonItem.trucks.map((truck, truckIndex) => (
                                    <div key={truckIndex} className="w-full shadow-md text-center">
                                        <Image
                                            alt={truck.name}
                                            className="w-full sm:h-[130px] h-[77px] rounded-t-md object-cover"
                                            src={truck.imageUrl}
                                            loading="eager"
                                            width={100}
                                            height={100}
                                            sizes="100vw"
                                            quality={75}
                                        />
                                    </div>
                                ))}
                                {comparisonItem.trucks.length === 2 && (
                                    <div className="flex absolute bg-black rounded-full p-2">
                                        <span className="text-xl font-bold text-white">VS</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-around">
                                {comparisonItem.trucks.map((truck, truckIndex) => (
                                    <div
                                        key={truckIndex}
                                        className="p-4 flex flex-col text-[14px] line-clamp-1 overflow-hidden"
                                    >
                                        <h2 className="text-start whitespace-nowrap overflow-hidden text-ellipsis">
                                            {truck.name}
                                        </h2>
                                        <p className="text-gray-700 text-start whitespace-nowrap overflow-hidden text-ellipsis">
                                            {truck.price}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <p className="sm:p-4 text-center">
                                <span className="text-center text-[#d94025] mb-2 p-2 border border-[#d94025] w-full rounded-md sm:text-[14px] text-[11px] sm:font-bold whitespace-nowrap overflow-hidden line-clamp-1 text-ellipsis">
                                    {comparisonItem.comparison}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
            {/* <div className="inline-flex items-center px-4">
                <span className="mr-2 text-[#d94025] font-bold">
                    View All Compare BharatBenz 2826R
                </span>
                <div
                    className="relative w-5 h-5 bg-[#d94025] rounded-full flex justify-center items-center cursor-pointer"
                    onClick={onViewAllClick}
                >
                    <FaAngleRight className="w-5 h-3 left-[-1px] mr-0 fill-white" />
                </div>
            </div> */}
        </div>
    );
};

export default CompareSlider;
