import { IconMenu, IconMenu2 } from "@tabler/icons-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const scrollWithOffset = (el) =>
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.pageYOffset - 100,
    behavior: "smooth",
  });

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="max-w-4xl w-full fixed z-50 h-14 flex flex-row justify-between items-center border-b border-[#212121] p-4 rounded-md bg-[#202020] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90">
      <h1 className="text-lg font-semibold">
        <a href="/" className="text-[#FFF5EE] hover:text-[#FFF5EE]">
          Raditya Bagaswara
        </a>
      </h1>
      <div className="block lg:hidden">
        <button
          className="btn"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <IconMenu2 />
        </button>
      </div>
      <div
        className={`${
          isOpen
            ? "invisible opacity-0 lg:visible lg:opacity-100 flex flex-col lg:flex-row -translate-y-10 lg:-translate-y-0"
            : "visible opacity-100  lg:flex flex-col lg:flex-row translate-y-0"
        } transition-all absolute lg:relative bg-[#202020] w-full lg:w-min top-14 pb-5 lg:pb-0  lg:top-0 flex flex-col lg:flex-row gap-3 lg:bg-transparent`}
      >
        {/* check if the page is at / */}
        <a
          href="/"
          className="text-[#FFF5EE] hover:text-indigo-100 active:text-indigo-300 transition-all"
        >
          Home
        </a>

        <a
          href="https://drive.google.com/file/d/1qNia6FTHhVvXVnTe2SAVIJl0Z9PjL35p/view?usp=sharing"
          target="_blank"
          className="text-[#FFF5EE] hover:text-indigo-100 active:text-indigo-300 transition-all"
        >
          Resume
        </a>
        <HashLink
          scroll={scrollWithOffset}
          smooth
          to="/#about"
          className="text-[#FFF5EE] hover:text-indigo-100 active:text-indigo-300 transition-all"
        >
          About
        </HashLink>
        <HashLink
          scroll={scrollWithOffset}
          smooth
          to="/#projects"
          className="text-[#FFF5EE] hover:text-indigo-100 active:text-indigo-300 transition-all"
        >
          Works
        </HashLink>
        <HashLink
          scroll={scrollWithOffset}
          smooth
          to="/#contact"
          className="text-[#FFF5EE] hover:text-indigo-100 active:text-indigo-300 transition-all"
        >
          Contact
        </HashLink>
      </div>
    </nav>
  );
};

export default Navbar;
