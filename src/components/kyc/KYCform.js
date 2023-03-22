import KycScript from "./kycScript";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import { Button } from "@mui/material";
import {fileDownload} from "../Scripts/tools";
import { useTranslation } from "react-i18next";
import EnglishSampleForm from "./assets/BitSampleNote.docx";
import SpanishSampleForm from "./assets/BitSampleNota.docx";
import PortugueseSampleForm from "./assets/BitSampleNote.docx";
import i18next from 'i18next'

export const KYCform = (props) => {
  const [approverDialog, setApproverDialog] = useState(false);
  const {t} = useTranslation();

  let downloadNote;
  if(i18next.language === "en"){
    downloadNote = EnglishSampleForm;
  }else if(i18next.language === "es"){
    downloadNote = SpanishSampleForm;
  }else if(i18next.language === "pt"){
    downloadNote = PortugueseSampleForm;
  }

  const {
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

  } = KycScript(props.setForm);

  return (
    <div className="individualpage">
      <div className="individualformcontainer">
        <h1>{t("kycPage.kycForm.heading")}</h1>
        <label htmlFor="name">{t("kycPage.kycForm.nameLabel")}</label>
        <input
          type="text"
          id="name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder={t("kycPage.kycForm.namePlaceholder")}
        />
        <label htmlFor="name">{t("kycPage.kycForm.desciptionLabel")}</label>
        <input
          type="text"
          id="name"
          value={description}
          name="description"
          onChange={(e) => setdescription(e.target.value)}
          placeholder={t("kycPage.kycForm.desciptionPlaceholder")}
        />
        <label htmlFor="email">{t("kycPage.kycForm.countryLabel")}</label>
        <input 
          type="text"
          id="email"
          value={country}
          name="country"
          placeholder={t("kycPage.kycForm.countryPlaceholder")}
          onChange={(e) => setcountry(e.target.value)}
        />
        <label htmlFor="email">{t("kycPage.kycForm.officialWebsiteLabel")}</label>
        <input
          type="email"
          id="email"
          value={website}
          name="website"
          placeholder={t("kycPage.kycForm.officialWebsitePlaceholder")}
          onChange={(e) => setwebsite(e.target.value)}
        />
        <h4 
        style={{
          color: "#fff",
          fontSize: "1.2rem",
          fontWeight: "500",
          marginTop: "2rem",
          textDecoration: "underline",
        }}
        >{t("kycPage.kycForm.subheading")}</h4>
        <label htmlFor="Official website">{t("kycPage.kycForm.nameOfissuerLabel")}</label>
        <input
          type="text"
          id="phone_num"
          value={issuerName}
          name="name"
          placeholder={t("kycPage.kycForm.nameOfissuerPlaceholder")}
          onChange={(e) => setIssuerName(e.target.value)}
        />
        <label htmlFor="Official website">{t("kycPage.kycForm.lastnameOfissuerLabel")}</label>
        <input
          type="text"
          id="phone_num"
          value={issuerLastName}
          name="name"
          placeholder={t("kycPage.kycForm.lastnameOfissuerPlaceholder")}
          onChange={(e) => setIssuerLastName(e.target.value)}
        />
        <label htmlFor="Official website">{t("kycPage.kycForm.designationOfissuerLabel")}</label>
        <input
          type="text"
          id="phone_num"
          value={issuerJobDesignation}
          name="name"
          placeholder={t("kycPage.kycForm.designationOfissuerPlaceholder")}
          onChange={(e) => setIssuerJobDesignation(e.target.value)}
        />
        <label htmlFor="Official website">{t("kycPage.kycForm.officialEmailLabel")}</label>
        <input
          type="text"
          id="phone_num"
          value={email}
          name="email"
          placeholder={t("kycPage.kycForm.officialEmailPlaceholder")}
          onChange={(e) => setemail(e.target.value)}
        />
        <label htmlFor="website">{t("kycPage.kycForm.officialPhoneLabel")}</label>
        <input
          type="number"
          id="website"
          name="phone"
          value={contact}
          placeholder={t("kycPage.kycForm.officialPhonePlaceholder")}
          onChange={(e) => setcontact(e.target.value)}
        />
        {/* <label htmlFor="website">CIN*</label>
        <input
          type="text"
          id="website"
          name="CIN"
          value={regId}
          placeholder="CIN"
          onChange={(e) => setregId(e.target.value)}
        /> */}
        <label htmlFor="fileselectorinput">
          {t("kycPage.kycForm.idProofOfRepresentativeLabel")}
        </label>
        {idProof.name}
        <input
          type="file"
          id="fileselectorinput"
          onChange={(e) => {
            setidProof(e.target.files[0]);
          }}
        />
        <h4 
        style={{
          color: "#fff",
          fontSize: "1.2rem",
          fontWeight: "500",
          marginTop: "2rem",
          //underLine
          textDecoration: "underline",
        }}
        >{t("kycPage.kycForm.subheadingnote")}</h4>
        <label htmlFor="fileselectorinput">
            {t("kycPage.kycForm.Upload_the_Note")}
            </label>
            {noteSignByHigherAuth.name}
        <input
            type="file"
            id="fileselectorinput"
            onChange={(e) => {
              setNoteSignByHigherAuth(e.target.files[0]);
             }}
          />
        <p>{t("kycPage.kycForm.Sample_Form")} </p>
        { i18next.language === 'en' &&
        <a
          // href="https://docs.google.com/document/d/1G1HBTYJRi643Kf2c2BfqRzS0Kc-AW7pJ/edit?usp=sharing&ouid=115709414771697699891&rtpof=true&sd=true"
          href={EnglishSampleForm}
          style={{
            color: "white",
            cursor: "context-menu",
          }}
          // onClick={() => getCSV()}
          download
        >
          {t("kycPage.kycForm.download")} 
        </a>}
        { i18next.language === 'sp' &&
        <a
          // href="https://docs.google.com/document/d/1G1HBTYJRi643Kf2c2BfqRzS0Kc-AW7pJ/edit?usp=sharing&ouid=115709414771697699891&rtpof=true&sd=true"
          href={SpanishSampleForm}
          style={{
            color: "white",
            cursor: "context-menu",
          }}
          // onClick={() => getCSV()}
          download
        >
          {t("kycPage.kycForm.download")} 
        </a>}
        { i18next.language === 'pt' &&
        <a
          // href="https://docs.google.com/document/d/1G1HBTYJRi643Kf2c2BfqRzS0Kc-AW7pJ/edit?usp=sharing&ouid=115709414771697699891&rtpof=true&sd=true"
          href={PortugueseSampleForm}
          style={{
            color: "white",
            cursor: "context-menu",
          }}
          // onClick={() => getCSV()}
          download
        >
          {t("kycPage.kycForm.download")} 
        </a>}

        

        <div
          style={{
            marginTop: "20px",
            border: "1px solid white",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {t("kycPage.kycForm.add_approving_authority")}
          <h5>
            {t("kycPage.kycForm.add_approving_authority_heading")}
          </h5>
          {approvers?.map((person, index) => (
            <div
              key={"approver-" + person.email}
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 3fr 1fr",
                alignItems: "center",
                borderBottom: "1px solid black",
                margin: "10px 0px",
                padding: "10px 0px",
              }}
            >
              {index + 1}.
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr",
                  }}
                >
                  {t("kycPage.kycForm.approve_authority_name")}
                  <span>{person.name}</span>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr",
                  }}
                >
                  {t("kycPage.kycForm.approve_authority_Designation")}
                  <span>{person.designation}</span>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr",
                  }}
                >
                 {t("kycPage.kycForm.approve_authority_email")}
                  <span>{person.email}</span>
                </div>
              </div>
              <button
                onClick={() =>
                  setApprovers((prev) => {
                    let newArray = [];
                    prev.map((app, i) => {
                      if (i !== index) {
                        newArray.push(app);
                      }
                    });
                    return newArray;
                  })
                }
              >
                {t("kycPage.kycForm.remove")}
              </button>
            </div>
          ))}
          <button onClick={() => setApproverDialog(true)}>{t("kycPage.kycForm.add_approver")}</button>
        </div>

        <div className="status">{status}</div>
        {isuploading ? (
          <button>{t("kycPage.kycForm.uploading")}</button>
        ) : (
          <button
            onClick={handleSubmit}
            style={{
              background: "var(--secondary)",
              color: "var(--primary)",
            }}
          >
            {t("kycPage.kycForm.submit")}
          </button>
        )}
      </div>
      <Dialog onClose={() => setApproverDialog(false)} open={approverDialog}>
        <div
          style={{
            padding: "40px",
            background: "var(--primary)",
            color: "var(--secondary)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <h2>{t("kycPage.kycForm.add_approver")}</h2>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
            }}
          >
            <label htmlFor="add-approver-name">{t("kycPage.kycForm.approve_authority_name")} : </label>
            <input type="text" id="add-approver-name" />
          </div>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
            }}
          >
            <label htmlFor="add-approver-last-name">{t("kycPage.kycForm.approve_authority_lastname")}: </label>
            <input type="text" id="add-approver-last-name" />
          </div>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
            }}
          >
            <label htmlFor="add-approver-designation">{t("kycPage.kycForm.approve_authority_Designation")} </label>
            <input type="text" id="add-approver-designation" />
          </div>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
            }}
          >
            <label htmlFor="add-approver-email">{t("kycPage.kycForm.approve_authority_email")} </label>
            <input type="text" id="add-approver-email" />
            
          </div>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
            }}
          >
            <label htmlFor="fileselectorinput">
            {t("kycPage.kycForm.id_proof_of_authority")}
            </label>
            {idProofApprovers.name}
            <input
            type="file"
            id="fileselectorinput"
            onChange={(e) => {
              setIdProofApprovers(e.target.files[0]);
             }}
            />
            
          </div>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
            }}
          >
            
          </div>
          <button
            onClick={() => {
              setApprovers((prev) => [
                ...prev,
                {
                  name: document.getElementById("add-approver-name").value,
                  lastName: document.getElementById(
                    "add-approver-last-name"
                  ).value,
                  designation: document.getElementById(
                    "add-approver-designation"
                  ).value,
                  email: document.getElementById("add-approver-email").value,

                },
              ]);
              setApproversDocument((prev) => [
                ...prev,
                {
                  idProofApprovers: idProofApprovers,
                },
              ]);
              setApproverDialog(false);
            }}
          >
            {t("kycPage.kycForm.add")}
          </button>
        </div>
      </Dialog>
    </div>
  );
};
