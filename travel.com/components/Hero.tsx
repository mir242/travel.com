import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-10 pb-16 py-5 md:gap-14 lg:py-10 xl:flex-row">
      <div className="hero-map right-[2vw]" />
      <div className="z-20 flex flex-1 flex-col xl:w-20 ">
        <Image
          src="/Vector 1.png"
          alt="background"
          width={600}
          height={900}
          className="absolute top-[10vh] right-[10vw] "
        />
      </div>
      <div className="flex flex-col items-center xl:items-start right-[5vw] mt-0 relative z-20 text-center xl:text-left">
        <h1 className="animate-bounce bold-40 lg:bold-52 text-gradient xl:animate-none">
          تجربه‌های بی‌نظیر گردشگری در انتظار شماست
        </h1>
        <p className="text-custom mt-4">
          به سایت تراول دات کام خوش آمدید. از سواحل بکر تا فرهنگ‌های متنوع،
          بهترین 😊 تجربه‌های گردشگری را با ما داشته باشید. سفرتان را همین حالا
          شروع کنید 🧳
        </p>
      </div>
      <div className="my-11 flex flex-wrap gap-5 justify-center xl:justify-start">
        <div className="flex items-center opacity-50 hover:opacity-100 gap-2">
          {Array(5)
            .fill(1)
            .map((_, index) => (
              <Image
                src="/staricon.png"
                alt="star"
                key={index}
                width={12}
                height={12}
                className="w-auto h-auto"
              />
            ))}
          <p className="bold-16 lg:bold-20 text-blue-900">10k</p>
          <span className="text-sm opacity-75"> رضایت کاربران</span>
        </div>
      </div>
      <div className="relative flex flex-1 items-start justify-center xl:justify-start">
        <div className="relative z-20 flex w-full max-w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className="regular-16 text-gray-20">مکان</p>
              <Image
                className="rounded-full cursor-pointer"
                src="/close.png"
                alt="icon"
                width={24}
                height={24}
              />
            </div>
            <p className="bold-20 text-white">سفر به شیراز</p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">مسافت</p>
              <p className="bold-20 to-white">308.7 KM</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">ارتفاع</p>
              <p className="bold-20 to-white">1.7 KM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
