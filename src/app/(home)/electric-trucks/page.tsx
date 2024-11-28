import Image from 'next/image';
import React from 'react'

const ElectricTrucks = () => {
    return (
        <div className='relative'>
            <div className='lg:h-[400px] h-[200px] relative w-full'>
                <Image src={'https://truckcdn.cardekho.com/pwa/img/electric-banner.jpg'} alt="" width={0}
                    height={0}
                    fill
                    sizes="100vw"
                    className="object-cover  w-full lg:h-full"
                />

                {/* Red Circle & Content */}
                <div className="absolute max-w-7xl m-auto inset-0 flex items-center overflow-hidden ">
                    {/* Red Semi-Transparent Circle */}
                    <div className="relative  lg:ml-[50px] flex items-center justify-center lg:w-[600px] lg:h-[600px] w-[350px] lg:bottom-20 h-[350px] bg-[#d94025] bg-opacity-[.95] mix-blend-multiply rounded-full ">
                        
                    </div>
                </div>

            </div>
            <div className='absolute inset-y-20 items-center  space-y-10 max-w-3xl p-4 m-auto'>
                <div className="flex max-w-4xl lg:text-[47px] text-[20px] lg:ml-[57px]   px-7 text-white font-bold left-0">
                    Electric Commercial Vehicles
                </div>
            </div>

        </div>
    )
}

export default ElectricTrucks;