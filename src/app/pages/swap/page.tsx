"use client";
import React, { useState } from "react";
import CryptoCube from "../../assets/images/cryptocurrency-cube.svg";
import AngleWDown from "../../assets/images/angle-w-down.svg";
import CryptoUp from "../../assets/images/cryptocurrency-up.svg";
import BaseCrypto from "../../assets/images/base-crypto-icon.svg";
import BtcCryptoIcon from "../../assets/images/btc-crypto-icon.svg";
import AvaxCrypto from "../../assets/images/avax-crypto-icon.svg";
import EthCrypto from "../../assets/images/eth-crypto-icon.svg";
import AdaCrypto from "../../assets/images/ada-crypto-icon.svg";
import BNBCrypto from "../../assets/images/bnb-crypto-icon.svg";
import MaticIcon from "../../assets/images/matic-crypto-icon.svg";
import SolCrypto from "../../assets/images/sol-crypto-icon.svg";
import SearchIcon from "../../assets/images/search-icon.svg";
import UnlockIcon from "../../assets/images/unlock-icon.svg";
import InfoIcon from "../../assets/images/information-icon.svg";
import Image from "next/image";
import Link from "next/link";

const Swap = () => {
  const [isDropDownBaseOpen, setIsDropDownBaseOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <div>
      <section className="hero-area heroShapeNone relative pt-24 lg:pt-40 pb-20 lg:pb-16">
        {/* <div className="hero-grid absolute left-0 top-0">
          <HeroGrid />
        </div>
        <div className="hidden lg:block hero-grid absolute right-0 bottom-14">
          <StarsGroup />
        </div> */}
        <div className="container">
          <div className="hero-content max-w-6xl mx-auto relative z-10">
            <h1
              data-aos="fade-up"
              className="text-3xl lg:text-[50px] 2xl:text-[64px] text-center font-bold  leading-tight text-white mb-4 lg:mb-8"
            >
              Crypto <span className="text-gradient">Swap</span>
            </h1>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="cryptocurrency-platform borderAnimate2 bordered border-gradient p-4 xl:p-5"
            >
              <div className="relative mb-2 lg:mb-6">
                <div className="absolute left-0 right-0 bottom-5 md:bottom-0 top-0 m-auto w-10 h-10 z-30 xl:w-12 xl:h-12">
                  <Image src={CryptoCube} alt="" className="mt-4" />
                </div>
                <h1 className="text-md xl:text-xl leading-tight text-extsy ms-3 font-normal mb-2">
                  Please fill in transaction details{" "}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 lg:gap-4">
                  <div className=" md:col-span-6">
                    <div className="flex items-center justify-between bg-[rgba(56,56,56,0.3)]  border border-white rounded-2xl py-3 xl:py-5 px-4 xl:px-8">
                      <div>
                        <input
                          value="0.5"
                          className="block w-24 xl:w-48 bg-transparent text-md xl:text-xl text-white font-bold border-b border-white/35 focus:outline-0 pb-1 mb-2"
                        />
                        <div className="flex items-center gap-2">
                          <Image src={CryptoUp} alt="" className="w-5" />
                          <input
                            value="+ 3,390 (5.94%)"
                            className="bg-transparent border-0 text-xs xl:text-md flex items-center gap-2 focus:outline-0"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <ul
                          className="tabs-dropdown "
                          onClick={() =>
                            setIsDropDownBaseOpen(!isDropDownBaseOpen)
                          }
                        >
                          <li
                            className={`dropdown ${
                              isDropDownBaseOpen ? "active" : ""
                            }`}
                          >
                            <button className="dropdown-toggler">
                              <h4 className="flex items-center justify-end gap-2 text-md xl:text-xl font-bold">
                                <Image
                                  src={AngleWDown}
                                  alt=""
                                  className="w-3"
                                />
                                BTC
                              </h4>
                              <p className="text-xs xl:text-md text-right">
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
                                        className="w-6"
                                        alt=""
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
                          <Image
                            src={BtcCryptoIcon}
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <div className=" border border-white bg-[rgba(56,56,56,0.3)] rounded-2xl py-3 xl:py-5 px-4 xl:px-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <input
                            value="11.2490708"
                            className="block w-24 xl:w-48 bg-transparent text-md xl:text-xl text-white font-bold border-b border-white/35 focus:outline-0 pb-1 mb-2"
                          />
                          <div className="flex items-center gap-2">
                            <Image src={CryptoUp} alt="" className="w-5" />
                            <input
                              value="+ 3,390 (5.94%)"
                              className="bg-transparent border-0 text-xs xl:text-md flex items-center gap-2 focus:outline-0"
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div>
                            <Image
                              src={UnlockIcon}
                              alt=""
                              className="w-8 h-8 xl:w-12 xl:h-12 border-r border-gray-600 py-2 px-3"
                            />
                          </div>
                          <ul
                            className="tabs-dropdown"
                            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                          >
                            <li
                              className={`dropdown ${
                                isDropDownOpen ? "active" : ""
                              }`}
                            >
                              <button className="dropdown-toggler">
                                <h4 className="flex items-center justify-end gap-2 text-md xl:text-xl font-bold">
                                  <Image
                                    src={AngleWDown}
                                    alt=""
                                    className="w-3"
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

                          <div className="w-6 h-6 xl:w-8 xl:h-8">
                            <Image src={EthCrypto} alt="" className="w-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inputSuccess flex items-center relative z-30 gap-4 bg-[rgba(56,56,56,0.3)]  border border-white rounded-lg lg:rounded-2xl xl:py-5 p-4 xl:px-6 mb-3 md:mb-5">
                <input
                  className="block bg-transparent w-full text-base lg:text-xl text-white placeholder-gray-600 focus:outline-0"
                  placeholder="Recipient Wallet Address"
                  type="text"
                />
                <button className="document-btn w-5 h-5 lg:w-8 lg:h-8 absolute top-0 bottom-0 m-auto right-4 lg:right-6"></button>
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
                      <Image src={InfoIcon} alt="" className="w-4" />
                    </Link>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <Link
                      href="#"
                      className="info_tooltips flex items-center gap-2 underline text-[8px] md:text-xs text-extsy"
                      title="This is an estimated rate.EXTSY will secure the best available rate htmlFor your exchange. Find out more."
                    >
                      Estimated rate{" "}
                      <Image src={InfoIcon} alt="" className="w-4" />
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
                      <Image src={InfoIcon} alt="" className="w-4" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex text-[12px] lg:text-base text-start relative z-30 gap-2 mb-6 lg:mb-8">
                <input
                  id="checkbox-1"
                  name="checkbox-1"
                  type="checkbox"
                  className="shrink-0"
                />
                <label
                  htmlFor="checkbox-1"
                  className="text-[12px] md:text-base text-extsy"
                >
                  {" "}
                  I&apos;ve read and agree to the Extsy{" "}
                  <Link href="#" className="underline">
                    Terms of Use, Privacy Policy and Risk Disclosure Statement
                  </Link>
                </label>
              </div>
              <Link
                href="/pages/swapStage"
                className="block relative z-30 w-full bg-gradient border border-white harmonyos-sans-regular !rounded-full text-center text-gray-800 py-2.5 xl:py-4 px-8"
              >
                Swap Now
              </Link>
            </form>
          </div>
        </div>
      </section>
      <section className="cryptocurrency-area mb-60 mt-32">
        <div className="container">
          <div className="about-content max-w-9xl mx-auto p-[56px] rounded-3xl bg-[#161414]">
            <h4
              className="text-lg md:text-xl lg:text-2xl mb-8"
              style={{
                background:
                  "linear-gradient(90deg, #FEF9CC 0%, #F6DBD4 5.65%, #F1C8D9 10.6%, #F0C2DB 14.13%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Useful tips to know
            </h4>

            <ul className="list-square ps-5 mb-6 text-extsy">
              <li>
                <strong>Check the Exchange Rate:</strong> Review the exchange
                rate before confirming a swap to ensure you get a favorable
                deal.
              </li>
              <li>
                <strong>Consider Network Fees:</strong> Be mindful of network
                fees, as they can vary by blockchain and impact your total cost.
              </li>
              <li>
                <strong>Double-Check the Wallet Address:</strong> Verify the
                wallet address carefully to avoid losing funds due to errors.
              </li>
              <li>
                <strong>Be Aware of Swap Time:</strong> Swaps can take time due
                to network congestion. Make sure you&apos;re comfortable with
                the potential delay.
              </li>
              <li>
                <strong>Mind the Rate Expiration: </strong> If you send a
                deposit for a fixed-rate swap after the rate has expired, and
                the rate has declined, the transaction may not proceed under the
                original terms.
              </li>
              <li>
                <strong>Use the Correct Contract Address:</strong> Ensure you
                use the correct contract address when making a transaction;
                using the wrong one can result in a failed swap.
              </li>
            </ul>
            <hr className="my-5 bg-[#4E4949] h-[1px]" />
            <h4
              className="text-lg md:text-xl lg:text-2xl mb-8"
              style={{
                background:
                  "linear-gradient(90deg, #FEF9CC 0%, #F6DBD4 5.65%, #F1C8D9 10.6%, #F0C2DB 14.13%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              How to Cancel a Swap:
            </h4>

            <ul className="list-square ps-5 text-extsy">
              <li>
                <strong> No Funds Sent:</strong> If you haven’t sent any funds
                yet, there’s no need to cancel the transaction; simply create a
                new one.
              </li>
              <li>
                <strong>Funds Already Sent:</strong> If you’ve already sent the
                funds, contact our support team immediately for assistance.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Swap;
