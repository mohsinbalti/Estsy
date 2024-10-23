import FAQs from "@/components/FAQs";
import React from "react";
import HeroBgCoin from "../../assets/images/hero-bg-coin.png";
import AngleRight from "../../assets/images/angle-right.svg";
import HeroElipse from "../../assets/images/hero-elipse.svg";
import HeroGrid from "../../assets/images/hero-grid.svg";
import HowWorkTrophy from "../../assets/images/howwork-trophy.svg";
import CheckBlack from "../../assets/images/check-black.svg";
import BtcCryptoIcon from "../../assets/images/btc-crypto-icon.svg";
import HowWorkDraw from "../../assets/images/howwork-draw.svg";
import HowWorkTicket from "../../assets/images/howwork-ticket.svg";
import ProceedLiteCoin from "../../assets/images/proceed-liteCoin.png";
import ProceedBitcoin from "../../assets/images/proceed-bitcoin.png";
import ProceedEth from "../../assets/images/proceed-eth.png";
import ProceedCircle from "../../assets/images/proceed-circle.png";
import ProceedModal from "../../assets/images/proceed-modal.png";
import LiteCoin from "../../assets/images/lite-coin.png";
import MoneroCoin from "../../assets/images/monero-coin.png";
import ChartGraphImg from "../../assets/images/chart-graph-image.svg";
import LtcCryptoIcon from "../../assets/images/ltc-crypto-icon.svg";
import ErhCryptoIcon from "../../assets/images/eth-crypto-icon.svg";
import CryptoRaffles from "../../assets/images/crypto-raffles.png";
import MembershipOutline from "../../assets/images/membership-outline.svg";
import BillListLinear from "../../assets/images/bill-list-linear.svg";
import ProfitSwap from "../../assets/images/profit-swap.png";
import ProfitSwapCoin1 from "../../assets/images/profit-swap-coin1.png";
import ProfitSwapCoin2 from "../../assets/images/profit-swap-coin2.png";
import ProfitSwapCoin3 from "../../assets/images/profit-swap-coin3.png";
import ProfitGraph from "../../assets/images/profit-graph.png";
import ProfitStrategy from "../../assets/images/profit-stategy.png";
import Image from "next/image";
import Link from "next/link";

