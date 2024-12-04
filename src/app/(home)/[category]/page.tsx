'use client'

import DealersComponent from '@/app/components/(pages)/dealers';
import LcvComponent from '@/app/components/(pages)/lcv';
import MhcvComponent from '@/app/components/(pages)/mhcv';
import ScvComponent from '@/app/components/(pages)/scv';
import { usePathname } from 'next/navigation';
import React from 'react'


const renderContent = (category: string | undefined) => {
    switch (category) {
        case 'lcv':
            return <LcvComponent />;
        case 'scv':
            return <ScvComponent />;
        case 'mhcv':
            return <MhcvComponent />;
        case 'dealers':
            return <DealersComponent />
        default:
            return <h1>Not Found page</h1>;
    }
};
const CategoryPage = () => {
    const pathname = usePathname();
    const category = pathname.split('/').pop();
    console.log(category);

    return <div >{renderContent(category)}</div>;
}

export default CategoryPage;