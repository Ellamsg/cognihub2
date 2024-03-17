const Pricinglist = () => {
  return (
    <div className="lg:px-[100px] flex lg:flex-row flex-col gap-3">
      <div className="card2 bg-white">
        <p className="text-[20px]">Free</p>
        <p className="md:text-[50px] text-[40px] font-bold">
          $0 <span className="text-[14px] font-normal">p/month</span>
        </p>
        <p className="paragraphs pt-2 pb-3">
          Get started with our Free Plan for individuals and small projects
        </p>

        <div className="try-btn">
          <p className="text-[15px] font-bold">Try out now</p>
          <img className="size-[30px]" src="icon/arrow.png" />
        </div>

        <div className="card2-list">
          <p>Limited access to core features</p>
          <p>Suitable for small-scale usage</p>
          <p>Basic customer support</p>
          <p>Ad-supported experience</p>
          <p>One request at a time</p>
        </div>
      </div>


      <div className="card2 bg-black">
        <p className="text-[20px] text-[#5f5f5f]">Free</p>
        <p className="md:text-[50px] text-[40px] text-white font-bold">
        $2900 <span className="text-[14px] font-normal">p/month</span>
        </p>
        <p className="paragraphs pt-2 pb-3">
        Unlock the full potential of our platform with the Standard Plan
        </p>

        <div className="try-btn2 text-white">
          <p className="text-[15px] font-bold">Try out now</p>
          <img className="size-[30px]" src="icon/arrow2.png" />
        </div>

        <div className="card2-list text-white">
          <p>Full access to all core features</p>
          <p>Ideal for growing businesses</p>
          <p>Priority customer support</p>
          <p>Ad-free experience</p>
          <p>Regular updates and improvements</p>
        </div>
      </div>




      <div className="card2 bg-white">
        <p className="text-[20px]">Free</p>
        <p className="md:text-[50px] text-[40px] font-bold">
          $0 <span className="text-[14px] font-normal">p/month</span>
        </p>
        <p className="paragraphs pt-2 pb-3">
          Get started with our Free Plan for individuals and small projects
        </p>

        <div className="try-btn">
          <p className="text-[15px] font-bold">Try out now</p>
          <img className="size-[30px]" src="icon/arrow.png" />
        </div>

        <div className="card2-list ">
          <p>Solutions for large enterprises</p>
          <p>Features and customization options</p>
          <p>Dedicated account manager</p>
          <p>24/7 premium customer support</p>
          <p>Comprehensive training and onboarding</p>
        </div>
      </div>
    </div>
  );
};

export default Pricinglist;
