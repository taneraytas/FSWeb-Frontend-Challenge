import React, { useContext } from "react";
import { projects } from "../../data/projects";
import { DataContext } from "../../context/DataContext";
export default function Projects() {
  const { contentProjects } = useContext(DataContext);
  return (
    <section id="projects" className="mb-36">
      <h1 className="text-title font-semibold mb-[10px] md:my-[40px] text-[36px] text-center md:text-[48px] md:text-left">
        Projeler
      </h1>
      <div className="flex flex-wrap gap-2 justify-center md:justify-between">
        {projects.map((item, indx) => {
          return (
            <div
              className="max-w-[300px] basis-full sm:basis-[50%] md:basis-[30^]"
              key={indx}
            >
              <img src={item.img} className="h-[180px] w-[300px]" />
              <h3 className="text-primary text-[30px] my-5">
                {item[contentProjects].name}
              </h3>
              <p className="text-text text-[14px]">
                {item[contentProjects].info}
              </p>
              <div className="flex gap-[6px] text-primary border-primary">
                {item["tech"].map((name, index) => {
                  return (
                    <button
                      disabled
                      key={index}
                      className="px-2 py-1 border-solid border-[1px] rounded-[4px] dark:background-[#383838] my-5 "
                    >
                      {name}
                    </button>
                  );
                })}
              </div>
              <div className="flex justify-between text-primary dark:text-text underline">
                <a href={item.links.github} target="_blank">
                  GitHub{" "}
                </a>
                <a href={item.links.live} target="_blank">
                  Wiev Site{" "}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
