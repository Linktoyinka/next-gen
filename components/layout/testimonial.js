import React from "react";
import Heading from "@/components/ui/heading";
import Image from "next/image";
import { testimonialData } from "@/lib/data";

const Testimonial = () => {
  return (
    <section className="border-2 border-[#1F1F1F] p-4 rounded-2xl space-y-5">
      <Heading title="Testimonials" />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonialData.map((data, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] rounded-lg space-y-7 flex flex-col justify-between"
          >
            <div className="p-5 space-y-7">
              <h4>{data.title}</h4>
              <p className="text-[#B3B3B2]!">{data.desc}</p>
            </div>

            <div className="flex lg:items-center gap-4 bg-[#1F1F1F] p-4 rounded-b-lg">
              <div>
                <Image
                  src={data.image}
                  alt={data.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div>
                <h5>{data.name}</h5>
                <p className="text-[#81807E]!">{data.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
