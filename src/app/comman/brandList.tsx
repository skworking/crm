import React from 'react';
import Link from 'next/link';
import ViewAllButton from './buttonView';
import Image from 'next/image';

interface BrandItem {
    icon: string; // Icon can be a JSX element or a string
    title: string;
    link: string;
}

interface BrandListProps {
    title: string;
    data: BrandItem[];
}

const BrandList: React.FC<BrandListProps> = ({ title, data }) => {
    return (
        <div className="border rounded-[16px] mb-3 gap-4 flex flex-col relative bg-white">
            <h1 className="font-bold text-[18px] pt-3 px-3">{title}</h1>
            <ul className="grid grid-cols-3 gap-0">
                {data.map((item, index) => (
                    <li
                        key={index}
                        className="flex flex-col items-center text-[rgba(36,39,44,.7)] p-3 lg:p-0 border  "
                    >
                        <Link
                            href={item.link}
                            title={item.title}
                            data-lt={item.link}
                        >
                            <Image
                                data-autofit="true"
                                decoding="async"
                                alt={''}
                                className="h-20 w-full rounded-t-md object-contain"
                                src={item.icon}
                                loading="eager"
                                width={0}
                                height={0}
                                sizes="100vw"
                                quality={75}
                            />

                            <div className="flex items-center justify-center ">
                                <span className="font-semibold">{item.title}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='p-3'>

                <ViewAllButton heading="Brands" link="/popular-brands" />
            </div>
        </div>
    );
};

export default BrandList;
