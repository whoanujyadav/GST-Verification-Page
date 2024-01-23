import React from "react";
import { IoMdCopy } from "react-icons/io";
import ItemInformation from "./ItemInformation";

const BussinesInfo = ({data}) => {
    return (
        <div className="flex flex-col items-start bg-gray-100 shadow-md rounded-md p-2">
          <p className="font-medium my-2">Bussinees Details</p>
          <div className="h-[0.10rem] w-[100%] bg-gray-300 my-2"></div>
          <div className="w-[100%] flex flex-wrap gap-4 my-4">
            {Object.keys(data).map((key, idx) => (
              <ItemInformation title={key} value={data[key]} key={idx} />
            ))}
          </div>
          <div className="h-[0.10rem] w-[100%] bg-gray-300 mt-5 mb-2 "></div>
          <div className="lg:ml-[90%] md:ml-[80%] mt-4 mb-3">
            <p className="flex items-center gap-1 text-blue-400 font-medium text-sm px-2 py-1 border-2 border-blue-400 rounded-sm cursor-pointer">
              <IoMdCopy size={"20px"} />
              <span>Copy</span>
            </p>
          </div>
        </div>
      );
};

export default BussinesInfo;
