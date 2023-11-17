import React from "react";
import { RiLinkedinFill, RiInstagramLine, RiGithubFill } from "react-icons/ri";

const Footer = () => {
  let date = new Date();
  return (
    <div className="wrapper">
      <div className="mt-3xl">
        <div className="text-center text-base dark:text-slate-400">
          <a className="p-[8px]" href="https://github.com/sonvice">
            <RiGithubFill />
          </a>
          <a className="p-[8px]" href="https://www.linkedin.com/in/wilsonmunozc/">
            <RiLinkedinFill />
          </a>
          <a className="p-[8px]" href="https://www.instagram.com/wilsonvmc/">
            <RiInstagramLine />
          </a>
        </div>
        <div className="text-size-0 text-center dark:text-slate-400">
          Wilson © {date.getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
