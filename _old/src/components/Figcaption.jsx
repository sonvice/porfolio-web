
import React, { useState } from "react";

const Figcaption = ({ description }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <figcaption className="text-size-0 text-slate-600 dark:text-slate-400 mt-xs">
      {toggle ? description.substring(0, 60)+'...' : description} 
      <button
        onClick={() => setToggle(!toggle)}
        className="btn-link dark:text-slate-400"
      >
        {toggle ? 'Ver más' : 'Ver menos'}
      </button>
    </figcaption>
  );
};

export default Figcaption;
