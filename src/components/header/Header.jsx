import React from "react";
import Logo from "./Logo";
import Departments from "./Departments";
import Search from "./Search";

export default function Header() {
  return (
    <div>
      <Logo />
      <Departments />
      <Search />
    </div>
  );
}
