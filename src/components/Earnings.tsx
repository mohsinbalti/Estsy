'use client';
import React from 'react';
import Image from 'next/image';

// Importing all images for the sections
import ExtsyProPro from '../app/assets/images/extsy-pro-pro.svg';
import VirtualCard1 from '../app/assets/images/virtual-card1.svg';
import VirtualCard2 from '../app/assets/images/virtual-card2.svg';
import VirtualCard3 from '../app/assets/images/virtual-card3.svg';
import VirtualCard4 from '../app/assets/images/virtual-card4.svg';
import ETHCryptoIcon from '../app/assets/images/eth-crypto-icon.svg';
// import AndroidArrowDown from "../app/assets/images/android-arrow-down.svg";
import { StickyScroll } from './ui/sticky-scroll-reveal';
import WalletGraph from '../app/assets/images/wallet-graph.svg';

import Link from 'next/link';

const content = [
  {
    title: (
      <h4 className="text-3xl lg:text-5xl mb-4 lg:mb-6 pt-52">
        Maximize your earnings with
        <span className="text-gradient font-bold harmonyos-sans-bold">
          {' '}
          EXTSY
        </span>
        <span className="text-amber-100 harmonyos-sans-bold"> PRO</span>
      </h4>
    ),
    description: (
      <>
        <p className="mb-3 text-extsy">
          Sign up for a free account to access a host of exclusive benefits and
          maximize your financial potential. Enjoy features designed to enhance
          your trading experience and optimize your returns, all while keeping
          your funds secure and under your control.
        </p>
        <ul className="max-w-2xl list-square ps-5 mb-6 text-extsy">
          <li>Receive exclusive cashback on every transaction</li>
          <li>Enjoy unlimited P2P trading</li>
          <li>Experience crypto spot trading</li>
          <li>
            Unlock virtual cards and futures trading by upgrading your account
          </li>
        </ul>
        <Link
          href="/pages/extsyPro"
          className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 px-8 lg:px-12 transition mb-20 "
        >
          Learn more
        </Link>{' '}
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image src={ExtsyProPro} alt="Extsy Pro" />
      </div>
    ),
  },
  {
    title: (
      <h4 className="text-3xl lg:text-5xl mb-4 lg:mb-6">
        Experience seamless spending with the
        <span className="text-gradient font-bold harmonyos-sans-bold ">
          {' '}
          Extsy Crypto Virtual Card
        </span>
      </h4>
    ),
    description: (
      <>
        <p className="mb-3 text-extsy">
          Unlock the convenience of secure crypto transactions with our virtual
          card. Easily manage your finances and enjoy global accessibility,
          whether you&apos;re shopping online or traveling abroad.
        </p>
        <ul className="max-w-2xl list-square ps-5 mb-6 text-extsy">
          <li>Instant transactions</li>
          <li>Fund your card with crypto</li>
          <li>Accepted worldwide, perfect for international transactions</li>
          <li>No hidden fees</li>
          <li>Multiple virtual cards available</li>
        </ul>
        <Link
          href="/pages/virtualCard"
          className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 px-8 lg:px-12 transition mb-20"
        >
          Get yours
        </Link>{' '}
      </>
    ),
    content: (
      <div
        style={{ borderRadius: '37px' }}
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
  {
    title: (
      <h4 className="text-3xl lg:text-5xl mb-4 lg:mb-6">
        Revolutionize your trading with
        <span className="text-gradient font-bold harmonyos-sans-bold ">
          {' '}
          EXTSY
        </span>
      </h4>
    ),
    description: (
      <>
        {' '}
        <p className="mb-6 text-extsy">
          Sign up for a free account to unlock a range of exclusive features.
          Enjoy tools designed to enhance your trading experience and optimize
          your returns, all while ensuring your portfolio remains secure and
          under your control.
        </p>
        <Link
          href="trading-page.html"
          className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 px-8 lg:px-12 transition mb-20"
        >
          Learn more
        </Link>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image src={WalletGraph} alt="Extsy Pro" />
      </div>
    ),
  },
  {
    title: (
      <h4 className="text-3xl lg:text-5xl mb-4 lg:mb-6">
        Discover Seamless
        <span className="text-gradient font-bold harmonyos-sans-bold">
          {' '}
          P2P Trading
        </span>
      </h4>
    ),
    description: (
      <>
        {' '}
        <p className="mb-3 text-extsy">
          Welcome to our Peer-to-Peer (P2P) trading platform, where you can
          connect directly with buyers and sellers for efficient and secure
          cryptocurrency transactions. Enjoy a trading experience that puts you
          in control with these key features
        </p>
        <ul className="max-w-2xl list-square ps-5 mb-6 text-extsy">
          <li>Global Access to Diverse Trading Opportunities</li>
          <li>Enjoy Lower Fees and Maximize Your Profits</li>
          <li>Secure Transactions with Escrow Protection</li>
        </ul>
        <Link
          href="/pages/p2p"
          className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 px-8 lg:px-12 transition mb-20"
        >
          Start now
        </Link>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image src={ETHCryptoIcon} alt="Extsy Pro" />
      </div>
    ),
  },
];

export function Earnings() {
  return (
    <div className="h-screen flex items-center justify-center  sticky m-0">
      <div className="px-10 ">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}

export default Earnings;
