"use client";

import FAQs from "@/components/FAQs";
import React, { useState } from "react";
import HeroElipse from "../../assets/images/hero-elipse.svg";
import HeroGrid from "../../assets/images/hero-grid.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import AngleWDown from "../../assets/images/angle-w-down.svg";
import AngleRight from "../../assets/images/angle-right.svg";
import CryptoCube from "../../assets/images/cryptocurrency-cube.svg";
import CryptoUp from "../../assets/images/cryptocurrency-up.svg";
import BaseCrypto from "../../assets/images/base-crypto-icon.svg";
import BtcCryptoIcon from "../../assets/images/btc-crypto-icon.svg";
import XRPCrypto from "../../assets/images/xrp-crypto-icon.svg";
import AvaxCrypto from "../../assets/images/avax-crypto-icon.svg";
import EthCrypto from "../../assets/images/eth-crypto-icon.svg";
import AdaCrypto from "../../assets/images/ada-crypto-icon.svg";
import BNBCrypto from "../../assets/images/bnb-crypto-icon.svg";
import SolCrypto from "../../assets/images/sol-crypto-icon.svg";
import SearchIcon from "../../assets/images/search-icon.svg";
import FlexibleApi from "../../assets/images/flexible-api.png";
import FlexibleApiRight from "../../assets/images/flexible-api-right.png";
import FlexibleMobileApi from "../../assets/images/flexible-mobile-api.png";
import FlexibleDeskApi from "../../assets/images/flexible-desk-api.png";
import DocsShape from "../../assets/images/docs-shape.png";
import SliderVertical from "../../assets/images/slider-vertical.svg";
import Docs from "../../assets/images/docs.png";
import SDK1 from "../../assets/images/sdk-icon1.png";
import SDK2 from "../../assets/images/sdk-icon2.png";
import SDK3 from "../../assets/images/sdk-icon3.png";
import SDK4 from "../../assets/images/sdk-icon4.png";
import SDK5 from "../../assets/images/sdk-icon5.png";
import SDK6 from "../../assets/images/sdk-icon6.png";
import SDK7 from "../../assets/images/sdk-icon7.png";
import SDK8 from "../../assets/images/sdk-icon8.png";
import DocumentImg from "../../assets/images/document.svg";
import SDKFeature from "../../assets/images/sdk-feature.png";
import ScrollImg from "../../assets/images/scroll.svg";
import P2PTrading1 from "../../assets/images/p2p-tranding-icon1.png";
import P2PTrading2 from "../../assets/images/p2p-tranding-icon2.png";
import P2PTrading3 from "../../assets/images/p2p-tranding-3.png";
import TetherCoin from "../../assets/images/tether-coin.png";
import Info from "../../assets/images/information-icon.svg";
import Code from "../../assets/images/code.svg";

import Image from "next/image";
import Link from "next/link";

