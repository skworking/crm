'use client'
import BrandList from '@/app/comman/brandList';
import Breadcrumbs from '@/app/comman/breadCrumbs';
import ViewAllButton from '@/app/comman/buttonView';
import { GenerateBreadcrumbs } from '@/app/comman/commanFunctions';
import CardFormate1 from '@/app/components/cardFormate1';
import PopulerModel from '@/app/components/populerModel';
import VehicleListCard from '@/app/components/vehicalListCad';
import Image from 'next/image';
import React from 'react'

const NewsDetails = () => {
    const newObject = { "label": "New Trucks", "path": "/en/new-trucks" };
    const breadcrumbItems = GenerateBreadcrumbs();
    breadcrumbItems.splice(1, 0, newObject);

    const carData = [
        {
            name: "Mahindra Treo",
            priceRange: "₹3.6 - ₹3.37 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/mahindra/treo/mahindra-treo-67242.jpg",
        },
        {
            name: "Tata Ace EV",
            priceRange: "₹8.2 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/tata/ace-ev/tata-ace-ev.jpg",
        },
        {
            name: "Maruti Suzuki Swift",
            priceRange: "₹5.17 - ₹8.41 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/mahindra/treo-yaari/mahindra-treo-yaari-62610.jpg",
        },
        {
            name: "Mahindra Treo Zor",
            priceRange: "₹3.13 - ₹3.48 Lakh*",
            imageUrl: "https://truckcdn.cardekho.com/in/mahindra/treo-zor/mahindra-treo-zor-46219.jpg",
        },

    ];
    const brandInfo = [
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/tata.jpg',
            title: 'tata',
            link: '/truck- specs',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/mahindra.jpg',
            title: 'mahindra',
            link: '/truck- specs',
        },
        {
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/altigreen.jpg',
            title: 'altigreen',
            link: '/truck- specs',
        },
        {
            title: 'piaggio',
            link: '/truck- specs',
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/piaggio.jpg',
        },
        {
            title: 'bajaj',
            link: '/truck- specs',
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/bajaj.jpg',
        },
        {
            title: 'sml-isuzu',
            link: '/truck- specs',
            icon: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/sml-isuzu.jpg',
        },

    ];
    const latestvahicle = [
        {
            id: 1,
            name: "Electric Relox Ev Bijli Trio",
            price: "Coming Soon",
            imageUrl: "https://truckcdn.cardekho.com/in/relox-ev/bijli-trio/relox-ev-bijli-trio.jpg",
            offer: "View All Offers"
        },
        {
            id: 2,
            name: "Tata Prima 4040.K",
            price: "Coming Soon",
            imageUrl: "https://truckcdn.cardekho.com/in/tata/prima-4040-k/tata-prima-4040-k.jpg",
            offer: "View All Offers"
        },
        {
            id: 3,
            name: "Sahyatri Semi Steel Dlx",
            price: "Coming Soon",
            imageUrl: "https://truckcdn.cardekho.com/in/sahyatri/semi-steel-dlx/sahyatri-semi-steel-dlx.jpg",
            offer: "View All Offers"
        },
        {
            id: 4,
            name: "Sahyatri E Cart",
            price: "Coming Soon",
            imageUrl: "https://truckcdn.cardekho.com/in/sahyatri/e-cart/sahyatri-e-cart.jpg",
            offer: "View All Offers"
        }
    ]
    return (
        <div className='max-w-7xl m-auto relative'>
            <Image
                width={0}
                height={0}
                sizes="100vw"
                className="object-none  w-full "
                src={'https://tpc.googlesyndication.com/simgad/3190707829268908051'} alt='' />
            <div className='max-w-7xl m-auto'>
                <Breadcrumbs items={breadcrumbItems} />

                <div className="lg:flex border-b-2  rounded-b-md border-gray-100 gap-4 ">
                    <div className="w-full lg:w-8/12 xl:w-[73.50%] space-y-4 mb-4 md:p-5 xl:p-0 " >

                        <div className='border rounded-[16px]   flex flex-col bg-white   relative'>
                            <h2 className=' text-xl pt-4 px-4 font-bold '>
                                Latest Commercial Vehicles
                            </h2>
                            <CardFormate1 data={latestvahicle} cards={3}/>
                            <div className='p-4'>
                                <ViewAllButton heading="Latest trucks" link="#" />
                            </div>

                            <div className=' text-[10px] items-baseline py-1 rounded-b-lg bg-[#f1f1f1] px-4'>
                                Ex-showroom price
                            </div>
                        </div>
                        <div className='border rounded-[16px]  mb-3 flex flex-col bg-white   relative'>
                            <PopulerModel />
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 xl:w-[25%] h-auto flex flex-col  sm:p-5 xl:p-0 mr-2 gap-2">
                        <VehicleListCard
                            title="Best Auto Rickshaw"
                            vehicleData={carData}
                            viewAllText="View All Electric Commercial Vehicles"
                        // onViewAllClick={handleViewAll}
                        />
                        <BrandList title="Popular Electric Vehicle Brands" data={brandInfo} />
                        <img alt='' src='https://tpc.googlesyndication.com/simgad/17644868341984738745' className="brightness-100 lg:block hidden  w-full  object-fill h-[250px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetails