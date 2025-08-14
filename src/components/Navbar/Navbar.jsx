import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import serachIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profileIcon from '../../assets/profile_img.png'
import caretIcon from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="" />

          <ul>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browser by languages</li>
          </ul>
        </div>
        <div className="navbar-right">
          <img src={serachIcon} className='icons' alt="" />
          <p>Children</p>
          <img src={bellIcon} className='icons' alt="" />

          <div className="navbar-profile">
            <img src={profileIcon} className='profile' alt="" />
            <img src={caretIcon} className='' alt="" />
            
            <div className="dropdown">
              <p>Sign Out of Netflix</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
