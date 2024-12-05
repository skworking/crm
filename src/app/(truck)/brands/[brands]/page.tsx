'use client'
import { usePathname } from 'next/navigation';
import TataOverview from '../tataOverview';

const renderContent = (category: string | undefined) => {

    // make a cases to match endpoints to render the pages dynamic ways
    switch (category) {
        case 'tata':
           return <TataOverview />
        default:
            return <h1>Not Found page</h1>;
    }
};
const BrandsPage = () => {
    const pathname = usePathname();
    const category = pathname.split('/').pop();
    console.log(category);
    
    return (
        <>
            {renderContent(category)}
        </>
    )
}

export default BrandsPage;