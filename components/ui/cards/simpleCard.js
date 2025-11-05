import React from "react";
import Link from "next/link";
import { GoArrowUpRight, GoDotFill } from "react-icons/go";
import Image from "next/image";

const SimpleCard = ({ title, desc, path, btn, key, cover, date }) => {
  return (
    <div key={key} className="bg-[#1A1A1A] p-5 2xl:p-9 rounded-lg space-y-7">
      <div className="flex justify-between items-center">
        {date && <p className="text-[#B3B3B2]! text-sm! flex items-center gap-2 px-4 py-2 bg-[#262626] rounded-full">Date <GoDotFill className="text-orange-main text-sm" /> {date}</p>}
        {cover && (
          <Image
            src={cover}
            width={50}
            height={50}
            alt={title}
            className="aspect-square"
          />
        )}
      </div>
      <h3>{title}</h3>
      <p className="text-[#B3B3B2]!">{desc}</p>

      {path && (
        <div>
          <Link
            href={path}
            className="flex items-center gap-2 text-[#F9EFEC] font-medium text-xl w-fit"
          >
            <span className="border rounded-full p-2 bg-dark-main text-orange-main">
              <GoArrowUpRight />
            </span>{" "}
            {btn}
          </Link>
        </div>
      )}
    </div>
  );
};

export default SimpleCard;
