import React from "react";
import HeroElipse from "../../../assets/images/hero-elipse.svg";
import HeroGrid from "../../../assets/images/hero-grid.svg";
import HeaderLogo from "../../../assets/images/header-logo.svg";
import BlogDetail from "../../../assets/images/blog-detail.jpg";
import BlogDetail2 from "../../../assets/images/blog-detail2.jpg";
import BlogDetail3 from "../../../assets/images/blog-detail3.jpg";
import BlogDetail4 from "../../../assets/images/blog-detail4.jpg";
import BlogDetail5 from "../../../assets/images/blog-detail5.jpg";
import BlogDetail6 from "../../../assets/images/blog-detail6.jpg";
import BlogDetail7 from "../../../assets/images/blog-detail7.jpg";
import BlogDetail8 from "../../../assets/images/blog-detail8.jpg";
import Image from "next/image";
import Link from "next/link";

const BlogDetails = () => {
  return (
    <div>
      <section className="hero-area heroShapeNone relative pt-24 lg:pt-48 pb-16 lg:pb-28">
        <div className="hidden lg:block hero-elipse absolute left-0 top-0">
          <Image src={HeroElipse} alt="" />
        </div>
        <div className="hero-grid absolute left-0 top-0">
          <Image src={HeroGrid} alt="" />
        </div>
        <div className="container">
          <div className="hero-content max-w-5xl mx-auto text-center relative z-40">
            <nav className="flex items-center justify-center gap-2 relative z-20 mb-2 lg:mb-6">
              <Link
                className="text-gray-600 hover:text-pink-600 transition"
                href="#"
              >
                Blog
              </Link>
              <span>/</span>
              <Link
                className="text-gray-600 hover:text-pink-600 transition"
                href="#"
              >
                Custom Software Solution
              </Link>
            </nav>
            <h1
              data-aos="fade-up"
              className="text-3xl md:text-5xl  leading-tight text-white font-normal lg:font-bold mb-4 lg:mb-8"
            >
              All about Investing in NFTs and related risks
            </h1>
            <p className="max-w-4xl text-gray-600 mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s,
            </p>
          </div>
        </div>
      </section>

      <section className="blog-area z-20 pb-20 lg:pb-44">
        <div className="container">
          <div className="blog-feature-image relative z-20 rounded-3xl overflow-hidden mb-12 lg:mb-24">
            <figure className="hidden md:block">
              <Image src={BlogDetail} alt="" className="w-full" />
            </figure>
            <figure className="block md:hidden">
              <Image src={BlogDetail8} alt="" className="w-full" />
            </figure>
          </div>
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-4 lg:col-span-4 hidden md:block">
              <h4 className="text-lg lg:text-2xl text-white font-bold mb-6">
                In this blog
              </h4>
              <ul className="blog-sticky-menu sticky top-28">
                <li className="relative mb-2 lg:mb-5 ps-8 lg:ps-12 active">
                  <Link href="#one">Introduction</Link>
                </li>
                <li className="relative mb-2 lg:mb-5 ps-8 lg:ps-12">
                  <Link href="#two">Natural Language Processing (NLP)</Link>
                </li>
                <li className="relative mb-2 lg:mb-5 ps-8 lg:ps-12">
                  <Link href="#three">Computer Vision</Link>
                </li>
                <li className="relative mb-2 lg:mb-5 ps-8 lg:ps-12">
                  <Link href="#four">Healthcare Applications</Link>
                </li>
                <li className="relative mb-2 lg:mb-5 ps-8 lg:ps-12">
                  <Link href="#five">Robotics and Automation</Link>
                </li>
                <li className="relative mb-2 lg:mb-5 ps-8 lg:ps-12">
                  <Link href="#six">Ethical Considerations</Link>
                </li>
                <li className="relative mb-2 lg:mb-5 ps-8 lg:ps-12">
                  <Link href="#seven">Conclusion</Link>
                </li>
              </ul>
            </div>
            <div className="md:col-span-8 lg:col-span-8">
              <section id="one">
                <div className="mb-8">
                  <Image src={HeaderLogo} className="h-12" alt="" />
                </div>
                <h3 className="text-3xl lg:text-5xl text-white font-semibold sm:font-bold mb-6">
                  Introduction
                </h3>
                <p className="mb-8 lg:mb-16">
                  Non-Fungible Tokens (NFTs) have taken the digital world by
                  storm. From digital art and music to virtual real estate and
                  collectibles, NFTs represent unique assets stored on
                  blockchain technology. While the buzz around NFTs has
                  attracted both seasoned investors and newcomers alike, diving
                  into this space requires understanding not just the
                  opportunities but also the risks involved.
                </p>
                <figure className="hidden md:block mb-8 lg:mb-16">
                  <Image src={BlogDetail2} alt="" className="w-full" />
                </figure>
                <figure className="block md:hidden mb-8 lg:mb-16">
                  <Image src={BlogDetail7} alt="" className="w-full" />
                </figure>
              </section>

              <section id="two">
                <h3 className="text-3xl lg:text-5xl	text-white font-bold my-6">
                  What Are NFTs?
                </h3>
                <p className="mb-8 lg:mb-16">
                  NFTs are digital assets representing ownership of unique items
                  or content. Unlike cryptocurrencies like Bitcoin or Ethereum,
                  which are interchangeable (fungible), NFTs are unique and
                  cannot be swapped on a one-to-one basis. This uniqueness is
                  why NFTs are often compared to digital collectibles, where
                  ownership and provenance are key.
                </p>
              </section>
              <section id="three">
                <div className="bg-gray-900 px-6 py-3 mb-8 lg:mb-16">
                  <h4 className="text-lg lg:text-2xl	text-white font-bold mb-6">
                    Some popular use cases include:
                  </h4>
                  <ul className="max-w-4xl list-square ps-5">
                    <li>
                      <strong>Digital Art:</strong> Artists mint NFTs to sell
                      digital pieces while retaining royalties on future sales.
                    </li>
                    <li>
                      <strong>Music and Videos:</strong> Musicians and creators
                      sell their work as NFTs, allowing fans to own exclusive
                      tracks or video clips.
                    </li>
                    <li>
                      <strong>Virtual Real Estate: </strong> In virtual worlds
                      like Decentraland and The Sandbox, users buy land as NFTs
                      to build, trade, or monetize virtual experiences.
                    </li>
                  </ul>
                </div>
              </section>
              <section id="four">
                <h3 className="text-3xl lg:text-5xl text-white font-semibold sm:font-bold mb-6">
                  Why Invest in NFTs?
                </h3>
                <p className="mb-8 lg:mb-16">
                  Investing in NFTs offers several potential benefits:
                </p>
                <div className="bg-gray-900 px-6 py-3 mb-8 lg:mb-16">
                  <ul className="max-w-4xl list-square ps-5">
                    <li>
                      <strong>Ownership of Digital Assets:</strong> NFTs allow
                      you to own and trade unique digital assets with verifiable
                      authenticity.
                    </li>
                    <li>
                      <strong>Early Adoption and Growth Potential:</strong> The
                      NFT market is still in its early stages, and some
                      investors see potential for high returns as adoption
                      grows.
                    </li>
                    <li>
                      <strong>Community and Utility:</strong> Many NFTs come
                      with perks like access to exclusive communities, events,
                      or even future rewards tied to the asset.
                    </li>
                  </ul>
                </div>
                <p className="mb-8 lg:mb-16">
                  Investing in NFTs offeHowever, like any investment, it’s
                  important to balance potential gains with Link clear
                  understanding of the risks.rs several potential benefits:
                </p>
              </section>
              <section id="five">
                <h3 className="text-3xl lg:text-5xl text-white font-semibold sm:font-bold mb-6">
                  Risks Associated with NFT Investments
                </h3>
                <p className="mb-8 lg:mb-16">
                  While NFTs can be lucrative, they are also highly speculative.
                  Here are the key risks to consider:
                </p>
                <div className="bg-gray-900 px-6 py-3 mb-8 lg:mb-16">
                  <ul className="max-w-4xl list-square ps-5">
                    <li>
                      <strong>Market Volatility:</strong> NFT prices can
                      fluctuate wildly. The value of an NFT is largely
                      determined by hype, demand, and perceived value, which
                      makes it susceptible to sharp declines.
                    </li>
                    <li>
                      <strong>Liquidity Issues:</strong> Unlike stocks or crypto
                      coins, NFTs are not easily traded. Finding a buyer willing
                      to pay your desired price can be challenging, leading to
                      liquidity risks.
                    </li>
                    <li>
                      <strong>Lack of Regulation:</strong>
                      The NFT space is still largely unregulated, which exposes
                      investors to scams, fraud, and rug pulls. Without strong
                      consumer protections, there’s a risk of losing your
                      investment entirely.
                    </li>
                    <li>
                      <strong>Technology Risks:</strong> NFTs are built on
                      blockchain networks, so their longevity depends on the
                      underlying technology. If the platform hosting your NFT
                      fails or becomes obsolete, your digital asset could lose
                      value or become inaccessible.
                    </li>
                    <li>
                      <strong>Environmental Concerns:</strong> The
                      energy-intensive nature of blockchain networks, especially
                      proof-of-work systems, raises environmental issues. Some
                      investors might hesitate due to the ecological footprint
                      associated with minting and trading NFTs.
                    </li>
                  </ul>
                </div>
                <figure className="hidden md:block mb-8 lg:mb-16">
                  <Image src={BlogDetail3} alt="" className="w-full" />
                </figure>
                <figure className="block md:hidden mb-8 lg:mb-16">
                  <Image src={BlogDetail5} alt="" className="w-full" />
                </figure>
              </section>
              <section id="six">
                <h3 className="text-3xl lg:text-5xl text-white font-semibold sm:font-bold mb-6">
                  Tips for Investing in NFTs Safely
                </h3>
                <p className="mb-8 lg:mb-16">
                  If you’re considering investing in NFTs, keep these tips in
                  mind:
                </p>
                <div className="bg-gray-900 px-6 py-3 mb-8 lg:mb-16">
                  <ul className="max-w-4xl list-square ps-5">
                    <li>
                      <strong>Do Your Research:</strong> Investigate the
                      project’s creators, community, and roadmap before making a
                      purchase. Understanding the team behind the NFT and its
                      potential future value is crucial.
                    </li>
                    <li>
                      <strong>Diversify Your Portfolio: </strong> Avoid putting
                      all your capital into a single NFT or even just NFTs in
                      general. Spread your investments across different asset
                      classes to manage risk.
                    </li>
                    <li>
                      <strong>Start Small:</strong> Given the speculative nature
                      of NFTs, it’s wise to start with smaller investments until
                      you become more familiar with the space.
                    </li>
                    <li>
                      <strong>Use Trusted Platforms:</strong> Always trade on
                      reputable NFT marketplaces and use secure wallets to store
                      your assets. Double-check the authenticity of any project
                      before investing.
                    </li>
                    <li>
                      <strong>Be Prepared for Losses:</strong> Only invest what
                      you can afford to lose. The NFT space is high-risk, and
                      not every investment will yield returns.
                    </li>
                  </ul>
                </div>
                <figure className="hidden md:block mb-8 lg:mb-16">
                  <Image src={BlogDetail4} alt="" className="w-full" />
                </figure>
                <figure className="block md:hidden mb-8 lg:mb-16">
                  <Image src={BlogDetail6} alt="" className="w-full" />
                </figure>
              </section>

              <section id="seven">
                <h3 className="text-3xl lg:text-5xl text-white font-semibold sm:font-bold mb-6">
                  Conclusion
                </h3>
                <p>
                  Investing in NFTs can be exciting, offering a blend of art,
                  culture, and technology with financial opportunities. However,
                  it&apos;s essential to approach this new asset className with
                  caution. Understanding both the potential rewards and the
                  inherent risks is key to making informed decisions and
                  protecting your investment. Whether you’re looking to buy
                  digital art, join a virtual community, or speculate on future
                  trends, remember that due diligence and risk management are
                  crucial steps in your NFT journey.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
