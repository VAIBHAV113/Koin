import React from "react";
import Dummy from "./KoinBXLogoHead.svg";
import Image from "next/image";
import Menu from "./Menu-New.svg";
import Download from "./DownloadHeader.svg";
import Profile from "./Profile.svg";

const Header = () => {
  return (
    <div className="flex flex-row justify-between w-full pl-8 pr-8 m-auto mt-2">
      <div className="flex flex-row">
        <div>
          <Image src={Dummy} alt="logo" height={120} width={120} />
        </div>
        <div>
          <Image
            style={{ color: "black" }}
            src={Menu}
            alt="menu"
            height={20}
            width={20}
            className="ml-5 mt-3 mr-7"
          />
        </div>
        <span className="ml-5 mt-3 mr-3 text-sm font-medium ">Markets</span>
        <span className="ml-5 mt-3 mr-3 text-sm font-medium">Fees</span>
        <span className="ml-5 mt-3 mr-3 text-sm font-medium ">Trade</span>
        <div className="ml-3 mt-3 mr-3 bg-zinc-400 w-1 h-5"></div>
        <span className="ml-4 mt-3 mr-3 text-sm font-medium ">
          List Your Crypto
        </span>
      </div>
      <div className="flex flex-row">
        <div className="ml-3 mt-3 mr-5">
          <button className="bg-green-600 text-xs p-1.5 rounded-3xl w-24 text-white text-sm border-none">
            {" "}
            Deposit
          </button>
        </div>
        <div>
          <Image
            className="ml-3 mt-3 mr-5"
            height={25}
            width={25}
            src={Profile}
            alt="profile"
          />
        </div>
        <div>
          <Image
            className="ml-3 mt-4 mr-5"
            height={15}
            width={15}
            src={Download}
            alt="download"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
