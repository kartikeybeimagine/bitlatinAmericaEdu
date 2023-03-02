import "./dashboard.css";
import React from "react";
import { SubNavbar } from "./SubNavbar";
import { SideBar } from "./SideBar";
import { Contentdashboard } from "./Contentdashboard";

const Dashboard = () => {
  return (
    <div className="dashboardpage1">
      <SubNavbar />
      <div className="dashboardmain">
        <SideBar />
        <Contentdashboard />
      </div>
    </div>
  );
};

export default Dashboard;














