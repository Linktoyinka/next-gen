import ContactForm from "@/components/forms/contactForm";
import Faq from "@/components/layout/faq";
import Testimonial from "@/components/layout/testimonial";
import Hero from "@/components/ui/hero-section/hero";
import { contactInformations } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export const metadata = {
  title: "Contact us",
};

const Page = () => {
  return (
    <main className="container space-y-20">
      <Hero
        showMarquee
        showAchievement
        heading="Get in Touch with Us Today!"
        desc="At NexGen, we value your inquiries, feedback, and collaborations. Whether you are interested in our digital services, have questions about our projects, or want to explore potential partnerships, we encourage you to reach out to our dedicated team."
      />

      <section className="grid md:grid-cols-3 gap-5">
        <div className=" bg-dark-sec p-5 md:p-8 space-y-8 rounded-2xl">
          <h3>Contact Details</h3>

          <div className="space-y-7">
            {contactInformations.map((information, index) => (
              <div className="space-y-3">
                <p className="text-[#81807E]!">{information.title}</p>

                <div>
                  {information.path ? (
                    <Link
                      href={information.path}
                      target="_blank"
                      className="rounded-l-3xl text-white rounded-r-full bg-dark-main/50 p-3 font-(family-name:--font-roboto-mono) text-lg font-medium flex justify-between items-center gap-5"
                    >
                      {information.data}

                      <span className="border rounded-full p-2 bg-dark-main/50 text-[#E7BEB1]">
                        <GoArrowUpRight />
                      </span>
                    </Link>
                  ) : (
                    <div className="rounded-l-3xl text-white rounded-r-full bg-dark-main/50 p-3 font-(family-name:--font-roboto-mono) text-lg font-medium flex justify-between items-center gap-5">
                      {information.data}

                      <span className="border rounded-full p-2 bg-dark-main/50 text-[#E7BEB1]">
                        <GoArrowUpRight />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 bg-dark-sec p-5 md:p-8 space-y-8 rounded-2xl">
          <ContactForm />
        </div>
      </section>

      <Testimonial />

      <Faq />
    </main>
  );
};

export default Page;
