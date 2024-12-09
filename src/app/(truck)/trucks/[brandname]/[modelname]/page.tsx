'use client'
import Breadcrumbs from '@/app/comman/breadCrumbs';
import { GenerateBreadcrumbs } from '@/app/comman/commanFunctions';
import Body from '@/app/components/body';

// import Navbar from '@/app/components/navbar';
import Overview from '@/app/components/overview';
import { usePathname } from 'next/navigation';
// import Image from 'next/image';
import React, { useEffect, useState } from 'react'


const Page = () => {
  const pathname = usePathname(); // Get the current pathname
  const brand = pathname.split("/")[3];

  const [overview, setOverView] = useState();
  const [data, setData] = useState({ truckDetails: [], truckVariants: []});
  console.log(data);
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(`/api/navbar?endpoint=${pathname}`);
        const data = await response.json();
        console.log(data);

        setOverView(data.overview);
        setData(data.data.body);
      } catch (error) {
        console.error('Failed to fetch navbar data:', error);
      }
    };

    fetchMenuData();
  }, [brand]);

  const breadcrumbItems = GenerateBreadcrumbs();
  return (
    <div className='bg-slate-50'>
      <Overview data={overview && overview} />
      <Breadcrumbs items={breadcrumbItems} />
      <Body data={data} />
    </div>
  )
}

export default Page;