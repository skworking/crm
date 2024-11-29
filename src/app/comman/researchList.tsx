import Link from 'next/link';
import { PiGreaterThanLight } from 'react-icons/pi';
interface ResearchItem {
    icon: React.ReactNode; // Icon can be a JSX element or a string
    title: string;
    link: string;
}

interface ResearchListProps {
    title: string;
    data: ResearchItem[];
}

const ResearchList: React.FC<ResearchListProps> = ({ title, data }) => {
    return (
        <div className="border rounded-[16px] mb-3 flex flex-col p-3 gap-2 relative bg-white">
            <h1 className="font-bold text-xl">{title}</h1>
            <ul className="space-y-4">
                {data.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center space-x-4 text-[rgba(36,39,44,.7)] justify-center"
                    >
                        <span className="text-[rgba(36,39,44,.7)] w-[40px] text-[20px]">
                            {item.icon}
                        </span>
                        <Link
                            href={item.link}
                            title={item.title}
                            className="w-full lg:w-[calc(100%-40px)] text-[15px] justify-between flex flex-col gap-2"
                            data-lt={item.link}
                        >
                            <div className="flex items-center justify-between mr-5">
                                {item.title}
                                <span>
                                    <PiGreaterThanLight className="mr-0" />
                                </span>
                            </div>
                            {index < data.length - 1 && <hr className="w-full m-auto" />}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ResearchList;
