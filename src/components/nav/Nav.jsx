import React from "react";
import NavLeftPart from "./navLeftPart/NavLeftPart";
import NavRightPart from "./navRightPart/NavRightPart";

export default function Nav() {
  return (
    <div className="pl-[90px] pt-[50px] flex gap-[40px]">
      <NavLeftPart />
      <NavRightPart />
    </div>
  );
}
