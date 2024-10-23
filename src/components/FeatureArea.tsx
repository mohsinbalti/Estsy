import Image from "next/image";
import React from "react";
import PurchaseRip from "../app/assets/images/purchase-rip.svg";
import PurchaseRect from "../app/assets/images/purchase-rect.svg";
import PurchaseBNB from "../app/assets/images/purchase-bnb.svg";
import PurchaseBit from "../app/assets/images/purchase-bit.svg";
import PurchaseLiteCoin from "../app/assets/images/purchase-litecoin.svg";
import PurchasePolygan from "../app/assets/images/purchase-polygan.svg";
import PurchaseCard from "../app/assets/images/purchase-card.png";
import FeatureImage1 from "../app/assets/images/feature-image1.png";
import FeatureImage2 from "../app/assets/images/feature-image2.png";
import PurchaseETH from "../app/assets/images/purchase-eth.svg";
import Link from "next/link";

const FeatureArea = () => {
  return (
    <section className="feature-area pb-20 lg:pb-34">
      <div className="container">
        <div
          data-aos="fade-down"
          data-aos-delay="500"
          className="max-w-3xl mb-8 lg:mb-24"
        >
          <h3 className="text-3xl lg:text-5xl mb-4 lg:mb-6">
            Explore Our{" "}
            <span className="text-gradient font-bold harmonyos-sans-bold">
              Powerful
            </span>
            <span className="text-amber-100 font-bold harmonyos-sans-bold">
              {" "}
              Features
            </span>
          </h3>
          <p className="text-extsy">
            Discover the innovative tools and capabilities that set our platform
            apart. From advanced trading options to seamless integration, our
            features are designed to enhance your crypto experience.
          </p>
        </div>
        <div className="grid md:grid-cols-12 gap-4">
          <div className="md:col-span-12">
            <div className="feature-box bordered border-gradient grid md:grid-cols-12 gap-4 p-6 lg:p-14">
              <div className="md:col-span-7">
                <div className="feature-content max-w-3xl relative z-40">
                  <h4 className="text-2xl font-bold mb-5">Swap Crypto</h4>
                  <p className="mb-3 text-extsy">
                    Quickly swap, purchase, sell, or trade cryptocurrencies with
                    ease. Our platform offers fast and straightforward
                    transactions, allowing you to manage your crypto portfolio
                    effortlessly.
                  </p>
                  <p className="mb-6 text-extsy">
                    Whether you&apos;re swapping assets, buying, selling, or
                    engaging in trading, our platform is designed to make every
                    process smooth and efficient, giving you the control and
                    flexibility you need in the world of digital finance.
                  </p>
                  <Link
                    href="/pages/swap"
                    className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-8 transition"
                  >
                    Swap Crypto
                  </Link>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="feature-image text-center relative z-20 mt-6 md:mt-0">
                  <Image
                    src={FeatureImage1}
                    className="inline-block"
                    alt="feature-image1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="feature-box relative bordered border-gradient p-6 lg:p-14 lg:pb-36">
              <div className="feature-content max-w-xl relative z-40 md:pe-10">
                <h4 className="text-2xl font-bold mb-5">
                  Your Privacy, Your Control
                </h4>
                <p className="mb-3 text-extsy">
                  Extsy offers a secure, non-custodial exchange service that
                  prioritizes your privacy and autonomy
                </p>
                <ul className="max-w-2xl list-square ps-6 mb-6 text-extsy">
                  <li>
                    We Respect Your Privacy: No personal data is required.
                  </li>
                  <li>
                    You Control Your Funds: Maintain full ownership and access
                    to your assets.
                  </li>
                  <li>
                    No Sign-Up Required: Enjoy seamless transactions without
                    account registration.
                  </li>
                </ul>
                <Link
                  href="/pages/extsyPro"
                  className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-8 transition"
                >
                  Learn more
                </Link>
              </div>
              <div className="feature-image max-w-xs relative lg:absolute lg:right-8 lg:bottom-8 mt-6 lg:mt-0 z-20">
                <Image src={FeatureImage2} alt="feature2" className="w-full" />
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="feature-box  bordered border-gradient p-6 lg:p-14 lg:!pb-12 min-h-100">
              <div className="feature-content max-w-4xl relative z-40">
                <h4 className="text-2xl font-bold mb-5">
                  Purchase Crypto with Fiat
                </h4>
                <p className="mb-6 text-extsy">
                  Effortlessly convert your fiat currency into crypto with a
                  simple payment using Visa or MasterCard. Enjoy a smooth and
                  secure buying experience with a wide range of options.
                </p>
                <Link
                  href="/pages/buySell"
                  className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-8 transition"
                >
                  Purchase now
                </Link>
              </div>
              <div className="feature-image lg:text-end z-20 mt-6 lg:-mt-14">
                <div className="relative inline-block">
                  <Image
                    src={PurchaseCard}
                    alt="purchase-card"
                    className="w-72"
                  />
                  <ul className="purchase-card-logo top-0 left-0 absolute w-full h-full">
                    <li className="absolute transition-all duration-500">
                      <Image src={PurchaseRect} alt="purchase-rect" />
                    </li>
                    <li className="absolute transition-all duration-500">
                      <Image src={PurchaseETH} alt="purchase-eth" />
                    </li>
                    <li className="absolute transition-all duration-500">
                      <Image src={PurchasePolygan} alt="purchase-polygon" />
                    </li>
                    <li className="absolute transition-all duration-500">
                      <Image src={PurchaseBit} alt="purchase-bit" />
                    </li>
                    <li className="absolute transition-all duration-500">
                      <Image src={PurchaseRect} alt="purchase-rect" />
                    </li>
                    <li className="absolute transition-all duration-500">
                      <Image src={PurchaseLiteCoin} alt="purchase-litecoin" />
                    </li>
                    <li className="absolute transition-all duration-500">
                      <Image src={PurchaseBNB} alt="purchase-bnb" />
                    </li>
                    <li className="absolute transition-all duration-500">
                      <Image src={PurchaseRip} alt="purchase0rip" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureArea;
