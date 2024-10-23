"use client";

import React, { useState } from "react";
import BaseCrypto from "../../assets/images/base-crypto-icon.svg";
import BtcCrypto from "../../assets/images/btc-crypto-icon.svg";
import CryptoDown from "../../assets/images/cryptocurrency-down.svg";
import AvaxCrypto from "../../assets/images/avax-crypto-icon.svg";
import EthCrypto from "../../assets/images/eth-crypto-icon.svg";
import AdaCrypto from "../../assets/images/ada-crypto-icon.svg";
import BNBCrypto from "../../assets/images/bnb-crypto-icon.svg";
import SolCrypto from "../../assets/images/sol-crypto-icon.svg";
import XRPIcon from "../../assets/images/xrp-crypto-icon.svg";
import QrScanner from "../../assets/images/qr-scanner.svg";
import Vector from "../../assets/images/Vector.svg";
import CurveyArrow from "../../assets/images/Group 1244831082.svg";
import AngleWDown from "../../assets/images/angle-w-down.svg";
import AnchorTopArrow from "../../assets/images/top-anchor-arrow.svg";
import TableShortDown from "../../assets/images/table-short-down.svg";
import TableSuccess from "../../assets/images/table-success.svg";
import TableDanger from "../../assets/images/table-danger.svg";
import SearchIcon from "../../assets/images/search-icon.svg";
import InfoIcon from "../../assets/images/information-icon.svg";
import ArrowTDown from "../../assets/images/arrow-t-down.svg";
import ArrowTUp from "../../assets/images/arrow-t-up.svg";
import BlackLeft from "../../assets/images/black-left.svg";
import BlackRight from "../../assets/images/black-right.svg";
import CoinCryptoIcon from "../../assets/images/coin-crypto-icon.svg";
import BahFlagIcon from "../../assets/images/bah-flag-icon.svg";
import AusFlagIcon from "../../assets/images/aus-flag-icon.svg";
import BarFlagIcon from "../../assets/images/bar-flag-icon.svg";
import USAFlagIcon from "../../assets/images/usa-flag-icon.svg";
import CaFlagIcon from "../../assets/images/ca-flag-icon.svg";
import ChiFlagIcon from "../../assets/images/chi-flag-icon.svg";
import Image from "next/image";
import EtheriumCrypto from "../../assets/images/Frame 48100353.svg";
import ADACrypto from "../../assets/images/ada-crypto-icon.svg";

import Link from "next/link";

