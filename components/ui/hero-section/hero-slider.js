"use client";

import { slideData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideData.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  const slide = slideData[currentIndex];

  return (
    <div className="relative rounded-2xl overflow-hidden h-full hidden md:block">
      <Image
        src={slide.cover}
        alt={slide.category}
        width={500}
        height={500}
        className="w-full h-full xl:aspect-square object-cover rounded-t-2xl transition-all duration-700 ease-in-out"
      />

      <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between flex-col xl:flex-row gap-5 xl:items-center">
        <Link
          href={slide.path}
          className="text-white rounded-full uppercase flex items-center gap-2 text-lg font-(family-name:--font-roboto-mono)"
        >
          <span className="rounded-full p-1 bg-white text-dark-main text-2xl">
            <GoArrowUpRight />
          </span>
          View Blog
        </Link>

        <div className="bg-white/30 px-3 py-2 rounded-2xl">
          <p className="uppercase text-base! text-white!">{slide.category}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
