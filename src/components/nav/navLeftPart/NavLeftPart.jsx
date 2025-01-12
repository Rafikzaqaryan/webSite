import React from "react";
import Region from "./Region";
import Price from "./Price";

export default function NavLeftPart() {
  return (
    <div className="w-[288px] h-[1847px] border rounded-2xl">
      <div className="pl-[30px]">
        <Region />
        <Price />
      </div>
    </div>
  );
}
