import FAQs from "@/components/FAQs";
import React from "react";
import HeroElipse from "../../assets/images/hero-elipse.svg";
import HeroGrid from "../../assets/images/hero-grid.svg";
import BtcCryptoIcon from "../../assets/images/btc-crypto-icon.svg";
import EthCrypto from "../../assets/images/eth-crypto-icon.svg";
import BNBCrypto from "../../assets/images/bnb-crypto-icon.svg";
import MaticIcon from "../../assets/images/matic-crypto-icon.svg";
import BaseCryptoIcon from "../../assets/images/base-crypto-icon.svg";
import XrpCryptoIcon from "../../assets/images/xrp-crypto-icon.svg";
import SolCryptoIcon from "../../assets/images/sol-crypto-icon.svg";
import TxrIcon from "../../assets/images/txr-crypto-icon.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import TableSuccess from "../../assets/images/table-success.svg";
import TableDanger from "../../assets/images/table-danger.svg";
import CompareExtsr from "../../assets/images/compare-exstr.png";
import CompareSimple from "../../assets/images/compare-simple.png";
import CompareChange from "../../assets/images/compare-change.png";
import CompareChangely from "../../assets/images/compare-changely.png";
import MoneyLight from "../../assets/images/money-light.svg";
import GitCompare from "../../assets/images/git-compare.svg";
import SolarTagPrice from "../../assets/images/solar_tag-price.svg";
import Image from "next/image";

