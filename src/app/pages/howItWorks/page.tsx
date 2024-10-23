"use client";
import React, { useEffect } from "react";
import HeroElipse from "../../assets/images/hero-elipse.svg";
import HeroGrid from "../../assets/images/hero-grid.svg";
import CryptoCube from "../../assets/images/cryptocurrency-cube.svg";
import CryptoUp from "../../assets/images/cryptocurrency-up.svg";
import AngleWDown from "../../assets/images/angle-w-down.svg";
import SearchIcon from "../../assets/images/search-icon.svg";
import BtcCryptoIcon from "../../assets/images/btc-crypto-icon.svg";
import AvaxCrypto from "../../assets/images/avax-crypto-icon.svg";
import EthCrypto from "../../assets/images/eth-crypto-icon.svg";
import BNBCrypto from "../../assets/images/bnb-crypto-icon.svg";
import MaticIcon from "../../assets/images/matic-crypto-icon.svg";
import InfoIcon from "../../assets/images/information-icon.svg";
import ArrowTDown from "../../assets/images/arrow-t-down.svg";
import ArrowTUp from "../../assets/images/arrow-t-up.svg";
import UsdFlag from "../../assets/images/usa-flag-icon.svg";
import AusFlag from "../../assets/images/aus-flag-icon.svg";
import BarFlag from "../../assets/images/bar-flag-icon.svg";
import BahFlag from "../../assets/images/bah-flag-icon.svg";
import ChiFlag from "../../assets/images/chi-flag-icon.svg";
import CaFlag from "../../assets/images/ca-flag-icon.svg";
import CryptoRaffles from "../../assets/images/crypto-raffles.png";
import AngleRight from "../../assets/images/angle-right.svg";
import TransactionCheck from "../../assets/images/transaction-check.svg";
import ArrowGradient from "../../assets/images/arrow-gradient.svg";
import QrCodeImgBig from "../../assets/images/qrcode-image-big.png";
import FeatureImage1 from "../../assets/images/feature-image1.png";
import PartnershipProgram from "../../assets/images/partnership-program.png";
import TrandingDashboard from "../../assets/images/tranding-dashborad.png";
import FreeCard from "../../assets/images/FreeCard.png";
import PurchaseEth from "../../assets/images/purchase-eth.svg";
import PurchaseBit from "../../assets/images/purchase-bit.svg";
import PurchaseBNB from "../../assets/images/purchase-bnb.svg";
import PurchaseCard from "../../assets/images/purchase-card.png";
import PurchaseLitecoin from "../../assets/images/purchase-litecoin.svg";
import PurchaseReact from "../../assets/images/purchase-rect.svg";
import PurchasePolygon from "../../assets/images/purchase-polygan.svg";
import PurchaseRip from "../../assets/images/purchase-rip.svg";
import Image from "next/image";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
Swiper.use([Navigation, Pagination]);

