"use client";

import { useState } from "react";
import Logo from "./Logo";
import HamburgerMenu from "./hamburgerMenu";
import Navbar from "./Navbar";

export default function Header() {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <header className="p-6 flex justify-between items-center sticky top-0 shadow-sm bg-background md:flex-col md:gap-4 md:shadow-md md:pb-6 md:z-30">
      <Logo />
      <HamburgerMenu
        handler={() => setShowNavBar(!showNavBar)}
        showNavBar={showNavBar}
      />
      <span className="hidden md:block md:w-[70vw] md:h-[2px] bg-darkBrown"></span>
      {showNavBar && <Navbar />}
      <span className="hidden md:block">
        <Navbar />
      </span>
    </header>
  );
}
