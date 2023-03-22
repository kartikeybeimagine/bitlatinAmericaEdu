import React from "react";
import { useState, useEffect, useContext } from "react";
import "./admin.css";
import AddAdminPage from "./addAdminPage";
import UserContext from "../../context/userContext/UserContext";
import { adminApi, userApi,SubsForDev} from "../Scripts/apiCalls";
import UserDetailsContainer from "./userdetailsContainer";

export const AdminPage = () => {
  const user = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [status, setStatus] = useState("Checking credentials...");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    checkAdminCredentials();
  }, [user]);

  const checkAdminCredentials = () => {
    adminApi({ account: user.userAccount })
      .then((res) => {
        setStatus("");
        setIsAdmin(true);
        poppulateUserData();
      })
      .catch((err) => {
        setIsAdmin(false);
        setStatus("Please connect with an admin account.");
      });
  };

  const poppulateUserData = () => {
    userApi({ account: user.userAccount, querry_all: "querry_all" })
      .then((res) => {
        console.log(res);
        setUsers(res);
      })
      .catch((err) => {
        setStatus("Something went wrong.");
      });
  };

  return (
    <div className="adminpage">
      {status}
      {isAdmin && (
        <div className="adminTabs">
          <AddAdminPage />
          {users.length > 0 && (
            <UserDetailsContainer users={users} update={poppulateUserData} />
          )}
          <div>
            <h2>Change Certificate Limit</h2>
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                margin: "20px 0px",
              }}
            >
              <label htmlFor="limit-changer-account">Account: </label>
              <input type="text" id="limit-changer-account" />
            </div>
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                margin: "20px 0px",
              }}
            >
              <label htmlFor="limit-changer-limit">NFT Limit: </label>
              <input type="number" id="limit-changer-limit" />
            </div>
            <button
              onClick={() => {
                userApi({
                  account: document.getElementById("limit-changer-account")
                    .value,
                  admin: user.userAccount,
                  nft_quota: document.getElementById("limit-changer-limit")
                    .value,
                })
                  .then((res) => {
                    console.log(res);
                    alert("Limit changed successfully.")
                  })
                  .then((err) => {
                    console.log(err);
                  });
              }}
            >
              Change
            </button>
          </div>
          <div>
            <h2>Subscription</h2>
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                margin: "20px 0px",
              }}
            >
              <label htmlFor="limit-changer-account">Account: </label>
              <input type="text" id="subs-account" />
            </div>
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                margin: "20px 0px",
              }}
            >
              <label htmlFor="limit-changer-limit">Plan: </label>
              <input type="text" id="sub-plan" />
            </div>
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                margin: "20px 0px",
              }}
            >
              <label htmlFor="limit-changer-limit">Days: </label>
              <input type="number" id="duration_in_days" />
            </div>
            <button
              onClick={() => {
                SubsForDev({
                  user_address: document.getElementById("subs-account")
                    .value,
                  plan: document.getElementById("sub-plan")
                    .value,
                  duration_days: document.getElementById("duration_in_days")
                    .value,
                })
                  .then((res) => {
                    console.log(res);
                    alert("Subscription successful");
                  })
                  .then((err) => {
                    console.log(err);
                    alert("Subscription failed");
                  });
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
