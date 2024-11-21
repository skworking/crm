import { useRouter } from 'next/navigation';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

interface ViewAllButtonProps {
  heading: string;
  link: string;
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({ heading, link }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <div
      className="inline-flex items-baseline  cursor-pointer"
      onClick={handleClick}
    >
      <span className="mr-2 text-[#d94025] text-[14px] font-bold">View All {heading}</span>
      <div className="relative w-5 h-5 bg-[#d94025] rounded-full flex justify-center items-center">
        <FaAngleRight className="w-5 h-3 fill-white" />
      </div>
    </div>
  );
};

export default ViewAllButton;
