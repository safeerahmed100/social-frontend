import React from 'react'
import Dummy from '../assets/dummy.jpg'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    
    <div className="container border header">
      
    <div className="row ">
        <div className=" col-6">
            <h1>Social</h1>
        </div>
       
        <div className=" col-6 text-right">
        <NavLink to='/profile'><img src={Dummy}/>
        </NavLink>
        </div>
    </div>
</div>
  )
}

export default Header
