import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: '600' });

type Props = {};

export default function QuickLinks({}: Props) {
  return (
    <span className="flex flex-col gap-5">
      <h3 className={`${inter.className} uppercase text-2xl text-darkBrown`}>Quick Links</h3>
      <nav>
        <ul className="flex flex-col gap-2">
          <li className="md:hover:text-darkBrown transition-all">
            <Link href="/about">About us</Link>
          </li>
          <li className="md:hover:text-darkBrown transition-all">
            <Link href="/services">Services</Link>
          </li>
          <li className="md:hover:text-darkBrown transition-all">
            <Link href="/contact-us">Contact us</Link>
          </li>
        </ul>
      </nav>
    </span>
  );
}
