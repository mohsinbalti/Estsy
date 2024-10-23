import React from 'react';
import HandSvg from '../app/assets/images/Group 1244831077.svg';
import Image from 'next/image';
const PartnerProgram = () => {
  return (
    <section className="about-area p-20 lg:p-34">
      <div className="container flex flex-col items-center gap-[150px]">
        <div className="grid items-center md:grid-cols-12 gap-4">
          <div className="md:col-span-7 lg:col-span-8">
            <div className="about-content max-w-3xl">
              <h4 className="text-3xl lg:text-5xl mb-4 lg:mb-6">
                Join Our Partner Program and
                <span className="text-gradient font-bold harmonyos-sans-bold">
                  {' '}
                  Grow
                </span>
                <span className="text-amber-100 harmonyos-sans-bold">
                  {' '}
                  Together
                </span>
              </h4>
              <p className="mb-6 text-extsy text-[18px] font-normal leading-[120%]">
                Collaborate with us to expand your reach and increase your
                revenue. Our partner program offers exclusive benefits, support,
                and opportunities to help you succeed in the crypto space.
              </p>
              <div className="flex gap-8 mb-4">
                <div className="lg:pe-12">
                  <h3 className="text-[#F0C2DB] font-metropolis text-[38px] font-semibold leading-none">
                    7378
                  </h3>
                  <p className="text-xs lg:text-md text-extsy text-center text-[#BAB8B8] text-[18px] font-normal leading-[26px]">
                    Active Monthly Payouts
                  </p>
                </div>
                <div className="lg:pe-12">
                  <h3 className="text-[#F0C2DB] font-metropolis text-[38px] font-semibold leading-none">
                    1M+
                  </h3>
                  <p className="text-xs lg:text-md text-extsy text-center text-[#BAB8B8] text-[18px] font-normal leading-[26px]">
                    Total Payouts
                  </p>
                </div>
                <div>
                  <h3 className="text-[#F0C2DB] font-metropolis text-[38px] font-semibold leading-none">
                    79K
                  </h3>
                  <p className="text-xs lg:text-md text-extsy text-center text-[#BAB8B8] text-[18px] font-normal leading-[26px]">
                    Active Partners
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 lg:col-span-4 content-center">
            <div>
              <Image src={HandSvg} alt="" />
            </div>
          </div>
        </div>
        <div className="inpartnert-platform rounded-3xl self-end">
          <div className="z-40 w-[550px] relative left-[60px] bottom-14">
            <h3 className="text-white font-metropolis text-[24px] font-normal leading-[120%]  mb-6 ">
              Boost your business with crypto swaps and start generating steady
              profits.
            </h3>
            <p className="text-extsy text-white font-metropolis text-[18px] font-normal leading-[120%]">
              Integrate our adaptable solutions, including API, Widget, and SDK,
              to provide a customized experience that seamlessly fits your
              business needs. These tools offer flexibility and ease of
              integration, empowering you to enhance your platform and deliver
              tailored services to your users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerProgram;
