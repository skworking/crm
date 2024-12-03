'use client'
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdMinimize } from 'react-icons/md';
// import Accordion from './Accordion'; // Assume you have an Accordion component

interface TabContentProps {
  tabContent: { title: string; content: JSX.Element | string }[]; // Content directly passed as an array
}

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
const CollabseContent: React.FC<TabContentProps> = ({ tabContent }) => {
  return (
    <div>
      {tabContent.length > 0 ? (
        tabContent.map((item, index) => (
          <div key={index}>
            <Accordion title={item.title}>
              <p className="pr-2">{item.content}</p>
            </Accordion>
            {index < tabContent.length - 1 && <hr className="w-[97%] m-auto" />}
          </div>
        ))
      ) : (
        <p>Select a tab to see content.</p>
      )}
    </div>
  );
};

export default CollabseContent;
