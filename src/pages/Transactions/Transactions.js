import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import THeader from '../../components/smallercomponents/transactions/THeader'
import TTable from '../../components/smallercomponents/transactions/TTable'
const Transactions = () => {
  return (
    <div className='app'>
        <SideBar/>
        <div className='dashboard'>
            <NavBar location='Transactions'/>
            <THeader/>
            <TTable/>
        </div>
    </div>
  )
}

export default Transactions