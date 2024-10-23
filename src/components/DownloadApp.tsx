import React from 'react';
import ImagePic from '../app/assets/images/Frame 1261153912.png';
import Image from 'next/image';
import PlayStoreButton from '../app/assets/images/Store download button.png';
import IStoreButton from '../app/assets/images/Store download button (1).png';

const DownloadApp = () => {
  return (
    <section className="app-area lg:p-20">
      <div className="container">
        <div className="grid md:grid-cols-12 items-center gap-20">
          <div className="md:col-span-6">
            <Image src={ImagePic} alt="" />
          </div>
          <div className="md:col-span-6">
            <div className="about-content max-w-xl">
              <h3 className="text-3xl lg:text-[40px] mb-4 lg:mb-6">
                Try the future, today.
                <span className="text-gradient font-bold block harmonyos-sans-bold">
                  {' '}
                  Download Extsy App
                </span>
              </h3>
              <p className="mb-8 text-extsy">
                Seamlessly Swap, Buy, Sell, and Trade cryptocurrencies. Manage
                your digital assets with ease and unlock the benefits of our
                Virtual Card. Download Extsy today and take control of your
                crypto journey.
              </p>
              <div className="block md:flex justify-between gap-4">
                <div className="mb-6 md:mb-0">
                  <p className="text-[#FAFAFA] font-metropolis text-[16px] font-normal leading-[120%]">
                    Download Extsy App from
                  </p>
                  <div className="flex gap-3 mt-4">
                    <Image src={PlayStoreButton} alt="" />
                    <Image src={IStoreButton} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
