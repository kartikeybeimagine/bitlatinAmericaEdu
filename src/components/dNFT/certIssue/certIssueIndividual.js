import { useState, useContext, useEffect } from "react";
import {
  dNFtForStudent,
  issueApi,
  nonEssenCertissueApi,
} from "../../Scripts/apiCalls";
import UserContext from "../../../context/userContext/UserContext";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useTranslation } from "react-i18next";
import uploadIcon from "./uploadIcon.jpg";
import QRCode from "react-qr-code";
import Slider from "@mui/material/Slider";

const CertIssueIndividual = ({ category, setCategory, setIsBatchCreator}) => {
  const user = useContext(UserContext);
  const [certNumber, setCertNumber] = useState(0);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscription, setIsSubscription] = useState(false);
  const [status, setStatus] = useState("");
  const [walletaddress, setWalletaddress] = useState("");
  const [batchDescription, setBatchDescription] = useState("");
  const [nft_image, setNft_image] = useState("");
  const [imageWidth, setImageWidth] = useState(100);
  const [imageHeight, setimageHeight] = useState(100);
  const [selectedImage, setSelectedImage] = useState(uploadIcon);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [qrXPos, setQrXPos] = useState(10);
  const [qrYPos, setQrYPos] = useState(10);

  const { t } = useTranslation();

  useEffect(() => {
    setImageWidth(Math.min(window.innerWidth - 100, 700));

    try {
      // setimageHeight(
      //   document.getElementById("cert-creator-preview").offsetHeight
      // );
      const element = document.getElementById("cert-creator-preview");
      if (element) {
        const height = element.offsetHeight;
        setimageHeight(height);
      } else {
        console.log('Element not found');
      }
    } catch (err) {
      console.log(err);
    }
  });
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
    data.push("Recipient Address");
    data.push("Recipient Email (optional)");

    const csvdata = csvmaker(data);
    download(csvdata);
  };

  const uploadFile = () => {
    setIsLoading(true);
    setStatus("Issuing certificates...");
    dNFtForStudent({
      request_type: "create_individual",
      account: user.userAccount,
      name: walletaddress,
      description: batchDescription,
      nft_image: nft_image,
      x_pos: qrXPos,
      y_pos: qrYPos,
    })
      .then((res) => {
        if (res === "issued") {
          setStatus("Dynamic certificates issued successfully.");
          alert("Dynamic certificates issued successfully.");
          // alert("Order has been submitted Please check in Few Minute.");
          // window.location.reload();
        } else if (res === "pending approval") {
          setStatus("Certificate order sent for approval.");
          alert("Certificate order sent for approval.");
          // window.location.reload();
        }
        user.poppulateUserData();
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsBatchCreator(false);
        setBatchDescription("");
        setWalletaddress("");
        setNft_image("");
        setSelectedImage(uploadIcon);
        
        // alert("Something went wrong. Please try again.");
        console.log(err);
      });
  };

  const selectImage = (file) => {
    setNft_image(file);
    setUploadedImage(file);
    let filereader = new FileReader();
    filereader.addEventListener("load", () => {
      setSelectedImage(filereader.result);
    });
    filereader.readAsDataURL(file);
  };

  if (isLoading) return <LoadingPage status={status} category={category} setCategory={setCategory} setIsLoading={setIsLoading} setWalletaddress={setWalletaddress} setBatchDescription={setBatchDescription} setSelectedImage={setSelectedImage} setUploadedFileName={setUploadedFileName} setIsBatchCreator={setIsBatchCreator}/>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Create NFT</h2>

      <div style={{ width: "500px" }}>
        <label htmlFor="cert-number-input-for-issue">Wallet Address</label>
        <input
          type="text"
          id="cert-number-input-for-issue"
          value={walletaddress}
          onChange={(e) => setWalletaddress(e.target.value)}
        />
        <label htmlFor="cert-number-input-for-issue">NFT Description</label>
        <input
          type="text"
          id="cert-number-input-for-issue"
          value={batchDescription}
          onChange={(e) => setBatchDescription(e.target.value)}
        />
        {/* <label htmlFor="cert-number-input-for-issue">No. of Student</label>
        <input
          type="number"
          id="cert-number-input-for-issue"
          value={certNumber}
          onChange={(e) => setCertNumber(e.target.value)}
        /> */}
        <label htmlFor="cert-number-input-for-issue">Upload NFT Image</label>
        <input
          type="file"
          id="image-selector"
          style={{ display: "none" }}
          onChange={(e) => selectImage(e.target.files[0])}
        />
        <div
          style={{
            width: imageWidth.toString() + "px",
            position: "relative",
            marginBottom: "50px",
          }}
        >
          <img
            src={selectedImage}
            alt="Custom Template"
            width={imageWidth.toString() + "px"}
            style={{ top: "0px", left: "0px" }}
            id="cert-creator-preview"
            onClick={() => document.getElementById("image-selector").click()}
          />
          <QRCode
            size={256}
            bgColor={"rgba(0, 0, 0, 0)"}
            fgColor={"rgba(0, 0, 0, 1)"}
            style={{
              width: (parseFloat(imageWidth) * 0.1).toString() + "px",
              height: (parseFloat(imageWidth) * 0.1).toString() + "px",
              position: "absolute",
              left: qrXPos + "%",
              top: qrYPos + "%",
            }}
            value={"https://bitmemoirlatam.com/#/verify/"}
          />
          <Slider
            defaultValue={10}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={(e) => setQrXPos(e.target.value)}
            color="secondary"
            sx={{
              position: "absolute",
              bottom: "-30px",
              left: "0px",
            }}
          />
          <Slider
            defaultValue={90}
            aria-label="Default"
            valueLabelDisplay="auto"
            orientation="vertical"
            color="secondary"
            onChange={(e) => setQrYPos(100 - e.target.value)}
            sx={{
              position: "absolute",
              top: "0px",
              right: "-30px",
              height: imageHeight,
            }}
          />
        </div>
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
        <button
          onClick={() => {
            uploadFile();
          }}
        >
          {t("Institutions.certIssue.nextbtn")} {" >"}
        </button>
      </div>
    </div>
  );
};

export default CertIssueIndividual;

const LoadingPage = ({ status, category,setCategory,setIsLoading,setWalletaddress,setBatchDescription,setSelectedImage,setUploadedFileName,setIsBatchCreator}) => {
  const { t } = useTranslation();
  console.log("category", category)
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
      {/* {status === "Issuing certificates..." && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )} */}
      <h3>{status}</h3>
      {status === "Issuing certificates..." && (
        <div>
          <h4>Order has been submitted Please check in Few Minute.</h4>
        <h4>{t("Institutions.certIssue.headingCloseWindow")}</h4>
        <button onClick={() => {
          { 
            // window.location.reload();
            // setCategory("Create New Batch");
            // console.log(status)
            // setIsLoading(false);
            setIsBatchCreator(false);
            // setWalletaddress("")
            // setBatchDescription("")
            // setSelectedImage(uploadIcon);
            // setUploadedFileName("");
          }
        }}>OK</button>
        </div>
        
      )}
      {status !== "Issuing certificates..." && (
        <button onClick={() => {
          { 
            window.location.reload();
            setCategory("Create New Batch");
            setIsLoading(false)
            console.log("setCategory", setCategory)
          }
        }}>OK</button>
      )}
    </div>
  );
};
