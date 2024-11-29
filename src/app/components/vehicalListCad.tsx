
import { FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";

// Define the types for the props
interface Vehicle {
    name: string;
    priceRange?: string;
    imageUrl?: string; // Optional field
}

interface VehicleListCardProps {
    title: string;
    vehicleData: Vehicle[];
    viewAllText: string;
    onViewAllClick?: () => void;
}

const VehicleListCard: React.FC<VehicleListCardProps> = ({ title, vehicleData, viewAllText, onViewAllClick }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 0,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        arrows: false,
        cssEase: "linear",

    };
    return (
        <div className=' border rounded-[16px] mb-3 flex flex-col p-3 gap-2  relative bg-white '>
            <h1 className=' text-xl'>{title}</h1>

            <div className="block md:hidden">
                <Slider {...settings}>
                    {vehicleData.map((info, index) => (
                        <div key={index} className="p-2">
                            <div className="lg:w-full xl:w-[275px] bg-white border rounded-[16px] shadow-md text-center flex flex-col">
                                <img
                                    data-autofit="true"
                                    decoding="async"
                                    alt="BharatBenz 2826R"
                                    className="w-full  rounded-t-md object-cover  md:h-full  object-top"
                                    // className="sm:min-w-[100px] sm:min-h-[100px] object-contain rounded-t-lg object-top"
                                    src={info.imageUrl}
                                    loading="eager"
                                />
                                {/* <Image
                                    data-autofit="true"
                                    decoding="async"
                                    alt="BharatBenz 2826R"
                                    className="w-full  rounded-t-md object-cover  md:h-full  object-top"
                                    src={info.imageUrl}
                                    loading="eager"
                                    width={580} // specify width
                                    height={300} // specify height
                                    // Optionally use layout="fill" to make the image responsive within its container
                                    // layout="fill"
                                    // objectFit="cover" // adjusts how the image scales in its container
                                    // priority // if you want eager loading (optional)
                                    quality={75} // Adjust quality if desired
                                /> */}
                                <div className="p-4">
                                    <h2 className="text-sm  text-start">{info.name}</h2>
                                    <p className="text-sm text-start">{info.priceRange}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <ul className="hidden md:block space-y-4 ">
                {vehicleData.map((info, index) => (
                    <li key={index} className="lg:flex items-center space-x-2 md:rounded-[16px] border lg:border-none  ">
                        <div className="px-2">
                            <img
                                src={info.imageUrl || 'https://via.placeholder.com/100'} // Fallback to placeholder if no image URL is provided
                                width={100}
                                height={100}
                                className="lg:h-16 lg:w-[6rem] w-full h-full object-cover rounded-lg  "
                                alt={info.name}
                            />
                        </div>
                        <div className='flex flex-col text-[14px]  sm:p-4 lg:p-0 text-[#24272c] mt-[-3px]'>
                            <span>{info.name}</span>
                            <span className='font-bold text-[15px]'>{info.priceRange}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='inline-flex items-baseline mt-3 cursor-pointer' onClick={onViewAllClick}>
                <span className='mr-2 text-[#d94025] text-[14px] font-semibold'>{viewAllText}</span>
                <div className="relative w-5 h-5 bg-[#d94025] rounded-full flex justify-center items-center">
                    <FaAngleRight className="w-5 h-3 left-[-1px] mr-0  fill-white" />
                </div>
            </div>
        </div>
    );
};

export default VehicleListCard;
