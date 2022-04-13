import React from 'react'
import './DashboardTopCard.css'
import {MdOutlineArrowDropUp} from 'react-icons/md'
import {MdOutlineArrowDropDown} from 'react-icons/md'
const DashboardTopCard = ({positive, percent, days, price, bgColor}) => {
  return (
    <div className='dashboardTopCard' style={{backgroundColor: bgColor}}>
        <p>{positive ? <MdOutlineArrowDropUp fontSize='25px' color='green'/> : <MdOutlineArrowDropDown fontSize='25px' color='red'/>} {percent}% ({days} days)</p>
        <h2>${price}</h2>
    </div>
  )
}

export default DashboardTopCard