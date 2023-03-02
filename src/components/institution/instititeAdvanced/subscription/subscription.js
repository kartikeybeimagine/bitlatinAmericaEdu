import { ethers } from "ethers";
import abi from "../../../Scripts/tokenContract.json";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useContext } from "react";
import { paymentApi } from "../../../Scripts/apiCalls";
import UserContext from "../../../../context/userContext/UserContext";
import { Button } from "@mui/material";

const Subscription = ({ setView, back }) => {
  const [isLoading, setIsLoading] = useState(false);
  const user = useContext(UserContext);

  const handleUSDT = async (amount) => {
    amount = amount.toString() + "000000000000000000";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const tokenContract = new ethers.Contract(
      "0x75e8Dd78D660C611157a79bF518F04f37Cc7493C",
      abi,
      signer
    );

    tokenContract
      .transfer("0xE858f0370b101cD3F58E03F18BFA1240a591b5Fa", amount)
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        paymentApi({ tx_hash: res.hash }).then((res) =>
          user.poppulateUserData()
        );
      })
      .catch((err) => {
        console.log(err);
        alert("Transaction unsuccessful");
      });
  };

  const PlanCard = ({ planName, noOfCerts, amount, isRecommended }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid black",
          borderRadius: "20px",
          background: "var(--secondary)",
          color: "var(--primary)",
          width: "300px",
          transform: isRecommended ? "scale(1.1)" : "none",
          boxShadow: "10px 10px 10px 5px rgba(0, 0, 0, 0.5) ",
        }}
      >
        <div
          style={{
            background: "var(--primary)",
            color: "var(--secondary)",
            width: "100%",
            borderRadius: "20px 20px 0px 0px",
          }}
        >
          <h1>{planName}</h1>
        </div>
        <div style={{ fontSize: "50px" }}>{noOfCerts}</div>
        <div style={{ fontSize: "25px" }}>CERTIFICATES</div>
        {/* <h2>CERTIFICATES</h2> */}

        <div
          style={{
            background: "var(--primary)",
            color: "var(--secondary)",
            width: "100%",
          }}
        >
          <h1>{amount} $</h1>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            margin: "20px 0px",
          }}
        >
          <Button
            sx={{
              background: "var(--primary)",
              color: "var(--secondary)",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={() => handleUSDT(amount)}
          >
            Buy with USDT
            <span style={{ fontSize: "10px" }}>(Network: Polygon)</span>
          </Button>
          <Button
            sx={{
              background: "var(--primary)",
              color: "var(--secondary)",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={() => handleUSDT(amount)}
          >
            Buy with BUSD
            <span style={{ fontSize: "10px" }}>(Network: BNB)</span>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Select a Subscription Plan</h1>
      <h3>
        Current Plan: {parseInt(user.userData.nft_quota)} Certificates available
      </h3>
      <div
        style={{
          display: "flex",
          gap: "50px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          margin: "50px 0px",
        }}
      >
        <PlanCard
          planName="Silver Plan"
          noOfCerts="1000"
          amount={999}
          isRecommended={false}
        />
        <PlanCard
          planName="Gold Plan"
          noOfCerts="10000"
          amount={4999}
          isRecommended={true}
        />
        <PlanCard
          planName="Platinum Plan"
          noOfCerts="1000000"
          amount={9999}
          isRecommended={false}
        />
      </div>
      <div style={{ marginTop: "50px" }}>
        <button onClick={back}>{"<"} Back</button>
      </div>
    </div>
  );
};

export default Subscription;

const LoadingPage = () => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
