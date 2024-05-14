import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
const Header = () => {
  return (
    <>
      <header className="text-2xl flex items-center py-4 w-full justify-between">
        <section className="flex items-center text-base">
          <div className="w-20 h-auto">
            <img src="/HSI_LOGO.png" alt="" className="h-auto w-full" />
          </div>
          <h1 className="uppercase">
            highly succeed <b className="text-[#ad8e12]">engage </b>
          </h1>
        </section>
        <section className=" flex gap-2 md:gap-4 lg:gap-7 cursor-pointer ">
          <a href="https://www.facebook.com/Highly.Succeed.Inc" target="_blank">
            <IoLogoFacebook />
          </a>
          <a href="https://twitter.com/highlysucceed?lang=en" target="_blank">
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/highlysucceed/?hl=en"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/highlysucceed?originalSubdomain=ph"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        </section>
      </header>
    </>
  );
};

export default Header;
