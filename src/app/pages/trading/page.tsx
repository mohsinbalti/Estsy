"use client";
import FAQs from "@/components/FAQs";
import React from "react";
import HeroElipse from "../../assets/images/hero-elipse.svg";
import HeroGrid from "../../assets/images/hero-grid.svg";
import BtcCryptoIcon from "../../assets/images/btc-crypto-icon.svg";
import EthCrypto from "../../assets/images/eth-crypto-icon.svg";
import BNBCrypto from "../../assets/images/bnb-crypto-icon.svg";
import BaseCryptoIcon from "../../assets/images/base-crypto-icon.svg";
import XrpCryptoIcon from "../../assets/images/xrp-crypto-icon.svg";
import SolCryptoIcon from "../../assets/images/sol-crypto-icon.svg";
import TableSuccess from "../../assets/images/table-success.svg";
import TableDanger from "../../assets/images/table-danger.svg";
import FutureIcon from "../../assets/images/future-icon.svg";
import SpotIcon from "../../assets/images/spot-icon.svg";
import AngleRight from "../../assets/images/angle-right.svg";
import AnchorTopArrow from "../../assets/images/anchor-top-arrow.svg";
import HeroStar from "../../assets/images/hero-star.svg";
import BlackLeft from "../../assets/images/black-left.svg";
import BlackRight from "../../assets/images/black-right.svg";
import CoinCryptoIcon from "../../assets/images/coin-crypto-icon.svg";
import TableShortDown from "../../assets/images/table-short-down.svg";
import SearchIcon from "../../assets/images/search-icon.svg";
import TrandingDashboard from "../../assets/images/tranding-dashborad.png";
import Image from "next/image";
import Link from "next/link";

