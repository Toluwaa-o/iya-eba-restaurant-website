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

      <Image
        className="md:block hidden"
        src={src}
        alt={alt}
        width={760}
        height={375}
      />
    </span>
  );
}
