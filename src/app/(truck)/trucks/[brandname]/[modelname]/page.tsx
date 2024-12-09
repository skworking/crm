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
  console.log(overview);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(`/api/navbar?endpoint=${pathname}`);
        const data = await response.json();
        setOverView(data.overview);
      } catch (error) {
        console.error('Failed to fetch navbar data:', error);
      }
    };

    fetchMenuData();
  }, [brand]);

  const breadcrumbItems = GenerateBreadcrumbs();
  return (
    <div className='bg-slate-50'>
      {/* <div className='max-w-7xl m-auto '>
        <Image
          width={0}
          height={5}
          sizes="100vw"
          className="object-none  w-full "
          src={'https://tpc.googlesyndication.com/simgad/2186141005922165001'} alt='' />


      </div>
      <Navbar /> */}

      <Overview data={overview && overview} />
      <Breadcrumbs items={breadcrumbItems} />
      <Body />
    </div>
  )
}

export default Page;