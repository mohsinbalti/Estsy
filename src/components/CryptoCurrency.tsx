'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import CryptoCurrencyCube from '../app/assets/images/cryptocurrency-cube.svg';
import AngleWDown from '../app/assets/images/angle-w-down.svg';
import CryptoUp from '../app/assets/images/cryptocurrency-up.svg';
import BaseCrypto from '../app/assets/images/base-crypto-icon.svg';
import BNBCrypto from '../app/assets/images/bnb-crypto-icon.svg';
import SOLCrypto from '../app/assets/images/sol-crypto-icon.svg';
import ETHCrypto from '../app/assets/images/eth-crypto-icon.svg';
import SearchIcon from '../app/assets/images/search-icon.svg';
import AvaxCrypto from '../app/assets/images/avax-crypto-icon.svg';
import MaticCrypto from '../app/assets/images/matic-crypto-icon.svg';
import BtcCrypto from '../app/assets/images/btc-crypto-icon.svg';
import AdaCrypto from '../app/assets/images/ada-crypto-icon.svg';
import UnlockIcon from '../app/assets/images/unlock-icon.svg';
import InfoIcon from '../app/assets/images/information-icon.svg';
import ArrowTDown from '../app/assets/images/arrow-t-down.svg';
import ArrowTUp from '../app/assets/images/arrow-t-up.svg';
import BahFlagIcon from '../app/assets/images/bah-flag-icon.svg';
import AusFlagIcon from '../app/assets/images/aus-flag-icon.svg';
import BarFlagIcon from '../app/assets/images/bar-flag-icon.svg';
import USAFlagIcon from '../app/assets/images/usa-flag-icon.svg';
import CaFlagIcon from '../app/assets/images/ca-flag-icon.svg';
import ChiFlagIcon from '../app/assets/images/chi-flag-icon.svg';
import Link from 'next/link';

