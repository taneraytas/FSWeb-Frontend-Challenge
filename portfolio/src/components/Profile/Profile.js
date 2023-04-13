import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function Profile() {
  const { content } = useContext(DataContext);
  return (
    <div className="mt-[42px]" id="profile">
      <h1 className="text-title font-semibold mb-[10px] text-[36px] text-center md:text-[48px] md:text-left ">
        {content.profile}
      </h1>
      <div
        className="profile-container flex text-primary flex-wrap  justify-center md:justify-start "
        id="profile-info"
      >
        <div className="basis-full md:basis-1/2 tracking-[1%]">
          <span className="text-[30px] flex justify-center md:justify-start">
            {content.profile}
          </span>
          <div
            id="infos"
            className="grid grid-cols-2 mt-[21px] text-[#000] dark:text-text"
          >
            <div className=" grid grid-rows-5 font-semibold place-content-center md:place-content-start">
              <p>{content.aboutSection.bdaytitle}</p>
              <p>{content.aboutSection.cityTitle}</p>
              <p>{content.aboutSection.educationTitle}</p>
              <p>&nbsp;</p>
              <p>{content.aboutSection.roleTitle}</p>
            </div>
            <div className=" grid grid-rows-5 md:basis-1/2 place-content-center md:place-content-start">
              <p>{content.aboutSection.bday}</p>
              <p>{content.aboutSection.city}</p>
              <p>{content.aboutSection.education.uni}</p>
              <p>
                {content.aboutSection.education.type} -
                {content.aboutSection.education.year}
              </p>
              <p>{content.aboutSection.role}</p>
            </div>
          </div>
        </div>
        <div className="basis-full md:basis-1/2 tracking-[1%]">
          <span className="text-[30px] flex justify-center md:justify-start">
            {content.aboutSection.section}
          </span>

          <div className="text-text space-y-4">
            <p>{content.aboutSection.about_me.par1}</p>
            <p>{content.aboutSection.about_me.par2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
