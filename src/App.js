import "./App.css";
import React,{useEffect} from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transactions from "./pages/Transactions/Transactions";
import Trading from "./pages/Trading/Trading";
import Wallet from "./pages/Wallet/Wallet";
import Settings from "./pages/Settings/Settings";
import Exchange from "./pages/Exchange/Exchange";
import MarketCap from "./pages/MarketCap/MarketCap";
import Verify from "./pages/Auth/Verify";
import { getMarketData } from "./actions/authActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getMarketData())
  },[])
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/trading" element={<Trading />} />
      <Route path="/marketcap" element={<MarketCap />} />
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/contacts" element={<Exchange />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
