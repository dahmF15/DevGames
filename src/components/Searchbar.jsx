import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Searchbar() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search..."
        className="bg-opacity-60 w-full pr-10 pl-4 py-2 bg-gray-200 text-gray-700 placeholder-gray-500 rounded-lg shadow-md focus: focus:outline-none"
      />

      {/* Search Icon on the Right */}
      <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer">
        <FaSearch />
      </span>
    </div>
  );
}
