import React from "react";

export default function Search() {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[44px] h-[44px] flex items-center">
        <img
          src="https://amaranoc.am/images/header/globus.svg"
          className="w-[20px] h-[20px]"
        />
      </div>
      <div className="w-[42px] h-[42px] flex items-center">
        <img
          src="https://amaranoc.am/images/header/user.svg"
          className="w-[40px] h-[40px]"
        />
      </div>
      <div className="flex items-center w-[240px] h-[45px] border border-gray-300 rounded-[40px] px-3 py-2">
        <input
          type="text"
          placeholder="Որոնում"
          className="flex-grow outline-none text-gray-700"
        />
        <img
          src="https://amaranoc.am/images/header/search.svg"
          className="w-[16px] h-[16px]"
        />
      </div>
    </div>
  );
}
