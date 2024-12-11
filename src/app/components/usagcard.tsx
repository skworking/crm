import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface Card {
    image: string;
    model: string;
}

interface CardFormateProps {
    data: Card[];
    cards: number
}


const UseCard: React.FC<CardFormateProps> = ({ data, cards }) => {
    const settings = {

        dots: false, // Enable pagination dots
        infinite: false, // Enable infinite scrolling
        speed: 0,
        slidesToShow:cards|| 3, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        cssEase: "linear",
        // nextArrow: <SampleNextArrow className={""} style={{}} onClick={() => {}} />, // Use custom next arrow
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
                    arrows: false
                },
            },
        ],
    };

    return (
        <div className=" truck-slider">
            <Slider {...settings}>
                {data?.map((item, index) => (
                    <div key={index} className='px-1'>

                        <div className="lg:w-full xl:w-[275px] bg-white border rounded-lg shadow-md text-center flex flex-col ">
                            <Image
                                data-autofit="true"
                                decoding="async"
                                alt="BharatBenz 2826R"
                                className="w-full sm:min-h-[100px] rounded-t-md  object-cover object-top"
                                src={item.image}
                                loading="eager"
                                width={580} // specify width
                                height={300} // specify height
                                quality={75} // Adjust quality if desired
                            />
                            <div className='px-2'>

                                <h2 className="text-[#24272c] p-2 text-start text-[15px] ">{item.model}</h2>

                            </div>
                        </div>
                    </div>

                ))}
            </Slider>

        </div>
    );
}

export default UseCard;
