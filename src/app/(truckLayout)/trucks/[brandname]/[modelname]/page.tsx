'use client'
import Breadcrumbs from '@/app/comman/breadCrumbs';
import Body from '@/app/components/body';

import Overview from '@/app/components/overview';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const Page = () => {
  const pathname = usePathname(); // Get the current pathname
  const brand = pathname.split("/")[3];
  const [breadcrums, setBreadCrum] = useState([])
  const [overview, setOverView] = useState();
  const [data, setData] = useState(
    {
      heading: '',
      truckDetails: {
        url: '',
        details: []
      },
      truckVariants: {
        heading: '',
        description: '',
        details: []
      },
      truckAlterNative: {
        footerheading: '',
        url: '',
        details: []
      },
      truckDealers: {
        details: []
      },
      truckCompetitors: {
        heading: '',
        details: []
      },
      truckReviews: {
        heading: '0',
        performance: 0,
        maintenance: 0,
        design: 0,
        details: []
      },
      truckOptions: {
        details: []
      },
      truckNews: {
        details: []
      },
      truckUses: {
        details: []
      },
      truckVideo: {
        heading: '',
        description: '',
        details: []
      },
      truckMultitab: {
        tabs: [],
        details: {
        }
      },
      populerTruck: {
        heading: '',
        details: [],
        url: ''
      },
      ReseachTruck: {
        heading: '',
        details: []
      },
      ElectricTruck: {
        heading: '',
        details: [],
        url: ''
      }

    }
  );
  console.log(data);
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(`/api/navbar?endpoint=${pathname}`);
        const data = await response.json();
        console.log(data);

        setOverView(data.overview);
        setBreadCrum(data.data.breadcrumb)
        setData(data.data.body);
      } catch (error) {
        console.error('Failed to fetch navbar data:', error);
      }
    };

    fetchMenuData();
  }, [brand]);

  // const breadcrumbItems = GenerateBreadcrumbs();
  // console.log(breadcrumbItems);

  // if (!breadcrumbItems) {
  //   return <div>Loading page body...</div>;  // or any fallback UI
  // }
  return (
    <div className='bg-slate-50'>
      <Overview data={overview && overview} />
      <Breadcrumbs items={breadcrums} />
      <Body data={data && data} />
    </div>
  )
}

export default Page;