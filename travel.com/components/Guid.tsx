import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col mt-10">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-8 animate-bounce">
          سفری آسان و بی‌دغدغه به دل طبیعت با Safar.com
        </h1>
      </div>
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.jpg" alt="camp" width={100} height={90} />
        <p className="regular-18 -mt-1 mb-3 text-green-50">
          ما اینجام برای شما ❤️
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[490px]">
            شما را به مسیر آسان راهنمایی میکنیم
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            با برنامه Safar.comدیگر هیچ‌وقت گم نمی‌شوید! به لطف نقشه‌های آفلاین،
            حتی بدون اینترنت هم می‌توانید مسیرتان را پیدا کنید. حالا دوستان و
            خانواده‌تان را به سفری در طبیعت دعوت کنید، از دشت‌ها عبور کنید و به
            بلندای کوه‌ها برسید. آماده‌اید برای یک ماجراجویی به‌یادماندنی؟
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full">
        <Image src="/junlge.jpg" alt="boat" width={1440} height={580} />
        <div className="absolute flex opacity-80 bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.png"
            alt="meter"
            width={140}
            height={118}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">مسیر</p>
                <p className="bold-16 to-green-50 ">48 دقیقه</p>
              </div>
              <p className="bold-20 mt-2">جنگل مازندران</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">شروع مسیر</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">جنگل دالخانی</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
