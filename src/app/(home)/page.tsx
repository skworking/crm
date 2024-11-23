'use client'
import Image from "next/image";
import DynamicDropdown from "../components/DynamicDropdown";
import CardFormate from "../components/cardFormate";
import LatestModel from "../components/latestModel";
import PopulerModel from "../components/populerModel";
import CardFormate2 from "../components/cardFormate2";
import ViewAllButton from "../comman/buttonView";
import CompareModel from "../components/compareModel";
import NewsFormate from "../components/newsFormate";
import VideoCard from "../components/videocard";
import ToolsCard from "../comman/toolsCard";
const Home = () => {
  const BrandData = [
    {
      heading: 'Tata Intra V30: Answers to 13 Most Asked Questions on Google',
      image: 'https://truckcdn.cardekho.com/news/20061678174872.jpg',
    },
    {
      heading: `Safe and Sustainable: Blue Energy Motors' LNG Trucks Set New Standards for India's Trucking Industry`,
      image: 'https://truckcdn.cardekho.com/news/22521715616355.jpg',
    },
    {
      heading: `How To Secure Load On Truck 101: Tips You Need To Follow`,
      image: 'https://truckcdn.cardekho.com/news/24971728986352.jpg',
    },
    {
      heading: `How To Secure Load On Truck 101: Tips You Need To Follow`,
      image: 'https://truckcdn.cardekho.com/news/25211729757928.jpg',
    },

  ]
  const segmentData = [
    {
      heading: 'Electric Commercial Vehicles',
      image: 'https://truckcdn.cardekho.com/pwa/img/ev.jpg',
    },
    {
      heading: `SCV Vehicles`,
      image: 'https://truckcdn.cardekho.com/pwa/img/scv.jpg',
    },
    {
      heading: `ILCV Vehicles`,
      image: 'https://truckcdn.cardekho.com/pwa/img/lcv.jpg',
    },
    {
      heading: `MHCV Vehicles`,
      image: 'https://truckcdn.cardekho.com/pwa/img/mhcv.jpg',
    },

  ]
  const populerBrand = [
    {
      heading: 'Ashok Leyland',
      image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/ashok-leyland.jpg',
    },
    {
      heading: 'tata',
      image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/tata.jpg',
    },
    {
      heading: 'mahindra',
      image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/mahindra.jpg',
    },
    {
      heading: 'eicher',
      image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/eicher.jpg',
    },
    {
      heading: 'bharat-benz',
      image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/bharat-benz.jpg',
    },
    {
      heading: 'piaggio',
      image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/piaggio.jpg',
    },
    {
      heading: 'altigreen',
      image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/altigreen.jpg',
    },
    {
      heading: 'deltic',
      image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/deltic.jpg',
    },
    {
      heading: 'osm',
      image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/osm.jpg',
    },
    {
      heading: 'bajaj',
      image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/bajaj.jpg',
    },
    {
      heading: 'sml-isuzu',
      image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/sml-isuzu.jpg',
    },
    {
      heading: 'toyota',
      image: 'https://truckcdn.cardekho.com/pwa/img/brandLogo_168x84/toyota.jpg',
    },
  ]
  const newsArray = [
    {
      image: "https://truckcdn.cardekho.com/news/25731732186775.jpg",
      title: "Tips To Track Logistics And Fleet Business Expenses",
      author: "Dheeraj Nair",
      date: "Nov 21, 2024",
      time: "04:12 PM"
    },
    {
      image: "https://truckcdn.cardekho.com/news/25721732111060.jpg",
      title: "Government Subsidies On Cargo Electric 3-Wheeler Under PM E-Drive Scheme",
      author: "Ketan Birla",
      date: "Nov 20, 2024",
      time: "07:23 PM"
    },
    {
      image: "https://truckcdn.cardekho.com/news/25711732096461.jpg",
      title: "VECV Welcomes Swedish Ambassador To India: Sustainability And Customer Impact As Primary Focus",
      author: "Dheeraj Nair",
      date: "Nov 20, 2024",
      time: "03:00 PM"
    },
    {
      image: "https://truckcdn.cardekho.com/news/25701732088514.jpg",
      title: "Magenta Mobility Expands Its Eco-Friendly Logistics Operations In Uttar Pradesh",
      author: "Ketan Birla",
      date: "Nov 20, 2024",
      time: "01:03 PM"
    }
  ];
  const toolsArray = [
    {
      heading: 'Dealers',
      image: 'https://truckcdn.cardekho.com/pwa/img/iconDealers-1.svg',
    },
    {
      heading: 'Service Centers',
      image: 'https://truckcdn.cardekho.com/pwa/img/iconServiceCenters-1.svg',
    },
    {
      heading: 'Spare Parts',
      image: 'https://truckcdn.cardekho.com/pwa/img/iconSpareParts-1.svg',
    },
    {
      heading: 'Body Makers',
      image: 'https://truckcdn.cardekho.com/pwa/img/iconBodyMakers-1.svg',
    },
    {
      heading: 'Videos',
      image: 'https://truckcdn.cardekho.com/pwa/img/iconVideos-1.svg',
    },
    {
      heading: 'Brochures',
      image: 'https://truckcdn.cardekho.com/pwa/img/iconBrochures-1.svg',
    },
    {
      heading: 'Emi Calculator',
      image: 'https://truckcdn.cardekho.com/pwa/img/iconEmiCalculator-1.svg',
    },
    {
      heading: 'Compare Trucks',
      image: 'https://truckcdn.cardekho.com/pwa/img/iconCompareTrucks-1.svg',
    },
    {
      heading: 'Ask For Price',
      image: 'https://truckcdn.cardekho.com/pwa/img/iconAskForPrice-1.svg',
    },
  ]
  return (
    <div className="max-w-[1440px] m-auto ">

      {/* <Link href="/en/trucks/bharat-benz/2826-r" className="text-sky-500" >
        Trucks page url
      </Link> */}
      <div className="relative  ">
        <div className=" sm:p-0 p-5">

          <Image src={'https://truckcdn.cardekho.com/pwa/TrD/01_TD_MasterHead_Desktop_1.jpg'} alt="" width={0}
            height={0}
            sizes="100vw"
            className="object-cover  w-full lg:h-[546px] sm:rounded-none rounded-lg"
          // style={{ width: '100%', height: '546px' }} 
          />
        </div>

        <DynamicDropdown />
      </div>
      <div className="max-w-7xl m-auto lg:mt-10 mt-5">

        <div className='border rounded-[16px]  mb-3 flex flex-col p-4 bg-white gap-2  relative'>
          <h2 className='p-[17px 20px 0px] text-xl font-bold '>
            Spotlight
          </h2>
          <CardFormate data={BrandData} />
        </div>

        <div className='border rounded-[16px]  mb-3 flex flex-col bg-white   relative'>
          <LatestModel />
        </div>
        <div className='border rounded-[16px]  mb-3 flex flex-col bg-white   relative'>

          <PopulerModel />
        </div>

        <div className='border rounded-[16px]  mb-3 flex flex-col p-4 bg-white gap-2  relative'>
          <h2 className='p-[17px 20px 0px] text-xl font-bold '>
            Vehicle Segment
          </h2>
          <CardFormate data={segmentData} />
        </div>
        <div className='border rounded-[16px] p-4 mb-3 flex flex-col  bg-white gap-2  relative'>
          <h2 className='p-[17px 20px 0px]  text-xl font-bold '>
            Popular Truck Brands
          </h2>
          <CardFormate2 data={populerBrand} />
          <ViewAllButton heading="Popular Trucks" link="/popular-trucks" />
        </div>
        <div className='border rounded-[16px]  mb-3 flex flex-col bg-white   relative'>
          <CompareModel />
        </div>
        <div className='border rounded-[16px] p-4 mb-3 flex flex-col  bg-white gap-2  relative'>
          <h2 className='p-[17px 20px 0px]  text-xl font-bold '>
            News on trucks that you like
          </h2>
          <NewsFormate data={newsArray} />
          <ViewAllButton heading="Truck news" link="/truck-news" />
        </div>
        <div className='border rounded-[16px]  mb-3 flex flex-col p-4 bg-white gap-2 relative'>
          <h2 className='p-[17px 20px 0px] text-xl  font-bold '>
            Latest Videos
          </h2>

          <VideoCard />
          <ViewAllButton heading="Ev Videos" link="/videos" />
        </div>
        <div className='border rounded-[16px] p-4 mb-3 flex flex-col  bg-white gap-2  relative'>
          <h2 className='p-[17px 20px 0px]  text-xl font-bold '>
            Tools & Services
          </h2>
          <ToolsCard data={toolsArray} />
        </div>

      </div>


    </div>
  );
}

export default Home;