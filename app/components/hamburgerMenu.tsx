"use client";
import { useEffect, useState } from "react";

type Props = {
  handler: Function;
  showNavBar: boolean;
};

export default function HamburgerMenu({ handler, showNavBar }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(showNavBar);
  }, [showNavBar]);

  const clickHandler = () => {
    setShow(!show);
    handler();
  };

  return (
    <div
      id="nav-icon1"
      className={show ? "open z-30" : " z-30"}
      onClick={clickHandler}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
