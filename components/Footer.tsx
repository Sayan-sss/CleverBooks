"use client";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          You can grow <span className="text-purple">faster</span> than you
          think!
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Plan with CleverBooks to fulfil your demand today, and dreams
          tomorrow. We bring the methods and technologies of large global
          companies to help brands of all sizes scale.
        </p>
        <a href="sales@getcrest.ai">
          <MagicButton
            title="Get started with CleverBooks"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-col flex-col justify-center items-center text-center">
        <p className="md:text-base text-sm md:font-normal font-light ">
          Registered Office: 1507, Incubex, 11th cross road, 19th Main Road,
          Bengaluru, India. 560102
        </p>
        <p className="md:text-base text-sm md:font-normal font-light mt-5">
          Corporate Office: 291, All Time Space, 4th Floor, 15th A Cross, Sector
          - 6, HSR Layout, Bengaluru, India. 560102
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-5">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              onClick={() => window.open(info.link, "_blank")}
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
