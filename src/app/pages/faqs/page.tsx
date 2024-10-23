"use client";
import Image from "next/image";
import React, { useState } from "react";
import HeroElipse from "../../assets/images/hero-elipse.svg";
import HeroGrid from "../../assets/images/hero-grid.svg";

const FAQs = () => {
  const [activeAboutIndex, setActiveAboutIndex] = useState<number | null>(0);
  const [activeCryptoIndex, setActiveCryptoIndex] = useState<number | null>(0);

  const toggleAboutAccordion = (index: number) => {
    setActiveAboutIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const toggleCryptoAccordion = (index: number) => {
    setActiveCryptoIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <section className="hero-area relative pt-24 lg:pt-56 pb-20 lg:pb-24">
        <div className="hidden lg:block hero-elipse absolute left-0 top-0">
          <Image src={HeroElipse} alt="" />
        </div>
        <div className="hero-grid absolute left-0 top-0">
          <Image src={HeroGrid} alt="" />
        </div>

        <div className="container">
          <div className="hero-content max-w-7xl mx-auto text-center relative xl:px-10 z-40">
            <h1
              data-aos="fade-up"
              className="text-3xl lg:text-5xl leading-tight text-white font-normal mb-4 lg:mb-8"
            >
              Frequently Asked Questions
            </h1>
            <p className="max-w-6xl mx-auto mb-8 lg:mb-14">
              Got questions? We’ve got answers! Our comprehensive FAQ section is
              here to help you find the information you need. Whether you’re
              curious about our services, features, or need help with your
              account, explore our FAQs for quick and clear solutions. If you
              can’t find what you’re looking for, feel free to reach out to our
              support team for further assistance.
            </p>
          </div>
        </div>
      </section>

      <section className="faq-area pb-20 lg:pb-44">
        <div className="container">
          <div className="relative lg:p-10">
            <div className="accordion-wrapper bordered border-gradient !absolute right-0 bottom-0 top-0 left-0 opacity-70"></div>
            <div className="relative z-20 max-w-7xl mx-auto">
              <h2 className="text-2xl lg:text-4xl	text-white font-bold mb-8">
                About
              </h2>
              <div className="accordion max-w-7xl mx-auto mb-10">
                <div className="accordion-item bordered border-gradient mb-6">
                  <div
                    className={`accordion-header ${
                      activeAboutIndex === 0 ? "active" : ""
                    }`}
                    onClick={() => toggleAboutAccordion(0)}
                  >
                    <h2 className="text-xl lg:text-2xl text-white font-bold">
                      What is Extsy?
                    </h2>
                  </div>
                  <div
                    className={`accordion-body ${
                      activeAboutIndex === 0 ? "block" : "hidden"
                    }`}
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
                <div className="accordion-item bordered border-gradient mb-6">
                  <div
                    className={`accordion-header ${
                      activeAboutIndex === 1 ? "active" : ""
                    }`}
                    onClick={() => toggleAboutAccordion(1)}
                  >
                    <h2 className="text-xl lg:text-2xl text-white font-bold">
                      How Extsy work?
                    </h2>
                  </div>
                  <div
                    className={`accordion-body ${
                      activeAboutIndex === 1 ? "block" : "hidden"
                    }`}
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
                <div className="accordion-item bordered border-gradient mb-6">
                  <div
                    className={`accordion-header ${
                      activeAboutIndex === 2 ? "active" : ""
                    }`}
                    onClick={() => toggleAboutAccordion(2)}
                  >
                    <h2 className="text-xl lg:text-2xl text-white font-bold">
                      Why trust us?
                    </h2>
                  </div>
                  <div
                    className={`accordion-body ${
                      activeAboutIndex === 2 ? "block" : "hidden"
                    }`}
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl lg:text-4xl	text-white font-bold mb-8">
                Cryptocurrency Exchange Process
              </h2>
              <div className="accordion max-w-7xl mx-auto">
                <div className="accordion-item bordered border-gradient mb-6">
                  <div
                    className={`accordion-header ${
                      activeCryptoIndex === 0 ? "active" : ""
                    }`}
                    onClick={() => toggleCryptoAccordion(0)}
                  >
                    <h2 className="text-xl lg:text-2xl text-white font-bold">
                      How fast will my transaction be processed?
                    </h2>
                  </div>
                  <div
                    className={`accordion-body ${
                      activeCryptoIndex === 0 ? "block" : "hidden"
                    }`}
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
                <div className="accordion-item bordered border-gradient mb-6">
                  <div
                    className={`accordion-header ${
                      activeCryptoIndex === 1 ? "active" : ""
                    }`}
                    onClick={() => toggleCryptoAccordion(1)}
                  >
                    <h2 className="text-xl lg:text-2xl text-white font-bold">
                      What is cryptocurrency wallet address?
                    </h2>
                  </div>
                  <div
                    className={`accordion-body ${
                      activeCryptoIndex === 1 ? "block" : "hidden"
                    }`}
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
                <div className="accordion-item bordered border-gradient mb-6">
                  <div
                    className={`accordion-header ${
                      activeCryptoIndex === 2 ? "active" : ""
                    }`}
                    onClick={() => toggleCryptoAccordion(2)}
                  >
                    <h2 className="text-xl lg:text-2xl text-white font-bold">
                      How do I get my cryptocurrency wallet address?
                    </h2>
                  </div>
                  <div
                    className={`accordion-body ${
                      activeCryptoIndex === 2 ? "block" : "hidden"
                    }`}
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
                <div className="accordion-item bordered border-gradient mb-6">
                  <div
                    className={`accordion-header ${
                      activeCryptoIndex === 3 ? "active" : ""
                    }`}
                    onClick={() => toggleCryptoAccordion(3)}
                  >
                    <h2 className="text-xl lg:text-2xl text-white font-bold">
                      What is a recipient wallet address?
                    </h2>
                  </div>
                  <div
                    className={`accordion-body ${
                      activeCryptoIndex === 3 ? "block" : "hidden"
                    }`}
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
                <div className="accordion-item bordered border-gradient mb-6">
                  <div
                    className={`accordion-header ${
                      activeCryptoIndex === 4 ? "active" : ""
                    }`}
                    onClick={() => toggleCryptoAccordion(4)}
                  >
                    <h2 className="text-xl lg:text-2xl text-white font-bold">
                      What is a transaction hash?
                    </h2>
                  </div>
                  <div
                    className={`accordion-body ${
                      activeCryptoIndex === 4 ? "block" : "hidden"
                    }`}
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
                <div className="accordion-item bordered border-gradient mb-6">
                  <div
                    className={`accordion-header ${
                      activeCryptoIndex === 5 ? "active" : ""
                    }`}
                    onClick={() => toggleCryptoAccordion(5)}
                  >
                    <h2 className="text-xl lg:text-2xl text-white font-bold">
                      How can I cancel a transaction?
                    </h2>
                  </div>
                  <div
                    className={`accordion-body ${
                      activeCryptoIndex === 5 ? "block" : "hidden"
                    }`}
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
