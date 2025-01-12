import React from "react";
import Count from "./Count";

export default function AllowedPeopleNight() {
  return (
    <div>
      <strong>
        <h1 className="w-[200px]">Մարդկանց թույլատրելի քանակը գիշերակացով</h1>
      </strong>
      <Count />
      <div className="w-[220px] h-[1px]  bg-[#f3f3f4] mr-[30px] mt-[20px]"></div>
    </div>
  );
}
