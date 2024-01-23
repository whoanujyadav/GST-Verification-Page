import React, { useState } from "react";
import SearchHeader from "./SearchHeader";
import BusinessDetailsCard from "./BusinessDetailsCard";

const GstDashboard = () => {
  const [GSTNumber, setGstNumber] = useState(null);

  const SearchHandler = (GSTNumber) => {
    setGstNumber(GSTNumber);
  };

  return (
    <div className="h-[100vh] mx-2 mt-2 mb-8 items-center justify-center">
        <SearchHeader onSearch={SearchHandler}></SearchHeader>
        <BusinessDetailsCard GSTNumber = {GSTNumber}></BusinessDetailsCard>
    </div>
  );
};

export default GstDashboard;