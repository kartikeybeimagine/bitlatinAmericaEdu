import "./View.css";
import React from "react";

import Connect from "../connection/Connect";
import ViewScript from "./ViewScript";
import { NFTCard } from "./NFTCard";
import NoWalletPage from "../connection/NoWalletPage";
import { useTranslation } from "react-i18next";
const View = () => {
  const { status, certificateData, user, navigate } = ViewScript();
  const {t} = useTranslation();

  if (!user.iswalletAvailable) {
    return <NoWalletPage />;
  }

  if (!user.isConnected) {
    return <Connect />;
  }

  const NFTData = () => {
    if (Object.keys(certificateData).length === 0) {
      return (
        <>
          <h2>{t('view.view.heading')}.</h2>
        </>
      );
    }

    return (
      <>
        {Object.keys(certificateData).map((category) => {
          return (
            <React.Fragment key={category}>
              <NFTCard category={category} nfts={certificateData[category]} />
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <div className="viewpage">
      <div className="viewcontainer">
        <div className="heading">{t('view.view.mydigitalCollection')}</div>
        <div className="status">{status}</div>
        <NFTData />
      </div>
    </div>
  );
};

export default View;
