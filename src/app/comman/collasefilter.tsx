'use client'
import React, { useState } from 'react';

interface Item {
  label: string;
  count: number;
}

interface CollapsibleProps {
  title: string;
  items: Item[];
}

const FilterCollapsible: React.FC<CollapsibleProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`p-2 border-gray-300 mb-2`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 font-bold"
      >
        <span className=''>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <ul className="pl-6 py-2">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between py-1">
              <span>{item.label}</span>
              <span>({item.count})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default FilterCollapsible;