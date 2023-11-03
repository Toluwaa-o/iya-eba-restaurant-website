import Link from "next/link";
import React from "react";

type Props = {
  pname: string;
  link: string;
  text: string;
};

export default function LinkList({ pname, link, text }: Props) {
  return (
    <li className={pname === link ? "text-darkBrown capitalize" : "capitalize"}>
      <Link href={link}>{text}</Link>
    </li>
  );
}
