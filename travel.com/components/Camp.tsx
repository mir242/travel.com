import React from "react";
import { TravelSite } from "./Travel";

const Camp = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-screen-xl mx-auto h-full px-4">
        <h1 className="text-center text-3xl font-bold mb-8">
          کمپ‌های جذاب سفر
        </h1>
        <div className="flex flex-col gap-8 ">
          {campData.map((camp, index) => (
            <div key={index} className="h-[400px] relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-opacity-50"></div>
              <TravelSite
                backGroundImage={camp.backGroundImage}
                title={camp.title}
                subtitle={camp.subtitle}
                peoplejoined={camp.peoplejoined}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-75 rounded p-4">
                <p className="text-sm text-gray-700">
                  {camp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const campData = [
  {
    backGroundImage: "bg-bg-img-6",
    title: "Protocol Tornado Camp",
    subtitle: "کمپ 7 روزه کویر یزد",
    peoplejoined: "+120 نفر",
    description: "کشف شگفتی‌های کویر یزد در یک کمپ ۷ روزه پر از ماجراجویی و هیجان."
  },
  {
    backGroundImage: "bg-bg-img-7",
    title: "Protocol Tornado Camp",
    subtitle: "اکو کمپ دورنا -مشگین",
    peoplejoined: "+150 نفر",
    description: "لذت بردن از مناظر زیبا و طبیعت بکر مشگین در اکو کمپ دورنا."
  }
];

export default Camp;
