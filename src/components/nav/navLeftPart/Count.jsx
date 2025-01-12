import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  function plus() {
    setCount((count) => count + 1);
  }

  function minus() {
    setCount((count) => count - 1);
  }
  return (
    <div className="flex gap-[10px] pt-[15px]">
      <div>
        <button
          className="w-[40px] h-[40px] bg-[#EEEE] flex items-center justify-center rounded-[30px] border"
          onClick={minus}
        >
          -
        </button>
      </div>
      <div className="w-[64px] h-[44px] border rounded-[5px] flex items-center justify-center pb-[5px]">
        {count}
      </div>
      <div>
        <button
          className="w-[40px] h-[40px] bg-[#EEEE] flex items-center justify-center pb-[5px] border rounded-[30px]"
          onClick={plus}
        >
          +
        </button>
      </div>
    </div>
  );
}
