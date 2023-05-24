import './globals.css'
import { Inter } from 'next/font/google'
import React from "react";
import navbarStyles from "./Navbar.module.scss";
import { NavbarButton } from "@/app/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'vZNY IDS',
  description: 'vZNY IDS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className={navbarStyles.navbar}>
        <NavbarButton location="ids" />
        <NavbarButton location="tmu" />
      </div>
      {children}
      </body>
    </html>
  )
}
