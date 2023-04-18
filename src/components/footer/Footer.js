import "./Footer.css";

import logo from "../assets/logo.png";
import linkedinlogo from "./assets/linkedinlogo.svg";
import instagramlogo from "./assets/instagramlogo.svg";
import telegramlogo from "./assets/telegram-icon.svg";
import twitterlogo from "./assets/twitter-square-color-icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerborder"></div>
      <div className="footercontainer">
        <div className="footerlogocontainer">
          <img
            src={logo}
            alt="BEYOND IMAGINATION TECHNOLOGIES"
            onClick={() => {
              window.open("https://www.bitindiaofficial.tech/");
            }}
          />
        </div>

        <div className="contactcontainer">
          Contact us:
          <div>
            <a href="mailto:support@beimagine.tech">support@beimagine.tech</a>
          </div>
          <div className="socialcontainer">
            <img
              src={linkedinlogo}
              alt=""
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/company/bitmemoir-latam/"
                );
              }}
            />
            <img
              src={instagramlogo}
              alt=""
              onClick={() => {
                window.open("https://instagram.com/bitmemoir_latam?igshid=YmMyMTA2M2Y=");
              }}
            />
            <img
              src={twitterlogo}
              alt=""
              onClick={() => {
                window.open("https://instagram.com/bitmemoir_latam?igshid=YmMyMTA2M2Y=");
              }}
            />
            <img
              src={telegramlogo}
              alt=""
              onClick={() => {
                window.open("https://instagram.com/bitmemoir_latam?igshid=YmMyMTA2M2Y=");
              }}
            />
          </div>
        </div>
      </div>
      <div className="copyrightcontainer">
        Copyright © 2022 Beyond Imagination Technologies Pvt. Ltd. All right
        reserved.
      </div>
    </div>
  );
};

export default Footer;
