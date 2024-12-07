'use client'
import Breadcrumbs from '@/app/comman/breadCrumbs';
import { GenerateBreadcrumbs } from '@/app/comman/commanFunctions';
import Body from '@/app/components/body';
// import Navbar from '@/app/components/navbar';
import Overview from '@/app/components/overview';
// import Image from 'next/image';
import React from 'react'



const Page = () => {

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
      <Overview />
      <Breadcrumbs items={breadcrumbItems} />
      <Body />
    </div>
  )
}

export default Page;