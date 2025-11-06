"use client";

import MarqueeTree from "@/lib/marquee";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroSlider from "./hero-slider";
import { heroKeywords } from "@/lib/data";
import Button from "../button";
import Achievement from "./achievement";

const Hero = ({
  heading,
  desc = "",
  showMarquee = false,
  slider = false,
  showRight = true,
  showAchievement = false,
}) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* Left/Main Section */}
      <div className="col-span-1 md:col-span-2 bg-dark-sec p-5 rounded-2xl">
        <div className="lg:p-10 2xl:p-20 space-y-4 pb-5 md:pb-0">
          <h1>{heading}</h1>
          {desc && <p className="text-lg text-[#676665]!">{desc}</p>}

          <Button
            className="w-full md:hidden"
            href="#"
            type="solid"
            value="Book a call"
          />
        </div>

        {showMarquee && <MarqueeTree keywords={heroKeywords} />}
      </div>

      {/* Right/Card Section */}
      {showRight && (
        <div>
          {slider ? (
            <HeroSlider />
          ) : showAchievement ? (
            <Achievement />
          ) : (
            <Link className="relative hidden md:block" href="#">
              <Image
                src="/images/real-eastate.png"
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