const ApiBusiness = () => {
  const [baseDropActive, setBaseDropActive] = useState(false);
  const [cryptoDropActive, setCryptoDropActive] = useState(false);

  return (
    <div>
      <section className="hero-area relative pt-24 lg:pt-56 pb-20 lg:pb-44">
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
              className="text-3xl lg:text-5xl  leading-tight text-white font-normal mb-4 lg:mb-8"
            >
              Power Your <span className="text-gradient">Platform</span> with
              Our <span className="text-gradient">Solutions</span>
            </h1>
            <p className="max-w-3xl mx-auto mb-6 md:mb-8">
              Unlock the potential of your business with our all-in-one
              integration toolkit. Whether you’re looking htmlFor seamless API
              connections, customizable widgets, or developer-friendly SDKs,
              we’ve got you covered. Our solutions are designed to scale with
              your needs and deliver exceptional performance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Link
                className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-5 lg:px-12 transition"
                href=""
              >
                Become a partner{" "}
                <Image src={ArrowRight} alt="" className="h-4 lg:h-5 md:ms-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-area pb-20 lg:pb-44">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center relative z-10 mb-8 lg:mb-16">
            <h1 className="text-2xl xl:text-4xl leading-tight text-white font-semibold sm:font-bold">
              Get the best experience with{" "}
              <span className="text-gradient font-bold">our solutions</span>
            </h1>
          </div>
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-6">
              <div className="product-feature-item w-full h-full relative z-20 bg-gray-200 rounded-3xl p-6 !pb-4 lg:p-10">
                <div className="product-feature-logo bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                  <Image src={SliderVertical} alt="" className="h-6 lg:h-10" />
                </div>
                <div className="product-feature-content max-w-5xl">
                  <h4 className="text-gray-700 text-2xl font-bold mb-4">
                    Swap Widget which can be used everywhere
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Deploy feature-rich widgets that are easy to embed and
                    enhance your platform’s functionality, giving your users
                    instant access to crypto swaps while you earn a share from
                    every transaction.
                  </p>
                  <ul className="list-square text-gray-600 ps-5 mb-6">
                    <li>
                      <strong>Quick Setup:</strong> Get started in minutes with
                      plug-and-play solutions.
                    </li>
                    <li>
                      <strong>Highly Customizable:</strong> Tailor the look and
                      functionality to match your brand’s design.
                    </li>
                    <li>
                      <strong>Responsive and Lightweight:</strong> Optimized
                      htmlFor all devices without compromising performance.
                    </li>
                  </ul>
                  <Link
                    className="inline-flex items-center gap-2 bg-gradient rounded-full text-gray-700 py-3 lg:py-3.5 px-5 lg:px-12 transition"
                    href=""
                  >
                    Register now{" "}
                    <Image
                      src={AngleRight}
                      alt=""
                      className="h-4 lg:h-5 md:ms-4"
                    />
                  </Link>
                </div>
                <div className="product-feature-image mt-6 flex justify-center">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="cryptocurrency-platform bordered border-gradient p-4 xl:p-5"
                  >
                    <div className="relative mb-2 lg:mb-6">
                      <div className="absolute left-0 right-0 bottom-5 md:bottom-0 top-0 m-auto w-8 h-8 z-30 xl:w-10 xl:h-10">
                        <Image src={CryptoCube} alt="" className="w-full" />
                      </div>
                      <div className="grid 2xl:grid-cols-12 gap-2 lg:gap-4">
                        <div className="2xl:col-span-6">
                          <div className="flex items-center justify-between bg-[rgba(56,56,56,0.3)] border border-white rounded-3xl py-6 xl:py-7 px-4 xl:px-8">
                            <div>
                              <input
                                value="0.5"
                                className="block w-24 xl:w-32 bg-transparent text-lg xl:text-xl text-white font-bold border-b border-white/35 focus:outline-0 pb-1 mb-2"
                              />
                              <div className="flex items-center gap-2">
                                <Image src={CryptoUp} alt="" className="w-6" />
                                <input
                                  value="+ 3,390 (5.94%)"
                                  className="bg-transparent border-0 text-[8px] flex items-center gap-2 focus:outline-0"
                                />
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <ul
                                className="tabs-dropdown"
                                onClick={() =>
                                  setBaseDropActive(!baseDropActive)
                                }
                              >
                                <li
                                  className={`dropdown ${
                                    baseDropActive ? "active" : ""
                                  }`}
                                >
                                  <button className="dropdown-toggler">
                                    <h4 className="flex items-center justify-end gap-2 text-md xl:text-lg font-bold">
                                      <Image
                                        src={AngleWDown}
                                        alt=""
                                        className="w-3"
                                      />
                                      BTC
                                    </h4>
                                    <p className="text-[8px]">Bitcoin</p>
                                  </button>
                                  <div className="dropdown-menu !w-56 lg:!w-96">
                                    <ul>
                                      <li className="flex items-center justify-between">
                                        <h5 className="text-base font-medium px-3 mb-3">
                                          Coin
                                        </h5>
                                        <h5 className="text-base font-medium px-3 mb-3">
                                          Price
                                        </h5>
                                      </li>
                                      <li>
                                        <div className="relative px-3 mb-2">
                                          <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                                            <Image src={SearchIcon} alt="" />
                                          </div>
                                          <input
                                            type="search"
                                            name="search"
                                            className="block w-full text-sm text-gray-600 border border-gray-50 rounded-full bg-gray-400 placeholder-gray-500 focus:outline-0 py-1 px-8"
                                            placeholder="Search Raffle"
                                          />
                                        </div>
                                      </li>

                                      <li>
                                        <Link
                                          className="!flex items-center justify-between text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                          href="#"
                                        >
                                          <p className="flex items-center gap-2">
                                            <Image
                                              src={BaseCrypto}
                                              alt=""
                                              className="w-6"
                                            />
                                            USDT
                                          </p>
                                          <p>$99.90</p>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="!flex items-center justify-between text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                          href="#"
                                        >
                                          <p className="flex items-center gap-2">
                                            <Image
                                              src={BNBCrypto}
                                              alt=""
                                              className="w-6"
                                            />
                                            BNB
                                          </p>
                                          <p>$99.90</p>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="!flex items-center justify-between text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                          href="#"
                                        >
                                          <p className="flex items-center gap-2">
                                            <Image
                                              src={SolCrypto}
                                              alt=""
                                              className="w-6"
                                            />
                                            SOL
                                          </p>
                                          <p>$56,623.54</p>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="!flex items-center justify-between text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                          href="#"
                                        >
                                          <p className="flex items-center gap-2">
                                            <Image
                                              src={EthCrypto}
                                              alt=""
                                              className="w-6"
                                            />
                                            ETH
                                          </p>
                                          <p>$99.90</p>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="!flex items-center justify-between text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                          href="#"
                                        >
                                          <p className="flex items-center gap-2">
                                            <Image
                                              src={AvaxCrypto}
                                              alt=""
                                              className="w-6"
                                            />
                                            AVAX
                                          </p>
                                          <p>$56,623.54</p>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="!flex items-center justify-between text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                          href="#"
                                        >
                                          <p className="flex items-center gap-2">
                                            <Image
                                              src={XRPCrypto}
                                              alt=""
                                              className="w-6"
                                            />
                                            XRP
                                          </p>
                                          <p>$56,623.54</p>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="!flex items-center justify-between text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                          href="#"
                                        >
                                          <p className="flex items-center gap-2">
                                            <Image
                                              src={AdaCrypto}
                                              alt=""
                                              className="w-6"
                                            />
                                            ADA
                                          </p>
                                          <p>$56,623.54</p>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>

                              <div className="w-8 h-8 xl:w-10 xl:h-10">
                                <Image
                                  src={BtcCryptoIcon}
                                  alt=""
                                  className="w-full"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="2xl:col-span-6">
                          <div className="bg-[rgba(56,56,56,0.3)] border border-white rounded-3xl py-6 xl:py-7 px-4 xl:px-8">
                            <div className="flex items-center justify-between">
                              <div>
                                <input
                                  value="11.2490708"
                                  className="block w-24 xl:w-32 bg-transparent text-lg xl:text-xl text-white font-bold border-b border-white/35 focus:outline-0 pb-1 mb-2"
                                />
                                <div className="flex items-center gap-2">
                                  <Image
                                    src={CryptoUp}
                                    alt=""
                                    className="w-6"
                                  />
                                  <input
                                    value="+ 3,390 (5.94%)"
                                    className="bg-transparent border-0 text-[8px] flex items-center gap-2 focus:outline-0"
                                  />
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <ul
                                  className="tabs-dropdown"
                                  onClick={() =>
                                    setCryptoDropActive(!cryptoDropActive)
                                  }
                                >
                                  <li
                                    className={`dropdown ${
                                      cryptoDropActive ? "active" : ""
                                    }`}
                                  >
                                    <button className="dropdown-toggler">
                                      <h4 className="flex items-center justify-end gap-2 text-lg xl:text-xl font-bold">
                                        <Image
                                          src={AngleWDown}
                                          alt=""
                                          className="w-3"
                                        />
                                        ETH
                                      </h4>
                                      <p className="text-[8px]">Ethereum</p>
                                    </button>
                                    <div className="dropdown-menu !w-56 lg:!w-96">
                                      <ul>
                                        <li className="flex items-center justify-between">
                                          <h5 className="text-base font-medium px-3 mb-3">
                                            Coin
                                          </h5>
                                          <h5 className="text-base font-medium px-3 mb-3">
                                            Price
                                          </h5>
                                        </li>
                                        <li>
                                          <div className="relative px-3 mb-2">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                                              <Image src={SearchIcon} alt="" />
                                            </div>
                                            <input
                                              type="search"
                                              name="search"
                                              className="block w-full text-sm text-gray-600 border border-gray-50 rounded-full bg-gray-400 placeholder-gray-500 focus:outline-0 py-1 px-8"
                                              placeholder="Search Raffle"
                                            />
                                          </div>
                                        </li>

                                        <li>
                                          <Link
                                            className="!flex items-center justify-between text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                            href="#"
                                          >
                                            <p className="flex items-center gap-2">
                                              <Image
                                                src={BaseCrypto}
                                                alt=""
                                                className="w-6"
                                              />
                                              USDT
                                            </p>
                                            <p>$99.90</p>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            className="!flex items-center justify-between text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                            href="#"
                                          >
                                            <p className="flex items-center gap-2">
                                              <Image
                                                src={BNBCrypto}
                                                alt=""
                                                className="w-6"
                                              />
                                              BNB
                                            </p>
                                            <p>$99.90</p>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            className="!flex items-center justify-between text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                            href="#"
                                          >
                                            <p className="flex items-center gap-2">
                                              <Image
                                                src={SolCrypto}
                                                alt=""
                                                className="w-6"
                                              />
                                              SOL
                                            </p>
                                            <p>$56,623.54</p>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            className="!flex items-center justify-between text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                            href="#"
                                          >
                                            <p className="flex items-center gap-2">
                                              <Image
                                                src={EthCrypto}
                                                alt=""
                                                className="w-6"
                                              />
                                              ETH
                                            </p>
                                            <p>$99.90</p>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            className="!flex items-center justify-between text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                            href="#"
                                          >
                                            <p className="flex items-center gap-2">
                                              <Image
                                                src={AvaxCrypto}
                                                alt=""
                                                className="w-6"
                                              />
                                              AVAX
                                            </p>
                                            <p>$56,623.54</p>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            className="!flex items-center justify-between text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                            href="#"
                                          >
                                            <p className="flex items-center gap-2">
                                              <Image
                                                src={XRPCrypto}
                                                alt=""
                                                className="w-6"
                                              />
                                              XRP
                                            </p>
                                            <p>$56,623.54</p>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            className="!flex items-center justify-between text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                            href="#"
                                          >
                                            <p className="flex items-center gap-2">
                                              <Image
                                                src={AdaCrypto}
                                                alt=""
                                                className="w-6"
                                              />
                                              ADA
                                            </p>
                                            <p>$56,623.54</p>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>

                                <div className="w-8 h-8 xl:w-10 xl:h-10">
                                  <Image
                                    src={EthCrypto}
                                    alt=""
                                    className="w-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inputSuccess flex items-center relative z-30 gap-4 bg-[rgba(56,56,56,0.3)] border border-white rounded-2xl lg:rounded-3xl py-4 xl:py-4 px-4 xl:px-8 mb-2 xl:mb-4">
                      <input
                        className="block bg-transparent w-full text-base lg:text-base text-white placeholder-gray-600 focus:outline-0 lg:py-2"
                        placeholder="Recipient Wallet Address"
                        type="text"
                      />
                      <button className="document-btn w-5 h-5 lg:w-8 lg:h-8 absolute top-0 bottom-0 m-auto right-4 lg:right-6"></button>
                    </div>
                    <div className="xl:flex items-center justify-between relative z-30 gap-4 px-4 lg:px-8 mb-6 lg:mb-8">
                      <ul className="flex items-center justify-center gap-4">
                        <li className="mb-1">
                          <Link
                            href="#"
                            className="info_tooltips flex items-center gap-2 underline text-[8px] xl:text-[8px]"
                            title="Network fees and all exchange charges are built into the rate. No hidden costs, guaranteed."
                          >
                            No hidden fees{" "}
                            <Image src={Info} alt="" className="w-4" />
                          </Link>
                        </li>
                        <li className="flex items-center gap-2 mb-1">
                          <Link
                            href="#"
                            className="info_tooltips flex items-center gap-2 underline text-[8px] md:text-[8px]"
                            title="This is an estimated rate.EXTSY will secure the best available rate htmlFor your exchange. Find out more."
                          >
                            Estimated rate{" "}
                            <Image src={Info} alt="" className="w-4" />
                          </Link>
                          <p className="flex items-center gap-2 text-[8px] xl:text-[8px]">
                            1 BTC ~ 22.22413 ETH
                          </p>
                        </li>
                      </ul>
                      <ul className="flex items-center justify-between gap-4">
                        <li className="mb-1">
                          <Link
                            href="#"
                            className="info_tooltips flex items-center gap-2 underline text-[8px] xl:text-[8px] opacity-100 xl:opacity-0"
                            title="Compare Prices Find the Best Value htmlFor Your Crypto Transactions Learn more."
                          >
                            Compare Prices
                            <Image src={Info} alt="" className="w-4" />
                          </Link>
                        </li>
                        <li className="mb-1">
                          <Link
                            href="#"
                            className="info_tooltips flex items-center gap-2 underline text-[8px] xl:text-[8px]"
                            title="Cashback You will get 0.04% cashback of your swap to your wallet. Find out more."
                          >
                            Signup to get cashback{" "}
                            <Image src={Info} alt="" className="w-4" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="flex text-sm xl:text-base text-start relative z-30 gap-2 mb-6 lg:mb-8">
                      <input
                        id="checkbox-1"
                        name="checkbox-1"
                        type="checkbox"
                        className="shrink-0"
                      />
                      <label
                        htmlFor="checkbox-1"
                        className="text-sm md:text-base"
                      >
                        {" "}
                        I&apos;ve read and agree to the Extsy{" "}
                        <Link href="#" className="underline">
                          Terms of Use, Privacy Policy and Risk Disclosure
                          Statement
                        </Link>
                      </label>
                    </div>
                    <Link
                      href="/pages/swapStage"
                      className="block relative z-30 w-full bg-gradient border border-white !rounded-full text-center text-gray-800 py-2.5 xl:py-4 px-8"
                    >
                      Swap now
                    </Link>
                  </form>
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div
                className="product-feature-item w-full h-full relative z-20 bg-gray-200 rounded-3xl p-6 lg:p-10"
                id="api-business-section"
              >
                <div className="product-feature-logo bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                  <Image src={Code} alt="" className="h-6 lg:h-10" />
                </div>
                <div className="product-feature-content max-w-5xl">
                  <h4 className="text-gray-700 text-2xl font-bold mb-4">
                    Seamless Integration with Flexible APIs
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Our powerful APIs simplify the integration of crypto swap
                    services into your platform with ease. Our APIs offer:
                  </p>

                  <ul className="max-w-2xl list-square text-gray-600 ps-5 mb-6">
                    <li>
                      <strong>Comprehensive Documentation:</strong> Clear and
                      detailed guides htmlFor quick and efficient
                      implementation.
                    </li>
                    <li>
                      <strong>High Scalability:</strong> Designed to handle any
                      volume of requests with top-notch performance.
                    </li>
                    <li>
                      <strong>Secure and Reliable:</strong> Built with robust
                      security features to ensure smooth and safe operations.
                    </li>
                  </ul>
                  <Link
                    className="inline-flex items-center gap-2 bg-gradient rounded-full text-gray-700 py-3 lg:py-3.5 px-5 lg:px-12 transition"
                    href=""
                  >
                    Get the API{" "}
                    <Image
                      src={AngleRight}
                      alt=""
                      className="h-4 lg:h-5 md:ms-4"
                    />
                  </Link>
                </div>
                <div className="product-feature-image mt-6">
                  <div className="flexible-api-image flex flex-col md:flex-row">
                    <Image
                      src={FlexibleApi}
                      alt=""
                      className="h-32 md:h-40 2xl:h-64"
                    />
                    <div className="relative inline-block shrink-0 mt-8">
                      <Image
                        src={FlexibleApiRight}
                        alt=""
                        className="h-16 2xl:h-36"
                      />
                      <ul className="flexible-api-shape absolute w-full h-full top-0 left-0">
                        <li className="absolute">
                          <Image src={FlexibleMobileApi} alt="" />
                        </li>
                        <li className="absolute">
                          <Image src={FlexibleDeskApi} alt="" />
                        </li>
                        <li className="absolute">
                          <ul className="flexible-api-coin absolute top-0 left-0 w-full h-full overflow-hidden">
                            <li className="absolute">
                              <Image
                                src={P2PTrading3}
                                alt=""
                                className="h-full"
                              />
                            </li>
                            <li className="absolute">
                              <Image
                                src={P2PTrading2}
                                alt=""
                                className="h-full"
                              />
                            </li>
                            <li className="absolute">
                              <Image
                                src={P2PTrading1}
                                alt=""
                                className="h-full"
                              />
                            </li>
                            <li className="absolute">
                              <Image
                                src={TetherCoin}
                                alt=""
                                className="h-full"
                              />
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 lg:col-span-8">
              <div
                className="product-feature-item w-full h-full relative z-20 bg-gray-200 rounded-3xl p-6 lg:p-10"
                id="sdk-business-section"
              >
                <div className="grid xl:grid-cols-12 gap-4">
                  <div className="xl:col-span-7">
                    <div className="product-feature-logo bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                      <Image src={ScrollImg} alt="" className="h-6 lg:h-10" />
                    </div>
                    <div className="product-feature-content max-w-5xl">
                      <h4 className="text-gray-700 text-2xl font-bold mb-4">
                        Developer-Friendly SDKs htmlFor Efficient Development
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Our Software Development Kits (SDKs) enable developers
                        to easily integrate our features into their
                        applications. Whether you&apos;re working on web,
                        mobile, or desktop projects, our SDKs offer:
                      </p>
                      <ul className="list-square text-gray-600 ps-5 mb-6">
                        <li>
                          <strong>Multi-Platform Support:</strong> Compatible
                          with popular programming languages and frameworks.
                        </li>
                        <li>
                          <strong>Extensive Libraries:</strong> Includes
                          pre-built functions and tools htmlFor faster, more
                          efficient development.
                        </li>
                        <li>
                          <strong>Easy Customization:</strong> Modular and
                          flexible design to cater to your specific development
                          needs.
                        </li>
                      </ul>

                      <Link
                        className="inline-flex items-center gap-2 bg-gradient rounded-full text-gray-700 py-3 lg:py-3.5 px-5 lg:px-12 transition"
                        href=""
                      >
                        Coming Soon{" "}
                        <Image
                          src={AngleRight}
                          alt=""
                          className="h-4 lg:h-5 md:ms-4"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="xl:col-span-5">
                    <div className="product-feature-image flex items-center justify-center h-full mt-6 md:mt-0 pb-4">
                      <div className="relative sdk-animation-feature inline-flex">
                        <Image src={SDKFeature} alt="" />
                        <ul className="sdk-animation-icon w-full h-full absolute top-0 left-0 z-20 transition-all duration-500">
                          <li className="absolute">
                            <Image src={SDK1} alt="" />
                          </li>
                          <li className="absolute">
                            <Image src={SDK2} alt="" />
                          </li>
                          <li className="absolute">
                            <Image src={SDK3} alt="" />
                          </li>
                          <li className="absolute">
                            <Image src={SDK4} alt="" />
                          </li>
                          <li className="absolute">
                            <Image src={SDK5} alt="" />
                          </li>
                          <li className="absolute">
                            <Image src={SDK6} alt="" />
                          </li>
                          <li className="absolute">
                            <Image src={SDK7} alt="" />
                          </li>
                          <li className="absolute">
                            <Image src={SDK8} alt="" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 lg:col-span-4">
              <div className="product-feature-item flex flex-wrap xl:flex-nowrap w-full h-full relative z-20 bg-gray-200 rounded-3xl p-6 lg:p-10 overflow-hidden">
                <div>
                  <div className="product-feature-logo bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                    <Image src={DocumentImg} alt="" className="h-6 lg:h-10" />
                  </div>
                  <div className="product-feature-content max-w-64">
                    <h4 className="text-gray-700 text-2xl font-bold mb-2">
                      Comprehensive Documentation htmlFor Every Step
                    </h4>
                    <p className="text-gray-600">
                      Access all the information you need through our detailed
                      documentation. From quick-start guides to advanced
                      customization, we offer resources designed htmlFor users
                      of all skill levels.
                    </p>
                  </div>
                </div>
                <div className="product-feature-image xl:h-full flex items-end mt-6 md:mt-0">
                  <div className="docs-feature-image inline-block w-64 relative">
                    <Image src={Docs} alt="" />
                    <div className="docs-feature-shape absolute left-16 -top-4 transition-all duration-500">
                      <Image src={DocsShape} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-area pb-20 lg:pb-44">
        <div className="container">
          <div className="relative p-6 lg:p-10">
            <div className="howstepWrapper bordered border-gradient !absolute right-0 bottom-0 top-0 left-0 opacity-70"></div>
            <div className="relative z-20 max-w-7xl mx-auto">
              <h2 className="text-2xl lg:text-4xl	text-white font-bold mb-8">
                Contact us for any query
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

      <FAQs />
    </div>
  );
};

export default ApiBusiness;
