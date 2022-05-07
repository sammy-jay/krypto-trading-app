import React from 'react'
import './Settings.css'
import {FaUserCircle} from 'react-icons/fa'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
const Settings = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className='app'>
        <SideBar/>
        <div className='dashboard'>
            <NavBar location='Settings'/>
            <section className='settings'>
              <div>
                <FaUserCircle/>
              </div>
              <div className='settings_two'>
                <div>
                  <p>Display Name</p>
                  <h5>{user?.fullname}</h5>
                </div>
                <div>
                  <p>Email</p>
                  <h5>{user?.email}</h5>
                </div>
                <div>
                  <p>Password</p>
                  <h5>*********</h5>
                </div>
                <button>Change</button>
              </div>
              <button className='signout_btn'>Sign Out</button>
            </section>
        </div>
    </div>
  )
}

export default Settings