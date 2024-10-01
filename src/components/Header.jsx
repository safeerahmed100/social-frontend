import React, { useState } from 'react'
import Dummy from '../assets/dummy.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import api, { setAuthToken } from '../api'; 

function Header() {
  const [isOpen , setIsOpen]= useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
        const response = await api.post('/logout', null, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });

        if (response.status === 200) {
            localStorage.clear(); 
            setAuthToken(null); 
            navigate('/'); 
        }
    } catch (error) {
        console.error('Logout failed:', error);
        // Handle any errors here (e.g., show a notification)
    }
};



  const toggleMenu = () =>{
    setIsOpen(!isOpen)
  }

  return (
    
    <div className="container py-3 header border header">
      
    <div className="row ">
        <div className=" col-6">
            <h1>Social</h1>
        </div>
       
        <div className=" col-6 text-right">
        <img className='profile_image' onClick={toggleMenu} src={Dummy}/>
        { isOpen &&(
         <div className='menus p-3 border'>
         <NavLink to='/profile'>My Profile</NavLink>
         <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
         </div>
        )
        }
       
        </div>
    </div>
</div>
  )
}

export default Header
