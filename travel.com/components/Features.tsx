import { FEATURES } from "@/constants";
import Image from "next/image";
import { title } from "process";
import React from "react";

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.jpg"
            alt="phone"
            width={1440}
            height={1000}
            className="feature-phone rounded-md w-full"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.jpg"
              alt="camp"
              width={80}
              height={50}
              className="absolute right-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64"> ویژگی های ما</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:m-20 lg:gap-20">
            {FEATURES.map((features) => (
              <FeatureItem
                desciption={features.description}
                key={features.title}
                title={features.title}
                icon={features.icon}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  icon: string;
  desciption: string;
  title: string;
};

const FeatureItem = ({ icon, desciption, title }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-blue-200">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 ">{title}</h2>
      <p className="regular-16 mt-5  text-gray-700 lg:mt-[30px] lg:bg-none">
        {desciption}
      </p>
    </li>
  );
};

export default Features;