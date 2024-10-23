"use client";
import React, { useEffect, useState } from "react";
import HeroElipse from "../../assets/images/hero-elipse.svg";
import HeroGrid from "../../assets/images/hero-grid.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import CryptoRaffles from "../../assets/images/crypto-raffles.png";
import HowWorkDraw from "../../assets/images/howwork-draw.svg";
import HowWorkTicket from "../../assets/images/howwork-ticket.svg";
import HowWorkTrophy from "../../assets/images/howwork-trophy.svg";
import RaffleTickets from "../../assets/images/raffle tickets.png";
import RaffleTicketsCircle from "../../assets/images/raffle tickets-circle.png";
import UserImage1 from "../../assets/images/user-image1.jpg";
import UserImage2 from "../../assets/images/user-image2.jpg";
import UserImage3 from "../../assets/images/user-image3.jpg";
import UserImage4 from "../../assets/images/user-image4.jpg";
import UserImage5 from "../../assets/images/user-image5.jpg";
import UserImage6 from "../../assets/images/user-image6.jpg";
import UserImage7 from "../../assets/images/user-image7.jpg";
import UserImage8 from "../../assets/images/user-image8.jpg";
import UserImage9 from "../../assets/images/user-image9.jpg";
import UserImage10 from "../../assets/images/user-image10.jpg";
import PrizeStar1 from "../../assets/images/prize-star1.svg";
import PrizeStar2 from "../../assets/images/prize-star2.svg";
import PrizeStar3 from "../../assets/images/prize-star3.svg";
import PrizeStar4 from "../../assets/images/prize-star4.svg";
import PrizeDistribution from "../../assets/images/prize-distribute.png";
import CheckBlack from "../../assets/images/check-black.svg";
import Image from "next/image";
import FAQs from "@/components/FAQs";
import Link from "next/link";

