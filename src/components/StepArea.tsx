import Image from "next/image";
import React from "react";
// import StepTexture from '../app/assets/images/step-texture.svg';
import ExportIcon from "../app/assets/images/export-icon.svg";
import CryptoIcons from "../app/assets/images/crypto-icons.png";
import MoneyIcon from "../app/assets/images/money-icon.svg";
// import WalletIcon from '../app/assets/images/wallet-icon.svg';

const StepArea = () => {
  return (
    <section className="step-area pb-20 lg:pb-34 lg:m-20">
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="max-w-2xl mb-8 lg:mb-24 relative z-40"
        >
          <h3 className="text-3xl lg:text-5xl mb-4 lg:mb-6">
            Its as simple as{" "}
            <span className="text-gradient font-bold harmonyos-sans-bold ">
              1, 2, 3
            </span>
            ...
          </h3>
          <p className="text-extsy">
            Your Simple Guide to Navigating Our Platform and Making the Most of
            Its Features
          </p>
        </div>
        <div className="grid md:grid-cols-12 gap-4 relative">
          <div className="md:col-span-6 z-50">
            <div className="step-box group stepHoverBg bordered bg-[#161414] relative overflow-hidden">
              <div className="block md:flex items-stretch gap-4 relative z-40">
                <div className="step-content relative z-10 p-8 lg:pb-28 md:w-1/2">
                  <div className="step-icon w-16 h-16 flex items-center justify-center bg-gradient rounded-xl mb-4">
                    <Image src={ExportIcon} alt="" className="w-8" />
                  </div>

                  <h3 className="text-xl text-white group-hover:text-gray-800 font-bold mb-3">
                    Select Your Currency
                  </h3>
                  <p className="group-hover:text-black text-[#bdbdbd] ">
                    Browse through over major cryptocurrencies and choose the
                    one that suits your needs.
                  </p>
                </div>
                <div className="step-image mt-8 lg:-mt-8 h-[260px] md:h-[320px] text-end z-10 md:w-1/2">
                  <Image
                    src={CryptoIcons}
                    alt=""
                    className="inline-block rotate-12"
                  />
                </div>
              </div>
              <div className="step-number text-[120px] font-bold opacity-5 absolute left-4 -bottom-10 harmonyos-sans-bold">
                01
              </div>
            </div>
          </div>
          <div className="md:col-span-3 z-50">
            <div className="step-box custom-h-100 bordered relative bg-[#161414] overflow-hidden p-8 lg:pb-28">
              <div className="step-vector1 w-96 h-96 absolute transition duration-1000">
                {/* <Image src={StepTexture} alt="" className="w-full" /> */}
              </div>
              <div className="relative z-40">
                <div className="step-icon w-16 h-16 flex items-center justify-center bg-gradient rounded-xl mb-4">
                  <Image src={MoneyIcon} alt="" className="w-8" />
                </div>
                <h3 className="text-xl text-white font-bold mb-3">
                  Deposit Funds
                </h3>
                <p className="text-extsy">
                  Verify the details and transfer your crypto assets to the
                  provided address.
                </p>
              </div>
              <div className="step-number text-[120px] font-bold opacity-5 absolute left-4 -bottom-10 harmonyos-sans-bold">
                02
              </div>
            </div>
          </div>
          <div className="md:col-span-3 z-50">
            <div className="step-box custom-h-100 bordered relative bg-[#161414] overflow-hidden p-8 lg:pb-28">
              <div className="step-vector2 w-96 h-96 absolute transition duration-1000">
                {/* <Image src={StepTexture} alt="" className="w-full" /> */}
              </div>
              <div className="relative z-40">
                <div className="step-icon w-16 h-16 flex items-center justify-center bg-gradient rounded-xl mb-4">
                  <Image src={MoneyIcon} alt="" className="w-8" />
                </div>
                <h3 className="text-xl text-white font-bold mb-3">
                  Receive Your Crypto
                </h3>
                <p className="text-extsy">
                  Get your swapped cryptocurrency at the most favorable rate.
                </p>
              </div>
              <div className="step-number text-[120px] font-bold opacity-5 absolute left-4 -bottom-10 harmonyos-sans-bold">
                03
              </div>
            </div>
          </div>
          <div className="absolute w-[1358px] h-[147px] right-[-871px] top-[139px] rounded-[1358px] bg-[#E35CAD] blur-[180px]" />
        </div>
      </div>
    </section>
  );
};

export default StepArea;
