"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { Blog } from "@/type";

const fallbackImages = [
  "/image 6.png",
  "/image 7.png",
  "/image 8.png",
];

export default function Layer() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [heading, setHeading] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/layer");
        const json = await res.json();

        if (json?.data) {
          setBlogs(json.data.blogs || []);
          setHeading(json.data.heading || "");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full flex justify-center mt-12">
      <div className="w-full px-4">

        {/* HEADING */}
        <div className="flex justify-center mb-10">
          <h2 className="text-3xl text-green-800 font-bold text-center">
            {heading || "Interesting blog to read"}
          </h2>
        </div>

        {/* BLOG CARDS */}
        <div className="flex justify-center gap-12 flex-wrap">

          {blogs.map((blog, index) => (
            <div key={index} className="w-80">

              {/* IMAGE */}
              <div className="relative h-56 w-full overflow-hidden rounded-lg">
                <Image
                  src={
                    blog.image && blog.image.trim()
                      ? blog.image
                      : fallbackImages[index % fallbackImages.length]
                  }
                  alt={blog.title || "blog"}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-lg text-green-800 font-bold mt-4">
                {blog.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-700 mt-3">
                {blog.desc}
              </p>

              {/* FOOTER */}
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt />
                  <p className="text-sm">{blog.date}</p>
                </div>

                <div className="flex items-center gap-1 cursor-pointer">
                  <p className="text-sm font-semibold">Read More</p>
                  <FaArrowRight />
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}