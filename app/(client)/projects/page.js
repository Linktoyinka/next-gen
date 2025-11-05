import Faq from "@/components/layout/faq";
import ProjectShowcase from "@/components/layout/projectShowcase";
import Testimonial from "@/components/layout/testimonial";
import Hero from "@/components/ui/hero-section/hero";
import React from "react";
import Heading from "@/components/ui/heading";
import SimpleCard from "@/components/ui/cards/simpleCard";
import { projectFeatures } from "@/lib/data";

export const metadata = {
  title: "Projects",
};

const Page = () => {
  return (
    <main className="container space-y-20">
      <Hero
        heading="Empowering Your Digital Vision"
        desc="At NexGen, we are committed to empowering your digital vision with innovative solutions tailored to your unique needs. Our team of skilled professionals, coupled with cutting-edge technologies, ensures that we deliver exceptional results that elevate your online presence."
        slider
      />

      <section className="border-2 border-[#1F1F1F] p-4 rounded-2xl space-y-5">
        <Heading title="Key Features of Our Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {projectFeatures.map((feature, index) => (
            <SimpleCard
              key={index}
              title={feature.title}
              desc={feature.desc}
              cover={feature.cover}
            />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <Heading title="Projects Showcase" />

        <ProjectShowcase />
      </section>

      <Testimonial />

      <Faq />
    </main>
  );
};

export default Page;
