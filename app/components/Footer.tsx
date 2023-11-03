import Copyright from "./Copyright";
import FooterLogo from "./FooterLogo";
import Location from "./Location";
import QuickLinks from "./QuickLinks";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="text-center p-4 flex flex-col text-myBlue gap-[7vh] md:grid md:gap-[2em] md:grid-cols-3 md:grid-rows-myRows md:p-[4em]">
      <FooterLogo />
      <Location />
      <QuickLinks />
      <Copyright />
    </footer>
  );
}
