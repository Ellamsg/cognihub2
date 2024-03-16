const Footer = () => {
  return (
    <div className="lg:px-[100px] px-[30px] lg:pt-[100px]">

      <div className="bg-[blue] my-6 rounded-[1.2rem] md:rounded-[2.5rem] ">
        <p className="md:text-[3rem] text-[1.5rem] text-white p-4 ">Get early access</p>
      </div>

      <div className="flex  justify-center md:justify-start lg:flex-row flex-col py-5">
        <div className="lg:w-[50%] md:pb-0 pb-4">
          <img src="" alt="img" />
          <div className="flex md:justify-start justify-center">
          <p className="md:text-start text-center paragraphs w-[30%]">© 2023 CogniHub, Inc. All rights reserved</p>
          </div>

        </div>

        <div className="flex md:gap-0 gap-6 md:flex-row flex-col justify-center md:justify-between lg:w-[50%] ">

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
            <p className="footer-btn"> Twitter</p>
            <p className="footer-btn">Facebook</p>
            <p className="footer-btn">Youtube</p>
            <p className="footer-btn">Instagram</p>
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
