import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import THeader from '../../components/smallercomponents/transactions/THeader'
import { useSelector } from "react-redux";
const MarketCap = () => {
  const marketData = useSelector((state)=> state.authReducer.marketData)
 
  console.log(Array(marketData));
  return (
    <div className='app'>
        <SideBar/>
        <div className='dashboard'>
            <NavBar location='Market Cap'/>
             <THeader/>
              <div className='ttable'>
        <table>
            <thead>
                <tr>
                    <th><span>Rank</span></th>
                    <th><span>Coin</span></th>
                    <th><span>Last Price</span> </th>
                    <th><span>Change (24h)</span></th>
                    <th><span>Volume (24h)</span></th>
                    <th><span>Graph</span></th>
                   
                    
                </tr>
            </thead>
            <tbody>
              {/* {marketData && marketData.map((data) => {
                return(
                  <tr>
                   
                    <td>#43453251612</td>
                    <td>2/5/2020 06:24AM</td>
                    <td>Thomas</td>
                    <td>Samuel</td>
                    <td>Bitcoin</td>
                    <td>+$5,564</td>
                   
                </tr>
                )
              })} */}
              </tbody>
        </table>
    </div>
    </div>
    </div>
  )
}

export default MarketCap