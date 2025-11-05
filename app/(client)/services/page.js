import Faq from "@/components/layout/faq";
import Testimonial from "@/components/layout/testimonial";
import Hero from "@/components/ui/hero-section/hero";
import React from "react";
import Heading from "@/components/ui/heading";
import { services } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Button from "@/components/ui/button";

export const metadata = {
  title: 'Services',
};

const Page = () => {
  return (
    <main className="container space-y-20">
      <Hero
        heading="Our Comprehensive Digital Solutions"
        desc="At NexGen, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation"
        showMarquee={true}
        slider
      />

      <section className="border-2 border-[#1F1F1F] p-4 rounded-2xl space-y-5">
        <Heading title="Our Services" />

        <div className="space-y-5">
          {services.map((service, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-5">
              <div className="bg-[#1A1A1A] p-5 2xl:p-9 rounded-lg space-y-7">
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
                    From $
                    {new Intl.NumberFormat("en-US").format(service.amount)}
                  </h3>

                  <Link
                    href={service.path}
                    className="hidden md:flex items-center gap-2 text-[#F9EFEC] font-normal uppercase text-xl w-fit"
                  >
                    <span className="border rounded-full p-2 bg-dark-main/50 text-[#E7BEB1]">
                      <GoArrowUpRight />
                    </span>{" "}
                    Book a call
                  </Link>

                  <Button className="w-full md:hidden" value="book a call" href="#" type="solid" />
                </div>
              </div>

              <div className="hidden md:block bg-[#1A1A1A] p-5 2xl:p-9 rounded-lg space-y-7">
                <h4>{service.title} projects</h4>

                <div className="grid md:grid-cols-2 gap-4">
                  {service.projects.map((project, idx) => (
                    <div key={idx} href={project.path} className="relative">
                      <Image
                        src={project.cover}
                        alt={service.title}
                        width={500}
                        height={300}
                        className="w-full aspect-2/1 border-2 border-gray-600 object-cover rounded-lg"
                      />

                      <div className="absolute bottom-0 left-0 w-full p-3 flex">
                        <Link
                          href={project.path}
                          className="text-white rounded-full uppercase flex items-center gap-2 text-lg font-(family-name:--font-roboto-mono)"
                        >
                          <span className="rounded-full p-1 bg-white text-dark-main text-2xl">
                            <GoArrowUpRight />
                          </span>
                          open project
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonial />

      <Faq />
    </main>
  );
};

export default Page;
