import React from 'react'
import './MenuItem.css'
import {Link} from "react-router-dom";
const MenuItem = ({Icon, text, selected,location}) => {
  return (
    <Link to={`/${location}`} style={{textDecoration: 'none'}}>
      
    <div className={`menuitem ${selected && 'selected'}`}>
        <Icon  fontSize="25px"/>
        <p className=''>{text}</p>
    </div>
    </Link>
  )
}


export default MenuItem