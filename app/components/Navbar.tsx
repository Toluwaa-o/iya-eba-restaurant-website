"use client";

import Link from "next/link";
import React from "react";
import { Roboto_Serif } from "next/font/google";
import { usePathname } from "next/navigation";
import LinkList from "./LinkList";
import { DataItem, data } from "./data";
import SocialMedia from "./SocialMedia";

type Props = {};

const roboto_serif = Roboto_Serif({
  subsets: ["latin"],
  weight: "500",
});

export default function Navbar({}: Props) {
  const pname = usePathname();

  return (
    <nav
      className={`${roboto_serif.className} absolute top-0 bg-background left-0 right-0 w-screen h-screen place-content-center grid nav_animation gap-[10vh]`}
    >
      <ul className="p-0 text-center text-2xl gap-[5vh] grid">
        {data.map((obj: DataItem, index: number) => {
          return <LinkList link={obj.link} text={obj.text} pname={pname} />;
        })}
      </ul>

      <SocialMedia mySize={30} />
    </nav>
  );
}
