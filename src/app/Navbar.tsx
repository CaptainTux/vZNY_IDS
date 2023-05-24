'use client';

import Link from "next/link";
import clsx from "clsx";
import styles from "./Navbar.module.scss";
import { usePathname } from "next/navigation";

type NavbarButtonProps = {
  location: "ids" | "tmu";
}

export const NavbarButton = ({ location }: NavbarButtonProps) => {
  const pathName = usePathname();
  return <button>
    <Link className={clsx(pathName === `/${location}` && styles.selected)} href={`/${location}`}>{location.toUpperCase()}</Link>
  </button>
}
