import React from "react";
import BaseCrypto from "../app/assets/images/base-crypto-icon.svg";
import BtcCryptoIcon from "../app/assets/images/btc-crypto-icon.svg";
import EtheriumCrypto from "../app/assets/images/Frame 48100353.svg";
import BNBCrypto from "../app/assets/images/bnb-crypto-icon.svg";
import Vector from "../app/assets/images/Vector.svg";
import ADACrypto from "../app/assets/images/ada-crypto-icon.svg";
import Image from "next/image";

const SupportedCrypto = () => {
  return (
    <section className="explore-crypto-area pb-20 lg:pt-10 lg:pb-34 mt-[80px]">
      <div className="container">
        <div className="max-w-3xl text-center mx-auto mb-8 lg:mb-14">
          <h3 className="text-3xl lg:text-[40px] mb-4 lg:mb-6">
            Explore our wide range of supported
            <span className="text-gradient font-bold harmonyos-sans-bold">
              {" "}
              Cryptocurrencies
            </span>
          </h3>
          <p className="text-extsy text-[18px] text-normal  leading-[120%] font-normal">
            Discover the extensive list of cryptocurrencies available on our
            platform. From popular coins to emerging tokens, find the right
            assets to diversify and enhance your portfolio.
          </p>
        </div>
        <div className="max-w-[996px] mx-auto rounded-[24px] bg-[#161414]  p-[40px]">
          <div className="flex items-center justify-between gap-6 mb-10">
            <div className="flex items-center gap-6">
              <button className="text-base lg:text-lg font-semibold text-white">
                Popular Pair
              </button>
              <button className="text-base lg:text-[18px] ml-6 text-extsy">
                New Listing
              </button>
            </div>
            <button className="hidden lg:block text-extsy">
              View all listings
            </button>
          </div>
          <ul id="sorting-list-random">
            <li>
              <div className="explore-crypto-item block lg:flex items-center gap-2 mb-4 lg:mb-8">
                <div className="w-full flex items-center justify-between gap-2 gap-x-10">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 rounded-[1157.782px] bg-[#383434] pt-[4.636px] pr-[13.907px] pb-[4.636px] pl-[4.636px] ">
                        <Image
                          src={BtcCryptoIcon}
                          alt=""
                          className="w-[24px]"
                        />
                        <h5 className="text-base lg:text-lg">BTC</h5>
                      </div>
                      <Image src={Vector} alt="" />
                      <div className="flex items-center gap-2 rounded-[1157.782px] bg-[#383434] pt-[4.636px] pr-[13.907px] pb-[4.636px] pl-[4.636px]">
                        <Image src={BaseCrypto} alt="" className=" w-[24px]" />
                        <h5 className="text-base lg:text-lg">USDT</h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-base lg:text-lg text-end mt-1 md:mt-0">
                      1 BTC ~ $62,490.79 USDT
                    </p>
                  </div>
                </div>
                <div className="shrink-0 mt-2 lg:mt-0">
                  <p className="text-xs lg:text-lg text-[#F92C2C]">
                    +1.23% / 24h
                  </p>
                </div>
              </div>
            </li>
            <hr className="w-[913px] h-[1px] bg-[#221F1F] mb-5 border-none" />
            <li>
              <div className="explore-crypto-item block lg:flex items-center gap-2 mb-4 lg:mb-8">
                <div className="w-full flex items-center justify-between gap-2 gap-x-10">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 rounded-[1157.782px] bg-[#383434] pt-[4.636px] pr-[13.907px] pb-[4.636px] pl-[4.636px] ">
                        <Image src={BNBCrypto} alt="" className="w-[24px]" />
                        <h5 className="text-base lg:text-lg">BNB</h5>
                      </div>
                      <Image src={Vector} alt="" />
                      <div className="flex items-center gap-2 rounded-[1157.782px] bg-[#383434] pt-[4.636px] pr-[13.907px] pb-[4.636px] pl-[4.636px]">
                        <Image src={BaseCrypto} alt="" className=" w-[24px]" />
                        <h5 className="text-base lg:text-lg">USDT</h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-base lg:text-lg text-end mt-1 md:mt-0">
                      1 BNB ~ $57,042 USDT
                    </p>
                  </div>
                </div>
                <div className="shrink-0 mt-2 lg:mt-0">
                  <p className="text-xs lg:text-lg text-[#2DC24E]">
                    +1.23% / 24h
                  </p>
                </div>
              </div>
            </li>
            <hr className="w-[913px] h-[1px] bg-[#221F1F] mb-5 border-none" />
            <li>
              <div className="explore-crypto-item block lg:flex items-center gap-2 mb-4 lg:mb-8">
                <div className="w-full flex items-center justify-between gap-2 gap-x-10">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 rounded-[1157.782px] bg-[#383434] pt-[4.636px] pr-[13.907px] pb-[4.636px] pl-[4.636px] ">
                        <Image
                          src={EtheriumCrypto}
                          alt=""
                          className="w-[24px]"
                        />
                        <h5 className="text-base lg:text-lg">ETH</h5>
                      </div>
                      <Image src={Vector} alt="" />
                      <div className="flex items-center gap-2 rounded-[1157.782px] bg-[#383434] pt-[4.636px] pr-[13.907px] pb-[4.636px] pl-[4.636px]">
                        <Image src={BaseCrypto} alt="" className=" w-[24px]" />
                        <h5 className="text-base lg:text-lg">USDT</h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-base lg:text-lg text-end mt-1 md:mt-0">
                      1 ETH ~ $2,430 USDT
                    </p>
                  </div>
                </div>
                <div className="shrink-0 mt-2 lg:mt-0">
                  <p className="text-xs lg:text-lg text-[#F92C2C]">
                    +1.23% / 24h
                  </p>
                </div>
              </div>
            </li>
            <hr className="w-[913px] h-[1px] bg-[#221F1F] mb-5 border-none" />
            <li>
              <div className="explore-crypto-item block lg:flex items-center gap-2 mb-4 lg:mb-8">
                <div className="w-full flex items-center justify-between gap-2 gap-x-10">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 rounded-[1157.782px] bg-[#383434] pt-[4.636px] pr-[13.907px] pb-[4.636px] pl-[4.636px] ">
                        <Image src={BNBCrypto} alt="" className="w-[24px]" />
                        <h5 className="text-base lg:text-lg">BNB</h5>
                      </div>
                      <Image src={Vector} alt="" />
                      <div className="flex items-center gap-2 rounded-[1157.782px] bg-[#383434] pt-[4.636px] pr-[13.907px] pb-[4.636px] pl-[4.636px]">
                        <Image src={BaseCrypto} alt="" className=" w-[24px]" />
                        <h5 className="text-base lg:text-lg">USDT</h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-base lg:text-lg text-end mt-1 md:mt-0">
                      1 BNB ~ $488.50 USDT
                    </p>
                  </div>
                </div>
                <div className="shrink-0 mt-2 lg:mt-0">
                  <p className="text-xs lg:text-lg text-[#2DC24E]">
                    +1.23% / 24h
                  </p>
                </div>
              </div>
            </li>
            <hr className="w-[913px] h-[1px] bg-[#221F1F] mb-5 border-none" />
            <li>
              <div className="explore-crypto-item block lg:flex items-center gap-2 mb-4 lg:mb-8">
                <div className="w-full flex items-center justify-between gap-2 gap-x-10">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 rounded-[1157.782px] bg-[#383434] pt-[4.636px] pr-[13.907px] pb-[4.636px] pl-[4.636px] ">
                        <Image src={ADACrypto} alt="" className="w-[24px]" />
                        <h5 className="text-base lg:text-lg">ADA</h5>
                      </div>
                      <Image src={Vector} alt="" />
                      <div className="flex items-center gap-2 rounded-[1157.782px] bg-[#383434] pt-[4.636px] pr-[13.907px] pb-[4.636px] pl-[4.636px]">
                        <Image src={BaseCrypto} alt="" className=" w-[24px]" />
                        <h5 className="text-base lg:text-lg">USDT</h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-base lg:text-lg text-end mt-1 md:mt-0">
                      1 MATIC ~ $0.4082 USDT
                    </p>
                  </div>
                </div>
                <div className="shrink-0 mt-2 lg:mt-0">
                  <p className="text-xs lg:text-lg text-[#2DC24E]">
                    +1.23% / 24h
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <div className="text-center block lg:hidden">
            <button className="inline-block text-amber-200">
              View all listings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedCrypto;
