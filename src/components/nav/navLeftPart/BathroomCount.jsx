import { useState } from "react";

export default function BathroomCount() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  const buttonStyles = ["w-[98px]", "w-[55px]", "w-[57px]", "w-[63px]"];

  const buttonValue = ["Բոլորը", "1", "2", "3+"];

  return (
    <div>
      <strong>
        <h1 className="mt-[30px]">Սանհանգույցների քանակ</h1>
      </strong>
      <div className="flex gap-[100px] items-center pt-[20px]">
        <div className="flex flex-wrap gap-[10px]">
          {buttonValue.map((value, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`text-[18px] cursor-pointer border h-[50px] flex justify-center items-center rounded-[40px]
                     ${buttonStyles[index]}
                     ${
                       activeButton === index
                         ? "bg-black text-white"
                         : "bg-white text-black hover:bg-[#EEEE]"
                     }
                   `}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <div className="w-[220px] h-[1px]  bg-[#f3f3f4] mr-[30px] mt-[20px]"></div>
    </div>
  );
}
