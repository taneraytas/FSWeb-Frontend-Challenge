import { DataContext } from "../../context/DataContext";
import { useContext } from "react";

export default function Footer() {
  const { content } = useContext(DataContext);

  return (
    <section
      id="footer"
      className="w-full h-[410px] bg-[#F9F9F9] dark:bg-[#141414]"
    >
      <div className="max-w-[1440px]">
        <div className="md:text-[42px] max-w-[540px] md:mt-[85px]">
          {content.footerSection.main}
        </div>
      </div>
    </section>
  );
}
