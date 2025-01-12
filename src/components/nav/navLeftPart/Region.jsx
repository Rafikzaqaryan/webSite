import React from "react";

export default function Region() {
  return (
    <div className="pt-[20px] ">
      <strong>
        <h1>Տարածաշրջան</h1>
      </strong>
      <div className="flex gap-y-2 pt-[10px] text-[#575b65] text-[14px] flex-col">
        <div className="flex  items-center gap-2">
          <input type="checkbox" id="a" className="w-[16px] h-[16px]" />
          <label for="a">Դիլիջան 74</label>
        </div>
        <div className="flex  items-center gap-2">
          <input type="checkbox" id="a" className="w-[16px] h-[16px]" />
          <label for="a">Ծաղկաձոր 49</label>
        </div>
        <div className="flex  items-center gap-2">
          <input type="checkbox" id="a" className="w-[16px] h-[16px]" />
          <label for="a">Երևան 13</label>
        </div>
        <div className="flex  items-center gap-2">
          <input type="checkbox" id="a" className="w-[16px] h-[16px]" />
          <label for="a">Ձորաղբյուր 13</label>
        </div>
        <div className="flex  items-center gap-2">
          <input type="checkbox" id="a" className="w-[16px] h-[16px]" />
          <label for="a">Արզնի 10</label>
        </div>
      </div>
      <div className="w-[220px] h-[1px]  bg-[#f3f3f4] mr-[30px] mt-[40px]"></div>
    </div>
  );
}