const Partnership = () => {
  return (
    <>
      <section
        className="hero-area bg-contain bg-no-repeat bg-bottom relative pt-24 lg:pt-56 pb-20 lg:pb-80"
        style={{
          backgroundImage: `url(${HeroBgCoin.src})`,
        }}
      >
        <div className="hidden lg:block hero-elipse absolute left-0 top-0">
          <Image src={HeroElipse} alt="" />
        </div>
        <div className="hero-grid absolute left-0 top-0">
          <Image src={HeroGrid} alt="" />
        </div>

        <div className="container">
          <div className="hero-content text-center relative z-40">
            <h1
              data-aos="fade-up"
              className="text-3xl lg:text-5xl  leading-tight text-white font-normal mb-4 lg:mb-8"
            >
              Join as a
              <br /> <span className="text-gradient">Partner</span>
            </h1>
            <p className="max-w-3xl mx-auto mb-6">
              Sign up for your personal partnership account and start earning
              with EXTSY. After confirming your email, you’ll receive a public
              API key to get started right away.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Link
                className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-5 lg:px-12 transition"
                href=""
              >
                Become a partner{" "}
                <Image src={AngleRight} alt="" className="h-4 lg:h-5 md:ms-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="partnership-area relative z-40 pb-20 lg:pb-44">
        <div className="container">
          <div className="partnership-wrapper grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 xl:col-span-3">
              <div className="partnership-box min-w-72 relative p-6">
                <div className="bordered border-gradient h-full w-full !absolute top-0 left-0 opacity-50"></div>
                <div className="relative">
                  <div className="partnership-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-6">
                    <Image src={HowWorkTrophy} alt="" className="h-6 lg:h-10" />
                  </div>
                  <h4 className="text-2xl lg:text-4xl text-white font-bold mb-4 lg:mb-6">
                    Upto 1%
                  </h4>
                  <p className="text-white"> Reward per transaction</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 xl:col-span-3">
              <div className="partnership-box min-w-72 relative p-6">
                <div className="bordered border-gradient h-full w-full !absolute top-0 left-0 opacity-50"></div>
                <div className="relative">
                  <div className="partnership-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-6">
                    <Image
                      src={BillListLinear}
                      alt=""
                      className="h-6 lg:h-10"
                    />
                  </div>
                  <h4 className="text-2xl lg:text-4xl text-white font-bold mb-4 lg:mb-6">
                    $1853
                  </h4>
                  <p className="text-white">Average payout</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 xl:col-span-3">
              <div className="partnership-box min-w-72 relative p-6">
                <div className="bordered border-gradient h-full w-full !absolute top-0 left-0 opacity-50"></div>
                <div className="relative">
                  <div className="partnership-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-6">
                    <Image src={HowWorkTrophy} alt="" className="h-6 lg:h-10" />
                  </div>
                  <h4 className="text-2xl lg:text-4xl text-white font-bold mb-4 lg:mb-6">
                    $217 000+
                  </h4>
                  <p className="text-white">Paid rewards</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 xl:col-span-3">
              <div className="partnership-box min-w-72 relative p-6">
                <div className="bordered border-gradient h-full w-full !absolute top-0 left-0 opacity-50"></div>
                <div className="relative">
                  <div className="partnership-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-6">
                    <Image
                      src={MembershipOutline}
                      alt=""
                      className="h-6 lg:h-10"
                    />
                  </div>
                  <h4 className="text-2xl lg:text-4xl text-white font-bold mb-4 lg:mb-6">
                    10,000+
                  </h4>
                  <p className="text-white"> Active partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="time-area hidden relative pb-20 lg:pb-44">
        <div className="container">
          <div className="grid items-start xl:items-center lg:grid-cols-12 gap-4">
            <div className="lg:col-span-6">
              <p className="text-start mb-6">Time left for the next draw</p>
              <div id="simple_timer" className="mb-6"></div>
            </div>
            <div className="lg:col-span-6">
              <div className="crypto-raffles-image flex items-center justify-center relative z-20">
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
        </div>
      </section>

      <section className="howwork-area relative z-40 pb-20 lg:pb-44">
        <div className="container">
          <div className="relative lg:p-10 xl:p-20">
            <div className="howwork-wrapper bordered border-gradient !absolute right-0 bottom-0 top-0 left-0 opacity-70"></div>
            <div className="text-start lg:text-center relative z-20 max-w-3xl mx-auto mb-8 lg:mb-24">
              <h3 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
                How it <span className="text-gradient font-bold">works</span>
              </h3>
              <p>
                Your Simple Guide to Navigating Our Platform and Making the Most
                of Its Features
              </p>
            </div>
            <div className="grid items-center md:grid-cols-12 gap-4">
              <div className="md:col-span-6 lg:col-span-4">
                <div className="howwork-box relative bordered border-gradient !rounded-2xl overflow-hidden p-6 lg:px-8">
                  <div className="howwork-number text-white/30 text-[160px] leading-none font-bold absolute -top-7 -right-2">
                    1
                  </div>
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                    <Image src={HowWorkTicket} alt="" className="h-6 lg:h-10" />
                  </div>
                  <div className="howwork-content relative z-20">
                    <h4 className="text-white text-2xl font-bold mb-4">
                      Join the partnership program
                    </h4>
                    <p className="text-white">
                      signup to partnership program and become a member of a
                      largest growing community
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 lg:col-span-4">
                <div className="howwork-box relative bordered border-gradient !rounded-2xl overflow-hidden p-6 lg:px-8">
                  <div className="howwork-number text-white/30 text-[160px] leading-none font-bold absolute -top-7 -right-2">
                    2
                  </div>
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                    <Image src={HowWorkDraw} alt="" className="h-6 lg:h-10" />
                  </div>
                  <div className="howwork-content relative z-20">
                    <h4 className="text-white text-2xl font-bold mb-4">
                      Refer
                    </h4>
                    <p className="text-white">
                      Generate referral links for your audience and start
                      earning against each transaction your audience perform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 lg:col-span-4">
                <div className="howwork-box relative bordered border-gradient !rounded-2xl overflow-hidden p-6 lg:px-8">
                  <div className="howwork-number text-white/30 text-[160px] leading-none font-bold absolute -top-7 -right-2">
                    3
                  </div>
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                    <Image src={HowWorkTrophy} alt="" className="h-6 lg:h-10" />
                  </div>
                  <div className="howwork-content relative z-20">
                    <h4 className="text-white text-2xl font-bold mb-4">
                      On demand payout
                    </h4>
                    <p className="text-white">
                      You can request for payouts of your rewards as soon as the
                      minimum payout limit reaches.
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
                  Join Our Partnership Program and
                  <span className="text-gradient font-bold">Grow</span>{" "}
                  <span className="text-amber-100">Together</span>
                </h4>
                <p className="mb-6">
                  Collaborate with us to expand your reach and increase your
                  revenue. Our partner program offers exclusive benefits,
                  support, and opportunities to help you succeed in the crypto
                  space.
                </p>
                <Link
                  className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-5 lg:px-12 transition"
                  href="contact.html"
                >
                  Contact us{" "}
                  <Image
                    src={AngleRight}
                    alt=""
                    className="h-4 lg:h-5 md:ms-4"
                  />
                </Link>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="text-start lg:text-center">
                <div className="about-image inline-block relative ms-6 mt-6 mb-16">
                  <ul>
                    <li>
                      <div className="currency-wallet-box text-start relative w-56 lg:w-96 z-40 bordered border-gradient !rounded-2xl p-4 lg:pb-8">
                        <h5 className="text-xs lg:text-xl text-gray-600 font-bold relative z-20 mb-2 lg:mb-4">
                          Popular Cryptocurrencies
                        </h5>
                        <div className="flex items-center relative z-20 gap-3 mb-2 lg:mb-4">
                          <div className="w-8 h-8 xl:w-12 xl:h-12">
                            <Image
                              src={BtcCryptoIcon}
                              alt=""
                              className="w-full"
                            />
                          </div>
                          <div className="flex items-center gap-3">
                            <h4 className="text-xs xl:text-2xl font-bold">
                              {" "}
                              BTC{" "}
                            </h4>
                            <p className="text-xss xl:text-sm text-gray-600">
                              Bitcoin
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center relative z-20 gap-3 mb-2 lg:mb-4">
                          <div className="w-8 h-8 xl:w-12 xl:h-12">
                            <Image
                              src={ErhCryptoIcon}
                              alt=""
                              className="w-full "
                            />
                          </div>
                          <div className="flex items-center gap-3">
                            <h4 className="text-xs xl:text-2xl font-bold">
                              {" "}
                              ETH{" "}
                            </h4>
                            <p className="text-xss xl:text-sm text-gray-600">
                              Ethereum
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center relative z-20 gap-3">
                          <div className="w-8 h-8 xl:w-12 xl:h-12">
                            <Image
                              src={LtcCryptoIcon}
                              alt=""
                              className="w-full"
                            />
                          </div>
                          <div className="flex items-center gap-3">
                            <h4 className="text-xs xl:text-2xl font-bold">
                              {" "}
                              LTC{" "}
                            </h4>
                            <p className="text-xss xl:text-sm text-gray-600">
                              Litecoin
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="absolute -right-32 lg:-right-56 top-10 lg:top-14 z-40">
                      <div className="currency-wallet-box text-start relative w-56 lg:w-96 z-40 bordered border-gradient !rounded-2xl p-4">
                        <div className="relative z-20">
                          <h5 className="text-xss lg:text-xl text-gray-600 font-bold relative z-20 mb-2 lg:mb-4">
                            Profit
                          </h5>
                          <h4 className="text-base xl:text-4xl font-bold mb-2 lg:mb-4">
                            {" "}
                            1.15 BTC{" "}
                          </h4>
                          <p className="text-xss lg:text-base text-green-800">
                            + 8.00%
                          </p>
                        </div>

                        <div className="chart-graph-image">
                          <Image
                            src={ChartGraphImg}
                            alt=""
                            className="relative z-10"
                          />
                        </div>
                      </div>
                    </li>
                    <li className="absolute -bottom-20 lg:-bottom-32 left-12 lg:left-24 z-50">
                      <div className="currency-wallet-box text-start relative w-56 lg:w-96 z-40 bordered border-gradient !rounded-2xl p-4 lg:px-6 lg:py-8">
                        <div className="flex items-end relative z-20 gap-6">
                          <div className="shrink-0">
                            <h5 className="text-xs lg:text-xl text-gray-600 font-bold relative z-20 mb-2 lg:mb-4">
                              Created Swaps
                            </h5>
                            <h4 className="text-base xl:text-4xl font-bold mb-2 lg:mb-4">
                              10,212{" "}
                            </h4>
                          </div>
                          <div>
                            <p className="text-xss lg:text-base text-green-800">
                              + 25.00%
                            </p>
                            <div className="relative">
                              <Image
                                src={ChartGraphImg}
                                alt=""
                                className="w-full absolute top-0 left-0 z-10 opacity-15"
                              />
                              <div className="chart-graph-image2 relative">
                                <Image
                                  src={ChartGraphImg}
                                  alt=""
                                  className="w-full relative z-10"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="absolute top-0 left-0 w-full h-full">
                    <li className="absolute top-0 -left-14 lg:-top-6 lg:-left-24 z-50">
                      <Image src={MoneroCoin} alt="" className="w-24 lg:w-40" />
                    </li>
                    <li className="absolute -right-12 -top-6 z-50">
                      <Image src={LiteCoin} alt="" className="w-20 lg:w-32" />
                    </li>
                    <li className="absolute -bottom-24 -left-8 lg:-bottom-32 lg:-left-12 z-50">
                      <Image
                        src={ProceedBitcoin}
                        alt=""
                        className="w-28 lg:w-48"
                      />
                    </li>
                    <li className="absolute -bottom-20 -right-24 lg:-bottom-32 lg:-right-44 z-50">
                      <Image src={ProceedEth} alt="" className="w-28 lg:w-48" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area relative pb-20 lg:pb-44">
        <div className="container">
          <div className="grid items-center md:grid-cols-12 gap-4">
            <div className="md:col-span-6 md:order-3">
              <div className="about-content max-w-3xl">
                <h4 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
                  Profit from Every{" "}
                  <span className="text-gradient font-bold">Swap</span>
                </h4>
                <p className="mb-6">
                  Join our Partner Program and start earning cashback on every
                  crypto swap. Whether you&apos;re swapping for yourself or
                  referring others, you&apos;ll enjoy a percentage back on every
                  transaction. Our seamless platform ensures fast and secure
                  swaps while helping you generate consistent rewards. Sign up
                  now and take advantage of this unique opportunity to boost
                  your earnings with each swap!
                </p>
                <Link
                  className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-5 lg:px-12 transition"
                  href=""
                >
                  Start Earning{" "}
                  <Image
                    src={AngleRight}
                    alt=""
                    className="h-4 lg:h-5 md:ms-4"
                  />
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 md:order-1">
              <div className="about-image profit-stategy-image group inline-block relative mt-6 md:mt-0">
                <Image src={ProfitSwap} alt="" />
                <ul className="absolute top-0 left-0 w-full h-full">
                  <li className="opacity-0 group-hover:opacity-100 absolute h-44 top-0 bottom-0 lg:bottom-14 left-0 m-auto transition-all duration-1000">
                    <Image src={ProfitGraph} alt="" />
                  </li>
                  <li className="stategy-icon absolute right-0 lg:right-16 top-0 px-8 transition-all duration-1000">
                    <Image src={ProfitStrategy} alt="" />
                  </li>
                </ul>
                <ul className="flex items-end justify-center absolute -bottom-8 lg:bottom-0 right-0 w-full h-full px-8">
                  <li className="profit-coin transition-all duration-1000">
                    <Image src={ProfitSwapCoin1} alt="" />
                  </li>
                  <li className="profit-coin transition-all duration-1000">
                    <Image src={ProfitSwapCoin2} alt="" />
                  </li>
                  <li>
                    <Image
                      src={ProfitSwapCoin3}
                      className="group-hover:scale-y-100 scale-y-0 transition-all duration-1000"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area relative pb-20 lg:pb-44">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-6">
              <div className="about-content max-w-3xl">
                <h4 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
                  Immediate{" "}
                  <span className="text-gradient font-bold">Payouts</span> at
                  Your <span className="text-gradient font-bold">Command</span>
                </h4>
                <p className="mb-3">
                  With immediate payouts at your command, accessing your funds
                  has never been easier. Our platform ensures that you can
                  quickly withdraw your earnings whenever you need them, without
                  delays. Enjoy the convenience and control of instant payouts,
                  giving you the freedom to manage your crypto assets
                  effortlessly.
                </p>
                <ul className="max-w-2xl list-square ps-5 mb-6">
                  <li>
                    <strong>Immediate Access: </strong> Withdraw your funds
                    instantly without waiting.
                  </li>
                  <li>
                    <strong>Payment in Crypto:</strong> Receive your rewards in
                    cryptocurrency, with seamless transfers directly to your
                    crypto wallet.
                  </li>
                  <li>
                    <strong>Transparent Process: </strong> No hidden fees or
                    delays—just your money, available on your terms.
                  </li>
                </ul>
                <Link
                  className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-5 lg:px-12 transition"
                  href="contact.html"
                >
                  Contact us{" "}
                  <Image
                    src={AngleRight}
                    alt=""
                    className="h-4 lg:h-5 md:ms-4"
                  />
                </Link>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="about-image group flex items-center justify-center relative mt-6 mb-8 md:mb-0 md:mt-0">
                <Image src={ProceedModal} alt="" className="relative z-20" />

                <Image
                  src={ProceedCircle}
                  alt=""
                  className="absolute -top-12 group-hover:rotate-90 transition-all duration-1000"
                />
                <ul className="absolute top-0 w-full h-full z-30">
                  <li className="absolute -left-2 lg:left-8 bottom-0 group-hover:-translate-y-20 transition-all duration-1000">
                    <Image src={ProceedEth} alt="" className="w-32 xl:w-auto" />
                  </li>
                  <li className="absolute -right-12 lg:right-10 top-32 lg:top-24 group-hover:translate-y-20 transition-all duration-1000">
                    <Image
                      src={ProceedBitcoin}
                      alt=""
                      className="w-32 xl:w-auto"
                    />
                  </li>
                  <li className="absolute right-8 lg:right-32 bottom-0 group-hover:-translate-y-20 transition-all duration-1000">
                    <Image
                      src={ProceedLiteCoin}
                      alt=""
                      className="w-20 xl:w-auto"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whychoose-area pb-20 lg:pb-44">
        <div className="container">
          <div className="text-start lg:text-center max-w-4xl mx-auto mb-8 lg:mb-24">
            <h3 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
              Why Choose <span className="text-gradient font-bold">EXTSY</span>{" "}
              as Your Preferred{" "}
              <span className="text-gradient font-bold">Partner</span>?
            </h3>
            <p className="max-w-3xl mx-auto">
              Join countless partners who trust our platform for secure,
              transparent, and reliable crypto services. We prioritize your
              security, provide unparalleled support, and deliver a seamless
              experience every step of the way.
            </p>
          </div>
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-4">
              <div className="pricing-plan-box h-full bg-white border border-gray-100 rounded-2xl p-6">
                <div className="whychoose-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-6">
                  <Image src={HowWorkTicket} alt="" className="h-6 lg:h-8" />
                </div>
                <h4 className="text-gray-800 text-2xl font-bold mb-4">
                  Competitive Commission and Payout Structure
                </h4>
                <p className="text-gray-800 mb-3">
                  Enjoy a flexible and transparent commission model designed to
                  meet your business needs.
                </p>
                <ul>
                  <li className="mb-3">
                    <p className="flex items-center text-gray-800 text-lg gap-2">
                      <span className="bg-gradient w-7 h-7 rounded-full flex items-center justify-center">
                        <Image src={CheckBlack} alt="" className="h-3" />
                      </span>
                      No setup fees
                    </p>
                  </li>
                  <li className="mb-3">
                    <p className="flex items-center text-gray-800 text-lg gap-2">
                      <span className="bg-gradient w-7 h-7 rounded-full flex items-center justify-center">
                        <Image src={CheckBlack} alt="" className="h-3" />
                      </span>
                      No cap on commissions
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="pricing-plan-box h-full bg-white border border-gray-100 rounded-2xl p-6">
                <div className="whychoose-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-6">
                  <Image src={HowWorkTicket} alt="" className="h-6 lg:h-8" />
                </div>
                <h4 className="text-gray-800 text-2xl font-bold mb-4">
                  Transparent Payment and Performance Reporting
                </h4>
                <p className="text-gray-800 mb-3">
                  Tracking your earnings and performance has never been easier.
                </p>
                <ul>
                  <li className="mb-3">
                    <p className="flex items-center text-gray-800 text-lg gap-2">
                      <span className="bg-gradient w-7 h-7 rounded-full flex items-center justify-center">
                        <Image src={CheckBlack} alt="" className="h-3" />
                      </span>
                      Personalised dashboard
                    </p>
                  </li>
                  <li className="mb-3">
                    <p className="flex items-center text-gray-800 text-lg gap-2">
                      <span className="bg-gradient w-7 h-7 rounded-full flex items-center justify-center">
                        <Image src={CheckBlack} alt="" className="h-3" />
                      </span>
                      Fast and reliable payouts
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="pricing-plan-box h-full bg-gradient border border-gray-100 rounded-2xl p-6">
                <div className="whychoose-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-6">
                  <Image src={HowWorkTicket} alt="" className="h-6 lg:h-8" />
                </div>
                <h4 className="text-gray-800 text-2xl font-bold mb-4">
                  Lucrative Affiliate Program
                </h4>
                <p className="text-gray-800 mb-3">
                  Join our affiliate program and start earning from day one with
                  competitive rewards and excellent support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQs />
    </>
  );
};

export default Partnership;
