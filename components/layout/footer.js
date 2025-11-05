import React from "react";
import Cta from "./cta";
import MarqueeTree from "@/lib/marquee";
import { footerKeywords, socialLinks, footerLinks } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import NewsLetter from "../forms/newsLetter";

const Footer = () => {
  return (
    <div className="space-y-4 container pt-20 pb-10">
      <Cta />

      <MarqueeTree keywords={[...Array(10)].flatMap(() => footerKeywords)} />

      <footer className="grid xl:grid-cols-3 gap-5">
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-5">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="bg-[#1A1A1A] p-4 rounded-xl space-y-14"
              target="_blank"
            >
              <div className="flex justify-between items-center">
                <Image src={link.icon} alt={link.name} width={50} height={50} />
                <span className="border rounded-full p-2 bg-dark-main/50 text-[#E7BEB1]">
                  <GoArrowUpRight />
                </span>
              </div>

              <div className="space-y-3">
                <h4>{link.name}</h4>
                <p>{link.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="xl:col-span-2 lg:grid lg:grid-rows-2 space-y-5 lg:space-y-0 gap-5">
          <div className="bg-[#1A1A1A] p-5 lg:p-8 rounded-xl">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-4">
              {footerLinks.map((linkGroup, index) => (
                <div key={index} className="space-y-6">
                  <h4 className="capitalize! font-(family-name:--font-roboto-mono)">{linkGroup.title}</h4>
                  <ul className="space-y-3">
                    {linkGroup.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href={link.href} className="text-[#81807E]">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          <div className="space-y-5">

            <div className="bg-[#1A1A1A] p-5 lg:p-8 rounded-xl grid md:grid-cols-2 gap-5 items-center">
              <div>
                <p className="text-lg text-[#676665]! font-(family-name:--font-roboto-mono) uppercase mb-3">Newsletter</p>
                <h4>Subscribe to our newsletter</h4>
              </div>

              <NewsLetter />

            </div>

            <div className="bg-[#1A1A1A] p-5 lg:p-8 rounded-xl flex justify-between items-center flex-col md:flex-row gap-4 text-center md:text-left">
              <p>© 2024 Estatein. All rights reserved.</p>

              <div className="flex gap-5">
                <Link href="#" className="text-[#F9EFEC] font-normal">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-[#F9EFEC] font-normal">
                  Terms of Service
                </Link>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
