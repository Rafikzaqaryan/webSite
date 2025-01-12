import React from "react";
import Count from "./Count";

export default function MaxPeopleCount() {
  return (
    <div className="pt-[30px]">
      <strong>
        <h1>Մարդկանց թույլատրելի քանակ</h1>
      </strong>
      <Count />
      <div className="w-[220px] h-[1px]  bg-[#f3f3f4] mr-[30px] mt-[20px]"></div>
    </div>
  );
}
