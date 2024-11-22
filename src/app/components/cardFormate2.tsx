import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
interface Brand {
  heading: string;
  image: string;
}

interface CardFormateProps {
  data: Brand[]; // Accept data as a prop
}

const CardFormate2: React.FC<CardFormateProps> = ({ data }) => {
  const isMediumOrLarger = useMediaQuery({ query: '(min-width: 768px)' })
  const settings = {
    dots: false,
    infinite: false,
    speed: 0,
    slidesToShow: 6,
    slidesToScroll: 6,
    cssEase: 'linear',
    draggable: false,
    // responsive: [
    // {
    //   breakpoint: 1024,
    //   settings: { slidesToShow: 3 },
    // },
    // {
    //   breakpoint: 767,
    //   settings: { slidesToShow: 3 },
    // },
    // {
    //   breakpoint: 600,
    //   settings: { slidesToShow: 1.2, arrows: false },
    // },
    // ],
  };

  return (
    <div className="truck-slider">
      {isMediumOrLarger ? (
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="pr-4">
              <div className="lg:w-full p-4 bg-white border rounded-lg shadow-md text-center flex flex-col">
                <Image
                  data-autofit="true"
                  decoding="async"
                  alt={item?.heading}
                  className="w-full h-full rounded-t-md object-none "
                  src={item.image}
                  loading="eager"
                  width={100}
                  height={100}
                  sizes="100vw"
                  quality={75}
                />
                <div className="">
                  <h2 className="sm:text-md font-lite text-center line-clamp-1 overflow-hidden text-ellipsis">
                    {item.heading}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-3 relative ">
          {data.map((item, index) => (
            <div key={index} className="bg-white border rounded-lg shadow-md text-center ">
              <Image
                data-autofit="true"
                decoding="async"
                alt={item?.heading}
                className="h-20 w-full rounded-t-md object-none"
                src={item.image}
                loading="eager"
                width={0}
                height={0}
                sizes="100vw"
                quality={75}
              />
              <h2 className="sm:text-md font-lite text-center line-clamp-1 overflow-hidden text-ellipsis">
                {item.heading}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardFormate2;
