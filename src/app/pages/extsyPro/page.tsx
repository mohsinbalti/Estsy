import FAQs from "@/components/FAQs";
import React from "react";
import AngleRight from "../../assets/images/angle-right.svg";
import BaseCrypto from "../../assets/images/base-crypto-icon.svg";
import BtcCrypto from "../../assets/images/btc-crypto-icon.svg";
import AnchorTopArrow from "../../assets/images/top-anchor-arrow.svg";
import BNBCrypto from "../../assets/images/bnb-crypto-icon.svg";
import CheckWhite from "../../assets/images/check-white.svg";
import extsyProBg from "../../assets/images/extsy-pro-bg.png";
import Image from "next/image";
import Link from "next/link";
import TableImage from "../../assets/images/pro-table-image.svg";
import Vector from "../../assets/images/Vector.svg";
import EtheriumCrypto from "../../assets/images/Frame 48100353.svg";
import ADACrypto from "../../assets/images/ada-crypto-icon.svg";
import CurveyArrow from "../../assets/images/Group 1244831082.svg";
import TetherCashbackSVG from "../../assets/images/Group 1244831084.svg";
import btcCashbackSVG from "../../assets/images/Group 1244831083.svg";
import PrimeSVG from "../../assets/images/prime.svg";
import SupremeSVG from "../../assets/images/supreme.svg";
import QuantlaneSVG from "../../assets/images/quantlane.svg";
import EarningsPro from "@/components/EarningsPro";