const Trading = () => {
  return (
    <div>
      <section className="hero-area relative pt-24 lg:pt-40 pb-72 lg:pb-96">
        <div className="hidden lg:block hero-elipse absolute left-0 top-0">
          <Image src={HeroElipse} alt="" />
        </div>
        <div className="hero-grid absolute left-0 top-0">
          <Image src={HeroGrid} alt="" />
        </div>
        <div className="hidden lg:block hero-grid absolute right-0 bottom-14">
          <Image src={HeroStar} alt="" />
        </div>
        <div className="container">
          <div className="hero-content text-center relative z-40 mb-8 lg:mb-24">
            <h1
              data-aos="fade-up"
              className="text-3xl lg:text-5xl leading-tight text-white font-normal mb-4 lg:mb-8"
            >
              Trade your crypto assets effortlessly with{" "}
              <span className="text-gradient">EXTSY</span>
            </h1>
            <p className="max-w-3xl mx-auto mb-6">
              Swap, buy, sell, and trade DeFi assets effortlessly with our
              transparent, user-friendly platform. Enjoy seamless transactions,
              real-time data, and secure, informed decision-making.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Link
                className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-5 lg:px-12 transition"
                href=""
              >
                Trade Now{" "}
                <Image src={AngleRight} alt="" className="h-4 lg:h5 md:ms-4" />
              </Link>
              <Link
                className="black-btn inline-flex items-center gap-2 bg-gray-700 hover:bg-amber-200 rounded-full text-white hover:text-gray-700 py-3 lg:py-3.5 px-5 lg:px-12 transition "
                href=""
              >
                Open an account{" "}
                <Image src={AngleRight} alt="" className="h-4 lg:h5 md:ms-4" />
              </Link>
            </div>
          </div>
          <div className="hero-dashboard-image max-w-7xl mx-auto absolute left-0 right-0 z-20 ">
            <Image src={TrandingDashboard} className="w-full" alt="" />
          </div>
        </div>
      </section>

      <section className="about-area relative z-40 pb-20 lg:pb-44">
        <div className="container">
          <div className="max-w-3xl">
            <h4 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-6 lg:mb-12">
              Most Popular Coins
            </h4>
          </div>
          <div className="tranding-coin-wrapper grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 xl:col-span-3">
              <div className="tranding-coin-box min-w-64 relative p-4 lg:px-8">
                <div className="bordered border-gradient h-full w-full !absolute top-0 left-0 opacity-50"></div>
                <div className="flex relative z-20 items-center justify-between gap-4 mb-8 lg:mb-9">
                  <div className="flex items-center text-start gap-3">
                    <div className="w-8 h-8">
                      <Image src={BtcCryptoIcon} alt="" className="w-full" />
                    </div>
                    <div className="flex items-center gap-4">
                      <h4 className="text-base xl:text-lg font-normal pe-5 border-r border-white">
                        Bitcoin
                      </h4>
                      <h4 className="text-base xl:text-lg font-normal">BTC </h4>
                    </div>
                  </div>
                  <button className="bg-white/5 flex items-center justify-center rounded-full w-9 h-9 p-2">
                    <Image src={AnchorTopArrow} alt="" className="h-4 lg:h-6" />
                  </button>
                </div>
                <div className="relative z-20">
                  <p className="text-base lg:text-2xl mb-6">
                    1 BTC ~ $57,042 USD
                  </p>
                  <p className="text-green-800 text-sm lg:text-2xl">
                    +1.23% / 24h
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 xl:col-span-3">
              <div className="tranding-coin-box min-w-64 relative p-4 lg:px-8">
                <div className="bordered border-gradient h-full w-full !absolute top-0 left-0 opacity-50"></div>
                <div className="flex relative z-20 items-center justify-between gap-4 mb-8 lg:mb-9">
                  <div className="flex items-center text-start gap-3">
                    <div className="w-8 h-8">
                      <Image className="w-full" src={EthCrypto} alt="" />
                    </div>
                    <div className="flex items-center gap-4">
                      <h4 className="text-base xl:text-lg font-normal pe-5 border-r border-white">
                        Ethereum
                      </h4>
                      <h4 className="text-base xl:text-lg font-normal">ETH </h4>
                    </div>
                  </div>
                  <button className="bg-white/5 flex items-center justify-center rounded-full w-9 h-9 p-2">
                    <Image src={AnchorTopArrow} alt="" className="h-4 lg:h-6" />
                  </button>
                </div>
                <div className="relative z-20">
                  <p className="text-base lg:text-2xl mb-6">
                    1 ETH ~ $2,430 USD
                  </p>
                  <p className="text-green-800 text-sm lg:text-2xl">
                    +1.23% / 24h
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 xl:col-span-3">
              <div className="tranding-coin-box min-w-64 relative p-4 lg:px-8">
                <div className="bordered border-gradient h-full w-full !absolute top-0 left-0 opacity-50"></div>
                <div className="flex relative z-20 items-center justify-between gap-4 mb-8 lg:mb-9">
                  <div className="flex items-center text-start gap-3">
                    <div className="w-8 h-8">
                      <Image src={BNBCrypto} alt="" className="w-full" />
                    </div>
                    <div className="flex items-center gap-4">
                      <h4 className="text-base xl:text-lg font-normal pe-5 border-r border-white">
                        Binance
                      </h4>
                      <h4 className="text-base xl:text-lg font-normal">BNB </h4>
                    </div>
                  </div>
                  <button className="bg-white/5 flex items-center justify-center rounded-full w-9 h-9 p-2">
                    <Image src={AnchorTopArrow} alt="" className="h-4 lg:h-6" />
                  </button>
                </div>
                <div className="relative z-20">
                  <p className="text-base lg:text-2xl mb-6">
                    1 BTC ~ $57,042 USD
                  </p>
                  <p className="text-green-800 text-sm lg:text-2xl">
                    +1.23% / 24h
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 xl:col-span-3">
              <div className="tranding-coin-box min-w-64 relative p-4 lg:px-8">
                <div className="bordered border-gradient h-full w-full !absolute top-0 left-0 opacity-50"></div>
                <div className="flex relative z-20 items-center justify-between gap-4 mb-8 lg:mb-9">
                  <div className="flex items-center text-start gap-3">
                    <div className="w-8 h-8">
                      <Image src={BaseCryptoIcon} alt="" className="w-full" />
                    </div>
                    <div className="flex items-center gap-4">
                      <h4 className="text-base xl:text-lg font-normal pe-5 border-r border-white">
                        Tether
                      </h4>
                      <h4 className="text-base xl:text-lg font-normal">
                        USDT{" "}
                      </h4>
                    </div>
                  </div>
                  <button className="bg-white/5 flex items-center justify-center rounded-full w-9 h-9 p-2">
                    <Image src={AnchorTopArrow} alt="" className="h-4 lg:h-6" />
                  </button>
                </div>
                <div className="relative z-20">
                  <p className="text-base lg:text-2xl mb-6">
                    1 USDT ~ $0.99 USD
                  </p>
                  <p className="text-green-800 text-sm lg:text-2xl">
                    +1.23% / 24h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="table-crypto-area relative z-40 pb-20 lg:pb-44">
        <div className="container pe-0 md:pe-4">
          <div className="max-w-3xl text-center mx-auto mb-8 lg:mb-24">
            <h3 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
              All Cryptocurrencies
            </h3>
          </div>
          <div className="table-wrapper max-w-7xl mx-auto bordered border-gradient p-6">
            <div className="relative z-20">
              <p className="mb-6">Cryptocurrency Categories</p>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <ul className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link
                      className="inline-block bg-white hover:bg-white text-gray-800 hover:text-gray-800 border border-white/5 rounded-md py-2 px-4 transition"
                      href="#"
                    >
                      ALL
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block bg-white/5 hover:bg-white text-white hover:text-gray-800 border border-white/5 rounded-md py-2 px-4 transition"
                      href="#"
                    >
                      Popular
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block bg-white/5 hover:bg-white text-white hover:text-gray-800 border border-white/5 rounded-md py-2 px-4 transition"
                      href="#"
                    >
                      Metaverse
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block bg-white/5 hover:bg-white text-white hover:text-gray-800 border border-white/5 rounded-md py-2 px-4 transition"
                      href="#"
                    >
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block bg-white/5 hover:bg-white text-white hover:text-gray-800 border border-white/5 rounded-md py-2 px-4 transition"
                      href="#"
                    >
                      Energy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block bg-white/5 hover:bg-white text-white hover:text-gray-800 border border-white/5 rounded-md py-2 px-4 transition"
                      href="#"
                    >
                      Gaming
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block bg-white/5 hover:bg-white text-white hover:text-gray-800 border border-white/5 rounded-md py-2 px-4 transition"
                      href="#"
                    >
                      Music
                    </Link>
                  </li>
                </ul>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="relative w-56 md:w-80">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                      <Image src={SearchIcon} alt="" />
                    </div>
                    <input
                      type="search"
                      name="search"
                      className="block w-full text-sm text-white border border-gray-50 rounded-full bg-transparent placeholder-gray-500 focus:outline-0 py-2 px-9"
                      placeholder="Search Raffle"
                    />
                  </div>
                </form>
              </div>
              <div className="responsive-table overflow-auto mb-6">
                <table className="w-[80rem] xl:w-full">
                  <thead>
                    <th className="w-24 font-normal text-start py-4 px-5">
                      <p className="flex items-center gap-2">
                        Sort by <Image src={TableShortDown} alt="" />
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
                      <p>Trade</p>
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="w-24 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">1</p>
                      </td>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center text-start gap-2">
                          <div className="w-8 h-8">
                            <Image
                              src={BtcCryptoIcon}
                              alt=""
                              className="w-full"
                            />
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
                          <Image src={TableDanger} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-48 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-between px-4">
                          <div className="text-center">
                            <p>
                              <Image
                                src={SpotIcon}
                                alt=""
                                className="inline-block h-6"
                              />
                            </p>
                            <p>Spot</p>
                          </div>
                          <div className="text-center">
                            <p>
                              <Image
                                src={FutureIcon}
                                alt=""
                                className="inline-block h-6"
                              />
                            </p>
                            <p>Futures</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-20 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-state-300">1</p>
                      </td>
                      <td className="w-72 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <div className="flex items-center text-start gap-2">
                          <div className="w-8 h-8">
                            <Image src={EthCrypto} alt="" className="w-full" />
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
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-state-300">$4,267.90</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-green-800">2.22%</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-48 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <div className="flex items-center justify-between px-4">
                          <div className="text-center">
                            <p>
                              <Image
                                src={SpotIcon}
                                alt=""
                                className="inline-block h-6"
                              />
                            </p>
                            <p>Spot</p>
                          </div>
                          <div className="text-center">
                            <p>
                              <Image
                                src={FutureIcon}
                                alt=""
                                className="inline-block h-6"
                              />
                            </p>
                            <p>Futures</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-20 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-state-300">1</p>
                      </td>
                      <td className="w-72 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
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
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-state-300">$587.74</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-red-800">-0.82%</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-48 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <div className="flex items-center justify-between px-4">
                          <div className="text-center">
                            <p>
                              <Image
                                src={SpotIcon}
                                alt=""
                                className="inline-block h-6"
                              />
                            </p>
                            <p>Spot</p>
                          </div>
                          <div className="text-center">
                            <p>
                              <Image
                                src={FutureIcon}
                                alt=""
                                className="inline-block h-6"
                              />
                            </p>
                            <p>Futures</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-20 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-state-300">1</p>
                      </td>
                      <td className="w-72 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <div className="flex items-center text-start gap-2">
                          <div className="w-8 h-8">
                            <Image
                              src={BaseCryptoIcon}
                              alt=""
                              className="w-full"
                            />
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
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-state-300">$0.9998</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-red-800">-0.3%</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-48 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <div className="flex items-center justify-between px-4">
                          <div className="text-center">
                            <p>
                              <Image
                                src={SpotIcon}
                                alt=""
                                className="inline-block h-6"
                              />
                            </p>
                            <p>Spot</p>
                          </div>
                          <div className="text-center">
                            <p>
                              <Image
                                src={FutureIcon}
                                alt=""
                                className="inline-block h-6"
                              />
                            </p>
                            <p>Futures</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-20 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-state-300">1</p>
                      </td>
                      <td className="w-72 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <div className="flex items-center text-start gap-2">
                          <div className="w-8 h-8">
                            <Image
                              src={SolCryptoIcon}
                              alt=""
                              className="w-full"
                            />
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
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-state-300">$213.67</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-red-800">-1.2%</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-48 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <div className="flex items-center justify-between px-4">
                          <div className="text-center">
                            <p>
                              <Image
                                src={SpotIcon}
                                alt=""
                                className="inline-block h-6"
                              />
                            </p>
                            <p>Spot</p>
                          </div>
                          <div className="text-center">
                            <p>
                              <Image
                                src={FutureIcon}
                                alt=""
                                className="inline-block h-6"
                              />
                            </p>
                            <p>Futures</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-20 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-state-300">1</p>
                      </td>
                      <td className="w-72 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <div className="flex items-center text-start gap-2">
                          <div className="w-8 h-8">
                            <Image
                              src={XrpCryptoIcon}
                              alt=""
                              className="w-full"
                            />
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
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-state-300">$1.04</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-red-800">-0.2%</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-48 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <div className="flex items-center justify-between px-4">
                          <div className="text-center">
                            <p>
                              <Image
                                src={SpotIcon}
                                alt=""
                                className="inline-block h-6"
                              />
                            </p>
                            <p>Spot</p>
                          </div>
                          <div className="text-center">
                            <p>
                              <Image
                                src={FutureIcon}
                                alt=""
                                className="inline-block h-6"
                              />
                            </p>
                            <p>Futures</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-20 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-state-300">1</p>
                      </td>
                      <td className="w-72 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <div className="flex items-center text-start gap-2">
                          <div className="w-8 h-8">
                            <Image
                              className="w-full"
                              src={CoinCryptoIcon}
                              alt=""
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
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-state-300">$1.00</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="text-green-800">0.5%</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-48 font-normal text-start py-2 px-5 border-b border-r border-gray-600">
                        <div className="flex items-center justify-between px-4">
                          <div className="text-center">
                            <p>
                              <Image
                                src={SpotIcon}
                                alt=""
                                className="inline-block h-6"
                              />
                            </p>
                            <p>Spot</p>
                          </div>
                          <div className="text-center">
                            <p>
                              <Image
                                src={FutureIcon}
                                alt=""
                                className="inline-block h-6"
                              />
                            </p>
                            <p>Futures</p>
                          </div>
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

      <FAQs />
    </div>
  );
};

export default Trading;
