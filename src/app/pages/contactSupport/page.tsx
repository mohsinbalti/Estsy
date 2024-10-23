"use client";
import React from "react";
import HeroElipse from "../../assets/images/hero-elipse.svg";
import HeroGrid from "../../assets/images/hero-grid.svg";
import Image from "next/image";

const ContactSupport = () => {
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
          <div className="hero-content max-w-7xl mx-auto text-center relative z-40">
            <h1
              data-aos="fade-up"
              className="text-3xl lg:text-5xl leading-tight text-white font-normal mb-4 lg:mb-8"
            >
              Contact Support
            </h1>
            <p className="max-w-6xl mx-auto mb-8 lg:mb-14">
              Need help? Our support team is here htmlFor you! Whether you have
              questions, need assistance, or require further information, feel
              free to reach out. We&apos;re committed to providing quick and
              effective solutions to ensure a seamless experience. Get in touch
              with us anytime, and we&apos;ll be happy to assist.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-area pb-10 lg:pb-14">
        <div className="container">
          <div className="relative p-6 lg:p-10">
            <div className="howstepWrapper  bordered border-gradient !absolute right-0 bottom-0 top-0 left-0 opacity-70"></div>
            <div className="relative z-20 max-w-7xl mx-auto">
              <h2 className="text-2xl lg:text-4xl	text-white font-bold mb-8">
                Submit a request
              </h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-6">
                    <label className="block text-gray-600 mb-2" htmlFor="#">
                      Your Name
                    </label>
                    <input
                      className="w-full bg-[rgba(56,56,56,0.3)] text-white placeholder:text-state-300 text-sm lg:text-2xl border border-white rounded-2xl p-4 lg:p-6 focus:outline-0"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="md:col-span-6">
                    <label className="block text-gray-600 mb-2" htmlFor="#">
                      Your Email Address
                    </label>
                    <input
                      className="w-full bg-[rgba(56,56,56,0.3)] text-white placeholder:text-state-300 text-sm lg:text-2xl border border-white rounded-2xl p-4 lg:p-6 focus:outline-0"
                      type="text"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="md:col-span-12">
                    <label className="block text-gray-600 mb-2" htmlFor="#">
                      Description
                    </label>
                    <textarea
                      className="w-full bg-[rgba(56,56,56,0.3)] text-white placeholder:text-state-300 text-sm lg:text-2xl border border-white rounded-2xl p-4 lg:p-6 focus:outline-0"
                      placeholder="Please enter the details of your request. A member of our support staff will respond as soon as possible."
                    ></textarea>
                  </div>
                  <div className="md:col-span-12">
                    <div className="file-upload w-full relative">
                      <button className="upload-text bg-[rgba(56,56,56,0.3)] rounded-2xl p-6 lg:p-8">
                        <span className="text-green-800">Add files</span> or
                        drop files here
                      </button>
                      <input
                        className="upload-input"
                        type="file"
                        name="myfile"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-12">
                    <button className="block w-full bg-gradient border border-white !rounded-2xl text-center text-gray-800 py-3 xl:py-5 px-8">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSupport;
