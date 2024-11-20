'use client';

import Image from "next/image";
import { MdOutlineCreate } from "react-icons/md";
import { PiDownloadSimple, PiGreaterThanBold, PiShareNetwork } from "react-icons/pi";

const Overview = () => {
    return (
        <div className="w-full rounded-b-lg border-b-2 bg-white">
            <div className="max-w-[1280px] m-auto  lg:flex border-gray-100 md:pt-[34px] md:pb-[23px] px-[0px]">
                <div className="w-full  lg:w-6/12 md:px-4 ">
                    <div className="lg:ml-[57px] md:h-full h-[270px] overflow-hidden lg:w-[calc(100%-57px)]">
                        {/* <img
                            data-autofit="true"
                            decoding="async"
                            alt="BharatBenz 2826R"
                            className="w-full sm:min-h-[270px] object-cover md:rounded-md "
                            src="https://truckcdn.cardekho.com/in/bharat-benz/2826-r/bharat-benz-2826-r.jpg?imwidth=480&impolicy=resize"
                            loading="eager"
                        /> */}
                        <Image
                                data-autofit="true"
                                decoding="async"
                                alt="BharatBenz 2826R"
                                className="w-full sm:min-h-[270px] object-cover md:rounded-md"
                                src={'https://truckcdn.cardekho.com/in/bharat-benz/2826-r/bharat-benz-2826-r.jpg?imwidth=480&impolicy=resize'}
                                loading="eager"
                                width={580} // specify width
                                height={300} // specify height
                                // Optionally use layout="fill" to make the image responsive within its container
                                // layout="fill"
                                // objectFit="cover" // adjusts how the image scales in its container
                                // priority // if you want eager loading (optional)
                                quality={75} // Adjust quality if desired
                            />
                        
                    </div>
                </div>
                <div className="w-full lg:w-8/12 m-auto lg:ml-9   pb-[0px] px-[22px] md:px-0   " >
                    <div className="relative">
                        <div className="lg:mr-0 flex items-center justify-between">
                            <span className="inline-flex items-center">
                                <h1 className="inline-flex sm:text-[27px] text-[20px] font-bold">BharatBenz 2826R</h1>
                                <span className="inline-flex mt-0">
                                    <span className="text-[#23b5cf] cursor-pointer inline-flex text-[12px] ml-[8px]" data-dropdown-box="changecars">Change Truck</span>
                                </span>
                            </span>
                            <div className="relative sm:flex hidden w-10 h-10 sm:bg-gray-100 rounded-full  justify-center items-center" >
                                <PiShareNetwork className="w-5 h-5 left-[-1px] mr-0 text-gray-500" />
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 sm:hidden w-10 h-10 sm:bg-gray-100 rounded-full  justify-center items-center" >
                            <PiShareNetwork className="w-5 h-5 left-[-1px] mr-0 text-gray-500" />
                        </div>
                    </div>
                    <div className="md:text-[13px]  text-[11px] text-[#24272c]">
                        Be the first one
                        <span className="ml-1 border p-1 text-[10px] rounded">Rate Now</span>
                    </div>
                    <div className="text-[20px] mt-[12px]">
                        <span className="items-center sm:flex gap-3">   ₹41.20 - ₹43.50 Lakh*
                            <button className="text-sky-500 text-[12px]">Get On Road Price</button>
                        </span>
                        <span className="text-[14px] text-gray-400 inline-flex gap-3">*Ex-showroom Price in
                            <button className="text-sky-500 text-[12px]  inline-flex gap-3 items-center">Mumbai <MdOutlineCreate className="" /></button>
                        </span>
                    </div>
                    <div className="lg:mt-[40px] pt-2 inline-block w-full ">
                        <button className="m-[0px 13px 10px 0px] lg:w-[240px] w-[calc(100%-57px)] h-[48px] bg-[#d94025] text-white text-xl font-semibold rounded  text-opacity-96">

                            View Diwali Offers

                        </button>
                    </div>
                    <div className="inline-block w-full py-4">
                        <div className="sm:max-w-[280px] w-full relative b-[10px] border rounded-lg right-0 flex p-2">
                            <PiDownloadSimple className="text-sky-500 mr-2  w-7 h-6" />

                            <div className="sm:text-[12px] text-[10px]">
                                <h4 className="uppercase text-sky-500">
                                    BharatBenz 2826R Brochure
                                </h4>
                                <span className="">Specs, Features and all you need in one place </span>
                                <span className="font-bold inline-flex items-center ">Download Now <PiGreaterThanBold /></span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-0 text-[13px] text-[rgba(36,39,44,.5)]">Price is for informational purposes only and the same may be subject to change. For details, please go through the T&C.</div>
                </div>
            </div>

        </div>
    )
}
export default Overview;