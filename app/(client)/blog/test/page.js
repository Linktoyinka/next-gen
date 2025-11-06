import Faq from "@/components/layout/faq";
import Testimonial from "@/components/layout/testimonial";
import React from "react";
import Heading from "@/components/ui/heading";
import { blogs } from "@/lib/data";
import Image from "next/image";
import { GoDotFill, GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import BlogCard from "@/components/ui/cards/blogCard";
import Button from "@/components/ui/button";

export const metadata = {
  title: "Blog",
};

const overview = [
  {
    title: "Author",
    data: "Sophia Roberts",
  },
  {
    title: "Published Date",
    data: "25th October 2023",
  },
  {
    title: "Category",
    data: "Design",
  },
  {
    title: "Read Time",
    data: "5 minutes",
  },
];

const share = [
  { title: "Twitter", href: "#", icon: "/icons/twitter.svg" },
  { title: "Reddit", href: "#", icon: "/icons/reddit.svg" },
  { title: "Facebook", href: "#", icon: "/icons/facebook-2.svg" },
];

const shareDetails = [
  {
    icon: "/icons/like.svg",
    title: "Liked By",
    value: "2.6k",
  },
  {
    icon: "/icons/share.svg",
    title: "Shared BY",
    value: "120",
  },
];

const Page = () => {
  return (
    <main className="container space-y-20">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="col-span-1 lg:col-span-2 bg-dark-sec p-5 rounded-2xl grid place-content-center">
          <div className="md:p-4 space-y-5 md:space-y-0">
            <h1>Mastering the Art of Minimalistic Design</h1>

            <Button
              className="w-full md:hidden"
              href="#"
              type="solid"
              value="Book a call"
            />
          </div>
        </div>

        <div className="bg-dark-sec p-5 rounded-2xl grid md:grid-cols-2 gap-5 lg:grid-cols-1">
          {overview.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center md:items-start 2xl:items-center flex-row md:flex-col 2xl:flex-row bg-dark-main p-5 md:p-7 rounded-xl"
            >
              <p className="font-(family-name:--font-roboto-mono)">
                {item.title}
              </p>
              <h4 className="font-(family-name:--font-roboto-mono)">
                {item.data}
              </h4>
            </div>
          ))}
        </div>
      </section>

      <div>
        <Image
          src="/blogs/blog-5.png"
          width={1000}
          height={500}
          className="w-full h-full object-cover rounded-2xl"
          alt="Mastering the Art of Minimalistic Design"
        />
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 3xl:max-w-[90%] mx-auto">
        <div className="lg:col-span-1 md:text-lg text-gray-400 lg:sticky lg:top-10 lg:self-start flex justify-center gap-5 lg:flex-col items-center md:items-end">
          {share.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="flex items-center gap-3"
            >
              <Image src={item.icon} width={50} height={50} alt={item.title} />
            </Link>
          ))}
        </div>

        <div className="lg:col-span-8 rounded-2xl bg-dark-sec p-5 space-y-5 lg:sticky lg:top-10 lg:self-start">
          <h3>The Essence of Minimalism in Design</h3>

          <p className="pl-5">
            In the realm of design, the essence of minimalism lies in the
            deliberate choice to distill complexity and convey a powerful
            message through simplicity. It's an art form that celebrates the
            beauty of space, emphasizing the significance of each carefully
            chosen element. A minimalist design isn't about deprivation; rather,
            it's a conscious decision to focus on the core, allowing the
            audience to engage with a visual narrative that is both refined and
            impactful.
            <br />
            <br />
            As we explore the essence of minimalistic design, we uncover the
            subtle nuances that contribute to its allure. The use of negative
            space, a hallmark of minimalism, creates breathing room within the
            composition, allowing the viewer's gaze to rest and appreciate the
            inherent beauty of the design. The simplicity in form and color
            becomes a canvas for expression, where every line and shade tells a
            story. By embracing minimalism, designers have the opportunity to
            communicate more with less, fostering a connection that transcends
            visual aesthetics.
            <br />
            <br />
            At its core, minimalism in design challenges conventional notions,
            encouraging a shift from excess to essence. It invites both creators
            and consumers to engage in a thoughtful dialogue with the visual
            elements, promoting a sense of mindfulness and intentionality. The
            essence of minimalistic design, therefore, lies not just in its
            visual appeal but in the profound impact it has on the way we
            perceive and interact with the world of design.
          </p>

          <h3>Minimalism Beyond Aesthetics</h3>

          <p className="pl-5">
            Beyond its visually captivating exterior, minimalism is a design
            philosophy that permeates every aspect of the creative process,
            extending its influence far beyond the surface. This philosophy
            becomes a lens through which designers view their craft, shaping not
            just what is seen but how it is experienced. The minimalist approach
            transcends mere aesthetics; it becomes a mindset that emphasizes
            clarity, functionality, and a deeper connection with the audience.
            <br />
            <br />
            Minimalism, as a philosophy, challenges the notion that complexity
            is synonymous with sophistication. It prompts designers to question
            the necessity of each element, encouraging a meticulous evaluation
            of form and function. This shift in perspective extends to the user
            experience, where the removal of unnecessary clutter allows for a
            seamless and intuitive interaction. Beyond creating visually
            pleasing designs, the minimalist philosophy becomes a guiding force
            for designing experiences that are inherently user-centric.
          </p>

          <h3>Practical Tips for Mastering Minimalistic Design</h3>

          <p className="pl-5">
            The journey to mastering minimalistic design involves a practical
            exploration of principles and techniques that breathe life into the
            philosophy. It begins with an understanding of the psychology of
            color in minimalism, where the strategic use of a limited color
            palette contributes to the overall impact of the design. The
            intentional choice of typography plays a pivotal role, guiding the
            viewer through the visual narrative with clarity and purpose.
            <br />
            <br />
            Navigating the terrain of minimalistic design also involves a keen
            awareness of the power of negative space. Far from being empty, this
            space becomes a deliberate pause, allowing the audience to absorb
            and appreciate the essential elements of the composition. Striking
            the right balance between simplicity and sophistication is an art in
            itself, requiring a discerning eye and a commitment to the core
            principles of minimalism.
            <br />
            <br />
            Practical tips extend beyond the theoretical, delving into the
            day-to-day decisions that shape a minimalist design. From the
            selection of imagery to the judicious use of graphic elements, each
            choice contributes to the overall impact. Mastery in minimalistic
            design is not merely about adherence to a set of rules; it's about
            developing an intuition that guides the creative process, ensuring
            that every design decision serves a purpose and contributes to the
            cohesive whole.
          </p>
        </div>

        <div className="lg:col-span-3 space-y-7 lg:sticky lg:top-10 lg:self-start">
          <div className="rounded-2xl bg-dark-sec p-5 space-y-5">
            {shareDetails.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center gap-3 lg:flex-wrap xl:flex-nowrap"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={item.icon}
                    width={50}
                    height={50}
                    alt={item.title}
                  />
                </div>

                <div className="bg-[#1F1F1F] rounded-lg p-2 w-full flex justify-between flex-wrap xl:flex-nowrap items-center">
                  <p className="uppercase font-(family-name:--font-roboto-mono)">
                    {item.title}
                  </p>
                  <p className="uppercase font-(family-name:--font-roboto-mono) text-sm!">
                    {item.value} <span className="text-[#81807E]">| users</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-dark-sec p-5 space-y-5">
            <div className="flex items-center lg:flex-col lg:text-center xl:flex-row xl:text-left gap-5">
              <Image
                src="/blogs/wade.png"
                width={100}
                height={100}
                alt="wade"
                className="rounded-full"
              />

              <div>
                <h4>Wade Warren</h4>
                <p>Art Director</p>
              </div>
            </div>

            <p>
              Crafting visual narratives that captivate and inspire, weaving
              creativity into every chapter of the design journey.
            </p>

            <Link
              href="#"
              className="rounded-2xl bg-[#1F1F1F] p-2 flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/twitter-2.svg"
                  width={40}
                  height={40}
                  alt="twitter"
                />

                <p>@wadewarren</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-2 border-[#1F1F1F] p-4 rounded-2xl space-y-5">
        <Heading title="Related Blogs" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.slice(1).map((blog, index) => (
            <BlogCard
              cover={blog.cover}
              title={blog.title}
              desc={blog.desc}
              path="/blog/test"
              key={index}
            />
          ))}
        </div>
      </section>

      <Testimonial />

      <Faq />
    </main>
  );
};

export default Page;
