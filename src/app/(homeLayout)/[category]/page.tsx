'use client'

import Breadcrumbs from '@/app/comman/breadCrumbs';
import BodyMarkerComponent from '@/app/components/(pages)/body-marker';
import DealersComponent from '@/app/components/(pages)/dealers';
import LatestTruckComponent from '@/app/components/(pages)/latestTruck';
import LcvComponent from '@/app/components/(pages)/lcv';
import MhcvComponent from '@/app/components/(pages)/mhcv';
import ScvComponent from '@/app/components/(pages)/scv';
import ServiceComponent from '@/app/components/(pages)/service';
import SpareComponent from '@/app/components/(pages)/spareparts';
import UsedTruck from '@/app/components/(pages)/usedTruck';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const DynamicContent = () => {
    const pathname = usePathname();
    // const breadcrumbItems = GenerateBreadcrumbs(); // Pass pathname to generate breadcrumbs
    const [breadcrums, setBreadCrum] = useState([])
    // const [data, setData] = useState({});
    console.log(breadcrums);
    
    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await fetch(`/api/navbar?endpoint=${pathname}`);
                const responseData = await response.json();
                console.log('API Response:', responseData);
                setBreadCrum(responseData.data.breadcrumb)
                // setData(responseData.data.body);
            } catch (error) {
                console.error('Failed to fetch navbar data:', error);
            }
        };

        fetchMenuData();
    }, [pathname]);

    return (
        <>
            <Breadcrumbs items={breadcrums} />
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