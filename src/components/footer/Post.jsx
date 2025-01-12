import React from "react";

export default function Post() {
  return (
    <div className="bg-[#101623] bg-no-repeat flex justify-center items-center bg-cover w-[1519px] h-[611px]">
      <div className=" w-[1200px] bg-[#38403e] h-[320px] rounded-[20px] border">
        <div className=" text-white flex gap-x-[40px] items-center justify-center pt-[80px]">
          <div className="pb-[10px]">
            _________________________________________
          </div>
          <strong>
            <h1 className="text-[30px] ">Տեղադրել հայտարարություն</h1>
          </strong>
          <div className="pb-[10px]">
            _________________________________________
          </div>
        </div>
        <div className="text-white flex justify-center text-[14px] pt-[20px]">
          Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ
        </div>
        <div className="flex gap-3 justify-center pt-[20px]">
          <input
            type="text"
            className="w-[320px] h-[40px] pl-[15px] text-[12px] bg-inherit border rounded-[10px]"
            placeholder="Անուն Ազգանուն"
          />
          <input
            type="text"
            className="w-[320px] h-[40px] pl-[15px] text-[12px] bg-inherit border rounded-[10px]"
            placeholder="Հեռախոսահամար"
          />
          <input
            type="text"
            className="w-[320px] h-[40px] pl-[15px] text-[12px] bg-inherit border rounded-[10px]"
            placeholder="Էլ․ հասցե"
          />
          <button className="w-[120px] h-[40px] text-white border rounded-[40px] bg-[#fd993a]">
            Ուղարկել
          </button>
        </div>
      </div>
    </div>
  );
}
