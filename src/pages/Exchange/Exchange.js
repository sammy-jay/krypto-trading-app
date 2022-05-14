import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import { Screener } from "react-ts-tradingview-widgets";

const Exchange = () => {
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
  return (
    <div className="app">
      <SideBar />
      <div className="dashboard">
        <NavBar location="Screener" />
        <Screener
          colorTheme="dark"
          width="100%"
          market="crypto"
          // height={500}
          copyrightStyles={styles}
        ></Screener>
      </div>
    </div>
  );
};

export default Exchange;
