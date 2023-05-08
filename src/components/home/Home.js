import "./Home.css";
import "./Home2.css";
import img1 from "./assets/img1.png";
import arraow from "./assets/Line 2.png";
import step1 from "./assets/step1.png";
import step2 from "./assets/step2.png";
import step3 from "./assets/step3.png";
import step4 from "./assets/step4.png";
import step5 from "./assets/step5.png";
import step6 from "./assets/step6.png";
import step7 from "./assets/step7.png";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import QuestionBox from "./QuestionBox";
import { Segment } from "semantic-ui-react";
import FAQLogo from "./assets/icons8-faq-64.png";
import News from "./assets/icons8-news-64.png";
import Insta from "./assets/instagramlogo.svg";
import twitter from "./assets/twitter-square-color-icon.svg";
import Linkidein from "./assets/linkedinlogo.svg";
import telegram from "./assets/telegram-icon.svg";


function TabPanel(props) {
  const { value } = props;
  const { t } = useTranslation();

  return (
    <div>
      {value === 0 ? (
        <QuestionBox />
      ) : (
        <>
          <iframe
            width="560"
            height="315"
            src={t("Home.FAQ.videoLink")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </>
      )}
    </div>
  );
}

const Home = () => {
  const [selecttab, setselecttab] = useState(1);
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* About Section ------------------- */}
      <div className="aboutSectionContainer">
        <Segment
          floated="right"
          style={{
            position: "fixed",
            right: "0px",
            bottom: "50%",
            zIndex: "1000",
          }}
        >
          <div className="faqNews">
            <img
              onClick={() => {
                let toScrollElement = document.getElementById("faqpart");
                toScrollElement.scrollIntoView();
              }}
              src={FAQLogo}
              alt="FAQLogo"
              style={{ width: "40px", height: "40px" }}
            />
            <hr />
            <a
              href="https://www.bitindiaofficial.tech/services-9"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={News}
                alt="FAQLogo"
                style={{ width: "40px", height: "40px" }}
              />
            </a>
          </div>
        </Segment>
        <Segment
          floated="left"
          style={{
            position: "fixed",
            left: "0px",
            bottom: "50%",
            zIndex: "1000",
          }}
        >
          <div className="socialmedia">
            <a
              href="https://instagram.com/bitmemoir_latam?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Insta}
                alt="FAQLogo"
                style={{ width: "40px", height: "40px" }}
              />
            </a>
            <hr />
            <a
              href="https://twitter.com/bitmemoir_latam?s=21&t=caq4RpG9bzxouodNg7bJBw"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={twitter}
                alt="FAQLogo"
                style={{ width: "40px", height: "40px" }}
              />
            </a>
            <hr />
            <a
              href="https://www.linkedin.com/company/bitmemoir-latam/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Linkidein}
                alt="FAQLogo"
                style={{ width: "40px", height: "40px" }}
              />
            </a>
            <hr />
            <a
              href="https://t.me/bitmemoirofficial"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={telegram}
                alt="FAQLogo"
                style={{ width: "40px", height: "40px" }}
              />
            </a>
          </div>
        </Segment>
        <div className="aboutsection">
          <div className="writing">
            <div className="mainheading">{t("Home.heading")}</div>
            <div>
              {" "}
              <span className="submainheading">{t("Home.for")}</span>
              <span style={{ marginLeft: "20px" }} className="mainheading">
                {t("Home.heading2")}
              </span>
            </div>
            <div className="secondheading">{t("Home.subheading")}</div>
            <button
              onClick={() => {
                let toScrollElement =
                  document.getElementById("whatisbitmemoir");
                toScrollElement.scrollIntoView();
              }}
            >
              {t("Home.button")}
            </button>
          </div>
          <div className="illustration">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="aboutsectionmobile">
          <div className="illustration">
            <img src={img1} alt="blockchainImage" />
          </div>
          <div className="writing">
            <div className="mainheading">{t("Home.heading")}</div>
            <div>
              {" "}
              <span className="submainheading">{t("Home.for")}</span>
              <span style={{ marginLeft: "20px" }} className="mainheading">
                {t("Home.heading2")}
              </span>
            </div>
            <div className="secondheading">{t("Home.subheading")}</div>
            <button
              onClick={() => {
                let toScrollElement =
                  document.getElementById("whatisbitmemoir");
                toScrollElement.scrollIntoView();
              }}
            >
              {t("Home.button")}
            </button>
          </div>
        </div>
        <div className="nextpagearrowcontainer">
          <div className="nextpagearrow"></div>
        </div>
      </div>
      {/* <div className="newsFaqFix" >
      </div> */}
      {/* BitMemoir Description Section ------------------------ */}
      <div className="descriptionsectioncontainer" id="whatisbitmemoir">
        <div className="descriptionsection">
          <div className="writing">
            <div className="heading">{t("Home.container2.heading-1")}</div>
            <div className="heading">{t("Home.container2.heading-2")}</div>
            <div className="certificatesectioncontainer2">
              <div className="certificatesectioncontainer2part1">
                <div className="certificatesissued2">
                  <div className="heading1">1</div>
                  <div className="heading2">
                    {t("Home.container2.box1.heading")}
                  </div>
                  <div className="heading3">
                    {t("Home.container2.box1.text")}
                  </div>
                </div>
                <div className="certificatesissued2">
                  <div className="heading1">2</div>
                  <div className="heading2">
                    {t("Home.container2.box2.heading")}
                  </div>
                  <div className="heading3">
                    {t("Home.container2.box2.text")}
                  </div>
                </div>
              </div>
              <div className="certificatesectioncontainer2part2">
                <div className="certificatesissued2">
                  <div className="heading1">3</div>
                  <div className="heading2">
                    {t("Home.container2.box3.heading")}
                  </div>
                  <div className="heading3">
                    {t("Home.container2.box3.text")}
                  </div>
                </div>
                <div className="certificatesissued2">
                  <div className="heading1">4</div>
                  <div className="heading2">
                    {t("Home.container2.box4.heading")}
                  </div>
                  <div className="heading3">
                    {t("Home.container2.box4.text")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How to use Section--------------------- */}
      <div className="howtousecontainer">
        <div className="whybitmemomaindiv">
          <div className="whybitmemoheading">
            <div className="howtouseheading">
              {t("Home.container3.heading1")} <br />{" "}
              {t("Home.container3.heading2")}
            </div>
            <div className="whybitmemotext">{t("Home.container3.text")}</div>
            <div className="whybitmemoArrow">
              <img src={arraow} alt="arrow"></img>
            </div>
          </div>

          <div className="howtouseimageleft">
            <div>
              {i18next.language === "en" ? (
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/YDsqedqmF84"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/FIx3HdzXCDs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Solution Sections ---------------------------------------- */}

      {/* Why Bit Section ---------------------------------------- */}
      <div className="joinContainer2">
        <div className="stepsheadingbtndiv">
          <div onClick={() => {
            setselecttab(0);
          }} className={`benefit ${selecttab === 0 ? "fillbackground" : "transparentbackground"}`}>{t("Home.generate_degree_btn")}</div>
          <div onClick={() => {
            setselecttab(1);
          }} className={`benefit2 ${selecttab === 1 ? "fillbackground" : "transparentbackground"}`}>{t("Home.generate_certificate_btn")}</div>
        </div>
      </div>
      <div className="whybitcontainer">
        <div className="stepsHeading">
          <div className="heading-1">{t("Home.container4.heading1")} </div>
          <div className="heading-1"> {t("Home.container4.heading2")}</div>
          <div className="stepText">{t("Home.container4.text")}</div>
        </div>

        <div className={`${selecttab === 0 ? "" : "hidden"}`}>
          <div className="stepscontainer">
            <div className="step">
              <div className="stepimg">
                <img src={step1} alt="step1" />
              </div>
              <div className="stepheading">
                {t("Home.container4.step1.heading")}
              </div>
              <div className="steptext">{t("Home.container4.step1.text")}</div>
            </div>
            <div className="step">
              <div className="stepimg">
                <img src={step2} alt="step2" />
              </div>
              <div className="stepheading">
                {t("Home.container4.step2.heading")}
              </div>
              <div className="steptext">{t("Home.container4.step2.text")}</div>
            </div>
            <div className="step">
              <div className="stepimg">
                <img src={step3} alt="step3" />
              </div>
              <div className="stepheading">
                {t("Home.container4.step3.heading")}
              </div>
              <div className="steptext">{t("Home.container4.step3.text")}</div>
            </div>
            <div className="step">
              <div className="stepimg">
                <img src={step4} alt="step4" />
              </div>
              <div className="stepheading">
                {t("Home.container4.step4.heading")}
              </div>
              <div className="steptext">{t("Home.container4.step4.text")}</div>
            </div>
          </div>
          <div className="stepscontainer2">
            <div className="step">
              <div className="stepimg">
                <img src={step5} alt="step5" />
              </div>
              <div className="stepheading">
                {t("Home.container4.step5.heading")}
              </div>
              <div className="steptext">{t("Home.container4.step5.text")}</div>
            </div>
            <div className="step">
              <div className="stepimg">
                <img src={step6} alt="step6" />
              </div>
              <div className="stepheading">
                {t("Home.container4.step6.heading")}
              </div>
              <div className="steptext">{t("Home.container4.step6.text")}</div>
            </div>
            <div className="step">
              <div className="stepimg">
                <img src={step7} alt="step7" />
              </div>
              <div className="stepheading">
                {t("Home.container4.step7.heading")}
              </div>
              <div className="steptext">{t("Home.container4.step7.text")}</div>
            </div>
          </div>
        </div>

        <div className={`${selecttab === 1 ? "" : "hidden"}`}>
          <div className="stepscontainer">
            <div className="step">
              <div className="stepimg">
                <img src={step1} alt="step1" />
              </div>
              <div className="stepheading">
                {t("Home.container4.step1.heading")}
              </div>
              <div className="steptext">{t("Home.container4.step1.text")}</div>
            </div>
            <div className="step">
              <div className="stepimg">
                <img src={step2} alt="step2" />
              </div>
              <div className="stepheading">
                {t("Home.container4.step2.heading")}
              </div>
              <div className="steptext">{t("Home.container4.step3.text")}</div>
            </div>
            <div className="step">
              <div className="stepimg">
                <img src={step3} alt="step3" />
              </div>
              <div className="stepheading">
                {t("Home.container4.step3.heading")}
              </div>
              <div className="steptext">{t("Home.container4.step4.text")}</div>
            </div>
            <div className="step">
              <div className="stepimg">
                <img src={step4} alt="step4" />
              </div>
              <div className="stepheading">
                {t("Home.container4.step4.heading")}
              </div>
              <div className="steptext">{t("Home.container4.step5.text")}</div>
            </div>
          </div>
          <div className="stepscontainer2">
            <div className="step">
              <div className="stepimg">
                <img src={step5} alt="step5" />
              </div>
              <div className="stepheading">
                {t("Home.container4.step5.heading")}
              </div>
              <div className="steptext">{t("Home.container4.step6.text")}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Join  */}
      {/* <div className="joinContainer">
        <div className="joinContainerHeading">
        {t("Home.container5.heading")}
        </div>
        <div className="joinMainDiv">
          <div className="join">
            <div className="joinheading">
            <div className="joiningfee"> <sup className="dollar">$</sup>1.00
              <p className="permonth">{t("Home.container5.box.per_month")}</p>
            </div>
            </div>
            <div className="joinheading2">
              <div className="subjoinheading2">
              {t("Home.container5.box.heading")} <br/> {t("Home.container5.box.heading2")}
              </div>
              <button className="joinbtn">{t("Home.container5.box.buy-btn")}</button>
            </div>
          </div>
          <div className="join">
            <div className="joinheading">
            <div className="joiningfee"> <sup className="dollar">$</sup>1.00
              <p className="permonth">{t("Home.container5.box.per_month")}</p>
            </div>
            </div>
            <div className="joinheading2">
              <div className="subjoinheading2">
              {t("Home.container5.box.heading")}<br/> {t("Home.container5.box.heading2")}
                </div>
                <button className="joinbtn">{t("Home.container5.box.buy-btn")}</button>
              </div>
          </div>
          <div className="join">
            <div className="joinheading">
            <div className="joiningfee"> <sup className="dollar">$</sup>1.00
              <p className="permonth">{t("Home.container5.box.per_month")}</p>
            </div>
            </div>
            <div className="joinheading2">
              <div className="subjoinheading2">
              {t("Home.container5.box.heading")} <br/> {t("Home.container5.box.heading2")}
                </div>
                <button className="joinbtn">{t("Home.container5.box.buy-btn")}</button>
              </div>
          </div>
        </div>
      </div> */}

      <div className="joinContainer" id="faqpart">
        <div className="joinContainerHeading">FAQs</div>
        {/* <QuestionBox /> */}
        <Box
          sx={{
            width: "85%",
            maxWidth: "750px",
            border: "1px solid lightgrey",
            borderRadius: "20px",
            padding: "20px",
            margin: "20px",
            // backgroundColor: "#D8E4F7",
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="FAQs" sx={{ color: "black" }} />
              <Tab label="Video FAQs" sx={{ color: "black" }} />
            </Tabs>
          </Box>
          <TabPanel
            value={value}
          // index={0}
          // users={props.users}
          // update={props.update}
          ></TabPanel>
        </Box>
      </div>
    </>
  );
};

export default Home;
