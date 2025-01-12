import React from "react";

export default function Advantages() {
  return (
    <div className="pt-[20px] ">
      <strong>
        <h1>Առավելություններ</h1>
      </strong>
      <div className="flex gap-y-2 pt-[10px] text-[#575b65] text-[14px] flex-col">
        <div className="flex  items-center gap-2">
          <input type="checkbox" id="a" className="w-[16px] h-[16px]" />
          <label for="a">Շոգեբաղնիք</label>
        </div>
        <div className="flex  items-center gap-2">
          <input type="checkbox" id="a" className="w-[16px] h-[16px]" />
          <label for="a">Ջակուզի</label>
        </div>
        <div className="flex  items-center gap-2">
          <input type="checkbox" id="a" className="w-[16px] h-[16px]" />
          <label for="a">Սեղանի թենիս</label>
        </div>
        <div className="flex  items-center gap-2">
          <input type="checkbox" id="a" className="w-[16px] h-[16px]" />
          <label for="a"> Բացօթյա տաղավար</label>
        </div>
        <div className="flex  items-center gap-2">
          <input type="checkbox" id="a" className="w-[16px] h-[16px]" />
          <label for="a">Փակ տաղավար</label>
        </div>
        <div className="flex  items-center gap-2">
          <input type="checkbox" id="a" className="w-[16px] h-[16px]" />
          <label for="a"> Մանղալ</label>
        </div>
        <div className="flex  items-center gap-2">
          <input type="checkbox" id="a" className="w-[16px] h-[16px]" />
          <label for="a">Թոնիր</label>
        </div>
      </div>
    </div>
  );
}
