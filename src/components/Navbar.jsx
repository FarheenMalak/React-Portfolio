import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-black text-[18px] font-bold cursor-pointer flex">
            &nbsp;
            <span className="sm:block hidden">Portfolio.</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-black" : "text-gray-600"
              } hover:text-black text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain text-black"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      {/* Mobile Fullscreen Navigation Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex items-center justify-end transition-all duration-300 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-white w-full h-screen p-6 flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-black text-3xl"
            onClick={() => setToggle(false)}
          >
            ✕
          </button>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-6 text-black text-lg">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="cursor-pointer hover:border-b-2 hover:border-black pb-1"
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
