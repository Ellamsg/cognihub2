"use client";

import Image from "next/image";
import items from "./components/Workdata";
import FAQ from "./components/faq";
import Pricinglist from "./components/pricing/pricinglist";
import Scroll from "./components/scroll/scroll";
import Testimonial from "./components/testimonials/testimonial";
import ScrollZoomVideo from "./components/zoom";
import AnimatedCard from "./components/Animated";

export default function Home() {
  return (
    <div>
      <div className="  ">
        <div className="relative  pt-5  text-center">
          <div className=" lg:px-[86px] relative px-[30px] leading-tight font-extrabold web-title">
            <h1 className=" uppercase">From</h1>
            <h1 className=" uppercase">
              <span className="text-[#5f5f5f]"> Finding</span> Prospects to
              Converting Them into{" "}
              <span className="text-[#5f5f5f]">Paying </span> Customers
            </h1>
            <div className=" absolute lg:block hidden w-[12%]  rotated top-[16%] left-[20%] ">
              <div className="border-orange bg-white w-[100%] border-2 rounded-[30px] px-4 py-2">
                <p className="text-[16px] font-bold text-orange">Discover AI</p>
              </div>
            </div>
            <div className=" absolute w-[14%] lg:block hidden rotated-left2 top-[56%] right-[16%] ">
              <div className="border-[blue] bg-white font-bold text-[blue] w-[100%] border-2 rounded-[30px] px-3 py-2">
                <p className="text-[16px]">Automate Outreach</p>
              </div>
            </div>
          </div>

          <div className="flex lg:px-[86px] px-[30px] justify-center">
            <div className="md:w-[60%] md:py-0 py-2 paragraphs">
              <p>
                Empower your business with OutreachAI, the all-in-one solution
                handling prospect discovery to customer conversion. Say goodbye
                to outreach complexities; let AI streamline your journey to
                success.
              </p>
            </div>
          </div>

          <div className=" flex  py-6 px-[30px] md:px-0 justify-center">
            <div className=" lg:block hidden">
              <ScrollZoomVideo
                videoSrc="/video/cognihub.mp4"
                posterSrc="/images/mock13.jpg"
              />
            </div>
            <video
              className="lg:rounded-[3rem]  lg:hidden rounded-[1.4rem]"
              src="video/cognihub.mp4"
              poster="/images/mock13.jpg"
              autoPlay
              loop
              muted
              x5-playsinline=""
              playsinline=""
            />
          
          </div>
          

          <img
            className="w-[17%] rotated-left absolute lg:block hidden  md:bottom-[30%]"
            src="image/slant.webp"
            alt=""
          />

          <img
            className="absolute rotated w-[19%] lg:block hidden   right-5 md:bottom-[30%]"
            src="image/slant2.webp"
            alt=""
          />
        </div>

       

        <div className="flex lg:pb-[130px] lg:flex-row text-center flex-col py-6 md:py-5 justify-between md:px-[100px] px-[30px] gap-[76px]">
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
                    <img
                      className=" h-[40px]  w-[35px]"
                      alt="image"
                      src={item.image}
                    />
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
                Discover <span className="text-[#5f5f5f]">OUr </span>Feature Set
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
                <p className="md:text-[30px] text-[21px] ">
                  Personalized Messaging
                </p>
                <p className="paragraphs">
                  Craft compelling messages tailored to each prospect's profile,
                  increasing engagement with personalized communication.
                </p>
              </div>

              <div className="bg-[#0000ff]  card flex flex-col justify-center text-center">
                <img src="image/card2.webp" alt="" />
                <p className="md:text-[30px] text-[21px] !text-white ">
                  Automated Prospect Discovery
                </p>
                <p className="paragraphs !text-white ">
                  Quickly identify potential clients with advanced AI
                  algorithms, saving time and effort.
                </p>
              </div>
            </div>

            <div className="w-[100%]">
              <div className="flex md:flex-row py-5 gap-3 flex-col">
                <div className="bg-white lg:w-[50%] card flex flex-col justify-center text-center">
                  <img className=" " src="image/card3.webp" alt="" />

                  <p className="md:text-[30px] text-[21px] text-black ">
                    Smart Scheduling
                  </p>
                  <p className="paragraphs">
                    Optimize outreach timing based on prospect time zones,
                    ensuring your messages reach the right audience.
                  </p>
                </div>

                <div className="bg-white lg:w-[50%] text-white card flex flex-col justify-center text-center">
                  <img src="image/card4.webp" alt="" />
                  <p className="md:text-[30px] text-[21px] text-black ">
                    A/B Testing
                  </p>
                  <p className="paragraphs">
                    Maximizing response rates by identifying the most effective
                    message variations.
                  </p>
                </div>

                <div className="bg-white lg:w-[50%] text-white card flex flex-col justify-center text-center">
                  <img src="image/card5.webp" alt="" />
                  <p className="md:text-[30px] text-[21px] text-black">
                    Real-time Analytics
                  </p>
                  <p className="paragraphs">
                    Track the success of your campaigns with real-time
                    analytics, gaining valuable insights into open rates.
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
          <Scroll />
        </div>

        <div className="lg:px-[40px] px-[10px]">
          <div className="bg-black flex md:flex-row flex-col rounded-[2rem] lg:rounded-[5rem] text-white py-[40px] lg:py-[90px] px-[15px] lg:px-[65px]">
            <div className="lg:w-[50%]">
              <div className="lg:w-[70%] ">
                <p className="web-title2 font-extrabold uppercase leading-tight">
                  frequently <span className="text-orange">asked</span>{" "}
                  questions
                </p>
                <p className="paragraphs2 md:pt-0 pt-3">
                  Explore our FAQ section to find answers to commonly asked
                  questions about our platform.
                </p>
              </div>
            </div>
            <div className="lg:w-[50%] md:py-0 py-4">
              <FAQ />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex  pb-[70px] pt-[120px] text-center items-center justify-center ">
          <div className="lg:w-[60%] w-[85%]  ">
            <p className="web-title2 uppercase font-extrabold ">
              Flexible Pricing <span className="text-[#5f5f5f] ">Options</span>
            </p>
            <p className="paragraphs">
              Navigate through our pricing section to discover the ideal
              subscription plan tailored to your needs.
            </p>
          </div>
        </div>
        <div className="px-[25px]">
          <Pricinglist />
        </div>
      </div>

      <Testimonial />
    </div>
  );
}
