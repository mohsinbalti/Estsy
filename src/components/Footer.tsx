'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import HeaderLogo from '../app/assets/images/header-logo.svg';
import XIcon from '../app/assets/images/Twitter.svg';
import FrogIcon from '../app/assets/images/Twitter (1).svg';
import TelegramIcon from '../app/assets/images/Twitter (2).svg';
import MessageText from '../app/assets/images/message-text.svg';
import Link from 'next/link';
import PlayStoreButton from '../app/assets/images/Store download button.png';
import IStoreButton from '../app/assets/images/Store download button (1).png';
import QRCode from '../app/assets/images/footer qr.png';

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // If active, close it
    } else {
      setActiveIndex(index); // Otherwise, open the clicked one
    }
  };

  return (
    <div className="border-t border-[#221F1F] bg-[#0B0A0A] px-6 ">
      <footer className="footer-area relative z-50 max-w-[1440px] mx-auto pt-20 pb-10">
        <div>
          <Link href="/" className="footer-logo inline-block mb-4">
            <Image src={HeaderLogo} alt="" className="w-25" />
          </Link>
          <p className="mb-16 text-extsy">
            Swift and secure deFi platform for crypto swaps
          </p>
          <div className="grid md:grid-cols-12 gap-4 pb-0 lg:pb-24 text-extsy">
            <div className="md:col-span-12">
              <div className="grid md:grid-cols-12 gap-4">
                <div className="md:col-span-4 lg:col-span-2">
                  <div className="footer-widget mb-4">
                    <button
                      className="footer-toggler text-white harmonyos-sans-bold text-base lg:text-[20px] font-bold mb-2"
                      onClick={() => toggleAccordion(0)}
                    >
                      Company
                    </button>
                    <ul
                      className={`footer-list text-[14px] leading-7 mb-5 ${
                        activeIndex === 0 ? 'block' : 'hidden lg:block'
                      }`}
                    >
                      <li>
                        <Link href="/pages/mobileApp">Web App</Link>
                      </li>
                      <li>
                        <Link href="/pages/mobileApp">Mobile App</Link>
                      </li>
                      <li>
                        <Link href="/pages/priceComparison">
                          Price Comparison
                        </Link>
                      </li>
                      <li>
                        <Link href="/pages/apiBusiness">For Businesses</Link>
                      </li>
                      <li>
                        <Link href="/pages/blog">Blogs</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <button
                      className="footer-toggler text-white harmonyos-sans-bold text-base lg:text-[20px] font-bold mb-2"
                      onClick={() => toggleAccordion(4)}
                    >
                      For Partners
                    </button>
                    <ul
                      className={`footer-list text-[14px] leading-7  ${
                        activeIndex === 4 ? 'block' : 'hidden lg:block'
                      }`}
                    >
                      <li>
                        <Link href="/pages/partnership">Partner Dashboard</Link>
                      </li>
                      <li>
                        <Link href="/pages/apiBusiness">Development APIs</Link>
                      </li>
                      <li>
                        <Link href="#">Affiliate Links</Link>
                      </li>
                      <li>
                        <Link href="#">Widget</Link>
                      </li>
                      <li>
                        <Link href="businesses.html#sdk-business-section">
                          SDK
                        </Link>
                      </li>
                      <li>
                        <Link href="#">Docs</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-4 lg:col-span-2">
                  <div className="hidden md:block footer-widget mb-4">
                    <button
                      className="footer-toggler text-white harmonyos-sans-bold text-base lg:text-[20px] font-bold mb-2"
                      onClick={() => toggleAccordion(2)}
                    >
                      Swap Crypto
                    </button>
                    <ul
                      className={`footer-list text-[14px] leading-7  mb-5 ${
                        activeIndex === 2 ? 'block' : 'hidden lg:block'
                      }`}
                    >
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
                        <Link href="/pages/swap">Swap Binance Coin (BNB)</Link>
                      </li>
                      <li>
                        <Link href="/pages/swap">All Cryptocurrencies </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-4 lg:col-span-2">
                  <div className="footer-widget mb-4">
                    <button
                      className="footer-toggler text-white harmonyos-sans-bold text-base lg:text-[20px] font-bold mb-2"
                      onClick={() => toggleAccordion(5)}
                    >
                      Buy Crypto
                    </button>
                    <ul
                      className={`footer-list text-[14px] leading-7  ${
                        activeIndex === 5 ? 'block' : 'hidden lg:block'
                      }`}
                    >
                      <li>
                        <Link href="#">Buy Bitcoin (BTC)</Link>
                      </li>
                      <li>
                        <Link href="#">Buy Ethereum (ETH)</Link>
                      </li>
                      <li>
                        <Link href="#">Buy Tether (USDT)</Link>
                      </li>
                      <li>
                        <Link href="#">Buy Ripple (XRP)</Link>
                      </li>
                      <li>
                        <Link href="#">Buy Solana (SOL) </Link>
                      </li>
                      <li>
                        <Link href="#">Buy Matic Coin (MATIC) </Link>
                      </li>
                      <li>
                        <Link href="#">Buy Binance Coin (BNB)</Link>
                      </li>
                      <li>
                        <Link href="#">All Cryptocurrencies</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget mb-4">
                    <button
                      className="footer-toggler text-white harmonyos-sans-bold text-base lg:text-[20px] font-bold mb-2"
                      onClick={() => toggleAccordion(5)}
                    >
                      Legal
                    </button>
                    <ul
                      className={`footer-list text-[14px] leading-7  ${
                        activeIndex === 5 ? 'block' : 'hidden lg:block'
                      }`}
                    >
                      <li>
                        <Link href="#">Terms of Services</Link>
                      </li>
                      <li>
                        <Link href="#">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-4 lg:col-span-2">
                  <div className="footer-widget mb-4">
                    <button
                      className="footer-toggler text-white harmonyos-sans-bold text-base lg:text-[20px] font-bold mb-2"
                      onClick={() => toggleAccordion(5)}
                    >
                      Our Products
                    </button>
                    <ul
                      className={`footer-list text-[14px] leading-7  ${
                        activeIndex === 5 ? 'block' : 'hidden lg:block'
                      }`}
                    >
                      <li>
                        <Link href="#">BTC USDC</Link>
                      </li>
                      <li>
                        <Link href="#">ETH USDC</Link>
                      </li>
                      <li>
                        <Link href="#">BTC USDT</Link>
                      </li>
                      <li>
                        <Link href="#">ETH USDT</Link>
                      </li>
                      <li>
                        <Link href="#">MATIC USDT</Link>
                      </li>
                      <li>
                        <Link href="#">LTC USDT</Link>
                      </li>
                      <li>
                        <Link href="#">SOL USDT</Link>
                      </li>
                      <li>
                        <Link href="#">XRP USDT</Link>
                      </li>
                      <li>
                        <Link href="#">Bitcoin price</Link>
                      </li>
                      <li>
                        <Link href="#">Ethereum price</Link>
                      </li>
                      <li>
                        <Link href="#">Cardano price</Link>
                      </li>
                      <li>
                        <Link href="#">Solana price</Link>
                      </li>
                      <li>
                        <Link href="#">XRP price</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="footer-widget mb-4">
                    <button
                      className="footer-toggler text-white harmonyos-sans-bold text-base lg:text-[20px] font-bold mb-2"
                      onClick={() => toggleAccordion(6)}
                    >
                      Support
                    </button>
                    <ul
                      className={`footer-list text-[14px] leading-7  ${
                        activeIndex === 6 ? 'block' : 'hidden lg:block'
                      }`}
                    >
                      <li>
                        <Link href="#">How it works</Link>
                      </li>
                      <li>
                        <Link href="#">Support</Link>
                      </li>
                      <li>
                        <Link href="#">FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-4 lg:col-span-2">
                  <div className="footer-widget mb-4">
                    <button
                      className="footer-toggler text-white harmonyos-sans-bold text-base lg:text-[20px] font-bold mb-2"
                      onClick={() => toggleAccordion(5)}
                    >
                      Trade
                    </button>
                    <ul
                      className={`footer-list text-[14px] leading-7  ${
                        activeIndex === 5 ? 'block' : 'hidden lg:block'
                      }`}
                    >
                      <li>
                        <Link href="#">BTC USDC</Link>
                      </li>
                      <li>
                        <Link href="#">ETH USDC</Link>
                      </li>
                      <li>
                        <Link href="#">BTC USDT</Link>
                      </li>
                      <li>
                        <Link href="#">ETH USDT</Link>
                      </li>
                      <li>
                        <Link href="#">MATIC USDT</Link>
                      </li>
                      <li>
                        <Link href="#">LTC USDT</Link>
                      </li>
                      <li>
                        <Link href="#">SOL USDT</Link>
                      </li>
                      <li>
                        <Link href="#">XRP USDT</Link>
                      </li>
                      <li>
                        <Link href="#">Bitcoin price</Link>
                      </li>
                      <li>
                        <Link href="#">Ethereum price</Link>
                      </li>
                      <li>
                        <Link href="#">Cardano price</Link>
                      </li>
                      <li>
                        <Link href="#">Solana price</Link>
                      </li>
                      <li>
                        <Link href="#">XRP price</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-4 lg:col-span-2">
                  <p className="text-[#FAFAFA] font-metropolis text-base font-normal leading-[120%]">
                    Download Extsy App
                  </p>
                  <div className="flex justify-start flex-col gap-4 mt-4">
                    <Image src={PlayStoreButton} alt="" />
                    <Image src={IStoreButton} alt="" />
                  </div>
                  <div className=" mt-10 flex justify-start">
                    <Image src={QRCode} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-widget flex gap-10 items-center text-center lg:text-start">
            <ul className="inline-flex items-center gap-3 mb-0">
              <li>
                <Link href="#">
                  <Image src={XIcon} className="[48px]" alt="" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image src={FrogIcon} className="w-[48px]" alt="" />
                </Link>
              </li>

              <li>
                <Link href="#">
                  <Image src={TelegramIcon} className="w-[48px]" alt="" />
                </Link>
              </li>
            </ul>
            <p className="text-extsy">
              © All copyrights reserved - Extsy {new Date().getFullYear()}
            </p>
          </div>
        </div>
        <Link
          href="/pages/contactSupport"
          className="fixed bottom-8 right-8 hidden md:flex items-center gap-2 bg-gradient text-black text-base lg:text-md rounded-full border-4 border-white z-50 py-2 px-6"
        >
          <Image src={MessageText} className="w-2 lg:w-4" alt="" />
          Support
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
