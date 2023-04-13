import React from "react";

export default function NavBar() {
  return (
    <div className=" flex sm:grid sm:grid-cols-2 text-text mt-7 ">
      <div className=" hidden bg-primary rounded-[50%] w-[62px] h-[62px] relative flex justify-center items-center sm:inline-flex">
        <span className="text-[#fff] -rotate-45 text-xl">TTA</span>
      </div>

      <nav className="flex flex-col m-auto  items-center sm:place-items-end sm:m-0 sm:flex-row sm:justify-end sm:gap-20  dark:text-title">
        <a href="#skills" className="atag">
          Skills
        </a>
        <a href="#projects" className="atag">
          Projects
        </a>
        <a className="hidden md:inline-block px-8 py-3 border-[1px] rounded-[6px] border-primary text-primary text-center dark:bg-[#fff]">
          Hire Me
        </a>
      </nav>
    </div>
  );
}
