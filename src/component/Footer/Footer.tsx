import { CiFacebook } from "react-icons/ci";
import {
  PiInstagramLogoThin,
  PiTwitterLogoThin,
} from "react-icons/pi";

import type { FooterLink } from "../../type";

import Image from "next/image";

const footerLinks: FooterLink[] = [
  { label: "Home", href: "/herosection" },
  { label: "About Us", href: "/about" },
  { label: "Planters", href: "/gallery" },
  { label: "Delivery", href: "/designcard" },
  { label: "Blog", href: "/layer" },
  { label: "Contact", href: "#contact" },
];

const socialIcons = [
  {
    id: 1,
    icon: "instagram",
    href: "https://www.instagram.com/_muhammadayyaz/",
    component: <PiInstagramLogoThin size={40} />,
  },

  {
    id: 2,
    icon: "facebook",
    href: "https://www.facebook.com/mhmd.ayaz.463591",
    component: <CiFacebook size={40} />,
  },

  {
    id: 3,
    icon: "twitter",
    href: "https://twitter.com/",
    component: <PiTwitterLogoThin size={40} />,
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-green-800 mt-12 relative overflow-hidden">

      {/* LEFT IMAGE */}
      <div className="absolute left-0 bottom-0 h-[200px] w-[200px]">
        <Image
          src="/Monstera_1.png"
          alt="Monstera"
          fill
          sizes="200px"
          className="object-contain opacity-80"
        />
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute right-0 bottom-0 h-[200px] w-[200px]">
        <Image
          src="/Fern_1.png"
          alt="Fern"
          fill
          sizes="200px"
          className="object-contain opacity-80"
        />
      </div>

      {/* CONTENT */}
      <div className="mx-auto flex flex-col items-center py-6 gap-4 text-center px-6">

        <h2 className="text-white text-2xl font-bold">
          Feel free to contact us
        </h2>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 justify-center">
          {socialIcons.map((icon) => (
            <a
              key={icon.id}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-110 transition duration-300"
            >
              {icon.component}
            </a>
          ))}
        </div>

        {/* FOOTER LINKS */}
        <ul className="flex gap-6 text-white text-sm font-medium flex-wrap justify-center">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:underline transition duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

      </div>

      {/* COPYRIGHT */}
      <p className="text-white text-center bg-black text-xs opacity-80 py-2">
        Copyright © 2026 Lush. All rights reserved. Muhammad Ayyaz
      </p>

    </footer>
  );
};

export default Footer;