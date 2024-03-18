const Footer = () => {
  return (
    <div className="lg:px-[100px] bg-[#f2f1f1] px-[30px] lg:pt-[100px]">

      <div className="bg-[blue] py-5 lg:py-4 px-4 flex justify-between my-6 rounded-[1.2rem] md:rounded-[2.5rem] ">
        <p className="md:text-[3rem] text-[1.5rem]  text-white ">Get early access</p>
        <div className=" flex items-center justify-center">
          <img className="md:size-[50px] size-[40px] " src="icon/arrow-up.png" alt=""/>
        </div>
      </div>

      <div className="flex   justify-center lg:justify-start  flex-col py-5">
        <div className="lg:w-[50%] lg:pb-0 pb-4">
          <div className="flex lg:justify-start justify-center">
          <img className="size-[70px] mb-2" src="icon/eye.png" alt="img" />
          </div>
          
          <div className="flex lg:justify-start justify-center">
          <p className="lg:text-start text-center paragraphs w-[30%]">© 2023 CogniHub, Inc. All rights reserved</p>
          </div>

        </div>

        <div className="flex md:pt-6 lg:gap-0 gap-6 lg:flex-row flex-col justify-center lg:justify-between  ">

          <div className="footer-divs">
            <p>Feature</p>
            <p>FAQ</p>
            <p>Pricing</p>
          </div>

          <div className="footer-divs">
            <p>Privacy policy</p>
            <p>Terms and condition</p>
            <p>404 page</p>
            <p>Help</p>
          </div>
          <div className="footer-divs  md:pb-0 pb-6 ">
         <button className="footer-btn"><p > Twitter</p></button>   
         <button className="footer-btn"><p >Facebook</p></button>   
          <button className="footer-btn"><p >Youtube</p></button>  
          <button className="footer-btn"><p >Instagram</p></button>  
          </div>
        </div>
      </div>

      <div>
        <p className="uppercase md:block hidden font-extrabold lg:pt-[230px] hub">CogniHub</p>
      </div>
    </div>
  );
};

export default Footer;