const ExtsyPro = () => {
  return (
    <div>
      <section
        className="hero-area bg-contain md:bg-cover bg-no-repeat bg-bottom relative pt-24 lg:pt-56 "
        style={{
          backgroundImage: `url(${extsyProBg.src});`,
        }}
      >
        {/* <div className="hidden lg:block hero-elipse absolute left-0 top-0">
          <Image src={HeroElipse} alt="" />
        </div> */}

        <div className="container">
          <div className="hero-content text-center relative z-40">
            <h1
              data-aos="fade-up"
              className="text-3xl lg:text-[50px] 2xl:text-[64px] font-bold  leading-tight text-white mb-4 lg:mb-8"
            >
              Upgrade to <span className="text-gradient">Extsy Pro</span>
            </h1>
            <p className="max-w-3xl mx-auto mb-6">
              Upgrade your trading with EXTSY Pro. Effortlessly swap, buy, sell,
              and trade DeFi assets on a transparent, user-friendly platform.
              Access real-time data, advanced tools, and exclusive features to
              maximize your earning potential.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                className="white-btn inline-flex items-center  py-3 lg:py-3.5 px-5 lg:px-8 transition 
             rounded-[41px] text-[#0B0A0A] bg-gradient-to-r from-[#FEF9CC] via-[#F6DBD4] to-[#F0C2DB]
              font-semibold text-[18px] leading-[26px]"
                href=""
              >
                Earn like a Pro
                <Image
                  src={AngleRight}
                  alt=""
                  className="h-4 lg:h-[12px] lg:w-[8px] text-[#0B0A0A] md:ms-4"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="flex  items-center relative justify-center lg:mt-[100px] pb-16 lg:pb-28">
        <Image src={TableImage} alt="" />
      </div>

      <section className="about-area relative z-40 pb-20 lg:pb-44">
        <div className="container">
          <div className=" text-center">
            <h4 className="text-2xl lg:text-[28px] text-[#FAFAFA] font-bold leading-[120%] sm:font-bold mb-6 lg:mb-12">
              🔥 Last 24 hours Market Trend
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
                      <Image src={EtheriumCrypto} alt="" className="w-[24px]" />
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
                      <Image src={ADACrypto} alt="" className="w-[24px]" />
                      <h5 className="text-base text-[#F0C2DB]">ADA</h5>
                    </div>
                    <Image src={Vector} alt="" />
                    <div className="flex items-center justify-center gap-2 rounded-[1157.782px] bg-[#383434]  px-4 xl:px-[22px] py-2 ">
                      <Image src={BaseCrypto} alt="" className="w-[24px]" />
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
                      <Image src={BNBCrypto} alt="" className="w-[24px]" />
                      <h5 className="text-base text-[#F0C2DB]">BNB</h5>
                    </div>
                    <Image src={Vector} alt="" />
                    <div className="flex items-center justify-center gap-2 rounded-[1157.782px] bg-[#383434]  px-4 xl:px-[22px] py-2 ">
                      <Image src={BaseCrypto} alt="" className="w-[24px]" />
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

      <section className="cryptocurrency-area ">
        <div className="container">
          <div className="cryptocurrency-wrapper relative z-10">
            <div className="grid md:grid-cols-12 gap-4 items-center relative z-10">
              <div className="md:col-span-6 ">
                <div className="max-w-[530px]">
                  <h2 className="text-2xl lg:text-4xl text-white font-semibold sm:font-bold mb-6">
                    Maximize Your Earnings with a{" "}
                    <span className="text-amber-100 font-bold">
                      PRO Account
                    </span>{" "}
                  </h2>
                  <p className=" mb-6 text-[#FEF8C3] text-[18px]">
                    Accessible Across All Platforms!
                    <span className="text-white">
                      {" "}
                      Unlock premium features with EXTSY PRO and elevate your
                      crypto trading.
                    </span>
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-6 mt-12">
                    <Link
                      className="white-btn inline-flex items-center justify-center gap-2 font-semibold bg-white  rounded-full text-[#0B0A0A] w-[200px] h-[56px] transition  bg-gradient-to-r from-[#FEF9CC] via-[#F6DBD4] to-[#F0C2DB]"
                      href=""
                    >
                      Register
                    </Link>
                    <Link
                      className="black-btn inline-flex items-center justify-center gap-2 w-[232px] h-[56px] hover:rgba(255,255,255,0.05) rounded-full text-[#FAFAFA] font-semibold   transition bg-[rgba(255,255,255,0.05)]  "
                      href=""
                    >
                      View Plan{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" about-area overflow-hidden relative lg:pb-44 mt-20">
        <div className="container">
          <div className="cashback-wrapper relative z-10 ">
            <div className="grid overflow-hidden items-center md:grid-cols-12 gap-4 p-[48px] pr-[64px] rounded-3xl bg-[#221F1F]">
              <div className="md:col-span-7">
                <div className="about-content max-w-3xl">
                  <h4 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
                    Earn{" "}
                    <span className="text-gradient font-bold">Cashback</span>{" "}
                    with Every{" "}
                    <span className="text-gradient font-bold">Swap</span>
                  </h4>
                  <p className="mb-4">
                    Make your swaps work for you with our Pro cashback program!
                    Earn cashback on every swap, starting at 0.1%. Accumulate
                    your rewards, withdraw them, or spend as you
                    choose—it&apos;s all in your hands!
                  </p>
                  <p className="mb-6">
                    Effortlessly track your past swaps with our intuitive
                    Transaction History feature. It&apos;s easy to access and
                    the perfect tool to monitor and manage your earnings.
                  </p>
                  <Link
                    className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-[#0B0A0A] font-semibold text-[18px] py-3 lg:py-3.5 px-5 lg:px-12 transition bg-gradient-to-r from-[#FEF9CC] via-[#F6DBD4] to-[#F0C2DB]"
                    href=""
                  >
                    Swap now{" "}
                  </Link>
                </div>
              </div>
              <div className="md:col-span-5 rotate-[60deg] relative flex items-center">
                <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                  <div>
                    <Image
                      src={TetherCashbackSVG}
                      alt=""
                      className="w-[200px]"
                    />
                  </div>

                  <div>
                    <Image src={btcCashbackSVG} alt="" className="w-[200px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" my-6">
        <EarningsPro />
      </div>

      {/* <section className="about-area relative pb-20 lg:pb-44">
        <div className="container">
          <div className="grid items-center md:grid-cols-12 gap-4">
            <div className="md:col-span-6 md:order-4">
              <div className="about-content max-w-3xl relative z-20">
                <h4 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
                  <span className="text-gradient">Safeguard</span> Your Funds
                  from Financial Crimes
                </h4>
                <p className="mb-6">
                  Stay protected with EXTSY’s advanced AML service. Screen
                  suspicious wallets for potential illegal activity, helping to
                  secure your assets from fraud and scams.
                </p>
                <Link
                  href="#"
                  className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 px-8 lg:px-12 transition"
                >
                  Register now{" "}
                  <Image
                    src={AngleRight}
                    alt=""
                    className="h-4 lg:h-5 md:ms-4"
                  />
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 md:order-1">
              <div className="about-image saveguard-lock-image text-center mt-6 md:mt-0">
                <div className="group relative inline-flex">
                  <div className="absolute top-1/4 bottom-0 m-auto z-20">
                    <Image src={Locks} alt="" />
                    <ul className="absolute top-0 flex items-center justify-center">
                      <li className="group-hover:-translate-y-20 translate-y-0 transition-all duration-1000">
                        <Image src={LockShield} alt="" />
                      </li>
                      <li className="relative bottom-8">
                        <Image src={LockBitcoin} alt="" />
                      </li>
                      <li className="group-hover:-translate-y-40 translate-y-0 relative bottom-8 transition-all duration-1000">
                        <Image src={LockRoundCheck} alt="" />
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center absolute left-0 right-0 top-0 group-hover:translate-y-24 translate-y-56 group-hover:opacity-100 opacity-0 transition-all duration-[2000ms] -mt-20">
                    <Image
                      className="group-hover:scale-100 scale-y-0 w-32 lg:w-48 transition-all duration-[2000ms]"
                      src={Bars}
                      alt=""
                    />
                  </div>
                  <Image src={LightEffectBg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area relative pb-20 lg:pb-44">
        <div className="hidden lg:block pricing-gradient absolute right-0 top-0">
          <Image src={RevulutionGradient} alt="" />
        </div>
        <div className="container">
          <div className="grid items-center md:grid-cols-12 gap-4">
            <div className="md:col-span-6">
              <div className="about-content max-w-3xl">
                <h4 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
                  Revolutionize your trading with{" "}
                  <span className="text-gradient font-bold">EXTSY</span>
                </h4>
                <p className="mb-6">
                  Sign up for a free account to unlock exclusive benefits and
                  maximize your financial potential. Enjoy features that enhance
                  your trading experience and optimize returns, all while
                  keeping your funds secure and fully under your control.
                </p>
                <Link
                  href="#"
                  className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 px-8 lg:px-12 transition"
                >
                  Learn More{" "}
                  <Image
                    src={AngleRight}
                    alt=""
                    className="h-4 lg:h-5 md:ms-4"
                  />
                </Link>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="text-center">
                <div className="about-image mt-6 md:mt-0 relative inline-block">
                  <Image className="px-10" src={MobileApp} alt="" />
                  <div className="crypto-wallet-box w-32 lg:w-44 !absolute top-6 -right-2 lg:-right-20 z-40 bordered border-gradient !rounded-2xl p-4">
                    <div className="flex items-center relative z-20 gap-3 mb-4">
                      <div className="w-8 h-8 xl:w-10 xl:h-10">
                        <Image src={BtcCrypto} alt="" className="w-full" />
                      </div>
                      <div className="text-start">
                        <h4 className="text-xs xl:text-base font-bold">
                          {" "}
                          BTC{" "}
                        </h4>
                        <p className="text-xss xl:text-sm">Bitcoin</p>
                      </div>
                    </div>
                    <div className="relative text-start z-20 mb-2">
                      <h4 className="text-sm lg:text-xl font-bold">$15,240</h4>
                      <p className="text-xs lg:text-base text-red-800">
                        0.25%h
                      </p>
                    </div>
                    <div className="chart-graph-image hidden md:block">
                      <Image
                        className=" relative z-10"
                        src={WalletGraph}
                        alt=""
                      />
                    </div>
                    <div className="chart-graph-image block md:hidden">
                      <Image
                        className="relative z-10"
                        src={GraphImage}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="crypto-wallet-box w-32 lg:w-44 !absolute bottom-20 -left-2 lg:-left-20 z-40 bordered border-gradient !rounded-2xl p-4">
                    <div className="flex items-center relative z-20 gap-3 mb-4">
                      <div className="w-8 h-8 xl:w-10 xl:h-10">
                        <Image src={EthCrypto} alt="" />
                      </div>
                      <div className="text-start">
                        <h4 className="text-xs xl:text-base font-bold">
                          {" "}
                          ETH{" "}
                        </h4>
                        <p className="text-xss xl:text-sm">Ethereum</p>
                      </div>
                    </div>

                    <div className="relative text-start z-20 mb-2">
                      <h4 className="text-sm lg:text-xl font-bold">$1,150</h4>
                      <p className="text-xs lg:text-base text-green-800">
                        0.89%
                      </p>
                    </div>
                    <div className="chart-graph-image2 hidden md:block">
                      <Image
                        className="w-full relative z-10"
                        src={WalletGraph}
                        alt=""
                      />
                    </div>
                    <div className="chart-graph-image2 block md:hidden">
                      <Image
                        className="w-full relative z-10"
                        src={GraphImage2}
                        alt=""
                      />
                    </div>
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
            <div className="md:col-span-6 md:order-4">
              <div className="about-content max-w-3xl">
                <h4 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
                  Experience seamless spending with our{" "}
                  <span className="text-amber-100">virtual card</span>
                </h4>
                <p className="mb-6">
                  Get your virtual card instantly without any hassle. No need to
                  wait for a physical card – simply activate it and start using
                  it for your transactions right away.
                </p>
                <ul className="max-w-2xl list-square ps-5 mb-6">
                  <li>
                    Make purchases instantly using your virtual card with no
                    delays.
                  </li>
                  <li>
                    Your virtual card is accepted by merchants worldwide, both
                    online and in-store.
                  </li>
                  <li>
                    Easily link your virtual card with Apple Pay or Google Pay
                    for fast, contactless payments.
                  </li>
                </ul>
                <Link
                  href="#"
                  className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 px-8 lg:px-12 transition"
                >
                  Get yours{" "}
                  <Image
                    src={AngleRight}
                    alt=""
                    className="h-4 lg:h-5 md:ms-4"
                  />
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 md:order-1">
              <div className="about-image mt-6 md:-mt-64">
                <ul className="virtual-card min-h-96 flex justify-center relative mb-28 lg:mb-0">
                  <li className="absolute z-50 transition-all duration-1000">
                    <Image src={VirtualCard1} alt="" />
                  </li>
                  <li className="absolute z-40 transition-all duration-1000">
                    <Image src={VirtualCard2} alt="" />
                  </li>
                  <li className="absolute z-30 transition-all duration-1000">
                    <Image src={VirtualCard3} alt="" />
                  </li>
                  <li className="absolute z-20 transition-all duration-1000">
                    <Image src={VirtualCard4} alt="" />
                  </li>
                </ul>
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
                  Cut Costs with Crypto{" "}
                  <span className="text-amber-100">Swaps</span>
                </h4>
                <p className="mb-6">
                  Make the most of your account by swapping crypto seamlessly
                  with low fees, fast transactions, and top-tier security.
                </p>
                <ul className="max-w-2xl list-square ps-5 mb-6">
                  <li>Quick and transparent transactions.</li>
                  <li>
                    Support for 30+ blockchains for smooth and efficient swaps.
                  </li>
                  <li>Hassle-free withdrawals with no extra charges.</li>
                  <li>Top-tier security for all your transactions.</li>
                </ul>
                <div className="flex items-center gap-2">
                  <Link
                    href="#"
                    className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 px-8 lg:px-12 transition"
                  >
                    Earn like a Pro{" "}
                    <Image
                      src={AngleRight}
                      alt=""
                      className="h-4 lg:h-5 md:ms-4"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="black-btn inline-flex items-center gap-2 bg-gray-700 hover:bg-amber-200 rounded-full text-white hover:text-gray-700 py-3 px-8 lg:px-12 transition "
                  >
                    Swap now{" "}
                    <Image
                      src={AngleRight}
                      alt=""
                      className="h-4 lg:h-5 md:ms-4"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="about-image lg:text-center relative mt-6 md:mt-0">
                <Image className="inline-block" src={CustCostImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="pricing-area relative pb-20 lg:pb-44 mt-40">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-24">
            <h3 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
              Select the{" "}
              <span className="text-gradient font-bold">Perfect Plan</span> for
              You
            </h3>
            <p>
              While Extsy offers free services for everyone, our paid crypto
              membership plans unlock additional benefits and exclusive
              features. Upgrade today to maximize your earnings and put your
              funds to work!
            </p>
          </div>
          <nav
            id="tab-navs"
            className="pricing-tabs md:hidden bordered border-gradient !rounded-xl flex items-center justify-center gap-4 p-2 mb-10"
          >
            <Link
              href="#first"
              className="relative block text-center text-xs xl:text-lg w-full rounded-xl p-3 active"
            >
              <span>Swap Prime</span>
            </Link>
            <Link
              href="#second"
              className="relative block text-center text-xs xl:text-lg w-full rounded-xl p-3"
            >
              <span>Swap Supreme</span>
            </Link>
            <Link
              href="#third"
              className="relative block text-center text-xs xl:text-lg w-full rounded-xl p-3"
            >
              <span>Swap Quantlane</span>
            </Link>
          </nav>
          <div
            id="tab-contents"
            className="tabs-pricing-wrapper max-w-7xl mx-auto md:grid md:grid-cols-12 gap-8"
          >
            <div
              id="first"
              className="tab-content md:col-span-6 lg:col-span-4 bg-[#161414] rounded-3xl"
            >
              <div className="pricing-plan-box relative rounded-2xl p-6 lg:p-8 lg:px-10">
                <div className="relative z-20">
                  <div className=" px-3 py-2 mb-3 lg:mb-5 flex gap-3 rounded-[999px] justify-center lg:w-28 items-center bg-[rgba(250,250,250,0.10)] ">
                    <Image src={PrimeSVG} alt="" />
                    <h4 className="text-white text-[14px]  font-normal ">
                      Prime
                    </h4>
                  </div>
                  <div className=" flex items-center justify-between">
                    <div className=" flex  gap-0 items-center">
                      <h2 className="text-[#FAFAFA] font-metropolis text-[41px]  lg:text-[50px] leading-tight font-normal">
                        $0
                      </h2>
                      <p className=" mt-10 text-[24px] font-bold text-[#828282]">
                        .00
                      </p>
                    </div>
                    <p>Per Month</p>
                  </div>
                  <div className="border-b border-[#383434]  mb-3 pb-3 lg:mb-6 lg:pb-5"></div>
                  <h4 className="text-white text-[16px] font-normal mb-8">
                    Features
                  </h4>
                  <ul className="mb-6 lg:mb-12">
                    {[
                      "0.1% cashback on every swap",
                      "$100 monthly cashback limit",
                      "5 Anti-Money Laundering checks",
                      "Unlimited P2P trading",
                      "Crypto spot trading",
                      "No virtual cards",
                    ].map((item, index) => (
                      <li key={index} className="mb-3">
                        <p className="flex items-center text-normal gap-2">
                          <span className="bg-transparent w-7 h-7 bg-[#4E4949] rounded-[12px] border-white flex items-center justify-center">
                            <Image src={CheckWhite} alt="" className="h-3" />
                          </span>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <button className="flex w-[100%] h-[48px] px-[32px] py-[10px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[var(--Radius-Round,999px)] bg-[var(--Neutrals-Neutrals800,#4E4949)]">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div
              id="second"
              className="tab-content hidden  overflow-hidden md:block md:col-span-6 lg:col-span-4 bg-[#0B0A0A] rounded-2xl border-[1px] border-[#15B097]"
            >
              <div className="pricing-plan-box lg:scale-105 relative rounded-2xl p-6 lg:p-8 lg:px-10">
                <div className="relative z-20">
                  <div className="absolute w-[486px] h-[486px] left-[-248px] top-[-392px] rounded-[486px] bg-[#15B097] opacity-50 blur-[97px]"></div>
                  <div className=" flex items-center justify-between">
                    <div className=" px-3 py-2 mb-3 lg:mb-5 flex gap-3 rounded-[999px] justify-center lg:w-28 items-center bg-[rgba(250,250,250,0.10)] ">
                      <Image src={SupremeSVG} alt="" />
                      <h4 className="text-white text-[14px]  font-normal ">
                        Prime
                      </h4>
                    </div>
                    <div className=" bg-[#FEF8C3] px-[16px] py-1 rounded-full text-black text-[14px] font-normal">
                      Popular
                    </div>
                  </div>
                  <div className=" flex items-center justify-between">
                    <div className=" flex  gap-0 items-center">
                      <h2 className="text-[#FAFAFA] font-metropolis lg:text-[50px] leading-tight font-normal">
                        $15
                      </h2>
                      <p className=" mt-10 text-[24px] font-bold text-[#828282]">
                        .00
                      </p>
                    </div>
                    <p>Per Month</p>
                  </div>
                  <div className="border-b border-[#383434]  mb-6 pb-6 lg:mb-10 lg:pb-10"></div>
                  <h4 className="text-white text-[16px] font-normal mb-8">
                    Features
                  </h4>
                  <div className="relative">
                    <ul className="mb-6 lg:mb-12">
                      {[
                        "0.1% cashback on every swap",
                        "$1000 monthly cashback limit",
                        "100 Anti-Money Laundering checks",
                        "Unlimited P2P trading",
                        "Crypto spot trading",
                        "Crypto futures trading",
                        "2 virtual cards",
                      ].map((item, index) => (
                        <li key={index} className="mb-3">
                          <p className="flex items-center text-normal gap-2">
                            <span className="w-7 h-7 bg-[#4E4949] rounded-[12px] border-white flex items-center justify-center">
                              <Image src={CheckWhite} alt="" className="h-3" />
                            </span>
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <button className="flex w-[100%] h-[48px] px-[32px] py-[10px] justify-center items-center gap-[10px] rounded-[var(--Radius-Round,999px)] text-black text-[18px] font-semibold bg-gradient-to-r from-[#FEF9CC] via-[#F6DBD4] to-[#F0C2DB]">
                      Get Started
                    </button>
                    <div className="absolute w-[486px] h-[486px] right-[-248px] bottom-[-392px] rounded-[486px] bg-[#E35CAD] opacity-50 blur-[97px]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="third"
              className="tab-content hidden md:block md:col-span-6 lg:col-span-4 bg-[#161414] rounded-3xl"
            >
              <div className="pricing-plan-box relative rounded-2xl p-6 lg:p-8 lg:px-10">
                <div className="relative z-20">
                  <div className=" px-3 py-2 mb-3 lg:mb-5 flex gap-3 rounded-[999px] justify-center lg:w-28 items-center bg-[rgba(250,250,250,0.10)] ">
                    <Image src={QuantlaneSVG} alt="" />
                    <h4 className="text-white text-[14px]  font-normal ">
                      Prime
                    </h4>
                  </div>
                  <div className=" flex items-center justify-between">
                    <div className=" flex items-center justify-between">
                      <h2 className=" -ml-4 text-[#FAFAFA] font-metropolis  lg:text-[41px] leading-tight font-normal">
                        $100
                      </h2>
                      <p className=" mt-10 text-[24px] font-bold text-[#828282]">
                        .00
                      </p>
                    </div>
                    <p>Per Month</p>
                  </div>
                  <div className="border-b border-[#383434] mb-6 pb-6 lg:mb-10 lg:pb-10" />
                  <h4 className="text-white text-[16px] font-normal mb-8">
                    Features
                  </h4>
                  <ul className="mb-6 lg:mb-12">
                    {[
                      "0.2% cashback on every swap",
                      "$3000 monthly cashback limit",
                      "Unlimited Anti-Money Laundering checks",
                      "Crypto spot trading",
                      "Crypto futures trading",
                      "5 virtual cards",
                    ].map((item, index) => (
                      <li key={index} className="mb-3">
                        <p className="flex items-center text-normal gap-2">
                          <span className="bg-transparent w-7 h-7 bg-[#4E4949] rounded-[12px] border-white flex items-center justify-center">
                            <Image src={CheckWhite} alt="" className="h-3" />
                          </span>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <button className="flex w-[100%] h-[48px] px-[32px] py-[10px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[var(--Radius-Round,999px)] bg-[var(--Neutrals-Neutrals800,#4E4949)]">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-40">
        <FAQs />
      </div>
    </div>
  );
};

export default ExtsyPro;
