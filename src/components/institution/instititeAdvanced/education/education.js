import "./education.css";
import SchoolIcon from "@mui/icons-material/School";
import WebIcon from "@mui/icons-material/Web";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useContext } from "react";
import TemplateCert from "../templateCert/templateCert";
import CertCreator from "../certCreator/certCreator";
import Tooltip from "@mui/material/Tooltip";
import { useEffect } from "react";
import { templateApi } from "../../../Scripts/apiCalls";
import UserContext from "../../../../context/userContext/UserContext";
import { useTranslation } from "react-i18next";

const Education = ({
  setView,
  certData,
  setCertData,
  category,
  setCategory,
}) => {
  const user = useContext(UserContext);
  const [isSidebar, setIsSidebar] = useState(true);
  const [isTemplateCreator, setIsTemplateCreator] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(certData);
  const { t } = useTranslation();

  const navbuttons = [
    {
      text: "Degree Certificates",
      logo: (
        <div>
          <WebIcon />
        </div>
      ),
      category: "educational certificates",
    },
    {
      text: "Diploma Certificates",
      logo: (
        <div>
          <WorkspacePremiumIcon />
        </div>
      ),
      category: "non educational certificates",
    },
    // {
    //   text: "Certificates (Non Educational)",
    //   logo: (
    //     <div>
    //       <SportsHandballIcon />
    //       <WebIcon />
    //     </div>
    //   ),
    //   category: "non educational certificates",
    // },
    // {
    //   text: "Badges (Non Educational)",
    //   logo: (
    //     <div>
    //       <SportsHandballIcon />
    //       <WorkspacePremiumIcon />
    //     </div>
    //   ),
    //   category: "non educational badges",
    // },
    // {
    //   text: "Others",
    //   logo: <MoreHorizIcon />,
    //   category: "others",
    // },
  ];

  const Sidebar = () => {
    const sidebarWidth = window.innerWidth > 800 ? "500px" : "250px";
    return (
      <div style={{ display: "flex", position: "relative", height: "100%" }}>
        <div style={{ width: "50px", backgroundColor: "var(--darkshade2)" }}>
          {navbuttons.map((nav) => (
            <div
              className="educationnavbutton"
              style={{
                height: "60px",
                width: "50px",
                minWidth: "50px",
                maxWidth: "50px",
              }}
              key={"education-sector-nav-button-" + nav["text"]}
              onClick={() => setCategory(nav["category"])}
            >
              <Tooltip title={nav["text"]} placement="right-start">
                {nav["logo"]}
              </Tooltip>
            </div>
          ))}
        </div>
        <div
          className="educationsectorsidebar"
          style={{
            backgroundColor: "var(--darkshade1)",
            height: window.innerHeight - 50 + "px",
            width: isSidebar ? sidebarWidth : "0px",
            overflowY: "scroll",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <button
              onClick={() => {
                setIsTemplateCreator(true);
                setIsSidebar(false);
              }}
            >
              {t("Institutions.education.createCustomTemplate")}
            </button>
          </div>

          <div
            className="educationnavbutton"
            style={{
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: "0px",
              right: "-50px",
              backgroundColor: "var(--darkshade1)",
              zIndex: 1,
            }}
            onClick={() => setIsSidebar(!isSidebar)}
          >
            {isSidebar ? "<" : ">"}
          </div>

          <TemplateContainer subscription="user" />
          <TemplateContainer subscription="free" />
          <TemplateContainer subscription="premium" />
        </div>
      </div>
    );
  };

  const TemplateContainer = ({ subscription }) => {
    const [templates, setTemplates] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    const deleteTemplate = async (template) => {
      setTemplates((prev) => {
        let index = prev.indexOf(template);
        prev.splice(index, 1);
        return prev;
      });

      templateApi({
        request_type: "delete",
        account: user.userAccount,
        id: template.id,
      })
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    };

    const heading =
      subscription === "user"
        ? t("Institutions.education.headingRecentlyUsed")
        : subscription === "free"
        ? t("Institutions.education.headingFreeTemplates")
        : t("Institutions.education.headingPremiumTemplates");

    useEffect(() => {
      templateApi({
        request_type: "read",
        account: user.userAccount,
        from_index: startIndex,
        to_index: startIndex + 6,
        sector: "education",
        category: category,
        subscription: subscription,
      })
        .then((res) => {
          console.log("---------------------------------------");
          console.log(res);
          setTemplates([...templates, ...res]);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [startIndex]);

    return (
      <>
        <div
          style={{
            borderBottom: "1px solid white",
            padding: "10px",
          }}
        >
          {heading}
        </div>
        <div
          style={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {templates.map((template) => (
            <div
              key={template.id + "template-sidebar-template"}
              onClick={() => {
                setSelectedTemplate(template);
                setIsTemplateCreator(false);
                setCertData(template);
              }}
              className="templateselector"
              style={{ position: "relative" }}
            >
              <img src={template.base_image} alt="Template" width="150px" />
              {subscription === "user" && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "0px",
                    right: "0px",
                    background: "black",
                    width: "20px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <DeleteIcon
                    color="primary"
                    onClick={() => deleteTemplate(template)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          style={{
            padding: "10px",
          }}
        >
          <button
            style={{ padding: "5px" }}
            onClick={() => setStartIndex((prev) => prev + 6)}
          >
            {t("Institutions.education.more")}...
          </button>
        </div>
      </>
    );
  };

  const MainPage = () => {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: window.innerHeight - 50 + "px",
          overflowY: "scroll",
        }}
        className="educationmainpage"
      >
        {isTemplateCreator ? (
          <CertCreator
            setIsTemplateCreator={setIsTemplateCreator}
            setSelectedTemplate={setSelectedTemplate}
            sector="education"
          />
        ) : (
          <>
            {selectedTemplate === null ? (
              <div
                style={{
                  marginTop: "50px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <h2>{t("Institutions.education.selectTemplate")}</h2>
                <h3>
                  {" "}
                  {"<< "}
                  {t("Institutions.education.selectTemplatePlaceholder")}{" "}
                </h3>
                <h3>{t("Institutions.education.or")}</h3>
                <button
                  onClick={() => {
                    setIsTemplateCreator(true);
                    setIsSidebar(false);
                  }}
                >
                  {t("Institutions.education.createCustomTemplate")}
                </button>
              </div>
            ) : (
              <TemplateCert
                templateData={selectedTemplate}
                setView={setView}
                setCertData={setCertData}
              />
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="educationSector">
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <Sidebar />
        <MainPage />
      </div>
    </div>
  );
};

export default Education;
