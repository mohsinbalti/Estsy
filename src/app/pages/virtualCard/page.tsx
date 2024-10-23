import FAQs from "@/components/FAQs";
import React from "react";
import HeroElipse from "../../assets/images/hero-elipse.svg";
import HeroGrid from "../../assets/images/hero-grid.svg";
import HeroVirtualCard from "../../assets/images/virtual-card1.svg";
import HeroVirtualCardSecure from "../../assets/images/hero-virtualcard-secure.png";
import HeroVirtualCardMobile from "../../assets/images/hero-virtualcard-mobile.png";
import HeroVirtualCardApp from "../../assets/images/hero-virtualcard-app.png";
import HeroVirtualCard2 from "../../assets/images/hero-virtualcard-star2.png";
import VirtualCardCard from "../../assets/images/hero-virtualcard-card.png";
import AngleRight from "../../assets/images/angle-right.svg";
import Card from "../../assets/images/card.svg";
import FreeCard from "../../assets/images/FreeCard.png";
import ReceiveSquare from "../../assets/images/receive-square.svg";
import BtcCrypto from "../../assets/images/btc-crypto-icon.svg";
import DottedMap from "../../assets/images/dotted_map.png";
import Square2 from "../../assets/images/send-sqaure-2.svg";
import ThreeDots from "../../assets/images/three-dots.svg";
import UpRight from "../../assets/images/up-right.svg";
import CardReceive from "../../assets/images/card-receive.svg";
import ConnectWallet from "../../assets/images/connect-wallet.png";
import CryptoIcons from "../../assets/images/crypto-icons.png";
import TeslaIcon from "../../assets/images/tesla-icon.svg";
import CardAdd from "../../assets/images/card-add.svg";
import SecurityCard from "../../assets/images/security-card.svg";
import CardShield from "../../assets/images/card-shield.svg";
import GooglePayBy from "../../assets/images/google-payby.png";
import ExtsyLogo from "../../assets/images/extsy-logo-icon.svg";
import CardLayers from "../../assets/images/CardLayers.png";
import CompanyLogo1 from "../../assets/images/company-logo1.svg";
import CompanyLogo2 from "../../assets/images/company-logo2.svg";
import CompanyLogo3 from "../../assets/images/company-logo3.svg";
import CompanyLogo4 from "../../assets/images/company-logo4.svg";
import CompanyLogo5 from "../../assets/images/company-logo5.svg";
import CompanyLogo6 from "../../assets/images/company-logo6.svg";
import CompanyLogo7 from "../../assets/images/company-logo7.svg";
import CompanyLogo8 from "../../assets/images/company-logo8.svg";
import Image from "next/image";
import Link from "next/link";

