import CryptoCurrency from "@/components/CryptoCurrency";
import Discover from "@/components/Discover";
import DownloadApp from "@/components/DownloadApp";
import Earnings from "@/components/Earnings";
import FAQs from "@/components/FAQs";
// import FeatureArea from '@/components/FeatureArea';

import Hero from "@/components/Hero";
// import P2PTrading from '@/components/P2PTrading';
import PartnerProgram from "@/components/PartnerProgram";
// import Spending from '@/components/Spending';
import StepArea from "@/components/StepArea";
import SupportedCrypto from "@/components/SupportedCrypto";
import Testimonial from "@/components/Testimonial";
import TradeChart from "@/components/TradeChart";
// import Trading from '@/components/Trading';

// src/app/page.tsx
export default function Home() {
  return (
    <div className=" overflow-hidden">
      <div className="relative">
        <div className="w-[776px] h-[300px] absolute top-[200px] left-0 -ml-[50%] 2xl:-ml-[30%] flex-shrink-0 rounded-[776px] bg-[#E35CAD] blur-[287px]"></div>
        <div className="w-[776px] h-[300px] absolute top-[200px] right-0 -mr-[10%] 2xl:-mr-[30%] flex-shrink-0 rounded-[776px] bg-[#15B097] blur-[287px]"></div>
        <Hero />
      </div>
      <CryptoCurrency />
      <Discover />
      <TradeChart />
      <StepArea />
      {/* <FeatureArea /> */}
      <Earnings />
      {/* <Spending />
      <Trading />
      <P2PTrading /> */}
      <SupportedCrypto />
      <Testimonial />
      <PartnerProgram />
      <div className="bg-[#161414]">
        <FAQs />
      </div>
      <DownloadApp />
    </div>
  );
}
