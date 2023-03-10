import "./Connection.css";
import metamaskimage from "./assets/metamask.png";
import { useTranslation } from 'react-i18next'

import React from "react";

const NoWalletPage = () => {
  const { t } = useTranslation();
  return (
    <div className="nowalletpage">
      <img src={metamaskimage} height={200} alt="" />
      <h2 style={{ fontSize: "20px", marginBottom: "40px" }}>
        {t('connection.noWallet.heading')}
      </h2>

      <button
        onClick={() => {
          window.open("https://metamask.io");
        }}
      >
        {t('connection.noWallet.download-btn')}
      </button>
      <h1 style={{ fontSize: "18px", marginTop: "30px" }}>
      {t('connection.noWallet.subheading')}
      </h1>
      <h2>{t('connection.noWallet.learnmore-btn')}</h2>
      <div>
        <iframe
          src="https://www.youtube.com/embed/YVgfHZMFFFQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default NoWalletPage;
