import React from "react";
import { navLink } from "../constant";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="wrapper text-base font-semibold text-slate-600 mt-2xl">
      <ul className="nav cluster md:justify-center max-sm:gap-[8px] list-none">
        {navLink.map((item) => (
          <li key={item.label} className="border-animated">
            <NavLink
              className="flex gap-[4px] p-[10px] no-underline items-center dark:text-slate-300"
              to={item.href}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d={item.path} fill="currentColor" />
              </svg>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
