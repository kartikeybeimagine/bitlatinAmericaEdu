import React, { useState } from "react";
import "./Navbar.css";
import menu from "./assets/menu.svg";
import logo from "../assets/logo.png";
import downicon from "./assets/down.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/userContext/UserContext";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import { Typography } from "@mui/material";


const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
)



const Navbar = () => {
  const user = useContext(UserContext);
  const { t } = useTranslation(i18next.language)
  const navigate = useNavigate();
  const [isMenu, setIsMenu] = useState(false);
  const [isLang, setIsLang] = useState(false);
  const [lang, setLang] = useState(i18next.language);
  const [open, setOpen] = React.useState(false);
  const [aboutustext, setaboutustext] = useState(t("Navbar.AboutUs"))

  const handleChange = (event) => {
    i18next.changeLanguage(event.target.value)
    setLang(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };



  const Menubar = () => {
    return (
      <div className="menubar">
        <div
          className="menupad"
          onClick={() => {
            setIsMenu(!isMenu);
          }}
        ></div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/home");
            setIsMenu(false);
          }}
        >
          Home
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/view");
            setIsMenu(false);
          }}
        >
          {t("Navbar.View")}
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/institution");
            setIsMenu(false);
          }}
        >
          {t("Navbar.Institutions")}
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/verify");
            setIsMenu(false);
          }}
        >
          {t("Navbar.Verify")}
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/bitwalletpage");
            setIsMenu(false);
          }}
        >
          {t("BitWallet")}
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/contact");
            setIsMenu(false);
          }}
        >
          {t("Navbar.Contact_Us")}
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/team");
            setIsMenu(false);
          }}
        >
          {t("Navbar.Team")}
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/roadmap");
            setIsMenu(false);
          }}
        >
          {t("Navbar.Roadmap")}
        </div>
        <div className="menuitem"
          onClick={() => {
            navigate("/partners");
            setIsMenu(false);
          }}
        >
          {t("Navbar.OurPartners")}
        </div>
        <div className="menuitem">
          <a href="https://www.bitindiaofficial.tech/services-9" target="_blank" rel="noreferrer">
            Press Room
          </a>
        </div>
      </div>
    );
  };
  return (
    <div className="navbar">
      <div className="navbuttoncontainer">
        <div className="logocontainer">
          <img
            src={logo}
            alt="BEYOND IMAGINATION TECHNOLOGIES"
            onClick={() => navigate("/home")}
          />
        </div>
        <div style={{ marginTop: "auto", marginBottom: "auto" }} className="navbutton" onClick={() => navigate("/view")}>
          {t("Navbar.View")}
        </div>
        <div style={{ marginTop: "auto", marginBottom: "auto" }} className="navbutton" onClick={() => navigate("/institution")}>
          {t("Navbar.Institutions")}
        </div>
        <div className="navbutton" >
          <div class="dropdown">
            <Button class="dropbtn">dNFT</Button>
            <div class="dropdown-content">
              <a onClick={() => navigate("/dnft") }>Batch dNFT</a>
              <a onClick={() => navigate("/individualdnft") }>Individual dNFT</a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "auto", marginBottom: "auto" }} className="navbutton" onClick={() => navigate("/verify")}>
          {t("Navbar.Verify")}
        </div>
        {/* <div style={{ marginTop: "auto", marginBottom: "auto" }} className="navbutton" onClick={() => navigate("/blogs")}>
          {t("Blog")}
        </div> */}
        <div style={{ marginTop: "auto", marginBottom: "auto" }} className="navbutton" onClick={() => navigate("/bitwalletpage")}>
          {t("BitWallet")}
        </div>
        <div style={{ marginTop: "auto", marginBottom: "auto" }} className="navbutton" onClick={() => navigate("/partners")}>
          {t("Navbar.OurPartners")}
        </div>
        <div style={{ marginTop: "auto", marginBottom: "auto" }} className="navbutton" onClick={() => navigate("/about")}>
          {aboutustext}
        </div>
      </div>
      <div className="menucontainer">
        <img
          src={menu}
          alt="Menu"
          onClick={() => {
            setIsMenu(!isMenu);
          }}
        />
      </div>
      {isMenu && <Menubar />}
      <div className="navrightbuttoncontainer">
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          {!open && <Typography sx={{ display: 'block', mb: 2 }} onClick={handleOpen}>
            {lang === "en" && "EN"}
            {lang === "sp" && "SP"}
            {lang === "pt" && "PT"}
            <img src={downicon} height={"20"} width={'20'}></img>
          </Typography>}
          {open && <FormControl sx={{ m: 1, minWidth: 120 }}>
            {/* <InputLabel id="demo-controlled-open-select-label">Language</InputLabel> */}
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={lang}
              // label="Language"
              onChange={handleChange}
              style={{ color: 'white' }}
              defaultValue={i18next.language}
            >
              <MenuItem value={'en'}>English</MenuItem>
              <MenuItem value={'sp'}>Español</MenuItem>
              <MenuItem value={'pt'}>Português</MenuItem>
            </Select>
          </FormControl>}
        </div>
        <div className="contactusbutton">
          <button onClick={() => navigate("/contact")}>{t("Navbar.Contact_Us")}</button>
        </div>
        {user.iswalletAvailable ? (
          user.isConnected ? (
            <div className="whitebutton">
              <button onClick={() => navigate("/dashboard")}>
                <DashboardIcon sx={{ fontSize: 20, marginRight: "5px" }} />
                {t("Navbar.Dashboard")}
              </button>
            </div>
          ) : (
            <div className="whitebutton">
              <button
                onClick={() => {
                  user.login();
                }}
              >
                Connect
              </button>
            </div>
          )
        ) : (
          <div className="whitebutton">
            <button
              onClick={() => {
                navigate("/bitwalletpage")
              }}
            >
              Get Wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
