"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeaderLogo from "../app/assets/images/header-logo.svg";
import ArrowLeft from "../app/assets/images/arrow-left.svg";
import ArrowSRight from "../app/assets/images/arrow-s-right.svg";
import SearchIcon from "../app/assets/images/search-icon.svg";
import LogoIcon from "./svgs/LogoIcon";
import Link from "next/link";
import AngleDown from "./svgs/AngleDown";
import AngleUp from "./svgs/AngleUp";
import SupportIcon from "./svgs/SupportIcon";
import LanguageIcon from "./svgs/LanguageIcon";
import DownloadAppIcon from "./svgs/DownloadAppIcon";
import DownloadAppQR from "./svgs/DownloadAppQR";
import SwapIcon from "./svgs/SwapIcon";
import ArrowRightIcon from "./svgs/ArrowRightIcon";
import BuyIcon from "./svgs/BuyIcon";
import SellIcon from "./svgs/SellIcon";
import ExtensionIcon from "./svgs/ExtensionIcon";
import RaffleIcon from "./svgs/RaffleIcon";
import AMLCheckIcon from "./svgs/AMLCheckIcon";
import BalanceTrackerIcon from "./svgs/BalanceTrackerIcon";
import VirtualCardIcon from "./svgs/VirtualCardIcon";
import APIIcon from "./svgs/APIIcon";
import SDKIcon from "./svgs/SDKIcon";
import WidgetIcon from "./svgs/WidgetIcon";
import PartnershipIcon from "./svgs/PartnershipIcon";
import DocsIcon from "./svgs/DocsIcon";
import P2PIcon from "./svgs/P2PIcon";
import SpotIcon from "./svgs/SpotIcon";
import FuturesIcon from "./svgs/FuturesIcon";

interface DropdownsVisible {
  swapBuySell: boolean;
  products: boolean;
  forBusiness: boolean;
  trade: boolean;
  support: boolean;
  EN: boolean;
  downloadApp: boolean;
}

