import "./education.css";
import WebIcon from "@mui/icons-material/Web";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useState, useContext } from "react";
import Tooltip from "@mui/material/Tooltip";
import { useEffect } from "react";
import { templateApi, dNFtForStudent } from "../Scripts/apiCalls";
import UserContext from "../../context/userContext/UserContext";
import { useTranslation } from "react-i18next";
import CertIssueIndividual from "./certIssue/certIssueIndividual";
import uploadIcon from "./uploadIcon.jpg";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ReplayIcon from "@mui/icons-material/Replay";
import QRCode from "react-qr-code";
import Slider from "@mui/material/Slider";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

const Individualdnft = () => {
  const user = useContext(UserContext);
  const [isSidebar, setIsSidebar] = useState(true);
  const [isBatchCreator, setIsBatchCreator] = useState(false);
  const [category, setCategory] = useState("Create New NFT");
  const [batchList, setBatchList] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState({
    name: "",
    description: "",
    id: "",
    batch_nft_image: "",
  });
  const [selectednft, setSelectednft] = useState({
    wallet_address: "",
    description: "",
    id: "",
    batch_nft_image: "",
  });
  const [nft_image, setNft_image] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageWidth, setImageWidth] = useState(100);
  const [imageHeight, setimageHeight] = useState(100);
  const [selectedImage, setSelectedImage] = useState(uploadIcon);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [qrXPos, setQrXPos] = useState(10);
  const [qrYPos, setQrYPos] = useState(10);
  const { t } = useTranslation();
  const [individuallst, setIndividuallst] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setImageWidth(Math.min(window.innerWidth - 100, 700));

    try {
      const element = document.getElementById("cert-creator-preview");
      if (element) {
        const height = element.offsetHeight;
        setimageHeight(height);
      } else {
        console.log('Element not found');
      }
      // setimageHeight(
      //   document.getElementById("cert-creator-preview").offsetHeight
      // );
    } catch (err) {
      console.log(err);
    }
  });

  useEffect(() => {
    console.log("useEffect called>>>>>>>>>>>>>>");
    setIsLoading(true);
    dNFtForStudent({
      request_type: "read1",
      account: user.userAccount,
    })
      .then((res) => {
        console.log("---------------------------------------");
        console.log(res);
        // setBatchList(res);
        setIndividuallst(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  },[isUpdate,isBatchCreator]);


  // console.log(individuallst);
  const navbuttons = [
    {
      text: "Create New NFT",
      logo: (
        <div>
          <WebIcon />
        </div>
      ),
      category: "Create New NFT",
    },
    {
      text: "Update NFT",
      logo: (
        <div>
          <WorkspacePremiumIcon />
        </div>
      ),
      category: "Update NFT",
    },
    {
      text: "NFT List",
      logo: (
        <div>
          <WorkspacePremiumIcon />
        </div>
      ),
      category: "NFT List",
    },
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
              {nav["text"]}
            </div>
          ))}
        </div>
        <div
          className="educationsectorsidebar"
          style={{
            backgroundColor: "var(--darkshade1)",
            height: window.innerHeight - 50 + "px",
            width:
              category === "Update NFT"
                ? isSidebar
                  ? sidebarWidth
                  : "0px"
                : "0px",
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
            <h4>NFT List</h4>
          </div>

          {category == "Update NFT" && (
            <div
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
              {category !== "Create New NFT" && (isSidebar ? "<" : ">")}
            </div>
          )}

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
          {/* NFT List */}
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
          {individuallst.map((individual) => (
            <div
              style={{
                width: "100%",
                borderBottom: "1px solid white",
                fontSize: "14px",
                cursor: "pointer",
                paddingLeft: "30px",
              }}
              key={"education-sector-" + individual.id}
              onClick={() => {
                setSelectednft(individual);
                // dNFtForStudent({
                //   request_type: "students",
                //   account: user.userAccount,
                //   batch_id: batch.id,
                // })
                //   .then((res) => {
                //     console.log("---------------------------------------");
                //     console.log(res);
                //     setStudentList(res);
                //   })
                //   .catch((err) => {
                //     console.log(err);
                //   });
              }}
            >
              {individual.wallet_address}
            </div>
          ))}
        </div>
      </>
    );
  };

  const MainPage = () => {
    const BASE_URL = "http://bitmemoirlatam";
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
        {category === "Create New NFT" &&
          (isBatchCreator ? (
            <CertIssueIndividual 
            setCategory={setCategory}
            />
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
                Create New NFT
              </button>
            </div>
          ))}
        {category === "Update NFT" && (
          <div>
            <h2>Update NFT</h2>
            {selectedBatch.name === "" ? (
              <h3>Please Select Batch.......</h3>
            ) : (
              <div>
                <h4>Batch Name : {selectedBatch.name}</h4>
                <h4>Batch Description : {selectedBatch.description}</h4>
                <h4> Current Batch Image : </h4>
                <div
                  style={{
                    width: imageWidth.toString() + "px",
                    position: "relative",
                    marginBottom: "50px",
                  }}
                >
                  <img
                    src={selectedBatch.batch_nft_image}
                    alt="Batch Image"
                    width={imageWidth}
                  />
                  <QRCode
                    size={256}
                    bgColor={"rgba(0, 0, 0, 0)"}
                    fgColor={"rgba(0, 0, 0, 1)"}
                    style={{
                      width: (parseFloat(imageWidth) * 0.1).toString() + "px",
                      height: (parseFloat(imageWidth) * 0.1).toString() + "px",
                      position: "absolute",
                      left: 10 + "%",
                      top: 10 + "%",
                    }}
                    value={"https://bitmemoirlatam.com/#/verify/"}
                  />
                </div>

                <label
                  htmlFor="cert-number-input-for-issue"
                  style={{
                    marginTop: "50px",
                  }}
                >
                  Upload New NFT Image
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
                    marginBottom: "50px",
                  }}
                >
                  <img
                    src={selectedImage}
                    alt="Custom Template"
                    width={imageWidth}
                    style={{ top: "0px", left: "0px" }}
                    id="cert-creator-preview"
                    onClick={() =>
                      document.getElementById("image-selector").click()
                    }
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
                    })
                      .then((res) => {
                        console.log("---------------------------------------");
                        console.log(res);
                        setStatus("Batch Updated Successfully");
                        alert("Batch Updated Successfully");
                        
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  Update
                </button>
                <p>{status}</p>
              </div>
            )}
          </div>
        )}
        {category === "NFT List" && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h2>Student List</h2>
            {selectedBatch.name === "" ? (
              <h3>Please Select Batch.......</h3>
            ) : (
              <div>
                <h4>Batch Name : {selectedBatch.name}</h4>
                <StudentsView students={selectedBatch.students} />
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  if (isLoading) return <LoadingPage status={status} />;

  return (
    <div className="educationSector">
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <Sidebar />
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
          {category === "Create New NFT" &&
            (isBatchCreator ? (
              <CertIssueIndividual 
              setCategory={setCategory}
              category={category}
              setIsBatchCreator={setIsBatchCreator}
              
              />
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
                  Create New NFT
                </button>
              </div>
            ))}
          {category === "Update NFT" && (
            <div>
              <h2>Update NFT</h2>
              {selectednft.wallet_address === "" ? (
                <h3>Please Select NFT.......</h3>
              ) : (
                <div>
                  <h4>Wallet Address : {selectednft.wallet_address}</h4>
                  {/* <h4>Batch Description : {individuallst.description}</h4> */}
                  <h4> Current Batch Image : </h4>
                  <div
                    style={{
                      width: imageWidth.toString() + "px",
                      position: "relative",
                      marginBottom: "50px",
                    }}
                  >
                    <img
                      src={"http://localhost:8000"+selectednft.nft_image}
                      alt="Batch Image"
                      width={imageWidth}
                    />
                  </div>

                  <label
                    htmlFor="cert-number-input-for-issue"
                    style={{
                      marginTop: "50px",
                    }}
                  >
                    Upload New NFT Image
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
                      marginBottom: "50px",
                    }}
                  >
                    <img
                      src={selectedImage}
                      alt="Custom Template"
                      width={imageWidth}
                      style={{ top: "0px", left: "0px" }}
                      id="cert-creator-preview"
                      onClick={() =>
                        document.getElementById("image-selector").click()
                      }
                    />
                    <QRCode
                      size={256}
                      bgColor={"rgba(0, 0, 0, 0)"}
                      fgColor={"rgba(0, 0, 0, 1)"}
                      style={{
                        width: (parseFloat(imageWidth) * 0.1).toString() + "px",
                        height:
                          (parseFloat(imageWidth) * 0.1).toString() + "px",
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
                  <button
                    style={{
                      marginTop: "50px",
                    }}
                    onClick={() => {
                      // setStatus("Updating Batch....");
                      setIsLoading(true);
                      dNFtForStudent({
                        request_type: "update_nft",
                        account: user.userAccount,
                        token_id: selectednft.token_id,
                        nft_image: nft_image,
                        x_pos: qrXPos,
                        y_pos: qrYPos,
                      })
                        .then((res) => {
                          console.log(
                            "---------------------------------------"
                          );
                          console.log(res);
                          // setStatus("Batch Updated Successfully");
                          setIsLoading(false);
                          setIsUpdate(true);
                          alert("Batch Updated Successfully");
                          setSelectednft({
                            wallet_address: "",
                            description: "",
                            id: "",
                            batch_nft_image: "",
                          });
                          // setSelectednft(selectednft);
                          // window.location.reload();
                          setSelectedImage(uploadIcon);

                        })
                        .catch((err) => {
                          console.log(err);
                          setIsLoading(false);
                          setStatus("Errored. please try again.");
                          alert("Something went wrong. Please try again.");
                        });
                    }}
                  >
                    Update
                  </button>
                  <p>{status}</p>
                </div>
              )}
            </div>
          )}
          {category === "NFT List" && (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h2>Student List</h2>
              {/* {selectedBatch.name === "" ? (
                <h3>Please Select Batch.......</h3>
              ) : ( */}
                <div>
                  {/* <h4>Batch Name : {selectedBatch.name}</h4> */}
                  <StudentsView students={individuallst} />
                </div>
              {/* )} */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Individualdnft;

const StudentsView = (students) => {
  const user = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "10px",
          width: "100%",
          borderBottom: "1px solid white",
        }}
      >
        <div>S.No.</div>
        <div>Address</div>
        <div>Status</div>
        <div>Token Id</div>
        <div>NFT</div>
      </div>

      {students?.students?.map((student, index) => (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "10px",
            width: "100%",
          }}
          key={"student-list-" + index}
        >
          <div>{index + 1}</div>
          <div>{shorterAddress(student.wallet_address)}</div>
          <div>{student.is_minted ? "Issued" : "Pending"}</div>
          <div>{student.is_minted ? student.token_id : "-"}</div>
          <div>
            {student.is_minted ? (
              <OpenInNewIcon onClick={() => window.open("http://localhost:8000"+student.nft_image)} />
            ) : (
              "-"
            )}
          </div>
          <div>
            {!student.is_minted && (
              <>
                {isLoading ? (
                  <CircularProgress fontSize="small" />
                ) : (
                  <ReplayIcon
                    onClick={() => {
                      setIsLoading(true);
                      dNFtForStudent({
                        request_type: "retry",
                        account: user.userAccount,
                        student_id: student.id,
                      })
                        .then((res) => {
                          console.log(
                            "---------------------------------------"
                          );
                          console.log(res);
                          setIsLoading(false);
                          alert("Student NFT issued Successfully");
                          window.location.reload();
                        })
                        .catch((err) => {
                          console.log(err);
                          setIsLoading(false);
                          alert("Something went wrong. Please try again.");
                        });
                    }}
                  />
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const shorterAddress = (address) => {
  const firstPart = address.slice(0, 5);
  const secondPart = address.slice(address.length - 4, address.length - 1);
  return firstPart + "..." + secondPart;
};

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
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <h3>{status}</h3>
    </div>
  );
};
