import React from "react";

import { works } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { GoDotFill, GoArrowUpRight } from "react-icons/go";
import Button from "@/components/ui/button";

const ProjectShowcase = ({show}) => {
  return (
    <div className="space-y-5">
      {works.slice(0, show).map((work, index) => (
        <div
          key={index}
          className=" border-2 border-[#1F1F1F] p-4 rounded-xl grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <div className="bg-[#1A1A1A]  rounded-lg p-4 md:p-7 space-y-7 order-1 md:order-0">
            <div className="flex items-center gap-4">
              <Image src={work.icon} alt={work.title} width={50} height={50} />
              <h4>{work.title}</h4>
            </div>

            <div className="space-y-2">
              <p className="flex text-sm! w-fit items-center rounded-2xl bg-dark-main/50 gap-2 px-6 py-2 flex-wrap">
                Category <GoDotFill className="text-orange-main" />{" "}
                {work.category}
              </p>
              <p className="flex text-sm! w-fit items-center rounded-2xl bg-dark-main/50 gap-2 px-6 py-2">
                Time Taken <GoDotFill className="text-orange-main" />{" "}
                {work.timeTaken}
              </p>
            </div>

            <p>{work.desc}</p>

            <div>
              <Link
                href={work.path}
                className="flex items-center gap-2 text-[#F9EFEC] font-normal uppercase text-lg w-fit"
              >
                <span className="border rounded-full p-2 bg-dark-main/50 text-[#E7BEB1]">
                  <GoArrowUpRight />
                </span>{" "}
                Details
              </Link>
            </div>
          </div>

          <div>
            <Image
              src={work.cover}
              alt={work.title}
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-full lg:aspect-3/2"
            />
          </div>

          <div className="space-y-5 hidden lg:block">
            <div className="bg-[#1A1A1A] p-4 rounded-lg">
              <h4>Technology Used</h4>

              <div className="flex flex-wrap gap-5 mt-4">
                {work.techStack.map((data, index) => (
                  <div
                    key={index}
                    className="text-sm! text-[#B3B3B2] font-(family-name:--font-roboto-mono) rounded-2xl px-4 py-2 bg-[#1F1F1F]"
                  >
                    {data}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-4 rounded-lg space-y-3">
              <h4>Team Members</h4>

              <div className="sm:w-[50%]">
                <Image
                  src={work.team}
                  alt={work.title}
                  width={500}
                  height={500}
                  className="w-full"
                />
              </div>
            </div>

            <Button
              value="Book a call"
              href="#"
              type="solid"
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;
