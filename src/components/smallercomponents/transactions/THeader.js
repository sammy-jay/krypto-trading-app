import React from 'react'
import './THeader.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {HiDownload} from 'react-icons/hi'
import {IoIosArrowDown} from 'react-icons/io'
import {BsCalendar4} from 'react-icons/bs'


const THeader = () => {
  return (
    <div className='theader'>
        <div className='first'>
            <input type="text" placeholder='Search Here'/>
             <AiOutlineSearch  fontSize="17px"/>
        </div>
        <div className='spacer'/>
        <div className='second'>
            <div className='filter'>
             <BsCalendar4  fontSize="20px"/> 
                <div>
                    <h5>Filter Period</h5>
                    <p>4 June 2020 - 4 July 2020</p>
                </div>
             <IoIosArrowDown  fontSize="20px"/>                

            </div>
            <div className='saver'>
                 <HiDownload  fontSize="20px"/>
                <p>Save to CSV</p>
            </div>
        </div>
    </div>
  )
}

export default THeader