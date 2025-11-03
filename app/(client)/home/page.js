import Heading from "@/components/ui/heading";
import Hero from "@/components/ui/hero-section/hero";
import { counterData, reasons, services, works } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Button from "@/components/ui/button";

const Home = () => {
  return (
    <main className="container space-y-20">
      <div>
        <Hero
          heading="Digital Solutions That Drive Success"
          desc="At NexGen, we believe in the transformative power of digital
             solutions. Our team of experts is dedicated to helping businesses
             like yours thrive in the fast-paced digital landscape."
          showMarquee={true}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 border-2 border-[#1F1F1F] p-4 rounded-2xl mt-5">
          {counterData.map((data, index) => (
            <div
              key={index}
              className={`text-center bg-[#1A1A1A] p-5 rounded-lg space-y-2 ${
                index === counterData.length - 1
                  ? "col-span-2 md:col-span-1"
                  : ""
              }`}
            >
              <p className="text-lg text-[#B3B3B2] font-(family-name:--font-roboto-mono)">
                {data.title}
              </p>
              <h2 className="text-3xl font-bold text-orange-main!">
                {data.count}
              </h2>
            </div>
          ))}

          <Link
            href="/about"
            className="text-center text-xl font-medium uppercase bg-[#1A1A1A] p-5 rounded-lg space-y-2 col-span-2 md:col-span-1 flex h-full items-center justify-center text-[#B3B3B2] gap-3"
          >
            <span className="border rounded-full p-3 bg-dark-main text-orange-main">
              <GoArrowUpRight />
            </span>{" "}
            Know More
          </Link>
        </div>
      </div>

      <section className="border-2 border-[#1F1F1F] p-4 rounded-2xl space-y-5">
        <Heading title="Reasons to Choose NexGen for Your Digital Journey" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-5 2xl:p-9 rounded-lg space-y-7"
            >
              <h3>{reason.title}</h3>
              <p className="text-[#B3B3B2]!">{reason.desc}</p>

              <div>
                <Link
                  href={reason.path}
                  className="flex items-center gap-2 text-[#F9EFEC] font-medium text-xl w-fit"
                >
                  <span className="border rounded-full p-2 bg-dark-main text-orange-main">
                    <GoArrowUpRight />
                  </span>{" "}
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-2 border-[#1F1F1F] p-4 rounded-2xl space-y-5">
        <Heading title="Our Services" />

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-5 2xl:p-9 rounded-lg space-y-7"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                />
                <h3>{service.title}</h3>
              </div>
              <p className="text-[#B3B3B2]!">{service.desc}</p>

              <div className="flex lg:items-center justify-between flex-col lg:flex-row gap-4">
                <h3>
                  From ${new Intl.NumberFormat("en-US").format(service.amount)}
                </h3>

                <Link
                  href={service.path}
                  className="flex items-center gap-2 text-[#F9EFEC] font-normal uppercase text-xl w-fit"
                >
                  <span className="border rounded-full p-2 bg-dark-main/50 text-[#E7BEB1]">
                    <GoArrowUpRight />
                  </span>{" "}
                  Book a call
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <Heading title="Our Works" />

        <div className="space-y-5">
          {works.map((work, index) => (
            <div
              key={index}
              className=" border-2 border-[#1F1F1F] p-4 rounded-xl grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              <div className="bg-[#1A1A1A]  rounded-lg p-4 md:p-7 space-y-7 order-1 md:order-0">
                <div className="flex items-center gap-4">
                  <Image
                    src={work.icon}
                    alt={work.title}
                    width={50}
                    height={50}
                  />
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

                  <Button value="Book a call" href="/signup" type="solid" className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
