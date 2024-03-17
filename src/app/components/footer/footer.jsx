const Footer = () => {
  return (
    <div className="lg:px-[100px] px-[30px] lg:pt-[100px]">

      <div className="bg-[blue] my-6 rounded-[1.2rem] md:rounded-[2.5rem] ">
        <p className="md:text-[3rem] text-[1.5rem] text-white p-4 ">Get early access</p>
      </div>

      <div className="flex  justify-center lg:justify-start lg:flex-row flex-col py-5">
        <div className="lg:w-[50%] lg:pb-0 pb-4">
          <div className="flex lg:justify-start justify-center">
          <img className="size-[70px] mb-2" src="icon/eye.png" alt="img" />
          </div>
          
          <div className="flex lg:justify-start justify-center">
          <p className="lg:text-start text-center paragraphs w-[30%]">© 2023 CogniHub, Inc. All rights reserved</p>
          </div>

        </div>

        <div className="flex lg:gap-0 gap-6 lg:flex-row flex-col justify-center lg:justify-between lg:w-[50%] ">

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
          <div className="footer-divs md:pb-0 pb-6 ">
         <div className="footer-btn"><p > Twitter</p></div>   
         <div className="footer-btn"><p >Facebook</p></div>   
          <div className="footer-btn"><p >Youtube</p></div>  
          <div className="footer-btn"><p >Instagram</p></div>  
          </div>
        </div>
      </div>

      <div>
        <p className="uppercase md:block  font-extrabold lg:pt-[230px] hub">Cogni Hub</p>
      </div>
    </div>
  );
};

export default Footer;
