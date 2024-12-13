'use client'
import React, { useEffect, useState } from 'react'
import Breadcrumbs from '@/app/comman/breadCrumbs';
import { usePathname } from 'next/navigation';
import Body from '@/app/components/body';

const Specification = () => {
  const pathname = usePathname();
  // const breadcrumbItems = GenerateBreadcrumbs(); // Pass pathname to generate breadcrumbs
  const [breadcrums, setBreadCrum] = useState([])
  const [data, setData] = useState({
    heading:''
  });
  console.log(data);

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
    <div>
      <Breadcrumbs items={breadcrums} />
      <div className="max-w-7xl m-auto  lg:flex border-b-2  rounded-b-md border-gray-100 gap-4 ">
        <h2 className='text-xl font-bold '>{data?.heading ?? ''} Specifications</h2>
      </div>
      <Body data={data} />
    </div>
  )
}

export default Specification