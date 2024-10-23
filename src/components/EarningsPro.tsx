"use client";
import React from "react";
import Image from "next/image";

// Importing all images for the sections
import ExtsyProPro from "../app/assets/images/safeguard.svg";
import VirtualCard1 from "../app/assets/images/virtual-card1.svg";
import VirtualCard2 from "../app/assets/images/virtual-card2.svg";
import VirtualCard3 from "../app/assets/images/virtual-card3.svg";
import VirtualCard4 from "../app/assets/images/virtual-card4.svg";
// import ETHCryptoIcon from '../app/assets/images/eth-crypto-icon.svg';
// import AndroidArrowDown from "../app/assets/images/android-arrow-down.svg";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
// import WalletGraph from '../app/assets/images/wallet-graph.svg';
import MobileGraph from "../app/assets/images/mobile-graph.svg";

import Link from "next/link";

const content = [
  {
    title: (
      <h4 className="text-3xl lg:text-5xl mb-4 lg:mb-6 pt-52">
        <span className="text-gradient font-bold harmonyos-sans-bold">
          Safeguard
        </span>{" "}
        Your Funds from Financial Crimes
      </h4>
    ),
    description: (
      <>
        <p className="mb-3 text-extsy">
          Stay protected with EXTSY’s advanced AML service. Screen suspicious
          wallets for potential illegal activity, helping to secure your assets
          from fraud and scams.
        </p>
        {/* <ul className="max-w-2xl list-square ps-5 mb-6 text-extsy">
          <li>Receive exclusive cashback on every transaction</li>
          <li>Enjoy unlimited P2P trading</li>
          <li>Experience crypto spot trading</li>
          <li>
            Unlock virtual cards and futures trading by upgrading your account
          </li>
        </ul> */}
        <Link
          href="/pages/extsyPro"
          className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 px-8 lg:px-12 transition mb-20 "
        >
          Register Now
        </Link>{" "}
      </>
    ),
    content: (
      <div className="h-full flex items-center justify-center text-white">
        <Image src={ExtsyProPro} alt="Extsy Pro" />
      </div>
    ),
  },

  {
    title: (
      <h4 className="text-3xl lg:text-5xl mb-4 lg:mb-6">
        Revolutionize your trading with
        <span className="text-gradient font-bold harmonyos-sans-bold ">
          {" "}
          Extsy
        </span>
      </h4>
    ),
    description: (
      <>
        {" "}
        <p className="mb-6 text-extsy">
          Sign up for a free account to unlock exclusive benefits and maximize
          your financial potential. Enjoy features that enhance your trading
          experience and optimize returns, all while keeping your funds secure
          and fully under your control.
        </p>
        <Link
          href="trading-page.html"
          className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 px-8 lg:px-12 transition mb-20"
        >
          Learn More
        </Link>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image src={MobileGraph} alt="Extsy Pro" />
      </div>
    ),
  },
  {
    title: (
      <h4 className="text-3xl lg:text-5xl mb-4 lg:mb-6">
        Experience seamless spending with our
        <span className="text-gradient font-bold harmonyos-sans-bold ">
          {" "}
          virtual card
        </span>
      </h4>
    ),
    description: (
      <>
        <p className="mb-3 text-extsy">
          Get your virtual card instantly without any hassle. No need to wait
          for a physical card – simply activate it and start using it for your
          transactions right away.
        </p>
        <ul className="max-w-2xl list-disc ps-5 mb-6 text-extsy">
          <li>Quick and transparent transactions.</li>
          <li>Support for 30+ blockchains for smooth and efficient swaps.</li>
          <li>Hassle-free withdrawals with no extra charges.</li>
          <li>Top-tier security for all your transactions.</li>
        </ul>
        <Link
          href="/pages/virtualCard"
          className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 px-8 lg:px-12 transition mb-20"
        >
          Get Card
        </Link>{" "}
      </>
    ),
    content: (
      <div
        style={{ borderRadius: "37px" }}
        className="about-image bg-[#221F1F] h-[45rem] rounded-3xl mt-6 md:mt-0"
      >
        <ul className="virtual-card min-h-96 flex justify-center items-center relative mb-28 lg:mb-0">
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
    ),
  },
];

export function EarningsPro() {
  return (
    <div className="h-screen flex items-center justify-center  sticky m-0 ">
      <div className="px-10 ">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}

export default EarningsPro;
