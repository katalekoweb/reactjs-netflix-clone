import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import serachIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profileIcon from '../../assets/profile_img.png'
import caretIcon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const navRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', () => {

      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      } else {
        navRef.current.classList.remove('nav-dark')
      }

    })
  }, [])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar">
        <div className="navbar-left">
          <Link to={'/'}>
          <img src={logo} alt="" />
          </Link>

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
              <p onClick={() => {logout()}}>Sign Out of Netflix</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
