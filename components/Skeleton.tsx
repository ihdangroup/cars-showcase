import React from "react";

const Skeleton = () => {
  return (
    <div className="animate-pulse bg-white shadow w-full lg:w-[24%]">
      <div className="p-3">
        <h2 className="w-full h-[7px] bg-[#eaeaea]"></h2>
        <div className="my-2 w-[50%] h-[13px] bg-[#eaeaea]"></div>
        <div className="my-2 w-full h-[40px] bg-[#eaeaea]"></div>
        <div className="flex my-2 justify-between">
          <span className="bg-[#eaeaea] h-[6px] w-[30%]"></span>
          <span className="bg-[#eaeaea] h-[6px] w-[30%]"></span>
          <span className="bg-[#eaeaea] h-[6px] w-[30%]"></span>
        </div>
        <button className="w-full rounded h-[7px] bg-[#eaeaea]"></button>
      </div>
    </div>
  );
};

export default Skeleton;
