import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Auth from './pages/Auth/Auth';
import Dashboard from './pages/Dashboard/Dashboard';
import Transactions from './pages/Transactions/Transactions';
import Trading from './pages/Trading/Trading';
import Wallet from './pages/Wallet/Wallet';
import Settings from './pages/Settings/Settings';
import Exchange from './pages/Exchange/Exchange';
import MarketCap from './pages/MarketCap/MarketCap';
import {getMarketData} from './actions/authActions'

function App() {
  const login = async () => {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      'email': 'ajayitaiwo89+2@gmail.com',
      'password': '11111111'
    })

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirects: 'follow'
    }

    fetch('https://api.trycoingro.com/api/v1/auth/login', requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMarketData())
    login()
  }, [])
  
  return (
    <Routes>
          <Route path='/' element={<Navigate to="/auth" />} />
          <Route path='/auth' element={<Auth/>}/>
          <Route  path='/dashboard' element={<Dashboard/>}/>
          <Route  path='/wallet' element={<Wallet/>}/>
          <Route  path='/transactions' element={<Transactions/>}/>
          <Route  path='/trading' element={<Trading/>}/>
          <Route  path='/marketcap' element={<MarketCap/>}/>
          <Route  path='/exchange' element={<Exchange/>}/>
          <Route  path='/settings' element={<Settings/>}/>
    </Routes>
    
   
  );
}

export default App;
