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
            <h4 className="border-l-4 pl-2 text-white text-lg sm:text-xl font-semibold animate-pulse">
              {title}
            </h4>
            <p className="text-gray-20  text-sm sm:text-base">{subtitle}</p>
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
          <p className="text-gray-20 font-bold text-sm sm:text-lg">
            {peoplejoined}
          </p>
        </div>
      </div>
    </div>
  );
};
export { TravelSite };

const Travel = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-8 sm:py-10 lg:mb-10 lg:py-10 xl:mb-20">
      <p className="text-xl sm:text-2xl text-center mt-10 sm:mt-20 text-gray-700">
     
        برای مشاهده اسلایدهای بیشتر، پایین اسکرول کنید
        <p className="hidden md:block opacity-40 mt-5 text-lg font-semibold text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">
    با استفاده از شیفت میتونید اسکرول کنید
</p>

      </p>
      <div className="hide-scrollbar flex h-[240px] sm:h-[340px] w-full items-start justify-start gap-4 sm:gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <TravelSite
          backGroundImage="bg-bg-img-1"
          title="Protocol Tornado Camp"
          subtitle="تور حافظیه سعدیه"
          peoplejoined="+50 نفر"
        />
        <TravelSite
          backGroundImage="bg-bg-img-2"
          title="Protocol Tornado Camp"
          subtitle="تو ویژه پاسارگاد"
          peoplejoined="+150 نفر"
        />
        <TravelSite
          backGroundImage="bg-bg-img-3"
          title="Protocol Tornado Camp"
          subtitle="کرمان گردی"
          peoplejoined="+35 نفر"
        />
        <TravelSite
          backGroundImage="bg-bg-img-4"
          title="Protocol Tornado Camp"
          subtitle="زیباترین شهر دنیا شیراز"
          peoplejoined="+60 نفر"
        />
        <TravelSite
          backGroundImage="bg-bg-img-5"
          title="Protocol Tornado Camp"
          subtitle="قشم بازان لاکچری"
          peoplejoined="+80 نفر"
        />
      </div>

      <div className="flexEnd mt-10 px-6  lg:ml-6">
        <div
          className="bg-blue-70 p-8 lg:max-w-[500px] xl:mx=w=[734px]
 xl:rounded-3xl xl:px-16 relative w-full overflow-hidden rounded-3xl"
        >
          <h2 className=" regular-24 md:regular-32 2xl:regular-64 text-white">
            <strong>هنوز نمیدونی کجا میخوای بری؟</strong>
          </h2>
          <p className=" regular-14 xl:regular-16  text-white ">
            زندگی پر از چالش است، اما همین چالش‌ها آن را جذاب می‌کنند. به دنبال
            هیجان و ماجراجویی؟ با سفر به جاهای ناشناخته روح و روانت را تازه کن و
            خاطرات فراموش‌  نشدنی بساز. 🥸
          </p>
          <Image
          src='/quote.svg'
           alt="camp-2"
           width={186}
           height={219}
           className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Travel;
