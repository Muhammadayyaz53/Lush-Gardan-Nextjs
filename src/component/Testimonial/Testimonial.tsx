"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Testimonial } from "../../type";

const testimonialsUI = [
  {
    avatar: "/Rectangle.png",
    plantImg: "/Zz_Plant 1.png",
  },
  {
    avatar: "/Rectangle-(1).png",
    plantImg: "/Snake_Plant 1.png",
  },
  {
    avatar: "/Rectangle-(2).png",
    plantImg: "/Bamboo 258.png",
  },
];

const defaultData = {
  heading: "",
  cards: [] as Testimonial[],
};

export default function Testimonial() {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/testimonial");
        const json = await res.json();

        if (json?.data) {
          setData({
            heading: json.data.heading || "",
            cards: json.data.cards || [],
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full mt-12 bg-white">

      {/* HEADING */}
      <h2 className="text-center text-3xl text-green-800 mb-12 font-bold">
        {data.heading}
      </h2>

      {/* CARDS */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">

        {data.cards.map((item, index) => {
          const ui = testimonialsUI[index % testimonialsUI.length];

          return (
            <div
              key={index}
              className="relative w-80 bg-gray-100 rounded-lg p-8 overflow-hidden"
            >
              {/* PLANT IMAGE */}
              <div className="absolute bottom-0 right-0 h-40 w-40">
                <Image
                  src={ui.plantImg}
                  alt="plant"
                  fill
                  className="object-contain opacity-80"
                />
              </div>

              {/* AVATAR */}
              <Image
                src={ui.avatar}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-full mb-4"
              />

              {/* NAME */}
              <h4 className="text-lg font-bold text-green-800">
                {item.name}
              </h4>

              {/* TEXT */}
              <p className="text-sm text-gray-700 mt-2">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}