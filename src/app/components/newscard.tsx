import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { formatDateTime } from '../comman/formateDateTime';
import Image from 'next/image';

interface Card {
    title: string,
    author: string,
    image: string,
    date: string,
    time: string,
    description: string,
    url: string
}

interface CardFormateProps {
    data: Card[];
    cards: number
}


const NewsCard: React.FC<CardFormateProps> = ({ data, cards }) => {
    const settings = {

        dots: false, // Enable pagination dots
        infinite: false, // Enable infinite scrolling
        speed: 0,
        slidesToShow: cards || 3, // Number of slides to show
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
                    arrows: false
                },
            },
        ],
    };

    return (
        <div className=" truck-slider sm:p-0 ">

            <Slider {...settings}>
                {data?.map((item, index) => (
                    <div key={index} className='p-1'>

                        <div className="lg:w-full xl:w-[275px] bg-white border rounded-lg shadow-md text-center flex flex-col">

                            <Image
                                data-autofit="true"
                                decoding="async"
                                alt="BharatBenz 2826R"
                                className="w-full sm:min-h-[100px] rounded-t-md  object-contain object-top"
                                src={item.image}
                                loading="eager"
                                width={580} // specify width
                                height={300} // specify height
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
