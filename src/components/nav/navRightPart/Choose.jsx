import React from "react";

export default function Choose() {
  return (
    <div>
      <div className="flex  gap-5 items-center pt-[20px]">
        <div>
          <img
            src="https://api.amaranoc.am/home.svg"
            className="w-[40px] h-[40px] ml-[39px]"
          />
          <p>Առանձնատներ</p>
        </div>
        <div>
          <img
            src="https://api.amaranoc.am/frame_house.svg"
            className="w-[40px] h-[40px]  ml-[30px]"
          />
          <p>Frame houses</p>
        </div>
        <div>
          <img
            src="https://api.amaranoc.am/cabins.svg"
            className="w-[40px] h-[40px]  ml-[15px]"
          />
          <p>Տնակներ</p>
        </div>
        <div>
          <img
            src="https://api.amaranoc.am/close_pool.svg"
            className="w-[40px] h-[40px]  ml-[45px]"
          />
          <p>Փակ լողավազան</p>
        </div>
        <div>
          <img
            src="https://api.amaranoc.am/far_from_noise.svg"
            className="w-[40px] h-[40px] ml-[40px]"
          />
          <p>Աղմուկից հեռու</p>
        </div>
        <div>
          <img
            src="https://api.amaranoc.am/view.svg"
            className="w-[40px] h-[40px] ml-[40px]"
          />
          <p>Շքեղ տեսարան</p>
        </div>
        <div>
          <img
            src="https://api.amaranoc.am/nobel.svg"
            className="w-[40px] h-[40px] ml-[33px]"
          />
          <p>Պահանջված</p>
        </div>
        <div>
          <img
            src="https://api.amaranoc.am/along_lake.svg"
            className="w-[40px] h-[40px] ml-[20px]"
          />
          <p> Լճի ափին</p>
        </div>
      </div>
      <div className=" w-[1000px] h-[1px] bg-[#f3f3f4] mr-[30px] mt-[20px]"></div>
    </div>
  );
}
