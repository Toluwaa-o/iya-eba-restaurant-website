import Image from "next/image";
import React from "react";
import SocialMedia from "./SocialMedia";

type Props = {};

export default function Logo({}: Props) {
  return (
    <>
      <Image
        src="/logo(icon).png"
        className="md:hidden"
        alt="Iya Eba Logo"
        width={55}
        height={55}
      />

      <Image
        src="/logo-no-background.png"
        alt="Iya Eba Logo"
        width={280}
        height={280}
        className="hidden md:block"
      />
    </>
  );
}
