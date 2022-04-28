import React from 'react'
import MenuItem from '../smallercomponents/MenuItem'
import {RiDashboardLine} from 'react-icons/ri'
import {HiOutlineChartSquareBar} from 'react-icons/hi'
import {RiExchangeBoxLine} from 'react-icons/ri'
import {IoWalletOutline} from 'react-icons/io5'
import {IoSettingsOutline} from 'react-icons/io5'
import {RiExchangeFundsLine} from 'react-icons/ri'
import {RiExchangeDollarLine} from 'react-icons/ri'
import {BiBarChart} from 'react-icons/bi'
import {RiContactsLine} from 'react-icons/ri'
import './SideBar.css'
const SideBar = () => {
  return (
    <div className='sidebar'>
        <h1>Jiade</h1>
        <p className='sidebar-p'>Main Menu</p>
        <MenuItem Icon={RiDashboardLine} text='dashboard' selected location='dashboard'/>
         <MenuItem Icon={IoWalletOutline} text='My Wallet' location='wallet'/>
        <MenuItem Icon={RiExchangeFundsLine} text='Transactions' location='transactions'/>
        <MenuItem Icon={RiExchangeDollarLine} text='trading' location='trading'/>
        <MenuItem Icon={RiExchangeBoxLine} text='exchange' location='exchange'/>
        <MenuItem Icon={BiBarChart} text='market cap' location='marketcap'/>
       <p className='sidebar-p'>Others</p>
        <MenuItem Icon={RiContactsLine} text='contacts' location='dashboard'/>
        <MenuItem Icon={IoSettingsOutline} text='settings' location='settings'/>
    </div>
  )
}

export default SideBar