"use client"

import React, { useState } from "react";

const Faqaccordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (


    
    <div className="md:py-3 py-[14px]  px-3 text-black  rounded-[17px] bg-white">
      <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex ">
        <p className="order-last !text-start font-semibold paragraphs2  pl-3">{title}</p>
        
        <svg
          className="fill-yellow-500 shrink-0  mt-[2px]  "
          width="14"
          height="14"
          xmlns="https://www.w3.org/2000/svg"
        >
          <rect
            y="6"
            width="14"
            height="2"
            fill={accordionOpen ? "#F59E0B" : "#F59E0B"}
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="6"
            width="14"
            height="2"
            rx="1"
            fill={accordionOpen ? "#F59E0B" : "#F59E0B"}
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
        
      </button>
      <div
        className={`grid overflow-hidden  px-3 pl-5 transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden  paragraphs">{answer}</div>
      </div>
    </div>
  );
};

export default Faqaccordion;