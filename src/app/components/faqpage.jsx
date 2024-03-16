import React from "react";
import Faqaccordion from "./faqaccordian/faqaccordian";

const Faqpage = () => {
  return (
    <div className=" flex flex-col gap-4 bg-gray-200 rounded-lg">
      < Faqaccordion 
        title="We're Affordable"
        answer="Our streamlined website development process and highly skilled website designers allows us to provide our professional website design at very competitive rates. Small business to mid-sized, or an individual that needs a website that accurately reflects your business, fits within your budget, and is completed on time. No need to look any further to find the most affordable website designing company on the net because We are here...!"
      />
      < Faqaccordion 
        title="Content Management System included for all website"
        answer="User-friendly Content Management System (CMS) allows you complete control over the content of your website with features that are easy and quick to use. It's integrated into all of our price packages because we understand the importance of having up to date content."
      />
      < Faqaccordion  title="Fast turnarounds" answer="We always try to efficiently deliver all websites as quickly as possible without affecting the website's design or functionality. We provide everything needed to get your business online efficiently." />
      < Faqaccordion  title="Easy maintenance for your website (CMS)" answer="We're passionate about keeping it up-to-date as easy as possible. You don't want to have to keep coming back to us whenever you want to change a little bit of text or upload a new image and so with this in mind we've built a management system that's simple for anyone to use." />
      < Faqaccordion  title="Realistic prices that you can afford!" answer="We stress affordability rather than cheapness because trying to be the cheapest means that you have to cut all costs and all corners to keep prices rock bottom. We think there's some costs and some corners that shouldn't be cut if you want to get an end result which is worth the investment you're making – Don't worry though, we certainly aren't expensive, we just won't try to get you in and out of the door as quickly as possible as some others would. A great price for a great service." />
   
    </div>
  );
};

export default Faqpage;