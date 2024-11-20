import React, { useState } from 'react';
import { LiaStarSolid } from 'react-icons/lia';

interface StarRatingProps {
  rating: number; // The current rating (from 0 to 5)
  onChange: (rating: number) => void; // Function to handle click events
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onChange }) => {
  const [hoverRating, setHoverRating] = useState(0); // Track the rating on hover
  const stars = Array(5).fill(0); // Create an array of 5 stars

  return (
    <div className="flex space-x-1 ">
      {stars.map((_, index) => {
        const starRating = index + 1;
        return (
        
            <LiaStarSolid   key={index} 
            className={`cursor-pointer text-[35px] ml-3 transition-colors duration-200 
              ${starRating <= (hoverRating || rating) ? 'fill-orange-500' : 'text-gray-300'}
              hover:fill-orange-400`} // Optional hover color
            onClick={() => onChange(starRating)} // Handle click event
            onMouseEnter={() => setHoverRating(starRating)} // Set hover rating on hover
            onMouseLeave={() => setHoverRating(0)}  />
        );
      })}

    </div>
  );
};

export default StarRating;
