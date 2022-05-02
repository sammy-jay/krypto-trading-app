import React from 'react'
import {useLocation} from 'react-router-dom'
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

const allMenu = [{
    id: 1,
    Icon: RiDashboardLine,
    text: 'dashboard',
    location: 'dashboard',
    selected: true
  },
  {
    id: 2,
    Icon: IoWalletOutline,
    text: 'my wallet',
    location: 'wallet',
    selected: false
  },
  {
    id: 3,
    Icon: RiExchangeFundsLine,
    text: 'transactions',
    location: 'transactions',
    selected: false
  },
 {
    id: 4,
    Icon: RiExchangeDollarLine,
    text: 'trading',
    location: 'trading',
    selected: false
  },
 {
    id: 5,
    Icon: RiExchangeBoxLine,
    text: 'exchange',
    location: 'exchange',
    selected: false
  },
 {
    id: 6,
    Icon: BiBarChart,
    text: 'market cap',
    location: 'marketcap',
    selected: false
  },

 {
    id: 7,
    Icon: IoSettingsOutline,
    text: 'settings',
    location: 'settings',
    selected: false
  },
]
const SideBar = () => {
  const [menuItems,setMenuItems] = React.useState()
  const {pathname} = useLocation()
  const handlePathname = ()=>{
    const newMenu = allMenu.map((item) => {
    if (item.location == pathname.slice(1)) {item.selected = true;}
    else if (item.location == '/') {item.selected = true;}
    else{item.selected = false}
  })
  setMenuItems(newMenu)
  }
const handleClick = (id)=> {
  const newMenu = allMenu.map((item) => {
    if (item.id === id) {item.selected = true;}
    else{item.selected = false}
  })
  setMenuItems(newMenu)
}


React.useEffect(() => {
 handlePathname()
 setMenuItems(allMenu)

},[])
React.useEffect(() => {
  // console.log('object');
},[menuItems])

  return (
    <div className='sidebar'>
        <h1>Jiade</h1>
        <p className='sidebar-p'>Main Menu</p>
        {menuItems && menuItems.slice(0,-1).map((item) => {
          return(
            <section key={item.id} onClick={()=>handleClick(item.id)}><MenuItem {...item}/></section>
          )
        })}
      
       <p className='sidebar-p'>Others</p>
       {menuItems && menuItems.slice(-1).map((item) => {
          return(
             <section key={item.id} onClick={()=>handleClick(item.id)}><MenuItem  {...item}/></section>
          )
        })}
        
    </div>
  )
}

export default SideBar