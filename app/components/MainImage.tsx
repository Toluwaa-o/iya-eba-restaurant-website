import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
};

export default function MainImage({ src, alt }: Props) {
  return (
    <span>
      <Image
        className="md:hidden"
        src={src}
        alt={alt}
        width={375}
        height={375}
      />

      <img className="md:block hidden md:w-[100%] m-auto md:z-20" src={src} alt={alt} />
    </span>
  );
}
