import "./Contact.css";
import linkedinlogo from "../footer/assets/linkedinlogo.svg";
import instagramlogo from "../footer/assets/instagramlogo.svg";

import React from "react";

const Contact = () => {
  return (
    <div className="contactpage">
      Reach out to us at:
      <h2>Email: support@beimagine.tech</h2>
      <h2>Check out our social:</h2>
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
      </div>
    </div>
  );
};

export default Contact;
