import { useParams } from "react-router-dom";
import { verifyApi } from "../Scripts/apiCalls";
import { useState, useEffect } from "react";
import verifiedanim from "./assets/verified3.gif";
import { Verified } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import { fileDownload } from "../Scripts/tools";
import DownloadIcon from "@mui/icons-material/Download";
import DangerousIcon from "@mui/icons-material/Dangerous";
import { useTranslation } from "react-i18next";

const VerifyWithDetails = () => {
  const { contractAddress, tokenId } = useParams();
  const [isVerified, setIsVerified] = useState(false);
  const [userData, setUserData] = useState(null);
  const [nftData, setNftData] = useState(null);
  const [hasData, setHasData] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    verify();
  }, [tokenId, contractAddress]);

  const verify = async () => {
    setHasData(false);
    verifyApi({ contract_address: contractAddress, token_id: tokenId })
      .then((res) => {
        setHasData(true);
        if (res !== "Invalid data.") {
          setIsVerified(true);
          setUserData(res["user_data"]);
          setNftData(res["nft_data"]);
        } else {
          setIsVerified(false);
        }
      })
      .catch((err) => {
        setHasData(true);
        setIsVerified(false);
      });
  };

  if (!hasData) {
    return (
      <div className="verifypage">
        <div className="verifycontainer">
          <h1>{t("VerifyDetails.Verifying")}</h1>
          <CircularProgress size={200} />
        </div>
      </div>
    );
  }

  return (
    <div className="verifypage">
      <div className="verifycontainer">
        {isVerified ? (
          <>
            <VerifiedDetails
              userData={userData}
              nftData={nftData}
              contractAddress={contractAddress}
              tokenId={tokenId}
            />
          </>
        ) : (
          <>
            <h1 style={{ color: "red" }}>
              {t("VerifyDetails.Could_not_Verify")}
            </h1>
            <DangerousIcon color="error" style={{ fontSize: 200 }} />
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyWithDetails;

const VerifiedDetails = (props) => {
  const { userData, nftData, contractAddress, tokenId } = props;
  const [hasAnimated, setHasAnimated] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    setTimeout(() => setHasAnimated(true), 3500);
  });

  return (
    <div className="certDetails">
      {hasAnimated ? (
        <>
          <h1 style={{ width: "100%", textAlign: "center" }}>
            {t("VerifyDetails.Verified")}
            <Verified color="success" style={{ fontSize: 25 }} />
          </h1>
          <h4 style={{ width: "100%", textAlign: "center", margin: "2.5px" }}>
            {t("VerifyDetails.Contract_Address")} {contractAddress}
          </h4>
          <h4 style={{ width: "100%", textAlign: "center", margin: "2.5px" }}>
            {t("VerifyDetails.Token_Id")} {tokenId}
          </h4>
          <h4 style={{ width: "100%", textAlign: "center", margin: "2.5px" }}>
            20 Jan., 2023 | 16:45
          </h4>
          <h2 style={{ textDecoration: "underline" }}>
            {t("VerifyDetails.IssuedBy")}
          </h2>
          {userData["name"]}
          <span>{userData["description"]}</span>
          {userData["account"]}
          <h2 style={{ textDecoration: "underline" }}>
            {t("VerifyDetails.Recipient")}
          </h2>
          {nftData["owner"]}
          {Object.keys(nftData).map((item) => {
            if (
              item !== "image" &&
              item !== "metadata_uri" &&
              item !== "owner"
            ) {
              return (
                <span key={item}>
                  {item}: {nftData[item]}
                </span>
              );
            } else return null;
          })}
          <img src={nftData["image"]} alt="" style={{ maxWidth: "80vw" }} />
          <button
            onClick={() => {
              // fileDownload(nftData["image"], "Certificate");
              window.open(nftData["image"]);
            }}
          >
            {t("VerifyDetails.Download")}
            <DownloadIcon sx={{ fontSize: 20 }} />
          </button>
        </>
      ) : (
        <img src={verifiedanim} alt="BIT Verified" width={300} />
      )}
    </div>
  );
};
