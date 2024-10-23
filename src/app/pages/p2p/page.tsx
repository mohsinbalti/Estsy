"use client";
import FAQs from "@/components/FAQs";
import React, { useState } from "react";
import HeroElipse from "../../assets/images/hero-elipse.svg";
import HeroGrid from "../../assets/images/hero-grid.svg";
import AngleRight from "../../assets/images/angle-right.svg";
import ArrowTDown from "../../assets/images/arrow-t-down.svg";
import ArrowTUp from "../../assets/images/arrow-t-up.svg";
import AngleDown from "../../assets/images/angle-down.svg";
import AngleWDown from "../../assets/images/angle-w-down.svg";
import P2PTradingIcon from "../../assets/images/p2p-tranding.png";
import P2PTradingIcon1 from "../../assets/images/p2p-tranding-icon1.png";
import P2PTradingIcon2 from "../../assets/images/p2p-tranding-icon2.png";
import P2PTradingIcon3 from "../../assets/images/p2p-tranding-3.png";
import MapP2P from "../../assets/images/map-p2p.png";
import MapArrow from "../../assets/images/map-arrow.png";
import MapLocation1 from "../../assets/images/map-location-1.png";
import MapLocation2 from "../../assets/images/map-location-2.png";
import MapLocation3 from "../../assets/images/map-location-3.png";
import MapRounded from "../../assets/images/map-rounded.png";
import Filter from "../../assets/images/filter.svg";
import RefreshLeftSquare from "../../assets/images/refresh-left-square.svg";
import UsaFlag from "../../assets/images/usa-flag-icon.svg";
import UsdFlag from "../../assets/images/usa-flag-icon.svg";
import AusFlag from "../../assets/images/aus-flag-icon.svg";
import BarFlag from "../../assets/images/bar-flag-icon.svg";
import BahFlag from "../../assets/images/bah-flag-icon.svg";
import ChiFlag from "../../assets/images/chi-flag-icon.svg";
import CaFlag from "../../assets/images/ca-flag-icon.svg";
import AdviserUser1 from "../../assets/images/adviser-user1.jpg";
import MDILike from "../../assets/images/mdi_like.svg";
import ClockTime from "../../assets/images/clock-time.svg";
import BlackLeft from "../../assets/images/black-left.svg";
import BlackRight from "../../assets/images/black-right.svg";
import SolarTagPrice from "../../assets/images/solar_tag-price.svg";
import MoneyLight from "../../assets/images/money-light.svg";
import GitCompare from "../../assets/images/git-compare.svg";
import DollarCircle from "../../assets/images/dollar-circle.svg";
import ShieldTicket from "../../assets/images/shield-tick.svg";
import Global from "../../assets/images/global.svg";
import Image from "next/image";
import Link from "next/link";

