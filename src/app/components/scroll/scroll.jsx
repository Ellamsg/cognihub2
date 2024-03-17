"use client"


import { useEffect } from "react";

export default function Scroll() {
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
    <div className=" flex flex-col py-5 justify-center items-center justify-items-center">
      

      <div className="scroller w-[100%] lg:w-[40%]" data-speed="slow">
        <ul className="tag-list move scroller__inner">
          <img src="icon/gmails.png" alt="" />
          <img src="icon/gmails.png" alt="" />
          <img src="icon/gmails.png" alt="" />
          <img src="icon/gmails.png" alt="" />
          <img src="icon/gmails.png" alt="" />
          <img src="icon/gmails.png" alt="" />
        </ul>
      </div>

      <div className="scroller w-[100%] lg:w-[40%]" data-direction="right" data-speed="slow">
        <div className="scroller__inner move">
          <img src="icon/gmails.png" alt="" />
          <img src="icon/gmails.png" alt="" />
          <img src="icon/gmails.png" alt="" />
          <img src="icon/gmails.png" alt="" />
          <img src="icon/gmails.png" alt="" />
          <img src="icon/gmails.png" alt="" />
        </div>
      </div>

     
    </div>
  );
}
