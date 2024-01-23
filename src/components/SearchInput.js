import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ onSearch }) => {
  const inputValue = useRef(null);

  const submitHandler = () => {
    onSearch(inputValue.current.value);
  };

  return (
    <div className="w-[250px] sm:w-[350px] flex items-center justify-between bg-white px-7 py-2 rounded-full shadow-xl">
      <input
        type="text"
        ref={inputValue}
        placeholder="Enter GST Number"
        className="w-[90%] text-gray-600 outline-none"
      />

      <FaSearch
        size={"16px"}
        className="cursor-pointer"
        onClick={submitHandler}
      />
    </div>
  );
};

export default SearchInput;