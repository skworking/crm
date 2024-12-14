import React from 'react'
interface propTypes {
    heading: string,
    data: {
        name: string,
        value: string,
    }[]
}
const KeySpecification: React.FC<propTypes> = ({ data,heading }) => {
    console.log(data);

    return (
        <div className='border rounded-[16px] lg:p-5 p-5 mb-3 bg-white'>
            <h2 className='pt-17px pr-20px pb-0 pl-20px text-xl font-bold '>{heading}</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-2  pt-4 sm:gap-6 gap-4">
                {data?.map((item, index) => (
                    <div key={index} className="flex justify-between border-b-[1px] pb-2">
                        <div className="inline-flex items-center gap-2 text-gray-400">
                            {/* {detail.icon && detail.icon} */}
                            {/* <Image src={item.icon} alt='' width="20" height="20" /> */}
                            <span className=' text-[rgba(36,39,44,.7)]'>{item.name}</span>
                        </div>
                        <span className='text-sm sm:font-bold text-[#24272c]'>{item.value}</span>

                    </div>
                ))}
            </div>
            {/* <Link href={data?.truckDetails?.url ?? '#'} className='inline-flex m-auto items-baseline  mt-2'>
                <span className='mr-2 text-[#d94025] text-[14px] font-bold'>View All Spaces & Features</span>
                <div className="relative w-5 h-5 mt-4 bg-[#d94025] rounded-full flex justify-center items-center" >
                    <FaAngleRight className="w-5 h-3 left-[-1px] mr-0  fill-white" />

                </div>
            </Link> */}
        </div>
    )
}

export default KeySpecification