const Header = () => {
  const [isMobileNavbarOpen, setMobileNavbarOpen] = useState<boolean>(false);
  const [, setIsFixed] = useState<boolean>(false);
  const [dropdownsVisible, setDropdownsVisible] = useState<DropdownsVisible>({
    swapBuySell: false,
    products: false,
    forBusiness: false,
    trade: false,
    support: false,
    EN: false,
    downloadApp: false,
  });
  const [activeSubmenu, setActiveSubmenu] = useState<string>(""); // To track active submenus
  const toggleDropdown = (dropdown: keyof DropdownsVisible) => {
    setDropdownsVisible((prevState) => {
      const newDropdownsVisible = Object.keys(prevState).reduce((acc, key) => {
        acc[key as keyof DropdownsVisible] =
          key === dropdown ? !prevState[key as keyof DropdownsVisible] : false;
        return acc;
      }, {} as DropdownsVisible);

      return newDropdownsVisible;
    });

    if (dropdownsVisible[dropdown]) {
      setActiveSubmenu("");
    }
  };

  const toggleSubmenu = (
    submenu: string,
    event: React.MouseEvent<HTMLLIElement>
  ) => {
    event.stopPropagation(); // Prevent click from bubbling up
    setActiveSubmenu((prev) => (prev === submenu ? "" : submenu));
  };

  const handleDropdownMouseEnter = (dropdown: keyof DropdownsVisible) => {
    setDropdownsVisible((prev) => ({ ...prev, [dropdown]: true }));
  };

  const handleMobileNavbarToggle = () => {
    setMobileNavbarOpen((prev) => !prev);
  };

  const handleDropdownMouseLeave = (dropdown: keyof DropdownsVisible) => {
    setDropdownsVisible((prev) => ({ ...prev, [dropdown]: false }));
  };

  const handleSubmenuMouseEnter = (menuName: string) => {
    setActiveSubmenu(menuName);
  };

  const handleSubmenuMouseLeave = () => {
    setActiveSubmenu("");
  };

  useEffect(() => {
    const handleResize = () => {
      setDropdownsVisible({
        swapBuySell: false,
        products: false,
        forBusiness: false,
        trade: false,
        support: false,
        EN: false,
        downloadApp: false,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header-area py-4 lg:py-0 z-20 px-4 md:px-10 bg-[#121212]`}
    >
      <nav
        className={`mobile-area block lg:hidden ${
          isMobileNavbarOpen ? "mobile-active" : ""
        }`}
      >
        <div className="">
          <div
            className={`mobile-wrapper relative z-1000 flex items-center justify-between `}
          >
            <Link href={"/"} className="header-logo w-28 lg:w-36 ">
              <Image src={HeaderLogo} alt="logo" />
            </Link>
            <ul className="flex items-center gap-4 z-30">
              <li>
                <a
                  className="signup-btn bg-gradient !rounded-full harmonyos-sans-regular py-2 px-6 ms-1"
                  href="#"
                  style={{
                    color: "#000",
                    fontSize: "14px",
                  }}
                >
                  Join PRO
                </a>
              </li>
              <li>
                <button
                  id="mobile-toggler"
                  className={`inline-block relative mt-2 ${
                    isMobileNavbarOpen ? "active" : ""
                  }`}
                  onClick={handleMobileNavbarToggle}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <ul
          className={`header-navbar text-base ${
            isMobileNavbarOpen ? "active" : ""
          }`}
          id="mobile-navbar"
        >
          <li>
            <div className="grid grid-cols-12 gap-3 px-3 mb-8">
              <div className="col-span-6">
                <Link
                  href="#"
                  className="login-btn block w-full text-center !rounded-full py-2.5 px-8"
                >
                  Login
                </Link>
              </div>
              <div className="col-span-6">
                <Link
                  href="#"
                  className="signup-btn block w-full text-center bg-gradient border-white !rounded-full text-gray-800 py-2.5 px-8"
                >
                  Signup
                </Link>
              </div>
            </div>
          </li>
          <li
            className={`dropdown ${
              dropdownsVisible.swapBuySell ? "active" : ""
            }`}
            onClick={() => toggleDropdown("swapBuySell")}
          >
            <button className="dropdown-toggler">Swap & Buy/Sell</button>
            <ul className={`dropdown-menu`}>
              <li
                className={`full-dropdown ${
                  activeSubmenu === "swap" ? "active" : ""
                }`}
                onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                  toggleSubmenu("swap", e)
                }
              >
                <button className="full-dropdown-toggler">Swap</button>
                <ul className={`full-dropdown-menu `}>
                  <li
                    onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                      toggleSubmenu("", e)
                    }
                    className="flex gap-2 mb-10 ml-2 mt-2"
                  >
                    <Image src={ArrowLeft} alt="arrowLeft" />
                    Back
                  </li>
                  <li>
                    <Link href="/pages/swap">Swap Bitcoin (BTC)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/swap">Swap Ethereum (ETH)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/swap">Swap Tether (USDT)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/swap">Swap Ripple (XRP)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/swap">Swap Solana (Sol)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/swap">Swap Polygon (MATIC)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/swap">Swap Binance Coin (BNB)</Link>{" "}
                  </li>
                  <li>
                    <Link
                      className="!flex items-center gap-2 text-amber-200"
                      href="/pages/swap"
                    >
                      All Cryptocurrencies
                      <Image src={ArrowSRight} alt="arrowLeft" />
                    </Link>{" "}
                  </li>
                </ul>
              </li>
              <li
                className={`full-dropdown ${
                  activeSubmenu === "buy" ? "active" : ""
                }`}
                onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                  toggleSubmenu("buy", e)
                }
              >
                <button className="full-dropdown-toggler">Buy</button>
                <ul className={`full-dropdown-menu `}>
                  <li
                    onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                      toggleSubmenu("", e)
                    }
                    className="flex gap-2 mb-10 ml-2 mt-2"
                  >
                    <Image src={ArrowLeft} alt="arrowLeft" />
                    Back
                  </li>
                  <li>
                    <Link href="/pages/buySell">Buy Bitcoin (BTC)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/buySell">Buy Ethereum (ETH)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/buySell">Buy Tether (USDT)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/buySell">Buy Ripple (XRP)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/buySell">Buy Solana (Sol)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/buySell">Buy Polygon (MATIC)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/buySell">Buy Binance Coin (BNB)</Link>{" "}
                  </li>
                  <li>
                    <Link
                      className="!flex items-center gap-2 text-amber-200"
                      href="/pages/buySell"
                    >
                      All Cryptocurrencies
                      <Image src={ArrowSRight} alt="arrowLeft" />
                    </Link>{" "}
                  </li>
                </ul>
              </li>
              <li
                className={`full-dropdown ${
                  activeSubmenu === "sell" ? "active" : ""
                }`}
                onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                  toggleSubmenu("sell", e)
                }
              >
                <button className="full-dropdown-toggler">Sell</button>
                <ul className={`full-dropdown-menu `}>
                  <li
                    onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                      toggleSubmenu("", e)
                    }
                    className="flex gap-2 mb-10 ml-2 mt-2"
                  >
                    <Image src={ArrowLeft} alt="arrowLeft" />
                    Back
                  </li>
                  <li>
                    <Link href="/pages/buySell">Sell Bitcoin (BTC)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/buySell">Sell Ethereum (ETH)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/buySell">Sell Tether (USDT)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/buySell">Sell Ripple (XRP)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/buySell">Sell Solana (Sol)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/buySell">Sell Polygon (MATIC)</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/buySell">Sell Binance Coin (BNB)</Link>{" "}
                  </li>
                  <li>
                    <Link
                      className="!flex items-center gap-2 text-amber-200"
                      href="/pages/buySell"
                    >
                      All Cryptocurrencies
                      <Image src={ArrowSRight} alt="arrowLeft" />
                    </Link>{" "}
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li
            className={`dropdown ${dropdownsVisible.products ? "active" : ""}`}
            onClick={() => toggleDropdown("products")}
          >
            <button className="dropdown-toggler">Products</button>
            <ul className={`dropdown-menu `}>
              <li>
                <Link href="/pages/swap">Swap</Link>{" "}
              </li>
              <li>
                <Link href="/pages/virtualCard">Virtual Card</Link>{" "}
              </li>
              <li>
                <Link href="/pages/virtualCard">Balance Tracker</Link>{" "}
              </li>
              <li>
                <Link href="/pages/virtualCard">AML Checks</Link>{" "}
              </li>
              <li>
                <Link href="/pages/raffle">Raffle</Link>{" "}
              </li>
              <li>
                <Link href="#">Extension</Link>{" "}
              </li>
            </ul>
          </li>
          <li>
            <Link href="/pages/extsyPro">Extsy PRO</Link>
          </li>
          <li
            className={`dropdown ${
              dropdownsVisible.forBusiness ? "active" : ""
            }`}
            onClick={() => toggleDropdown("forBusiness")}
          >
            <button className="dropdown-toggler">For Business</button>
            <ul className={`dropdown-menu`}>
              <li>
                <Link href="/pages/apiBusiness">API</Link>{" "}
              </li>
              <li>
                <Link href="businesses.html#sdk-business-section">SDK</Link>{" "}
              </li>
              <li>
                <Link href="#">Widget</Link>{" "}
              </li>
              <li>
                <Link href="/pages/partnership">Partnership Program</Link>{" "}
              </li>
              <li>
                <Link href="#">Docs</Link>{" "}
              </li>
            </ul>
          </li>
          <li
            className={`dropdown ${dropdownsVisible.trade ? "active" : ""}`}
            onClick={() => toggleDropdown("trade")}
          >
            <button className="dropdown-toggler">Trade</button>
            <ul className={`dropdown-menu `}>
              <li>
                <Link href="/pages/p2p">P2P</Link>{" "}
              </li>
              <li>
                <Link href="/pages/trading">Spot</Link>{" "}
              </li>
              <li>
                <Link href="/pages/trading">Futures</Link>{" "}
              </li>
            </ul>
          </li>
          <li
            className={`dropdown ${dropdownsVisible.support ? "active" : ""}`}
            onClick={() => toggleDropdown("support")}
          >
            <Link className="dropdown-toggler" href="#">
              Support
            </Link>
            <ul className={`dropdown-menu `}>
              <li>
                <Link href="/pages/howItWorks">How it works?</Link>{" "}
              </li>
              <li>
                <Link href="/pages/contactSupport">Contact Support</Link>{" "}
              </li>
              <li>
                <Link href="/pages/faqs">Faqs</Link>{" "}
              </li>
            </ul>
          </li>
          <li>
            <Link href="/pages/blog">Blog</Link>
          </li>
          <li
            className={`dropdown ${dropdownsVisible.EN ? "active" : ""}`}
            onClick={() => toggleDropdown("EN")}
          >
            <Link className="dropdown-toggler" href="#">
              EN
            </Link>
            <ul className={`dropdown-menu !w-52 `}>
              <li>
                <h5 className="text-base font-semibold px-3 mb-3">Language</h5>
              </li>
              <li>
                <form className="w-full px-3 mb-2">
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                      <Image src={SearchIcon} alt="searchIcom" />
                    </div>
                    <input
                      type="search"
                      name="search"
                      className="block w-full text-sm text-gray-600 border border-gray-50 rounded-full bg-gray-400 placeholder-gray-500 focus:outline-0 py-1 px-8"
                      placeholder="Search Raffle"
                      required
                    />
                  </div>
                </form>
              </li>
              <li>
                <Link href="#">Arabic</Link>{" "}
              </li>
              <li>
                <Link href="#">Bengali</Link>{" "}
              </li>
              <li>
                <Link href="#">English</Link>{" "}
              </li>
              <li>
                <Link href="#">Dutch</Link>{" "}
              </li>
              <li>
                <Link href="#">Chinese</Link>{" "}
              </li>
              <li>
                <Link href="#">Spanish</Link>{" "}
              </li>
              <li>
                <Link href="#">Portuguese</Link>{" "}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <nav className="desktop-area relative z-50 hidden lg:block">
        <div>
          <div className="header-wrapper flex gap-4 items-center justify-between">
            <div className="flex gap-4">
              <Link href="/" className="header-logo py-2">
                <LogoIcon />
              </Link>

              <ul className="text-base desktop-navbar flex items-center gap-5">
                <li
                  className={`dropdown ${
                    dropdownsVisible.swapBuySell ? "active" : ""
                  }`}
                  onMouseEnter={() => handleDropdownMouseEnter("swapBuySell")}
                  onMouseLeave={() => handleDropdownMouseLeave("swapBuySell")}
                >
                  <div className="flex items-center">
                    <Link
                      className="dropdown-toggler text-[14px]"
                      href="/pages/buySell"
                    >
                      Swap & Buy/Sell
                    </Link>
                    {dropdownsVisible?.swapBuySell ? (
                      <AngleUp />
                    ) : (
                      <AngleDown />
                    )}
                  </div>
                  <ul className="dropdown-menu !w-52 min-w-[278px]">
                    {/* Swap Submenu */}
                    <li
                      className={`dropdown px-2 ${
                        activeSubmenu === "swap" ? "active" : ""
                      }`}
                      onMouseEnter={() => handleSubmenuMouseEnter("swap")}
                      onMouseLeave={handleSubmenuMouseLeave}
                    >
                      <Link className="dropdown-toggler" href="/pages/swap">
                        <div className="flex gap-3 items-center">
                          <div>
                            <SwapIcon />
                          </div>
                          <div className="flex flex-col min-w-[182px]">
                            <a
                              style={{
                                lineHeight: "1.5",
                                padding: 0,
                              }}
                              href=""
                              className="harmonyos-sans-regular font-[500]"
                            >
                              Swap
                            </a>
                            <p
                              className="text-[#655F5F] text-[12px]"
                              style={{
                                lineHeight: "1.5",
                              }}
                            >
                              Seamless Crypto Swaps Across Multiple Chains
                            </p>
                          </div>
                          <div>
                            <ArrowRightIcon />
                          </div>
                        </div>
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/pages/swap">Swap Bitcoin (BTC)</Link>
                        </li>
                        <li>
                          <Link href="/pages/swap">Swap Ethereum (ETH)</Link>
                        </li>
                        <li>
                          <Link href="/pages/swap">Swap Tether (USDT)</Link>
                        </li>
                        <li>
                          <Link href="/pages/swap">Swap Ripple (XRP)</Link>
                        </li>
                        <li>
                          <Link href="/pages/swap">Swap Solana (Sol)</Link>
                        </li>
                        <li>
                          <Link href="/pages/swap">Swap Polygon (MATIC)</Link>
                        </li>
                        <li>
                          <Link href="/pages/swap">
                            Swap Binance Coin (BNB)
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="!flex items-center gap-2 text-amber-200"
                            href="/pages/swap"
                          >
                            All Cryptocurrencies{" "}
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Buy Submenu */}
                    <li
                      className={`dropdown px-2 ${
                        activeSubmenu === "buy" ? "active" : ""
                      }`}
                      onMouseEnter={() => handleSubmenuMouseEnter("buy")}
                      onMouseLeave={handleSubmenuMouseLeave}
                    >
                      <Link className="dropdown-toggler" href="/pages/buySell">
                        <div className="flex gap-3 items-center">
                          <div>
                            <BuyIcon />
                          </div>
                          <div className="flex flex-col min-w-[182px]">
                            <a
                              style={{
                                lineHeight: "1.5",
                                padding: 0,
                              }}
                              href=""
                              className="harmonyos-sans-regular font-[500]"
                            >
                              Buy
                            </a>
                            <p
                              className="text-[#655F5F] text-[12px]"
                              style={{
                                lineHeight: "1.5",
                              }}
                            >
                              Instant Crypto Purchases with Trusted Providers{" "}
                            </p>
                          </div>
                          <div>
                            <ArrowRightIcon />
                          </div>
                        </div>
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/pages/buySell">Buy Bitcoin (BTC)</Link>
                        </li>
                        <li>
                          <Link href="/pages/buySell">Buy Ethereum (ETH)</Link>
                        </li>
                        <li>
                          <Link href="/pages/buySell">Buy Tether (USDT)</Link>
                        </li>
                        <li>
                          <Link href="/pages/buySell">Buy Ripple (XRP)</Link>
                        </li>
                        <li>
                          <Link href="/pages/buySell">Buy Solana (Sol)</Link>
                        </li>
                        <li>
                          <Link href="/pages/buySell">Buy Polygon (MATIC)</Link>
                        </li>
                        <li>
                          <Link href="/pages/buySell">
                            Buy Binance Coin (BNB)
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="!flex items-center gap-2 text-amber-200"
                            href="/pages/buySell"
                          >
                            All Cryptocurrencies{" "}
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Sell Submenu */}
                    <li
                      className={`dropdown px-2 ${
                        activeSubmenu === "sell" ? "active" : ""
                      }`}
                      onMouseEnter={() => handleSubmenuMouseEnter("sell")}
                      onMouseLeave={handleSubmenuMouseLeave}
                    >
                      <Link className="dropdown-toggler" href="/pages/buySell">
                        <div className="flex gap-3 items-center">
                          <div>
                            <SellIcon />
                          </div>
                          <div className="flex flex-col min-w-[182px]">
                            <a
                              style={{
                                lineHeight: "1.5",
                                padding: 0,
                              }}
                              href=""
                              className="harmonyos-sans-regular font-[500]"
                            >
                              Sell
                            </a>
                            <p
                              className="text-[#655F5F] text-[12px]"
                              style={{
                                lineHeight: "1.5",
                              }}
                            >
                              Effortless Crypto Selling with Competitive Rates{" "}
                            </p>
                          </div>
                          <div>
                            <ArrowRightIcon />
                          </div>
                        </div>
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/pages/buySell">Sell Bitcoin (BTC)</Link>
                        </li>
                        <li>
                          <Link href="/pages/buySell">Sell Ethereum (ETH)</Link>
                        </li>
                        <li>
                          <Link href="/pages/buySell">Sell Tether (USDT)</Link>
                        </li>
                        <li>
                          <Link href="/pages/buySell">Sell Ripple (XRP)</Link>
                        </li>
                        <li>
                          <Link href="/pages/buySell">Sell Solana (Sol)</Link>
                        </li>
                        <li>
                          <Link href="/pages/buySell">
                            Sell Polygon (MATIC)
                          </Link>
                        </li>
                        <li>
                          <Link href="/pages/buySell">
                            Sell Binance Coin (BNB)
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="!flex items-center gap-2 text-amber-200"
                            href="/pages/buySell"
                          >
                            All Cryptocurrencies{" "}
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li
                  className={`dropdown ${
                    dropdownsVisible.products ? "active" : ""
                  }`}
                  onMouseEnter={() => handleDropdownMouseEnter("products")}
                  onMouseLeave={() => handleDropdownMouseLeave("products")}
                >
                  <div className="flex items-center">
                    <Link className="dropdown-toggler text-[14px]" href="#">
                      Products
                    </Link>
                    {dropdownsVisible?.products ? <AngleUp /> : <AngleDown />}
                  </div>

                  <ul className="dropdown-menu !w-52 min-w-[278px]">
                    <li>
                      <Link href="/pages/swap">
                        <div className="flex gap-3 items-center">
                          <div>
                            <SwapIcon />
                          </div>
                          <div className="flex flex-col min-w-[182px]">
                            <a
                              style={{
                                lineHeight: "1.5",
                                padding: 0,
                              }}
                              href=""
                              className="harmonyos-sans-regular font-[500]"
                            >
                              Swap
                            </a>
                            <p
                              className="text-[#655F5F] text-[12px]"
                              style={{
                                lineHeight: "1.5",
                              }}
                            >
                              Cross-Chain Crypto Swap: Fast, Secure, and
                              Hassle-Free Transactions{" "}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/virtualCard">
                        <div className="flex gap-3 items-center">
                          <div>
                            <VirtualCardIcon />
                          </div>
                          <div className="flex flex-col min-w-[182px]">
                            <a
                              style={{
                                lineHeight: "1.5",
                                padding: 0,
                              }}
                              href=""
                              className="harmonyos-sans-regular font-[500]"
                            >
                              Virtual Card
                            </a>
                            <p
                              className="text-[#655F5F] text-[12px]"
                              style={{
                                lineHeight: "1.5",
                              }}
                            >
                              Your Digital Payment Solution: Secure and
                              Versatile Virtual Cards
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <div className="flex gap-3 items-center">
                          <div>
                            <BalanceTrackerIcon />
                          </div>
                          <div className="flex flex-col min-w-[182px]">
                            <a
                              style={{
                                lineHeight: "1.5",
                                padding: 0,
                              }}
                              href=""
                              className="harmonyos-sans-regular font-[500]"
                            >
                              Balance Tracker
                            </a>
                            <p
                              className="text-[#655F5F] text-[12px]"
                              style={{
                                lineHeight: "1.5",
                              }}
                            >
                              Real-Time Balance Tracker: Stay on Top of Your
                              Crypto Holdings
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <div className="flex gap-3 items-center">
                          <div>
                            <AMLCheckIcon />
                          </div>
                          <div className="flex flex-col min-w-[182px]">
                            <a
                              style={{
                                lineHeight: "1.5",
                                padding: 0,
                              }}
                              href=""
                              className="harmonyos-sans-regular font-[500]"
                            >
                              AML Checks
                            </a>
                            <p
                              className="text-[#655F5F] text-[12px]"
                              style={{
                                lineHeight: "1.5",
                              }}
                            >
                              Advanced AML Compliance: Safeguard Your
                              Transactions with Robust Security
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/raffle">
                        <div className="flex gap-3 items-center">
                          <div>
                            <RaffleIcon />
                          </div>
                          <div className="flex flex-col min-w-[182px]">
                            <a
                              style={{
                                lineHeight: "1.5",
                                padding: 0,
                              }}
                              href=""
                              className="harmonyos-sans-regular font-[500]"
                            >
                              Raffle
                            </a>
                            <p
                              className="text-[#655F5F] text-[12px]"
                              style={{
                                lineHeight: "1.5",
                              }}
                            >
                              Exciting Crypto Raffles: Enter for a Chance to Win
                              Big!
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <div className="flex gap-3 items-center">
                          <div>
                            <ExtensionIcon />
                          </div>
                          <div className="flex flex-col min-w-[182px]">
                            <a
                              style={{
                                lineHeight: "1.5",
                                padding: 0,
                              }}
                              href=""
                              className="harmonyos-sans-regular font-[500]"
                            >
                              Extension
                            </a>
                            <p
                              className="text-[#655F5F] text-[12px]"
                              style={{
                                lineHeight: "1.5",
                              }}
                            >
                              Powerful Browser Extension: Manage Crypto Anytime,
                              Anywhere
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`dropdown ${
                    dropdownsVisible.forBusiness ? "active" : ""
                  }`}
                  onMouseEnter={() => handleDropdownMouseEnter("forBusiness")}
                  onMouseLeave={() => handleDropdownMouseLeave("forBusiness")}
                >
                  <div className="flex items-center">
                    <Link className="dropdown-toggler text-[14px]" href="#">
                      For Business
                    </Link>
                    {dropdownsVisible?.forBusiness ? (
                      <AngleUp />
                    ) : (
                      <AngleDown />
                    )}
                  </div>
                  <ul className="dropdown-menu !w-52 min-w-[278px]">
                    <li>
                      <Link href="/pages/apiBusiness">
                        <div className="flex gap-3 items-center">
                          <div>
                            <APIIcon />
                          </div>
                          <div className="flex flex-col min-w-[182px]">
                            <a
                              style={{
                                lineHeight: "1.5",
                                padding: 0,
                              }}
                              href=""
                              className="harmonyos-sans-regular font-[500]"
                            >
                              API
                            </a>
                            <p
                              className="text-[#655F5F] text-[12px]"
                              style={{
                                lineHeight: "1.5",
                              }}
                            >
                              Comprehensive API Access: Power Your Platform with
                              Seamless Integration
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/virtualCard">
                        <div className="flex gap-3 items-center">
                          <div>
                            <SDKIcon />
                          </div>
                          <div className="flex flex-col min-w-[182px]">
                            <a
                              style={{
                                lineHeight: "1.5",
                                padding: 0,
                              }}
                              href=""
                              className="harmonyos-sans-regular font-[500]"
                            >
                              SDK
                            </a>
                            <p
                              className="text-[#655F5F] text-[12px]"
                              style={{
                                lineHeight: "1.5",
                              }}
                            >
                              Developer-Friendly SDK: Build and Scale with Ease
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <div className="flex gap-3 items-center">
                          <div>
                            <WidgetIcon />
                          </div>
                          <div className="flex flex-col min-w-[182px]">
                            <a
                              style={{
                                lineHeight: "1.5",
                                padding: 0,
                              }}
                              href=""
                              className="harmonyos-sans-regular font-[500]"
                            >
                              Widget
                            </a>
                            <p
                              className="text-[#655F5F] text-[12px]"
                              style={{
                                lineHeight: "1.5",
                              }}
                            >
                              Customizable Widget: Embed Crypto Services in Just
                              a Few Clicks
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/partnership">
                        <div className="flex gap-3 items-center">
                          <div>
                            <PartnershipIcon />
                          </div>
                          <div className="flex flex-col min-w-[182px]">
                            <a
                              style={{
                                lineHeight: "1.5",
                                padding: 0,
                              }}
                              href=""
                              className="harmonyos-sans-regular font-[500]"
                            >
                              Partnership Program
                            </a>
                            <p
                              className="text-[#655F5F] text-[12px]"
                              style={{
                                lineHeight: "1.5",
                              }}
                            >
                              Join Our Partnership Program: Unlock Exclusive
                              Benefits and Growth Opportunities
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/raffle">
                        <div className="flex gap-3 items-center">
                          <div>
                            <DocsIcon />
                          </div>
                          <div className="flex flex-col min-w-[182px]">
                            <a
                              style={{
                                lineHeight: "1.5",
                                padding: 0,
                              }}
                              href=""
                              className="harmonyos-sans-regular font-[500]"
                            >
                              Docs
                            </a>
                            <p
                              className="text-[#655F5F] text-[12px]"
                              style={{
                                lineHeight: "1.5",
                              }}
                            >
                              In-Depth Documentation: Your Guide to Effortless
                              Integration and Development
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="text-[14px]">
                  <Link href="/pages/extsyPro">Extsy PRO</Link>
                </li>
                <li
                  className={`dropdown ${
                    dropdownsVisible.trade ? "active" : ""
                  }`}
                  onMouseEnter={() => handleDropdownMouseEnter("trade")}
                  onMouseLeave={() => handleDropdownMouseLeave("trade")}
                >
                  <div className="flex items-center">
                    <Link className="dropdown-toggler text-[14px]" href="#">
                      Trade
                    </Link>
                    {dropdownsVisible?.trade ? <AngleUp /> : <AngleDown />}
                  </div>
                  <ul className="dropdown-menu !w-52 min-w-[278px]">
                    <li>
                      <Link href="/pages/p2p">
                        <div className="flex gap-3 items-center">
                          <div>
                            <P2PIcon />
                          </div>
                          <div className="flex flex-col min-w-[182px]">
                            <a
                              style={{
                                lineHeight: "1.5",
                                padding: 0,
                              }}
                              href=""
                              className="harmonyos-sans-regular font-[500]"
                            >
                              P2P
                            </a>
                            <p
                              className="text-[#655F5F] text-[12px]"
                              style={{
                                lineHeight: "1.5",
                              }}
                            >
                              Peer-to-Peer Trading: Secure and Direct Crypto
                              Exchange
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/trading">
                        <div className="flex gap-3 items-center">
                          <div>
                            <SpotIcon />
                          </div>
                          <div className="flex flex-col min-w-[182px]">
                            <a
                              style={{
                                lineHeight: "1.5",
                                padding: 0,
                              }}
                              href=""
                              className="harmonyos-sans-regular font-[500]"
                            >
                              Spot
                            </a>
                            <p
                              className="text-[#655F5F] text-[12px]"
                              style={{
                                lineHeight: "1.5",
                              }}
                            >
                              Spot Trading: Real-Time Market Access with Instant
                              Settlements{" "}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/trading">
                        <div className="flex gap-3 items-center">
                          <div>
                            <FuturesIcon />
                          </div>
                          <div className="flex flex-col min-w-[182px]">
                            <a
                              style={{
                                lineHeight: "1.5",
                                padding: 0,
                              }}
                              href=""
                              className="harmonyos-sans-regular font-[500]"
                            >
                              Futures
                            </a>
                            <p
                              className="text-[#655F5F] text-[12px]"
                              style={{
                                lineHeight: "1.5",
                              }}
                            >
                              Futures Trading: Leverage Opportunities for
                              Advanced Traders
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="text-[14px]">
                  <Link href="/pages/blog">Blogs</Link>
                </li>
              </ul>
            </div>
            <ul className=" flex items-center gap-2 text-base justify-end desktop-navbar">
              <li>
                <Link className="!hidden xl:!block" href="#">
                  Login
                </Link>
              </li>
              <li>
                <a
                  className="signup-btn bg-gradient !rounded-full harmonyos-sans-regular py-2 px-6 ms-1"
                  href="#"
                  style={{
                    color: "#000",
                    fontSize: "14px",
                  }}
                >
                  Signup
                </a>
              </li>
              <li className="ms-3 text-[#8f8f8f]">|</li>
              <li
                className={`dropdown ${
                  dropdownsVisible.downloadApp ? "active" : ""
                }`}
                onMouseEnter={() => handleDropdownMouseEnter("downloadApp")}
                onMouseLeave={() => handleDropdownMouseLeave("downloadApp")}
              >
                <Link className="dropdown-toggler" href="#">
                  <DownloadAppIcon />
                </Link>
                <ul className="dropdown-menu-right !w-52">
                  <div className="flex flex-col items-center gap-2 px-4 py-6">
                    <p className="text-[#0B0A0A] harmonyos-sans-regular">
                      Download App
                    </p>
                    <DownloadAppQR />
                    <p className="text-[#655F5F] text-[12px]">
                      For IOS or Android
                    </p>
                  </div>
                </ul>
              </li>
              <li
                className={`dropdown ${
                  dropdownsVisible.support ? "active" : ""
                }`}
                onMouseEnter={() => handleDropdownMouseEnter("support")}
                onMouseLeave={() => handleDropdownMouseLeave("support")}
              >
                <Link className="dropdown-toggler" href="/pages/contactSupport">
                  <SupportIcon />
                </Link>
                <ul className="dropdown-menu-right">
                  <li>
                    <Link href="/pages/howItWorks">How it works?</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/contactSupport">Contact Support</Link>{" "}
                  </li>
                  <li>
                    <Link href="/pages/faqs">Faqs</Link>{" "}
                  </li>
                </ul>
              </li>

              <li
                className={`dropdown ${dropdownsVisible.EN ? "active" : ""}`}
                onMouseEnter={() => handleDropdownMouseEnter("EN")}
                onMouseLeave={() => handleDropdownMouseLeave("EN")}
              >
                <Link className="dropdown-toggler" href="#">
                  <LanguageIcon />
                </Link>
                <ul className="dropdown-menu-right !w-52">
                  <li>
                    <h5 className="text-base font-semibold px-3 mb-3">
                      Language
                    </h5>
                  </li>
                  <li>
                    <form className="w-full px-3 mb-2">
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                          <Image src={SearchIcon} alt="search-icon" />
                        </div>
                        <input
                          type="search"
                          name="search"
                          className="block w-full text-sm text-gray-600 border border-gray-50 rounded-full bg-gray-400 placeholder-gray-500 focus:outline-0 py-1 px-8"
                          placeholder="Search Raffle"
                          required
                        />
                      </div>
                    </form>
                  </li>
                  <li>
                    <Link href="#">Arabic</Link>{" "}
                  </li>
                  <li>
                    <Link href="#">Bengali</Link>{" "}
                  </li>
                  <li>
                    <Link href="#">English</Link>{" "}
                  </li>
                  <li>
                    <Link href="#">Dutch</Link>{" "}
                  </li>
                  <li>
                    <Link href="#">Chinese</Link>{" "}
                  </li>
                  <li>
                    <Link href="#">Spanish</Link>{" "}
                  </li>
                  <li>
                    <Link href="#">Portuguese</Link>{" "}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
