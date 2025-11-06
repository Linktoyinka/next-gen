"use client"
import React, { useState } from "react";
import Heading from "@/components/ui/heading";
import FaqForm from "../forms/faqForm";
import { TiMinus, TiPlus } from "react-icons/ti";
import { faqData } from "@/lib/data";


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="space-y-5">
      <Heading title="Frequently Asked Questions" />

      <div className="grid lg:grid-cols-5 gap-5 items-start">
        <div className="lg:col-span-3 space-y-5">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#1A1A1A] p-5 md:p-8 rounded-xl lg:col-span-2 flex justify-between gap-7"
            >
              <div className="space-y-4 w-full">
                <h4>{faq.question}</h4>
                                
                {openIndex === index && (
                  <p  className="pt-4 border-t border-[#262626]">{faq.answer}</p>
                )}
              </div>

              <button
                onClick={() => toggleFaq(index)}
                className="space-y-4 aspect-square w-10 h-10 grid place-content-center text-2xl border rounded-full bg-[#1F1F1F] p-2 text-[#E7BEB1] hover:bg-[#262626] transition-colors"
              >
                {openIndex === index ? <TiMinus /> : <TiPlus />}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-[#1A1A1A] p-5 md:p-8 rounded-xl lg:col-span-2 space-y-6">
          <h4>Ask your question</h4>

          <hr className="border-[#262626]" />

          <FaqForm />
        </div>
      </div>
    </section>
  );
};

export default Faq;