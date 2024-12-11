'use client'

import ThreeWheelers from '@/app/components/(pages)/threeWheelers';
import { usePathname } from 'next/navigation';
import React from 'react'


const renderContent = (category: string | undefined) => {
    switch (category) {
        case '3-wheeler':
            return <ThreeWheelers />;
        default:
            return <h1>Unknown Category</h1>;
    }
};
const CategoryPage = () => {
    const pathname = usePathname();
    const category = pathname.split('/').pop();
    console.log(category);

    return <div >{renderContent(category)}</div>;
}

export default CategoryPage;