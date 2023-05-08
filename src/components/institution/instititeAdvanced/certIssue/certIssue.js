import { useState, useContext } from "react";
import { issueApi, nonEssenCertissueApi } from "../../../Scripts/apiCalls";
import UserContext from "../../../../context/userContext/UserContext";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Subscription from "../subscription/subscription";
import { useTranslation } from "react-i18next";
const CertIssue = ({ setView, certData, category }) => {
  const user = useContext(UserContext);
  const [certNumber, setCertNumber] = useState(0);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscription, setIsSubscription] = useState(false);
  const [status, setStatus] = useState("");
  const { t } = useTranslation();

  const download = function (data) {
    const blob = new Blob([data], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "template.csv");
    a.click();
  };

  const csvmaker = function (data) {
    const csvRows = [];
    const headers = data;
    csvRows.push(headers.join(","));
    Array(parseInt(certNumber))
      .fill(0)
      .map((_, i) => {
        console.log(i);
        csvRows.push(i + 1);
      });
    console.log(csvRows);
    return csvRows.join("\n");
  };

  const getCSV = async function () {
    const data = ["S.No."];
    certData.variables.map((variable) => {
      if (variable.type !== "qr") {
        data.push(variable.name);
      }
    });

    data.push("Recipient Address");
    data.push("Recipient Email (optional)");

    const csvdata = csvmaker(data);
    download(csvdata);
  };

  const uploadFile = () => {
    if (category === "non educational certificates") {
      setIsLoading(true);
      setStatus("Issuing certificates...");
      nonEssenCertissueApi({
        template_id: certData.id,
        file: uploadedFile,
        account: user.userAccount,
      })
        .then((res) => {
          if (res === "issued") {
            setStatus("Certificates issued successfully.");
          } else if (res === "pending approval") {
            setStatus("Certificate order sent for approval.");
          }
          user.poppulateUserData();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          alert("Something went wrong. Please check the data.");
        });
    } else {
      setIsLoading(true);
      setStatus("Issuing certificates...");
      issueApi({
        template_id: certData.id,
        file: uploadedFile,
        account: user.userAccount,
      })
        .then((res) => {
          if (res === "issued") {
            setStatus("Certificates issued successfully.");
          } else if (res === "pending approval") {
            setStatus("Certificate order sent for approval.");
          }
          user.poppulateUserData();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          alert("Something went wrong. Please check the data.");
        });
    }
  };

  const limitExceeded = certNumber > parseInt(user.userData.nft_quota);
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  console.log(date);
  const d = new Date(user.userData.subscription.end_Date);
  // const d = new Date();
  const end_date =
    d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  console.log(end_date);
  console.log(date > end_date);

  if (parseInt(user.userData.nft_quota) === 0)
    return <Subscription back={() => setView("education")} />;

  if (date > end_date)
    return <Subscription back={() => setView("education")} />;

  if (isSubscription)
    return <Subscription back={() => setIsSubscription(false)} />;

  if (isLoading) return <LoadingPage status={status} setView={setView} />;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{t("Institutions.certIssue.heading")}</h1>

      <div style={{ width: "500px" }}>
        <label htmlFor="cert-number-input-for-issue">
          {t("Institutions.certIssue.NoOfCert")}
        </label>
        <input
          type="number"
          id="cert-number-input-for-issue"
          value={certNumber}
          onChange={(e) => setCertNumber(e.target.value)}
        />
        {limitExceeded && (
          <div className="error">
            {t("Institutions.certIssue.certlmitexceed")} ={" "}
            {user.userData.nft_quota}
            <button onClick={() => setIsSubscription(true)}>
              {t("Institutions.certIssue.increaselmtBtn")}
            </button>
          </div>
        )}

        <h3>{t("Institutions.certIssue.uploadCSV")}</h3>
        <input
          type="file"
          onChange={(e) => {
            console.log(e.target.files[0]["name"]);
            setUploadedFile(e.target.files[0]);
            setUploadedFileName(e.target.files[0]["name"]);
          }}
        />
        <h3>
          {t("Institutions.certIssue.file")}: {uploadedFileName}
        </h3>
        <a
          style={{
            color: "white",
            cursor: "context-menu",
          }}
          onClick={() => getCSV()}
        >
          {t("Institutions.certIssue.downloadsCSV")}
        </a>
        {category === "educational certificates" && (
          <h4>{t("Institutions.certIssue.note")}</h4>
        )}
      </div>

      <div
        style={{
          width: "500px",
          margin: "50px 0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <button onClick={() => setView("education")}>{"< "} Back</button>
        <button
          onClick={() => {
            if (limitExceeded) {
              setIsSubscription(true);
              return;
            }
            uploadFile();
          }}
        >
          {t("Institutions.certIssue.nextbtn")} {" >"}
        </button>
      </div>
    </div>
  );
};

export default CertIssue;

const LoadingPage = ({ status, setView }) => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        margin: "auto",
      }}
    >
      {status === "Issuing certificates..." && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <h3>{status}</h3>
      {status === "Issuing certificates..." && (
        <h4>{t("Institutions.certIssue.headingCloseWindow")}</h4>
      )}
      {status !== "Issuing certificates..." && (
        <button onClick={() => setView("education")}>OK</button>
      )}
    </div>
  );
};
