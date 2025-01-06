import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import React from "react";

interface travelProps {
  backGroundImage: String;
  title: String;
  subtitle: String;
  peoplejoined: String;
}

const TravelSite = ({
  backGroundImage,
  title,
  subtitle,
  peoplejoined,
}: travelProps) => {
  return (
    <div
      className={`h-3/4 w-full mt-10 sm:mt-20 min-w-[300px] sm:min-w-[900px] ${backGroundImage} bg-cover 
bg-no-repeat lg:rounded-r-5xl  2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-4 sm:p-6 lg:px-20 lg:py-10 bg-gradient-to-t from-black to-transparent">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="rounded-full bg-blue-500 p-3 sm:p-4 opacity-80 hover:opacity-100">
            <Image
              src="/logo1.png"
              alt="logo"
              width={48}
              height={48}
              className="rounded-2xl"
            />
          </div>
          <span className="font-mono text-white opacity-70">travel.com</span>
          <div className="flex flex-col gap-1">
            <h4 className="border-l-4 pl-2 text-white text-lg sm:text-xl font-semibold">{title}</h4>
            <p className="text-white text-sm sm:text-base">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="flex -space-x-3 sm:-space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                alt="person"
                key={url}
                width={42}
                height={42}
                className="inline-block h-10 w-10 rounded-full border-2 border-white"
              />
            ))}
          </span>
          <p className="text-white font-bold text-sm sm:text-lg">{peoplejoined}</p>
        </div>
      </div>
    </div>
  );
};

const Travel = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-8 sm:py-10 lg:mb-10 lg:py-10 xl:mb-20">
      <p className="text-xl sm:text-2xl text-center mt-10 sm:mt-20 text-gray-700">برای مشاهده اسلایدهای بیشتر، پایین اسکرول کنید</p>
      <div className="hide-scrollbar flex h-[240px] sm:h-[340px] w-full items-start justify-start gap-4 sm:gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <TravelSite 
          backGroundImage="bg-bg-img-1"
          title="پورتوک تورنو کمپ"
          subtitle="پریگن پاسوران"
          peoplejoined="+50 نفر"
        />
        <TravelSite
          backGroundImage="bg-bg-img-2"
          title="پورتوک تورنو کمپ"
          subtitle="پریگن پاسوران"
          peoplejoined="+50 نفر"
        />
        <TravelSite
          backGroundImage="bg-bg-img-3"
          title="پورتوک تورنو کمپ"
          subtitle="پریگن پاسوران"
          peoplejoined="+50 نفر"
        />
        <TravelSite
          backGroundImage="bg-bg-img-4"
          title="پورتوک تورنو کمپ"
          subtitle="پریگن پاسوران"
          peoplejoined="+50 نفر"
        />
        <TravelSite
          backGroundImage="bg-bg-img-5"
          title="پورتوک تورنو کمپ"
          subtitle="پریگن پاسوران"
          peoplejoined="+50 نفر"
        />
      </div>
    </section>
  );
};

export default Travel;
