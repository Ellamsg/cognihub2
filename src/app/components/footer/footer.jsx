const Footer = () => {
  return (
    <div className="lg:px-[100px] lg:pt-[100px]">

      <div className="bg-red my-6 rounded-[2.5rem] ">
        <p className="text-[3rem] p-4 ">Get early access</p>
      </div>

      <div className="flex  lg:flex-row flex-col py-5">
        <div className="lg:w-[50%]">
          <img src="" alt="img" />
          <p className=" paragraphs w-[30%]">© 2023 CogniHub, Inc. All rights reserved</p>
        </div>

        <div className="flex justify-between lg:w-[50%] ">

          <div className="footer-divs">
            <p>Feature</p>
            <p>FAQ</p>
            <p>Pricing</p>
          </div>

          <div className="footer-divs">
            <p>Privacy policy</p>
            <p>Terms and condition</p>
            <p>404 page</p>
            <p>Title</p>
          </div>
          <div className="footer-divs">
            <p className="footer-btn"> Twitter</p>
            <p className="footer-btn">Facebook</p>
            <p className="footer-btn">Youtube</p>
            <p className="footer-btn">Instagram</p>
          </div>
        </div>
      </div>

      <div>
        <p className="uppercase font-extrabold lg:pt-[230px] hub">Cogni Hub</p>
      </div>
    </div>
  );
};

export default Footer;
