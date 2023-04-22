import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import facebook from '../../images/NavIcons/facebook.png'
import React from 'react'

import logo from '../../images/logo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav-container'>
       <div className='contact-nav'>
          <div className='phone-email'>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faPhone} style={{marginRight:'10px'}}/>
                    <span>(+1)3344999999</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faEnvelope} style={{marginRight:'10px'}}/>
                <span>info@reactheme.com</span>
            </li>
            </ul>

            
          </div>
          <div className='social'>
          <img style={{backgroundColor:'white', borderRadius:'50%'}} src={facebook}/>
           
          </div>
       </div>



       <div className='navbar'>

       <div className='logo'>
        <img src={logo}/>
       </div>
       <div className='dropdown'>


       <ul className='nav-options'>

       <li style={{color:'#D2093C'}}>Home
       <ul class="dropdown">
       <li>Home1</li>
       <li>Home2</li>
       <li>Home3</li>

     </ul>
       </li>
       <li> Pages
         <ul class="dropdown">
         <li>About</li>
         <li>Instructor</li>
         <li>Profile</li>
         <li>Login</li>
         <li>SignUp</li>
         <li>Events</li>
         </ul>
       </li>
       <li> Course
       <ul class="dropdown">
       <li>Course</li>
       <li>Right SideBar</li>
       <li>Course List</li>
       <li>CourseSingle</li>




     </ul>
       </li>
       <li> Blog
       <ul class="dropdown">
       <li>Blog</li>
       <li>Blog Single</li>
     </ul>
       </li>
       <li>Contact</li>
     </ul>
       </div>
       
          
       </div>

    </div>
  )
}

export default Navbar