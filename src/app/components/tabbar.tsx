import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdMinimize } from 'react-icons/md';



const Accordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            <button
                className="w-full text-left  p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex justify-between items-center">
                    <span className="text-md w-5/6 font-bold text-[17px]">{title}</span>
                    <span>{isOpen ? <MdMinimize />
                        : <AiOutlinePlus />}</span>
                </div>
            </button>
            {isOpen && <div className="px-4 pb-4 text-[15px]  text-[rgba(36,39,44,.7)]">{children}</div>}
            
        </div>
    );
};
type TabData = {
    title: string;
    content: string;
};

const tabData: Record<string, TabData[]> = {
    Price: [
        {
            title: 'What is the price of BharatBenz 2826R in Mumbai?',
            content: 'The Truck prices vary from state to state as per the local taxes and levies. The BharatBenz 2826R price is approximately between ₹41.20 - ₹43.50 Lakh in Mumbai.',
        },
        {
            title: 'What will be the monthly EMI for BharatBenz 2826R?',
            content: 'The monthly EMI for any Truck is determined by several elements. This typically includes the purchase price, the upfront payment made, and the total loan availed. The monthly EMI of BharatBenz 2826R will be ₹79,699.00 on an annual rate of interest of 10.5% for a tenure of 5 years & down payment will be ₹4.12 Lakh.',
        },
    ],
    Loading: [
        {
            title: 'What is the fuel tank capacity of BharatBenz 2826R?',
            content: 'The fuel capacity of BharatBenz 2826R is 380/355 Ltr. Get more detailed specifications of BharatBenz 2826R at Trucksdekho.',
        },
    ],
    Specifications: [
        {
            title: 'What are the specifications of BharatBenz 2826R?',
            content: 'The specifications include engine type, horsepower, torque, and dimensions. Check the manufacturer\'s site for detailed information.',
        },
    ],
    Cabin: [
        {
            title: 'What features does the cabin of BharatBenz 2826R have?',
            content: 'The cabin features air conditioning, comfortable seating, and advanced infotainment systems for better driving experience.',
        },
    ],
};
interface TabItem {
    title: string;
    content: string;
}
interface TabContentProps {
    activeTab: string; // The currently active tab
    tabData: Record<string, TabItem[]>; // A mapping of tab names to their respective items
}
const TabContent: React.FC<TabContentProps> = ({ activeTab }: { activeTab: string }) => {
    const content = tabData[activeTab] || []; // Get the content for the active tab

    return (
        <div className="">
            {content.length > 0 ? (
                content.map((item, index) => (
                    <div key={index}>
                    <Accordion  title={item.title}>
                        <p className='pr-2'>{item.content}</p>
                    </Accordion>
                    {index < content.length - 1 && <hr className='w-[97%] m-auto'/>}
                    </div>
                ))
            ) : (
                <p>Select a tab to see content.</p>
            )}
        </div>
    );
};

const MultiTabs = () => {
    const [activeTab, setActiveTab] = useState('Price');

    return (
        <div className="w-full mx-auto  ">
            {/* Tab Navigation */}
            <div className="flex overflow-auto gap-4 px-2">
                {['Price', 'Loading', 'Specifications', 'Cabin'].map((tab) => (
                    <button
                        key={tab}
                        className={`px-0 ml-2 py-2 focus:outline-none ${activeTab === tab ? 'border-b-2 border-[#d94025] font-medium' : 'text-gray-500'}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="border-t ">
                <TabContent activeTab={activeTab} tabData={tabData} />
            </div>
        </div>
    );
};

export default MultiTabs;
