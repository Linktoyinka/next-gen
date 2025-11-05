import React from "react";
import Button from "../ui/button";

const Cta = () => {
  return (
    <section className="rounded-3xl bg-orange-main p-7 md:p-14 flex flex-col lg:flex-row justify-between gap-10 items-end">
      <div className="space-y-5">
        <h2 className="text-dark-main!">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-dark-main! max-w-4xl">
          Take the first step towards digital success with NexGen by your side.
          Our team of experts is eager to craft tailored solutions that drive
          growth for your business.
        </p>
      </div>

      <div className="w-full lg:w-3/12">
        <Button
          href="#"
          value="Get in Touch"
          type="outlined"
          className="w-full lg:w-fit"
        />
      </div>
    </section>
  );
};

export default Cta;
