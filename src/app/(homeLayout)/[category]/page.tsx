'use client'

import Breadcrumbs from '@/app/comman/breadCrumbs';
import BodyMakerIn from '@/app/components/(pages)/body-maker-in/page';
import BodyMarkerComponent from '@/app/components/(pages)/body-marker';
import DealersComponent from '@/app/components/(pages)/dealers';
import LatestTruckComponent from '@/app/components/(pages)/latestTruck';
import LcvComponent from '@/app/components/(pages)/lcv';
import MhcvComponent from '@/app/components/(pages)/mhcv';
import ScvComponent from '@/app/components/(pages)/scv';
import ServiceComponent from '@/app/components/(pages)/service';
import SpareComponent from '@/app/components/(pages)/spareparts';
import UsedTruck from '@/app/components/(pages)/usedTruck';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'



interface City {
    label: string;
    path: string
}

interface TruckData {
    page: string;
    banner?: string;
    body: Record<string, string>;
    breadcrumb?: City[];
}
const DynamicContent = () => {
    const pathname = usePathname();
    const [breadcrums, setBreadCrum] = useState<City[]>([])
    const [data, setData] = useState<TruckData | null>(null)

    const renderContentPage = (category: string) => {

        switch (category) {
            case 'body-maker-in':
                return <BodyMakerIn /* data={data && data} */ /* city={data?.breadcrumb && data?.breadcrumb || [{ label: "new-delhi", path: "" }]} */ />

            default:
                return "Page Not Found";
        }
    };


    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await fetch(`/api/navbar?endpoint=${pathname}`);
                const responseData = await response.json();
                console.log('API Response:', responseData);
                setBreadCrum(responseData.data.breadcrumb)
                setData(responseData.data.body);
            } catch (error) {
                console.error('Failed to fetch navbar data:', error);
            }
        };

        fetchMenuData();
    }, [pathname]);


    return (
        <>
            {data?.banner &&
                <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="object-cover  w-[1024px] m-auto my-5 h-[100px] "
                    src={data.banner}
                    alt='' />
            }
            <Breadcrumbs items={breadcrums} />
            {renderContentPage(data?.page ?? '')}
        </>
    );
};
const renderContent = (category: string | undefined) => {
    // make a cases to match endpoints to render the pages dynamic ways
    switch (category) {
        case 'lcv':
            return <LcvComponent />
        case 'scv':
            return <ScvComponent />;
        case 'mhcv':
            return <MhcvComponent />;
        case 'dealers':
            return <DealersComponent />
        case 'service':
            return <ServiceComponent />
        case 'spare':
            return <SpareComponent />
        case 'body-maker':
            return <BodyMarkerComponent />
        case 'latest-truck':
            return <LatestTruckComponent />
        case 'used-trucks':
            return <UsedTruck />
        default:
            return <DynamicContent />;
    }
};
const CategoryPage = () => {
    const pathname = usePathname();
    const category = pathname.split('/').pop();
    return (
        <>
            {renderContent(category)}
        </>
    )
}

export default CategoryPage;