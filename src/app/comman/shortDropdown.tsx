import { useState } from 'react';

const SortDropdown = ({ handleSort }: { handleSort: (value: 'asc' | 'desc') => void }) => {
  const [isOpen, setIsOpen] = useState(false); // Dropdown open/close state
  const [selectedLabel, setSelectedLabel] = useState<string>('Price: Low to High'); // Default label

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleChange = (value: 'asc' | 'desc') => {
    // Update selected label based on value
    const label = value === 'asc' ? 'Price: Low to High' : 'Price: High to Low';
    setSelectedLabel(label);

    // Call the parent sorting function
    handleSort(value);

    // Close the dropdown
    closeDropdown();
  };

  return (
    <div className="relative inline-block">
      {/* Main button */}
      <div
        onClick={toggleDropdown}
        className="border-[1px] border-[rgba(36,39,44,.3)] inline-flex justify-center items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100"
      >
        <label className="mr-2 text-[rgba(36,39,44,.5)] ">Sort by:</label>
        <span className="font-medium">{selectedLabel}</span>
        <svg
          className={`ml-2 w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.292 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute  left-0 w-full bg-white border shadow-lg z-10"
          onMouseLeave={closeDropdown}
        >
          <ul>
            <li
              onClick={() => handleChange('asc')}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              Price Low to High
            </li>
            <li
              onClick={() => handleChange('desc')}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              Price High to Low
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
