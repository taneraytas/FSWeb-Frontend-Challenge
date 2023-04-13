import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function Footer() {
  const { content } = useContext(DataContext);

  return (
    <section
      id="footer"
      className=" h-[250px] lg:h-[410px] bg-[#F9F9F9] dark:bg-[#141414]"
    >
      <div className="max-w-[1440px] m-auto">
        <div>
          <div className="flex justify-center lg:justify-start pt-[40px] pb-[20px] lg:pt-[85px] lg:pb-[60px]">
            <h2 className="text-center lg:text-left text-title text-[24px] lg:text-[42px] lg:max-w-[540px]">
              {content.footerSection.main}
            </h2>
          </div>
          <div className="flex justify-center flex-wrap flex-col md:flex-row lg:justify-start mt-[40px] md:mt-[60px]">
            <div className="flex justify-center md:justify-start basis-1/2">
              👉
              <span className="underline text-[#AF0C48] dark:text-[#BAB2E7] text-[16px] lg:text-[18px]">
                <a href="mailto:taneraytas7@gmail.com">taneraytas7@gmail.com</a>
              </span>
            </div>
            <div className="basis-1/2 justify-center flex gap-10 mt-5 md:mt-0 text-[16px] lg:text-[18px]">
              <span className="text-[#0A0A14] dark:text-[#E1E1FF]">
                Personal Blog
              </span>
              <span className="text-[#00AB6B] dark:text-[#17D18B]">GitHub</span>
              <span className="text-[#0077B5] dark:text-[#0BA6F6]">
                Linkedin
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
