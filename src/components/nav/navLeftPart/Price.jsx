import { useState } from "react";

export default function Price() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  const buttonValue = ["֏", "$", "€", "₽"];

  return (
    <div>
      <div className="flex gap-[30px] items-center pt-[20px]">
        <p className="text-[16px]">Արժեք</p>
        <div className="flex gap-[5px] ">
          {buttonValue.map((value, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={` ${
                activeButton === index
                  ? "bg-black text-white"
                  : "bg-white text-black"
              } text-[18px] cursor-pointer border w-[34px] h-[34px] flex justify-center  items-center rounded-[20px]
          `}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-2 items-center pt-[20px]">
        <div>
          <input
            type="text"
            placeholder="Սկսած"
            className="w-[100px] h-[42px] border rounded-[5px] pl-[10px] text-[14px]"
          />
        </div>
        <div>-</div>
        <div>
          <input
            type="text"
            placeholder="Մինչև"
            className="w-[100px] h-[42px] border rounded-[5px] pl-[10px] text-[14px]"
          />
        </div>
      </div>
      <div className=" w-[220px] h-[1px] bg-[#f3f3f4] mr-[30px] mt-[20px]"></div>
    </div>
  );
}
