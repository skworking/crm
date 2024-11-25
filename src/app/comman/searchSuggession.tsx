'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface SearchBarWithAutocompleteProps {
    suggestions: string[];
}

const SearchBarWithAutocomplete: React.FC<SearchBarWithAutocompleteProps> = ({ suggestions }) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>(suggestions);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);

        const inputValue = e.target.value;
        setSearchValue(inputValue);

        // Filter suggestions dynamically based on input
        if (inputValue) {
            const filtered = suggestions.filter((item) =>
                item.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredSuggestions(filtered);
        } else {
            setFilteredSuggestions(suggestions); // Show all suggestions if input is empty
        }
    };

    const handleMouseEnter = () => {
        setShowDropdown(true);
        setFilteredSuggestions(suggestions); // Initially show all suggestions
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    const handleSelectSuggestion = (suggestion: string) => {
        setSearchValue(suggestion);
        setShowDropdown(false);
    };
    const router = useRouter();
    const handleSearch = async () => {
        if (searchValue.trim()) {
          // Update the URL with .html extension
          router.push(`/search/${searchValue}.html`, undefined);
    
          // Fetch data dynamically
          const res = await fetch(`/api/trucks?query=${searchValue}`);
          const data = await res.json();
    
          // Use the fetched data (e.g., update state, context, or render directly)
          console.log("Fetched Data:", data);
        }
      };
    return (
        <div
            className="relative flex md:w-[43.66%] lg:w-[42%] rounded-md  font-[sans-serif]"
            onMouseLeave={handleMouseLeave} // Close dropdown when mouse leaves the container
        >
           
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleSearchChange}
                    onMouseEnter={handleMouseEnter} // Open dropdown on mouse enter
                    placeholder="Search Trucks or Brands eg. Tata or Bajaj"
                    className=" w-full outline-none border-2 rounded-l-md shadow-sm bg-[#f7f7f7] text-gray-600 text-sm ml-4 px-4 py-3"
                />
                {showDropdown && (
                    <ul className="absolute   top-10 left-0 ml-4  z-50 w-[83%] h-[20vh] overflow-auto  bg-white border border-gray-200 shadow-lg">
                        {filteredSuggestions.length > 0 ? (
                            filteredSuggestions.map((item, index) => (
                                <li
                                    key={index}
                                    className="px-4 mt-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                                    onClick={() => handleSelectSuggestion(item)}
                                >
                                    {item}
                                </li>
                            ))
                        ) : (
                            <li className="px-4 py-2 text-gray-500 text-sm">No suggestions found</li>
                        )}
                    </ul>
                )}
         
            <button
                type="button"
                onClick={handleSearch}
                className="flex items-center justify-center md:w-[15%] w-[15%] sm:w-[10%] bg-black px-5"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192.904 192.904"
                    width="16px"
                    className="fill-white"
                >
                    <path d="M190.707 180.101l-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
                </svg>
            </button>


        </div>
    );
};

export default SearchBarWithAutocomplete;
