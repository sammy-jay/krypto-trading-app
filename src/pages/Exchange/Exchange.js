import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
const Exchange = () => {
  return (
    <div className='app'>
        <SideBar/>
        <div className='dashboard'>
            <NavBar location='Exchange'/>
        </div>
    </div>
  )
}

export default Exchange