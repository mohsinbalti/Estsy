"use client";
import React from "react";
import BtcCryptoIcon from "../../assets/images/btc-crypto-icon.svg";
import EthCryptoIcon from "../../assets/images/eth-crypto-icon.svg";
import DocCopy from "../../assets/images/document-copy.svg";
import TransactionCheck from "../../assets/images/transaction-check.svg";
import ArrowGradient from "../../assets/images/arrow-gradient.svg";
import QrCodeImage from "../../assets/images/qrcode-image-big.png";
import Image from "next/image";
import HeroGrid from "@/components/svgs/HeroGrid";
import StarsGroup from "@/components/svgs/StarsGroup";

const SwapStage = () => {
  return (
    <div>
      <section className="hero-area heroShapeNone relative pt-24 lg:pt-40 pb-20 lg:pb-34">
        <div className="hero-grid absolute left-0 top-0">
          <HeroGrid />
        </div>
        <div className="hidden lg:block hero-grid absolute right-0 bottom-14">
          <StarsGroup />
        </div>
        <div className="container">
          <div className="hero-content max-w-6xl mx-auto text-center relative z-10">
            <h1 className="text-3xl lg:text-5xl leading-tight text-white font-normal mb-8 lg:mb-16">
              Please send the funds for exchange to the given address or scan QR{" "}
            </h1>
            <div className="flex items-center justify-end mb-8">
              <button className="inline-flex items-center gap-2">
                Order ID{" "}
                <span className="flex items-center gap-1 bg-gradient rounded-full text-sm text-gray-800 py-1 px-2">
                  bcb87weyhrnwes <Image src={DocCopy} alt="" />
                </span>
              </button>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="swap-transaction cryptocurrency-platform borderAnimate2 bordered border-gradient px-4 xl:px-6 py-8 xl:py-16"
            >
              <div className="swap-transaction-modal flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 rounded-3xl z-20 p-4">
                <div className="transtion-wrapper text-center">
                  <div className="transaction-icon inline-flex items-center justify-center w-32 h-32 lg:w-52 lg:h-52 rounded-full bg-green-700/10 mb-8">
                    <Image
                      src={TransactionCheck}
                      alt=""
                      className="h-16 lg:h-28"
                    />
                  </div>
                  <h5 className="text-xl lg:text-2xl mb-4">
                    Exchange Success!
                  </h5>
                  <h4 className="max-w-md text-2xl lg:text-3xl mb-4">
                    Your exchange took less then 5min. Thanks for using{" "}
                    <span className="text-gradient font-bold">EXTSY</span>
                  </h4>
                  <button className="transaction-btn text-xl lg:text-2xl text-gradient font-semibold inline-flex items-center justify-center gap-2">
                    View on Blockchain Explorer{" "}
                    <Image src={ArrowGradient} alt="" />
                  </button>
                </div>
              </div>
              <div className="swapstage-content grid relative lg:grid-cols-12 gap-4 mb-8 lg:mb-10">
                <div className="md:col-span-8">
                  <div className="grid relative grid-cols-12 gap-4 mb-4 lg:mb-8">
                    <div className="col-span-6">
                      <div className="flex items-center text-start gap-3">
                        <div className="w-6 h-6 xl:w-8 xl:h-8">
                          <Image
                            src={BtcCryptoIcon}
                            alt=""
                            className="w-full"
                          />
                        </div>
                        <div>
                          <h4 className="text-extsy text-sm xl:text-xl font-normal">
                            {" "}
                            Amount{" "}
                          </h4>
                          <h4 className="text-sm xl:text-xl font-normal harmonyos-sans-regular">
                            {" "}
                            0.5 BTC{" "}
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <div className="flex items-center text-start gap-3">
                        <div className="w-6 h-6 xl:w-8 xl:h-8">
                          <Image
                            src={EthCryptoIcon}
                            alt=""
                            className="w-full"
                          />
                        </div>
                        <div>
                          <h4 className="text-extsy text-sm xl:text-xl font-normal">
                            {" "}
                            You Get{" "}
                          </h4>
                          <h4 className="text-sm xl:text-xl font-normal harmonyos-sans-regular">
                            {" "}
                            9.969218 USDC{" "}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-start mb-4 lg:mb-8">
                    <h4 className="text-extsy text-sm xl:text-xl font-normal">
                      {" "}
                      To this wallet{" "}
                    </h4>
                    <h4 className="text-sm xl:text-xl font-normal break-all harmonyos-sans-regular">
                      1dW138SUhk3L0ovKdef5ypcHNcxKtAwpT8{" "}
                    </h4>
                  </div>

                  <div className="grid relative grid-cols-12 gap-4 mb-4">
                    <div className="col-span-6">
                      <div className="text-start">
                        <h4 className="text-extsy text-sm xl:text-xl font-normal">
                          Time left for the transaction{" "}
                        </h4>
                        <h4 className="text-sm xl:text-xl font-normal harmonyos-sans-regular">
                          20:00{" "}
                        </h4>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <div className="text-start">
                        <h4 className="text-extsy text-sm xl:text-xl font-normal">
                          {" "}
                          Estimated Rate
                        </h4>
                        <h4 className="text-sm xl:text-xl font-normal harmonyos-sans-regular">
                          1 BTC ~ 22.22413 ETH{" "}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4">
                  <div className="text-center">
                    <Image
                      src={QrCodeImage}
                      alt=""
                      className="inline-block px-8"
                    />
                  </div>
                </div>
              </div>
              <ul className="swapStagelist max-w-4xl mx-auto relative block md:flex items-center justify-between gap-4">
                <li className="active flex md:block items-center gap-3 text-start md:text-center mb-12 md:mb-0">
                  <span className="swapStageicon"></span>
                  <p className="text-extsy">Deposited</p>
                </li>
                <li className="active flex md:block items-center gap-3 text-start md:text-center mb-12 md:mb-0">
                  <span className="swapStageicon"></span>
                  <p className="text-extsy">Waiting for Confirmation</p>
                </li>
                <li className="loading flex md:block items-center gap-3 text-start md:text-center mb-12 md:mb-0">
                  <span className="swapStageicon"></span>
                  <p className="text-extsy">Swapping</p>
                </li>
                <li className="flex md:block items-center gap-3 text-start md:text-center">
                  <span className="swapStageicon"></span>
                  <p className="text-extsy">Sending to you</p>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </section>

      <section className="cryptocurrency-area pb-20 lg:pb-34">
        <div className="container">
          <div className="about-content max-w-5xl">
            <h4 className="text-2xl lg:text-4xl font-bold mb-8">
              Useful tips to know
            </h4>
            <ul className="list-square ps-5 mb-6 text-extsy">
              <li>
                <strong>Check the Exchange Rate:</strong>Review the exchange
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
                <strong>Mind the Rate Expiration: </strong>If you send a deposit
                for a fixed-rate swap after the rate has expired, and the rate
                has declined, the transaction may not proceed under the original
                terms.
              </li>
              <li>
                <strong>Use the Correct Contract Address:</strong> Ensure you
                use the correct contract address when making a transaction;
                using the wrong one can result in a failed swap.
              </li>
            </ul>
            <h4 className="text-2xl font-bold mb-3 lg:mb-6">
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

export default SwapStage;
