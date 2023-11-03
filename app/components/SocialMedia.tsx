import Link from "next/link";
import {
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
} from "react-icons/fa6";

type Props = {
    mySize: number
};

export default function SocialMedia({mySize}: Props) {
  return (
    <nav>
      <li className="flex items-center gap-4">
        <ul>
          <Link href="instagram.com">
            <FaInstagram size={mySize} />
          </Link>
        </ul>
        <ul>
          <Link href="twitter.com">
            <FaXTwitter size={mySize} />
          </Link>
        </ul>
        <ul>
          <Link href="whatsapp.com">
            <FaWhatsapp size={mySize} />
          </Link>
        </ul>
        <ul>
          <Link href="facebook.com">
            <FaFacebookF size={mySize} />
          </Link>
        </ul>
      </li>
    </nav>
  );
}
