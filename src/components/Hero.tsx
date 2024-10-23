import React from 'react';
// import BaseCrypto from "../app/assets/images/base-crypto-icon.svg";
// import BtcCryptoIcon from "../app/assets/images/btc-crypto-icon.svg";
// import ArrowBRight from "../app/assets/images/arrow-b-right.svg";
// import ArrowRight from "../app/assets/images/arrow-right.svg";
// import MaticCrypto from "../app/assets/images/matic-crypto-icon.svg";
// import AngleWRight from "../app/assets/images/angle-w-right.svg";
// import AvaxCrypto from "../app/assets/images/avax-crypto-icon.svg";
// import EthCrypto from "../app/assets/images/eth-crypto-icon.svg";
// import AdaCrypto from "../app/assets/images/ada-crypto-icon.svg";
// import BNBCrypto from "../app/assets/images/bnb-crypto-icon.svg";
import Link from 'next/link';
import ButtonAngleRight from './svgs/ButtonAngleRight';

const Hero = () => {
  return (
    <section className="relative overflow-hidden flex mt-[80px] align-middle	 justify-center min-h-[100vh]">
      <div className="container px-0 md:px-4 ">
        <div className="flex flex-col lg:flex-row items-center gap-3 lg:justify-between">
          <div className="md:max-w-[60%] z-40">
            <div className="hero-content relative z-10 px-4 md:px-0">
              <h1
                className="text-2xl lg:text-4xl xl:text-[60px] text-white font-semibold mb-6 lg:mb-8"
                style={{
                  lineHeight: '1.2',
                }}
              >
                <div className="inline">Extsy</div>
                <span className=" mx-4">-</span>
                <span className="text-amber-100 harmonyos-sans-bold">
                  Exchange.
                </span>{' '}
                {/* <span className="text-gradient harmonyos-sans-bold">
                  {' '}
                  Secure DeFi{' '}
                </span> */}
              </h1>
              <p className="max-w-3xl mb-6 pe-0 lg:pe-20 text-extsy">
                Swap, Buy, Sell, and Trade crypto assets effortlessly with our
                transparent, user-friendly platform. Enjoy seamless
                transactions, real-time data, and make informed decision-making.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link
                  className="white-btn inline-flex items-center gap-4 bg-gradient rounded-full text-[14px] sm:text-[18px] font-semibold text-[#0B0A0A] py-[8px] sm:py-[14px]  px-[16px] sm:px-[38px]"
                  href="/pages/swap"
                >
                  Swap now
                  <ButtonAngleRight />
                </Link>
                <Link
                  className="white-btn inline-flex items-center gap-4 bg-[#ffffff0d] rounded-full text-[14px] sm:text-[18px] font-semibold text-[#FAFAFA] py-[8px] sm:py-[14px]  px-[16px] sm:px-[38px]"
                  href=""
                >
                  Open an account
                  <ButtonAngleRight color={'#fafafa'} />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:max-w-[45%] z-20">
            <video
              className="rounded-[15px] max-h-[550px] lg:max-h-[680px]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://firebasestorage.googleapis.com/v0/b/extsy-5ef98.appspot.com/o/Screen%20Recording%202024-10-03%20at%205.webm?alt=media&token=36359f82-d371-4dfe-acf6-3c637b0679c8"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

{
  /* <div className=" md:min-w-[60%] hidden lg:block">
            <div className="flex md:flex-col gap-5">
              <div className="transition duration-500 ms-auto">
                <div className=" hero-cryptorange-item2 min-w-44 md:min-w-56 lg:min-w-auto relative block lg:flex items-center justify-between bordered border-gradient !rounded-xl px-3 md:px-4 py-5 md:pe-12">
                  <div className="absolute right-5 top-4 gl:right-7 lg:top-6">
                    <Image src={AngleWRight} alt="angle-w-right" />
                  </div>
                  <div className="block lg:flex items-center gap-2 relative z-40 mb-3 lg:mb-0">
                    <div className="relative w-7 mb-6 lg:mb-0">
                      <div className="crypto-logo1 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                        <Image src={BaseCrypto} alt="base-crypto" />
                      </div>
                      <div className="crypto-logo2 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                        <Image src={EthCrypto} alt="eth crypto" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <h5 className="text-[0.8rem] text-white">ETH</h5>
                      <Image
                        src={ArrowRight}
                        alt="arrow-right"
                        className="w-5"
                      />
                      <h5 className="text-[0.8rem] text-white">USDT</h5>
                    </div>
                  </div>
                  <div className="block lg:flex items-center relative z-40">
                    <p className="text-[0.8rem] text-white mb-3 lg:mb-0">
                      1ETH ~ $2,430 USDT
                    </p>
                    <p className="text-[0.8rem] text-red-800">-1.23% / 24h</p>
                  </div>
                </div>
              </div>
              <div className="transition duration-500 mx-auto">
                <div className="hero-cryptorange-item2 min-w-44 md:min-w-56 lg:min-w-auto relative block lg:flex items-center justify-between bordered border-gradient !rounded-xl px-3 md:px-4 py-5 md:pe-12">
                  <div className="absolute right-5 top-4 gl:right-7 lg:top-6">
                    <Image src={AngleWRight} alt="angle-w-right" />
                  </div>
                  <div className="block lg:flex items-center gap-2 relative z-40 mb-3 lg:mb-0">
                    <div className="relative w-7 mb-6 lg:mb-0">
                      <div className="crypto-logo1 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                        <Image src={BaseCrypto} alt="base-crypto" />
                      </div>
                      <div className="crypto-logo2 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                        <Image src={AdaCrypto} alt="ada icon" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <h5 className="text-[0.8rem] text-white">ADA</h5>
                      <Image src={ArrowRight} alt="arrow-right" />
                      <h5 className="text-[0.8rem] text-white">USDT</h5>
                    </div>
                  </div>
                  <div className="block lg:flex items-center relative z-40">
                    <p className="text-[0.8rem] text-white mb-3 lg:mb-0">
                      1 ADA ~ $0.8802000 USDT
                    </p>
                    <p className="text-[0.8rem] text-green-800">+1.23% / 24h</p>
                  </div>
                </div>
              </div>

              <div className="transition duration-500 ms-auto mr-[80px]">
                <div className="hero-cryptorange-item2 min-w-44 md:min-w-56 lg:min-w-auto relative block lg:flex items-center justify-between bordered border-gradient !rounded-xl px-3 md:px-4 py-5 md:pe-12">
                  <div className="absolute right-5 top-4 gl:right-7 lg:top-6">
                    <Image src={AngleWRight} alt="angle-w-right" />
                  </div>
                  <div className="block lg:flex items-center gap-2 relative z-40 mb-3 lg:mb-0">
                    <div className="relative w-7 mb-6 lg:mb-0">
                      <div className="crypto-logo1 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                        <Image src={BaseCrypto} alt="base-crypto" />
                      </div>
                      <div className="crypto-logo2 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                        <Image src={BNBCrypto} alt="bnb icon" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <h5 className="text-[0.8rem] text-white">BNB</h5>
                      <Image src={ArrowRight} alt="arrow-right" />
                      <h5 className="text-[0.8rem] text-white">USDT</h5>
                    </div>
                  </div>
                  <div className="block lg:flex items-center relative z-40">
                    <p className="text-[0.8rem] text-white mb-3 lg:mb-0">
                      1 BNB ~ $488.50 USDT
                    </p>
                    <p className="text-[0.8rem] text-green-800">+1.23% / 24h</p>
                  </div>
                </div>
              </div>
              <div className="transition duration-500 ms-[80px]">
                <div className="hero-cryptorange-item2 min-w-44 md:min-w-56 lg:min-w-auto relative block lg:flex items-center justify-between bordered border-gradient !rounded-xl px-3 md:px-4 py-5 md:pe-12">
                  <div className="absolute right-5 top-4 gl:right-7 lg:top-6">
                    <Image src={AngleWRight} alt="angle-w-right" />
                  </div>
                  <div className="block lg:flex items-center gap-2 relative z-40 mb-3 lg:mb-0">
                    <div className="relative w-7 mb-6 lg:mb-0">
                      <div className="crypto-logo1 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                        <Image src={BaseCrypto} alt="base-crypto" />
                      </div>
                      <div className="crypto-logo2 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                        <Image src={AvaxCrypto} alt="avax icon" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <h5 className="text-[0.8rem] text-white">AVAX</h5>
                      <Image src={ArrowRight} alt="arrow-right" />
                      <h5 className="text-[0.8rem] text-white">USDT</h5>
                    </div>
                  </div>
                  <div className="block lg:flex items-center relative z-40">
                    <p className="text-[0.8rem]  text-white mb-3 lg:mb-0">
                      1 AVAX ~ $20.79 USDT
                    </p>
                    <p className="text-[0.8rem]  text-red-800">+1.23% / 24h</p>
                  </div>
                </div>
              </div>

              <div className="transition duration-500 mx-auto">
                <div className="hero-cryptorange-item2 ms-[120px] min-w-44 md:min-w-56 lg:min-w-auto relative block lg:flex items-center justify-between bordered border-gradient !rounded-xl px-3 md:px-4 py-5 md:pe-12">
                  <div className="absolute right-5 top-4 gl:right-7 lg:top-6">
                    <Image src={AngleWRight} alt="angle-w-right" />
                  </div>
                  <div className="block lg:flex items-center gap-2 relative z-40 mb-3 lg:mb-0">
                    <div className="relative w-7 mb-6 lg:mb-0">
                      <div className="crypto-logo1 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                        <Image src={BaseCrypto} alt="base-crypto" />
                      </div>
                      <div className="crypto-logo2 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                        <Image src={MaticCrypto} alt="matic" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <h5 className="text-[0.8rem] text-white">MATIC</h5>
                      <Image src={ArrowRight} alt="arrow-right" />
                      <h5 className="text-[0.8rem] text-white">USDT</h5>
                    </div>
                  </div>
                  <div className="block lg:flex items-center relative z-40">
                    <p className="text-[0.8rem]  text-white mb-3 lg:mb-0">
                      1 MATIC ~ $0.4082 USDT
                    </p>
                    <p className="text-[0.8rem]  text-green-800">
                      +1.23% / 24h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 block lg:hidden">
            <div className="heroRightImage overflow-auto lg:overflow-visible ps-4 md:ps-0 ">
              <ul className="hero-cryptorange group relative z-10 w-96 lg:w-auto flex lg:block items-center gap-3">
                <li className="transition duration-500 ">
                  <div className="hero-cryptorange-item1 w-44 md:w-56 lg:w-64 relative bg-gradient rounded-xl px-4 py-5 lg:px-6 ">
                    <div className="block lg:hidden absolute right-5 top-4 ">
                      <Image
                        src={AngleRight}
                        alt="angle-right"
                        className="h-4 lg:h-5 md:ms-4"
                      />
                    </div>
                    <div className="block lg:flex items-center gap-3 relative z-40 mb-3 lg:mb-5 ">
                      <div className="relative w-7 mb-6 lg:mb-0 ">
                        <div className="crypto-logo1 flex items-center justify-center w-5 h-5 lg:w-8 lg:h-8 rounded-full bg-white p-px">
                          <Image src={BaseCrypto} alt="base-crypto" />
                        </div>
                        <div className="crypto-logo2 flex items-center justify-center w-5 h-5 lg:w-8 lg:h-8 rounded-full bg-white p-px">
                          <Image src={BtcCryptoIcon} alt="btc icon" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-lg lg:text-2xl text-gray-800">
                          BTC
                        </h5>
                        <Image src={ArrowBRight} alt="angle-w-right" />
                        <h5 className="text-lg lg:text-2xl text-gray-800">
                          USDT
                        </h5>
                      </div>
                    </div>
                    <p className="text-xs lg:text-xl text-gray-800 mb-3 lg:mb-6">
                      1 BTC ~ $57,042 USDT
                    </p>
                    <p className="text-xs lg:text-2xl text-green-800">
                      +1.23% / 24h
                    </p>
                  </div>
                </li>
                <li className="transition duration-500 ">
                  <div className=" hero-cryptorange-item2 w-44 md:w-56 lg:w-auto relative block lg:flex items-center justify-between bordered border-gradient !rounded-xl px-3 md:px-4 py-5 md:pe-12">
                    <div className="absolute right-5 top-4 gl:right-7 lg:top-6">
                      <Image src={AngleWRight} alt="angle-w-right" />
                    </div>
                    <div className="block lg:flex items-center gap-2 relative z-40 mb-3 lg:mb-0">
                      <div className="relative w-7 mb-6 lg:mb-0">
                        <div className="crypto-logo1 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                          <Image src={BaseCrypto} alt="base-crypto" />
                        </div>
                        <div className="crypto-logo2 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                          <Image src={EthCrypto} alt="eth crypto" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-lg text-white">ETH</h5>
                        <Image src={ArrowRight} alt="arrow-right" />
                        <h5 className="text-lg text-white">USDT</h5>
                      </div>
                    </div>
                    <div className="block lg:flex items-center relative z-40">
                      <p className="text-xs lg:text-lg text-white mb-3 lg:mb-0">
                        1ETH ~ $2,430 USDT
                      </p>
                      <p className="text-xs lg:text-lg text-red-800">
                        -1.23% / 24h
                      </p>
                    </div>
                  </div>
                </li>
                <li className="transition duration-500">
                  <div className="hero-cryptorange-item2 w-44 md:w-56 lg:w-auto relative block lg:flex items-center justify-between bordered border-gradient !rounded-xl px-3 md:px-4 py-5 md:pe-12">
                    <div className="absolute right-5 top-4 gl:right-7 lg:top-6">
                      <Image src={AngleWRight} alt="angle-w-right" />
                    </div>
                    <div className="block lg:flex items-center gap-2 relative z-40 mb-3 lg:mb-0">
                      <div className="relative w-7 mb-6 lg:mb-0">
                        <div className="crypto-logo1 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                          <Image src={BaseCrypto} alt="base-crypto" />
                        </div>
                        <div className="crypto-logo2 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                          <Image src={AdaCrypto} alt="ada icon" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-lg text-white">ADA</h5>
                        <Image src={ArrowRight} alt="arrow-right" />
                        <h5 className="text-lg text-white">USDT</h5>
                      </div>
                    </div>
                    <div className="block lg:flex items-center relative z-40">
                      <p className="text-xs lg:text-lg text-white mb-3 lg:mb-0">
                        1 ADA ~ $0.8802000 USDT
                      </p>
                      <p className="text-xs lg:text-lg text-green-800">
                        +1.23% / 24h
                      </p>
                    </div>
                  </div>
                </li>
                <li className="transition duration-500">
                  <div className="hero-cryptorange-item2 w-44 md:w-56 lg:w-auto relative block lg:flex items-center justify-between bordered border-gradient !rounded-xl px-3 md:px-4 py-5 md:pe-12">
                    <div className="absolute right-5 top-4 gl:right-7 lg:top-6">
                      <Image src={AngleWRight} alt="angle-w-right" />
                    </div>
                    <div className="block lg:flex items-center gap-2 relative z-40 mb-3 lg:mb-0">
                      <div className="relative w-7 mb-6 lg:mb-0">
                        <div className="crypto-logo1 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                          <Image src={BaseCrypto} alt="base-crypto" />
                        </div>
                        <div className="crypto-logo2 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                          <Image src={BNBCrypto} alt="bnb icon" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-lg text-white">BNB</h5>
                        <Image src={ArrowRight} alt="arrow-right" />
                        <h5 className="text-lg text-white">USDT</h5>
                      </div>
                    </div>
                    <div className="block lg:flex items-center relative z-40">
                      <p className="text-xs lg:text-lg text-white mb-3 lg:mb-0">
                        1 BNB ~ $488.50 USDT
                      </p>
                      <p className="text-xs lg:text-lg text-green-800">
                        +1.23% / 24h
                      </p>
                    </div>
                  </div>
                </li>
                <li className="transition duration-500">
                  <div className="hero-cryptorange-item2 w-44 md:w-56 lg:w-auto relative block lg:flex items-center justify-between bordered border-gradient !rounded-xl px-3 md:px-4 py-5 md:pe-12">
                    <div className="absolute right-5 top-4 gl:right-7 lg:top-6">
                      <Image src={AngleWRight} alt="angle-w-right" />
                    </div>
                    <div className="block lg:flex items-center gap-2 relative z-40 mb-3 lg:mb-0">
                      <div className="relative w-7 mb-6 lg:mb-0">
                        <div className="crypto-logo1 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                          <Image src={BaseCrypto} alt="base-crypto" />
                        </div>
                        <div className="crypto-logo2 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                          <Image src={AvaxCrypto} alt="avax icon" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-lg text-white">AVAX</h5>
                        <Image src={ArrowRight} alt="arrow-right" />
                        <h5 className="text-lg text-white">USDT</h5>
                      </div>
                    </div>
                    <div className="block lg:flex items-center relative z-40">
                      <p className="text-xs lg:text-lg text-white mb-3 lg:mb-0">
                        1 AVAX ~ $20.79 USDT
                      </p>
                      <p className="text-xs lg:text-lg text-red-800">
                        +1.23% / 24h
                      </p>
                    </div>
                  </div>
                </li>
                <li className="transition duration-500">
                  <div className="hero-cryptorange-item2 w-44 md:w-56 lg:w-auto relative block lg:flex items-center justify-between bordered border-gradient !rounded-xl px-3 md:px-4 py-5 md:pe-12">
                    <div className="absolute right-5 top-4 gl:right-7 lg:top-6">
                      <Image src={AngleWRight} alt="angle-w-right" />
                    </div>
                    <div className="block lg:flex items-center gap-2 relative z-40 mb-3 lg:mb-0">
                      <div className="relative w-7 mb-6 lg:mb-0">
                        <div className="crypto-logo1 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                          <Image src={BaseCrypto} alt="base-crypto" />
                        </div>
                        <div className="crypto-logo2 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                          <Image src={MaticCrypto} alt="matic" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-lg text-white">MATIC</h5>
                        <Image src={ArrowRight} alt="arrow-right" />
                        <h5 className="text-lg text-white">USDT</h5>
                      </div>
                    </div>
                    <div className="block lg:flex items-center relative z-40">
                      <p className="text-xs lg:text-lg text-white mb-3 lg:mb-0">
                        1 MATIC ~ $0.4082 USDT
                      </p>
                      <p className="text-xs lg:text-lg text-green-800">
                        +1.23% / 24h
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div> */
}

export default Hero;
