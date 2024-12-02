import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';
import { GiElectric } from 'react-icons/gi';

interface Card {
  id: number;
  name: string;
  price: string;
  offer?: string;
  imageUrl: string;
  isElectric?: boolean;
  url?: string;
  budget?: Array<{ label: string; value: string }>;
}

interface CardFormateProps {
  data: Card[]; // Accept data as a prop
  cards?:number;
}

const CardFormate1: React.FC<CardFormateProps> = ({ data,cards }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 0,
    slidesToShow: cards || 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1.2, arrows: false },
      },
    ],
  };
  console.log(data);


  return (
    <div className="truck-slider p-4">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="pt-2 pl-2 pr-2">
            <div className="lg:w-full  bg-white border rounded-lg shadow-md text-center flex flex-col">
              <div className='relative'>

                <Image
                  title={item.name}
                  data-autofit="true"
                  decoding="async"
                  alt={item?.name}
                  className="sm:w-full md:h-full rounded-t-md object-cover object-top"
                  src={item.imageUrl}
                  loading="eager"
                  width={580}
                  height={300}
                  quality={75}
                />

                {item.isElectric && <span className='absolute bottom-0 right-3 text-[10px] flex items-center text-white bg-[#32bea6] p-1 font-bold mb-1 rounded-lg'><GiElectric className='w-5 h-4 rotate-[-30deg]' /> Electric</span>}
              </div>
              <div className="p-4  ">
                <Link href={item?.url ?? '#'} >
                  <h2 className="font-bold text-start  text-[15px] whitespace-nowrap overflow-hidden text-ellipsis  ">{item.name}
                  </h2>
                </Link>
                <p className="text-[#24272c] font-bold text-start  text-[15px] whitespace-nowrap overflow-hidden text-ellipsis ">{item.price ? item.price : "Price Coming Soon"}</p>
                {
                  item.offer &&
                  <button className="text-[#d94025] my-3   border border-[#d94025] p-2 w-full rounded-md lg:text-[14px] font-bold  whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.offer}
                  </button>

                }
                <div className="grid grid-cols-3 gap-4 mt-4">

                  {item.budget && item.budget.map((detail, index) => (
                    <div key={index} className="text-start">
                      <span className="block text-[12px] font-medium text-[rgba(36,39,44,.5)]">
                        {detail.label}
                      </span>
                      <span className="block text-[12px]  font-bold text-[rgba(36,39,44,.5)]">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardFormate1;
