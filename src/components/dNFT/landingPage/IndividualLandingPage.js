import "./landing.css";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import GavelIcon from "@mui/icons-material/Gavel";
import HomeIcon from "@mui/icons-material/Home";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import CelebrationIcon from "@mui/icons-material/Celebration";
import MenuIcon from "@mui/icons-material/Menu";
import UserContext from "../../../context/userContext/UserContext";
import NoWalletPage from "../../connection/NoWalletPage";
import Connect from "../../connection/Connect";
import KYC from "../../kyc/kyc";
// import { useTranslation } from "react-i18next";
import { useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import Individualdnft from "../Individualdnft";

const IndividualLandingPage = () => {
  const user = useContext(UserContext);
  const [isSidebar, setIsSidebar] = useState(false);

  const { t } = useTranslation();

  const Navbar = () => {
    return (
      <div
        className="institutenavbar"
        style={{
          left: "0px",
          height: "50px",
        }}
      >
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          Dynamic NFT Certificates
        </div>
      </div>
    );
  };

  return (
    <div className="institutepageadvanced">
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Navbar />

          {!user.iswalletAvailable ? (
            <NoWalletPage />
          ) : !user.isConnected ? (
            <Connect />
          ) : user.userData.status !== "Approved" ? (
            <KYC />
          ) : (
            <div
              style={{
                position: "absolute",
                top: "50px",
                left: "0px",
                width: "100%",
              }}
            >
              <Individualdnft />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndividualLandingPage;
