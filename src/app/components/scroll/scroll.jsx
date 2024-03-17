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
    <div className=" flex flex-col justify-center items-center justify-items-center">
      

      <div className="scroller lg:w-[40%]" data-speed="fast">
        <ul className="tag-list scroller__inner">
        <img src="https://i.pravatar.cc/150?img=1" alt="" />
          <img src="https://i.pravatar.cc/150?img=2" alt="" />
          <img src="https://i.pravatar.cc/150?img=3" alt="" />
          <img src="https://i.pravatar.cc/150?img=4" alt="" />
          <img src="https://i.pravatar.cc/150?img=5" alt="" />
          <img src="https://i.pravatar.cc/150?img=6" alt="" />
        </ul>
      </div>

      <div className="scroller lg:w-[40%]" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
          <img src="https://i.pravatar.cc/150?img=1" alt="" />
          <img src="https://i.pravatar.cc/150?img=2" alt="" />
          <img src="https://i.pravatar.cc/150?img=3" alt="" />
          <img src="https://i.pravatar.cc/150?img=4" alt="" />
          <img src="https://i.pravatar.cc/150?img=5" alt="" />
          <img src="https://i.pravatar.cc/150?img=6" alt="" />
        </div>
      </div>

     
    </div>
  );
}
