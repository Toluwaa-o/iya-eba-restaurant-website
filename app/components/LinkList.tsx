import Link from "next/link";
import React from "react";

type Props = {
  pname: string;
  link: string;
  text: string;
};

export default function LinkList({ pname, link, text }: Props) {
  return (
    <li className={pname === link ? "text-darkBrown capitalize md:hover:text-darkBrown" : "capitalize md:hover:text-darkBrown"}>
      <Link href={link}>{text}</Link>
    </li>
  );
}