const CryptoCurrency = () => {
  const [activeTab, setActiveTab] = useState('swap');

  const toggleTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <section className="cryptocurrency-area mt-20 lg:mt-0">
      <div className="container">
        <div className="cryptocurrency-wrapper bg-[#221F1F] bordered relative z-10 lg:p-10 xl:p-10">
          <div className="grid md:grid-cols-12 gap-4 items-center justify-between relative z-10">
            <div className="md:col-span-6 lg:col-span-8">
              <div className="max-w-2xl">
                <h2 className="text-xl lg:text-3xl text-white font-light mb-6">
                  Limitless Possibilities with Our
                  <span className="text-gradient font-bold harmonyos-sans-bold">
                    {' '}
                    Web3.0 Cryptocurrency Platform
                  </span>
                </h2>
                <p className="text-white max-w-xl mb-6 text-sm text-extsy">
                  Effortlessly buy, sell, and swap cryptocurrencies with our
                  user-friendly platform, offering fast transactions and
                  non-custodial security.
                </p>
                <div className="grid grid-cols-12 gap-6 max-w-3xl mb-8 md:mb-0">
                  <div className="cryptocurrency-item relative col-span-6 md:order-1">
                    <div className="block lg:flex items-center gap-8 text-center lg:text-start">
                      <h3 className="text-4xl text-white font-bold w-auto lg:w-28">
                        $12B<span className="text-[#FF82BE]">+</span>
                      </h3>
                      <div>
                        <p
                          style={{
                            lineHeight: '1rem',
                          }}
                          className="harmonyos-sans-thin text-sm"
                        >
                          Assets <br />
                          management
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="cryptocurrency-item relative col-span-6 md:order-3">
                    <div className="block lg:flex items-center gap-8 text-center lg:text-start">
                      <h3 className="text-4xl text-white font-bold w-auto lg:w-28">
                        0.10<span className="text-[#61A0FF]">%</span>
                      </h3>
                      <div>
                        <p
                          style={{
                            lineHeight: '1rem',
                          }}
                          className="harmonyos-sans-thin text-sm"
                        >
                          Lowest <br />
                          transaction fees
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 md:order-2">
                    <div className="block lg:flex items-center gap-8 text-center lg:text-start">
                      <h3 className="text-4xl text-white font-bold w-auto lg:w-28">
                        200<span className="text-[#27CAEA]">+</span>
                      </h3>
                      <div>
                        <p
                          style={{
                            lineHeight: '1rem',
                          }}
                          className="harmonyos-sans-thin text-sm"
                        >
                          Supported <br />
                          crypto currencies
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 md:order-4">
                    <div className="block lg:flex items-center gap-8 text-center lg:text-start">
                      <h3 className="text-4xl text-white font-bold w-auto lg:w-28">
                        5M<span className="text-[#FFB355]">+</span>
                      </h3>
                      <div>
                        <p
                          style={{
                            lineHeight: '1rem',
                          }}
                          className="harmonyos-sans-thin text-sm"
                        >
                          Extsy users <br />
                          worldwide
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 lg:col-span-4">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="cryptocurrency-platform bordered border-gradient"
              >
                <div className="relative z-40">
                  {/* Tabs Navigation */}
                  <nav
                    id="tab-navs"
                    className="grid grid-cols-12 overflow-hidden rounded-t-3xl"
                  >
                    <div className="col-span-6">
                      <button
                        onClick={() => toggleTab('swap')}
                        className={`relative block text-center text-xs xl:text-sm w-full rounded-b-3xl p-4 ${
                          activeTab === 'swap'
                            ? 'bg-[#0E0E0E] font-bold active'
                            : 'bg-[#1E1E1E]'
                        }`}
                      >
                        <span
                          className={`${
                            activeTab === 'swap'
                              ? 'bg-gradient-to-r from-[#fef9cc] to-[#f0c2db] text-transparent bg-clip-text'
                              : ''
                          }`}
                        >
                          Swap Crypto
                        </span>
                      </button>
                    </div>
                    <div className="col-span-6">
                      <button
                        onClick={() => toggleTab('buy')}
                        className={`relative block text-center text-xs xl:text-sm w-full rounded-b-3xl p-4 ${
                          activeTab === 'buy'
                            ? 'bg-[#0E0E0E] font-bold active'
                            : 'bg-[#1E1E1E]'
                        }`}
                      >
                        <span
                          className={`${
                            activeTab === 'buy'
                              ? 'bg-gradient-to-r from-[#fef9cc] to-[#f0c2db] text-transparent bg-clip-text'
                              : ''
                          }`}
                        >
                          Buy/Sell Crypto
                        </span>
                      </button>
                    </div>
                  </nav>
                  <div id="tab-contents" className="p-4">
                    {activeTab === 'swap' && (
                      <div id="first" className="tab-content p-4">
                        <div className="relative">
                          <div className="absolute left-0 right-0 -bottom-5 lg:-bottom-6 m-auto w-10 h-10 xl:w-14 xl:h-14">
                            <Image src={CryptoCurrencyCube} alt="cube" />
                          </div>
                          <div className="flex items-center justify-between bg-[rgba(56,56,56,0.3)]  border border-white rounded-3xl py-4 xl:py-5 px-4 xl:px-8 mb-2 xl:mb-3">
                            <div>
                              <input
                                value="0.5"
                                className="block w-32  bg-transparent text-md xl:text-xl text-white font-bold border-b border-white/35 focus:outline-0 pb-1 mb-2"
                              />
                              <div className="flex items-center gap-2">
                                <Image src={CryptoUp} alt="crypto-up" />
                                <input
                                  disabled
                                  value="+ 3,390 (5.94%)"
                                  className="bg-transparent border-0 text-xs xl:text-md flex items-center gap-2 focus:outline-0"
                                />
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <ul className="tabs-dropdown">
                                <li className="dropdown">
                                  <button className="dropdown-toggler">
                                    <h4 className="flex items-center justify-end gap-2 text-md xl:text-xl font-bold">
                                      <Image
                                        src={AngleWDown}
                                        alt="angle-w-down"
                                      />
                                      BTC
                                    </h4>
                                    <p className="text-xs xl:text-md">
                                      Bitcoin
                                    </p>
                                  </button>
                                  <ul className="dropdown-menu !w-56 lg:!w-96">
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
                                            alt="search-icon"
                                          />
                                        </div>
                                        <input
                                          type="search"
                                          name="search"
                                          className="block w-full text-sm text-gray-600 border border-gray-50 rounded-full bg-gray-400 placeholder-gray-500 focus:outline-0 py-1 px-8"
                                          placeholder="Search Raffle"
                                          //   required=""
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
                                            alt="base-crypto"
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
                                            alt="bnb-crypto-icon"
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
                                            src={SOLCrypto}
                                            alt="sol-crypto-icon"
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
                                            src={ETHCrypto}
                                            alt="eth-crypto-icon"
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
                                            alt="avax-crypto-icon"
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
                                            src={MaticCrypto}
                                            alt="matic-crypto-icon"
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
                                            alt="ada-crypto-icon"
                                          />
                                          ADA
                                        </p>
                                        <p>$56,623.54</p>
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                              </ul>

                              <div className="w-6 h-6 xl:w-8 xl:h-8">
                                <Image src={BtcCrypto} alt="btc-crypto-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" border bg-[rgba(56,56,56,0.3)] border-white rounded-3xl py-4 xl:py-5 px-4 xl:px-8 mb-2 xl:mb-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <input
                                disabled
                                value="11.2490708"
                                className="block w-32 bg-transparent text-md xl:text-xl text-white font-bold border-b border-white/35 focus:outline-0 pb-1 mb-2"
                              />
                              <div className="flex items-center gap-2">
                                <Image src={CryptoUp} alt="crypto-up" />
                                <input
                                  disabled
                                  value="+ 3,390 (5.94%)"
                                  className="bg-transparent border-0 text-xs xl:text-md flex items-center gap-2 focus:outline-0"
                                />
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 xl:w-6 xl:h-6">
                                <Image src={UnlockIcon} alt="" />
                              </div>

                              <ul className="tabs-dropdown">
                                <li className="dropdown">
                                  <button className="dropdown-toggler">
                                    <h4 className="flex items-center justify-end gap-2 text-md xl:text-xl font-bold">
                                      <Image
                                        src={AngleWDown}
                                        alt="angle-w-down"
                                      />
                                      ETH
                                    </h4>
                                    <p className="text-xs xl:text-md">
                                      Ethereum
                                    </p>
                                  </button>
                                  <ul className="dropdown-menu !w-56 lg:!w-96">
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
                                            alt="search-icon"
                                          />
                                        </div>
                                        <input
                                          type="search"
                                          name="search"
                                          className="block w-full text-sm text-gray-600 border border-gray-50 rounded-full bg-gray-400 placeholder-gray-500 focus:outline-0 py-1 px-8"
                                          placeholder="Search Raffle"
                                          //   required=""
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
                                            alt="base-crypto"
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
                                            alt="bnb-crypto-icon"
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
                                            src={SOLCrypto}
                                            alt="sol-crypto-icon"
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
                                            src={ETHCrypto}
                                            alt="eth-crypto-icon"
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
                                            alt="avax-crypto-icon"
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
                                            src={MaticCrypto}
                                            alt="matic-crypto-icon"
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
                                            alt="ada-crypto-icon"
                                          />
                                          ADA
                                        </p>
                                        <p>$56,623.54</p>
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                              </ul>

                              <div className="w-6 h-6 xl:w-8 xl:h-8">
                                <Image src={ETHCrypto} alt="eth-crypto-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start justify-between gap-4 mt-4 mb-4">
                          <ul className="ps-4 lg:ps-6">
                            <li className="mb-2">
                              <Link
                                href="#"
                                className=" text-extsy info_tooltips flex items-center gap-2 underline text-xs"
                                title="Network fees and all exchange charges are built into the rate. No hidden costs, guaranteed."
                              >
                                No hidden fees
                                <Image src={InfoIcon} alt="information-icon" />
                              </Link>
                            </li>
                            <li className="flex items-center gap-4">
                              <p>
                                <Link
                                  href="#"
                                  className="text-extsy info_tooltips flex items-center gap-2 underline text-[10px] "
                                  title="This is an estimated rate.EXTSY will secure the best available rate for your exchange. Find out more."
                                >
                                  Estimated rate
                                  <Image
                                    src={InfoIcon}
                                    alt="information-icon"
                                  />
                                </Link>
                              </p>
                              <p className=" text-extsy flex items-center gap-2 text-[10px]">
                                1 BTC ~ 22.22413 ETH
                              </p>
                            </li>
                          </ul>
                          <ul className="pe-4 lg:pe-6">
                            <li className="mb-2">
                              <Link
                                href="#"
                                className="text-extsy info_tooltips flex items-center gap-2 underline text-[10px]"
                                title="Compare Prices Find the Best Value for Your Crypto Transactions Learn more."
                              >
                                Compare Prices
                                <Image src={InfoIcon} alt="information-icon" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="text-extsy info_tooltips flex items-center gap-2 underline text-[10px]"
                                title="Cashback You will get 0.04% cashback of your swap to your wallet. Find out more."
                              >
                                Signup to get cashback
                                <Image src={InfoIcon} alt="information-icon" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <Link
                          href="/pages/swap"
                          className="block w-full bg-gradient border border-white !rounded-full text-center text-gray-800 py-2 xl:py-3 px-8 harmonyos-sans-regular"
                        >
                          Swap Now
                        </Link>
                      </div>
                    )}
                    {activeTab === 'buy' && (
                      <div id="second" className="tab-content p-4 xl:p-5">
                        <div className="relative">
                          <div className="flex items-end justify-end lg:justify-between gap-4">
                            <p className="hidden lg:block text-gray-600 mb-2 text-sm">
                              You Pay
                            </p>
                            <nav className="crypto-tabs-choose flex items-center gap-2 mb-4">
                              <button className="active flex items-center gap-1 bg-gradient rounded-md text-xs text-gray-800 py-2 px-3">
                                Buy
                                <Image src={ArrowTDown} alt="arrow-t-down" />
                              </button>
                              <button className="flex items-center gap-1  rounded-md text-xs text-white py-2 px-3">
                                Sell
                                <Image src={ArrowTUp} alt="arrow-t-up" />
                              </button>
                            </nav>
                          </div>

                          <div className=" border border-white rounded-xl lg:rounded-2xl py-2 xl:py-3 px-3 xl:px-6 mb-2 xl:mb-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <input
                                  disabled
                                  value="1500"
                                  className="block w-4/5 bg-transparent text-md xl:text-xl text-white font-bold border-0 focus:outline-0"
                                />
                              </div>
                              <div className="flex items-center gap-2">
                                <ul className="tabs-dropdown">
                                  <li className="dropdown">
                                    <button className="dropdown-toggler">
                                      <h4 className="flex items-center justify-end gap-2 text-md xl:text-xl font-bold">
                                        <Image
                                          src={AngleWDown}
                                          alt="angle-w-down"
                                        />
                                        USD
                                      </h4>
                                    </button>
                                    <ul className="dropdown-menu !w-56 lg:!w-64">
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
                                              alt="usa-flag-icon"
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
                                            <Image src={AusFlagIcon} alt="" />
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
                                            <Image src={BahFlagIcon} alt="" />
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
                                            <Image src={BarFlagIcon} alt="" />
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
                                            <Image src={CaFlagIcon} alt="" />
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
                                            <Image src={ChiFlagIcon} alt="" />
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
                                            <Image src={BarFlagIcon} alt="" />
                                            Barbados dollar
                                          </p>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <div className="w-6 h-6 xl:w-8 xl:h-8">
                                  <Image
                                    src={USAFlagIcon}
                                    alt="usa-flag-icon"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="hidden lg:block text-gray-600 mb-2 text-sm">
                          You Get
                        </p>
                        <div className=" border border-white rounded-3xl py-4 xl:py-5 px-3 xl:px-6 mb-2 xl:mb-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <input
                                disabled
                                value="0.5220165"
                                className="block w-32 bg-transparent text-md xl:text-xl text-white font-bold border-b border-white/35 focus:outline-0 pb-1 mb-2"
                              />
                              <div className="flex items-center gap-2">
                                <Image src={CryptoUp} alt="crypto-up" />
                                <input
                                  disabled
                                  value="+ 3,390 (5.94%)"
                                  className="bg-transparent border-0 text-xs xl:text-md flex items-center gap-2 focus:outline-0"
                                />
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <ul className="tabs-dropdown">
                                <li className="dropdown">
                                  <button className="dropdown-toggler">
                                    <h4 className="flex items-center justify-end gap-2 text-md xl:text-xl font-bold">
                                      <Image
                                        src={AngleWDown}
                                        alt="angle-w-down"
                                      />
                                      ETH
                                    </h4>
                                  </button>
                                  <ul className="dropdown-menu !w-56 lg:!w-96">
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
                                            alt="search-icon"
                                          />
                                        </div>
                                        <input
                                          type="search"
                                          name="search"
                                          className="block w-full text-sm text-gray-600 border border-gray-50 rounded-full bg-gray-400 placeholder-gray-500 focus:outline-0 py-1 px-8"
                                          placeholder="Search Raffle"
                                          //   required=""
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
                                            src={BtcCrypto}
                                            alt="btc-crypto-icon"
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
                                            alt="bnb-crypto-icon"
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
                                            alt="avax-crypto-icon"
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
                                            src={ETHCrypto}
                                            alt="eth-crypto-icon"
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
                                            src={BtcCrypto}
                                            alt="btc-crypto-icon"
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
                                            src={MaticCrypto}
                                            alt="matic-crypto-icon"
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
                                            src={BtcCrypto}
                                            alt="btc-crypto-icon"
                                          />
                                          XRP
                                        </p>
                                        <p>$56,623.54</p>
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                              </ul>

                              <div className="w-6 h-6 xl:w-8 xl:h-8">
                                <Image src={ETHCrypto} alt="eth-crypto-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start justify-center gap-4 mt-4 mb-4">
                          <ul className="flex items-center gap-2">
                            <li>
                              <Link
                                href="#"
                                className="text-extsy info_tooltips flex items-center gap-2 underline text-xs"
                                title="Network fees and all exchange charges are built into the rate. No hidden costs, guaranteed."
                              >
                                No hidden fees
                                <Image src={InfoIcon} alt="information-icon" />
                              </Link>
                            </li>
                            <li>
                              <p>
                                <Link
                                  href="#"
                                  className="text-extsy info_tooltips flex items-center gap-2 underline text-xs"
                                  title="This is an estimated rate.EXTSY will secure the best available rate for your exchange. Find out more."
                                >
                                  Estimated rate
                                  <Image
                                    src={InfoIcon}
                                    alt="information-icon"
                                  />
                                </Link>
                              </p>
                            </li>
                            <li className="flex items-center gap-4">
                              <p className="text-extsy flex items-center gap-2 text-xs">
                                1 BTC ~ 22.22413 ETH
                              </p>
                            </li>
                          </ul>
                        </div>
                        <Link
                          href="/pages/buySell"
                          className="block w-full bg-gradient border border-white !rounded-full text-center text-gray-800 py-2 xl:py-3 px-8 harmonyos-sans-regular"
                        >
                          Buy Now
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoCurrency;
