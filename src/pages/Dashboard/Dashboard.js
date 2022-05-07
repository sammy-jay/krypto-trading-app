import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import DashboardTopCard from "../../components/smallercomponents/DashboardTopCard";
import "./Dashboard.css";

const Dashboard = () => {
  if (localStorage.getItem("user") === null) {
    return <Navigate to="/auth" replace />;
  }
  return (
    <div className="app">
      <SideBar />
      <div className="dashboard">
        <NavBar location="Dashboard" />
        <section className="topcards">
          <DashboardTopCard
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
          />
        </section>
        <section className="middle_cards">
          <article className="crypto_statistics">
            <div className="crypto_statistics_one">
              <div className="crypto_statistics_one_first">
                <h3>Crypto Statistics</h3>
                <p>Lorem ipsum dolor consectetur adipisicing.</p>
              </div>
              <div className="crypto_statistics_one_second">
                <p>Date</p>
                <p>Value</p>
              </div>
            </div>
            <div className="crypto_statistics_two">
              <p>Bitcoin</p>
              <p>Ripple</p>
              <p>Ethereum</p>
              <p>LiteCoin</p>
            </div>
            <div className="crypto_statistics_three">
              <h1>Chart Here</h1>
            </div>
          </article>
          <article className="market_overview">
          <div className="market_overview_one">
              <div className="market_overview_one_first">
                <h3>Market Overview</h3>
                <p>Lorem ipsum dolor consectetur adipisicing.</p>
              </div>
              <div className="market_overview_one_second">
                <p>Get Report</p>
              </div>
            </div>
            <div className="market_overview_two">
              <p>Week</p>
              <p>Month</p>
              <p>Year</p>
            </div>
            <div className="market_overview_three">
              <h1>Chart Here</h1>
            </div>
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
