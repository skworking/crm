import React from 'react'
import Image from 'next/image';
import { TiStar } from 'react-icons/ti';
import BuyTruckForm from '@/app/comman/truckForm';

const UsedTruck = () => {
    const truckOffers = [
        "Offers from a wide range of truck segments & applications",
        "Wide range of tonnage trucks",
        "Finance & Insurance assistance provided",
        "Selective options of refurbished vehicles"
    ];

    const processSteps = [
        "Complete the lead form and submit",
        "Used Truck / Bus Acknowledgment Message",
        "Used Truck Channel Partner connect via call",
        "Discussion between Channel Partner and customer on available options with details",
        "Visit – Test Drive",
        "Price finalization – Finance – Insurance",
        "Document collections",
        "Down payment",
        "Ownership transfer",
        "Balance completion of payment"
    ];
    const usedDetails = {
        heading: "Things to keep in mind while buying a Second Hand Commercial Vehicle: Truck",
        desc: [
            "You are considering purchasing a Used Commercial Vehicle so that it aids you in your business plan to perform as per your expectation and earn you for every hour that you put it to use. In other words, it is your earning machine and thus while selecting your choice of vehicle you must find one that lives up to your expectations and for the years you are expecting it to perform.",
            "There are many points listed here to educate you to assess your best bet for the budget you are willing to spend. Maintaining a positive checklist on all the below points may not be fully possible and you may have to draw a bargain up for some things. Nevertheless, we listed whatever we felt matters,",
            "Understand your budget of down payment for the tonnage and application of the vehicle you need, the finance amount and the EMI’s. Thereafter, work out the number of trips along with scheduled approximate maintenance, fuel costs and driver costs and you should have a fair understanding of your operating cost economics i.e. when you can finish paying back the loan and start earning profits in the business.",
        ],
        points: [
            {
                point: "Ask for the maintenance log or records of the vehicle servicing. It will show all scheduled maintenance, oil change records, accident repairs if any, etc. and you will be able to gauge the quality of the vehicle and the past ownership / ownerships.",
            },
            {
                point: "Not all owners of commercial vehicles may have a scheduled history with the OEM recognized service station, since the past owner could’ve utilized any other service workshop. Thus, try to understand why the past owner wants to sell the vehicle. Some good questions to ask are:",
                subpoints: [
                    "For what purpose / application have you used the vehicle? How many years?",
                    "How many drivers have driven it during its running tenure?",
                    "Have you always used original spare parts, oil etc. for replacements?",
                    "Have you always serviced it at OEM recognized service stations?",
                    "Are you the first owner?",
                    "How many kilometers has it clocked till date?"
                ]
            },
            {
                point: "Examine the vehicle in broad daylight",
            },
            {
                point:"Make a thorough examination by viewing the chassis, suspension, electric wiring, body quality, sealants, oil filters, air filter, transmission and finally of the engine. Look specially for signs of rusting or broken joints and welds. An under the vehicle inspection is best."
            },
            {
                point:"Check the cargo bed for rust, broken joints, weak plates etc. Assess rigidity and quality."
            },
            {
                point:"Check fluids viz. engine oil, brake fluid, coolant, power steering fluids and transmission fluids."
            },
            {
                point:"Check all the tire treads and understand whether the tires on the vehicle have been the relevant ones for the application used till now and will be the relevant ones for the application you would be using the vehicle for. Assess after how many more kilometers of use the tires would need replacement."
            },
            {
                point:"With the above in mind, start the vehicle, let it idle and then accelerate and listen carefully to the engine sound for any issues."
            },
            {
                point:" Now drive the vehicle around on road, off-road to assess power, smoothness of transmission, chassis noise, engine heat, vehicle vibration and finally the suspension and engine quality."
            }
        ]
    }
    return (
        <div className='relative space-y-2'>
            <div className={`w-full  lg:h-[600px] h-[200px] relative `}>
                {/* Background Image */}
                <Image
                    src={"https://truckcdn.cardekho.com/pwa/img/banner_ute.png"}
                    alt={"title"}
                    fill
                    sizes="100vw"
                    className="object-cover w-full h-full"
                />

                {/* Red Circle & Text Content */}
                <div className="absolute max-w-7xl inset-0 flex items-center overflow-hidden m-auto ">
                    <div className="relative lg:ml-[50px] flex items-center  justify-center lg:w-[600px] lg:h-[600px] w-[350px] h-[350px] bg-[#d94025] bg-opacity-[.95] mix-blend-multiply rounded-full lg:bottom-20"></div>

                    {/* Title */}
                    <div className="absolute hidden lg:flex flex-col inset-y-20 items-start max-w-3xl p-4 m-auto">
                        <h1 className="text-white font-bold lg:text-[49px] text-[20px] px-7">
                            Interested in buying used trucks
                        </h1>
                        {truckOffers.map((item,index) => {
                            return (
                                <div key={index} className="text-white inline-flex items-center font-bold text-[20px] px-7">
                                    <span className='m-2 rounded-full bg-white  '>
                                        <TiStar className='fill-orange-400' />
                                    </span>
                                    {item}
                                </div>
                            )
                        })}

                    </div>
                    <div className='absolute max-w-7xl hidden top-5 lg:block right-0  '>
                        <BuyTruckForm />
                    </div>
                </div>


                {/* Mobile Title */}
                <div className="absolute lg:hidden inset-y-20 items-center max-w-3xl p-4 m-auto">
                    <h1 className="text-white font-bold text-[20px] px-7">
                        Interested in buying used trucks
                    </h1>

                </div>

            </div>
            <div className='m-auto bg-white'>
                <div className='max-w-7xl m-auto gap-2'>
                    <h2 className='text-2xl text-center p-4'>What happens next</h2>
                    <div className='max-w-7xl lg:flex border-2  rounded-md border-gray-100 gap-6'>
                        <div className="lg:grid grid-cols-2 space-y-4 gap-4 p-4">
                            {processSteps.map((item, index) => (
                                <div key={index} className="lg:inline-flex items-center border-b-[1px]">
                                    <span className="sm:m-2 sm:w-[25px] sm:h-[25px] text-center bg-black rounded-full ">
                                        <span className='m-2 lg:m-0 text-white'>{index + 1}</span>
                                    </span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl p-4 border-2 m-auto bg-white rounded-md border-gray-100'>
                <h2 className='text-2xl text-start '>{usedDetails.heading}</h2>
                <div className='space-y-3'>
                    {usedDetails.desc.map((item,index) => {
                        return (
                            <div key={index} className='flex-col text-[rgba(36,39,44,.7)]'>
                                {item}
                            </div>
                        )
                    })}

                    {usedDetails.points.map((item, index) => {
                        return (
                            <div className='space-y-4' key={index}>
                                <span>{index + 1} {')'}</span>
                                <span className='text-[rgba(36,39,44,.7)] ml-2'>
                                    {item.point}
                                </span>
                                {Array.isArray(item.subpoints) && item.subpoints.length > 0 &&
                                    <div className={`lg:grid flex-col grid-cols-2 space-y-2 p-4 ${item.subpoints?.length > 0 ? "bg-sky-50 rounded-md" : ""}`}>
                                        {item.subpoints && item.subpoints.map((subitem, subindex) => {
                                            const letter = String.fromCharCode(97 + subindex);
                                            return (
                                                <div className='' key={subindex}>
                                                    <span className=''>{letter} {')'}</span>
                                                    <span className='text-[rgba(36,39,44,.7)] ml-2'>
                                                        {subitem}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default UsedTruck;