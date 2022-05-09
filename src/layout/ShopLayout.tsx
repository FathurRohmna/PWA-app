import React from "react";

import { NavbarBottom } from '../components/NavbarBottom';

interface Props {
  children: React.ReactNode
}

export function ShopLayout({ children }: Props) {
  return (
    <div className="w-full min-h-screen relative block">
      {children}
      <NavbarBottom />
    </div>
  )
}