const HowItWorks = () => {
  useEffect(() => {
    const swiperInstance = new Swiper(".howWorkSwiper", {
      slidesPerView: "auto",
      loop: true,
      initialSlide: 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiperPagination",
      },
    });

    function change() {
      const offer: HTMLElement | null = document.getElementById("numberSlides");
      if (offer instanceof HTMLElement) {
        offer.innerHTML =
          swiperInstance.realIndex + 1 + "/" + swiperInstance.slides.length;
      } else {
        console.error("Element with id 'numberSlides' not found");
      }
    }

    // Initial call to set the slide number
    change();
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    if (prevButton && nextButton) {
      prevButton.addEventListener("click", change);
      nextButton.addEventListener("click", change);
    }

    return () => {
      if (prevButton && nextButton) {
        prevButton.removeEventListener("click", change);
        nextButton.removeEventListener("click", change);
      }
    };
  }, []);
  return (
    <div>
      <section className="hero-area bottomHeroShape relative pt-24 lg:pt-56 pb-20 lg:pb-44">
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
              How it Works?
            </h1>
            <p className="max-w-4xl mx-auto">
              Wondering how our platform works? Follow these simple steps to get
              started. From account setup to completing transactions, we provide
              easy-to-follow instructions so you can confidently navigate the
              platform, whether you&apos;re a beginner or an experienced trader.
            </p>
          </div>
        </div>
      </section>

      <section className="step-area relative z-20 pb-20 lg:pb-44">
        <div className="container">
          <div className="relative p-6 lg:p-10">
            <div className="howstepWrapper bordered border-gradient !absolute right-0 bottom-0 top-0 left-0 opacity-80"></div>
            <div className="swiper howWorkSwiper">
              <div className="swiper-wrapper mb-6">
                <div className="swiper-slide">
                  <div className="grid items-center md:grid-cols-12 gap-4 relative z-20">
                    <div className="md:col-span-6">
                      <div className="relative z-20">
                        <h4 className="text-2xl font-bold mb-2">Step 1:</h4>
                        <h2 className="text-2xl lg:text-4xl	text-white font-bold mb-8">
                          Select Your Currency
                        </h2>
                        <p>
                          Select your desired exchange pair from our extensive
                          list of over 50,000 options. With such a wide
                          selection, you&apos;re sure to find exactly what you
                          need
                        </p>
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="bg-gray-800 relative z-20 rounded-2xl flex items-center justify-center h-full py-4 lg:py-14">
                        <form
                          onSubmit={(e) => e.preventDefault()}
                          className="cryptocurrency-platform bordered border-gradient"
                        >
                          <div className="relative z-40">
                            <nav
                              id="tab-navs"
                              className="grid grid-cols-12 overflow-hidden rounded-t-3xl"
                            >
                              <div className="col-span-6">
                                <Link
                                  href="#first"
                                  className="relative block text-center text-xs xl:text-lg w-full rounded-b-3xl p-4 active"
                                >
                                  <span>Exchange Crypto</span>
                                </Link>
                              </div>
                              <div className="col-span-6">
                                <Link
                                  href="#second"
                                  className="relative block text-center text-xs xl:text-lg w-full rounded-b-3xl p-4"
                                >
                                  <span>Buy/Sell Crypto</span>
                                </Link>
                              </div>
                            </nav>
                            <div id="tab-contents">
                              <div
                                id="first"
                                className="tab-content p-4 xl:p-5"
                              >
                                <div className="relative">
                                  <div className="absolute left-0 right-0 -bottom-5 lg:-bottom-6 m-auto w-10 h-10 xl:w-14 xl:h-14">
                                    <Image src={CryptoCube} alt="" />
                                  </div>
                                  <div className="flex items-center justify-between bg-[rgba(56,56,56,0.3)] border border-white rounded-3xl py-7 xl:py-12 px-4 xl:px-8 mb-2 xl:mb-3">
                                    <div>
                                      <input
                                        value="0.5"
                                        className="block w-32 xl:w-48 bg-transparent text-lg xl:text-3xl text-white font-bold border-b border-white/35 focus:outline-0 pb-1 mb-2"
                                      />
                                      <div className="flex items-center gap-2">
                                        <Image
                                          src={CryptoUp}
                                          alt=""
                                          className="w-6"
                                        />
                                        <input
                                          disabled
                                          value="+ 3,390 (5.94%)"
                                          className="bg-transparent border-0 text-[8px] xl:text-lg flex items-center gap-2 focus:outline-0"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <ul className="tabs-dropdown">
                                        <li className="dropdown">
                                          <button className="dropdown-toggler">
                                            <h4 className="flex items-center justify-end gap-2 text-lg xl:text-2xl font-bold">
                                              <Image
                                                src={AngleWDown}
                                                alt=""
                                                className="w-3"
                                              />
                                              BTC
                                            </h4>
                                            <p className="text-[8px] xl:text-lg">
                                              Bitcoin
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
                                                <div className="w-full px-3 mb-2">
                                                  <div className="relative px-3 mb-2">
                                                    <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                                                      <Image
                                                        src={SearchIcon}
                                                        alt=""
                                                      />
                                                    </div>
                                                    <input
                                                      type="search"
                                                      name="search"
                                                      className="block w-full text-sm text-gray-600 border border-gray-50 rounded-full bg-gray-400 placeholder-gray-500 focus:outline-0 py-1 px-8"
                                                      placeholder="Search Raffle"
                                                      required
                                                    />
                                                  </div>
                                                </div>
                                              </li>
                                              <li>
                                                <Link
                                                  className="!flex items-center justify-between text-base text-state-300 hover:text-gray-800 hover:bg-state-100 rounded-md mx-3 transition"
                                                  href="#"
                                                >
                                                  <p className="flex items-center gap-2">
                                                    <Image
                                                      src={BtcCryptoIcon}
                                                      alt=""
                                                      className="w-6"
                                                    />
                                                    BTC
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
                                                      src={AvaxCrypto}
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
                                                      src={BtcCryptoIcon}
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
                                                      src={MaticIcon}
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
                                                      src={BtcCryptoIcon}
                                                      alt=""
                                                      className="w-6"
                                                    />
                                                    XRP
                                                  </p>
                                                  <p>$56,623.54</p>
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </li>
                                      </ul>

                                      <div className="w-8 h-8 xl:w-12 xl:h-12">
                                        <Image
                                          src={BtcCryptoIcon}
                                          alt=""
                                          className="w-full"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-[rgba(56,56,56,0.3)] border border-white rounded-3xl pt-7 xl:pt-12 px-4 xl:px-8 pb-3 mb-2 xl:mb-3">
                                  <div className="flex items-center justify-between mb-4 xl:mb-6">
                                    <div>
                                      <input
                                        disabled
                                        value="11.2490708"
                                        className="block w-32 xl:w-48 bg-transparent text-lg xl:text-3xl text-white font-bold border-b border-white/35 focus:outline-0 pb-1 mb-2"
                                      />
                                      <div className="flex items-center gap-2">
                                        <Image
                                          src={CryptoUp}
                                          alt=""
                                          className="w-6"
                                        />
                                        <input
                                          disabled
                                          value="+ 3,390 (5.94%)"
                                          className="bg-transparent border-0 text-[8px] xl:text-lg flex items-center gap-2 focus:outline-0"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <ul className="tabs-dropdown">
                                        <li className="dropdown">
                                          <button className="dropdown-toggler">
                                            <h4 className="flex items-center justify-end gap-2 text-lg xl:text-2xl font-bold">
                                              <Image
                                                src={AngleWDown}
                                                alt=""
                                                className="w-3"
                                              />
                                              ETH
                                            </h4>
                                            <p className="text-[8px] xl:text-lg">
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
                                                    <Image
                                                      src={SearchIcon}
                                                      alt=""
                                                    />
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
                                                      src={BtcCryptoIcon}
                                                      alt=""
                                                      className="w-6"
                                                    />
                                                    BTC
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
                                                      src={AvaxCrypto}
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
                                                      src={BtcCryptoIcon}
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
                                                      src={MaticIcon}
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
                                                      src={BtcCryptoIcon}
                                                      alt=""
                                                      className="w-6"
                                                    />
                                                    XRP
                                                  </p>
                                                  <p>$56,623.54</p>
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </li>
                                      </ul>

                                      <div className="w-8 h-8 xl:w-12 xl:h-12">
                                        <Image
                                          src={EthCrypto}
                                          alt=""
                                          className="w-full"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <ul className="flex items-center justify-center gap-4">
                                    <li>
                                      <Link
                                        href="#"
                                        className="info_tooltips flex items-center gap-2 underline text-[8px] md:text-xs"
                                        title="Network fees and all exchange charges are built into the rate. No hidden costs, guaranteed."
                                      >
                                        No hidden fees{" "}
                                        <Image
                                          src={InfoIcon}
                                          alt=""
                                          className="w-4"
                                        />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="#"
                                        className="info_tooltips flex items-center gap-2 underline text-[8px] md:text-xs"
                                        title="This is an estimated rate.EXTSY will secure the best available rate for your exchange. Find out more."
                                      >
                                        Estimated rate{" "}
                                        <Image
                                          src={InfoIcon}
                                          alt=""
                                          className="w-4"
                                        />
                                      </Link>
                                    </li>
                                    <li>
                                      <p className="flex items-center gap-2 text-[8px] md:text-xs">
                                        1 BTC ~ 22.22413 ETH
                                      </p>
                                    </li>
                                  </ul>
                                </div>

                                <ul className="flex items-center justify-center w-5/6 mx-auto gap-4 mb-8">
                                  <li>
                                    <Link
                                      href="#"
                                      className="info_tooltips flex items-center gap-2 underline text-[8px] md:text-xs"
                                      title="Cashback You will get 0.04% cashback of your swap to your wallet. Find out more."
                                    >
                                      Signup to get cashback{" "}
                                      <Image
                                        src={InfoIcon}
                                        alt=""
                                        className="w-4"
                                      />
                                    </Link>
                                  </li>
                                </ul>
                                <Link
                                  href="#"
                                  className="block w-full bg-gradient border border-white !rounded-full text-center text-gray-800 py-2.5 xl:py-4 px-8"
                                >
                                  Swap now
                                </Link>
                              </div>
                              <div
                                id="second"
                                className="tab-content hidden p-4 xl:p-5"
                              >
                                <div className="relative">
                                  <div className="flex items-end justify-end lg:justify-between gap-4">
                                    <p className="hidden lg:block text-gray-600 mb-2">
                                      You Pay
                                    </p>
                                    <nav className="crypto-tabs-choose flex items-center gap-2 mb-4">
                                      <button className="active flex items-center gap-1 bg-gradient rounded-md text-sm text-gray-800 py-2 px-3">
                                        Buy
                                        <Image src={ArrowTDown} alt="" />
                                      </button>
                                      <button className="flex items-center gap-1 bg-gray-800 rounded-md text-sm text-white py-2 px-3">
                                        Sell
                                        <Image src={ArrowTUp} alt="" />
                                      </button>
                                    </nav>
                                  </div>

                                  <div className="bg-gray-300 border border-white rounded-2xl lg:rounded-3xl py-3 xl:py-4 px-4 xl:px-8 mb-2 xl:mb-4">
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <input
                                          disabled
                                          value="1500"
                                          className="block w-4/5 bg-transparent text-lg xl:text-3xl text-white font-bold border-0 focus:outline-0"
                                        />
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <ul className="tabs-dropdown">
                                          <li className="dropdown">
                                            <button className="dropdown-toggler">
                                              <h4 className="flex items-center justify-end gap-2 text-lg xl:text-2xl font-bold">
                                                <Image
                                                  src={AngleWDown}
                                                  alt=""
                                                  className="w-3"
                                                />
                                                USD
                                              </h4>
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
                                                      <Image
                                                        src={UsdFlag}
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
                                                        src={AusFlag}
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
                                                        src={BahFlag}
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
                                                        src={BarFlag}
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
                                                        src={CaFlag}
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
                                                        src={ChiFlag}
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
                                                        src={ChiFlag}
                                                        alt=""
                                                        className="w-6"
                                                      />
                                                      Chinese Yuan
                                                    </p>
                                                  </Link>
                                                </li>
                                              </ul>
                                            </div>
                                          </li>
                                        </ul>

                                        <div className="w-8 h-8 xl:w-12 xl:h-12">
                                          <Image
                                            src={UsdFlag}
                                            alt=""
                                            className="w-full"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className="hidden lg:block text-gray-600 mb-2">
                                  You Get
                                </p>
                                <div className="bg-gray-300 border border-white rounded-3xl pt-7 xl:pt-12 px-4 xl:px-8 pb-3 mb-6 xl:mb-3">
                                  <div className="flex items-center justify-between mb-4 xl:mb-6">
                                    <div>
                                      <input
                                        disabled
                                        value="0.5220165"
                                        className="block w-32 xl:w-48 bg-transparent text-lg xl:text-3xl text-white font-bold border-b border-white/35 focus:outline-0 pb-1 mb-2"
                                      />
                                      <div className="flex items-center gap-2">
                                        <Image
                                          src={CryptoUp}
                                          alt=""
                                          className="w-6"
                                        />
                                        <input
                                          disabled
                                          value="+ 3,390 (5.94%)"
                                          className="bg-transparent border-0 text-xs xl:text-lg flex items-center gap-2 focus:outline-0"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <ul className="tabs-dropdown">
                                        <li className="dropdown">
                                          <button className="dropdown-toggler">
                                            <h4 className="flex items-center justify-end gap-2 text-lg xl:text-2xl font-bold">
                                              <Image
                                                src={AngleWDown}
                                                alt=""
                                                className="w-3"
                                              />
                                              ETH
                                            </h4>
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
                                                    <Image
                                                      src={SearchIcon}
                                                      alt=""
                                                    />
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
                                                      src={BtcCryptoIcon}
                                                      alt=""
                                                      className="w-6"
                                                    />
                                                    BTC
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
                                                      src={AvaxCrypto}
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
                                                      src={BtcCryptoIcon}
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
                                                      src={MaticIcon}
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
                                                      src={BtcCryptoIcon}
                                                      alt=""
                                                      className="w-6"
                                                    />
                                                    XRP
                                                  </p>
                                                  <p>$56,623.54</p>
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </li>
                                      </ul>

                                      <div className="w-8 h-8 xl:w-12 xl:h-12">
                                        <Image
                                          src={EthCrypto}
                                          alt=""
                                          className="w-full"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <ul className="flex items-center justify-center gap-4">
                                    <li>
                                      <Link
                                        href="#"
                                        className="info_tooltips flex items-center gap-2 underline text-xss md:text-xs"
                                        title="Network fees and all exchange charges are built into the rate. No hidden costs, guaranteed."
                                      >
                                        No hidden fees{" "}
                                        <Image
                                          src={InfoIcon}
                                          alt=""
                                          className="w-4"
                                        />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="#"
                                        className="info_tooltips flex items-center gap-2 underline text-xss md:text-xs"
                                        title="This is an estimated rate.EXTSY will secure the best available rate for your exchange. Find out more."
                                      >
                                        Estimated rate{" "}
                                        <Image
                                          src={InfoIcon}
                                          alt=""
                                          className="w-4"
                                        />
                                      </Link>
                                    </li>
                                    <li>
                                      <p className="flex items-center gap-2 text-xss md:text-xs">
                                        1 BTC ~ 22.22413 ETH
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                                <ul className="hidden lg:flex items-center justify-center gap-4 w-5/6 mx-auto mb-8">
                                  <li>
                                    <Link
                                      href="#"
                                      className="info_tooltips flex items-center gap-2 underline text-xss md:text-xs"
                                      title="Cashback You will get 0.04% cashback of your swap to your wallet. Find out more."
                                    >
                                      Signup to get cashback{" "}
                                      <Image
                                        src={InfoIcon}
                                        alt=""
                                        className="w-4"
                                      />
                                    </Link>
                                  </li>
                                </ul>
                                <Link
                                  href="#"
                                  className="block w-full bg-gradient border border-white !rounded-full text-center text-gray-800 py-2.5 xl:py-4 px-8"
                                >
                                  Swap now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="grid items-center md:grid-cols-12 gap-4 relative z-20">
                    <div className="md:col-span-6">
                      <div className="relative z-20">
                        <h4 className="text-2xl font-bold mb-2">Step 2:</h4>
                        <h2 className="text-3xl lg:text-5xl	text-white font-bold mb-8">
                          Deposit Deposit
                        </h2>
                        <p>
                          Verify the transaction details and transfer your
                          crypto assets to the provided address securely.
                        </p>
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="bg-gray-800 relative z-20 rounded-2xl flex items-center justify-center h-full p-6 xl:p-14">
                        <div className="overflow-auto">
                          <form
                            onSubmit={(e) => e.preventDefault()}
                            className="swap-transaction cryptocurrency-platform bordered border-gradient px-4 xl:px-6 py-8 xl:py-16"
                          >
                            <div className="swap-transaction-modal flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 rounded-3xl z-20 p-4">
                              <div className="transtion-wrapper text-center">
                                <div className="transaction-icon inline-flex items-center justify-center w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-green-700/10 mb-8">
                                  <Image
                                    className="h-16 lg:h-28"
                                    src={TransactionCheck}
                                    alt=""
                                  />
                                </div>
                                <h5 className="text-lg lg:text-xl mb-4">
                                  Exchange Success!
                                </h5>
                                <h4 className="max-w-sm text-lg lg:text-xl mb-4">
                                  Your exchange took less then 5min. Thanks for
                                  using{" "}
                                  <span className="text-gradient font-bold">
                                    EXTSY
                                  </span>
                                </h4>
                                <button className="transaction-btn text-base lg:text-xl text-gradient font-semibold inline-flex items-center justify-center gap-2">
                                  View on Blockchain Explorer{" "}
                                  <Image src={ArrowGradient} alt="" />
                                </button>
                              </div>
                            </div>
                            <div className="swapstage-content grid relative lg:grid-cols-12 gap-4 mb-8 lg:mb-10">
                              <div className="md:col-span-8">
                                <div className="grid relative grid-cols-12 gap-4 mb-4 lg:mb-8">
                                  <div className="col-span-6">
                                    <div className="flex items-center text-start gap-3">
                                      <div className="w-8 h-8 xl:w-12 xl:h-12">
                                        <Image
                                          src={BtcCryptoIcon}
                                          alt=""
                                          className="w-full"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="text-gray-600 text-sm xl:text-2xl font-normal">
                                          Amount{" "}
                                        </h4>
                                        <h4 className="text-sm xl:text-xl font-normal">
                                          0.5 BTC{" "}
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-span-6">
                                    <div className="flex items-center text-start gap-3">
                                      <div className="w-8 h-8 xl:w-12 xl:h-12">
                                        <Image
                                          src={EthCrypto}
                                          alt=""
                                          className="w-full"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="text-gray-600 text-sm xl:text-2xl font-normal">
                                          You Get{" "}
                                        </h4>
                                        <h4 className="text-sm xl:text-xl font-normal">
                                          9.969218 USDC{" "}
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="text-start mb-4 lg:mb-8">
                                  <h4 className="text-gray-600 text-sm xl:text-2xl font-normal">
                                    To this wallet{" "}
                                  </h4>
                                  <h4 className="text-sm xl:text-2xl font-normal break-all">
                                    1dW138SUhk3L0ovKdef5ypcHNcxKtAwpT8{" "}
                                  </h4>
                                </div>

                                <div className="grid relative grid-cols-12 gap-4 mb-4">
                                  <div className="col-span-6">
                                    <div className="text-start">
                                      <h4 className="text-gray-600 text-sm xl:text-2xl font-normal">
                                        Time left for the transaction{" "}
                                      </h4>
                                      <h4 className="text-sm xl:text-xl font-normal">
                                        20:00
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="col-span-6">
                                    <div className="text-start">
                                      <h4 className="text-gray-600 text-sm xl:text-2xl font-normal">
                                        Estimated Rate
                                      </h4>
                                      <h4 className="text-sm xl:text-xl font-normal">
                                        1 BTC ~ 22.22413 ETH{" "}
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="md:col-span-4">
                                <div className="text-center">
                                  <Image
                                    className="inline-block px-8"
                                    src={QrCodeImgBig}
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <ul className="swapStagelist max-w-4xl mx-auto relative block md:flex items-center justify-between gap-4">
                              <li className="active flex md:block items-center gap-3 text-start md:text-center mb-12 md:mb-0">
                                <span className="swapStageicon"></span>
                                <p className="text-gray-600">Deposited</p>
                              </li>
                              <li className="active flex md:block items-center gap-3 text-start md:text-center mb-12 md:mb-0">
                                <span className="swapStageicon"></span>
                                <p className="text-gray-600">
                                  Waiting for Confirmation
                                </p>
                              </li>
                              <li className="loading flex md:block items-center gap-3 text-start md:text-center mb-12 md:mb-0">
                                <span className="swapStageicon"></span>
                                <p className="text-gray-600">Swapping</p>
                              </li>
                              <li className="flex md:block items-center gap-3 text-start md:text-center">
                                <span className="swapStageicon"></span>
                                <p className="text-gray-600">Sending to you</p>
                              </li>
                            </ul>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="grid items-center md:grid-cols-12 gap-4 relative z-20">
                    <div className="md:col-span-6">
                      <div className="relative z-20">
                        <h4 className="text-2xl font-bold mb-2">Step 3:</h4>
                        <h2 className="text-3xl lg:text-5xl	text-white font-bold mb-8">
                          Receive Your Crypto
                        </h2>
                        <p>
                          Get your swapped cryptocurrency at the most favorable
                          rate, all in just a few moments.
                        </p>
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="bg-gray-800 relative z-20 rounded-2xl flex items-center justify-center h-full p-6 xl:p-14">
                        <div className="overflow-auto">
                          <form
                            onSubmit={(e) => e.preventDefault()}
                            className="swap-transaction active cryptocurrency-platform bordered border-gradient px-4 xl:px-6 py-8 xl:py-16"
                          >
                            <div className="swap-transaction-modal flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 rounded-3xl z-20 p-4">
                              <div className="transtion-wrapper text-center">
                                <div className="transaction-icon inline-flex items-center justify-center w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-green-700/10 mb-8">
                                  <Image
                                    className="h-16 lg:h-28"
                                    src={TransactionCheck}
                                    alt=""
                                  />
                                </div>
                                <h5 className="text-lg lg:text-xl mb-4">
                                  Exchange Success!
                                </h5>
                                <h4 className="max-w-sm text-lg lg:text-xl mb-4">
                                  Your exchange took less then 5min. Thanks for
                                  using{" "}
                                  <span className="text-gradient font-bold">
                                    EXTSY
                                  </span>
                                </h4>
                                <button className="transaction-btn text-base lg:text-xl text-gradient font-semibold inline-flex items-center justify-center gap-2">
                                  View on Blockchain Explorer{" "}
                                  <Image src={ArrowGradient} alt="" />
                                </button>
                              </div>
                            </div>
                            <div className="swapstage-content grid relative lg:grid-cols-12 gap-4 mb-8 lg:mb-10">
                              <div className="md:col-span-8">
                                <div className="grid relative grid-cols-12 gap-4 mb-4 lg:mb-8">
                                  <div className="col-span-6">
                                    <div className="flex items-center text-start gap-3">
                                      <div className="w-8 h-8 xl:w-12 xl:h-12">
                                        <Image
                                          src={BtcCryptoIcon}
                                          alt=""
                                          className="w-full"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="text-gray-600 text-sm xl:text-2xl font-normal">
                                          Amount{" "}
                                        </h4>
                                        <h4 className="text-sm xl:text-xl font-normal">
                                          0.5 BTC{" "}
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-span-6">
                                    <div className="flex items-center text-start gap-3">
                                      <div className="w-8 h-8 xl:w-12 xl:h-12">
                                        <Image
                                          src={EthCrypto}
                                          alt=""
                                          className="w-full"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="text-gray-600 text-sm xl:text-2xl font-normal">
                                          You Get{" "}
                                        </h4>
                                        <h4 className="text-sm xl:text-xl font-normal">
                                          9.969218 USDC{" "}
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="text-start mb-4 lg:mb-8">
                                  <h4 className="text-gray-600 text-sm xl:text-2xl font-normal">
                                    To this wallet{" "}
                                  </h4>
                                  <h4 className="text-sm xl:text-2xl font-normal break-all">
                                    1dW138SUhk3L0ovKdef5ypcHNcxKtAwpT8{" "}
                                  </h4>
                                </div>

                                <div className="grid relative grid-cols-12 gap-4 mb-4">
                                  <div className="col-span-6">
                                    <div className="text-start">
                                      <h4 className="text-gray-600 text-sm xl:text-2xl font-normal">
                                        Time left for the transaction{" "}
                                      </h4>
                                      <h4 className="text-sm xl:text-xl font-normal">
                                        20:00
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="col-span-6">
                                    <div className="text-start">
                                      <h4 className="text-gray-600 text-sm xl:text-2xl font-normal">
                                        Estimated Rate
                                      </h4>
                                      <h4 className="text-sm xl:text-xl font-normal">
                                        1 BTC ~ 22.22413 ETH{" "}
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="md:col-span-4">
                                <div className="text-center">
                                  <Image
                                    className="inline-block px-8"
                                    src={QrCodeImgBig}
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <ul className="swapStagelist max-w-4xl mx-auto relative block md:flex items-center justify-between gap-4">
                              <li className="active flex md:block items-center gap-3 text-start md:text-center mb-12 md:mb-0">
                                <span className="swapStageicon"></span>
                                <p className="text-gray-600">Deposited</p>
                              </li>
                              <li className="active flex md:block items-center gap-3 text-start md:text-center mb-12 md:mb-0">
                                <span className="swapStageicon"></span>
                                <p className="text-gray-600">
                                  Waiting for Confirmation
                                </p>
                              </li>
                              <li className="loading flex md:block items-center gap-3 text-start md:text-center mb-12 md:mb-0">
                                <span className="swapStageicon"></span>
                                <p className="text-gray-600">Swapping</p>
                              </li>
                              <li className="flex md:block items-center gap-3 text-start md:text-center">
                                <span className="swapStageicon"></span>
                                <p className="text-gray-600">Sending to you</p>
                              </li>
                            </ul>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiperControle md:absolute md:bottom-10 xl:bottom-40 2xl:bottom-48">
                <div className="swiperPagination flex items-center justify-center md:justify-start mb-6"></div>
                <div className="HowNavigation mt-8 flex items-center justify-center md:justify-start gap-4">
                  <div id="prev" className="swiper-button-prev">
                    <Image src={AngleRight} alt="" />
                  </div>
                  <p id="numberSlides">0/0</p>
                  <div id="next" className="swiper-button-next">
                    <Image src={AngleRight} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-area relative z-20 pb-20 lg:pb-44">
        <div className="container">
          <div className="max-w-3xl text-center mx-auto mb-8 lg:mb-24">
            <h3 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
              Explore Our Powerful Features
            </h3>
            <p>
              Discover the innovative tools and capabilities that set our
              platform apart. From advanced trading options to seamless
              integration, our features are designed to enhance your crypto
              experience.
            </p>
          </div>
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-6">
              <div className="feature-box overflow-hidden bordered border-gradient p-6 lg:p-14 lg:!pb-0">
                <div className="feature-content max-w-4xl relative z-40">
                  <h4 className="text-2xl font-bold mb-2">Swap Crypto</h4>
                  <p className="mb-6">
                    Quickly swap, purchase, sell, or trade cryptocurrencies with
                    ease. Our platform offers fast and straightforward
                    transactions, allowing you to manage your crypto portfolio
                    effortlessly. Whether you&apos;re swapping assets, buying,
                    selling, or engaging in trading, our platform is designed to
                    make every process the control and flexibility you need in
                    the world of digital finance.
                  </p>
                  <Link
                    href="swap-page.html"
                    className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-8 transition"
                  >
                    Swap crypto{" "}
                    <Image
                      src={AngleRight}
                      alt=""
                      className="h-4 lg:h-5 md:ms-4"
                    />
                  </Link>
                </div>
                <div className="feature-image flex items-end justify-start lg:justify-end relative mt-8 lg:mt-0 lg:-mb-8 lg:-me-20 z-20">
                  <Image src={FeatureImage1} alt="" />
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="feature-box overflow-hidden bordered border-gradient p-6 lg:p-14 lg:!pb-9">
                <div className="feature-content max-w-xl relative z-40">
                  <h4 className="text-2xl font-bold mb-2">
                    Purchase Crypto with Fiat
                  </h4>
                  <p className="mb-6">
                    Effortlessly convert your fiat currency into crypto with a
                    simple payment using Visa or MasterCard. Enjoy a smooth and
                    secure buying experience with a wide range of options.
                  </p>
                  <Link
                    href="buysell.html"
                    className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-8 transition"
                  >
                    Purchase now{" "}
                    <Image
                      src={AngleRight}
                      alt=""
                      className="h-4 lg:h-5 md:ms-4"
                    />
                  </Link>
                </div>
                <div className="feature-image text-center lg:text-end z-20 mt-6 lg:-mt-6">
                  <div className="relative inline-block">
                    <Image src={PurchaseCard} alt="" className="w-42" />
                    <ul className="purchase-card-logo top-0 left-0 absolute w-full h-full">
                      <li className="absolute transition-all duration-700">
                        <Image src={PurchaseReact} alt="" />
                      </li>
                      <li className="absolute transition-all duration-700">
                        <Image src={PurchaseEth} alt="" />
                      </li>
                      <li className="absolute transition-all duration-700">
                        <Image src={PurchasePolygon} alt="" />
                      </li>
                      <li className="absolute transition-all duration-700">
                        <Image src={PurchaseBit} alt="" />
                      </li>
                      <li className="absolute transition-all duration-700">
                        <Image src={PurchaseReact} alt="" />
                      </li>
                      <li className="absolute transition-all duration-700">
                        <Image src={PurchaseLitecoin} alt="" />
                      </li>
                      <li className="absolute transition-all duration-700">
                        <Image src={PurchaseBNB} alt="" />
                      </li>
                      <li className="absolute transition-all duration-700">
                        <Image src={PurchaseRip} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="feature-box overflow-hidden bordered border-gradient p-6 lg:p-14 lg:!pb-9">
                <div className="feature-content max-w-4xl relative z-40">
                  <h4 className="text-2xl font-bold mb-2">
                    Experience seamless spending with our{" "}
                    <span className="text-gradient font-bold">
                      virtual card
                    </span>
                  </h4>
                  <p className="mb-6">
                    Unlock the convenience of secure crypto transactions with
                    our virtual card. Easily manage your finances and enjoy
                    global accessibility, whether you&apos;re shopping online or
                    traveling abroad.
                  </p>

                  <div className="grid md:grid-cols-12 gap-4">
                    <div className="md:col-span-6">
                      <ul className="max-w-2xl list-square ps-6 mb-6">
                        <li>Instant transactions</li>
                        <li>Fund your card with crypto</li>
                        <li>
                          Accepted worldwide, perfect for international
                          transactions
                        </li>
                        <li>No hidden fees</li>
                        <li>Multiple virtual cards available</li>
                      </ul>
                      <Link
                        href="virtualcard.html"
                        className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-8 transition"
                      >
                        Get yours{" "}
                        <Image
                          src={AngleRight}
                          alt=""
                          className="h-4 lg:h-5 md:ms-4"
                        />
                      </Link>
                    </div>
                    <div className="md:col-span-6">
                      <div className="feature-image product-feature-image h-[450px] flex justify-center overflow-hidden -mb-10 z-20">
                        <Image
                          src={FreeCard}
                          alt=""
                          className="freeCard w-full max-w-80 object-top object-contain transition duration-700"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="feature-box overflow-hidden bordered border-gradient p-6 lg:p-14 lg:!pb-0">
                <div className="feature-content max-w-2xl relative z-40">
                  <h4 className="text-2xl font-bold mb-2">
                    Win Big with Exclusive Crypto Raffles
                  </h4>
                  <p className="mb-6">
                    Join our exciting crypto raffles and stand a chance to win
                    incredible prizes. With easy entry and transparent draws,
                    our platform offers a fun and rewarding way to engage with
                    the crypto community. Whether you&apos;re a seasoned trader
                    or new to the world of digital assets, our raffles provide
                    an opportunity to multiply your holdings and enjoy exclusive
                    rewards.
                  </p>
                  <Link
                    href="raffle-page.html"
                    className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-8 transition"
                  >
                    Get your ticket{" "}
                    <Image
                      src={AngleRight}
                      alt=""
                      className="h-4 lg:h-5 md:ms-4"
                    />
                  </Link>
                </div>
                <div className="feature-image crypto-raffles-image relative flex items-end justify-center lg:justify-end mt-6 lg:-mt-20 lg:pe-10 z-20">
                  <Image
                    src={CryptoRaffles}
                    alt=""
                    className="max-h-96 xl:max-h-fit"
                  />
                  <Image
                    src={CryptoRaffles}
                    alt=""
                    className="raffles-rotation max-h-96 xl:max-h-fit absolute top-0 transition duration-1000"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="feature-box overflow-hidden bordered border-gradient p-6 lg:p-14 lg:!pb-0">
                <div className="feature-content max-w-4xl relative z-40">
                  <h4 className="text-2xl font-bold mb-2">
                    Revolutionize Your Trading with Extsy
                  </h4>
                  <p className="mb-6">
                    Sign up for a free account to unlock exclusive benefits and
                    maximize your financial potential. Enjoy features that
                    enhance your trading experience and optimize returns, all
                    while keeping your funds secure and fully under your
                    control.
                  </p>
                  <Link
                    href="trading-page.html"
                    className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-8 transition"
                  >
                    Learn more{" "}
                    <Image
                      src={AngleRight}
                      alt=""
                      className="h-4 lg:h-5 md:ms-4"
                    />
                  </Link>
                </div>
                <div className="feature-image overflow-hidden h-56 lg:h-[410px] relative flex items-start justify-center mt-6 z-20">
                  <div className="bg-black absolute left-0 top-0 w-full h-full z-10"></div>
                  <Image src={TrandingDashboard} alt="" />
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="feature-box overflow-hidden bordered border-gradient p-6 lg:p-14 lg:!pb-0">
                <div className="feature-content max-w-4xl relative z-40">
                  <h4 className="text-2xl font-bold mb-2">
                    Join Our Partnership Program and Grow Together
                  </h4>
                  <p className="mb-6">
                    Collaborate with us to expand your reach and increase your
                    revenue. Our partner program offers exclusive benefits,
                    support, and opportunities to help you succeed in the crypto
                    space.
                  </p>
                  <Link
                    href="contact.html"
                    className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-8 transition"
                  >
                    Contact us{" "}
                    <Image
                      src={AngleRight}
                      alt=""
                      className="h-4 lg:h-5 md:ms-4"
                    />
                  </Link>
                </div>
                <div className="feature-image relative flex items-start -mx-14 z-20">
                  <Image src={PartnershipProgram} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
