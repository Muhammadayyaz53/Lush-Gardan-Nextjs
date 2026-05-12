"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type BenefitCard = {
  id: string | number;
  title: string;
  description: string;
  highlight?: boolean;
};

type ApiResponse = {
  heading: string;
  cards: BenefitCard[];
};

const staticImages = [
  "/Time-Cosuming.png",
  "/Grow_Sprout.png",
  "/Temperature.png",
  "/Pruning.png",
];

export default function Benefits() {
  const [data, setData] =useState<ApiResponse>({
    heading: "",
    cards: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/benifit");
      const json = await res.json();

      if (json?.data) {
        setData(json.data);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      className="w-full overflow-hidden mt-10"
      style={{ height: "700px" }}
    >
      <div className="flex h-[700px]">

        {/* LEFT IMAGE */}
        <div className="w-1/2 h-[700px] relative">
          <Image
            src="/Group-1.png"
            alt="Feature Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* RIGHT CARDS */}
        <div className="w-1/2 h-[700px] grid grid-cols-2 grid-rows-2">

          {data.cards.slice(0, 4).map((item, index) => (
            <div
              key={item.id}
              className={`h-[350px] flex flex-col justify-center p-6 ${
                item.highlight ? "bg-gray-100" : "bg-white"
              }`}
            >
              <Image
                src={staticImages[index]}
                alt={item.title}
                width={60}
                height={60}
                className="mb-4"
              />

              <h3 className="text-lg font-bold text-green-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}