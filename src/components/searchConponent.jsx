import { useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchBox = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div className="relative max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchValue}
          onChange={handleChange}
          className="w-full placeholder-gray-500 text-gray-900  px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg> */}
          <FaSearch size={20} />
        </div>
      </div>
    </div>
  );
};
export default SearchBox;
