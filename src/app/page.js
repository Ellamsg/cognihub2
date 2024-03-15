import Image from "next/image";
import items from "./components/Workdata";
import Pricing from "./components/pricing/pricing";
export default function Home() {
  return (
    <div>

 
    <main className=" ">
      <div className="lg:px-[86px] text-center">
        <div className="leading-tight font-extrabold text-[6.8rem]">
          <h1 className=" uppercase">From</h1>
          <h1 className=" uppercase">
            <span> Finding</span> Prospects to Converting Them into{" "}
            <span>Paying </span> Customers
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="w-[60%] text-[20px]">
            <p>
              Empower your business with OutreachAI, the all-in-one solution
              handling prospect discovery to customer conversion. Say goodbye to
              outreach complexities; let AI streamline your journey to success.
            </p>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row text-center flex-col py-5 justify-between md:px-[100px] gap-[76px]">
        <div>
          <img alt="image1" src="" />
          <p className="text-[30px] lights">Real-Time Data</p>
          <p className="text-[18px]">
            Provide users with a comprehensive dashboard powered by AI-generated
            insights.
          </p>
        </div>
        <div>
          <img alt="image1" src="" />
          <p className="text-[30px] lights">Smart User Predictions</p>
          <p className="text-[18px]">
            Develop AI models that predict the potential success of email
            campaigns for specific user segments.
          </p>
        </div>
        <div>
          <img alt="image1" src="" />
          <p className="text-[30px] lights">Smart Scheduling</p>
          <p className="text-[18px]">
            Utilize AI-driven algorithms to determine the optimal timing for
            sending emails based on recipient behavior patterns.
          </p>
        </div>
      </div>

      <div className="lg:px-[40px]">
        <div className="bg-black rounded-[5rem] text-white lg:py-[90px] lg:px-[65px]">
          <p className="text-[3.8rem] font-extra-bold pb-4 text-left uppercase">
            How it <span className="text-orange">works?</span>
          </p>

          <div className="grid  gap-2 md:grid grid-cols-1 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#181818] rounded-4xl p-4 flex flex-col justify-start"
              >
                <img className="pb-4" alt="image" src={item.image} />
                <p className="text-[30px] pb-3 w-[82%] leading-tight">
                  {item.p}
                </p>
                <p className=" text-[#9c9a9a] text-[17px]">{item.p2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="text-center  py-[120px]">
          <div className="">
            <p className="uppercase font-extrabold  text-[3.5rem]">
              Discover OUr Feature Set
            </p>

            <div className="flex flex-col items-center justify-center">
              <div className="w-[60%] ">
                <p className="text-[20px]  ">
                  Explore the rich array of features that empower our platform
                  to meet your unique needs. From essential functionalities to
                  advanced capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:px-[100px] px-[20px] md:px-[40px]">
          <div className="flex md:flex-row gap-3 flex-col">
            <div className="bg-[white] card flex flex-col justify-center text-center">
              <img src="image/card1.webp" alt="" />
              <p className="text-[30px] ">Personalized Messaging</p>
              <p className="paragraphs">
                Craft compelling messages tailored to each prospect's profile,
                increasing engagement with personalized communication.
              </p>
            </div>

            <div className="bg-[#0000ff]  card flex flex-col justify-center text-center">
              <img src="image/card1.webp" alt="" />
              <p className="text-[30px] !text-white ">
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
                <p className="text-[30px] text-black ">Smart Scheduling</p>
                <p className="paragraphs">
                  Optimize outreach timing based on prospect time zones,
                  ensuring your messages reach the right audience.
                </p>
              </div>

              <div className="bg-white text-white card flex flex-col justify-center text-center">
                <img src="image/card1.webp" alt="" />
                <p className="text-[30px] text-black ">A/B Testing</p>
                <p className="paragraphs">
                  Maximizing response rates by identifying the most effective
                  message variations.
                </p>
              </div>

              <div className="bg-white text-white card flex flex-col justify-center text-center">
                <img src="image/card1.webp" alt="" />
                <p className="text-[30px] text-black">Real-time Analytics</p>
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
          <div className="lg:w-[40%]  ">
            <p className="text-[3.5rem] font-extrabold leading-tight">
              INTEGRATE <span className="text-[#5f5f5f]">YOUR </span>
              FAVORITE TOOLS
            </p>
            <p className="paragraphs">
              Streamline your workflow and maximize efficiency by seamlessly
              integrating your favorite tools.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:px-[40px]">
        <div className="bg-black rounded-[5rem] text-white lg:py-[90px] lg:px-[65px]">
          <div>
            <p className="text-[3.5rem] font-extrabold uppercase leading-tight">
              frequently <span className="text-orange">asked</span> questions
            </p>
            <p>
              Explore our FAQ section to find answers to commonly asked
              questions about our platform.
            </p>
          </div>
        </div>
      </div>
    </main>

    <div>
    <div className="flex pb-[70px] pt-[120px] text-center items-center justify-center ">
        <div className="lg:w-[60%]  ">
          <p className="text-[3.5rem] uppercase font-extrabold ">
            Flexible Pricing Options
          </p>
          <p className="paragraphs">
            Navigate through our pricing section to discover the ideal
            subscription plan tailored to your needs.
          </p>
        </div>
      </div>
      <Pricing/>
    </div>
    </div>
  );
}
