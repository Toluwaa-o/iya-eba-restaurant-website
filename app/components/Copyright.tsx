import React from "react";

type Props = {};

export default function Copyright({}: Props) {
  return (
    <span className="text-gray-400 text-xs tracking-wide grid gap-2 md:col-span-3">
      <p>Copyright &copy; 2023. Iya Eba All rights Reserved</p>
      <p>Privacy Policy | Terms & Conditions</p>
    </span>
  );
}
