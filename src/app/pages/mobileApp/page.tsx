import React from "react";
import HeroElipse from "../../assets/images/hero-elipse.svg";
import HeroGrid from "../../assets/images/hero-grid.svg";
import AngleRight from "../../assets/images/angle-right.svg";
import StoreDownload from "../../assets/images/storedownload.png";
import IOSDownload from "../../assets/images/iosdownload.png";
import MockupCircle from "../../assets/images/mockup-circle.png";
import Mockup1 from "../../assets/images/mockup1.png";
import Mockup2 from "../../assets/images/mockup2.png";
import Mockup3 from "../../assets/images/mockup3.png";
import SliderMobileMockup from "../../assets/images/slider-mobile-mockup.png";
import Arrow2 from "../../assets/images/arrow-2.svg";
import ShieldTick from "../../assets/images/shield-tick.svg";
import PercentageSquare from "../../assets/images/percentage-square.svg";
import Image from "next/image";
import Link from "next/link";

const MobileApp = () => {
  return (
    <div>
      <section className="hero-area relative pt-24 lg:pt-40 pb-20 lg:pb-44">
        <div className="hidden lg:block hero-elipse absolute left-0 top-0">
          <Image src={HeroElipse} alt="" />
        </div>
        <div className="hero-grid absolute left-0 top-0">
          <Image src={HeroGrid} alt="" />
        </div>

        <div className="container">
          <div className="grid items-center lg:grid-cols-12 gap-4">
            <div className="lg:col-span-6">
              <div className="hero-content text-center lg:text-start relative z-10">
                <h1
                  data-aos="fade-right"
                  className="text-3xl lg:text-5xl  leading-tight text-white font-normal mb-4 lg:mb-8"
                >
                  Your <span className="text-gradient">All-in-One</span> Crypto
                  Trading Hub
                </h1>
                <p className="max-w-3xl mb-6 pe-0 lg:pe-40">
                  Unlock the full potential of your crypto experience with our
                  all-in-one platform. Our app provides a seamless and intuitive
                  experience, all from the convenience of your mobile device.
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                  <Link href="">
                    <Image src={StoreDownload} alt="" />
                  </Link>
                  <Link href="">
                    <Image src={IOSDownload} alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="hero-image group flex items-center justify-center relative">
                <Image
                  src={MockupCircle}
                  alt=""
                  className="relative group-hover:rotate-90 transition-all duration-[1500ms]"
                />
                <ul className="absolute lg:-right-24 top-0 w-full h-full z-30">
                  <li className="absolute z-30 left-8 top-0 group-hover:-translate-y-10 group-hover:-translate-x-10 transition-all duration-1000">
                    <Image src={Mockup1} alt="" className="w-96 md:w-auto" />
                  </li>
                  <li className="absolute z-20 left-8 top-12">
                    <Image src={Mockup2} alt="" className="w-96 md:w-auto" />
                  </li>
                  <li className="absolute z-10 left-24 top-32 group-hover:translate-y-10 group-hover:translate-x-10 transition-all duration-1000">
                    <Image src={Mockup3} alt="" className="w-96 md:w-auto" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="step-area pb-20 lg:pb-44">
        <div className="container">
          <div className="relative p-6 lg:p-10">
            <div className="accordion-item bordered border-gradient !absolute right-0 bottom-0 top-0 left-0 opacity-70"></div>
            <div className="swiper howWorkSwiper">
              <div className="swiper-wrapper mb-6">
                <div className="swiper-slide">
                  <div className="grid items-center md:grid-cols-12 gap-4 relative z-20">
                    <div className="md:col-span-6">
                      <div className="relative z-20">
                        <h2 className="text-2xl lg:text-4xl	text-white font-bold mb-8">
                          Swap
                        </h2>
                        <p>
                          Effortlessly swap cryptocurrencies in real time with
                          our secure and user-friendly platform. Enjoy fast,
                          reliable transactions at competitive rates.
                        </p>
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="bg-gray-800 relative z-20 rounded-2xl flex items-center justify-center h-full py-4 lg:py-14">
                        <Image src={SliderMobileMockup} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="grid items-center md:grid-cols-12 gap-4 relative z-20">
                    <div className="md:col-span-6">
                      <div className="relative z-20">
                        <h2 className="text-2xl lg:text-4xl	text-white font-bold mb-8">
                          Virtual Card
                        </h2>
                        <p>
                          Spend your crypto anywhere with our virtual card,
                          offering seamless integration with everyday purchases.
                          Shop online or in-store, all while using your crypto
                          assets.
                        </p>
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="bg-gray-800 relative z-20 rounded-2xl flex items-center justify-center h-full py-4 lg:py-14">
                        <Image src={SliderMobileMockup} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="grid items-center md:grid-cols-12 gap-4 relative z-20">
                    <div className="md:col-span-6">
                      <div className="relative z-20">
                        <h2 className="text-2xl lg:text-4xl	text-white font-bold mb-8">
                          Extsy Pro
                        </h2>
                        <p>
                          Unlock advanced trading tools and features with Extsy
                          Pro. Gain deeper insights and enjoy exclusive options
                          designed for professional traders.
                        </p>
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="bg-gray-800 relative z-20 rounded-2xl flex items-center justify-center h-full py-4 lg:py-14">
                        <Image src={SliderMobileMockup} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="grid items-center md:grid-cols-12 gap-4 relative z-20">
                    <div className="md:col-span-6">
                      <div className="relative z-20">
                        <h2 className="text-2xl lg:text-4xl	text-white font-bold mb-8">
                          Raffle
                        </h2>
                        <p>
                          Join exciting raffles for a chance to win big! Use
                          your crypto assets to participate in exclusive raffles
                          and win exciting rewards.
                        </p>
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="bg-gray-800 relative z-20 rounded-2xl flex items-center justify-center h-full py-4 lg:py-14">
                        <Image src={SliderMobileMockup} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="grid items-center md:grid-cols-12 gap-4 relative z-20">
                    <div className="md:col-span-6">
                      <div className="relative z-20 md:pb-8">
                        <h2 className="text-2xl lg:text-4xl	text-white font-bold mb-8">
                          Trading (Spot & Futures)
                        </h2>
                        <p>
                          Take control of your crypto trading with both spot and
                          futures options. Instantly buy and sell assets at
                          current market prices{" "}
                          <span className="hidden md:block">
                            with spot trading, or leverage future market
                            predictions to maximize your profit potential with
                            futures trading. Whether you&apos;re aiming for
                            short-term gains or long-term strategies, our
                            platform offers the tools you need for effective
                            trading.
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="bg-gray-800 relative z-20 rounded-2xl flex items-center justify-center h-full py-4 lg:py-14">
                        <Image src={SliderMobileMockup} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiperControle md:absolute md:bottom-10 xl:bottom-40 2xl:bottom-48">
                <div className="swiperPagination flex items-center justify-center md:justify-start mb-10"></div>
                <div className="HowNavigation mt-8 flex items-center justify-center md:justify-start gap-4">
                  <div id="prev" className="swiper-button-prev">
                    <Image src={AngleRight} alt="" />
                  </div>
                  <p id="numberSlides">0/0</p>
                  <div id="next" className="swiper-button-next">
                    <Image src={AngleRight} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="howwork-area relative z-40 pb-20 lg:pb-44">
        <div className="container">
          <div className="howwork-wrapper bordered border-gradient relative z-10 lg:p-10 xl:p-20">
            <div className="text-start lg:text-center relative z-20 max-w-3xl mx-auto mb-8 lg:mb-24">
              <h3 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
                Why Choose the{" "}
                <span className="text-gradient font-bold">EXTSY</span> Mobile
                App
              </h3>
              <p>More than 200 million users have chosen us</p>
            </div>
            <div className="grid items-center md:grid-cols-12 gap-4">
              <div className="md:col-span-6 lg:col-span-4">
                <div className="howwork-box relative bordered border-gradient !rounded-2xl overflow-hidden p-6 lg:px-8">
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                    <Image src={ShieldTick} alt="" className="h-6 lg:h-10" />
                  </div>
                  <div className="howwork-content relative z-20">
                    <h4 className="text-white text-2xl font-bold mb-4">
                      The Best Security
                    </h4>
                    <p className="text-white">
                      State-of-the-art protection ensures your assets are safe
                      on the go, no matter where you trade.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 lg:col-span-4">
                <div className="howwork-box relative bordered border-gradient !rounded-2xl overflow-hidden p-6 lg:px-8">
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                    <Image src={Arrow2} alt="" className="h-6 lg:h-10" />
                  </div>
                  <div className="howwork-content relative z-20">
                    <h4 className="text-white text-2xl font-bold mb-4">
                      Fastest Transactions
                    </h4>
                    <p className="text-white">
                      Our mobile app is optimized for speed, allowing you to
                      execute trades instantly with just a few taps.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 lg:col-span-4">
                <div className="howwork-box relative bordered border-gradient !rounded-2xl overflow-hidden p-6 lg:px-8">
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                    <Image
                      src={PercentageSquare}
                      alt=""
                      className="h-6 lg:h-10"
                    />
                  </div>
                  <div className="howwork-content relative z-20">
                    <h4 className="text-white text-2xl font-bold mb-4">
                      Low Fees, High Rewards
                    </h4>
                    <p className="text-white">
                      Enjoy low transaction fees while keeping more of your
                      profits, plus exclusive mobile app discounts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApp;
