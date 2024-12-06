'use client'

import TataAceComponent from '@/app/components/(pages)/tataAce';
import { usePathname } from 'next/navigation';
import React from 'react'


const renderContent = (category: string | undefined) => {
    switch (category) {
        case 'tata-ace':
            return <TataAceComponent />;
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