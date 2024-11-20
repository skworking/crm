// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import SwiperCore from 'swiper';
// import { Navigation } from 'swiper/modules';

// // Initialize Swiper core modules
// SwiperCore.use([Navigation]);

// interface TruckData {
//     name: string;
//     imageUrl: string;
//     price: string;
//     offer: string;
//   }

// interface TruckSliderProps {
//     data: TruckData[];
//     slidesPerView?: number;
//     spaceBetween?: number;
//   }
// const TruckSlider:React.FC<TruckSliderProps> = ({ data, slidesPerView = 3, spaceBetween = 5 }) => {
//     return (
//         <div>
//             <style jsx>{`
//                 .swiper-button-prev, .swiper-button-next {
//                     width: 25px;
//                     height: 25px;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     background-color: #f44336;
//                     color: white;
//                     border-radius: 50%;
//                     transition: background-color 0.3s ease;
//                     z-index: 10;
//                 }

//                 .swiper-button-prev:hover, .swiper-button-next:hover {
//                     background-color: #c62828;
//                 }

//                 .swiper-button-prev .w-0, .swiper-button-next .w-0 {
//                     width: 16px;
//                     height: 16px;
//                 }
//             `}</style>

//             <Swiper
//                 slidesPerView={slidesPerView}
//                 spaceBetween={spaceBetween}
//                 navigation={{
//                     nextEl: '.swiper-button-next',
//                     prevEl: '.swiper-button-prev',
//                 }}
//                 pagination={{ clickable: true }}
//                 className="mySwiper"
//             >
//                 {data.map((truck, index) => (
//                     <SwiperSlide key={index} className='m-4'>
//                         <div className="md:w-[150px] sm:w-[270px] lg:w-[283px] bg-white border rounded-lg shadow-md text-center">
//                             <img
//                                 data-autofit="true"
//                                 decoding="async"
//                                 alt={truck.name}
//                                 className="w-full sm:min-h-[100px] object-contain object-top"
//                                 src={truck.imageUrl}
//                                 loading="eager"
//                             />
//                             <div className='px-2'>
//                                 <h2 className="text-lg font-semibold text-start">{truck.name}</h2>
//                                 <p className="text-gray-700 text-start">{truck.price}</p>
//                             </div>
//                             <button className="text-red-500 sm:p-2 mb-2 border border-red-500 rounded-md mt-3">{truck.offer}</button>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>

//             {/* Navigation Buttons */}
//             <div className="w-full flex justify-between mt-5">
//                 <button className="swiper-button-prev"></button>
//                 <button className="swiper-button-next"></button>
//             </div>
//         </div>
//     );
// }

// export default TruckSlider;
