import { useState, useContext, useEffect } from "react";
import {dNFtForStudent, issueApi, nonEssenCertissueApi } from "../../Scripts/apiCalls";
import UserContext from "../../../context/userContext/UserContext";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useTranslation } from "react-i18next";
import uploadIcon from "./uploadIcon.jpg";
import PanToolIcon from "@mui/icons-material/PanTool";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import { SketchPicker } from "react-color";
import QRCode from "react-qr-code";
import Draggable from "react-draggable";

const CertIssue = ({ setView } ) => {
  const user = useContext(UserContext);
  const [certNumber, setCertNumber] = useState(0);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscription, setIsSubscription] = useState(false);
  const [status, setStatus] = useState("");
  const [batchName, setBatchName] = useState("");
  const [batchDescription, setBatchDescription] = useState("");
  const [nft_image, setNft_image] = useState("");
  const [imageWidth, setImageWidth] = useState(100);
  const [imageHeight, setimageHeight] = useState(100);
  const [selectedImage, setSelectedImage] = useState(uploadIcon);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedVariables, setSelectedVariables] = useState([
    {
      name: "qrcode",
      height: "5",
      width: "30",
      x_pos: "0",
      y_pos: "0",
      color: "#000000",
      type: "qr",
    },
  ]);
  const [selectedVariablesData, setSelectedVariablesData] = useState([
    {
      name: "qrcode",
      height: "5",
      width: "30",
      x_pos: "50",
      y_pos: "50",
      color: "#000000",
      type: "qr",
    },
  ]);
  const { t } = useTranslation();

  useEffect(() => {
    setImageWidth(Math.min(window.innerWidth - 100, 700));

    try {
      setimageHeight(
        document.getElementById("cert-creator-preview").offsetHeight
      );
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
      request_type:"create_batch",
      account: user.userAccount,
      name: batchName,
      description: batchDescription,
      nft_image: nft_image,
      StudentsFile: uploadedFile,
      variables : JSON.stringify(selectedVariablesData),
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
      <h2>Create Your Batch</h2>

      <div style={{ width: "500px" }}>
        <label htmlFor="cert-number-input-for-issue">
          Batch Name
        </label>
        <input
          type="text"
          id="cert-number-input-for-issue"
          value={batchName}
          onChange={(e) => setBatchName(e.target.value)}
        />
        <label htmlFor="cert-number-input-for-issue">
          Batch Description
        </label>
        <input
          type="text"
          id="cert-number-input-for-issue"
          value={batchDescription}
          onChange={(e) => setBatchDescription(e.target.value)}
        />
        <label htmlFor="cert-number-input-for-issue">
          No. of Student 
        </label>
        <input
          type="number"
          id="cert-number-input-for-issue"
          value={certNumber}
          onChange={(e) => setCertNumber(e.target.value)}
        />
        <label htmlFor="cert-number-input-for-issue" >
          Upload NFT Image
        </label>
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
        }}
      >
        <img
          src={selectedImage}
          alt="Custom Template"
          width={imageWidth}
          style={{ top: "0px", left: "0px" }}
          id="cert-creator-preview"
          onClick={() => document.getElementById("image-selector").click()}
        />

        {selectedVariables.length > 0 &&
          selectedVariables.map((variable) => (
            <DragVariable
              variable={variable}
              selectedVariables={selectedVariables}
              selectedVariablesData={selectedVariablesData}
              setSelectedVariables={setSelectedVariables}
              setSelectedVariablesData={setSelectedVariablesData}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
              key={"variable-added-by-dragging-" + variable.name}
            />
          ))}
      </div>
        
    
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

const DragVariable = ({
  variable,
  selectedVariables,
  selectedVariablesData,
  setSelectedVariables,
  setSelectedVariablesData,
  imageWidth,
}) => {
  const [isColorPicker, setIsColorPicker] = useState(false);
  const [imageHeight, setimageHeight] = useState(100);

  const startingPositionX = 50 - parseFloat(variable.width) / 2 + "%";
  const startingPositionY = 50 - parseFloat(variable.height) + "%";

  useEffect(() => {
    console.log(imageHeight);
    console.log(
      -imageHeight / 2 + (parseFloat(variable.height) * imageHeight) / 200
    );
    console.log(
      imageHeight / 2 - (parseFloat(variable.height) * imageHeight) / 200
    );
    try {
      setimageHeight(
        document.getElementById("cert-creator-preview").offsetHeight
      );
      console.log(
        "Image height---",
        document.getElementById("cert-creator-preview").offsetHeight
      );
    } catch (err) {
      console.log("could not set height");
    }
  });

  const getTextHeight = (variableHeight) => {
    let fullheight = 200;
    try {
      fullheight = document.getElementById("cert-creator-preview").offsetHeight;
    } catch {
      fullheight = 200;
    }
    let textHeight = parseInt((fullheight * variableHeight) / 100) + "px";
    return textHeight;
  };

  const changeVariablePosition = (data) => {
    let x_pos =
      Math.round(
        (50 + (parseFloat(data.x) / parseFloat(imageWidth)) * 100) * 100
      ) / 100;
    let y_pos =
      Math.round(
        (50 + (parseFloat(data.y) / parseFloat(imageHeight)) * 100) * 100
      ) / 100;

    let newVariablesData = [];
    selectedVariablesData.map((myvariable) => {
      if (myvariable.name === variable.name) {
        myvariable["x_pos"] = x_pos;
        myvariable["y_pos"] = y_pos;
      }
      newVariablesData.push(myvariable);
    });
    setSelectedVariablesData(newVariablesData);
  };

  const changeVariableAttribute = (attributename, valueChange) => {
    let newVariables = [];
    selectedVariables.map((myvariable) => {
      if (myvariable.name === variable.name) {
        if (attributename === "color") {
          myvariable[attributename] = valueChange;
        } else {
          myvariable[attributename] =
            parseInt(myvariable[attributename]) + valueChange;
        }
      }
      newVariables.push(myvariable);
    });
    setSelectedVariables(newVariables);

    let newVariablesData = [];
    selectedVariablesData.map((myvariable) => {
      if (myvariable.name === variable.name) {
        if (attributename === "color") {
          myvariable[attributename] = valueChange;
        } else {
          myvariable[attributename] =
            parseInt(myvariable[attributename]) + valueChange;
        }
      }
      newVariablesData.push(myvariable);
    });
    setSelectedVariablesData(newVariablesData);
  };
  return (
    <Draggable
      handle="#handle"
      bounds={{
        left: -imageWidth / 2 + (parseFloat(variable.width) * imageWidth) / 200,
        top:
          -imageHeight / 2 + (parseFloat(variable.height) * imageHeight) / 200,
        right: imageWidth / 2 - (parseFloat(variable.width) * imageWidth) / 200,
        bottom:
          imageHeight / 2 - (parseFloat(variable.height) * imageHeight) / 200,
      }}
      onDrag={(e, data) => {
        changeVariablePosition(data);
      }}
    >
      <div
        style={{
          position: "absolute",
          top: startingPositionY,
          left: startingPositionX,
          width: variable.width + "%",
          height: variable.height + "%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "transparent",
            color: "transparent",
            padding: "20px",
            position: "relative",

            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              border: "1px solid black",
              borderRadius: "10px",
              color: "black",
            },
          }}
        >
          <div
            style={{
              color: variable.color,
              width: "100%",
              textAlign: "center",
              fontSize: getTextHeight(variable.height),
              display: "flex",
              padding: "0px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {variable.type === "text" && variable.name}
            {variable.type === "qr" && (
              <QRCode
                size={256}
                bgColor={"rgba(0, 0, 0, 0)"}
                fgColor={variable.color}
                style={{
                  width:
                    (parseFloat(variable.height) * imageHeight) / 100 + "px",
                  height:
                    (parseFloat(variable.height) * imageHeight) / 100 + "px",
                }}
                value={"https://bitmemoir.com/verify"}
              />
            )}
          </div>
          <div id="handle">
            <PanToolIcon
              sx={{ position: "absolute", bottom: "-5px", right: "-5px" }}
            />
          </div>
          <div style={{ position: "absolute", top: "-20px", left: "0px" }}>
            <TextIncreaseIcon
              fontSize="small"
              onClick={() => changeVariableAttribute("height", 1)}
            />
            <TextDecreaseIcon
              fontSize="small"
              onClick={() => changeVariableAttribute("height", -1)}
            />
            <FormatColorFillIcon
              fontSize="small"
              onClick={() => setIsColorPicker(!isColorPicker)}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "-20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <AddCircleOutlineIcon
              fontSize="small"
              onClick={() => changeVariableAttribute("width", 1)}
            />
            <RemoveCircleOutlineIcon
              fontSize="small"
              onClick={() => changeVariableAttribute("width", -1)}
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <HighlightOffIcon
              onClick={() => {
                const thisIndex = selectedVariables.indexOf(variable);
                console.log(thisIndex);
                let newVariables = [];
                let newVariablesData = [];
                selectedVariables.map((myVariable, index) => {
                  if (index !== thisIndex) {
                    newVariables.push(myVariable);
                  }
                  setSelectedVariables(newVariables);
                });
                selectedVariablesData.map((myVariable, index) => {
                  if (index !== thisIndex) {
                    newVariablesData.push(myVariable);
                  }
                  setSelectedVariablesData(newVariables);
                });
              }}
            />
          </div>
        </Box>
        {isColorPicker && (
          <SketchPicker
            color={variable.color}
            onChangeComplete={(color) => {
              changeVariableAttribute("color", color["hex"]);
            }}
          />
        )}
      </div>
    </Draggable>
  );
};