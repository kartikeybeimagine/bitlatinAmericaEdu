import "./Connection.css";
import wallet from "./assets/wallet.svg";

import React from "react";
import UserContext from "../../context/userContext/UserContext";
import { useContext} from "react";
import { useTranslation } from 'react-i18next'
const Connect = () => {
  const user = useContext(UserContext);
  const { t } = useTranslation();

  return (
    <div className="nowalletpage">
      <img src={wallet} alt="Wallet" />
      <h2>{t("connection.connection.heading")}</h2>
      {t("connection.connection.subheading")}
      <button
        onClick={() => {
          user.login();
        }}
      >
        {t("connection.connection.connect-btn")}
      </button>
    </div>
  );
};

export default Connect;
