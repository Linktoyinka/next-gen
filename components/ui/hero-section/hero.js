"use client";

import MarqueeTree from "@/lib/marquee";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroSlider from "./hero-slider";
import { heroKeywords } from "@/lib/data";

const Hero = ({
  heading,
  desc = "",
  showMarquee = false,
  sliderData = null, 
  showRight = true,  
}) => {
  return (
    <section className="grid md:grid-cols-3 gap-5">
      {/* Left/Main Section */}
      <div className="md:col-span-2 bg-dark-sec p-5 rounded-2xl">
        <div className="lg:p-10 2xl:p-20">
          <h1>{heading}</h1>
          {desc && <p className="text-lg text-[#676665]! py-4">{desc}</p>}
        </div>

        {/* {showMarquee && <MarqueeTree keywords={heroKeywords} />} */}
      </div>

      {/* Right/Card Section */}
      {showRight && (
        <div className="hidden md:block">
          {sliderData ? (
            <HeroSlider data={sliderData} />
          ) : (
            <Link className="relative" href="#">
              <Image
                src="/images/image.png"
                alt="default card"
                width={500}
                height={500}
                className="rounded-t-2xl w-full"
              />

              <div className="absolute top-4 right-4">
                <Image
                  src="/icons/Button.svg"
                  alt="button"
                  width={500}
                  height={500}
                  className="rounded-b-2xl w-full"
                />
              </div>

              <div className="rounded-b-2xl bg-[#1F1F1F] p-4">
                <h3>Estatein Real Estate</h3>
                <p>Web Development.</p>
              </div>
            </Link>
          )}
        </div>
      )}
    </section>
  );
};

export default Hero;
