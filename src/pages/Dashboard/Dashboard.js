import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import DashboardTopCard from "../../components/smallercomponents/DashboardTopCard";
import "./Dashboard.css";
import { TickerTape } from "react-ts-tradingview-widgets";
import { Timeline } from "react-ts-tradingview-widgets";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
import { EconomicCalendar } from "react-ts-tradingview-widgets";
import { MiniChart } from "react-ts-tradingview-widgets";

const Dashboard = () => {
  const styles = {
    parent: {
      fontSize: "0px",
      color: " #1e222d;",
    },
    link: {
      textDecoration: "line-trough",
    },
    span: {
      color: " #1e222d;",
    },
  };
  // if (localStorage.getItem("user") === null) {
  //   return <Navigate to="/auth" replace />;
  // }
  return (
    <div className="app">
      <SideBar />
      <div className="dashboard">
        <NavBar location="Dashboard" />
        <section className="topcards">
          <MiniChart
            colorTheme="dark"
            width="100%"
            copyrightStyles={styles}
          ></MiniChart>
          <MiniChart
            colorTheme="dark"
            width="100%"
            copyrightStyles={styles}
          ></MiniChart>
          <MiniChart
            colorTheme="dark"
            width="100%"
            copyrightStyles={styles}
          ></MiniChart>
          <MiniChart
            colorTheme="dark"
            width="100%"
            copyrightStyles={styles}
          ></MiniChart>
        </section>
        <section className="middle_cards">
          <article className="crypto_statistics">
            <Timeline
              colorTheme="dark"
              feedMode="market"
              market="crypto"
              height={700}
              width="100%"
              copyrightStyles={styles}
            ></Timeline>
          </article>
          <article className="market_overview">
            <EconomicCalendar
              colorTheme="dark"
              height={300}
              width="100%"
              copyrightStyles={styles}
            ></EconomicCalendar>
            <TechnicalAnalysis
              colorTheme="dark"
              width="100%"
              copyrightStyles={styles}
            ></TechnicalAnalysis>
          </article>
        </section>
        <section>
          <article className="quick_transfer"></article>
          <article className="market_orders">
            <div className="sell_order"></div>
            <div className="buy_order"></div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;

/*<DashboardTopCard
            positive
            percent={4}
            days={30}
            price="65,123"
            bgColor="#3793ff"
          />
          <DashboardTopCard
            percent={47}
            days={30}
            price="15,333"
            bgColor="#5b5e81"
          />
          <DashboardTopCard
            positive
            percent={17}
            days={30}
            price="7,025"
            bgColor="#ffab2e"
          />
          <DashboardTopCard
            percent={47}
            days={30}
            price="15,333"
            bgColor="#ad4cbd"
          /> */
