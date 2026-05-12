"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { DesignCardResponse } from "@/type";

const staticImages = [
  "/Rectangle-11.png",
  "/Rectangle-11 (1).png",
  "/Rectangle-6.png",
  "/Rectangle-7.png",
  "/Rectangle-11 (2).png",
  "/Rectangle-9.png",
  "/Rectangle-10(1)(1).png",
  "/pexels-hanna-auramenka-8497490-1.jpg",
];

const defaultData: DesignCardResponse = {
  heading: "What We Offer To You",
  cards: [
    {
      id: 1,
      title: "Cactus Plant",
      oldPrice: "($10)",
      newPrice: "$8",
      image: "",
    },
  ],
};

export default function DesignCards() {
  const [data, setData] = useState<DesignCardResponse>(defaultData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/designcard");
        const json = await res.json();

        if (json?.data) {
          setData({
            heading: json.data.heading || defaultData.heading,
            cards: json.data.cards || defaultData.cards,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full mt-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* heading */}
        <h1 className="text-3xl font-bold text-green-900 text-center mb-10">
          {data.heading}
        </h1>

        {/* cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {data.cards.map((card, index) => (
            <div
              key={card.id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={
                    card.image && card.image.length > 0
                      ? card.image
                      : staticImages[index % staticImages.length]
                  }
                  alt={card.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full">
                  ♡
                </div>
              </div>

              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-green-900">
                    {card.title}
                  </h3>

                  <p className="text-sm text-green-900">
                    <s>{card.oldPrice}</s>
                    <span className="ml-2">{card.newPrice}</span>
                  </p>
                </div>

                <Link
                  href="#buynow"
                  className="text-sm px-3 py-1 border rounded hover:bg-green-900 hover:text-white"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}