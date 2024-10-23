import Image from "next/image";
import React from "react";
import BtcCryptoIcon from "../app/assets/images/btc-crypto-icon.svg";
import ETHCryptoIcon from "../app/assets/images/eth-crypto-icon.svg";
import TradinManImage from "../app/assets/images/trading-man-image.png";
import XRPCryptoIcon from "../app/assets/images/xrp-crypto-icon.svg";
import AndroidArrowDown from "../app/assets/images/android-arrow-down.svg";
import Link from "next/link";

const P2PTrading = () => {
  return (
    <section className="about-area pb-20 lg:pb-34">
      <div className="container">
        <div className="grid items-center md:grid-cols-12 gap-4">
          <div className="md:col-span-6 md:order-2">
            <div className="about-content max-w-3xl">
              <h4 className="text-3xl lg:text-5xl mb-4 lg:mb-6">
                Discover Seamless
                <span className="text-gradient font-bold harmonyos-sans-bold">
                  {" "}
                  P2P Trading
                </span>
              </h4>
              <p className="mb-3 text-extsy">
                Welcome to our Peer-to-Peer (P2P) trading platform, where you
                can connect directly with buyers and sellers for efficient and
                secure cryptocurrency transactions. Enjoy a trading experience
                that puts you in control with these key features
              </p>
              <ul className="max-w-2xl list-square ps-5 mb-6 text-extsy">
                <li>Global Access to Diverse Trading Opportunities</li>
                <li>Enjoy Lower Fees and Maximize Your Profits</li>
                <li>Secure Transactions with Escrow Protection</li>
              </ul>
              <Link
                href="/pages/p2p"
                className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 px-8 lg:px-12 transition"
              >
                Start now
              </Link>
            </div>
          </div>
          <div className="md:col-span-6 md:order-1">
            <div className="about-image text-center mt-6 md:mt-0">
              <Image src={TradinManImage} alt="" />
              <div className="relative flex items-center justify-center flex-col -mt-40">
                <div className="android-crypto-box w-56 lg:w-80 text-center bg-gradient shadow-xl rounded-2xl lg:rounded-3xl p-4 pb-10">
                  <p className="text-xs lg:text-sm text-gray-600">
                    Total Assets
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <h5 className="text-lg lg:text-3xl font-semibold text-gray-800">
                      $ 1200.31 (21%)
                    </h5>
                    <Image src={AndroidArrowDown} alt="" />
                  </div>
                </div>
                <div className="trading-crypto-box relative z-40 flex items-center justify-center w-full max-w-md text-center bg-gray-800 shadow-xl rounded-full -mt-8 p-4">
                  <div className="text-start border-r border-white/20 pe-5 lg:pe-7 me-5 lg:me-7">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 xl:w-8 xl:h-8">
                        <Image className="w-full" src={XRPCryptoIcon} alt="" />
                      </div>
                      <h4 className="text-xs xl:text-xl">XRP</h4>
                    </div>
                    <p className="text-xs lg:text-xl font-semibold">1120.65</p>
                  </div>
                  <div className="text-start border-r border-white/20 pe-5 lg:pe-7 me-5 lg:me-7">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 xl:w-8 xl:h-8">
                        <Image className="w-full" src={BtcCryptoIcon} alt="" />
                      </div>
                      <h4 className="text-xs xl:text-xl">BTC</h4>
                    </div>
                    <p className="text-xs lg:text-xl font-semibold">0.000123</p>
                  </div>
                  <div className="text-start">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 xl:w-8 xl:h-8">
                        <Image className="w-full" src={ETHCryptoIcon} alt="" />
                      </div>
                      <h4 className="text-xs xl:text-xl">ETH</h4>
                    </div>
                    <p className="text-xs lg:text-xl font-semibold">0.000555</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default P2PTrading;
