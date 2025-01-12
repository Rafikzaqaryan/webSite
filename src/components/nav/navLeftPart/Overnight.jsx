import { useState } from "react";

export default function App() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  const buttonStyles = ["w-[98px]", "w-[72px]", "w-[65px]"];

  const buttonValue = ["Բոլորը", "Այո", "Ոչ"];

  return (
    <div>
      <strong>
        <h1 className="mt-[30px]">Գիշերակացի առկայություն</h1>
      </strong>
      <div className="flex gap-[30px] items-center pt-[20px]">
        <div className="grid grid-cols-2 gap-[5px]">
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
