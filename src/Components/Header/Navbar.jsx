import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import facebook from '../../images/NavIcons/facebook.png'
import React,{useState} from 'react'



import logo from '../../images/logo.png'
import './Navbar.css'
const Navbar = () => {

  window.addEventListener('scroll', () => {
    var nav = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      nav.style.top = '0';
    } else {
      nav.style.top = '';
    }
  });


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



       <div className='navbar' >

       <div className='logo'>
        <img src={logo}/>
       </div>

       <div className='main-dropdown'>


       <ul className='nav-options'>

       <li style={{color:'#D2093C'}}>Home
       <ul className="sub-dropdown">
       <li>Home1</li>
       <li>Home2</li>
       <li>Home3</li>

     </ul>
       </li>
       <li> Pages
         <ul className="sub-dropdown">
         <li>About</li>
         <li>Instructor</li>
         <li>Profile</li>
         <li>Login</li>
         <li>SignUp</li>
         <li>Events</li>
         </ul>
       </li>
       <li> Course
       <ul className="sub-dropdown">
       <li>Course</li>
       <li>Right SideBar</li>
       <li>Course List</li>
       <li>CourseSingle</li>




     </ul>
       </li>
       <li> Blog
       <ul className="sub-dropdown">
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