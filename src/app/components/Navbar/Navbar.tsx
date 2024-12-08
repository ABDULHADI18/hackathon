import React from "react";
import { LuPhone } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-[full] h-[46px] bg-[#252B42] flex justify-between items-center pr-[24px] pl-[24px]">
      <div className="w-[426px] h-[46px] gap-[5px] flex text-[#FFFFFF] items-center ml-5">
        <LuPhone />
        <h6 className="font-[700] text-[14px] gap-[0.5] leading-[24px]">
          (225) 555-0118
        </h6>

        <div className="ml-5 items-center flex gap-[3px]">
          <CiMail />
          <h6 className="font-[700] text-[14px] gap-[0.5] leading-[24px]">
            michelle.rivera@example.com
          </h6>
        </div>
      </div>

      <div className="flex ml-5 items-center gap-[3]">
        <h6 className="font-[700] text-[#FFFFFF] text-[14px] gap-[2px] leading-[24px] ">
          Follow Us and get a chance to win 80% off
        </h6>
      </div>

      <div className="flex">
        <h6 className="w-[85px] h-[24px] font-[700] text-[#FFFFFF] text-[14px] gap-[0.5] leading-[24px] space-x-0.5">
          Follow Us :
        </h6>
        <div className="flex items-center gap-3 text-[#FFFFFF]">
          <FaInstagram />
          <FaYoutube />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
