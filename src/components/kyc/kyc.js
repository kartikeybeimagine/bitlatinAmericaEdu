import "../individual/Individual.css";
import { useState } from "react";
import { KYCform } from "./KYCform";
import { useContext } from "react";
import UserContext from "../../context/userContext/UserContext";
import { useTranslation } from "react-i18next";

const KYC = () => {
  const user = useContext(UserContext);
  const [isform, setForm] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="individualpage">
      {isform ? (
        <KYCform setForm={setForm} />
      ) : (
        <>
          {user.userData.status === "unverified" && (
            <>
              <h2>{t("kycPage.kycStatus.notCompleted")}</h2>
              <button onClick={() => setForm(true)}>{t("kycPage.kycStatus.startkyc")}</button>
            </>
          )}
          {user.userData.status === "in_progress" && (
            <>
              <h2>{t("kycPage.kycStatus.in_progress.heading")}</h2>
              <h3>{t("kycPage.kycStatus.in_progress.heading1")}</h3>
              <h3>{t("kycPage.kycStatus.in_progress.heading2")}</h3>
            </>
          )}
          {user.userData.status === "Approved" && (
            <>
              <h2>{t("kycPage.kycStatus.approved")}</h2>
            </>
          )}
          {user.userData.status === "Rejected" && (
            <>
              <h2>{t("kycPage.kycStatus.rejected.heading")}</h2>
              <h3>{t("kycPage.kycStatus.rejected.heading1")} {user.userData.comment}</h3>
              <h3>{t("kycPage.kycStatus.rejected.heading2")}</h3>
              <h3>{t("kycPage.kycStatus.rejected.heading3")}</h3>
              <button onClick={() => setForm(true)}>{t("kycPage.kycStatus.rejected.restartkyc")}</button>
            </>
          )}
          {user.userData.status === "Revoked" && (
            <>
              <h2>{t("kycPage.kycStatus.revoked.heading")}</h2>
              <h3>{t("kycPage.kycStatus.revoked.heading1")}{user.userData.comment}</h3>
              <h3>{t("kycPage.kycStatus.revoked.heading2")}</h3>
              <h3>{t("kycPage.kycStatus.revoked.heading3")}</h3>
              <button onClick={() => setForm(true)}>{t("kycPage.kycStatus.rejected.restartkyc")}</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default KYC;
