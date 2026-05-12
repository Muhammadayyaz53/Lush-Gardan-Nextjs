"use client";

import "./globals.css";

import { usePathname } from "next/navigation";

import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // pages jahan header/footer hide karna hai
  const hideLayout =
    pathname === "/" ||
    pathname === "/herosection";

  return (
    <html lang="en">
      <body>

        {/* HEADER */}
        {!hideLayout && <Header />}

        {/* PAGES */}
        {children}

        {/* FOOTER */}
        {!hideLayout && <Footer />}

      </body>
    </html>
  );
}