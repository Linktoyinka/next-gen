import { counterData } from "@/lib/data";
import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const Achievement = () => {
  return (
    <div className="bg-dark-sec p-3 md:p-5 rounded-2xl grid grid-cols-2 gap-3 md:gap-5 h-full">
      {counterData.map((counter, index) => (
        <div
          key={index}
          className="text-center bg-[#1A1A1A] p-3 md:p-5 rounded-lg space-y-2 grid place-content-center"
        >
          <p className="text-lg text-[#B3B3B2] font-(family-name:--font-roboto-mono)">
            {counter.title}
          </p>
          <h2 className="text-3xl font-bold text-orange-main!">
            {counter.count}
          </h2>
        </div>
      ))}

      <Link
        href="#"
        className="text-center text-xl font-medium uppercase bg-[#1A1A1A] p-3 md:p-5 rounded-lg space-y-2 flex h-full items-center justify-center text-[#B3B3B2] gap-3"
      >
        <span className="border rounded-full p-3 bg-dark-main text-orange-main">
          <GoArrowUpRight />
        </span>{" "}
        Know More
      </Link>
    </div>
  );
};

export default Achievement;
