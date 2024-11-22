import Body from '@/app/components/body';
import Breadcrums from '@/app/components/breadcrums';
import Navbar from '@/app/components/navbar';

import Overview from '@/app/components/overview';
import React from 'react'



const Page = () => {


  return (
    <div className='bg-slate-50'>
      <Navbar />
      <Overview />
      <Breadcrums />
      <Body />
    </div>
  )
}

export default Page;