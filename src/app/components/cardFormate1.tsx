import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface Card {
  id: number;
  name: string;
  price: string;
  offer: string;
  imageUrl: string;
}

interface CardFormateProps {
  data: Card[]; // Accept data as a prop
}

const CardFormate1: React.FC<CardFormateProps> = ({ data }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 0,
    slidesToShow: 4,
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

  return (
    <div className="truck-slider p-4">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="pt-2 pl-2 pr-2">
            <div className="lg:w-full  bg-white border rounded-lg shadow-md text-center flex flex-col">
              <Image
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
              <div className="p-4  ">
                <h2 className="font-bold text-start  text-[15px] whitespace-nowrap overflow-hidden text-ellipsis  ">{item.name}</h2>
                <p className="text-[#24272c] font-bold text-start  text-[15px] whitespace-nowrap overflow-hidden text-ellipsis ">{item.price ? item.price : "Price Coming Soon"}</p>
                <button className="text-[#d94025] my-3   border border-[#d94025] p-2 w-full rounded-md lg:text-[14px] font-bold  whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.offer}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardFormate1;
