import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function NavBar() {
  const { content } = useContext(DataContext);
  return (
    <div className=" flex sm:grid sm:grid-cols-2 text-text mt-7 ">
      <div className=" hidden bg-primary rounded-[50%] w-[62px] h-[62px] relative flex justify-center items-center sm:inline-flex">
        <span className="text-[#fff] -rotate-45 text-xl">TTA</span>
      </div>

      <nav className="flex flex-col m-auto  items-center sm:place-items-end sm:m-0 sm:flex-row sm:justify-end sm:gap-20  dark:text-title">
        <a href="#skills" className="atag">
          {content.skills}
        </a>
        <a href="#projects" className="atag">
          {content.projects}
        </a>
        <a className="hidden md:inline-block px-8 py-3 border-[1px] rounded-[6px] border-primary text-primary text-center dark:bg-[#fff]">
          <a href="#footer">{content.hireMe}</a>
        </a>
      </nav>
    </div>
  );
}
