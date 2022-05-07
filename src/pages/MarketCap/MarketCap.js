import React from 'react'
import './MarketCap.css'
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
                  <tr>
                    <td className='market__special'><span>#1</span></td>
                    <td>Bitcoin</td>
                    <td>$39,534.16</td>
                    <td className='positive_trend'>2.54%</td>
                    <td>$220,083,001,631</td>
                    <td>...</td>
                </tr>
                  <tr>
                    <td className='market__special'><span>#2</span></td>
                    <td>Ethereum</td>
                    <td>$392.236</td>
                    <td  className='positive_trend'>2.54%</td>
                    <td>$083,001,631</td>
                    <td>...</td>
                </tr>
                  <tr>
                    <td className='market__special'><span>#3</span></td>
                    <td>LiteCoin</td>
                    <td>$39,534.16</td>
                    <td className='negative_trend'>2.54%</td>
                    <td>$220,083,001,631</td>
                    <td>...</td>
                </tr>
                  <tr>
                    <td className='market__special'>#4</td>
                    <td>Bitcoin</td>
                    <td>$39,534.16</td>
                    <td className='positive_trend'>2.54%</td>
                    <td>$220,083,001,631</td>
                    <td>...</td>
                </tr>
                  <tr>
                    <td className='market__special'>#5</td>
                    <td>Ethereum</td>
                    <td>$392.236</td>
                    <td  className='positive_trend'>2.54%</td>
                    <td>$083,001,631</td>
                    <td>...</td>
                </tr>
                  <tr>
                    <td className='market__special'>#6</td>
                    <td>Bitcoin</td>
                    <td>$39,534.16</td>
                    <td className='negative_trend'>2.54%</td>
                    <td>$220,083,001,631</td>
                    <td>...</td>
                </tr>
                  <tr>
                    <td className='market__special'>#7</td>
                    <td>Bitcoin</td>
                    <td>$39,534.16</td>
                    <td className='positive_trend'>2.54%</td>
                    <td>$220,083,001,631</td>
                    <td>...</td>
                </tr>
                  <tr>
                    <td className='market__special'>#8</td>
                    <td>Ethereum</td>
                    <td>$392.236</td>
                    <td  className='positive_trend'>2.54%</td>
                    <td>$083,001,631</td>
                    <td>...</td>
                </tr>
                  <tr>
                    <td className='market__special'>#9</td>
                    <td>Bitcoin</td>
                    <td>$39,534.16</td>
                    <td className='negative_trend'>2.54%</td>
                    <td>$220,083,001,631</td>
                    <td>...</td>
                    </tr>
              </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default MarketCap