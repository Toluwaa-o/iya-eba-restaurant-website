import React from 'react'

type Props = {}

export default function FooterLogo({}: Props) {
  return (
    <span className="p-4 max-w-[85%] m-auto grid gap-4 items-start">
      <img
        src="/logo-no-background.png"
        alt="Iya Eba Restaurant Logo"
        className="mb-4"
      />
    </span>
  )
}