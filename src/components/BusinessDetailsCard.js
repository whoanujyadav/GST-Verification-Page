import React from "react";
import BussinesInfo from "./BussinesInfo";
import DataNotFound from "./DataNotFound";
import { dummyData } from "../utils/dummyData";

const BusinessDetailsCard = ({ GSTNumber }) => {
  //Early return if the user does not enterd GST Numver.
  if (GSTNumber == null) return;
  // console.log(dummyData);

  const data = dummyData.find((item) => item.GSTIN === GSTNumber);
  if (data == null) return <DataNotFound />;

  return (
    <div className="flex flex-col items-center w-[70%] mx-auto my-2">
      <div className="flex flex-col items-center w-[100%] mx-auto px-2">
        <h1 className="text-2xl font-medium text-gray-800">Test Enterprises</h1>
        <p className="text-sm font-medium text-gray-500 my-1">{GSTNumber}</p>

        <div className="hidden w-full sm:flex items-center justify-between my-4">
          <p className="text-xs text-gray-500">
            <span className="font-semibold text-gray-700 ">Registred On :</span>
            {data["Date of Registration"]}
          </p>

          <p className="text-xs text-gray-500">
            <span className="font-semibold text-gray-700 "> GST Status : </span>
            {data["GSTIN Status"]}
          </p>

          <p className="text-xs text-gray-500">
            <span className="font-semibold text-gray-700 "> Last Updated On :</span>
            {data["Date of Registration"]}
          </p>
        </div>
      </div>
      <BussinesInfo data = {data}></BussinesInfo>
    </div>
  );
};

export default BusinessDetailsCard;