const BuySell = () => {
  const [coinSelector, setCoinSelector] = useState(false);
  const [cryptoSelector, setCryptoSelector] = useState(false);
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <div>
      <section className="hero-area relative pt-24 lg:pt-56 pb-20 lg:pb-34">
        {/* <div className="hero-grid absolute left-0 top-0">
          <HeroGrid />
        </div> */}

        <div className="container">
          <div className="hero-content max-w-7xl mx-auto text-center relative xl:px-10 z-40">
            <h1
              data-aos="fade-up"
              className="text-3xl lg:text-[50px] 2xl:text-[64px] text-center font-bold  leading-tight text-white mb-4 lg:mb-8"
            >
              Fiat Currencies on <span className="text-gradient">Extsy</span>
            </h1>
            <p className="max-w-6xl mx-auto mb-8 lg:mb-14 text-extsy">
              Explore our wide range of supported fiat currencies htmlFor buying
              and selling cryptocurrencies. Whether you prefer USD, EUR, GBP, or
              other major currencies, EXTSY provides an easy and secure way to
              convert your fiat into crypto and vice versa. Enjoy flexible
              payment options, competitive rates, and seamless
              transactions—giving you the freedom to trade your way.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="cryptocurrency-platform borderAnimate2 bordered border-gradient p-4 xl:p-5"
            >
              <div className="relative mb-2 lg:mb-6">
                <div className="flex items-end justify-end lg:justify-between gap-4">
                  <p className="hidden lg:block text-extsy text-sm mb-2">
                    You Pay
                  </p>
                  <nav className="crypto-tabs-choose flex items-center gap-2 mb-4">
                    <button
                      className={`${
                        activeTab === "buy"
                          ? "active bg-gradient text-gray-800"
                          : "bg-gray-800 text-white"
                      } flex items-center gap-1  rounded-md text-sm  py-2 px-3`}
                      onClick={() => setActiveTab("buy")}
                    >
                      Buy
                      <Image src={ArrowTDown} alt="" />
                    </button>
                    <button
                      className={`${
                        activeTab === "sell"
                          ? "active bg-gradient text-gray-800"
                          : "bg-gray-800 text-white"
                      } flex items-center gap-1  rounded-md text-sm  py-2 px-3`}
                      onClick={() => setActiveTab("sell")}
                    >
                      Sell
                      <Image src={ArrowTUp} alt="" />
                    </button>
                  </nav>
                </div>
                <div className="grid md:grid-cols-12 gap-2 lg:gap-4">
                  <div className="md:col-span-6">
                    <div className="bg-[rgba(56,56,56,0.3)] border border-white rounded-xl lg:rounded-2xl py-2 xl:py-3 px-4 xl:px-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <input
                            value="1500"
                            className="block w-4/5 bg-transparent text-md xl:text-xl text-white font-bold border-0 focus:outline-0"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <ul
                            className="tabs-dropdown"
                            onClick={() => setCoinSelector(!coinSelector)}
                          >
                            <li
                              className={`dropdown ${
                                coinSelector ? "active" : ""
                              }`}
                            >
                              <button className="dropdown-toggler">
                                <h4 className="flex items-center justify-end gap-2 text-md xl:text-xl font-bold">
                                  <Image
                                    src={AngleWDown}
                                    alt=""
                                    className="w-3"
                                  />
                                  USD
                                </h4>
                              </button>
                              <div className="dropdown-menu !w-56 lg:!w-96">
                                <ul>
                                  <li>
                                    <h5 className="text-base text-start font-medium px-3 mb-3">
                                      Currency
                                    </h5>
                                  </li>

                                  <li>
                                    <Link
                                      className="!flex items-center text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                      href="#"
                                    >
                                      <p className="flex items-center gap-2">
                                        <Image
                                          src={USAFlagIcon}
                                          alt=""
                                          className="w-6"
                                        />
                                        USD
                                      </p>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="!flex items-center text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                      href="#"
                                    >
                                      <p className="flex items-center gap-2">
                                        <Image
                                          src={AusFlagIcon}
                                          alt=""
                                          className="w-6"
                                        />
                                        Australian dollar
                                      </p>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="!flex items-center text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                      href="#"
                                    >
                                      <p className="flex items-center gap-2">
                                        <Image
                                          src={BahFlagIcon}
                                          alt=""
                                          className="w-6"
                                        />
                                        Bahrain dinar
                                      </p>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="!flex items-center text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                      href="#"
                                    >
                                      <p className="flex items-center gap-2">
                                        <Image
                                          src={BarFlagIcon}
                                          alt=""
                                          className="w-6"
                                        />
                                        Barbados dollar
                                      </p>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="!flex items-center text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                      href="#"
                                    >
                                      <p className="flex items-center gap-2">
                                        <Image
                                          src={CaFlagIcon}
                                          alt=""
                                          className="w-6"
                                        />
                                        Canadian dollar
                                      </p>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="!flex items-center text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                      href="#"
                                    >
                                      <p className="flex items-center gap-2">
                                        <Image
                                          src={ChiFlagIcon}
                                          alt=""
                                          className="w-6"
                                        />
                                        Chinese Yuan
                                      </p>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="!flex items-center text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                      href="#"
                                    >
                                      <p className="flex items-center gap-2">
                                        <Image
                                          src={BarFlagIcon}
                                          alt=""
                                          className="w-6"
                                        />
                                        Barbados dollar
                                      </p>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>

                          <div className="w-6 h-6 xl:w-8 xl:h-8">
                            <Image
                              src={USAFlagIcon}
                              alt=""
                              className="w-6 mt-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <div className="bg-[rgba(56,56,56,0.3)] border border-white rounded-2xl py-2 md:py-1 px-4 xl:px-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <input
                            value="11.2490708"
                            className="block w-32 xl:w-48 bg-transparent text-md xl:text-xl text-white font-bold border-b border-white/35 focus:outline-0 pb-1 mb-2"
                          />
                          <div className="flex items-center gap-2">
                            <Image src={CryptoDown} alt="" className="w-5" />
                            <input
                              value="+ 3,390 (5.94%)"
                              className="bg-transparent border-0 text-xs xl:text-md flex items-center gap-2 focus:outline-0"
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <ul
                            className="tabs-dropdown"
                            onClick={() => setCryptoSelector(!cryptoSelector)}
                          >
                            <li
                              className={`dropdown ${
                                cryptoSelector ? "active" : ""
                              }`}
                            >
                              <button className="dropdown-toggler">
                                <h4 className="flex items-center justify-end gap-2 text-md xl:text-xl font-bold">
                                  <Image
                                    src={AngleWDown}
                                    className="w-3"
                                    alt=""
                                  />
                                  ETH
                                </h4>
                                <p className="text-xs xl:text-md text-right">
                                  Ethereum
                                </p>
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
                                          src={XRPIcon}
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
                          <div className="w-6 h-6 xl:w-8 xl:h-8">
                            <Image src={EthCrypto} alt="" className="w-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inputSuccess hidden md:flex items-center relative z-30 gap-4 bg-[rgba(56,56,56,0.3)] border border-white rounded-xl lg:rounded-2xl py-4 xl:py-2 px-4 xl:px-6 mb-2 xl:mb-4">
                <input
                  className="block bg-transparent w-full text-base lg:text-xl text-white placeholder-gray-600 focus:outline-0 lg:py-5"
                  placeholder="Recipient Wallet Address"
                  type="text"
                />
                <div className="flex items-center gap-2 h-5 lg:h-6 h-absolute top-0 bottom-0 m-auto right-4 lg:right-6">
                  <button className="document-btn w-5 h-5 lg:w-7 lg:h-7"></button>
                  <button className="document-btn w-5 h-5 lg:w-7 lg:h-7">
                    <Image src={QrScanner} alt="" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between relative z-30 gap-4 px-4 lg:px-8 mb-6 lg:mb-8">
                <ul className="block md:flex items-center justify-center gap-4">
                  <li className="mb-1">
                    <Link
                      href="#"
                      className="info_tooltips flex items-center gap-2 underline text-[8px] md:text-xs text-extsy"
                      title="Network fees and all exchange charges are built into the rate. No hidden costs, guaranteed."
                    >
                      No hidden fees{" "}
                      <Image src={InfoIcon} className="w-4" alt="" />
                    </Link>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <Link
                      href="#"
                      className="info_tooltips flex items-center gap-2 underline text-[8px] md:text-xs text-extsy"
                      title="This is an estimated rate.EXTSY will secure the best available rate htmlFor your exchange. Find out more."
                    >
                      Estimated rate{" "}
                      <Image src={InfoIcon} className="w-4" alt="" />
                    </Link>
                    <p className="flex items-center gap-2 text-[8px] md:text-xs text-extsy">
                      1 BTC ~ 22.22413 ETH
                    </p>
                  </li>
                </ul>
                <ul className="block md:flex items-center justify-between lg:justify-start gap-4">
                  <li className="mb-1">
                    <Link
                      href="#"
                      className="info_tooltips flex items-center gap-2 underline text-[8px] md:text-xs text-extsy"
                      title="Compare Prices Find the Best Value htmlFor Your Crypto Transactions Learn more."
                    >
                      Compare Prices
                      <Image src={InfoIcon} alt="" className="w-4" />
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="#"
                      className="info_tooltips flex items-center gap-2 underline text-[8px] md:text-xs text-extsy"
                      title="Cashback You will get 0.04% cashback of your swap to your wallet. Find out more."
                    >
                      Signup to get cashback{" "}
                      <Image src={InfoIcon} className="w-4" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex text-[8px] lg:text-base text-start relative z-30 gap-2 mb-6 lg:mb-8">
                <input
                  id="checkbox-1"
                  name="checkbox-1"
                  type="checkbox"
                  className="shrink-0"
                />
                <label
                  htmlFor="checkbox-1"
                  className="text-[8px] md:text-base text-extsy"
                >
                  {" "}
                  I&apos;ve read and agree to the Extsy{" "}
                  <Link href="#" className="underline">
                    Terms of Use, Privacy Policy and Risk Disclosure Statement
                  </Link>
                </label>
              </div>
              <Link
                href="#"
                className="block relative z-30 w-full bg-gradient border border-white !rounded-full text-center text-gray-800 py-2.5 xl:py-4 px-8 harmonyos-sans-regular"
              >
                Buy Now
              </Link>
            </form>
          </div>
        </div>
      </section>

      <section className="about-area relative z-40 pb-20 lg:pb-44">
        <div className="container">
          <div className=" text-center">
            <h4 className="text-2xl lg:text-[28px] text-[#FAFAFA] font-bold leading-[120%] sm:font-bold mb-6 lg:mb-12">
              🔥 Popular{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #FEF9CC 0%, #F6DBD4 5.65%, #F1C8D9 10.6%, #F0C2DB 14.13%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Coins
              </span>
            </h4>
          </div>
          <div className="tranding-coin-wrapper grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 xl:col-span-3">
              <div className="tranding-coin-box hero-cryptorange-item2 !w-full min-w-64 relative p-4 lg:px-8">
                <div className="bordered bg-[#161414] h-full w-full !absolute top-0 left-0 "></div>
                <div className="flex border-b border-white/5 relative z-20 items-center justify-between gap-2 mb-6 pb-4">
                  <div className="flex items-center justify-center gap-3 mr-5">
                    <div className="flex items-center justify-center gap-2 rounded-[1157.782px] bg-[#383434] px-4 xl:px-[22px] py-2 ">
                      <Image
                        src={BtcCrypto}
                        alt=""
                        className="w-4 xl:w-5 2xl:w-[24px]"
                      />
                      <h5 className="text-xs md:text-base text-[#F0C2DB]">
                        BTC
                      </h5>
                    </div>
                    <Image src={Vector} alt="" />
                    <div className="flex items-center justify-center gap-2 rounded-[1157.782px] bg-[#383434]  px-4 xl:px-[22px] py-2 ">
                      <Image
                        src={BaseCrypto}
                        alt=""
                        className="w-4 xl:w-5 2xl:w-[24px]"
                      />
                      <h5 className="text-xs md:text-base text-[#F0C2DB]">
                        USDT
                      </h5>
                    </div>
                  </div>

                  {/* <button className="bg-gradient-to-r from-[#FEF9CC] via-[#F6DBD4] to-[#F0C2DB] flex justify-center items-center  rounded-[50%] w-[40px] h-[40px] p-[10px]"> */}

                  <Image src={AnchorTopArrow} className="" alt="" />

                  {/* </button> */}
                </div>
                <div className="relative z-20 flex items-center justify-between gap-4 ">
                  <p className="text-[#FAFAFA] font-metropolis text-[20px] font-semibold leading-[120%]">
                    1 BTC
                    <span className="text-[#BAB8B8] font-metropolis text-[16px] font-normal leading-[120%] ml-3">
                      ~ $57,042 USDT
                    </span>
                  </p>
                  <div className="rounded-full bg-[rgba(21,176,151,0.6)] p-[8px_16px_8px_8px] flex gap-2 items-center">
                    <p className="text-sm">+1.23%</p>
                    <Image src={CurveyArrow} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 xl:col-span-3">
              <div className="tranding-coin-box hero-cryptorange-item2 !w-full min-w-64 relative p-4 lg:px-8">
                <div className="bordered bg-[#161414] h-full w-full !absolute top-0 left-0 "></div>
                <div className="flex border-b border-white/5 relative z-20 items-center justify-between gap-2 mb-6 pb-4">
                  <div className="flex items-center justify-center gap-2 mr-5">
                    <div className="flex items-center justify-center gap-2 rounded-[1157.782px] bg-[#383434]  px-4 xl:px-[22px] py-2 ">
                      <Image
                        src={EtheriumCrypto}
                        alt=""
                        className="w-4 xl:w-5 2xl:w-[24px]"
                      />
                      <h5 className="text-base text-[#F0C2DB]">ETH</h5>
                    </div>
                    <Image src={Vector} alt="" />
                    <div className="flex items-center justify-center gap-2 rounded-[1157.782px] bg-[#383434]  px-4 xl:px-[22px] py-2 ">
                      <Image
                        src={BaseCrypto}
                        alt=""
                        className="w-4 xl:w-5 2xl:w-[24px]"
                      />
                      <h5 className="text-xs md:text-base text-[#F0C2DB]">
                        USDT
                      </h5>
                    </div>
                  </div>
                  {/* <button className="bg-gradient-to-r from-[#FEF9CC] via-[#F6DBD4] to-[#F0C2DB] flex justify-center items-center  rounded-[50%] w-[40px] h-[40px] p-[10px]"> */}
                  <Image src={AnchorTopArrow} className="" alt="" />
                  {/* </button> */}
                </div>
                <div className="relative z-20 flex items-center justify-between gap-4 ">
                  <p className="text-[#FAFAFA] font-metropolis text-[20px] font-semibold leading-[120%]">
                    1 ETH
                    <span className="text-[#BAB8B8] font-metropolis text-[16px] font-normal leading-[120%] ml-3">
                      ~ $57,042 USDT
                    </span>
                  </p>
                  <div className="rounded-full bg-[rgba(21,176,151,0.6)] p-[8px_16px_8px_8px] flex gap-2 items-center">
                    <p className="text-sm">+1.23%</p>
                    <Image src={CurveyArrow} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 xl:col-span-3">
              <div className="tranding-coin-box hero-cryptorange-item2 !w-full min-w-64 relative p-4 lg:px-8">
                <div className="bordered bg-[#161414] h-full w-full !absolute top-0 left-0 "></div>
                <div className="flex border-b border-white/5 relative z-20 items-center justify-between gap-2 mb-6 pb-4">
                  <div className="flex items-center justify-center gap-2 mr-5">
                    <div className="flex items-center justify-center gap-2 rounded-[1157.782px] bg-[#383434]  px-4 xl:px-[22px] py-2 ">
                      <Image
                        src={ADACrypto}
                        alt=""
                        className="w-4 xl:w-5 2xl:w-[24px]"
                      />
                      <h5 className="text-base text-[#F0C2DB]">ADA</h5>
                    </div>
                    <Image src={Vector} alt="" />
                    <div className="flex items-center justify-center gap-2 rounded-[1157.782px] bg-[#383434]  px-4 xl:px-[22px] py-2 ">
                      <Image
                        src={BaseCrypto}
                        alt=""
                        className="w-4 xl:w-5 2xl:w-[24px]"
                      />
                      <h5 className="text-base text-[#F0C2DB]">USDT</h5>
                    </div>
                  </div>
                  {/* <button className="bg-gradient-to-r from-[#FEF9CC] via-[#F6DBD4] to-[#F0C2DB] flex justify-center items-center  rounded-[50%] w-[40px] h-[40px] p-[10px]"> */}
                  <Image src={AnchorTopArrow} className="" alt="" />
                  {/* </button> */}
                </div>
                <div className="relative z-20 flex items-center justify-between gap-4 ">
                  <p className="text-[#FAFAFA] font-metropolis text-[20px] font-semibold leading-[120%]">
                    1 ADA
                    <span className="text-[#BAB8B8] font-metropolis text-[16px] font-normal leading-[120%] ml-3">
                      ~ $57,042 USDT
                    </span>
                  </p>
                  <div className="rounded-full bg-[rgba(21,176,151,0.6)] p-[8px_16px_8px_8px] flex gap-2 items-center">
                    <p className="text-sm">+1.23%</p>
                    <Image src={CurveyArrow} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 xl:col-span-3">
              <div className="tranding-coin-box hero-cryptorange-item2 !w-full min-w-64 relative p-4 lg:px-8">
                <div className="bordered bg-[#161414] h-full w-full !absolute top-0 left-0 "></div>
                <div className="flex border-b border-white/5 relative z-20 items-center justify-between gap-2 mb-6 pb-4">
                  <div className="flex items-center justify-center gap-2 mr-5">
                    <div className="flex items-center justify-center gap-2 rounded-[1157.782px] bg-[#383434]  px-4 xl:px-[22px] py-2 ">
                      <Image
                        src={BNBCrypto}
                        alt=""
                        className="w-4 xl:w-5 2xl:w-[24px]"
                      />
                      <h5 className="text-base text-[#F0C2DB]">BNB</h5>
                    </div>
                    <Image src={Vector} alt="" />
                    <div className="flex items-center justify-center gap-2 rounded-[1157.782px] bg-[#383434]  px-4 xl:px-[22px] py-2 ">
                      <Image
                        src={BaseCrypto}
                        alt=""
                        className="w-4 xl:w-5 2xl:w-[24px]"
                      />
                      <h5 className="text-base text-[#F0C2DB]">USDT</h5>
                    </div>
                  </div>
                  {/* <button className="bg-gradient-to-r from-[#FEF9CC] via-[#F6DBD4] to-[#F0C2DB] flex justify-center items-center  rounded-[50%] w-[40px] h-[40px] p-[10px]"> */}
                  <Image src={AnchorTopArrow} className="" alt="" />
                  {/* </button> */}
                </div>
                <div className="relative z-20 flex items-center justify-between gap-4 ">
                  <p className="text-[#FAFAFA] font-metropolis text-[20px] font-semibold leading-[120%]">
                    1 BNB
                    <span className="text-[#BAB8B8] font-metropolis text-[16px] font-normal leading-[120%] ml-3">
                      ~ $57,042 USDT
                    </span>
                  </p>
                  <div className="rounded-full bg-[rgba(21,176,151,0.6)] p-[8px_16px_8px_8px] flex gap-2 items-center">
                    <p className="text-sm">+1.23%</p>
                    <Image src={CurveyArrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="table-crypto-area relative z-40 pb-20 lg:pb-44">
        <div className="container pe-0 md:pe-4">
          <div className="max-w-7xl mx-auto text-start  mb-8">
            <h4 className="text-2xl lg:text-[28px] text-[#FAFAFA] font-bold leading-[120%] sm:font-bold ">
              All{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #FEF9CC 4.72%, #F6DBD4 9.04%, #F3D1D7 13.25%, #F1C8D9 15.52%, #F0C2DB 19.12%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Crypto Currencies
              </span>
            </h4>
          </div>
          <div className="table-wrapper max-w-7xl mx-auto border-1 border-[#221F1F] bg-[#161414] rounded-3xl   p-6">
            <div className="relative z-20">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <p>Cryptocurrency Categories</p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="relative w-56 md:w-80">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                      <Image src={SearchIcon} alt="" />
                    </div>
                    <input
                      type="search"
                      name="search"
                      className="block w-full text-sm text-white border border-[#626262] rounded-full bg-transparent placeholder-gray-500 focus:outline-0 py-2 px-9"
                      placeholder="Search Coin"
                    />
                  </div>
                </form>
              </div>
              <div className="responsive-table overflow-auto mb-6">
                <table className="w-[80rem] xl:w-full">
                  <thead>
                    <tr>
                      <th className="w-32 font-normal text-start py-4 px-5">
                        <p className="flex items-center gap-2">
                          Sort by{" "}
                          <Image src={TableShortDown} alt="" className="h-4" />
                        </p>
                      </th>
                      <th className="w-72 font-normal text-start py-4 px-5">
                        <p>Available Pairs</p>
                      </th>
                      <th className="w-32 font-normal text-start py-4 px-5">
                        <p>Price</p>
                      </th>
                      <th className="w-32 font-normal text-start py-4 px-5">
                        <p>Change</p>
                      </th>
                      <th className="w-32 font-normal text-start py-4 px-5">
                        <p>Fiat Purchase</p>
                      </th>
                      <th className="w-32 font-normal text-start py-4 px-5">
                        <p>Fixed Rate</p>
                      </th>
                      <th className="w-48 font-normal text-start py-4 px-5">
                        <p>Buy/Sell</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="w-24 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">1</p>
                      </td>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center text-start gap-2">
                          <div className="w-8 h-8">
                            <Image src={BtcCrypto} alt="" className="w-full" />
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="text-base xl:text-lg font-normal pe-5 border-r border-white">
                              Bitcoin{" "}
                            </p>
                            <p className="text-base xl:text-lg font-normal">
                              BTC{" "}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$56,623.54</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-green-800">1.41%</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-48 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <button className="bg-green-800 text-white py-2 px-6 rounded-full">
                            Swap
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-24 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">2</p>
                      </td>
                      <td className="w-72 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center text-start gap-2">
                          <div className="w-8 h-8">
                            <Image
                              src={EtheriumCrypto}
                              alt=""
                              className="w-full"
                            />
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="text-base xl:text-lg font-normal pe-5 border-r border-white">
                              Ethereum{" "}
                            </p>
                            <p className="text-base xl:text-lg font-normal">
                              ETH{" "}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$4,267.90</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-green-800">2.22%</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-48 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-24 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">3</p>
                      </td>
                      <td className="w-72 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center text-start gap-2">
                          <div className="w-8 h-8">
                            <Image src={BNBCrypto} alt="" className="w-full" />
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="text-base xl:text-lg font-normal pe-5 border-r border-white">
                              Binance{" "}
                            </p>
                            <p className="text-base xl:text-lg font-normal">
                              BNB{" "}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$587.74</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-red-800">-0.82%</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-48 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-24 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">4</p>
                      </td>
                      <td className="w-72 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center text-start gap-2">
                          <div className="w-8 h-8">
                            <Image src={BaseCrypto} alt="" className="w-full" />
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="text-base xl:text-lg font-normal pe-5 border-r border-white">
                              Tether{" "}
                            </p>
                            <p className="text-base xl:text-lg font-normal">
                              USDT{" "}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$0.9998</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-red-800">-0.3%</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-48 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-24 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">5</p>
                      </td>
                      <td className="w-72 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center text-start gap-2">
                          <div className="w-8 h-8">
                            <Image src={SolCrypto} alt="" className="w-full" />
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="text-base xl:text-lg font-normal pe-5 border-r border-white">
                              Solana{" "}
                            </p>
                            <p className="text-base xl:text-lg font-normal">
                              SOL{" "}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$213.67</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-red-800">-1.2%</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-48 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-24 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">6</p>
                      </td>
                      <td className="w-72 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center text-start gap-2">
                          <div className="w-8 h-8">
                            <Image src={XRPIcon} alt="" className="w-full" />
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="text-base xl:text-lg font-normal pe-5 border-r border-white">
                              XRP{" "}
                            </p>
                            <p className="text-base xl:text-lg font-normal">
                              XRP{" "}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$1.04</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-green-800">-0.2%</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-48 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-24 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">7</p>
                      </td>
                      <td className="w-72 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center text-start gap-2">
                          <div className="w-8 h-8">
                            <Image
                              src={CoinCryptoIcon}
                              alt=""
                              className="w-full"
                            />
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="text-base xl:text-lg font-normal pe-5 border-r border-white">
                              USD Coin{" "}
                            </p>
                            <p className="text-base xl:text-lg font-normal">
                              USDC{" "}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$1.00</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-green-800">0.5%</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-48 font-normal text-start py-3 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-end gap-3">
                <div className="flex w-full md:w-auto justify-between md:justify-end gap-3">
                  <p className="text-state-300 shrink-0 text-xs lg:text-base mt-1">
                    1-10 of 52
                  </p>
                  <ul className="flex text-xs lg:text-base flex-wrap items-center gap-1">
                    <li>
                      <Link
                        className="w-7 h-7 lg:w-8 lg:h-8 bg-transparent hover:bg-gray-600 rounded-md flex items-center justify-center transition"
                        href="#"
                      >
                        <Image src={BlackLeft} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-7 h-7 lg:w-8 lg:h-8 bg-transparent hover:bg-gray-600 rounded-md flex items-center justify-center transition"
                        href="#"
                      >
                        1
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-7 h-7 lg:w-8 lg:h-8 bg-transparent hover:bg-gray-600 rounded-md flex items-center justify-center transition"
                        href="#"
                      >
                        2
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-7 h-7 lg:w-8 lg:h-8 bg-gray-600 hover:bg-gray-600 rounded-md flex items-center justify-center transition"
                        href="#"
                      >
                        3
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-7 h-7 lg:w-8 lg:h-8 bg-transparent hover:bg-gray-600 rounded-md flex items-center justify-center transition"
                        href="#"
                      >
                        4
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-7 h-7 lg:w-8 lg:h-8 bg-transparent hover:bg-gray-600 rounded-md flex items-center justify-center transition"
                        href="#"
                      >
                        5
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-7 h-7 lg:w-8 lg:h-8 bg-transparent hover:bg-gray-600 rounded-md flex items-center justify-center transition"
                        href="#"
                      >
                        <Image src={BlackRight} alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuySell;
