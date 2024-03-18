
"use client"
import Faqpage from "../components/faqpage";
import { Fade } from "react-awesome-reveal";
const Page = () => {
    return ( 


        <div className="pt-5">
             <div className="lg:px-[86px] px-[30px] pt-5  text-center">
              <Fade triggerOnce="true" direction="up">
              <div className="leading-tight uppercase font-extrabold web-title">
        frequently <span className="text-[#5f5f5f]">asked</span> questions
        </div>
              </Fade>
      
        <div className="flex justify-center">
          <div className="md:w-[60%] md:py-0 py-2 paragraphs">
            <p className="paragraphs">
              Empower your business with OutreachAI, the all-in-one solution
              handling prospect discovery to customer conversion. Say goodbye to
              outreach complexities; let AI streamline your journey to success.
            </p>
          </div>
        </div>
      </div>

      <div className=" flex lg:px-[100px] px-[25px] md:py-0 py-5 lg:pt-[100px] justify-center">
        <div className="lg:w-[68%]">
        
          <Faqpage/>
        
        
        </div>
     
      </div>

  

        </div>
     );
}
 
export default Page;