"use client";

import { useState } from "react";
import Logo from "./Logo";
import HamburgerMenu from "./hamburgerMenu";
import Navbar from "./Navbar";

export default function Header() {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <header className="p-6 flex justify-between items-center sticky top-0 shadow-sm bg-background">
      <Logo />
      <HamburgerMenu
        handler={() => setShowNavBar(!showNavBar)}
        showNavBar={showNavBar}
      />
      {showNavBar && <Navbar />}
    </header>
  );
}
