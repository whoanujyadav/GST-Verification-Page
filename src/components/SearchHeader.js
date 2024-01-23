import React from "react";
import SearchInput from "./SearchInput";
import IMG from "../gst-svg.svg";

const SearchBox = ({onSearch}) => {

  return (
    <div className="flex bg-gradient-to-b from-blue-200 to-white items-center justify-center gap-[2.75rem] pt-5">
      <div>
        <div>
          <h1 className="font-semibold text-2xl mb-2">
            Search and Confirm GST Registration
          </h1>
          <h5 className="text-xl mb-5"> Quickly Verify GST Numbers with Confidence</h5>
        </div>
        <SearchInput onSearch={onSearch}></SearchInput>
      </div>
      <div className="">
        <img src={IMG} alt="logo" className="h-48"></img>
      </div>
    </div>
  );
};

export default SearchBox;