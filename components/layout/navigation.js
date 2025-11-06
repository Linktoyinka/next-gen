"use client";

import { navLinks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";


const Navigation = () => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  const baseClasses =
    "text-base 2xl:text-lg font-medium px-4 2xl:px-6 py-3 rounded-lg transition-colors uppercase font-(family-name:--font-roboto-mono)";

  return (
    <header className="container mt-3! mb-10!">
      <div className="bg-dark-sec px-5 py-2 lg:px-5 lg:py-5 rounded-xl lg:rounded-2xl flex items-center justify-between">
        <Link href="/" className="w-fit">
          <Image src="/logo/main.svg" alt="next-gen" width={100} height={100} />
        </Link>

        <nav className="hidden lg:flex space-x-4">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            const isLast = index === navLinks.length - 1;

            if (isLast) {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${baseClasses} bg-orange-main text-dark-main`}
                >
                  {link.name}
                </Link>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`bg-dark-main hover:text-[#E7BEB1] ${baseClasses} ${
                  isActive ? "text-[#E7BEB1]" : "text-[#81807E]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-3xl bg-dark-main rounded-xl p-2 text-[#81807E]"
          >
            {isMobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden mt-4 bg-dark-sec p-5 rounded-3xl space-y-3">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            const isLast = index === navLinks.length - 1;

            if (isLast) {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${baseClasses} w-full block text-center bg-orange-main text-dark-main`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.name}
                </Link>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`w-full block text-center ${baseClasses} ${
                  isActive ? "text-[#E7BEB1]" : "text-[#81807E]"
                } bg-dark-main hover:text-[#E7BEB1]`}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navigation;
