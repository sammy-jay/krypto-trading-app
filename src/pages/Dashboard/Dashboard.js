import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import DashboardTopCard from '../../components/smallercomponents/DashboardTopCard'
import THeader from '../../components/smallercomponents/transactions/THeader'
import TTable from '../../components/smallercomponents/transactions/TTable'
import './Dashboard.css'

const Dashboard = () => {
  return (
     <div className="app">
       <SideBar/>
    <div className='dashboard'>
      <NavBar location='Dashboard'/>
    <section className='topcards'>
      <DashboardTopCard positive percent={4} days={30} price='65,123' bgColor='#3793ff'/>
      <DashboardTopCard percent={47} days={30} price='15,333' bgColor='#5b5e81'/>
      <DashboardTopCard positive percent={17} days={30} price='7,025' bgColor='#ffab2e'/>
      <DashboardTopCard percent={47} days={30} price='15,333' bgColor='#ad4cbd'/>
     
    </section>
    <THeader/>
    <TTable/>
    </div> </div>
  )
}

export default Dashboard