const Raffle = () => {
  const targetDate = new Date(2024, 10, 10, 10, 10).getTime(); // Target date
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval); // Stop the timer when the countdown is done
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [targetDate]);

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
          <div className="grid items-start xl:items-center lg:grid-cols-12 gap-4">
            <div className="lg:col-span-6">
              <div className="hero-content text-center lg:text-start relative z-10">
                <h1
                  data-aos="fade-right"
                  className="text-3xl lg:text-5xl leading-tight text-white font-normal mb-6 lg:mb-8"
                >
                  Win Big with Exclusive{" "}
                  <span className="text-gradient">Crypto Raffles</span>
                </h1>
                <p className="max-w-4xl mb-6 pe-0 xl:pe-40">
                  Join our exciting crypto raffles and stand a chance to win
                  incredible prizes. With easy entry and transparent draws, our
                  platform offers a fun and rewarding way to engage with the
                  crypto community. Whether you&apos;re a seasoned trader or new
                  to the world of digital assets, our raffles provide an
                  opportunity to multiply your holdings and enjoy exclusive
                  rewards.
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                  <Link
                    className="white-btn inline-flex items-center gap-2 bg-white hover:bg-amber-200 rounded-full text-gray-700 py-3 lg:py-3.5 px-5 lg:px-12 transition"
                    href=""
                  >
                    Get your ticket
                    <Image
                      src={ArrowRight}
                      className="h-4 lg:h-5 md:ms-4"
                      alt=""
                    />
                  </Link>
                </div>
                <p className="text-start mb-0">Time left for the next draw</p>
                <div
                  id="simple_timer"
                  className="flex  justify-center items-center gap-4 "
                >
                  <div className="syotimer-cell my-6">
                    <span className="syotimer-cell__value relative bg-gradient-to-r rounded-xl p-[10px]  from-[#fef9cc] via-[#f6dbd4] to-[#f0c2db]">
                      {timeRemaining.days}
                    </span>
                    <span className="syotimer-cell__unit text-sm  uppercase text-center block mt-4">
                      Days
                    </span>
                  </div>
                  <div className="syotimer-cell">
                    <span className="syotimer-cell__value  relative bg-gradient-to-r rounded-xl p-[10px]  from-[#fef9cc] via-[#f6dbd4] to-[#f0c2db]">
                      {timeRemaining.hours}
                    </span>
                    <span className="syotimer-cell__unit text-sm  uppercase text-center block mt-4">
                      Hours
                    </span>
                  </div>
                  <div className="syotimer-cell">
                    <span className="syotimer-cell__value  relative bg-gradient-to-r rounded-xl p-[10px]   from-[#fef9cc] via-[#f6dbd4] to-[#f0c2db]">
                      {timeRemaining.minutes}
                    </span>
                    <span className="syotimer-cell__unit text-sm  uppercase text-center block mt-4">
                      Minutes
                    </span>
                  </div>
                  <div className="syotimer-cell">
                    <span className="syotimer-cell__value  relative bg-gradient-to-r rounded-xl p-[10px]  from-[#fef9cc] via-[#f6dbd4] to-[#f0c2db]">
                      {timeRemaining.seconds}
                    </span>
                    <span className="syotimer-cell__unit text-sm  uppercase text-center block mt-4">
                      Seconds
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 overflow-hidden md:overflow-visible">
              <div className="crypto-raffles-image flex items-center justify-center relative z-20">
                <Image
                  src={CryptoRaffles}
                  alt=""
                  className="max-h-96 xl:max-h-fit"
                />
                <Image
                  src={CryptoRaffles}
                  alt=""
                  className="raffles-rotation max-h-96 xl:max-h-fit absolute top-0  transition duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="howwork-area relative z-40 pb-20 lg:pb-44">
        <div className="container">
          <div className="relative lg:p-10 xl:p-20">
            <div className="howwork-wrapper bordered border-gradient !absolute right-0 bottom-0 top-0 left-0 opacity-70"></div>

            <div className="text-start lg:text-center relative z-20 max-w-3xl mx-auto mb-8 lg:mb-24">
              <h3 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
                How it <span className="text-gradient font-bold">works</span>
              </h3>
              <p>
                With easy entry and transparent draws, our platform offers a fun
                and rewarding way to engage with the crypto community.
              </p>
            </div>
            <div className="grid items-center md:grid-cols-12 gap-4">
              <div className="md:col-span-6 lg:col-span-4">
                <div className="howwork-box relative bordered border-gradient !rounded-2xl overflow-hidden p-6 lg:px-8">
                  <div className="howwork-number text-white/30 text-[200px] leading-none font-bold absolute -top-8 -right-2">
                    1
                  </div>
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                    <Image src={HowWorkTicket} alt="" className="h-6 lg:h-10" />
                  </div>
                  <div className="howwork-content relative z-20">
                    <h4 className="text-white text-2xl font-bold mb-4">
                      Get your ticket
                    </h4>
                    <p className="text-white">
                      Purchase your raffle tickets and increase your chances of
                      winning. The more tickets you buy, the better your odds!
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 lg:col-span-4">
                <div className="howwork-box relative bordered border-gradient !rounded-2xl overflow-hidden p-6 lg:px-8">
                  <div className="howwork-number text-white/30 text-[200px] leading-none font-bold absolute -top-8 -right-2">
                    2
                  </div>
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                    <Image src={HowWorkDraw} alt="" className="h-6 lg:h-10" />
                  </div>
                  <div className="howwork-content relative z-20">
                    <h4 className="text-white text-2xl font-bold mb-4">
                      Flexible Drawing
                    </h4>
                    <p className="text-white">
                      Once all entries are in, our system will randomly select
                      the lucky winner during the scheduled draw.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 lg:col-span-4">
                <div className="howwork-box relative bordered border-gradient !rounded-2xl overflow-hidden p-6 lg:px-8">
                  <div className="howwork-number text-white/30 text-[200px] leading-none font-bold absolute -top-8 -right-2">
                    3
                  </div>
                  <div className="product-feature-logo relative z-20 bg-gradient flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 rounded-full mb-8">
                    <Image src={HowWorkTrophy} alt="" className="h-6 lg:h-10" />
                  </div>
                  <div className="howwork-content relative z-20">
                    <h4 className="text-white text-2xl font-bold mb-4">
                      Claim Your Prize
                    </h4>
                    <p className="text-white">
                      If you’re the winner, you’ll be notified instantly. Follow
                      the instructions to claim your prize and enjoy your
                      rewards!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area relative pb-20 lg:pb-44">
        <div className="container">
          <div className="grid items-center md:grid-cols-12 gap-4">
            <div className="md:col-span-7">
              <div className="about-content max-w-3xl">
                <h4 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
                  Getting your raffle tickets has never been simpler.
                </h4>
                <p className="mb-3">
                  Getting your raffle tickets has never been simpler. Whether
                  you prefer using crypto or a credit/debit card, we’ve got you
                  covered
                </p>
                <ul className="max-w-2xl list-square ps-5">
                  <li>
                    {" "}
                    <strong>Pay with Crypto:</strong> Seamlessly purchase
                    tickets using popular cryptocurrencies. Fast, secure, and
                    hassle-free.
                  </li>
                  <li>
                    <strong>Use Your Credit/Debit Card:</strong> If you
                    don&apos;t have crypto, purchase it from EXTSY and get your
                    ticket.
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="about-image group raffle-ticket-image relative mt-6 md:mt-0">
                <Image src={RaffleTickets} alt="" className="relative z-20" />
                <Image
                  src={RaffleTicketsCircle}
                  alt=""
                  className="raffle-ticket-circle group-hover:-rotate-180 absolute top-0 transition-all duration-[1500ms]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-area relative pb-20 lg:pb-44">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-4">
              <div className="pricing-plan-box bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 lg:px-10">
                <h4 className="text-gray-800 text-2xl font-bold mb-6 lg:mb-8">
                  Basic
                </h4>
                <h2 className="flex items-end text-gray-800 text-8xl leading-none font-bold mb-6 lg:mb-10">
                  <span className="text-4xl pe-4">USDT</span> 5{" "}
                  <span className="text-gray-600 text-lg font-normal">
                    /monthly
                  </span>
                </h2>
                <h4 className="text-gray-800 text-2xl font-bold mb-4">
                  What’s included
                </h4>
                <ul className="mb-8 lg:mb-10">
                  <li className="mb-3">
                    <p className="flex items-center text-gray-800 text-lg gap-2">
                      <span className="bg-gradient w-7 h-7 rounded-full flex items-center justify-center">
                        <Image src={CheckBlack} alt="" className="h-3" />
                      </span>
                      No. of tickets: 1
                    </p>
                  </li>
                  <li className="mb-3">
                    <p className="flex items-center text-gray-800 text-lg gap-2">
                      <span className="bg-gradient w-7 h-7 rounded-full flex items-center justify-center">
                        <Image src={CheckBlack} alt="" className="h-3" />
                      </span>
                      Subscription: Monthly
                    </p>
                  </li>
                  <li className="mb-3">
                    <p className="flex items-center text-gray-800 text-lg gap-2">
                      <span className="bg-gradient w-7 h-7 rounded-full flex items-center justify-center">
                        <Image src={CheckBlack} alt="" className="h-3" />
                      </span>
                      Fee: 50%
                    </p>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="block w-full bg-gradient border border-white !rounded-full text-center text-gray-800 py-2.5 xl:py-4 px-8"
                >
                  Subscribe
                </Link>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="pricing-plan-box bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 lg:px-10">
                <h4 className="text-gray-800 text-2xl font-bold mb-6 lg:mb-8">
                  Standard
                </h4>
                <h2 className="flex items-end text-gray-800 text-8xl leading-none font-bold mb-6 lg:mb-10">
                  <span className="text-4xl pe-4">USDT</span> 15{" "}
                  <span className="text-gray-600 text-lg font-normal">
                    /monthly
                  </span>
                </h2>
                <h4 className="text-gray-800 text-2xl font-bold mb-4">
                  What’s included
                </h4>
                <ul className="mb-8 lg:mb-10">
                  <li className="mb-3">
                    <p className="flex items-center text-gray-800 text-lg gap-2">
                      <span className="bg-gradient w-7 h-7 rounded-full flex items-center justify-center">
                        <Image src={CheckBlack} alt="" className="h-3" />
                      </span>
                      No. of tickets: 3
                    </p>
                  </li>
                  <li className="mb-3">
                    <p className="flex items-center text-gray-800 text-lg gap-2">
                      <span className="bg-gradient w-7 h-7 rounded-full flex items-center justify-center">
                        <Image src={CheckBlack} alt="" className="h-3" />
                      </span>
                      Subscription: Monthly
                    </p>
                  </li>
                  <li className="mb-3">
                    <p className="flex items-center text-gray-800 text-lg gap-2">
                      <span className="bg-gradient w-7 h-7 rounded-full flex items-center justify-center">
                        <Image src={CheckBlack} alt="" className="h-3" />
                      </span>
                      Fee: 50%
                    </p>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="block w-full bg-gradient border border-white !rounded-full text-center text-gray-800 py-2.5 xl:py-4 px-8"
                >
                  Subscribe
                </Link>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="pricing-plan-box bg-gradient border border-gray-100 rounded-2xl p-6 lg:p-8 lg:px-10">
                <h4 className="text-gray-800 text-2xl font-bold mb-6 lg:mb-8">
                  Premium
                </h4>
                <h2 className="flex items-end text-gray-800 text-8xl leading-none font-bold mb-6 lg:mb-10">
                  <span className="text-4xl pe-4">USDT</span> 20{" "}
                  <span className="text-gray-600 text-lg font-normal">
                    /monthly
                  </span>
                </h2>
                <h4 className="text-gray-800 text-2xl font-bold mb-4">
                  What’s included
                </h4>
                <ul className="mb-8 lg:mb-10">
                  <li className="mb-3">
                    <p className="flex items-center text-gray-800 text-lg gap-2">
                      <span className="bg-gradient w-7 h-7 rounded-full flex items-center justify-center">
                        <Image src={CheckBlack} alt="" className="h-3" />
                      </span>
                      No. of tickets: 5
                    </p>
                  </li>
                  <li className="mb-3">
                    <p className="flex items-center text-gray-800 text-lg gap-2">
                      <span className="bg-gradient w-7 h-7 rounded-full flex items-center justify-center">
                        <Image src={CheckBlack} alt="" className="h-3" />
                      </span>
                      Subscription: Monthly
                    </p>
                  </li>
                  <li className="mb-3">
                    <p className="flex items-center text-gray-800 text-lg gap-2">
                      <span className="bg-gradient w-7 h-7 rounded-full flex items-center justify-center">
                        <Image src={CheckBlack} alt="" className="h-3" />
                      </span>
                      Fee: 50%
                    </p>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="block w-full bg-white border border-white !rounded-full text-center text-gray-800 py-2.5 xl:py-4 px-8"
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area relative pb-20 lg:pb-44">
        <div className="container">
          <div className="grid items-center md:grid-cols-12 gap-4">
            <div className="md:col-span-6 md:order-4">
              <div className="about-content max-w-3xl">
                <h4 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
                  Prize{" "}
                  <span className="text-gradient font-bold">Distribution</span>{" "}
                  Made <span className="text-gradient font-bold">Simple</span>
                </h4>
                <p className="mb-3">
                  We ensure fair and transparent prize distribution for the top
                  3 winners
                </p>
                <ul className="max-w-2xl list-square ps-5 mb-6">
                  <li>
                    {" "}
                    <strong>1st Prize:</strong> 50% of the Reward Amount.
                  </li>
                  <li>
                    <strong>2nd Prize:</strong> 30% of the Reward Amount.
                  </li>
                  <li>
                    <strong>3rd Prize:</strong> 20% of the Reward Amount.
                  </li>
                </ul>
                <p>
                  Once the raffle ends, the prize pool will be divided
                  accordingly and instantly transferred to the winners. No
                  delays, just your rewards delivered quickly and securely!
                </p>
              </div>
            </div>
            <div className="md:col-span-6 md:order-1">
              <div className="about-image group text-center relative mt-6 md:mt-0">
                <Image
                  src={PrizeDistribution}
                  className="inline-block"
                  alt=""
                />
                <ul className="absolute top-0 left-0 w-full h-full">
                  <li className="group-hover:scale-[8] group-hover:-translate-y-7 absolute top-24 lg:top-32 left-16 lg:left-40 transition-all duration-1000">
                    <Image src={PrizeStar1} alt="" />
                  </li>
                  <li className="group-hover:scale-[6] absolute left-32 lg:left-72 top-4 lg:top-16 transition-all duration-1000">
                    <Image src={PrizeStar2} alt="" />
                  </li>
                  <li className="group-hover:scale-[8] absolute right-12 lg:right-48 top-24 lg:top-56 transition-all duration-1000">
                    <Image src={PrizeStar3} alt="" />
                  </li>
                  <li className="group-hover:scale-[80] absolute right-24 lg:right-72 top-8 transition-all duration-1000">
                    <Image src={PrizeStar4} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="table-crypto-area relative z-40 pb-20 lg:pb-44">
        <div className="container pe-0 md:pe-4">
          <div className="max-w-3xl text-center mx-auto mb-8 lg:mb-24">
            <h3 className="text-2xl lg:text-4xl font-semibold sm:font-bold mb-4 lg:mb-6">
              Leader Board
            </h3>
          </div>
          <div className="table-wrapper max-w-7xl mx-auto bordered border-gradient p-6">
            <div className="relative z-20">
              <p className="mb-6">
                Lifetime Earnings Leaderboard: Top EXTSY Raffle Winners
              </p>
              <div className="responsive-table overflow-auto">
                <table className="w-[80rem] xl:w-full">
                  <thead>
                    <tr>
                      <th className="w-32 font-normal text-start py-4 ps-6 pe-10">
                        <p>Place</p>
                      </th>
                      <th className="w-32 font-normal text-start py-4 px-5">
                        <p>User Name</p>
                      </th>
                      <th className="w-32 font-normal text-start py-4 px-5">
                        <p>Winning Price</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">1</p>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <Link className="flex items-center gap-4" href="#">
                          <span className="w-8 h-8 rounded-full overflow-hidden">
                            <Image src={UserImage1} alt="" className="w-full" />
                          </span>
                          CoinMastery
                        </Link>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$56,623.54</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">2</p>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <Link className="flex items-center gap-4" href="#">
                          <span className="w-8 h-8 rounded-full overflow-hidden">
                            <Image src={UserImage2} alt="" className="w-full" />
                          </span>
                          BlockFiend
                        </Link>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$4,267.90</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">3</p>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <Link className="flex items-center gap-4" href="#">
                          <span className="w-8 h-8 rounded-full overflow-hidden">
                            <Image src={UserImage3} alt="" className="w-full" />
                          </span>
                          CryptoCraftr
                        </Link>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$4,160.85</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">4</p>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <Link className="flex items-center gap-4" href="#">
                          <span className="w-8 h-8 rounded-full overflow-hidden">
                            <Image src={UserImage4} alt="" className="w-full" />
                          </span>
                          LedgerWhale
                        </Link>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$4,032.21</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">5</p>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <Link className="flex items-center gap-4" href="#">
                          <span className="w-8 h-8 rounded-full overflow-hidden">
                            <Image src={UserImage5} alt="" className="w-full" />
                          </span>
                          TokenTrailblzr
                        </Link>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$3,915.00</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">6</p>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <Link className="flex items-center gap-4" href="#">
                          <span className="w-8 h-8 rounded-full overflow-hidden">
                            <Image src={UserImage6} alt="" className="w-full" />
                          </span>
                          BitwiseGenius
                        </Link>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$3,865.15</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">7</p>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <Link className="flex items-center gap-4" href="#">
                          <span className="w-8 h-8 rounded-full overflow-hidden">
                            <Image src={UserImage7} alt="" className="w-full" />
                          </span>
                          ChainNova
                        </Link>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$3,621.00</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">8</p>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <Link className="flex items-center gap-4" href="#">
                          <span className="w-8 h-8 rounded-full overflow-hidden">
                            <Image src={UserImage8} alt="" className="w-full" />
                          </span>
                          CryptoSphere
                        </Link>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$3,220.01</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">9</p>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <Link className="flex items-center gap-4" href="#">
                          <span className="w-8 h-8 rounded-full overflow-hidden">
                            <Image src={UserImage9} alt="" className="w-full" />
                          </span>
                          SatoshiVibes
                        </Link>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$3,000.25</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-32 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">10</p>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <Link className="flex items-center gap-4" href="#">
                          <span className="w-8 h-8 rounded-full overflow-hidden">
                            <Image
                              src={UserImage10}
                              alt=""
                              className="w-full"
                            />
                          </span>
                          AltcoinAdept
                        </Link>
                      </td>
                      <td className="w-2/4 font-normal text-start py-2 px-5 border-t border-b border-r border-gray-600">
                        <p className="text-state-300">$2,500.1</p>
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

export default Raffle;
