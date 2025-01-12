import React from "react";
import Region from "./Region";
import Price from "./Price";
import Overnight from "./Overnight";
import MaxPeopleCount from "./MaxPeopleCount";

export default function NavLeftPart() {
  return (
    <div className="w-[288px] h-[1847px] border rounded-2xl">
      <div className="pl-[30px]">
        <Region />
        <Price />
        <MaxPeopleCount />
        <Overnight />
      </div>
    </div>
  );
}