const P2P = () => {
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  return (
    <div>
      <section className="hero-area relative pt-24 lg:pt-40 pb-20 lg:pb-44">
        <div className="hidden lg:block hero-elipse absolute left-0 top-0">
          <Image src={HeroElipse} alt="" />
        </div>
        <div className="hero-grid absolute left-0 top-0">
          <Image src={HeroGrid} alt="" />
        </div>

        <div className="container">
          <div className="grid items-center lg:grid-cols-12 gap-4">
            <div className="lg:col-span-6">
              <div className="hero-content text-center lg:text-start relative z-10">
                <h1
                  data-aos="fade-right"
                  className="text-3xl lg:text-5xl  leading-tight text-white font-normal mb-4 lg:mb-8"
                >
                  Peer-to-Peer <span className="text-gradient">Trading</span>
                </h1>
                <p className="max-w-3xl mb-6 pe-0 lg:pe-40">
                  Experience the freedom of peer-to-peer (P2P) trading with the
                  added security of our trusted escrow service. Our platform
                  connects you directly with buyers and sellers, ensuring
                  flexible terms, competitive rates, and peace of mind
                  throughout the transaction. Trade crypto seamlessly, with no
                  intermediaries and complete transparency.
                </p>
                <div className="flex justify-center lg:justify-start flex-wrap items-center gap-4 mb-8">
                  <Link
                    className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-5 lg:px-12 transition"
                    href="trading-page.html"
                  >
                    Start trading{" "}
                    <Image
                      src={AngleRight}
                      alt=""
                      className="h-4 lg:h-5 md:ms-4"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="flex items-center justify-center">
                <div className="hero-map-location relative inline-block">
                  <Image
                    src={MapP2P}
                    alt=""
                    className="inline-block max-h-[400px] lg:max-h-fit relative z-20"
                  />
                  <div className="absolute flex items-center justify-center top-24 lg:top-1/4 left-4 xl:left-14 z-20 px-20 transition-all duration-1000">
                    <Image
                      src={MapArrow}
                      alt=""
                      className="relative animate-pulse w-full top-8"
                    />

                    <ul className="absolute left-0 top-0 w-full h-full">
                      <li className="absolute inline-block left-2 md:left-10 top-16">
                        <Image
                          src={MapLocation1}
                          alt=""
                          className="location animate-bounce absolute bottom-4 right-2 z-20"
                        />
                        <Image
                          src={MapRounded}
                          alt=""
                          className="animate-pulse relative"
                        />
                      </li>
                      <li className="absolute inline-block right-10 top-4">
                        <Image
                          src={MapLocation2}
                          alt=""
                          className="location animate-bounce absolute bottom-4 right-2 z-20"
                        />
                        <Image
                          src={MapRounded}
                          alt=""
                          className="animate-pulse relative"
                        />
                      </li>
                      <li className="absolute inline-block right-44 -bottom-12">
                        <Image
                          src={MapLocation3}
                          alt=""
                          className="location animate-bounce absolute bottom-4 -right-2 z-20"
                        />
                        <Image
                          src={MapRounded}
                          alt=""
                          className="animate-pulse relative"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="table-crypto-area relative z-40 pb-20 lg:pb-44">
        <div className="container">
          <div className="noTableSpace table-wrapper max-w-7xl mx-auto bordered border-gradient p-6">
            <div className="relative z-20">
              <div className="flex items-center gap-4 mb-4">
                <nav className="crypto-tabs-choose flex items-center gap-2">
                  <button className="active flex items-center gap-1 bg-gradient rounded-md text-sm text-gray-800 py-2 px-3">
                    Buy
                    <Image src={ArrowTDown} alt="" />
                  </button>
                  <button className="flex items-center gap-1 bg-gray-800 rounded-md text-sm text-white py-2 px-3">
                    Sell
                    <Image src={ArrowTUp} alt="" />
                  </button>
                </nav>
                <nav className="select-tabs-choose hidden md:flex items-center gap-2">
                  <button className="bg-white/5 hover:bg-white text-white hover:text-gray-800 border border-white/5 rounded-md text-sm py-2 px-3">
                    USDT
                  </button>
                  <button className="bg-white/5 hover:bg-white text-white hover:text-gray-800 border border-white/5 rounded-md text-sm py-2 px-3">
                    BTC
                  </button>
                  <button className="bg-white/5 hover:bg-white text-white hover:text-gray-800 border border-white/5 rounded-md text-sm py-2 px-3">
                    BNB
                  </button>
                  <button className="bg-white/5 hover:bg-white text-white hover:text-gray-800 border border-white/5 rounded-md text-sm py-2 px-3">
                    SOL
                  </button>
                  <button className="bg-white/5 hover:bg-white text-white hover:text-gray-800 border border-white/5 rounded-md text-sm py-2 px-3">
                    MATIC
                  </button>
                  <button className="bg-white/5 hover:bg-white text-white hover:text-gray-800 border border-white/5 rounded-md text-sm py-2 px-3">
                    ETH
                  </button>
                  <button className="bg-white/5 hover:bg-white text-white hover:text-gray-800 border border-white/5 rounded-md text-sm py-2 px-3">
                    ADA
                  </button>
                </nav>
                <nav className="select-tabs-filter flex md:hidden items-center ms-auto gap-2">
                  <button>
                    <Image src={RefreshLeftSquare} alt="" />
                  </button>
                  <button>
                    <Image src={Filter} alt="" />
                  </button>
                </nav>
              </div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="w-full flex flex-wrap items-center justify-between md:justify-normal gap-4"
                >
                  <div className="relative flex md:hidden items-center gap-3 bg-white rounded-md w-20 p-2">
                    <select className="w-full bg-transparent text-sm text-gray-600 focus:outline-0">
                      <option value="1">USDT</option>
                      <option value="1">BTN</option>
                      <option value="1">XRP</option>
                      <option value="1">AVAX</option>
                    </select>
                    <button className="absolute right-3">
                      <Image src={AngleDown} alt="" />
                    </button>
                  </div>
                  <div className="relative flex items-center gap-3 border border-gray-50 rounded-full w-48 md:w-80 py-2 px-3">
                    <input
                      type="text"
                      className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-0 px-2"
                      placeholder="Transaction Amount"
                    />
                    <ul
                      className="tabs-dropdown"
                      onClick={() => setCurrencyDropdown(!currencyDropdown)}
                    >
                      <li
                        className={`dropdown ${
                          currencyDropdown ? "active" : ""
                        }`}
                      >
                        <button className="dropdown-toggler w-20 !flex items-center gap-2 !p-0">
                          <Image src={AngleWDown} alt="" />
                          <p>USD</p>

                          <Image
                            src={UsaFlag}
                            alt=""
                            className="w-6 h-6 object-contain"
                          />
                        </button>
                        <div className="dropdown-menu !w-56 lg:!w-64">
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
                                  <Image src={UsdFlag} alt="" className="w-6" />
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
                                  <Image src={AusFlag} alt="" className="w-6" />
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
                                  <Image src={BahFlag} alt="" className="w-6" />
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
                                  <Image src={BarFlag} alt="" className="w-6" />
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
                                  <Image src={CaFlag} alt="" className="w-6" />
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
                                  <Image src={ChiFlag} alt="" className="w-6" />
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
                                  <Image src={BarFlag} alt="" className="w-6" />
                                  Barbados dollar
                                </p>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="relative hidden md:flex items-center gap-3 border border-gray-50 rounded-full w-56 md:w-64 p-3">
                    <select className="w-full bg-transparent text-sm text-white focus:outline-0 px-2">
                      <option value="1">All Payments</option>
                      <option value="1">Sub Selection</option>
                      <option value="1">Sub Selection</option>
                      <option value="1">Sub Selection</option>
                    </select>
                    <button className="absolute right-3">
                      <Image src={AngleWDown} alt="" />
                    </button>
                  </div>
                  <div className="hidden md:flex items-center gap-3">
                    <div className="relative flex items-center gap-3 border border-gray-50 rounded-full w-56 md:w-72 p-3">
                      <select className="w-full bg-transparent text-sm text-white focus:outline-0 px-2">
                        <option value="1">All Regions</option>
                        <option value="1">Sub Selection</option>
                        <option value="1">Sub Selection</option>
                        <option value="1">Sub Selection</option>
                      </select>
                      <button className="absolute right-3">
                        <Image src={AngleWDown} alt="" />
                      </button>
                    </div>
                    <button>
                      <Image src={Filter} alt="" />
                    </button>
                  </div>
                </form>
                <button className="text-sm hidden md:flex items-center gap-2 shrink-0">
                  <Image src={RefreshLeftSquare} alt="" />
                  Refers Ads
                </button>
              </div>
              <div className="hidden md:block responsive-table overflow-auto mb-6">
                <table className="w-[80rem] xl:w-full">
                  <thead>
                    <tr>
                      <th className="w-72 font-normal text-start py-4 px-5">
                        <p>Advertisers</p>
                      </th>
                      <th className="w-32 font-normal text-start py-4 px-5">
                        <p>Price</p>
                      </th>
                      <th className="w-32 font-normal text-start py-4 px-5">
                        <p>Available/Order Limit</p>
                      </th>
                      <th className="w-32 font-normal text-start py-4 px-5">
                        <p>Payment</p>
                      </th>
                      <th className="w-32 font-normal text-start py-4 px-5">
                        <p>Trade</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex gap-3 relative z-40">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image src={AdviserUser1} alt="" />
                          </div>
                          <div className="">
                            <h4 className="text-lg mb-2">
                              Fedlly1990{" "}
                              <span className="text-xs text-green-800">
                                Online
                              </span>
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              17 orders | 95% Completion
                            </p>
                            <ul className="flex flex-wrap items-center gap-2">
                              <li>
                                <p className="flex items-center gap-2 text-gray-600 text-sm">
                                  <Image src={MDILike} alt="" className="h-4" />
                                  99.5%
                                </p>
                              </li>
                              <li>
                                <p className="flex items-center gap-2 text-gray-600 text-sm">
                                  <Image
                                    src={ClockTime}
                                    alt=""
                                    className="h-4"
                                  />
                                  15 min
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$34.52</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">214.30 USDT</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">Bank Transfer</p>
                      </td>
                      <td className="w-48 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <button className="bg-green-800 text-white py-2 px-6 rounded-full">
                            Buy now
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex gap-3 relative z-40">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image src={AdviserUser1} alt="" />
                          </div>
                          <div className="">
                            <h4 className="text-lg mb-2">
                              Fedlly1990{" "}
                              <span className="text-xs text-green-800">
                                Online
                              </span>
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              17 orders | 95% Completion
                            </p>
                            <ul className="flex flex-wrap items-center gap-2">
                              <li>
                                <p className="flex items-center gap-2 text-gray-600 text-sm">
                                  <Image src={MDILike} alt="" className="h-4" />
                                  99.5%
                                </p>
                              </li>
                              <li>
                                <p className="flex items-center gap-2 text-gray-600 text-sm">
                                  <Image
                                    src={ClockTime}
                                    alt=""
                                    className="h-4"
                                  />
                                  15 min
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$34.52</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">214.30 USDT</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">Bank Transfer</p>
                      </td>
                      <td className="w-48 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <button className="bg-green-800 text-white py-2 px-6 rounded-full">
                            Buy now
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex gap-3 relative z-40">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image src={AdviserUser1} alt="" />
                          </div>
                          <div className="">
                            <h4 className="text-lg mb-2">
                              Fedlly1990{" "}
                              <span className="text-xs text-green-800">
                                Online
                              </span>
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              17 orders | 95% Completion
                            </p>
                            <ul className="flex flex-wrap items-center gap-2">
                              <li>
                                <p className="flex items-center gap-2 text-gray-600 text-sm">
                                  <Image src={MDILike} alt="" className="h-4" />
                                  99.5%
                                </p>
                              </li>
                              <li>
                                <p className="flex items-center gap-2 text-gray-600 text-sm">
                                  <Image
                                    src={ClockTime}
                                    alt=""
                                    className="h-4"
                                  />
                                  15 min
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$34.52</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">214.30 USDT</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">Bank Transfer</p>
                      </td>
                      <td className="w-48 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <button className="bg-green-800 text-white py-2 px-6 rounded-full">
                            Buy now
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex gap-3 relative z-40">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image src={AdviserUser1} alt="" />
                          </div>
                          <div className="">
                            <h4 className="text-lg mb-2">
                              Fedlly1990{" "}
                              <span className="text-xs text-green-800">
                                Online
                              </span>
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              17 orders | 95% Completion
                            </p>
                            <ul className="flex flex-wrap items-center gap-2">
                              <li>
                                <p className="flex items-center gap-2 text-gray-600 text-sm">
                                  <Image src={MDILike} alt="" className="h-4" />
                                  99.5%
                                </p>
                              </li>
                              <li>
                                <p className="flex items-center gap-2 text-gray-600 text-sm">
                                  <Image
                                    src={ClockTime}
                                    alt=""
                                    className="h-4"
                                  />
                                  15 min
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$34.52</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">214.30 USDT</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">Bank Transfer</p>
                      </td>
                      <td className="w-48 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <button className="bg-green-800 text-white py-2 px-6 rounded-full">
                            Buy now
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mobile-table block md:hidden relative z-20">
                <button className="block text-start w-full p-3 mb-4">
                  Advertisers
                </button>
                <div className="border border-gray-600 p-4 mb-2">
                  <div className="flex items-center gap-3 relative mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image src={AdviserUser1} alt="" />
                    </div>
                    <h4 className="text-lg">
                      Fedlly1990{" "}
                      <span className="text-xs text-green-800">Online</span>
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    17 orders | 95% Completion
                  </p>
                  <ul className="flex flex-wrap items-center gap-2 mb-4">
                    <li>
                      <p className="flex items-center gap-2 text-gray-600 text-sm">
                        <Image src={MDILike} alt="" className="h-4" />
                        99.5%
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-2 text-gray-600 text-sm">
                        <Image src={ClockTime} alt="" className="h-4" />
                        15 min
                      </p>
                    </li>
                  </ul>
                  <h5 className="text-xl font-bold mb-2">$34.52</h5>
                  <p className="text-state-300 text-lg mb-2">
                    Order Limit: $500 - $5000
                  </p>
                  <ul className="flex items-center justify-between">
                    <li>
                      <p className="border-l border-state-300 text-state-300 text-sm ps-2">
                        Bank Transfer
                      </p>
                    </li>
                    <li>
                      {" "}
                      <button className="bg-green-800 text-sm text-white py-1 px-4 rounded-full">
                        Buy now
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="border border-gray-600 p-4 mb-2">
                  <div className="flex items-center gap-3 relative mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image src={AdviserUser1} alt="" />
                    </div>
                    <h4 className="text-lg">
                      Fedlly1990{" "}
                      <span className="text-xs text-green-800">Online</span>
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    17 orders | 95% Completion
                  </p>
                  <ul className="flex flex-wrap items-center gap-2 mb-4">
                    <li>
                      <p className="flex items-center gap-2 text-gray-600 text-sm">
                        <Image src={MDILike} alt="" className="h-4" />
                        99.5%
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-2 text-gray-600 text-sm">
                        <Image src={ClockTime} alt="" className="h-4" />
                        15 min
                      </p>
                    </li>
                  </ul>
                  <h5 className="text-xl font-bold mb-2">$34.52</h5>
                  <p className="text-state-300 text-lg mb-2">
                    Order Limit: $500 - $5000
                  </p>
                  <ul className="flex items-center justify-between">
                    <li>
                      <p className="border-l border-state-300 text-state-300 text-sm ps-2">
                        Bank Transfer
                      </p>
                    </li>
                    <li>
                      {" "}
                      <button className="bg-green-800 text-sm text-white py-1 px-4 rounded-full">
                        Buy now
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="border border-gray-600 p-4 mb-2">
                  <div className="flex items-center gap-3 relative mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image src={AdviserUser1} alt="" />
                    </div>
                    <h4 className="text-lg">
                      Fedlly1990{" "}
                      <span className="text-xs text-green-800">Online</span>
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    17 orders | 95% Completion
                  </p>
                  <ul className="flex flex-wrap items-center gap-2 mb-4">
                    <li>
                      <p className="flex items-center gap-2 text-gray-600 text-sm">
                        <Image src={MDILike} alt="" className="h-4" />
                        99.5%
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-2 text-gray-600 text-sm">
                        <Image src={ClockTime} alt="" className="h-4" />
                        15 min
                      </p>
                    </li>
                  </ul>
                  <h5 className="text-xl font-bold mb-2">$34.52</h5>
                  <p className="text-state-300 text-lg mb-2">
                    Order Limit: $500 - $5000
                  </p>
                  <ul className="flex items-center justify-between">
                    <li>
                      <p className="border-l border-state-300 text-state-300 text-sm ps-2">
                        Bank Transfer
                      </p>
                    </li>
                    <li>
                      {" "}
                      <button className="bg-green-800 text-sm text-white py-1 px-4 rounded-full">
                        Buy now
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="border border-gray-600 p-4 mb-2">
                  <div className="flex items-center gap-3 relative mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image src={AdviserUser1} alt="" />
                    </div>
                    <h4 className="text-lg">
                      Fedlly1990{" "}
                      <span className="text-xs text-green-800">Online</span>
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    17 orders | 95% Completion
                  </p>
                  <ul className="flex flex-wrap items-center gap-2 mb-4">
                    <li>
                      <p className="flex items-center gap-2 text-gray-600 text-sm">
                        <Image src={MDILike} alt="" className="h-4" />
                        99.5%
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-2 text-gray-600 text-sm">
                        <Image src={ClockTime} alt="" className="h-4" />
                        15 min
                      </p>
                    </li>
                  </ul>
                  <h5 className="text-xl font-bold mb-2">$34.52</h5>
                  <p className="text-state-300 text-lg mb-2">
                    Order Limit: $500 - $5000
                  </p>
                  <ul className="flex items-center justify-between">
                    <li>
                      <p className="border-l border-state-300 text-state-300 text-sm ps-2">
                        Bank Transfer
                      </p>
                    </li>
                    <li>
                      {" "}
                      <button className="bg-green-800 text-sm text-white py-1 px-4 rounded-full">
                        Buy now
                      </button>
                    </li>
                  </ul>
                </div>
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

      <section className="howwork-area relative z-40 pb-20 lg:pb-44">
        <div className="container">
          <div className="howwork-wrapper bordered border-gradient relative z-10 lg:p-10 xl:p-20">
            <div className="text-start lg:text-center relative z-20 max-w-3xl mx-auto mb-8 lg:mb-12">
              <h3 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
                How it <span className="text-gradient font-bold">works</span>
              </h3>
              <p>
                Effortless Trading in 3 Simple Steps: Our P2P platform connects
                you with trusted buyers and sellers, ensuring secure and
                seamless crypto transactions.
              </p>
            </div>
            <div className="grid md:grid-cols-12 gap-4">
              <div className="md:col-span-6 lg:col-span-4">
                <div className="howwork-box relative bordered border-gradient !rounded-2xl overflow-hidden p-6">
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                    <Image src={SolarTagPrice} alt="" className="h-6 lg:h-8" />
                  </div>
                  <div className="howwork-content relative z-20">
                    <h4 className="text-white text-2xl font-bold mb-4">
                      Place an Order
                    </h4>
                    <p className="text-white">
                      When you place a P2P order, your crypto assets are
                      securely held in escrow until the transaction is complete.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 lg:col-span-4">
                <div className="howwork-box relative bordered border-gradient !rounded-2xl overflow-hidden p-6 ">
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                    <Image src={GitCompare} alt="" className="h-6 lg:h-8" />
                  </div>
                  <div className="howwork-content relative z-20">
                    <h4 className="text-white text-2xl font-bold mb-4">
                      Make the Payment
                    </h4>
                    <p className="text-white">
                      Pay the seller using the recommended payment method. Once
                      the payment is confirmed, notify the seller via the
                      platform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 lg:col-span-4">
                <div className="howwork-box relative bordered border-gradient !rounded-2xl overflow-hidden p-6">
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                    <Image src={MoneyLight} alt="" className="h-6 lg:h-8" />
                  </div>
                  <div className="howwork-content relative z-20">
                    <h4 className="text-white text-2xl font-bold mb-4">
                      Receive Your Crypto
                    </h4>
                    <p className="text-white">
                      After the seller verifies receipt of the payment, the
                      escrowed crypto is released to your account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area relative pb-20 lg:pb-44">
        <div className="container">
          <div className="grid items-center md:grid-cols-12 gap-4">
            <div className="md:col-span-6">
              <div className="about-content max-w-3xl">
                <h4 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
                  Advantages of{" "}
                  <span className="text-gradient">P2P Trading</span>
                </h4>
                <p className="mb-6 lg:mb-12">
                  Discover the key benefits of Peer-to-Peer crypto trading:
                  explore how global accessibility, lower fees, and escrow
                  protection enhance your trading experience.
                </p>
                <div className="mb-8">
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-6">
                    <Image src={Global} alt="" className="h-6 lg:h-8" />
                  </div>
                  <h4 className="text-white text-xl font-bold mb-3">
                    Global Access
                  </h4>
                  <p className="text-white">
                    Connect with buyers and sellers from around the world,
                    giving you access to a wide range of trading opportunities
                    and the best deals across various regions.
                  </p>
                </div>
                <div className="mb-8">
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-6">
                    <Image src={DollarCircle} alt="" className="h-6 lg:h-8" />
                  </div>
                  <h4 className="text-white text-xl font-bold mb-3">
                    Lower Fees
                  </h4>
                  <p className="text-white">
                    P2P trading offers significantly lower transaction fees
                    compared to traditional exchanges, allowing you to maximize
                    your profits by minimizing costs.
                  </p>
                </div>
                <div className="mb-8">
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-6">
                    <Image src={ShieldTicket} alt="" className="h-6 lg:h-8" />
                  </div>
                  <h4 className="text-white text-xl font-bold mb-3">
                    Escrow Protection
                  </h4>
                  <p className="text-white">
                    Your transactions are secured by an escrow service that
                    holds funds until both parties fulfill their obligations,
                    ensuring a safe and reliable exchange process.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="about-image group text-center relative mt-6 md:mt-0">
                <Image src={P2PTradingIcon} alt="" className="inline-block" />
                <ul className="absolute top-0 w-full h-full z-30">
                  <li className="absolute left-12 lg:left-48 top-8 group-hover:translate-y-20 transition-all duration-700">
                    <Image
                      src={P2PTradingIcon2}
                      alt=""
                      className="w-20 lg:w-auto"
                    />
                  </li>
                  <li className="absolute right-16 lg:right-48 top-0 group-hover:-translate-y-20 transition-all duration-700">
                    <Image
                      src={P2PTradingIcon3}
                      alt=""
                      className="w-20 lg:w-auto"
                    />
                  </li>
                  <li className="absolute right-16 bottom-32 lg:right-48 lg:bottom-56 group-hover:-translate-y-20 transition-all duration-700">
                    <Image
                      src={P2PTradingIcon1}
                      alt=""
                      className="w-20 lg:w-auto"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQs />
    </div>
  );
};

export default P2P;
