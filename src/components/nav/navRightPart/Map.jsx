import React from "react";

export default function Map() {
  return (
    <div>
      <div className="flex gap-2">
        <div className="w-[144px] h-[45px] border border-black rounded-[40px] flex gap-[10px] justify-center items-center">
          <p>Քարտեզ</p>
          <img
            src="https://amaranoc.am/images/map.svg"
            className="w-[16px] h-[16px]"
          />
        </div>
        <div className="w-[42px] h-[42px] border border-black rounded-[40px] flex justify-center items-center">
          <img src="https://amaranoc.am/images/calendar.svg" />
        </div>
      </div>
      <div className=" w-[1000px] h-[1px] bg-[#f3f3f4] mr-[30px] mt-[20px]"></div>
    </div>
  );
}
