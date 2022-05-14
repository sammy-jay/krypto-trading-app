import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import {
  AdvancedRealTimeChart,
  Ticker,
  CopyrightStyles,
} from "react-ts-tradingview-widgets";
import SideBar from "../../components/SideBar/SideBar";

const styles = {
  parent: {
    fontSize: "0px",
    color: " #1e222d",
  },
  link: {
    textDecoration: "line-trough",
  },
  span: {
    color: " #1e222d;",
  },
};

const Trading = () => {
  return (
    <div className="app">
      <SideBar />
      <div className="dashboard">
        <NavBar location="Trading" />
        <AdvancedRealTimeChart
          theme="dark"
          width="100%"
          style={{ border: "none" }}
          copyrightStyles={styles}
        ></AdvancedRealTimeChart>
      </div>
    </div>
  );
};

export default Trading;
