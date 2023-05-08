import "./verify.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";
import { useTranslation } from "react-i18next";

const Verify = () => {
  const navigate = useNavigate();
  const [contractAddress, setContractAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const { t } = useTranslation();

  const verify = () => {
    if (!ethers.utils.isAddress(contractAddress)) {
      alert("Invalid contract address!");
      return null;
    } else if (tokenId <= 0) {
      alert("Invalid token id!");
      return null;
    } else {
      navigate("/verify/" + contractAddress + "/" + tokenId);
    }
  };
  return (
    <div className="verifypage">
      <div className="verifycontainer">
        <h1>{t("Verify.heading")}</h1>
        <h3>{t("Verify.subheading")}</h3>
        <h5>
        {t("Verify.subheadingtext")}
        </h5>
        <label htmlFor="contract-address-for-cert-verification">
        {t("Verify.Contract_Address")}
        </label>
        <input
          type="text"
          id="contract-address-for-cert-verification"
          placeholder="Enter address. e.g. 0xbff6CbaE23f790826f4209438752bd269e63e8c5"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
        />
        <label htmlFor="token-id-for-cert-verification">{t("Verify.tokenId")}</label>
        <input
          type="number"
          id="token-id-for-cert-verification"
          placeholder="Enter token id"
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
        />
        <button style={{ marginTop: "50px" }} onClick={verify}>
        {t("Verify.Verify")}
        </button>
      </div>
    </div>
  );
};

export default Verify;
