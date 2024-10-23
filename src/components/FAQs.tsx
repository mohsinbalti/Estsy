"use client";
import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "What is Cryptocurrency Exchange?",
      answer: `Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy text 
              ever since the 1500s, when an unknown printer took a galley of 
              type and scrambled it to make a type specimen book. It has 
              survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged.`,
    },
    {
      question: "What Products does Extsy Provide?",
      answer: `Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy text 
              ever since the 1500s, when an unknown printer took a galley of 
              type and scrambled it to make a type specimen book.`,
    },
    {
      question: "How I can Swap Bitcoin to Ethereum?",
      answer: `Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy text 
              ever since the 1500s.`,
    },
    {
      question: "How to Trade on Extsy?",
      answer: `Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy text 
              ever since the 1500s.`,
    },
    {
      question: "What are the benefits of Extsy Pro?",
      answer: `Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy text 
              ever since the 1500s.`,
    },
  ];

  return (
    <section className="faq-area pb-20 lg:pb-34 bg-[#161414]">
      <div className="container flex justify-between items-start w-full flex-col lg:flex-row  lg:py-[100px] ">
        <div className="text-white font-metropolis text-[40px] lg:text-[70px] font-bold leading-[120%]">
          Frequently Asked{" "}
          <span className="text-gradient font-bold harmonyos-sans-bold">
            Questions
          </span>
          <p className="text-[#FAFAFA] font-metropolis text-[18px] font-normal leading-[120%] mt-7">
            Get the information you need to make the most of our platform.
          </p>
        </div>

        <div className="accordion max-w-7xl mx-auto w-full">
          <div className=" rounded-[16px] p-[24px] flex flex-col ">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`rounded-[16px] bg-[#221F1F] backdrop-blur-[6px] accordion-item mb-6 ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div
                  className={`accordion-header cursor-pointer ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h2
                    className={`text-md lg:text-xl ${
                      activeIndex === index
                        ? "bg-gradient-to-r from-[#FEF9CC] via-[#F6DBD4] to-[#F0C2DB] text-transparent bg-clip-text"
                        : "text-white"
                    }   font-normal text-[18px]`}
                  >
                    {item.question}
                  </h2>
                </div>

                <div
                  className={`accordion-body ${
                    activeIndex === index ? "block" : "hidden"
                  }`}
                >
                  <p className="text-[#FAFAFA]">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
