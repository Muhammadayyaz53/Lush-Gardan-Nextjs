"use client";

import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { VscPlayCircle } from "react-icons/vsc";

type Button = {
  text: string;
  href: string;
  variant: "primary" | "secondary";
};

type HeroContent = {
  title: string;
  description: string;
  buttons: Button[];
};

const defaultHeroContent: HeroContent = {
  title: "Nature's Beauty Delivered to You",
  description:
    "Nature's beauty is just a click away with our online flower and plant shop.",
  buttons: [
    {
      text: "Book Now",
      href: "#booknow",
      variant: "primary",
    },
    {
      text: "Watch Video",
      href: "#watchvideo",
      variant: "secondary",
    },
  ],
};

export default function HeroSection() {
  const [heroContent, setHeroContent] =
    useState<HeroContent>(defaultHeroContent);

  useEffect(() => {
    const fetchHeroSection = async () => {
      try {
        const res = await fetch("/api/herosection");

        const data = await res.json();

        if (data.success) {
          setHeroContent(data.data);
        }
      } catch (error) {
        console.log("Fetch Error ❌", error);
      }
    };

    fetchHeroSection();
  }, []);

  return (
    <section
      className="w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-background.png')",
      }}
    >
      <Header />

      <div className="flex items-center justify-center min-h-[85vh] px-4 text-center">
        <div className="max-w-3xl">

         <h1 className="text-red-2xl md:text-5xl font-bold text-white  max-w-2xl mx-auto">
            {heroContent.title}
          </h1>

          <p className="mt-6 text-gray-200 text-lg">
            {heroContent.description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {heroContent.buttons.map((btn, index) => (
              <a
                key={index}
                href={btn.href}
                className="px-6 py-3 rounded-md border border-white text-white flex items-center gap-2 hover:bg-green-950 transition-all duration-300"
              >
                {btn.variant === "secondary" && (
                  <VscPlayCircle size={22} />
                )}

                {btn.text}
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}