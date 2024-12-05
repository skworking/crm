'use client'

import BodyMarkerComponent from '@/app/components/(pages)/body-marker';
import DealersComponent from '@/app/components/(pages)/dealers';
import LatestTruckComponent from '@/app/components/(pages)/latestTruck';
import LcvComponent from '@/app/components/(pages)/lcv';
import MhcvComponent from '@/app/components/(pages)/mhcv';
import ScvComponent from '@/app/components/(pages)/scv';
import ServiceComponent from '@/app/components/(pages)/service';
import SpareComponent from '@/app/components/(pages)/spareparts';
import { usePathname } from 'next/navigation';
import React from 'react'

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
        default:
            return <h1>Not Found page</h1>;
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