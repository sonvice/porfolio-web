import React, { useEffect, useState } from "react";
import { logo,imgCodeDark,imgCode } from "../assets";
import { iconMoon, iconSunny } from "../assets/icons";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const toggleTheme = ()=>{
      if(theme == 'dark'){
          
        return setTheme('light')
      }

     return setTheme('dark')
  
  }

  useEffect(()=>{
    if(theme == 'dark'){
      document.querySelector('html').classList.add('dark')
      document.querySelector('#heroImg').setAttribute('src', imgCodeDark)
      
      
    }else{
      document.querySelector('html').classList.remove('dark')
      document.querySelector('#heroImg').setAttribute('src', imgCode)
    }
  
  },[theme])

  return (
    <header>
      <div className="flex justify-between px-lg items-center">
        <div>
          <a href="/">
            <img width={40} height={40} src={logo} alt="Logo" />
          </a>
        </div>
        <button onClick={toggleTheme} className="bg-transparent border-0 cursor-pointer">
          <img src={theme == 'dark'? iconMoon:iconSunny} alt="theme" />
        </button>
      </div>
    </header>
  );
};

export default Header;
