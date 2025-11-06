import Faq from "@/components/layout/faq";
import Testimonial from "@/components/layout/testimonial";
import React from "react";
import Heading from "@/components/ui/heading";
import { blogs } from "@/lib/data";
import Image from "next/image";
import { GoDotFill, GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import BlogCard from "@/components/ui/cards/blogCard";

export const metadata = {
  title: "Blog",
};

const Page = () => {
  return (
    <main className="container space-y-20">
      <section className="border-2 border-[#1F1F1F] p-4 rounded-2xl space-y-5">
        <Heading title="Our Blogs" />

        <div className="grid md:grid-cols-3 gap-5">
          <div>
            <Image
              src={blogs[0].cover}
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-2xl"
              alt={blogs[0].title}
            />
          </div>

          <div className="md:col-span-2 bg-[#1A1A1A] p-5 md:p-8 2xl:p-14 rounded-xl space-y-10">
            <div className="space-y-2">
              <h3>{blogs[0].title}</h3>

              <div className="flex items-center gap-3 flex-wrap">
                <p className="text-[#B3B3B2]! text-sm! flex items-center gap-2 px-4 py-2 bg-[#262626] rounded-full">
                  Category <GoDotFill className="text-orange-main text-sm" />{" "}
                  {blogs[0].category}
                </p>

                <p className="text-[#B3B3B2]! text-sm! flex items-center gap-2 px-4 py-2 bg-[#262626] rounded-full">
                  Read Time <GoDotFill className="text-orange-main text-sm" />{" "}
                  {blogs[0].readTime}
                </p>

                <p className="text-[#B3B3B2]! text-sm! flex items-center gap-2 px-4 py-2 bg-[#262626] rounded-full">
                  Author <GoDotFill className="text-orange-main text-sm" />{" "}
                  {blogs[0].author}
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-400 mb-6 2xl:max-w-3xl">
              {blogs[0].desc}
            </p>

            <div className="flex justify-between md:items-center flex-wrap gap-5">
              <Link
                href="/blog/test"
                className="flex items-center gap-2 text-[#F9EFEC] uppercase text-lg lg:text-xl w-fit font-(family-name:--font-roboto-mono)"
              >
                <span className="border rounded-full p-2 bg-dark-main text-orange-main">
                  <GoArrowUpRight />
                </span>{" "}
                Read Full Blog
              </Link>

              <p className="text-[#B3B3B2]! text-sm! flex items-center gap-2">
                  Published Date <GoDotFill className="text-orange-main text-sm" />{" "}
                  <span className="uppercase text-white!">{blogs[0].date}</span>
                </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.slice(1).map((blog, index) => (
            <BlogCard cover={blog.cover} title={blog.title} desc={blog.desc} path="/blog/test" key={index} />
          ))}
        </div>
      </section>

      <Testimonial />

      <Faq />
    </main>
  );
};

export default Page;
