import { useState } from "react";
import UserContext from "../../context/userContext/UserContext";
import { useContext } from "react";
import { userApi } from "../Scripts/apiCalls";

const KycScript = (setForm) => {
  const user = useContext(UserContext);
  const [status, setStatus] = useState("");
  const [isuploading, setisuploading] = useState(false);
  const [name, setName] = useState(user.userData.name);
  const [description, setdescription] = useState(user.userData.description);
  const [website, setwebsite] = useState(user.userData.website);
  const [email, setemail] = useState(user.userData.email);
  const [contact, setcontact] = useState(parseInt(user.userData.contact));
  const [regId, setregId] = useState(user.userData.regId);
  const [idProof, setidProof] = useState("");
  const [approvers, setApprovers] = useState(user.userData.approvers);
  const [issuerName, setIssuerName] = useState("");
  const [issuerLastName, setIssuerLastName] = useState("");
  const [country, setcountry] = useState("");
  const [issuerJobDesignation, setIssuerJobDesignation] = useState("");
  const [idProofApprovers, setIdProofApprovers] = useState("");
  const [noteSignByHigherAuth, setNoteSignByHigherAuth] = useState("");
  const [approversDocument, setApproversDocument] = useState([]);

  const handleSubmit = () => {
    setStatus("");
    if (!checkForEmptyData()) return;
    else {
      uploadData();
    }
  };

  const checkForEmptyData = () => {
    if (
      name === "" ||
      website === "" ||
      email === "" ||
      contact === "" ||
      idProof === ""||
      approvers===""||
      approversDocument ===[]||
      issuerName === "" ||
      issuerLastName === "" ||
      country === "" ||
      issuerJobDesignation === "" ||
      idProofApprovers === "" ||
      noteSignByHigherAuth === ""||
      contact===""
      
    ){

    
      setStatus("* marked fields are required.");
      return false;
    }else if(approversDocument.length>3) {
      setStatus("Maximum 3 approvers are allowed.");
      return false;
    } else {
      return true;
    }
  };

  const uploadData = () => {
    if (approversDocument.length===1){
      approversDocument.push(
          {
            idProofApprovers: "",
          },
          {
            idProofApprovers: "",
          }
      )
    }else if(approversDocument.length===2){
      approversDocument.push(
        {
          idProofApprovers: "",
        }
    )
  }
    setisuploading(true);
    userApi({
      account: user.userAccount,
      name: name,
      description: description,
      country: country,
      issuerName: issuerName,
      issuerLastName: issuerLastName,
      issuerDesignation: issuerJobDesignation,
      website: website,
      email: email,
      contact: contact,
      regId: regId,
      idProof: idProof,
      approvers: JSON.stringify(approvers),
      idProofApprovers1: approversDocument[0]["idProofApprovers"],
      idProofApprovers2: approversDocument[1]["idProofApprovers"],
      idProofApprovers3: approversDocument[2]["idProofApprovers"],
      noteSignByHigherAuth: noteSignByHigherAuth,
    })
      .then(async (res) => {
        setisuploading(false);
        setStatus("Submitted Successfully.");
        await user.poppulateUserData();
        setForm(false);
      })
      .catch((err) => {
        setisuploading(false);
        setStatus("Something went wrong. Please try again.");
      });
  };


  return {
    status,
    isuploading,
    name,
    setName,
    description,
    setdescription,
    website,
    setwebsite,
    email,
    setemail,
    contact,
    setcontact,
    regId,
    setregId,
    idProof,
    setidProof,
    handleSubmit,
    approvers,
    setApprovers,
    issuerName,
    setIssuerName,
    country,
    setcountry,
    issuerJobDesignation,
    setIssuerJobDesignation,
    idProofApprovers,
    setIdProofApprovers,
    noteSignByHigherAuth,
    setNoteSignByHigherAuth,
    approversDocument,
    setApproversDocument,
    issuerLastName,
    setIssuerLastName,
    
  };
};

export default KycScript;
