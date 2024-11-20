import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface Brand {
  heading: string;
  image: string;
}

interface CardFormateProps {
  data: Brand[]; // Accept data as a prop
}

const CardFormate: React.FC<CardFormateProps> = ({ data }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1.2, arrows: false },
      },
    ],
  };

  return (
    <div className="truck-slider">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="p-1">
            <div className="lg:w-full  bg-white border rounded-lg shadow-md text-center flex flex-col">
              <Image
                data-autofit="true"
                decoding="async"
                alt={item?.heading}
                className="sm:w-full md:h-full rounded-t-md object-cover object-top"
                src={item.image}
                loading="eager"
                width={580}
                height={300}
                quality={75}
              />
              <div className="p-4">
                <h2 className="text-md font-semibold text-start line-clamp-2 overflow-hidden text-ellipsis">
                  {item.heading}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardFormate;
