import React from "react";
import HeroElipse from "../../assets/images/hero-elipse.svg";
import HeroGrid from "../../assets/images/hero-grid.svg";
import ArrowBlog from "../../assets/images/arrow-blog.svg";
import BlogImage1 from "../../assets/images/blog-image1.jpg";
import BlogImage2 from "../../assets/images/blog-image2.jpg";
import BlogImage3 from "../../assets/images/blog-image3.jpg";
import BlogImage4 from "../../assets/images/blog-image4.jpg";
import BlogImage5 from "../../assets/images/blog-image5.jpg";
import BlogImage6 from "../../assets/images/blog-image6.jpg";
import BlogImage7 from "../../assets/images/blog-image7.jpg";
import BlogImage8 from "../../assets/images/blog-image8.jpg";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <section className="hero-area heroShapeNone relative pt-24 lg:pt-48 pb-20 lg:pb-44">
        <div className="hidden lg:block hero-elipse absolute left-0 top-0">
          <Image src={HeroElipse} alt="" />
        </div>
        <div className="hero-grid absolute left-0 top-0">
          <Image src={HeroGrid} alt="" />
        </div>

        <div className="container">
          <div className="hero-content text-center relative z-40">
            <h1
              data-aos="fade-up"
              className="text-3xl lg:text-5xl  leading-tight text-white font-normal mb-6 lg:mb-8"
            >
              <span className="text-gradient">Blogs</span>
            </h1>
            <p className="max-w-3xl mx-auto">
              Insights, Updates, and Trends in the Crypto World
            </p>
          </div>
        </div>
      </section>

      <section className="blog-area relative z-20 pb-20 lg:pb-44">
        <div className="container">
          <div className="bloginLine-wrapper grid md:grid-cols-12 gap-6 mb-8">
            <div className="md:col-span-12">
              <div className="blog-box min-w-72 md:bg-gray-800 grid md:grid-cols-12 gap-6 rounded-3xl overflow-auto">
                <div className="md:col-span-6">
                  <Link
                    href="#"
                    className="blog-image w-full h-full block rounded-3xl overflow-hidden"
                  >
                    <Image
                      src={BlogImage1}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
                <div className="md:col-span-6">
                  <div className="blog-content">
                    <p className="text-sm lg:text-lg py-3">Aug 20, 2024</p>
                    <h3 className="text-2xl lg:text-4xl	text-white hover:text-pink-500 font-bold transition mb-6">
                      <Link href="#">
                        All about Investing in NFTs and related risks
                      </Link>
                    </h3>
                    <Link
                      href="#"
                      className="inline-block text-xs lg:text-lg bg-white/15 hover:bg-amber-100 hover:text-gray-800 py-px px-3 rounded-md transition mb-4 lg:mb-8"
                    >
                      CRYPTO BASIC
                    </Link>
                    <p className="mb-4 lg:mb-8">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s{" "}
                      <span className="hidden md:block">
                        when an unknown printer took Link galley of type and
                        scrambled it to make Link type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </span>
                    </p>
                    <Link
                      href="/pages/blog/blogDetails"
                      className="readmore-btn flex items-center hover:text-pink-500 transition gap-4 pb-2"
                    >
                      Learn More <Image src={ArrowBlog} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 xl:col-span-4">
              <div className="blog-box min-w-72 md:bg-white rounded-3xl overflow-hidden">
                <Link
                  href="#"
                  className="blog-image w-full h-full block rounded-3xl overflow-hidden mb-6"
                >
                  <Image src={BlogImage2} alt="" className="w-full" />
                </Link>
                <div className="blog-content md:py-6 md:px-8 !pt-0">
                  <p className="md:text-gray-600 text-sm lg:text-lg mb-3">
                    Aug 20, 2024
                  </p>
                  <h3 className="text-2xl lg:text-3xl	md:text-gray-800 hover:text-pink-500 font-bold transition mb-6">
                    <Link href="#">
                      What is cryptocurrency? all you need to know
                    </Link>
                  </h3>
                  <Link
                    href="#"
                    className="inline-block text-xs lg:text-lg bg-white/15 md:bg-gray-800/10 hover:bg-amber-100 lg:text-gray-800 hover:text-gray-800 py-px px-3 rounded-md transition mb-4 lg:mb-8"
                  >
                    CRYPTO BASIC
                  </Link>
                  <p className="md:text-gray-600 mb-4 lg:mb-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,{" "}
                  </p>
                  <Link
                    href="/pages/blog/blogDetails"
                    className="readmore-btn flex items-center md:text-pink-500 hover:text-pink-500 transition gap-4 pb-2"
                  >
                    Learn More{" "}
                    <Image src={ArrowBlog} alt="" className="grid-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 xl:col-span-4">
              <div className="blog-box min-w-72 md:bg-white rounded-3xl overflow-hidden">
                <Link
                  href="#"
                  className="blog-image w-full h-full block rounded-3xl overflow-hidden mb-6"
                >
                  <Image className="w-full" src={BlogImage3} alt="" />
                </Link>
                <div className="blog-content md:py-6 md:px-8 !pt-0">
                  <p className="md:text-gray-600 text-sm lg:text-lg mb-3">
                    Aug 20, 2024
                  </p>
                  <h3 className="text-2xl lg:text-3xl	md:text-gray-800 hover:text-pink-500 font-bold transition mb-6">
                    <Link href="#">
                      What is cryptocurrency? all you need to know
                    </Link>
                  </h3>
                  <Link
                    href="#"
                    className="inline-block text-xs lg:text-lg bg-white/15 md:bg-gray-800/10 hover:bg-amber-100 lg:text-gray-800 hover:text-gray-800 py-px px-3 rounded-md transition mb-4 lg:mb-8"
                  >
                    CRYPTO BASIC
                  </Link>
                  <p className="md:text-gray-600 mb-4 lg:mb-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,{" "}
                  </p>
                  <Link
                    href="/pages/blog/blogDetails"
                    className="readmore-btn flex items-center md:text-pink-500 hover:text-pink-500 transition gap-4 pb-2"
                  >
                    Learn More{" "}
                    <Image src={ArrowBlog} alt="" className="grid-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 xl:col-span-4">
              <div className="blog-box min-w-72 md:bg-white rounded-3xl overflow-hidden">
                <Link
                  href="#"
                  className="blog-image w-full h-full block rounded-3xl overflow-hidden mb-6"
                >
                  <Image className="w-full" src={BlogImage4} alt="" />
                </Link>
                <div className="blog-content md:py-6 md:px-8 !pt-0">
                  <p className="md:text-gray-600 text-sm lg:text-lg mb-3">
                    Aug 20, 2024
                  </p>
                  <h3 className="text-2xl lg:text-3xl	md:text-gray-800 hover:text-pink-500 font-bold transition mb-6">
                    <Link href="#">
                      What is cryptocurrency? all you need to know
                    </Link>
                  </h3>
                  <Link
                    href="#"
                    className="inline-block text-xs lg:text-lg bg-white/15 md:bg-gray-800/10 hover:bg-amber-100 lg:text-gray-800 hover:text-gray-800 py-px px-3 rounded-md transition mb-4 lg:mb-8"
                  >
                    CRYPTO BASIC
                  </Link>
                  <p className="md:text-gray-600 mb-4 lg:mb-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,{" "}
                  </p>
                  <Link
                    href="/pages/blog/blogDetails"
                    className="readmore-btn flex items-center md:text-pink-500 hover:text-pink-500 transition gap-4 pb-2"
                  >
                    Learn More{" "}
                    <Image src={ArrowBlog} alt="" className="grid-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-wrapper md:hidden grid md:grid-cols-12 gap-6">
            <div className="md:col-span-6 xl:col-span-4">
              <div className="blog-box min-w-72 md:bg-white rounded-3xl overflow-hidden">
                <Link
                  href="#"
                  className="blog-image w-full h-full block rounded-3xl overflow-hidden mb-6"
                >
                  <Image src={BlogImage3} className="w-full" alt="" />
                </Link>
                <div className="blog-content md:py-6 md:px-8 !pt-0">
                  <p className="md:text-gray-600 text-sm lg:text-lg mb-3">
                    Aug 20, 2024
                  </p>
                  <h3 className="text-2xl 	md:text-gray-800 hover:text-pink-500 font-bold transition mb-6">
                    <Link href="#">
                      All about Investing in NFTs and related risks
                    </Link>
                  </h3>
                  <Link
                    href="#"
                    className="inline-block text-xs lg:text-lg bg-white/15 md:bg-gray-800/10 hover:bg-amber-100 lg:text-gray-800 hover:text-gray-800 py-px px-3 rounded-md transition mb-4 lg:mb-8"
                  >
                    CRYPTO BASIC
                  </Link>
                  <p className="md:text-gray-600 mb-4 lg:mb-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,{" "}
                  </p>
                  <Link
                    href="/pages/blog/blogDetails"
                    className="readmore-btn flex items-center md:text-pink-500 hover:text-pink-500 transition gap-4 pb-2"
                  >
                    Learn More{" "}
                    <Image src={ArrowBlog} alt="" className="grid-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 xl:col-span-4">
              <div className="blog-box min-w-72 md:bg-white rounded-3xl overflow-hidden">
                <Link
                  href="#"
                  className="blog-image w-full h-full block rounded-3xl overflow-hidden mb-6"
                >
                  <Image className="w-full" src={BlogImage4} alt="" />
                </Link>
                <div className="blog-content md:py-6 md:px-8 !pt-0">
                  <p className="md:text-gray-600 text-sm lg:text-lg mb-3">
                    Aug 20, 2024
                  </p>
                  <h3 className="text-2xl lg:text-3xl	md:text-gray-800 hover:text-pink-500 font-bold transition mb-6">
                    <Link href="#">
                      All about Investing in NFTs and related risks
                    </Link>
                  </h3>
                  <Link
                    href="#"
                    className="inline-block text-xs lg:text-lg bg-white/15 md:bg-gray-800/10 hover:bg-amber-100 lg:text-gray-800 hover:text-gray-800 py-px px-3 rounded-md transition mb-4 lg:mb-8"
                  >
                    CRYPTO BASIC
                  </Link>
                  <p className="md:text-gray-600 mb-4 lg:mb-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,{" "}
                  </p>
                  <Link
                    href="/pages/blog/blogDetails"
                    className="readmore-btn flex items-center md:text-pink-500 hover:text-pink-500 transition gap-4 pb-2"
                  >
                    Learn More{" "}
                    <Image src={ArrowBlog} alt="" className="grid-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="desktop-wrapper hidden md:grid md:grid-cols-12 gap-6">
            <div className="md:col-span-12">
              <div className="blog-box md:bg-gray-800 grid md:grid-cols-12 gap-6 rounded-3xl overflow-auto">
                <div className="md:col-span-6">
                  <Link
                    href="#"
                    className="blog-image w-full h-full block rounded-3xl overflow-hidden"
                  >
                    <Image
                      className="w-full h-full object-cover"
                      src={BlogImage5}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="md:col-span-6">
                  <div className="blog-content">
                    <p className="text-sm lg:text-lg py-3">Aug 20, 2024</p>
                    <h3 className="text-2xl lg:text-5xl	text-white hover:text-pink-500 font-bold transition mb-6">
                      <Link href="#">
                        All about Investing in NFTs and related risks
                      </Link>
                    </h3>
                    <Link
                      href="#"
                      className="inline-block text-xs lg:text-lg bg-white/15 hover:bg-amber-100 hover:text-gray-800 py-px px-3 rounded-md transition mb-4 lg:mb-8"
                    >
                      CRYPTO BASIC
                    </Link>
                    <p className="mb-4 lg:mb-8">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took Link galley of type and
                      scrambled it to make Link type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.
                    </p>
                    <Link
                      href="/pages/blog/blogDetails"
                      className="readmore-btn flex items-center hover:text-pink-500 transition gap-4 pb-2"
                    >
                      Learn More <Image src={ArrowBlog} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 xl:col-span-4">
              <div className="blog-box md:bg-white rounded-3xl overflow-hidden">
                <Link
                  href="#"
                  className="blog-image w-full h-full block rounded-3xl overflow-hidden mb-6"
                >
                  <Image src={BlogImage6} className="w-full" alt="" />
                </Link>
                <div className="blog-content md:py-6 md:px-8 !pt-0">
                  <p className="md:text-gray-600 text-sm lg:text-lg mb-3">
                    Aug 20, 2024
                  </p>
                  <h3 className="text-2xl lg:text-3xl	md:text-gray-800 hover:text-pink-500 font-bold transition mb-6">
                    <Link href="#">
                      What is cryptocurrency? all you need to know
                    </Link>
                  </h3>
                  <Link
                    href="#"
                    className="inline-block text-xs lg:text-lg bg-white/15 md:bg-gray-800/10 hover:bg-amber-100 lg:text-gray-800 hover:text-gray-800 py-px px-3 rounded-md transition mb-4 lg:mb-8"
                  >
                    CRYPTO BASIC
                  </Link>
                  <p className="md:text-gray-600 mb-4 lg:mb-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,{" "}
                  </p>
                  <Link
                    href="/pages/blog/blogDetails"
                    className="readmore-btn flex items-center md:text-pink-500 hover:text-pink-500 transition gap-4 pb-2"
                  >
                    Learn More{" "}
                    <Image src={ArrowBlog} alt="" className="grid-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 xl:col-span-4">
              <div className="blog-box md:bg-white rounded-3xl overflow-hidden">
                <Link
                  href="#"
                  className="blog-image w-full h-full block rounded-3xl overflow-hidden mb-6"
                >
                  <Image src={BlogImage7} className="w-full" alt="" />
                </Link>
                <div className="blog-content md:py-6 md:px-8 !pt-0">
                  <p className="md:text-gray-600 text-sm lg:text-lg mb-3">
                    Aug 20, 2024
                  </p>
                  <h3 className="text-2xl lg:text-3xl	md:text-gray-800 hover:text-pink-500 font-bold transition mb-6">
                    <Link href="#">
                      What is cryptocurrency? all you need to know
                    </Link>
                  </h3>
                  <Link
                    href="#"
                    className="inline-block text-xs lg:text-lg bg-white/15 md:bg-gray-800/10 hover:bg-amber-100 lg:text-gray-800 hover:text-gray-800 py-px px-3 rounded-md transition mb-4 lg:mb-8"
                  >
                    CRYPTO BASIC
                  </Link>
                  <p className="md:text-gray-600 mb-4 lg:mb-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,{" "}
                  </p>
                  <Link
                    href="/pages/blog/blogDetails"
                    className="readmore-btn flex items-center md:text-pink-500 hover:text-pink-500 transition gap-4 pb-2"
                  >
                    Learn More{" "}
                    <Image src={ArrowBlog} alt="" className="grid-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 xl:col-span-4">
              <div className="blog-box md:bg-white rounded-3xl overflow-hidden">
                <Link
                  href="#"
                  className="blog-image w-full h-full block rounded-3xl overflow-hidden mb-6"
                >
                  <Image src={BlogImage8} className="w-full" alt="" />
                </Link>
                <div className="blog-content md:py-6 md:px-8 !pt-0">
                  <p className="md:text-gray-600 text-sm lg:text-lg mb-3">
                    Aug 20, 2024
                  </p>
                  <h3 className="text-2xl lg:text-3xl	md:text-gray-800 hover:text-pink-500 font-bold transition mb-6">
                    <Link href="#">
                      What is cryptocurrency? all you need to know
                    </Link>
                  </h3>
                  <Link
                    href="#"
                    className="inline-block text-xs lg:text-lg bg-white/15 md:bg-gray-800/10 hover:bg-amber-100 lg:text-gray-800 hover:text-gray-800 py-px px-3 rounded-md transition mb-4 lg:mb-8"
                  >
                    CRYPTO BASIC
                  </Link>
                  <p className="md:text-gray-600 mb-4 lg:mb-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,{" "}
                  </p>
                  <Link
                    href="/pages/blog/blogDetails"
                    className="readmore-btn flex items-center md:text-pink-500 hover:text-pink-500 transition gap-4 pb-2"
                  >
                    Learn More{" "}
                    <Image src={ArrowBlog} alt="" className="grid-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
