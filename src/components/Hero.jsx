import React from "react";
import { imgCode } from "../assets";
const Hero = () => {
  return (
    <div className="hero wrapper">
      <div className="hero__content flex justify-center flex-col items-start">
        <div className="mt-3xl">
          <img id="heroImg" className="m-auto" src={imgCode} alt="Code Hero" />
        </div>
        <div className="mt-2xl flow max-w-2xl">
          <h1 className="text-size-3 dark:text-slate-300">Hola!👋, Soy Wilson</h1>
          <p className="text-base max-w-lg text-slate-600 dark:text-slate-400">
            Soy front-end developer, designer y paso más tiempo codificando con
            HTML, CSS3, JavaScrip, React y TailwindCSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
