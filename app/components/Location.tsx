import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "600" });
type Props = {};

export default function Location({}: Props) {
  return (
    <span className="flex flex-col gap-5">
      <h3 className={`${inter.className} uppercase text-2xl text-darkBrown`}>Location</h3>
      <address className="not-italic md:hover:text-darkBrown transition-all">
        <Link href="https://www.google.com/maps/place/Iya-Eba+Restaurant+%26+Bar/@6.4472176,3.4046103,15z/data=!4m2!3m1!1s0x0:0x3f7825fc603f1176?sa=X&ved=2ahUKEwjIgsWqnJGCAxUHKcAKHbuDBvEQ_BJ6BAg4EAA&ved=2ahUKEwjIgsWqnJGCAxUHKcAKHbuDBvEQ_BJ6BAhBEAg">
          14 Berkley Street,
          <br />
          Lagos Island, Lagos State.
        </Link>
      </address>
      <span className="flex items-center gap-1 m-auto md:hover:text-darkBrown transition-all">
        <BsTelephoneFill size={21} />
        <Link href="tel:+2348028761434">+234 802 876 1434</Link>
      </span>
      <span className="flex items-center gap-1 m-auto md:hover:text-darkBrown transition-all">
        <FaEnvelope size={21} />
        <Link href="mailto:iyaebaofficial@gmail.com">
          iyaebaofficial@gmail.com
        </Link>
      </span>
    </span>
  );
}
