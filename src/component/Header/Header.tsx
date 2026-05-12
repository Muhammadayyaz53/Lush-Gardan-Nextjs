"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import type { MenuItem } from "../../type";

const navItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Planters", href: "/designcard" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <header
      className={`w-full z-50 ${
        isHome
          ? "absolute top-0 left-0 text-white"
          : "bg-green-900 text-white shadow-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="relative w-[100px] h-[60px]">
            <Image
              src="/mask-group.png"
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
               className="hover:underline transition duration-300"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="border border-white px-6 py-3 rounded-md hover:bg-green-900 hover:text-white transition duration-300"
            >
              Call Us
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-3xl"
          >
            {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[88px] bg-black text-white md:hidden z-40">

          <div className="flex flex-col items-center gap-8 pt-16 text-lg">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-green-900 transition"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-green-900 px-6 py-3 rounded-md hover:bg-green-950 transition"
            >
              Call Us
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}