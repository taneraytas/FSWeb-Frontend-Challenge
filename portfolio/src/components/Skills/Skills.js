import React, { useContext } from "react";
import { skills } from "../../data/skills";
import { DataContext } from "../../context/DataContext";

export default function Skills() {
  const { content } = useContext(DataContext);
  return (
    <section
      id="skills"
      className="mt-[30px] md:mt-[125px] mb-[10px] md:mb-[42px]"
    >
      <h1 className="text-title font-semibold mb-[10px] text-[36px] text-center md:text-[48px] md:text-left">
        {content.skills}
      </h1>
      <div className="flex justify-evenly sm:justify-between md:justify-between flex-wrap text-primary">
        {skills.map((item, index) => {
          return (
            <div className=" flex flex-wrap md:basis-[30%] mb-3 " key={index}>
              <div className="flex justify-center md:justify-start basis-[100%] md:basis-[50%] xl:basis-[33.333%]">
                <h2
                  className="text-[30px] flex justify-center items-center"
                  key={item.lang}
                >
                  <span className="hidden sm:inline mr-2">{item.lang}</span>
                  <span className="text-[60px] sm:text-[45px]">
                    {item.icon}
                  </span>
                </h2>
              </div>
              <div className="">
                <p className="hidden md:inline-block text-text">
                  {item.explanation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
