'use client'
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { MdOutlineMinimize } from 'react-icons/md';

interface Item {
  label: string;
  count: number;
  icon?: string;
}

interface CollapsibleProps {
  title: string;
  items: Item[];
  type: string | undefined;
  onSelect: (title: string, item: string) => void;
}

const FilterCollapsible: React.FC<CollapsibleProps> = ({ title, items, type, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (label: string) => {
    if (selectedItems.includes(label)) {
      setSelectedItems(selectedItems.filter((item) => item !== label)); // Deselect
    } else {
      setSelectedItems([...selectedItems, label]); // Select
    }
    onSelect(title, label); // Trigger callback
  };
  return (
    <div className={`p-2 border-gray-300 mb-2`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 "
      >
        <span className='text-[#24272c] text-[20px]'>{title}</span>
        <span>{isOpen ? <MdOutlineMinimize  /> : <FaPlus  />}</span>
      </button>
      {isOpen && (
        <>
          {type !== 'checkbox' && type !== 'icon' && (
            <div className="py-2 px-4">
              <input
                type="text"
                placeholder="Search brand..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
          )}


          <ul
            className={`py-2 ${type === 'icon' ? 'grid grid-cols-3 gap-4' : 'pl-6 space-y-2'
              }`}
          >
            {filteredItems.map((item, index) => (
              <li
                key={index}
                className={`${type === 'icon'
                  ? 'flex flex-col items-center border p-2 cursor-pointer hover:bg-gray-100'
                  : 'flex justify-between py-1 '
                  }
                ${selectedItems.includes(item.label) ? 'text-red-500' : ''}
                `}

              >
                {type === 'icon' ? (
                  <div onClick={() => handleSelect(item.label)} className="text-center">
                    <p className="text-3xl mb-2">{item.icon}</p> {/* Replace with item.icon if available */}
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-gray-500">({item.count})</p>
                  </div>
                ) : type === 'checkbox' ? (
                  <div className="flex items-center cursor-pointer w-fit" onClick={() => handleSelect(item.label)}>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.label)}
                      className="mr-2"
                    />
                    <span className={`${selectedItems.includes(item.label) ? 'text-red-500' : ''}`}>
                      {item.label}
                    </span>
                    <span className="text-xs text-gray-500">({item.count})</span>
                  </div>
                ) : (
                  <div className="flex  items-center cursor-pointer w-fit" onClick={() => handleSelect(item.label)}>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.label)}
                      className="mr-2"
                    />
                    <span className={`${selectedItems.includes(item.label) ? 'text-red-500' : ''}`}>
                      {item.label}
                    </span>
                    <span className="text-xs text-gray-500">({item.count})</span>
                  </div>
                )
                }
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
export default FilterCollapsible;