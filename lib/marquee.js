import React from "react";
import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";

const keywords = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Frontend Engineering",
  "Backend Engineering",
  "Fullstack Projects",
  "API Integration",
  "Responsive Design",
  "Cross-Platform Apps",
  "E-commerce Solutions",
  "Progressive Web Apps",
  "Cloud Deployment",
  "Database Management",
  "Real-Time Applications",
  "Version Control",
  "Code Optimization",
  "App Prototyping",
  "Interactive Dashboards",
  "Performance Monitoring",
  "Custom Software Solutions",
];


const MarqueeTree = () => {
  return (
    <div className="relative overflow-hidden! bg-dark-main rounded-lg max-w-auto">
      <div
        className=" py-2 relative"
      >
        <Marquee direction="left" speed={100} delay={5} className="mx-auto">
          {keywords.map((word, index) => (
            <div key={index} className="flex items-center ml-5 gap-5">
              <GoDotFill className="text-orange-main text-xl" />
              <p className="text-[#676665]">{word}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeTree;
