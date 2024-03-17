
"use client"
import { useEffect } from "react";

const Testimonial = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });

        // Add event listeners to pause animation on hover
        scroller.addEventListener("mouseenter", () => {
          scrollerInner.style.animationPlayState = "paused";
        });

        scroller.addEventListener("mouseleave", () => {
          scrollerInner.style.animationPlayState = "running";
        });
      });
    }
  }, []);

  return (
    <div>
      <div className=" pt-[120px] pb-[70px]">
        <div className="flex text-center items-center justify-center ">
          <div className="lg:w-[40%] w-[85%]  ">
            <p className=" web-title2 uppercase font-extrabold leading-tight">
              Testimonials
            </p>
            <p className="paragraphs ">
              Dive into the experiences of our valued clients in our
              Testimonials section.
            </p>
          </div>
        </div>
      </div>

      <div>
      <div className=" flex flex-col justify-center items-center justify-items-center">
      

      <div className="scroller w-[100%] " data-speed="slow">
        <ul className="tag-list scroller__inner">

            <div className="bg-white w-[350px] rounded-4xl p-4 ">
                <div className="flex gap-4 items-center">
                    <div className="pb-3">
                    <img className="size-[70px]" src="icon/gmails.png" alt="" />
                    </div>
                    <div>
                    <p className="text-[23px] font-bold">Jane Miller</p>
                    <p className="paragraphs3">Data Analyst</p>
                    </div>
                   

                 
               
                </div>


                <div className="flex gap-2 pb-3">
                    <img className="size-[20px]" src="icon/star.png" alt=""/>
                    <img className="size-[20px]" src="icon/star.png" alt=""/>
                    <img className="size-[20px]" src="icon/star.png" alt=""/>
                    <img className="size-[20px]" src="icon/star.png" alt=""/>
                    <img className="size-[20px]" src="icon/star.png" alt=""/>
                   </div>
                <p className="paragraphs">
                Cogni Hub has been a game-changer for us. As the CEO of Tech Innovators Inc., I can attest to the transformative power of their AI solutions. The accuracy and speed of data analysis have significantly
                 boosted our decision-making processes. Kudos to the Cogni Hub team!
                </p>
            </div>
          
        </ul>
      </div>

      

     
    </div>
      </div>

      
    </div>
  );
};

export default Testimonial;