import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const NewsLetter = () => {
  return (
    <form className="flex items-center gap-6">
      <input
        type="email"
        placeholder="Enter your email"
        required
        className="w-full bg-transparent! border-b border-gray-500"
      />

      <button
        type="submit"
        className="border rounded-full p-3 bg-dark-sec text-[#E7BEB1] cursor-pointer"
      >
        <GoArrowUpRight />
      </button>
    </form>
  );
};

export default NewsLetter;
