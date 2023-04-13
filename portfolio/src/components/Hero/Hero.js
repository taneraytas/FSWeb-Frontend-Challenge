import { useContext } from "react";
import me from "../../assets/me.jpeg";
import { DataContext } from "../../context/DataContext";
export default function Hero() {
  const { content } = useContext(DataContext);
  return (
    <section id="hero" className="pt-12">
      <div
        className="flex flex-col-reverse justify-center place-content-center items-center hero-container md:flex-row md:flex-wrap "
        id="hero"
      >
        <div className="w-1/2">
          <div className="flex items-center justify-center md:justify-start gap-2 text-primary  text-[1rem] dark:text-[#BAB2E7]">
            <hr className="md:w-[10%] md:border-[1px] text-primary dark:text-[#BAB2E7]" />
            <span className="text-lg sm:text-[1rem]"> Taner Tarık Aytaş</span>
          </div>
          <h1 className="text-[36px] text-title min-[768px]:text-[54px] md:text-[108px] text-center md:text-justify font-bold tracking-wider">
            {content.titleFirstLine}
            <br />
            {content.titleSecondLine}
          </h1>
          <p className="text-text text-center items-start text-[18px] pt-[40px] md:max-w-[900px] md:text-justify ">
            {content.heroParag}
          </p>
          <div className=" flex justify-center sm:justify-start gap-3  mt-[20px] sm:mt-[40px]">
            <button className="hidden sm:inline-block btn-hero dark:bg-[#E1E1FF] dark:text-[#000]">
              {content.hireMe}
            </button>
            <a
              href="https://github.com/taneraytas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-hero dark:bg-[#FFFFFF] dark:text-[#E1E1FF] dark:hover:text-primary">
                <i className="fa-brands fa-github"> </i>
                <span className="hidden  sm:inline ">GitHub</span>
              </button>
            </a>
            <a
              href="https://linkedin.com/in/taneraytas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-hero dark:bg-[#FFFFFF] dark:text-[#E1E1FF] dark:hover:text-primary dark:hover:duration-500">
                <i className="fa-brands fa-linkedin-in"> </i>
                <span className="hidden  sm:inline ">Linkedin</span>
              </button>
            </a>
          </div>
        </div>
        <div className="w-1/2 flex justify-end pl-4">
          <img
            src={me}
            alt="me"
            className="rounded-[50%]  border-2 border-title bg-primary md:rounded-[18px] shadow-lang shadow-lg duration-300  md:w-[476px] md:h-[375px] md:border-none md:bg-background  justify-end mb-4 aspect-auto"
          />
        </div>
      </div>
    </section>
  );
}