const VirtualCard = () => {
  return (
    <div>
      <section className="hero-area relative pt-24 lg:pt-40 pb-20 lg:pb-32">
        <div className="hidden lg:block hero-elipse absolute left-0 top-0">
          <Image src={HeroElipse} alt="" />
        </div>
        <div className="hero-grid absolute left-0 top-0">
          <Image src={HeroGrid} alt="" />
        </div>

        <div className="container">
          <div className="grid items-center md:grid-cols-12 gap-4">
            <div className="md:col-span-6">
              <div className="hero-content relative z-10">
                <h1
                  data-aos="fade-right"
                  className="text-3xl lg:text-5xl  leading-tight text-white font-normal mb-4 lg:mb-8"
                >
                  Manage your payments with{" "}
                  <span className="text-gradient">Virtual Card</span>
                </h1>
                <p className="max-w-3xl mb-6 pe-0 xl:pe-40">
                  Seamless, Secure, and Global Payments with Your Crypto Virtual
                  Card
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <Link
                    className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-5 lg:px-12 transition"
                    href=""
                  >
                    Get your card{" "}
                    <Image
                      src={AngleRight}
                      alt=""
                      className="h-4 lg:h-5 md:ms-4"
                    />
                  </Link>
                  <Link
                    className="black-btn inline-flex items-center gap-2 bg-gray-700 hover:bg-amber-200 rounded-full text-white hover:text-gray-700 py-3 lg:py-3.5 px-5 lg:px-12 transition "
                    href=""
                  >
                    Open an account{" "}
                    <Image
                      src={AngleRight}
                      alt=""
                      className="h-4 lg:h-5 md:ms-4"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className=" md:col-span-4 overflow-hidden md:overflow-visible">
              <div className="flex items-center justify-start lg:justify-center">
                <div className="hero-virtualcard-image relative inline-block ">
                  <Image
                    src={HeroVirtualCardMobile}
                    alt=""
                    className="inline-block max-h-[300] lg:max-h-fit relative  z-20 lg:pe-10"
                  />
                  <ul className="hero-virtualcard-mockup absolute top-0   w-full h-full">
                    <li className="absolute transition-all duration-[1500ms] z-10">
                      <Image
                        src={HeroVirtualCardSecure}
                        alt=""
                        className="max-h-[110px] lg:max-h-fit"
                      />
                    </li>
                    <li className="absolute transition-all duration-[1500ms] z-30">
                      <Image
                        src={HeroVirtualCardApp}
                        alt=""
                        className="max-h-[110px] lg:max-h-fit"
                      />
                    </li>
                    <li className="absolute transition-all duration-[1500ms] z-30">
                      <Image
                        src={VirtualCardCard}
                        alt=""
                        className="max-h-[220px] lg:max-h-fit"
                      />
                    </li>
                    <li className="absolute transition-all duration-[1500ms] z-10">
                      <Image src={HeroVirtualCard} alt="" />
                    </li>
                    <li className="absolute transition-all duration-[1500ms] z-20">
                      <Image src={HeroVirtualCard2} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-area pb-20 lg:pb-44 mt-20 lg:mt-0">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center relative z-10 mb-8 lg:mb-16">
            <h1 className="text-2xl xl:text-4xl leading-tight text-white">
              Feel the best experience with
              <span className="text-gradient font-bold harmonyos-sans-bold">
                {" "}
                Our Features
              </span>
            </h1>
          </div>
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-6">
              <div className="product-feature-item w-full h-full relative z-20 bg-white rounded-3xl p-6 lg:p-10">
                <div className="grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-6">
                    <div className="product-feature-logo bg-gradient flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full mb-8">
                      <Image src={CardAdd} alt="" className="h-4 lg:h-6" />
                    </div>
                    <div className="product-feature-content max-w-4xl">
                      <h4 className="text-gray-700 text-2xl font-bold mb-4">
                        Easy Top-up
                      </h4>
                      <p className="text-gray-800 md:text-gray-600">
                        Top up your card simply by depositing crypto and enjoy
                        seamless shopping.
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <div className="product-feature-image mt-6 md:mt-0">
                      <Image src={ConnectWallet} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 lg:col-span-3">
              <div className="product-feature-item w-full h-full relative z-20 bg-white rounded-3xl p-6 lg:p-10 overflow-hidden">
                <div className="product-feature-logo bg-gradient flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full mb-8">
                  <Image src={CardReceive} alt="" className="h-4 lg:h-6" />
                </div>
                <div className="product-feature-content max-w-40">
                  <h4 className="text-gray-700 text-2xl font-bold mb-2">
                    Make payment with crypto
                  </h4>
                </div>
                <div className="product-feature-image max-h-56 overflow-hidden md:overflow-visible md:max-h-fit mt-6 md:mt-0">
                  <Image
                    src={CryptoIcons}
                    alt=""
                    className="product-coinImage"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-6 lg:col-span-3">
              <div className="product-feature-item w-full h-full relative z-20 bg-white rounded-3xl p-6 lg:p-10 overflow-hidden">
                <div className="product-feature-logo bg-gradient flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full mb-8">
                  <Image src={SecurityCard} alt="" className="h-4 lg:h-6" />
                </div>
                <div className="product-feature-content max-w-4xl">
                  <h4 className="product-title-hover text-gray-700 text-2xl font-bold mb-4 transition-all duration-1000">
                    Trusted and secure.
                  </h4>
                </div>
                <div className="product-feature-image mt-6 md:mt-0 flex items-end justify-center">
                  <Image
                    src={CardShield}
                    alt=""
                    className="card-sheildImage transition duration-1000"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="product-feature-item w-full h-full relative z-20 bg-white rounded-3xl pt-6 px-6">
                <div className="product-feature-logo bg-gradient flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full mb-8">
                  <Image src={Card} alt="" className="h-4 lg:h-6" />
                </div>
                <div className="product-feature-content max-w-4xl">
                  <h4 className="text-gray-700 text-2xl font-bold mb-4">
                    Instant Setup and Accessibility
                  </h4>
                  <p className="text-gray-800 md:text-gray-600 mb-6">
                    Get your virtual card instantly without any hassle. No need
                    to wait for a physical card – simply activate it and start
                    using it for your transactions right away.
                  </p>
                  <ul className="list-square text-gray-600 ps-5 mb-6">
                    <li>Instant transaction</li>
                    <li>Widely-accepted</li>
                    <li>Compatible with Apple Pay/Google Pay</li>
                  </ul>
                </div>
                <div className="product-feature-image mt-6 md:mt-0 h-80 flex justify-center overflow-hidden">
                  <Image
                    src={FreeCard}
                    alt=""
                    className="freeCard w-full max-w-80 object-top object-contain transition duration-1000"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="product-feature-item w-full h-full relative z-20 bg-white rounded-3xl pt-6 px-6">
                <div className="product-feature-logo bg-gradient flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full mb-8">
                  <Image src={ReceiveSquare} alt="" className="h-4 lg:h-6" />
                </div>
                <div className="product-feature-content max-w-4xl">
                  <h4 className="text-gray-700 text-2xl font-bold mb-4">
                    Accepted worldwide
                  </h4>
                  <p className="text-gray-800 md:text-gray-600 mb-6">
                    Use your virtual card anywhere that accepts Visa or
                    Mastercard, whether you’re shopping online or subscribing to
                    services worldwide.
                  </p>
                </div>
                <div className="product-feature-image mt-6 md:mt-0">
                  <Image src={DottedMap} alt="" className="absolute bottom-0" />
                  <div className="product-transfer-box hover:scale-105 relative z-20 w-56 lg:w-96 bg-black shadow-xl rounded-3xl p-5 lg:p-8 transition duration-1000">
                    <div className="flex items-center justify-between gap-2 mb-8 lg:mb-14">
                      <div className="bg-pink-500 flex items-center justify-center rounded-full w-11 h-11">
                        <Image src={Square2} alt="" />
                      </div>
                      <button className="border border-gray-100 text-gray-100 text-xs py-2 px-4 rounded-2xl">
                        Free
                      </button>
                    </div>
                    <p className="text-state-200 text-xss lg:text-base mb-3">
                      Transfer
                    </p>
                    <ul className="flex bg-white items-center justify-between gap-2 p-2 !pe-3 rounded-full mb-8 lg:mb-14">
                      <li>
                        <Image src={BtcCrypto} alt="" className="h-6 lg:h-10" />
                      </li>
                      <li>
                        <Image src={ThreeDots} alt="" className="h-2" />
                      </li>
                      <li>
                        <Image src={UpRight} alt="" />
                      </li>
                      <li>
                        <Image src={ThreeDots} alt="" className="h-2" />
                      </li>
                      <li>
                        <Image src={TeslaIcon} alt="" className="h-4 lg:h-7" />
                      </li>
                    </ul>
                    <p className="text-state-200 text-xss lg:text-base mb-3">
                      Amount
                    </p>
                    <p className="text-gray-800 font-black text-gradient  text-sm lg:text-4xl mb-3">
                      $30,546.00
                    </p>
                    <p className="text-state-200 text-xss lg:text-base mb-3">
                      1-3 business days
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
            <div className="md:col-span-8">
              <div className="about-content max-w-3xl">
                <h4 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
                  Pay quickly and safely with{" "}
                  <span className="text-amber-100">Apple</span> or{" "}
                  <span className="text-gradient font-bold">Google Pay</span>
                </h4>
                <p className="mb-3">
                  Experience the convenience of the EXTSY Virtual Card with
                  contactless payments via Apple Pay or Google Pay. No need to
                  reach for your wallet—spend your assets effortlessly using
                  your device wherever these symbols are accepted.
                </p>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="about-image text-center relative mt-6 md:mt-0">
                <Image src={GooglePayBy} alt="" className="inline-block" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="company-crypto-area pb-20 lg:pb-44">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto mb-8 lg:mb-24">
            <h3 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
              200+ merchants accept{" "}
              <span className="text-gradient font-bold">
                Extsy Virtual Card
              </span>{" "}
              worldwide
            </h3>
            <p className="max-w-md mx-auto">
              Many companies have tried using Extsy and they trust the safety of
              their money
            </p>
          </div>
          <div className="company-logolist overflow-auto lg:overflow-visible">
            <div className="w-[44rem] lg:w-auto flex flex-nowrap lg:flex-wrap items-center justify-center gap-4">
              <div className="company-logo min-w-40 flex items-center justify-center bg-white rounded-xl lg:rounded-3xl py-6 lg:py-14">
                <Image src={CompanyLogo1} alt="" className="h-5 lg:h-8" />
              </div>
              <div className="company-logo min-w-40 flex items-center justify-center bg-white rounded-xl lg:rounded-3xl py-6 lg:py-14">
                <Image src={CompanyLogo2} alt="" className="h-5 lg:h-8" />
              </div>
              <div className="company-logo min-w-40 flex items-center justify-center bg-white rounded-xl lg:rounded-3xl py-6 lg:py-14">
                <Image src={CompanyLogo3} alt="" className="h-5 lg:h-8" />
              </div>
              <div className="company-logo min-w-40 flex items-center justify-center bg-white rounded-xl lg:rounded-3xl py-6 lg:py-14">
                <Image src={CompanyLogo4} alt="" className="h-5 lg:h-8" />
              </div>
              <div className="company-logo min-w-40 flex items-center justify-center bg-white rounded-xl lg:rounded-3xl py-6 lg:py-14">
                <Image src={CompanyLogo5} alt="" className="h-5 lg:h-8" />
              </div>
              <div className="company-logo min-w-40 flex items-center justify-center bg-white rounded-xl lg:rounded-3xl py-6 lg:py-14">
                <Image src={CompanyLogo6} alt="" className="h-5 lg:h-8" />
              </div>
              <div className="company-logo min-w-40 flex items-center justify-center bg-white rounded-xl lg:rounded-3xl py-6 lg:py-14">
                <Image src={CompanyLogo7} alt="" className="h-5 lg:h-8" />
              </div>
              <div className="company-logo min-w-40 flex items-center justify-center bg-white rounded-xl lg:rounded-3xl py-6 lg:py-14">
                <Image src={CompanyLogo8} alt="" className="h-5 lg:h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="callToAction-crypto-area pb-20 lg:pb-44">
        <div className="container">
          <div className="calltoaction-wrapper overflow-hidden max-w-7xl bg-white mx-auto text-center relative z-10 rounded-3xl rounded-br-none p-6 lg:p-26">
            <div className="relative max-w-2xl mx-auto">
              <h3 className="text-gray-800 text-2xl lg:text-4xl font-bold mb-3 lg:mb-6">
                Get the Extsy Virtual Card.
              </h3>
              <p className="mb-6 text-gray-600 text-lg lg:text-2xl">
                With this platform,you can access your account anywhere, anytime
                for balance and so much more.
              </p>
              <Link
                className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-5 lg:px-12 transition"
                href=""
              >
                Get your card{" "}
                <Image src={AngleRight} alt="" className="h-4 lg:h-5 md:ms-4" />
              </Link>
            </div>
            <ul className="calltoaction-image absolute w-full h-full bottom-0 left-0 transition">
              <li className="absolute transition-all duration-1000 z-30">
                <Image src={FreeCard} alt="" className="w-full" />
              </li>
              <li className="absolute transition-all duration-1000 z-20">
                <Image src={CardLayers} alt="" className="w-full" />
              </li>
              <li className="absolute transition-all duration-1000 z-10">
                <Image src={ExtsyLogo} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <FAQs />
    </div>
  );
};

export default VirtualCard;
