import Image from "next/image";
import React from "react";
import AboutGradientLeft from "../app/assets/images/about-gradint-left.svg";
import VirtualCard1 from "../app/assets/images/virtual-card1.svg";
import VirtualCard2 from "../app/assets/images/virtual-card2.svg";
import VirtualCard3 from "../app/assets/images/virtual-card3.svg";
import VirtualCard4 from "../app/assets/images/virtual-card4.svg";
import Link from "next/link";

const Spending = () => {
  return (
    <section className="about-area relative pb-20 lg:pb-34">
      <div className="hidden lg:block about-gradient absolute left-0 top-0">
        <Image src={AboutGradientLeft} alt="gradient" />
      </div>
      <div className="container">
        <div className="grid md:grid-cols-12 gap-4">
          <div className="md:col-span-6 md:order-2">
            <div className="about-content max-w-3xl relative z-20">
              <h4 className="text-3xl lg:text-5xl mb-4 lg:mb-6">
                Experience seamless spending with the
                <span className="text-gradient font-bold harmonyos-sans-bold ">
                  {" "}
                  Extsy Crypto Virtual Card
                </span>
              </h4>
              <p className="mb-3 text-extsy">
                Unlock the convenience of secure crypto transactions with our
                virtual card. Easily manage your finances and enjoy global
                accessibility, whether you&apos;re shopping online or traveling
                abroad.
              </p>
              <ul className="max-w-2xl list-square ps-5 mb-6 text-extsy">
                <li>Instant transactions</li>
                <li>Fund your card with crypto</li>
                <li>
                  Accepted worldwide, perfect for international transactions
                </li>
                <li>No hidden fees</li>
                <li>Multiple virtual cards available</li>
              </ul>
              <Link
                href="/pages/virtualCard"
                className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 px-8 lg:px-12 transition"
              >
                Get yours
              </Link>
            </div>
          </div>
          <div className="md:col-span-6 md:order-1">
            <div className="about-image mt-6 md:mt-0">
              <ul className="virtual-card min-h-96 flex justify-center relative mb-28 lg:mb-0">
                <li className="absolute z-50 transition-all duration-500">
                  <Image src={VirtualCard1} alt="virtualCard" />
                </li>
                <li className="absolute z-40 transition-all duration-500">
                  <Image src={VirtualCard2} alt="virtualCard" />
                </li>
                <li className="absolute z-30 transition-all duration-500">
                  <Image src={VirtualCard3} alt="virtualCard" />
                </li>
                <li className="absolute z-20 transition-all duration-500">
                  <Image src={VirtualCard4} alt="virtualCard" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spending;
