import React, { useState } from 'react';

interface TabProps<T extends string> {
  tabs: T[];
  tabContent: Record<T, React.ReactNode>;
  onTabChange?: (activeTab: T) => void;
}

const TabComponent=<T extends string>({
  tabs,
  tabContent,
  onTabChange,
}: TabProps<T>)=> {
  const [activeTab, setActiveTab] = useState<T>(tabs[0]);

  const handleTabClick = (tab: T) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className=" flex flex-col bg-white ">
      <div className="flex border-b overflow-auto no-scrollbar">
        {tabs.map((tab) => (
          <span
            key={tab}
            title={tab}
            onClick={() => handleTabClick(tab)}
            className={`flex-shrink-0 ml-4 mr-4 max-w-fit hover:text-[#24272c] text-[14px] text-center py-2 ${
              activeTab === tab
                ? 'border-b-4 border-[#d94025] font-bold'
                : 'text-gray-400'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </span>
        ))}
      </div>
      <div className="p-4">{tabContent[activeTab]}</div>
      
    </div>
  );
}

export default TabComponent;
