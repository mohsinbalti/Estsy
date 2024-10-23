import Image from "next/image";
import React from "react";
import MobileApp from "../app/assets/images/mobile-app.png";
import WalletGraph from "../app/assets/images/wallet-graph.svg";
import GraphImage2 from "../app/assets/images/graph-image2.png";
import BtcCryptoIcon from "../app/assets/images/btc-crypto-icon.svg";
import GraphImage from "../app/assets/images/graph-image.png";
import ETHCryptoIcon from "../app/assets/images/eth-crypto-icon.svg";
import Link from "next/link";

const Trading = () => {
  return (
    <section className="about-area pb-20 lg:pb-34">
      <div className="container">
        <div className="grid items-center md:grid-cols-12 gap-4">
          <div className="md:col-span-6">
            <div className="about-content max-w-3xl relative z-20">
              <h4 className="text-3xl lg:text-5xl mb-4 lg:mb-6">
                Revolutionize your trading with
                <span className="text-gradient font-bold harmonyos-sans-bold ">
                  {" "}
                  EXTSY
                </span>
              </h4>
              <p className="mb-6 text-extsy">
                Sign up for a free account to unlock a range of exclusive
                features. Enjoy tools designed to enhance your trading
                experience and optimize your returns, all while ensuring your
                portfolio remains secure and under your control.
              </p>
              <Link
                href="trading-page.html"
                className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 px-8 lg:px-12 transition"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="text-center">
              <div className="about-image mt-6 md:mt-0 relative inline-block">
                <Image src={MobileApp} alt="" className="px-10" />
                <div className="crypto-wallet-box w-32 lg:w-44 !absolute top-6 -right-2 lg:-right-20 z-40 bordered border-gradient !rounded-2xl p-4">
                  <div className="flex items-center relative z-20 gap-3 mb-4">
                    <div className="w-8 h-8 xl:w-10 xl:h-10">
                      <Image src={BtcCryptoIcon} alt="" className=" w-full" />
                    </div>
                    <div className="text-start">
                      <h4 className="text-xs xl:text-base font-bold">BTC</h4>
                      <p className="text-xss xl:text-sm">Bitcoin</p>
                    </div>
                  </div>
                  <div className="relative text-start z-20 mb-2">
                    <h4 className="text-sm lg:text-xl font-bold">$15,240</h4>
                    <p className="text-xs lg:text-base text-red-800">0.25%h</p>
                  </div>
                  <div className="chart-graph-image hidden md:block">
                    <Image
                      src={WalletGraph}
                      alt=""
                      className=" relative z-10"
                    />
                  </div>
                  <div className="chart-graph-image block md:hidden">
                    <Image src={GraphImage} alt="" className=" relative z-10" />
                  </div>
                </div>
                <div className="crypto-wallet-box w-32 lg:w-44 !absolute bottom-20 -left-2 lg:-left-20 z-40 bordered border-gradient !rounded-2xl p-4">
                  <div className="flex items-center relative z-20 gap-3 mb-4">
                    <div className="w-8 h-8 xl:w-10 xl:h-10">
                      <Image src={ETHCryptoIcon} alt="" className=" w-full" />
                    </div>
                    <div className="text-start">
                      <h4 className="text-xs xl:text-base font-bold">ETH</h4>
                      <p className="text-xss xl:text-sm">Ethereum</p>
                    </div>
                  </div>
                  <div className="relative text-start z-20 mb-2">
                    <h4 className="text-sm lg:text-xl font-bold">$1,150</h4>
                    <p className="text-xs lg:text-base text-green-800">0.89%</p>
                  </div>
                  <div className="chart-graph-image2 hidden md:block">
                    <Image
                      src={WalletGraph}
                      alt=""
                      className=" relative z-10"
                    />
                  </div>
                  <div className="chart-graph-image2 block md:hidden">
                    <Image
                      src={GraphImage2}
                      alt=""
                      className="w-full relative z-10"
                    />
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

export default Trading;
