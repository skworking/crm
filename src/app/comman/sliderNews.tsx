import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ViewAllButton from './buttonView';

interface item {
    id?: number;
    heading: string;
    description: string;
    profile?: string;
    imageUrl: string;
    name: string;
    date: string;
    url?: string;
}
interface ListProps {
    data: item[]
    slidesShow: number;
    heading: string;
}
const NewsSlider: React.FC<ListProps> = ({ data, slidesShow, heading }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 0,
        slidesToShow: slidesShow || 3,
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
    const router = useRouter();
    const handleImageClick = (link: string) => {
        router.push(`${link}`)
    }
    return (
        <div className="relative p-4 space-y-2">
            <h2 className='p-[17px 20px 0px] text-xl font-bold mb-5 '>
                {heading}
            </h2>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className='p-2'>
                        {/* <Link href={item?.url ?? '#'} ></Link> */}
                        <div className="lg:flex border rounded-lg bg-white shadow-md ">

                            <Image
                                title={item.name}
                                data-autofit="true"
                                decoding="async"
                                alt={item?.name}
                                className="lg:w-1/3 h-full rounded-t-md object-cover object-top"
                                src={item.imageUrl}
                                loading="eager"
                                width={580}
                                height={300}
                                quality={75}
                                onClick={() => handleImageClick(item?.url ?? '#')}
                            />

                            <div className="flex flex-col justify-between flex-1 p-4">
                                <div>
                                    <Link href={item?.url ?? '#'} >
                                        <h2 className="text-[14px] font-bold ">{item.heading}</h2>
                                    </Link>
                                    <p className='lg:text-[20px] text-[12px] text-[rgba(36,39,44,.7)] line-clamp-2 overflow-hidden'>{item.description}</p>
                                </div>
                                <div className='text-[12px] text-[rgba(36,39,44,.7)]'>

                                    <span>
                                        {item.name}
                                    </span>

                                    {item.date}
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </Slider>
            <div className=''>
                <ViewAllButton heading="Scv News" link="/en/news" />
            </div>
        </div>
    );
};

export default NewsSlider;
