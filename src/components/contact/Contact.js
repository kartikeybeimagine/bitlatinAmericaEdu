import "./Contact.css";
import linkedinlogo from "../footer/assets/linkedinlogo.svg";
import instagramlogo from "../footer/assets/instagramlogo.svg";
import Twitterlogo from "../footer/assets/twitter-square-color-icon.svg";
import Telegram from "../footer/assets/telegram-icon.svg";
import React from "react";

const Contact = () => {
  return (
    <div className="contactpage">
      <h3>Reach out to us at:</h3>
      <div style={{
        // width: "80%",
        // display: "flex",  
        // // justifyContent: "space-between",
        // alignItems: "center",
        // margin: "auto",
        // marginTop: "50px"
      }}>

      <div>
        <p>Address : Beyond imagination tech LLC </p>
        <p style={{marginLeft:"70px"}}>M03 Laffa restaurant building, </p>
        <p style={{marginLeft:"200px"}}> Sheikh Khalifa Bin Zayed St - opp. Burjuman Mall, </p>
        <p style={{marginLeft:"50px"}}> Dubai,United Arab Emirates</p>
      </div>
      </div>
      <h3>Email : support@beimagine.tech</h3>
      <h4>Marketing : marketing@beimagine.tech</h4>
      <h3>Check out our social:</h3>
      <div className="contactsocialcontainer">
        <img
          src={linkedinlogo}
          alt="BitMemoir Linkedin"
          height="100"
          width="100"
          onClick={() => {
            window.open("https://www.linkedin.com/company/bitmemoir-latam/");
          }}
        />
        <img
          src={instagramlogo}
          alt="BitMemoir Instagram"
          height="200"
          width="200"
          onClick={() => {
            window.open(
              "https://instagram.com/bitmemoir_latam?igshid=YmMyMTA2M2Y="
            );
          }}
        />
          <img
          src={Twitterlogo}
          alt=""
          height="90"
          width="90"
          onClick={() => {
            window.open("https://twitter.com/bitmemoir_latam?s=21&t=caq4RpG9bzxouodNg7bJBw");
          }}
        />
        <img
          src={Telegram}
          style={{
            marginLeft:"30px"
          }}
          alt=""
          height="100"
          width="100"
          onClick={() => {
            window.open("https://t.me/bitmemoirofficial");
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
