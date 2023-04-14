import "./education.css";
import SchoolIcon from "@mui/icons-material/School";
import WebIcon from "@mui/icons-material/Web";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useContext } from "react";
import Tooltip from "@mui/material/Tooltip";
import { useEffect } from "react";
import { templateApi,dNFtForStudent } from "../Scripts/apiCalls";
import UserContext from "../../context/userContext/UserContext";
import { useTranslation } from 'react-i18next'
import CertIssue from "./certIssue/certIssue";
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




const DNFTMainPage = ({ setView, certData, setCertData, }) => {
  const user = useContext(UserContext);
  const [isSidebar, setIsSidebar] = useState(true);
  const [isBatchCreator, setIsBatchCreator] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(certData);
  const [isMinting, setIsMinting] = useState(false);
  const [category, setCategory] = useState("Create New Batch");
  const [batchList, setBatchList] = useState([]);
  const [selectedBatch,setSelectedBatch] = useState({
    name:"",
    description:"",
    id:"",
    batch_nft_image:"",
  });
  const [nft_image,setNft_image] = useState("");
  const [studentList,setStudentList] = useState([]);
  const [status,setStatus] = useState("");
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

  useEffect(() => {
    
        dNFtForStudent({
        request_type: "read",
        account: user.userAccount,
      })
        .then((res) => {
          console.log("---------------------------------------");
          console.log(res);
          setBatchList(res);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [category,status]);
  
  

  const navbuttons = [
    {
      text: "Create New Batch",
      logo: (
        <div>
          <WebIcon />
        </div>
      ),
      category: "Create New Batch",
    },
    {
      text: "Update Batch",
      logo: (
        <div>
          <WorkspacePremiumIcon />
        </div>
      ),
      category: "Update Batch",
    },
    {
      text: "Batch List",
      logo: (
        <div>
          <WorkspacePremiumIcon />
        </div>
      ),
      category: "Batch List",
    }

  ];
  const selectImage = (file) => {
    setNft_image(file);
    setUploadedImage(file);
    let filereader = new FileReader();
    filereader.addEventListener("load", () => {
      setSelectedImage(filereader.result);
    });
    filereader.readAsDataURL(file);
  };

  const Sidebar = () => {
    const sidebarWidth = window.innerWidth > 800 ? "400px" : "250px";
    return (
      <div style={{ display: "flex", position: "relative" }}>
        <div style={{ width: "100px", backgroundColor: "var(--darkshade2)" }}>
          {navbuttons.map((nav) => (
            <div
              className="educationnavbutton"
              style={{
                height: "60px",
                width: "100px",
                minWidth: "100px",
                maxWidth: "100px",
              }}
              key={"education-sector-nav-button-" + nav["text"]}
              onClick={() => setCategory(nav["category"])}
            >
              {/* <Tooltip title={nav["text"]} placement="right-start">
                {nav["logo"]}
              </Tooltip> */}
              {nav["text"]}
            </div>
          ))}
        </div>
        <div
          className="educationsectorsidebar"
          style={{
            backgroundColor: "var(--darkshade1)",
            height: window.innerHeight - 50 + "px",
            width: category !=="Create New Batch" ? (isSidebar ? sidebarWidth : "0px") : "0px", 
            overflowY: "scroll",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <h4>Batch List</h4>
          </div>

          {category !== "Create New Batch"  &&<div
            className="educationnavbutton"
            style={{
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: "0px",
              right: "-50px",
              backgroundColor: "var(--darkshade1)",
              zIndex: 1,
            }}
            onClick={() => setIsSidebar(!isSidebar)}
          >
            {category !== "Create New Batch"  && (isSidebar ? "<" : ">")}
          </div>}

          <TemplateContainer />
          {/* <TemplateContainer subscription="free" />
          <TemplateContainer subscription="premium" /> */}
        </div>
      </div>
    );
  };

  const TemplateContainer = () => {

    

    return (
      <>
        <div
          style={{
            borderBottom: "1px solid white",
            padding: "10px",
          }}
        >
          {/* Batch List */}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {
            batchList.map((batch) => (
              <div style={{
                width: "100%",
                borderBottom: "1px solid white",
                fontSize: "20px",
                cursor: "pointer",
                paddingLeft:"30px",
                
              }}
              onClick={() => {
                setSelectedBatch(batch);
                dNFtForStudent({
                  request_type: "students",
                  account: user.userAccount,
                  batch_id: batch.id,
                })
                  .then((res) => {
                    console.log("---------------------------------------");
                    console.log(res);
                    setStudentList(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  }
                  );
              }}
              >{batch.name}</div>
            ))

          }

        </div>
      </>
    );
  };

  const MainPage = () => {
    const BASE_URL = "http://127.0.0.1:8000"
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: window.innerHeight - 50 + "px",
          overflowY: "scroll",
        }}
        className="educationmainpage"
      >
            {
            category === "Create New Batch" && (isBatchCreator ? (
              <CertIssue  />
            ) : (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button
                style={{
                  marginTop: "200px",
                }}
                  onClick={() => {
                    setIsBatchCreator(true);
                  }}
                  >
                  Create New Batch
                  </button>

              </div>))
            }
            {
              category ==="Update Batch" && 
              <div>
                <h2>Update Batch</h2>
                {
                  selectedBatch.name ==="" ? <h3>Please Select Batch.......</h3> :
                  <div>
                    <h4>Batch Name : {selectedBatch.name}</h4>
                    <h4>Batch Description : {selectedBatch.description}</h4>
                    <h4> Current Batch Image : </h4>
                    <div><img src={BASE_URL+selectedBatch.batch_nft_image} alt="Batch Image" width={imageWidth} /></div>

                    <label htmlFor="cert-number-input-for-issue"
                    style={{
                      marginTop: "50px",
                    }}
                     >
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
                    <button 
                    style={{
                      marginTop: "50px",
                    }}
                    onClick={() => {
                      setStatus("Updating Batch....");  
                      dNFtForStudent({
                        request_type: "update",
                        account: user.userAccount,
                        batch_id: selectedBatch.id,
                        nft_image: nft_image,
                        variables : JSON.stringify(selectedVariablesData),
                      }).then((res) => {
                        console.log("---------------------------------------");
                        console.log(res);
                        setStatus("Batch Updated Successfully");
                      }
                      ).catch((err) => {
                        console.log(err);
                      }
                      );


                    }}
                    >Update</button>
                    <p>{status}</p>
                  </div>
                }

              </div>
            }
            {
              category ==="Batch List" &&
              <div>
                <h2>Student List</h2>
                {
                  selectedBatch.name ==="" ? <h3>Please Select Batch.......</h3> :
                  <div>
                    <h4>Batch Name : {selectedBatch.name}</h4>
                    <div style={{
                          width: "100%",
                          borderBottom: "1px solid white",
                          fontSize: "20px",
                          cursor: "pointer",
                          paddingLeft:"30px",
                        }}
                        ><span>S.No </span> <span style={{marginLeft:"20px"}}>Wallet Address</span></div>
                    {
                      studentList.map((student,i) => (
                        <div style={{
                          width: "100%",
                          borderBottom: "1px solid white",
                          fontSize: "20px",
                          cursor: "pointer",
                          paddingLeft:"30px",
                        }}
                        ><span>{i+1}</span> <span pan style={{marginLeft:"50px"}}>{student.wallet_address}</span></div>
                      ))
                    }
                  </div>
                  

                      
                }
              </div>
            }
      </div>
    );
  };

  return (
    <div className="educationSector">
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <Sidebar />
        <MainPage />
      </div>
    </div>
  );
};

export default DNFTMainPage;



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