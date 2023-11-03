"use client";

import React from "react";
import { Roboto_Serif } from "next/font/google";
import { usePathname } from "next/navigation";
import LinkList from "./LinkList";
import { DataItem, data } from "./data";
import SocialMedia from "./SocialMedia";

type Props = {};

const roboto_serif = Roboto_Serif({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar({}: Props) {
  const pname = usePathname();

  return (
    <nav
      className={`${roboto_serif.className} absolute top-0 bg-background left-0 right-0 w-screen h-screen place-content-center grid nav_animation gap-[10vh] md:relative md:w-fit md:h-fit md:left-[unset] md:right-[unset]`}
    >
      <ul className="p-0 text-center text-2xl gap-[5vh] grid md:flex md:text-[1.2rem] md:items-center md:justify-between md:gap-0 md:min-w-[35vw]">
        {data.map((obj: DataItem, index: number) => {
          return <LinkList key={obj.link} {...obj} pname={pname} />;
        })}
      </ul>

      <span className="md:hidden">
      <SocialMedia mySize={30} />
      </span>
    </nav>
  );
}
