
"use client"
import Faqpage from "../components/faqpage";
import Pricinglist from "../components/pricing/pricinglist";
import { Fade } from "react-awesome-reveal";

const Page = () => {
  return (
    <div>
      <div className="lg:px-[86px] px-[30px] pt-5  text-center">
        <Fade triggerOnce="true" direction="up">
        <div className="leading-tight uppercase font-extrabold web-title">

Flexible Pricing <span className="text-[#5f5f5f]">Options</span>
</div>
        </Fade>
       
        <div className="flex justify-center">
          <div className="md:w-[60%] md:py-0 py-2 paragraphs">
            <p className="paragraphs">
              Navigate through our pricing section to discover the ideal
              subscription plan tailored to your needs.
            </p>
          </div>
        </div>
      </div>

      <div className="px-[25px] lg:py-[80px]">
        <Pricinglist />
      </div>




      <div className="lg:px-[40px] px-[10px]">
        <div className=" flex md:flex-row flex-col rounded-[2rem] lg:rounded-[5rem] text-black py-[40px] lg:py-[90px] px-[15px] lg:px-[65px]">
          <div className="lg:w-[50%]">
            <div className="lg:w-[70%] ">
            <p className="web-title2  font-extrabold uppercase leading-tight">
              frequently <span className="text-orange">asked</span> questions
            </p>
            <p className="paragraphs md:pt-0 pt-3">
            Empower your business with OutreachAI, the all-in-one 
            solution handling prospect discovery to customer conversion. Say goodbye to outreach complexities.
            </p>
            </div>
           
          </div>
          <div className="lg:w-[50%] md:py-0 py-4">
          <Faqpage/>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Page;
