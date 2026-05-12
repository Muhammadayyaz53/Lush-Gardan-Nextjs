"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ApiResponse } from "@/type";

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

const defaultData: ApiResponse = {
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
  const [data, setData] = useState<ApiResponse>(defaultData);

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

        <h1 className="text-3xl font-bold text-green-900 text-center mb-10">
          {data.heading}
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.cards.map((card, index) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
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

                <div className="absolute top-2 right-2 bg-white px-2 py-0.5 rounded-full shadow cursor-pointer hover:bg-green-900 hover:text-white transition">
                  <span className="text-2xl">♡</span>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between">
                <div>
                  <h5 className="font-semibold text-green-900">
                    {card.title}
                  </h5>

                  <p className="text-sm text-green-900">
                    <s>{card.oldPrice}</s>
                    <span className="ml-2">{card.newPrice}</span>
                  </p>
                </div>

                <Link
                  href="#buynow"
                  className="text-sm px-3 py-1 border rounded-md hover:bg-green-900 hover:text-white transition"
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