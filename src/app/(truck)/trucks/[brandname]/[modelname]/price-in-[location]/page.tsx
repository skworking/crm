'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import Specification from '../specifications/page';
import Mileage from '../milenge/page';
import Review from '../reviews/page';
import PicturesComponent from '../pictures/Page';
import Breadcrumbs from '@/app/comman/breadCrumbs';
import { GenerateBreadcrumbs } from '@/app/comman/commanFunctions';

const renderContent = (category: string | undefined) => {
    // make a cases to match endpoints to render the pages dynamic ways
    switch (category) {
        case 'specifications':
            return <Specification />
        case 'milenge':
            return <Mileage />
        case 'user-reviews':
            return <Review />
        case 'pictures':
            return <PicturesComponent />

        default:
            const breadcrumbItems = GenerateBreadcrumbs();
            
            return <>
                 <Breadcrumbs items={breadcrumbItems} />
            </>;
    }
};

const Location = () => {
    const pathname = usePathname();
    const category = pathname.split('/').pop();
    return (
        <>
            {renderContent(category)}
        </>
    )
}

export default Location;