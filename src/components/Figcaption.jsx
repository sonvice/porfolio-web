
import React, { useState } from "react";

const Figcaption = ({ description }) => {
  const [toggle, setToggle] = useState(true);
   
  const showInfo = (e)=>{
    e.preventDefault()
    setToggle(!toggle)
  }

  return (
    <figcaption className="size--1 my-space-xs">
      {toggle ? description.substring(0, 80)+'...' : description} 
      <a href="#"
      className="fw-semibold px-space-0"
        onClick={(e) => showInfo(e)}
        
      >
        {toggle ? 'Ver más' : ' Ver menos'}
      </a>
    </figcaption>
  );
};

export default Figcaption;
