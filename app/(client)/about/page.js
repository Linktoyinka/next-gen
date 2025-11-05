import Faq from "@/components/layout/faq";
import Testimonial from "@/components/layout/testimonial";
import Hero from "@/components/ui/hero-section/hero";
import React from "react";
import Heading from "@/components/ui/heading";
import SimpleCard from "@/components/ui/cards/simpleCard";
import { staffs, achievements, awards } from "@/lib/data";
import ProfileCard from "@/components/ui/cards/profileCard";
import AchievementCard from "@/components/ui/cards/achievementCard";

export const metadata = {
  title: "About us",
};

const Page = () => {
  return (
    <main className="container space-y-20">
      <Hero heading="Elevating Brands in the Digital Age" showAchievement />

      <section className="border-2 border-[#1F1F1F] p-4 rounded-2xl space-y-5">
        <Heading title="Meet the brilliant minds behind NexGen" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {staffs.map((staff, index) => (
            <ProfileCard
              key={index}
              name={staff.name}
              work={staff.work}
              picture={staff.picture}
              fb={staff.socials.facebook}
              twitter={staff.socials.twitter}
              linkedin={staff.socials.linkedin}
            />
          ))}
        </div>
      </section>

      <section className="rounded-2xl space-y-5">
        <Heading title="Our Achievements" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              date={achievement.date}
              desc={achievement.desc}
              title={achievement.title}
            />
          ))}
        </div>
      </section>

      <section className="border-2 border-[#1F1F1F] p-4 rounded-2xl space-y-5">
        <Heading title="Awards & Recognitions" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {awards.map((award, index) => (
            <SimpleCard
              key={index}
              title={award.title}
              desc={award.desc}
              cover={award.icon}
              date={award.date}
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
