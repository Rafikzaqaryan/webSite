import React from "react";
import Logo from "./Logo";
import Departments from "./Departments";
import Search from "./Search";

export default function Header() {
  return (
    <div className="flex justify-between items-center w-[1519px] h-[93.2px] py-[24px] px-[80px]">
      <Logo />
      <Departments />
      <Search />
    </div>
  );
}
