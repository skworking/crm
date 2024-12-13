'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import Specification from '../specifications/page';
import Mileage from '../milenge/page';
import Review from '../reviews/page';
import PicturesComponent from '../pictures/Page';
import Breadcrumbs from '@/app/comman/breadCrumbs';
import Body from '@/app/components/body';

const DynamicContent = () => {
  const pathname = usePathname();
  // const breadcrumbItems = GenerateBreadcrumbs(); // Pass pathname to generate breadcrumbs
  const [breadcrums, setBreadCrum] = useState([])
  const [data, setData] = useState({});

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
      <Breadcrumbs items={breadcrums} />
      <Body data={data } />
    </>
  );
};

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
          return <DynamicContent />;
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