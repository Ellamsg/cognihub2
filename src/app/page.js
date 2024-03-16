import Image from "next/image";
import items from "./components/Workdata";
import FAQ from "./components/faq";
import Pricinglist from "./components/pricing/pricinglist";
export default function Home() {
  return (
    <div>

 
    <main className="  ">
      <div className="lg:px-[86px] px-[30px] pt-5  text-center">
        <div className="leading-tight font-extrabold web-title">
          <h1 className=" uppercase">From</h1>
          <h1 className=" uppercase">
            <span> Finding</span> Prospects to Converting Them into{" "}
            <span>Paying </span> Customers
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="md:w-[60%] md:py-0 py-2 paragraphs">
            <p>
              Empower your business with OutreachAI, the all-in-one solution
              handling prospect discovery to customer conversion. Say goodbye to
              outreach complexities; let AI streamline your journey to success.
            </p>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row text-center flex-col py-6 md:py-5 justify-between md:px-[100px] px-[30px] gap-[76px]">
        <div>
          <img alt="image1" src="" />
          <p className="md:text-[30px] text-[18px] lights">Real-Time Data</p>
          <p className="paragraphs">
            Provide users with a comprehensive dashboard powered by AI-generated
            insights.
          </p>
        </div>
        <div>
          <img alt="image1" src="" />
          <p className="md:text-[30px] text-[18px] lights">Smart User Predictions</p>
          <p className="paragraphs">
            Develop AI models that predict the potential success of email
            campaigns for specific user segments.
          </p>
        </div>
        <div>
          <img alt="image1" src="" />
          <p className="md:text-[30px] text-[18px] lights">Smart Scheduling</p>
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
                <img className="pb-4" alt="image" src={item.image} />
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
      </div>

      <div className="lg:px-[40px] px-[10px]">
        <div className="bg-black flex md:flex-row flex-col rounded-[2rem] lg:rounded-[5rem] text-white py-[40px] lg:py-[90px] px-[15px] lg:px-[65px]">
          <div className="lg:w-[50%]">
            <div className="lg:w-[70%] ">
            <p className="web-title2 font-extrabold uppercase leading-tight">
              frequently <span className="text-orange">asked</span> questions
            </p>
            <p className="paragraphs2 md:pt-0 pt-3">
              Explore our FAQ section to find answers to commonly asked
              questions about our platform.
            </p>
            </div>
           
          </div>
          <div className="lg:w-[50%] md:py-0 py-4">
          <FAQ/>
          </div>
         
        </div>
      </div>
    </main>

    <div>
    <div className="flex  pb-[70px] pt-[120px] text-center items-center justify-center ">
        <div className="lg:w-[60%] w-[85%]  ">
          <p className="web-title2 uppercase font-extrabold ">
            Flexible Pricing Options
          </p>
          <p className="paragraphs">
            Navigate through our pricing section to discover the ideal
            subscription plan tailored to your needs.
          </p>
        </div>
      </div>
      <div className="px-[25px]">

     
      <Pricinglist/>
      </div>
    </div>
    </div>
  );
}
