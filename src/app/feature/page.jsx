"use client"

import items from "../components/Workdata";
import Scroll from "../components/scroll/scroll";
import { Fade } from "react-awesome-reveal";

const Page = () => {
  return (
    <div>
      <div className="lg:px-[86px]  relative px-[30px] lg:pt-[90px]  text-center">
        <div className="leading-tight font-extrabold web-title">
            <Fade triggerOnce="true" direction="up" className="">
            <h1 className=" uppercase">
            Discover <span className="text-[#5f5f5f]">OUr</span> Feature Set
          </h1>
            </Fade>
        
        </div>
        <div className="flex justify-center">
          <div className="md:w-[60%] md:py-0 py-2 paragraphs">
            <p>
              Explore the rich array of features that empower our platform to
              meet your unique needs. From essential functionalities to advanced
              capabilities.
            </p>
          </div>
        </div>
        <div className=" absolute w-[14%] lg:block hidden  rotated-left top-[15%] right-[30%] ">
            <div className="border-orange rounded-[30px] bg-white text-orange w-[100%] border-2   py-2">
              <p className="text-[16px]">Productivity</p>
            </div>
            </div>
      
      </div>

      <div className="flex py-6 lg:px-[86px] px-[30px]  justify-center">
        <img className="md:w-[70%]" src="image/laptop.webp" alt="screen"/>
      </div>

      <div className="flex lg:flex-row text-center flex-col py-6 md:py-5 justify-between md:px-[100px] px-[30px] gap-[76px]">
          <div>
            <div className="flex justify-center ">
              <img className="size-[80px]" alt="" src="icon/log2.png" />
            </div>

            <p className="md:text-[30px] text-[18px] lights">Real-Time Data</p>
            <p className="paragraphs">
              Provide users with a comprehensive dashboard powered by
              AI-generated insights.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <img className="size-[80px]" alt="image1" src="icon/log1.png" />
            </div>

            <p className="md:text-[30px] text-[18px] lights">
              Smart User Predictions
            </p>
            <p className="paragraphs">
              Develop AI models that predict the potential success of email
              campaigns for specific user segments.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <img className="size-[70px]" alt="image1" src="icon/log3.png" />
            </div>

            <p className="md:text-[30px] text-[18px] lights">
              Smart Scheduling
            </p>
            <p className="paragraphs">
              Utilize AI-driven algorithms to determine the optimal timing for
              sending emails based on recipient behavior patterns.
            </p>
          </div>
        </div>
      
      <div className="lg:px-[40px] px-[17px]">
        <div className="bg-black rounded-[2rem] lg:rounded-[5rem] text-white py-[40px] lg:py-[90px] px-[15px] lg:px-[65px]">
          <p className="web-title2 font-extra-bold pb-4 text-left uppercase">
            How it <span className="text-orange">works?</span>
          </p>

          <div className="grid  gap-2 md:grid grid-cols-1 lg:grid-cols-3">
          {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#181818] rounded-[22px] md:rounded-4xl p-4 flex flex-col justify-start"
                >
                  <div className="border-[2px] border-[#5f5f5f] mb-4  flex justify-center items-center rounded-[16px]  size-[60px]">
                  <img className=" h-[40px]  w-[35px]" alt="image" src={item.image} />
                    </div>
                 
                  <p className="md:text-[30px] text-[18px] pb-3 w-[82%] leading-tight">
                    {item.p}
                  </p>
                  <p className=" text-[#9c9a9a] paragraphs">{item.p2}</p>
                </div>
              ))}
            </div>
        </div>
      </div>

      <div>
        <div className="text-center py-[70px] lg:py-[120px]">
          <div className="px-[25px]">
            <p className="uppercase font-extrabold  web-title2">
              Discover OUr Feature Set
            </p>

            <div className="flex flex-col items-center justify-center">
              <div className="lg:w-[60%] ">
                <p className="text-[20px]  paragraphs ">
                  Explore the rich array of features that empower our platform
                  to meet your unique needs. From essential functionalities to
                  advanced capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:px-[100px] px-[30px] md:px-[40px]">
          <div className="flex md:flex-row gap-3 flex-col">
            <div className="bg-[white] card flex flex-col justify-center text-center">
              <img src="image/card1.webp" alt="" />
              <p className="md:text-[30px] text-[21px] ">Personalized Messaging</p>
              <p className="paragraphs">
                Craft compelling messages tailored to each prospect's profile,
                increasing engagement with personalized communication.
              </p>
            </div>

            <div className="bg-[#0000ff]  card flex flex-col justify-center text-center">
              <img src="image/card1.webp" alt="" />
              <p className="md:text-[30px] text-[21px] !text-white ">
                Automated Prospect Discovery
              </p>
              <p className="paragraphs !text-white ">
                Quickly identify potential clients with advanced AI algorithms,
                saving time and effort.
              </p>
            </div>
          </div>

          <div>
            <div className="flex md:flex-row py-5 gap-3 flex-col">
              <div className="bg-white card flex flex-col justify-center text-center">
                <img src="image/card1.webp" alt="" />
                <p className="md:text-[30px] text-[21px] text-black ">Smart Scheduling</p>
                <p className="paragraphs">
                  Optimize outreach timing based on prospect time zones,
                  ensuring your messages reach the right audience.
                </p>
              </div>

              <div className="bg-white text-white card flex flex-col justify-center text-center">
                <img src="image/card1.webp" alt="" />
                <p className="md:text-[30px] text-[21px] text-black ">A/B Testing</p>
                <p className="paragraphs">
                  Maximizing response rates by identifying the most effective
                  message variations.
                </p>
              </div>

              <div className="bg-white text-white card flex flex-col justify-center text-center">
                <img src="image/card1.webp" alt="" />
                <p className="md:text-[30px] text-[21px] text-black">Real-time Analytics</p>
                <p className="paragraphs">
                  Track the success of your campaigns with real-time analytics,
                  gaining valuable insights into open rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-[120px]">
        <div className="flex text-center items-center justify-center ">
          <div className="lg:w-[40%] w-[85%]  ">
            <p className=" web-title2 font-extrabold leading-tight">
              INTEGRATE <span className="text-[#5f5f5f]">YOUR </span>
              FAVORITE TOOLS
            </p>
            <p className="paragraphs ">
              Streamline your workflow and maximize efficiency by seamlessly
              integrating your favorite tools.
            </p>
          </div>
        </div>
        <Scroll/>
      </div>
    </div>
  );
};

export default Page;
