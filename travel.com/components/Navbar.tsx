import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <div className="relative flex flex-col items-center">
        <Image
          src="/logo1.png"
          alt=""
          width={94}
          height={39}
          className="rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-12"
        />
        <span className=" opacity-20 mt-2 font">travel.com</span>
      </div>
      <ul className="hidden h-full  gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <a
            href={link.href}
            key={link.key}
            className="regular-18 text-gray-50  flexCenter pb-1 transition-all hover:font-bold"
          >
            {link.label}
          </a>
        ))}
  </ul>

<div className=" lg:flexCenter hidden">
    <Button 
          type="button"
          icon="/user.png"
          title="ورود"
          varient="btn_login_blue"
        />

</div>
    <Image src="/menuicon.jpg"
    alt="menu"
    width={32} height={32}
     className=" rounded-full inline-block cursor-pointer lg:hidden"
    />
    
    </nav>
  );
};

export default Navbar;