const PriceComparison = () => {
  return (
    <div>
      <section className="hero-area relative pt-24 lg:pt-56 pb-20 lg:pb-44">
        <div className="hidden lg:block hero-elipse absolute left-0 top-0">
          <Image src={HeroElipse} alt="" />
        </div>
        <div className="hero-grid absolute left-0 top-0">
          <Image src={HeroGrid} alt="" />
        </div>

        <div className="container">
          <div className="hero-content max-w-7xl mx-auto text-center relative z-40">
            <h1
              data-aos="fade-up"
              className="text-4xl lg:text-6xl xl:text-8xl 2xl:text-9xl leading-tight text-white font-normal mb-4 lg:mb-8"
            >
              Unlock the <span className="text-gradient">Best Value</span> with
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="max-w-3xl mx-auto">
              Experience unmatched value with Extsy. We take pride in offering
              competitive prices that surpass our competitors. Here&apos;s how
              we ensure you get the best value.
            </p>
          </div>
        </div>
      </section>
      <section className="comparison-area relative z-40 pb-20 lg:pb-44">
        <div className="container pe-0 md:pe-4">
          <div className="max-w-3xl text-center mx-auto mb-8 lg:mb-12">
            <h3 className="text-3xl lg:text-5xl font-semibold sm:font-bold mb-4 lg:mb-6">
              Price cl
            </h3>
          </div>
          <div className="table-wrapper max-w-7xl mx-auto bordered border-gradient p-6">
            <div className="relative z-20">
              <div className="responsive-table overflow-auto mb-6">
                <table className="w-[80rem] xl:w-full">
                  <thead>
                    <th className="w-72 font-normal text-start py-4 px-5">
                      <p>Variables</p>
                    </th>
                    <th className="w-32 font-normal text-start py-4 px-5">
                      <p className="flex items-center justify-center">
                        <Image src={CompareExtsr} alt="" />
                      </p>
                    </th>
                    <th className="w-32 font-normal text-start py-4 px-5">
                      <p className="flex items-center justify-center">
                        <Image src={CompareChange} alt="" />
                      </p>
                    </th>
                    <th className="w-32 font-normal text-start py-4 px-5">
                      <p className="flex items-center justify-center">
                        <Image src={CompareChangely} alt="" />
                      </p>
                    </th>
                    <th className="w-32 font-normal text-start py-4 px-5">
                      <p className="flex items-center justify-center">
                        <Image src={CompareSimple} alt="" />
                      </p>
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-x border-gray-600">
                        <div className="hero-cryptorange-item2 !w-full flex items-center gap-2 relative z-40">
                          <div className="relative w-7 mb-6 lg:mb-0">
                            <div className="crypto-logo1 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                              <Image src={BaseCryptoIcon} alt="" />
                            </div>
                            <div className="crypto-logo2 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                              <Image src={BtcCryptoIcon} alt="" />
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <h5 className="text-lg text-white">BTC</h5>
                            <Image src={ArrowRight} alt="" />
                            <h5 className="text-lg text-white">USDT</h5>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$56,623.54</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$56,623.54</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$56,623.54</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$56,623.54</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-x border-gray-600">
                        <div className="hero-cryptorange-item2 !w-full flex items-center gap-2 relative z-40">
                          <div className="relative w-7 mb-6 lg:mb-0">
                            <div className="crypto-logo1 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                              <Image src={BaseCryptoIcon} alt="" />
                            </div>
                            <div className="crypto-logo2 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                              <Image src={EthCrypto} alt="" />
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <h5 className="text-lg text-white">ETH</h5>
                            <Image src={ArrowRight} alt="" />
                            <h5 className="text-lg text-white">USDT</h5>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$4,267.90</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$4,267.90</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$4,267.90</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$4,267.90</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-x border-gray-600">
                        <div className="hero-cryptorange-item2 !w-full flex items-center gap-2 relative z-40">
                          <div className="relative w-7 mb-6 lg:mb-0">
                            <div className="crypto-logo1 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                              <Image src={XrpCryptoIcon} alt="" />
                            </div>
                            <div className="crypto-logo2 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                              <Image src={BtcCryptoIcon} alt="" />
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <h5 className="text-lg text-white">XRP</h5>
                            <Image src={ArrowRight} alt="" />
                            <h5 className="text-lg text-white">USDT</h5>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$1.04</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$1.04</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$1.04</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$1.04</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-x border-gray-600">
                        <div className="hero-cryptorange-item2 !w-full flex items-center gap-2 relative z-40">
                          <div className="relative w-7 mb-6 lg:mb-0">
                            <div className="crypto-logo1 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                              <Image src={BaseCryptoIcon} alt="" />
                            </div>
                            <div className="crypto-logo2 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                              <Image src={SolCryptoIcon} alt="" />
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <h5 className="text-lg text-white">SOL</h5>
                            <Image src={ArrowRight} alt="" />
                            <h5 className="text-lg text-white">USDT</h5>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$213.67</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$213.67</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$213.67</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$213.67</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-x border-gray-600">
                        <div className="hero-cryptorange-item2 !w-full flex items-center gap-2 relative z-40">
                          <div className="relative w-7 mb-6 lg:mb-0">
                            <div className="crypto-logo1 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                              <Image src={BaseCryptoIcon} alt="" />
                            </div>
                            <div className="crypto-logo2 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                              <Image src={MaticIcon} alt="" />
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <h5 className="text-lg text-white">MATIC</h5>
                            <Image src={ArrowRight} alt="" />
                            <h5 className="text-lg text-white">USDT</h5>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$0.9998</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$0.9998</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$0.9998</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$0.9998</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-x border-gray-600">
                        <div className="hero-cryptorange-item2 !w-full flex items-center gap-2 relative z-40">
                          <div className="relative w-7 mb-6 lg:mb-0">
                            <div className="crypto-logo1 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                              <Image src={BaseCryptoIcon} alt="" />
                            </div>
                            <div className="crypto-logo2 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                              <Image src={BNBCrypto} alt="" />
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <h5 className="text-lg text-white">BNB</h5>
                            <Image src={ArrowRight} alt="" />
                            <h5 className="text-lg text-white">USDT</h5>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$587.74</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$587.74</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$587.74</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$587.74</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-x border-gray-600">
                        <div className="hero-cryptorange-item2 !w-full flex items-center gap-2 relative z-40">
                          <div className="relative w-7 mb-6 lg:mb-0">
                            <div className="crypto-logo1 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                              <Image src={BaseCryptoIcon} alt="" />
                            </div>
                            <div className="crypto-logo2 flex items-center justify-center w-5 h-5 rounded-full bg-white p-px">
                              <Image src={TxrIcon} alt="" />
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <h5 className="text-lg text-white">TRX</h5>
                            <Image src={ArrowRight} alt="" />
                            <h5 className="text-lg text-white">USDT</h5>
                          </div>
                        </div>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$1.00</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$1.00</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$1.00</p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$1.00</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="howwork-area relative z-40 pb-20 lg:pb-44">
        <div className="container">
          <div className="howwork-wrapper bordered border-gradient relative z-10 lg:p-10 xl:p-20">
            <div className="text-start lg:text-center relative z-20 max-w-4xl mx-auto mb-8 lg:mb-24">
              <h3 className="text-3xl lg:text-5xl font-semibold sm:font-bold mb-4 lg:mb-6">
                Why choose us?
              </h3>
              <p>
                Choose Extsy for a comprehensive crypto experience. With
                features like crypto swaps, virtual cards, spot and futures
                trading, raffles, AML checks, and P2P trading, our platform
                offers security, flexibility, and convenience. Maximize your
                returns with exclusive tools like Extsy Pro and our raffle
                system, all within one seamless platform.
              </p>
            </div>
            <div className="grid items-center md:grid-cols-12 gap-4">
              <div className="md:col-span-6 lg:col-span-4">
                <div className="howwork-box relative bordered border-gradient !rounded-2xl overflow-hidden p-6 lg:px-8">
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                    <Image className="h-6 lg:h-10" src={SolarTagPrice} alt="" />
                  </div>
                  <div className="howwork-content relative z-20">
                    <h4 className="text-white text-2xl font-bold mb-4">
                      Competitive Rates
                    </h4>
                    <p className="text-white">
                      We consistently offer lower rates than our competitors,
                      ensuring you get more value for your money.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 lg:col-span-4">
                <div className="howwork-box relative bordered border-gradient !rounded-2xl overflow-hidden p-6 lg:px-8">
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                    <Image className="h-6 lg:h-10" src={GitCompare} alt="" />
                  </div>
                  <div className="howwork-content relative z-20">
                    <h4 className="text-white text-2xl font-bold mb-4">
                      Real-Time cl
                    </h4>
                    <p className="text-white">
                      Our platform provides real-time price comparisons, showing
                      you the best rates available at any moment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 lg:col-span-4">
                <div className="howwork-box relative bordered border-gradient !rounded-2xl overflow-hidden p-6 lg:px-8">
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                    <Image className="h-6 lg:h-10" src={MoneyLight} alt="" />
                  </div>
                  <div className="howwork-content relative z-20">
                    <h4 className="text-white text-2xl font-bold mb-4">
                      No Extra Charges
                    </h4>
                    <p className="text-white">
                      Enjoy the simplicity of our pricing structure with no
                      additional charges or hidden fees. What you see is what
                      you pay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-area relative z-40 pb-20 lg:pb-44">
        <div className="container pe-0 md:pe-4">
          <div className="max-w-3xl text-center mx-auto mb-8 lg:mb-12">
            <h3 className="text-3xl lg:text-5xl font-semibold sm:font-bold mb-4 lg:mb-6">
              Features cl
            </h3>
          </div>
          <div className="table-wrapper max-w-7xl mx-auto bordered border-gradient p-6">
            <div className="relative z-20">
              <div className="responsive-table overflow-auto mb-6">
                <table className="w-[80rem] xl:w-full">
                  <thead>
                    <th className="w-72 font-normal text-start py-4 px-5">
                      <p>Variables</p>
                    </th>
                    <th className="w-32 font-normal text-start py-4 px-5">
                      <p className="flex items-center justify-center">
                        <Image src={CompareExtsr} alt="" />
                      </p>
                    </th>
                    <th className="w-32 font-normal text-start py-4 px-5">
                      <p className="flex items-center justify-center">
                        <Image src={CompareChange} alt="" />
                      </p>
                    </th>
                    <th className="w-32 font-normal text-start py-4 px-5">
                      <p className="flex items-center justify-center">
                        <Image src={CompareChangely} alt="" />
                      </p>
                    </th>
                    <th className="w-32 font-normal text-start py-4 px-5">
                      <p className="flex items-center justify-center">
                        <Image src={CompareSimple} alt="" />
                      </p>
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-x border-gray-600">
                        <p className="text-state-300">Crypto to Crypto Swap</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </div>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-x border-gray-600">
                        <p className="text-state-300">Buy/Sell Crypto</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </div>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-x border-gray-600">
                        <p className="text-state-300">
                          0.2% cashback on every swap
                        </p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </div>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-x border-gray-600">
                        <p className="text-state-300">
                          $3,000 monthly cashback limit
                        </p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center"></p>{" "}
                        <Image src={TableSuccess} alt="" className="h-4" />
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </div>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-x border-gray-600">
                        <p className="text-state-300">
                          Unlimited Anti-Money Laundering checks
                        </p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </div>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-x border-gray-600">
                        <p className="text-state-300">Unlimited P2P trading</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </div>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-x border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-x border-gray-600">
                        <p className="text-state-300">Crypto spot trading</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </div>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-x border-gray-600">
                        <p className="text-state-300">Crypto futures trading</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </div>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-x border-gray-600">
                        <p className="text-state-300">5 virtual cards</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </div>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-72 font-normal text-start py-2 px-5 border-t border-b border-x border-gray-600">
                        <p className="text-state-300">Raffle</p>
                      </td>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableSuccess} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </div>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="flex items-center justify-center">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </p>
                      </td>
                      <td className="w-32 font-normal text-center py-2 px-5 border-t border-b border-r border-gray-600">
                        <div className="flex items-center justify-center px-4">
                          <Image src={TableDanger} alt="" className="h-4" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQs />
    </div>
  );
};

export default PriceComparison;
