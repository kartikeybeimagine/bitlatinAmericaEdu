import { ethers } from "ethers";
import abi from "../../../Scripts/tokenContract.json";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useContext } from "react";
import { paymentApi } from "../../../Scripts/apiCalls";
import UserContext from "../../../../context/userContext/UserContext";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Contact from "../../../contact/Contact";

const Subscription = ({ setView, back }) => {
  const [isBuying, setIsBuying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({
    planName: "Silver Plan",
    noOfCerts: "1000",
    duration: "1 month",
    amount: 999,
  });
  const user = useContext(UserContext);

  const checkNetwork = async (network) => {
    const myProvider = new ethers.providers.Web3Provider(window.ethereum);
    const { chainId } = await myProvider.getNetwork();

    if (parseInt(chainId) !== parseInt(1)) {
      await promptForNetworkChange();
    }
  };

  const promptForNetworkChange = async () => {
    let ethereum = window.ethereum;
    try {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1" }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x1",
                chainName: "Ethereum Mainnet",
                rpcUrls: ["https://mainnet.infura.io/v3/"],
              },
            ],
          });
        } catch (addError) {
          alert("Could not add network.");
        }
      }
      //   alert("Could not switch network");
    }
  };

  const handleUSDT = async (amount, network, planName, duration) => {
    paymentApi({
      tx_hash: "",
      plan: planName,
      duration_days: 60,
      user_address: user.userAccount,
    }).then(async (res) => {
      setIsLoading(true);
      await user.poppulateUserData();
      setIsLoading(false);
    });

    return;

    await checkNetwork(network);

    amount = amount.toString() + "000000000000000000";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const tokenContract = new ethers.Contract(
      "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      abi,
      signer
    );

    tokenContract
      .transfer("0x5ebeea97fDF46cD56B5D65ea635Eb78213C522b5", amount)
      .then((res) => {
        setIsBuying(false);
        console.log(res);
        paymentApi({
          tx_hash: res.hash,
          plan: planName,
          duration_days: 60,
        }).then(async (res) => {
          setIsLoading(true);
          await user.poppulateUserData();
          setIsLoading(false);
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Transaction unsuccessful");
      });
  };

  const PlanCard = ({
    planName,
    noOfCerts,
    amount,
    isRecommended,
    duration,
  }) => {
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

        <div
          style={{
            background: "var(--primary)",
            color: "var(--secondary)",
            width: "100%",
          }}
        >
          <h1>{amount} $</h1>
          <h3>Valid :{duration}</h3>
        </div>

        <div
          style={{
            display: "flex",
            margin: "20px 0px",
          }}
        >
          <Button
            sx={{
              background: "var(--primary)",
              color: "var(--secondary)",
              display: "flex",
              width: "200px",
              borderRadius: "40px",
              fontSize: "20px",
            }}
            onClick={() => {
              setIsBuying(true);
              setSelectedPlan({
                planName: planName,
                noOfCerts: noOfCerts,
                amount: amount,
                duration: duration,
              });
            }}
          >
            Buy now
          </Button>
        </div>
      </div>
    );
  };

  const checkbalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const tokenContract = new ethers.Contract(
      "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      abi,
      signer
    );

    let balance = await tokenContract
      .balanceOf(window.ethereum.selectedAddress)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });

    return ethers.utils.formatEther(balance);
  };

  const BuyPage = () => {
    const [status, setStatus] = useState("");
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isBuying}
      >
        <Box
          sx={{
            background: "var(--secondary)",
            color: "var(--primary)",
            padding: "20px",
            borderRadius: "20px",
            minWidth: "350px",
          }}
        >
          <div
            style={{
              border: "1px solid red",
              color: "red",
              padding: "10px",
              fontSize: "20px",
              borderRadius: "20px",
              width: "20px",
              textAlign: "center",
            }}
            onClick={() => setIsBuying(false)}
          >
            X
          </div>
          <h1>{selectedPlan.planName}</h1>
          <h2>{selectedPlan.noOfCerts} CERTIFICATES</h2>
          <h2>Valid :{selectedPlan.duration}</h2>
          <div
            style={{
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              gap: "20px",
              margin: "50px 0px",
            }}
          >
            <Button
              sx={{
                background: "var(--primary)",
                color: "var(--secondary)",
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px",
                padding: "20px",
              }}
              onClick={async () => {
                let balance = await checkbalance();

                if (balance < selectedPlan.amount) {
                  setStatus(
                    "Insufficient balance. Available balance: " + balance
                  );
                } else
                  handleUSDT(
                    selectedPlan.amount,
                    selectedPlan.duration,
                    selectedPlan.planName
                  );
              }}
            >
              Buy with USDT
              <span style={{ fontSize: "20px" }}>
                {selectedPlan.amount} USDT
              </span>
              <span style={{ fontSize: "10px" }}>(Network: Polygon)</span>
            </Button>
            <Button
              sx={{
                background: "var(--primary)",
                color: "var(--secondary)",
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px",
                padding: "20px",
              }}
              onClick={() =>
                handleUSDT(
                  selectedPlan.amount,
                  selectedPlan.duration,
                  selectedPlan.planName
                )
              }
            >
              Buy with BUSD
              <span style={{ fontSize: "20px" }}>
                {selectedPlan.amount} BUSD
              </span>
              <span style={{ fontSize: "10px" }}>(Network: BNB)</span>
            </Button>
          </div>
          <div className="status">{status}</div>
        </Box>
      </Backdrop>
    );
  };
  const d = new Date(user.userData.subscription.end_Date);
  const end_date =
    d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
  console.log(end_date);

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
      {/* <h1>Select a Subscription Plan</h1> */}
      <h3>
        Current Plan: {parseInt(user.userData.nft_quota)} Certificates available
      </h3>
      <h3>Expiry Date: {end_date}</h3>
      <h2>Please contact us to get further access.</h2>
      <h2>Email us at support@beimagine.tech</h2>
      {/* <div
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
          duration="1 Month"
          isRecommended={false}
        />
        <PlanCard
          planName="Gold Plan"
          noOfCerts="10000"
          amount={4999}
          duration="3 Months"
          isRecommended={true}
        />
        <PlanCard
          planName="Platinum Plan"
          noOfCerts="1000000"
          amount={9999}
          duration="6 Months"
          isRecommended={false}
        />
      </div> */}
      <div style={{ marginTop: "50px" }}>
        <button onClick={back}>{"<"} Back</button>
      </div>
      {isBuying && <BuyPage />}
      {isLoading && <LoadingPage />}
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
      <CircularProgress />
    </Backdrop>
  );
};
