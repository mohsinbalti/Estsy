'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import StraightQuote from '../app/assets/images/straight-quote.svg';
import LeftSlider from '../app/assets/images/left-slider-icon.svg';
import RightSlider from '../app/assets/images/right-slider-icon.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const Testimonial = () => {
  const [, setCurrentSlide] = useState(1);
  const [, setTotalSlides] = useState(3); // You can dynamically get this value if needed

  return (
    <section className="testimonial-area bg-[#161414] pb-20 lg:pb-34">
      <div className="container px-[100px] py-[152px]">
        <div className="max-w-3xl mb-8 lg:mb-24">
          <h3 className="text-3xl lg:text-[40px] font-bold text-normal mb-4 lg:mb-6">
            Find out how our users are
            <span className="text-gradient font-bold harmonyos-sans-bold">
              {' '}
              spreading the word!
            </span>
          </h3>
          <p className="text-extsy">
            Brief overview of the platform and its unique selling points.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
          onInit={(swiper) => setTotalSlides(swiper.slides.length)}
          className="testimonialSwiper"
        >
          <SwiperSlide>
            <div className="testimonial-item relative w-[336px] py-4 pl-6 pr-0 flex flex-col justify-center items-start gap-4 ">
              <div className="relative z-40">
                <div className="mb-4">
                  <Image
                    src={StraightQuote}
                    alt=""
                    className="w-[72px] opacity-[0.2] lg:w-[122px] lg:h-[101px] lg:opacity-[0.15] text-[#221F1F]"
                  />
                </div>

                <p className="text-base lg:text-xl leading-loose italic font-light mb-6 text-[#FAFAFA]">
                  Ipsum vel nobis doloremque est aut non accusantium vero
                  molestias. Et est minima dolorem eum modi atque sint nobis.
                  Enim quod facere. Reiciendis necessitatibus ipsam non
                  aspernatur voluptate id.
                </p>

                <div className="flex items-center gap-3 ">
                  {/* <hr className="w-1 h-10 bg-pink-500" /> */}
                  <div className="border-l border-pink-500">
                    <h4 className="text-lg lg:text-2xl font-bold mb-2 ml-4 lg:mb-0 text-[#FAFAFA]">
                      Kay Dooley
                    </h4>
                    <p className="text-sm lg:text-lg mb-1 ml-4 text-extsy text-[#FAFAFA]">
                      Future Creative Technician
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item relative w-[336px] py-4 pl-6 pr-0 flex flex-col justify-center items-start gap-4 ">
              <div className="relative z-40">
                <div className="mb-4">
                  <Image
                    src={StraightQuote}
                    alt=""
                    className="w-[72px] opacity-[0.2] lg:w-[122px] lg:h-[101px] lg:opacity-[0.15] text-[#221F1F]"
                  />
                </div>

                <p className="text-base lg:text-xl leading-loose italic font-light mb-6 text-[#FAFAFA]">
                  Ipsum vel nobis doloremque est aut non accusantium vero
                  molestias. Et est minima dolorem eum modi atque sint nobis.
                  Enim quod facere. Reiciendis necessitatibus ipsam non
                  aspernatur voluptate id.
                </p>

                <div className="flex items-center gap-3 ">
                  {/* <hr className="w-1 h-10 bg-pink-500" /> */}
                  <div className="border-l border-pink-500">
                    <h4 className="text-lg lg:text-2xl font-bold mb-2 ml-4 lg:mb-0 text-[#FAFAFA]">
                      Kay Dooley
                    </h4>
                    <p className="text-sm lg:text-lg mb-1 ml-4 text-extsy text-[#FAFAFA]">
                      Future Creative Technician
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item relative w-[336px] py-4 pl-6 pr-0 flex flex-col justify-center items-start gap-4 ">
              <div className="relative z-40">
                <div className="mb-4">
                  <Image
                    src={StraightQuote}
                    alt=""
                    className="w-[72px] opacity-[0.2] lg:w-[122px] lg:h-[101px] lg:opacity-[0.15] text-[#221F1F]"
                  />
                </div>

                <p className="text-base lg:text-xl leading-loose italic font-light mb-6 text-[#FAFAFA]">
                  Ipsum vel nobis doloremque est aut non accusantium vero
                  molestias. Et est minima dolorem eum modi atque sint nobis.
                  Enim quod facere. Reiciendis necessitatibus ipsam non
                  aspernatur voluptate id.
                </p>

                <div className="flex items-center gap-3 ">
                  {/* <hr className="w-1 h-10 bg-pink-500" /> */}
                  <div className="border-l border-pink-500">
                    <h4 className="text-lg lg:text-2xl font-bold mb-2 ml-4 lg:mb-0 text-[#FAFAFA]">
                      Kay Dooley
                    </h4>
                    <p className="text-sm lg:text-lg mb-1 ml-4 text-extsy text-[#FAFAFA]">
                      Future Creative Technician
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item relative w-[336px] py-4 pl-6 pr-0 flex flex-col justify-center items-start gap-4 ">
              <div className="relative z-40">
                <div className="mb-4">
                  <Image
                    src={StraightQuote}
                    alt=""
                    className="w-[72px] opacity-[0.2] lg:w-[122px] lg:h-[101px] lg:opacity-[0.15] text-[#221F1F]"
                  />
                </div>

                <p className="text-base lg:text-xl leading-loose italic font-light mb-6 text-[#FAFAFA]">
                  Ipsum vel nobis doloremque est aut non accusantium vero
                  molestias. Et est minima dolorem eum modi atque sint nobis.
                  Enim quod facere. Reiciendis necessitatibus ipsam non
                  aspernatur voluptate id.
                </p>

                <div className="flex items-center gap-3 ">
                  <div className="border-l border-pink-500">
                    <h4 className="text-lg lg:text-2xl font-bold mb-2 ml-4 lg:mb-0 text-[#FAFAFA]">
                      Kay Dooley
                    </h4>
                    <p className="text-sm lg:text-lg mb-1 ml-4 text-extsy text-[#FAFAFA]">
                      Future Creative Technician
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="testimonial-paginat flex items-center justify-end gap-3 mt-16 mr-8 relative z-40">
          <div className="flex swiper-button-prev w-[56px] h-[56px] p-[13.333px] justify-center items-center gap-[13.333px] rounded-[1332px] bg-[#383434]">
            <Image src={LeftSlider} alt="Next" className=" text-[#0B0A0A]" />
          </div>
          <div className="flex w-[56px] h-[56px] p-[13.333px] justify-center items-center gap-[13.333px] swiper-button-next rounded-full bg-gradient-to-r from-[#FEF9CC] via-[#F6DBD4] to-[#F0C2DB]">
            <Image
              src={RightSlider}
              alt="Previous"
              className=" text-[#0B0A0A]"
            />
          </div>

          {/* <div className="w-10 h-10 bg-gradient-to-r from-[#FEF9CC] via-[#F6DBD4] to-[#F0C2DB] swiper-button-prev flex items-center justify-center rounded-full">
            <Image
              src={LeftSlider}
              alt="Previous"
              width={21}
              height={13}
              className="fill-current text-[#0B0A0A]"
            />
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-[#FEF9CC] via-[#F6DBD4] to-[#F0C2DB] swiper-button-next flex items-center justify-center rounded-full">
            <Image
              src={RightSlider}
              alt="Next"
              width={21}
              height={13}
              className="fill-current text-[#0B0A0A]"
            /> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
